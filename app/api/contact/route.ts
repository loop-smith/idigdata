import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const runtime = "nodejs";

const ARTICLE_TITLES: Record<string, string> = {
  "architectural-fork": "The architectural fork",
  "integrated-delivery": "The integrated delivery discipline",
  "vendor-partner-trap": "The vendor-partner trap",
  "agile-fall": "Agile-fall",
  "six-constellations": "The six constellations",
  beehive: "The beehive",
};

const ContactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  role: z.string().max(120).optional().default(""),
  company: z.string().max(200).optional().default(""),
  message: z.string().max(2000).optional().default(""),
  interestType: z
    .enum([
      "general",
      "embedded",
      "fractional",
      "agentics",
      "speaking",
      "article_request",
    ])
    .default("general"),
  articleSlug: z.string().max(80).optional(),
  _hp: z.string().max(0).optional(),
});

export async function POST(req: NextRequest) {
  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
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

  const { name, email, role, company, message, interestType, articleSlug } =
    parsed.data;

  // The leads table requires non-empty company/role/message. For optional fields
  // we substitute defaults that the CRM can recognize as "not supplied".
  const companyForDb = company.trim().length > 0 ? company : "(not supplied)";
  const roleForDb = role.trim().length > 0 ? role : "(not supplied)";

  const articleTitle = articleSlug ? ARTICLE_TITLES[articleSlug] : undefined;

  // Compose a metadata-prefixed message body so interestType + articleSlug
  // survive into the CRM without a schema migration. Format is grep-friendly.
  const metaLines: string[] = [];
  metaLines.push(`[interestType=${interestType}]`);
  if (articleSlug) {
    metaLines.push(
      `[articleSlug=${articleSlug}${articleTitle ? `; title=${articleTitle}` : ""}]`,
    );
  }
  const baseMessage = message.trim();
  const messageForDb = [
    metaLines.join(" "),
    baseMessage.length > 0
      ? baseMessage
      : interestType === "article_request" && articleTitle
      ? `Article request: ${articleTitle}`
      : "(no message supplied)",
  ].join("\n\n");

  const supabase = createClient(
    process.env.IDIGDATA_APP_SUPABASE_URL!,
    process.env.IDIGDATA_APP_SUPABASE_ANON_KEY!,
  );

  const { error: dbError } = await supabase.from("leads").insert({
    name,
    email,
    company: companyForDb,
    role: roleForDb,
    message: messageForDb,
    source:
      interestType === "article_request"
        ? "website-article-request"
        : "website-contact",
    source_url: req.headers.get("referer") ?? "https://idigdata.com/contact",
    user_agent: req.headers.get("user-agent") ?? null,
  });

  if (dbError) {
    console.error("contact form db error:", dbError);
  }

  const subject =
    interestType === "article_request"
      ? `Article request: ${articleTitle ?? articleSlug ?? "unknown"}`
      : `New idigdata lead: ${name}`;

  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    await resend.emails.send({
      from: "idigdata website <noreply@idigdata.com>",
      to: process.env.EMAIL_NOTIFY_TO!,
      replyTo: email,
      subject,
      text: [
        `From: ${name} <${email}>`,
        `Role: ${roleForDb}`,
        `Company: ${companyForDb}`,
        `Interest: ${interestType}`,
        articleSlug ? `Article: ${articleTitle ?? articleSlug}` : null,
        ``,
        `Message:`,
        baseMessage.length > 0 ? baseMessage : "(no message supplied)",
        ``,
        `---`,
        `Source: ${interestType === "article_request" ? "website-article-request" : "website-contact"} (${req.headers.get("referer") ?? "unknown"})`,
        `User-Agent: ${req.headers.get("user-agent") ?? "unknown"}`,
        `DB insert: ${dbError ? "FAILED — " + dbError.message : "ok"}`,
      ]
        .filter((l): l is string => l !== null)
        .join("\n"),
    });
  } catch (emailError) {
    console.error("contact form email fallback error:", emailError);
    if (dbError) {
      return NextResponse.json(
        { ok: false, error: "all_paths_failed" },
        { status: 500 },
      );
    }
  }

  return NextResponse.json({ ok: true });
}
