import type { NextRequest } from "next/server";
import { getDigOpsSupabase } from "@/lib/server/digopsSupabase";
import {
  classifyWebsiteSignal,
  isAssetPath,
  parseInternalIpAllowlist,
} from "@/lib/traffic/websiteSignals";

type UtmFields = {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
};

type DoorKnockOptions = {
  doorSessionId: string;
  isInternalMarked: boolean;
  isFleetMarked?: boolean;
};

const HEADER_ALLOWLIST = [
  "accept",
  "accept-language",
  "cf-connecting-ip",
  "cf-ipcountry",
  "cf-ray",
  "forwarded",
  "host",
  "origin",
  "referer",
  "sec-ch-ua",
  "sec-ch-ua-mobile",
  "sec-ch-ua-platform",
  "sec-fetch-dest",
  "sec-fetch-mode",
  "sec-fetch-site",
  "true-client-ip",
  "user-agent",
  "x-forwarded-for",
  "x-forwarded-host",
  "x-forwarded-proto",
  "x-real-ip",
  "x-vercel-deployment-url",
  "x-vercel-forwarded-for",
  "x-vercel-id",
  "x-vercel-ip-city",
  "x-vercel-ip-country",
  "x-vercel-ip-country-region",
  "x-vercel-ip-latitude",
  "x-vercel-ip-longitude",
];

export function shouldCaptureDoorKnock(req: NextRequest): boolean {
  if (req.method !== "GET" && req.method !== "HEAD") return false;

  const path = req.nextUrl.pathname;
  if (path.startsWith("/api/")) return false;
  if (path.startsWith("/_next/")) return false;
  if (isAssetPath(path)) return false;

  const accept = req.headers.get("accept") ?? "";
  const fetchDest = req.headers.get("sec-fetch-dest") ?? "";
  if (fetchDest === "document") return true;
  if (accept.includes("text/html")) return true;

  return !/\.[a-z0-9]{2,8}$/i.test(path);
}

export async function recordDoorKnock(
  req: NextRequest,
  options: DoorKnockOptions,
): Promise<void> {
  const supabase = getDigOpsSupabase();
  if (!supabase) return;

  const referrer = req.headers.get("referer");
  const userAgent = req.headers.get("user-agent");
  const clientIp = getClientIp(req);
  const signal = classifyWebsiteSignal({
    path: req.nextUrl.pathname,
    search: req.nextUrl.search,
    referrer,
    userAgent,
    hostname: req.nextUrl.hostname,
    clientIp,
    isInternalMarked: options.isInternalMarked,
    isFleetMarked: options.isFleetMarked === true,
    internalIps: parseInternalIpAllowlist(process.env.DIGOPS_INTERNAL_IPS),
    trackPreviewTraffic:
      process.env.NEXT_PUBLIC_TRACK_PREVIEW_TRAFFIC === "1" ||
      process.env.TRACK_PREVIEW_TRAFFIC === "1",
    // Keep probes/bots in DigOps noise tabs; classification marks is_bot / buyer_signal.
    suppressBotTraffic: false,
  });

  if (signal.suppress_pageview) return;

  const utms = parseUtms(req.nextUrl.search);
  const baseRow = {
    source: "idigdata-door-knock",
    path: req.nextUrl.pathname,
    referrer: referrer?.slice(0, 2048) || null,
    user_agent: userAgent?.slice(0, 1024) || null,
    anon_session_id: options.doorSessionId,
    ...utms,
  };
  const enriched = {
    ...baseRow,
    occurred_at: new Date().toISOString(),
    request_method: req.method,
    landing_url: redactUrl(req.nextUrl).slice(0, 2048),
    query: req.nextUrl.search.slice(0, 2048) || null,
    host: req.headers.get("host")?.slice(0, 255) || null,
    protocol:
      req.headers.get("x-forwarded-proto")?.slice(0, 40) ||
      req.nextUrl.protocol.replace(":", ""),
    client_ip: getClientIp(req),
    client_ip_chain: req.headers.get("x-forwarded-for")?.slice(0, 1024) || null,
    geo_country: pickHeader(req, "x-vercel-ip-country", "cf-ipcountry"),
    geo_region: pickHeader(req, "x-vercel-ip-country-region"),
    geo_city: pickHeader(req, "x-vercel-ip-city"),
    geo_latitude: pickHeader(req, "x-vercel-ip-latitude"),
    geo_longitude: pickHeader(req, "x-vercel-ip-longitude"),
    accept_language: req.headers.get("accept-language")?.slice(0, 512) || null,
    sec_fetch_site: req.headers.get("sec-fetch-site")?.slice(0, 80) || null,
    sec_fetch_mode: req.headers.get("sec-fetch-mode")?.slice(0, 80) || null,
    sec_fetch_dest: req.headers.get("sec-fetch-dest")?.slice(0, 80) || null,
    request_id:
      req.headers.get("x-vercel-id")?.slice(0, 255) ||
      req.headers.get("cf-ray")?.slice(0, 255) ||
      null,
    headers_json: collectSafeHeaders(req),
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

  // Rich store first (DigOps ops can query site_hits later).
  const siteHit = await supabase.from("site_hits").insert(enriched);
  if (siteHit.error) {
    console.error(`door knock site_hits insert failed: ${siteHit.error.message}`);
  }

  // Always mirror a row into pageviews — DigOps /website panel reads this table.
  const pageviewSignal = {
    ...baseRow,
    occurred_at: enriched.occurred_at,
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
  const pageviewRich = await supabase.from("pageviews").insert(pageviewSignal);
  if (!pageviewRich.error) return;

  const pageviewBase = await supabase.from("pageviews").insert(baseRow);
  if (pageviewBase.error) {
    console.error(
      `door knock pageviews insert failed: ${pageviewRich.error.message}; fallback failed: ${pageviewBase.error.message}`,
    );
  }
}

function parseUtms(search: string | null | undefined): UtmFields {
  if (!search) return emptyUtms();
  try {
    const params = new URLSearchParams(search.startsWith("?") ? search.slice(1) : search);
    const pick = (key: string) => {
      const value = params.get(key);
      return value && value.length > 0 && value.length <= 512 ? value : null;
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

function emptyUtms(): UtmFields {
  return {
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_term: null,
    utm_content: null,
  };
}

function getClientIp(req: NextRequest): string | null {
  const direct =
    req.headers.get("x-real-ip") ||
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("true-client-ip") ||
    req.headers.get("x-vercel-forwarded-for");
  if (direct) return direct.slice(0, 128);

  const forwarded = req.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  return first ? first.slice(0, 128) : null;
}

function pickHeader(req: NextRequest, ...names: string[]): string | null {
  for (const name of names) {
    const value = req.headers.get(name);
    if (value) return value.slice(0, 255);
  }
  return null;
}

function collectSafeHeaders(req: NextRequest): Record<string, string> {
  const headers: Record<string, string> = {};
  for (const name of HEADER_ALLOWLIST) {
    const value = req.headers.get(name);
    if (value) headers[name] = value.slice(0, 2048);
  }
  return headers;
}

function redactUrl(url: URL): string {
  const copy = new URL(url.href);
  for (const key of Array.from(copy.searchParams.keys())) {
    if (/token|key|secret|password|code|state/i.test(key)) {
      copy.searchParams.set(key, "[redacted]");
    }
  }
  return copy.href;
}
