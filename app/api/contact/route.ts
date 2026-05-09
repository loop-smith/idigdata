import { NextRequest, NextResponse } from "next/server";
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
  _hp: z.string().max(0).optional(),
});

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

  const { name, email, role, company, message, interestType, articleSlug } =
    parsed.data;

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

  const isArticleRequest = interestType === "article_request";
  const subject = isArticleRequest
    ? `[idigdata] Article request: ${articleSlug ?? "unknown"} — ${name}`
    : `[idigdata] Reach out: ${name} / ${email}`;

  const lines = [
    `From: ${name} <${email}>`,
    role ? `Role: ${role}` : null,
    company ? `Company: ${company}` : null,
    `Interest: ${interestType}`,
    articleSlug ? `Article slug: ${articleSlug}` : null,
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

  return NextResponse.json({ ok: true });
}
