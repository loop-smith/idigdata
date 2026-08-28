import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import {
  ContactSchema,
  sanitizeHeaderField,
  type ContactPayload,
} from "@/lib/contact/schema";
import { getDigOpsSupabaseForContact } from "@/lib/server/digopsSupabase";
import { guardJsonPost, parseBoundedJson } from "@/lib/server/requestSecurity";

export const runtime = "nodejs";

type CrmInsertResult =
  | { ok: true; id: string | null }
  | { ok: false; error: "not_configured" | "insert_failed" };

async function insertContactRow(row: Record<string, unknown>): Promise<CrmInsertResult> {
  const supabase = getDigOpsSupabaseForContact();
  if (!supabase) {
    console.warn("contact form: DigOps Supabase env not configured");
    return { ok: false, error: "not_configured" };
  }

  if (supabase.canReturnInsertedId) {
    const { data: inserted, error } = await supabase.client
      .from("contact_submissions")
      .insert(row)
      .select("id")
      .single();

    if (error || !inserted) {
      console.error(
        `contact form: contact_submissions insert failed: ${
          error?.message ?? "no row returned"
        }`,
      );
      return { ok: false, error: "insert_failed" };
    }

    return { ok: true, id: inserted.id as string };
  }

  const { error } = await supabase.client.from("contact_submissions").insert(row);
  if (error) {
    console.error(`contact form: contact_submissions insert failed: ${error.message}`);
    return { ok: false, error: "insert_failed" };
  }

  return { ok: true, id: null };
}

async function writeCrmIntake(
  data: ContactPayload,
  req: NextRequest,
): Promise<CrmInsertResult> {
  return insertContactRow({
    name: data.name,
    email: data.email,
    role: data.role.trim() || "(not supplied)",
    company: data.company.trim() || null,
    message: data.message.trim() || "(no message supplied)",
    source: `website-${data.interestType}`,
    source_url: req.headers.get("referer"),
    user_agent: req.headers.get("user-agent"),
    anon_session_id: data.anon_session_id?.trim() || null,
    status: "received",
  });
}

async function stampNotifyStatus(
  id: string | null,
  status: "notified" | "notify_failed" | "notify_not_configured",
) {
  if (!id) return;
  const supabase = getDigOpsSupabaseForContact();
  if (!supabase) return;
  const { error } = await supabase.client
    .from("contact_submissions")
    .update({ status })
    .eq("id", id);
  if (error) {
    console.error(`contact form: notify status stamp failed: ${error.message}`);
  }
}

async function sendNotifyEmail(input: {
  apiKey: string;
  fromAddr: string;
  notifyTo: string;
  replyTo: string;
  subject: string;
  text: string;
}): Promise<boolean> {
  const resend = new Resend(input.apiKey);
  const { error } = await resend.emails.send({
    from: input.fromAddr,
    to: input.notifyTo,
    replyTo: input.replyTo,
    subject: input.subject,
    text: input.text,
  });
  if (error) {
    console.error("contact form email error:", error);
    return false;
  }
  return true;
}

export async function POST(req: NextRequest) {
  const guard = guardJsonPost(req, {
    maxBytes: 16 * 1024,
    rateLimits: [
      { name: "contact-1m", windowMs: 60 * 1000, max: 3 },
      { name: "contact-10m", windowMs: 10 * 60 * 1000, max: 6 },
      { name: "contact-hour", windowMs: 60 * 60 * 1000, max: 20 },
    ],
  });
  if (guard) return guard;

  const bodyResult = await parseBoundedJson(req, 16 * 1024);
  if (!bodyResult.ok) return bodyResult.response;
  const body = bodyResult.body;

  const honeypot = (body as { _hp?: string })?._hp;
  if (honeypot && honeypot.length > 0) {
    return NextResponse.json({ ok: true, lead_id: "silenced" });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ ok: false, error: "validation_failed" }, { status: 400 });
  }

  const { name, email, role, company, message, interestType } = parsed.data;
  const safeName = sanitizeHeaderField(name);
  const safeEmail = sanitizeHeaderField(email);

  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.EMAIL_NOTIFY_TO ?? "robert@idigdata.com";
  const fromAddr =
    process.env.EMAIL_NOTIFY_FROM ?? "idigdata website <noreply@idigdata.com>";

  const subject = `[idigdata] Reach out: ${safeName} / ${safeEmail}`;
  const lines = [
    `From: ${safeName} <${safeEmail}>`,
    role ? `Role: ${sanitizeHeaderField(role)}` : null,
    company ? `Company: ${sanitizeHeaderField(company)}` : null,
    `Interest: ${interestType}`,
    ``,
    `Message:`,
    message.trim().length > 0 ? message : "(no message supplied)",
    ``,
    `---`,
    `Source: ${req.headers.get("referer") ?? "unknown"}`,
    `User-Agent: ${req.headers.get("user-agent") ?? "unknown"}`,
    `Session: ${parsed.data.anon_session_id ?? "none"}`,
    `Timestamp: ${new Date().toISOString()}`,
  ].filter((l): l is string => l !== null);

  const crm = await writeCrmIntake(parsed.data, req);
  if (!crm.ok) {
    return NextResponse.json({ ok: false, error: "crm_failed" }, { status: 500 });
  }

  let notification: "sent" | "not_configured" | "failed" = "sent";
  if (!apiKey) {
    notification = "not_configured";
    console.error("contact form: RESEND_API_KEY not set");
    await stampNotifyStatus(crm.id, "notify_not_configured");
  } else {
    const payload = {
      apiKey,
      fromAddr,
      notifyTo,
      replyTo: safeEmail,
      subject,
      text: lines.join("\n"),
    };
    let sent = false;
    try {
      sent = await sendNotifyEmail(payload);
      if (!sent) sent = await sendNotifyEmail(payload);
    } catch (err) {
      console.error("contact form email error:", err);
    }
    if (sent) {
      await stampNotifyStatus(crm.id, "notified");
    } else {
      notification = "failed";
      await stampNotifyStatus(crm.id, "notify_failed");
    }
  }

  return NextResponse.json(
    { ok: true, lead_id: crm.id, notification },
    { status: notification === "sent" ? 200 : 202 },
  );
}
