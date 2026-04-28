import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  company: z.string().min(1).max(200),
  role: z.string().min(1).max(120),
  message: z.string().min(1).max(2000),
  _hp: z.string().max(0).optional(),
});

export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid_json" }, { status: 400 });
  }

  if (body._hp && body._hp.length > 0) {
    return NextResponse.json({ ok: true, lead_id: "silenced" });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation_failed", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const { name, email, company, role, message } = parsed.data;

  const supabase = createClient(
    process.env.IDIGDATA_APP_SUPABASE_URL!,
    process.env.IDIGDATA_APP_SUPABASE_ANON_KEY!,
  );

  // Insert-only: anon role has INSERT but not SELECT on leads (correct architecture).
  // Don't chain .select() — RETURNING requires SELECT permission and would 42501.
  // Lead UUID lives in idigdata-app's CRM; lookup by name/email/timestamp on that side.
  const { error: dbError } = await supabase.from("leads").insert({
    name,
    email,
    company,
    role,
    message,
    source: "website-contact",
    source_url: req.headers.get("referer") ?? "https://idigdata.com/contact",
    user_agent: req.headers.get("user-agent") ?? null,
  });

  if (dbError) {
    console.error("contact form db error:", dbError);
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    await resend.emails.send({
      from: "idigdata website <noreply@idigdata.com>",
      to: process.env.EMAIL_NOTIFY_TO!,
      replyTo: email,
      subject: `New lead: ${name} at ${company} (${role})`,
      text: [
        `From: ${name} <${email}>`,
        `Company: ${company}`,
        `Role: ${role}`,
        ``,
        `Message:`,
        message,
        ``,
        `---`,
        `Lead ID: (DB-side; check idigdata-app CRM)`,
        `DB insert: ${dbError ? "FAILED — " + dbError.message : "ok"}`,
        `Source: website-contact (${req.headers.get("referer") ?? "unknown"})`,
        `User-Agent: ${req.headers.get("user-agent") ?? "unknown"}`,
      ].join("\n"),
    });
  } catch (emailError) {
    console.error("contact form email fallback error:", emailError);
    if (dbError) {
      return NextResponse.json({ ok: false, error: "all_paths_failed" }, { status: 500 });
    }
  }

  return NextResponse.json({ ok: true });
}
