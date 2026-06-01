import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { Resend } from "resend";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  role: z.string().max(120).optional().default(""),
  company: z.string().max(200).optional().default(""),
  message: z.string().max(4000).optional().default(""),
  interestType: z
    .enum([
      "general",
      "embedded",
      "fractional",
      "agentics",
      "speaking",
      "article_request",
    ])
    .optional()
    .default("general"),
  articleSlug: z.string().max(80).optional(),
  articleSlugs: z.array(z.string().max(80)).max(10).optional(),
  _hp: z.string().max(0).optional(),
});

const ARTICLE_TITLES: Record<string, string> = {
  "transformation-and-the-people-of-it":
    "You Don't Buy a Transformation. Your People Build One.",
  "the-mechanics": "You Don't Run a Project. You Build an Asset.",
  "production-agentics": "Production Agentics: The Business Asset",
};

function humanTitleFor(slug: string): string {
  return ARTICLE_TITLES[slug] ?? slug;
}

type ParsedContact = z.infer<typeof ContactSchema>;

function getIdigdataAppSupabase() {
  const url = process.env.IDIGDATA_APP_SUPABASE_URL;
  const serviceRoleKey = process.env.IDIGDATA_APP_SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.IDIGDATA_APP_SUPABASE_ANON_KEY;
  const key = serviceRoleKey ?? anonKey;

  if (!url || !key) return null;

  return {
    canReturnInsertedId: Boolean(serviceRoleKey),
    client: createClient(url, key, {
      auth: {
        persistSession: false,
        autoRefreshToken: false,
      },
    }),
  };
}

async function insertCrmRow(
  table: "article_requests" | "contact_submissions",
  row: Record<string, unknown>,
): Promise<string | null> {
  const supabase = getIdigdataAppSupabase();
  if (!supabase) {
    console.warn("contact form: idigdata-app Supabase env not configured");
    return null;
  }

  if (supabase.canReturnInsertedId) {
    const { data: inserted, error } = await supabase.client
      .from(table)
      .insert(row)
      .select("id")
      .single();

    if (error || !inserted) {
      console.error(
        `contact form: ${table} insert failed: ${
          error?.message ?? "no row returned"
        }`,
      );
      return null;
    }

    return inserted.id as string;
  }

  const { error } = await supabase.client.from(table).insert(row);

  if (error) {
    console.error(`contact form: ${table} insert failed: ${error.message}`);
  }

  return null;
}

async function writeCrmIntake(
  data: ParsedContact,
  normalizedSlugs: string[],
  req: NextRequest,
): Promise<string | null> {
  const sourceUrl = req.headers.get("referer");
  const userAgent = req.headers.get("user-agent");

  if (data.interestType === "article_request") {
    const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString();
    return insertCrmRow("article_requests", {
        requester_name: data.name,
        requester_email: data.email,
        requester_company: data.company.trim() || null,
        requested_articles: normalizedSlugs,
        expires_at: expiresAt,
      });
  }

  return insertCrmRow("contact_submissions", {
      name: data.name,
      email: data.email,
      role: data.role.trim() || "(not supplied)",
      company: data.company.trim() || null,
      message: data.message.trim() || "(no message supplied)",
      source: `website-${data.interestType}`,
      source_url: sourceUrl,
      user_agent: userAgent,
    });
}

export async function POST(req: NextRequest) {
  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  const honeypot = (body as { _hp?: string })?._hp;
  if (honeypot && honeypot.length > 0) {
    return NextResponse.json({ ok: true, lead_id: "silenced" });
  }

  const parsed = ContactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      { ok: false, error: "validation_failed", issues: parsed.error.flatten() },
      { status: 400 },
    );
  }

  const {
    name,
    email,
    role,
    company,
    message,
    interestType,
    articleSlug,
    articleSlugs,
  } = parsed.data;

  const isArticleRequest = interestType === "article_request";

  let normalizedSlugs: string[] = [];
  if (articleSlugs && articleSlugs.length > 0) {
    normalizedSlugs = articleSlugs;
  } else if (articleSlug) {
    normalizedSlugs = [articleSlug];
  }

  if (isArticleRequest && normalizedSlugs.length === 0) {
    return NextResponse.json(
      { ok: false, error: "no_articles_specified" },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.EMAIL_NOTIFY_TO ?? "robert@idigdata.com";
  const fromAddr =
    process.env.EMAIL_NOTIFY_FROM ?? "idigdata website <noreply@idigdata.com>";

  if (!apiKey) {
    console.error("contact form: RESEND_API_KEY not set");
    return NextResponse.json(
      { ok: false, error: "email_not_configured" },
      { status: 500 },
    );
  }

  let subject: string;
  if (isArticleRequest) {
    if (normalizedSlugs.length === 1) {
      subject = `[idigdata] Article request: ${normalizedSlugs[0]} — ${name}`;
    } else {
      subject = `[idigdata] Article request: ${normalizedSlugs.length} articles — ${name}`;
    }
  } else {
    subject = `[idigdata] Reach out: ${name} / ${email}`;
  }

  const articleLines = normalizedSlugs.map(
    (slug) => `  • ${humanTitleFor(slug)} (${slug})`,
  );

  const lines = [
    `From: ${name} <${email}>`,
    role ? `Role: ${role}` : null,
    company ? `Company: ${company}` : null,
    `Interest: ${interestType}`,
    isArticleRequest && normalizedSlugs.length > 0
      ? `Articles requested (${normalizedSlugs.length}):`
      : null,
    ...(isArticleRequest ? articleLines : []),
    ``,
    `Message:`,
    message.trim().length > 0 ? message : "(no message supplied)",
    ``,
    `---`,
    `Source: ${req.headers.get("referer") ?? "unknown"}`,
    `User-Agent: ${req.headers.get("user-agent") ?? "unknown"}`,
    `Timestamp: ${new Date().toISOString()}`,
  ].filter((l): l is string => l !== null);

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: fromAddr,
      to: notifyTo,
      replyTo: email,
      subject,
      text: lines.join("\n"),
    });
  } catch (err) {
    console.error("contact form email error:", err);
    return NextResponse.json(
      { ok: false, error: "email_failed" },
      { status: 500 },
    );
  }

  const crmId = await writeCrmIntake(parsed.data, normalizedSlugs, req);

  return NextResponse.json({ ok: true, lead_id: crmId });
}
