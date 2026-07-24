import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { getDigOpsSupabase } from "@/lib/server/digopsSupabase";
import { guardJsonPost, parseBoundedJson } from "@/lib/server/requestSecurity";
import { classifyWebsiteSignal } from "@/lib/traffic/websiteSignals";

export const runtime = "nodejs";

const PageviewSchema = z.object({
  path: z.string().min(1).max(2048).refine((value) => value.startsWith("/")),
  referrer: z.string().max(2048).optional().nullable(),
  search: z.string().max(2048).optional().nullable(),
  anon_session_id: z.string().max(128).optional().nullable(),
  traffic_class: z.string().max(80).optional().nullable(),
  source_kind: z.string().max(80).optional().nullable(),
  source_channel: z.string().max(200).optional().nullable(),
  source_medium: z.string().max(200).optional().nullable(),
  source_campaign: z.string().max(200).optional().nullable(),
  attribution_confidence: z.string().max(80).optional().nullable(),
  source_refs: z.array(z.record(z.string(), z.string())).max(20).optional(),
  is_internal: z.boolean().optional(),
  is_bot: z.boolean().optional(),
  is_asset: z.boolean().optional(),
  buyer_signal: z.boolean().optional(),
});

const NO_CONTENT = new NextResponse(null, { status: 204 });
type UtmFields = {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
};

function emptyUtms(): UtmFields {
  return {
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_term: null,
    utm_content: null,
  };
}

function parseUtms(search: string | null | undefined): UtmFields {
  if (!search) return emptyUtms();
  try {
    const params = new URLSearchParams(
      search.startsWith("?") ? search.slice(1) : search,
    );
    const pick = (k: string) => {
      const v = params.get(k);
      return v && v.length > 0 && v.length <= 512 ? v : null;
    };
    return {
      utm_source: pick("utm_source"),
      utm_medium: pick("utm_medium"),
      utm_campaign: pick("utm_campaign"),
      utm_term: pick("utm_term"),
      utm_content: pick("utm_content"),
    };
  } catch {
    return emptyUtms();
  }
}

export async function POST(req: NextRequest) {
  const guard = guardJsonPost(req, {
    maxBytes: 8 * 1024,
    rateLimits: [
      { name: "pageview-minute", windowMs: 60 * 1000, max: 180 },
      { name: "pageview-hour", windowMs: 60 * 60 * 1000, max: 3000 },
    ],
    silent: true,
  });
  if (guard) return guard;

  const bodyResult = await parseBoundedJson(req, 8 * 1024, true);
  if (!bodyResult.ok) return bodyResult.response;
  const body = bodyResult.body;

  const parsed = PageviewSchema.safeParse(body);
  if (!parsed.success) return NO_CONTENT;

  const ua = req.headers.get("user-agent");
  const signal = classifyWebsiteSignal({
    path: parsed.data.path,
    referrer: parsed.data.referrer,
    search: parsed.data.search,
    userAgent: ua,
    hostname: req.nextUrl.hostname,
    isInternalMarked: parsed.data.is_internal,
    trackPreviewTraffic:
      process.env.NEXT_PUBLIC_TRACK_PREVIEW_TRAFFIC === "1" ||
      process.env.TRACK_PREVIEW_TRAFFIC === "1",
  });
  if (signal.suppress_pageview) return NO_CONTENT;

  const supabase = getDigOpsSupabase();
  if (!supabase) {
    console.warn("pageview: DigOps Supabase env not configured");
    return NO_CONTENT;
  }

  const utms = parseUtms(parsed.data.search);

  const baseRow = {
    source: "idigdata-website",
    path: parsed.data.path,
    referrer: parsed.data.referrer?.slice(0, 2048) || null,
    user_agent: ua ? ua.slice(0, 1024) : null,
    anon_session_id: parsed.data.anon_session_id || null,
    ...utms,
  };

  const row = {
    ...baseRow,
    traffic_class: signal.traffic_class,
    source_kind: signal.source_kind,
    source_channel: signal.source_channel,
    source_medium: signal.source_medium,
    source_campaign: signal.source_campaign,
    attribution_confidence: signal.attribution_confidence,
    source_refs: signal.source_refs,
    is_internal: signal.is_internal,
    is_bot: signal.is_bot,
    is_asset: signal.is_asset,
    buyer_signal: signal.buyer_signal,
  };

  const { error } = await supabase.from("pageviews").insert(row);
  if (error) {
    if (isSchemaCacheMiss(error)) {
      const fallback = await supabase.from("pageviews").insert(baseRow);
      if (fallback.error) {
        console.error(`pageview fallback insert failed: ${fallback.error.message}`);
      }
    } else {
      console.error(`pageview insert failed: ${error.message}`);
    }
  }

  return NO_CONTENT;
}

function isSchemaCacheMiss(error: { code?: string; message?: string }): boolean {
  const message = error.message?.toLowerCase() ?? "";
  return (
    error.code === "PGRST204" ||
    error.code === "42703" ||
    (message.includes("column") && message.includes("schema cache"))
  );
}
