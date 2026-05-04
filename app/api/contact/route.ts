import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export const runtime = "nodejs";

// Article slug → friendly title + source markdown file. Friendly title is used
// in the Resend subject; source filename is included in the notification body
// so Rob has the path to the underlying markdown for the manual Phase-1 PDF
// send. Slugs match lib/articles.ts and content/articles/*.md filenames.
const ARTICLE_SLUG_META: Record<string, { title: string; sourceFile: string }> = {
  "transformation-and-the-people-of-it": {
    title: "What business transformation actually is — and who it's done with",
    sourceFile: "01-transformation-and-the-people-of-it.md",
  },
  "the-mechanics": {
    title: "The mechanics — PM, budget, capital structure",
    sourceFile: "02-the-mechanics.md",
  },
  "applied-agentics": {
    title: "Applied agentics — agents deployed as a business asset",
    sourceFile: "03-applied-agentics.md",
  },
  // Legacy slugs (older landing-page proposals) — kept for backwards-compat
  // so any link rot before v2-overhaul ships still routes cleanly.
  "architectural-fork": {
    title: "The architectural fork",
    sourceFile: "(legacy slug — see article-01)",
  },
  "integrated-delivery": {
    title: "The integrated delivery discipline",
    sourceFile: "(legacy slug — see article-02)",
  },
  "vendor-partner-trap": {
    title: "The vendor-partner trap",
    sourceFile: "(legacy slug)",
  },
  "agile-fall": {
    title: "Agile-fall",
    sourceFile: "(legacy slug)",
  },
  "six-constellations": {
    title: "The six constellations",
    sourceFile: "(legacy slug)",
  },
  beehive: {
    title: "The beehive",
    sourceFile: "(legacy slug)",
  },
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

  const isArticleRequest = interestType === "article_request";

  // The leads table requires non-empty company/role/message. For optional
  // fields we substitute defaults that the CRM can recognize as "not supplied".
  const companyForDb = company.trim().length > 0 ? company : "(not supplied)";
  const roleForDb = role.trim().length > 0 ? role : "(not supplied)";

  const articleMeta = articleSlug ? ARTICLE_SLUG_META[articleSlug] : undefined;
  const articleTitle = articleMeta?.title;

  // Compose a metadata-prefixed message body so interestType + articleSlug
  // survive into the CRM today (pre-migration), and remain greppable after
  // the dedicated request_type / article_slug columns land. The migration at
  // supabase/migrations/20260504_leads_add_request_type_and_article_slug.sql
  // is queued for manual application; until applied this prefix is the
  // primary signal carrier.
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
      : isArticleRequest && articleTitle
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
    source: isArticleRequest ? "website-article-request" : "website-contact",
    source_url: req.headers.get("referer") ?? "https://idigdata.com/contact",
    user_agent: req.headers.get("user-agent") ?? null,
  });

  if (dbError) {
    console.error("contact form db error:", dbError);
  }

  const subject = isArticleRequest
    ? `[idigdata] Article request: ${articleTitle ?? articleSlug ?? "unknown"}`
    : `[idigdata] New lead: ${name}`;

  // Resend notification — Phase 1 manual approval workflow.
  // Article-request format includes the source markdown filename so Rob has
  // the pointer to the underlying body when manually preparing the PDF.
  let textBody: string;
  if (isArticleRequest) {
    textBody = [
      `Article request received.`,
      ``,
      `Requester: ${name}`,
      `Email: ${email}`,
      `Role: ${roleForDb}`,
      `Company: ${companyForDb}`,
      `Article: ${articleTitle ?? articleSlug ?? "—"}`,
      ``,
      `Optional context: ${baseMessage.length > 0 ? baseMessage : "—"}`,
      ``,
      `Submitted: ${new Date().toISOString()}`,
      ``,
      `To approve: send the PDF deliverable manually for now (Phase 1).`,
      `Article body source: idigdata/positioning/articles/pro/${articleMeta?.sourceFile ?? "(unknown source)"}`,
      ``,
      `---`,
      `Source: website-article-request (${req.headers.get("referer") ?? "unknown"})`,
      `User-Agent: ${req.headers.get("user-agent") ?? "unknown"}`,
      `DB insert: ${dbError ? "FAILED — " + dbError.message : "ok"}`,
    ].join("\n");
  } else {
    textBody = [
      `From: ${name} <${email}>`,
      `Role: ${roleForDb}`,
      `Company: ${companyForDb}`,
      `Interest: ${interestType}`,
      ``,
      `Message:`,
      baseMessage.length > 0 ? baseMessage : "(no message supplied)",
      ``,
      `---`,
      `Source: website-contact (${req.headers.get("referer") ?? "unknown"})`,
      `User-Agent: ${req.headers.get("user-agent") ?? "unknown"}`,
      `DB insert: ${dbError ? "FAILED — " + dbError.message : "ok"}`,
    ].join("\n");
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY!);
    await resend.emails.send({
      from: "idigdata website <noreply@idigdata.com>",
      to: process.env.EMAIL_NOTIFY_TO!,
      replyTo: email,
      subject,
      text: textBody,
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
