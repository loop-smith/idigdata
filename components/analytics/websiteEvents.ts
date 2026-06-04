"use client";

export type WebsiteEventType =
  | "pageview_event"
  | "contact_submit"
  | "article_request"
  | "cta_click"
  | "mailto_click"
  | "dwell";

type SourceKind =
  | "rob_internal"
  | "agent"
  | "external_referral"
  | "campaign"
  | "direct"
  | "unknown";

type AttributionConfidence = "exact" | "labeled_fallback" | "unknown";

type WebsiteEventInput = {
  event_type: WebsiteEventType;
  path?: string;
  referrer?: string | null;
  payload?: Record<string, unknown>;
};

const SESSION_KEY = "idig_anon_sid";
const INGEST_URL = process.env.NEXT_PUBLIC_WEBSITE_EVENT_INGEST_URL;

export function getAnonSessionId(): string | null {
  if (typeof window === "undefined") return null;
  try {
    const existing = window.sessionStorage.getItem(SESSION_KEY);
    if (existing) return existing;
    const buf = new Uint8Array(16);
    crypto.getRandomValues(buf);
    const id = Array.from(buf, (b) => b.toString(16).padStart(2, "0")).join("");
    window.sessionStorage.setItem(SESSION_KEY, id);
    return id;
  } catch {
    return null;
  }
}

export function isTrackableHost(): boolean {
  if (typeof window === "undefined") return false;
  const h = window.location.hostname;
  if (h === "localhost" || h === "127.0.0.1" || h === "::1") return false;
  if (h.endsWith(".vercel.app")) return false;
  return true;
}

export function trackWebsiteEvent(input: WebsiteEventInput) {
  if (typeof window === "undefined") return;
  if (!INGEST_URL || !isTrackableHost()) return;

  const referrer = input.referrer ?? (document.referrer || null);
  const attribution = classifyCurrentSource(referrer);
  const payload = JSON.stringify({
    event_type: input.event_type,
    occurred_at: new Date().toISOString(),
    anon_session_id: getAnonSessionId(),
    path: normalizePath(input.path ?? window.location.pathname),
    referrer,
    source_kind: attribution.source_kind,
    source_channel: attribution.source_channel,
    source_medium: attribution.source_medium,
    source_campaign: attribution.source_campaign,
    attribution_confidence: attribution.attribution_confidence,
    source_refs: attribution.source_refs,
    payload: {
      ...input.payload,
      location_search: window.location.search || null,
    },
  });

  try {
    fetch(INGEST_URL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: payload,
      credentials: "omit",
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Analytics never breaks the page.
  }
}

function normalizePath(path: string): string {
  if (!path.startsWith("/")) return "/";
  return path.slice(0, 2048);
}

function classifyCurrentSource(referrer: string | null): {
  source_kind: SourceKind;
  source_channel: string | null;
  source_medium: string | null;
  source_campaign: string | null;
  attribution_confidence: AttributionConfidence;
  source_refs: Array<Record<string, string>>;
} {
  const params = new URLSearchParams(window.location.search);
  const internal = params.get("internal");
  const utmSource = clean(params.get("utm_source"));
  const utmMedium = clean(params.get("utm_medium"));
  const utmCampaign = clean(params.get("utm_campaign"));
  const userAgent = navigator.userAgent.toLowerCase();

  if (internal === "1") {
    return {
      source_kind: "rob_internal",
      source_channel: "internal",
      source_medium: null,
      source_campaign: null,
      attribution_confidence: "exact",
      source_refs: [{ type: "query_flag", value: "internal=1" }],
    };
  }

  if (isBotUserAgent(userAgent)) {
    return {
      source_kind: "agent",
      source_channel: "bot_like_user_agent",
      source_medium: null,
      source_campaign: null,
      attribution_confidence: "exact",
      source_refs: [{ type: "user_agent_class", value: "agent" }],
    };
  }

  if (utmSource) {
    return {
      source_kind: "campaign",
      source_channel: utmSource,
      source_medium: utmMedium,
      source_campaign: utmCampaign,
      attribution_confidence: "exact",
      source_refs: [{ type: "utm_source", value: utmSource }],
    };
  }

  const referrerHost = referrerHostname(referrer);
  if (referrerHost && referrerHost !== window.location.hostname.replace(/^www\./, "")) {
    return {
      source_kind: "external_referral",
      source_channel: referrerHost,
      source_medium: null,
      source_campaign: null,
      attribution_confidence: "exact",
      source_refs: [{ type: "document_referrer", value: referrerHost }],
    };
  }

  if (!referrerHost) {
    return {
      source_kind: "direct",
      source_channel: null,
      source_medium: null,
      source_campaign: null,
      attribution_confidence: "exact",
      source_refs: [],
    };
  }

  return {
    source_kind: "unknown",
    source_channel: referrerHost,
    source_medium: null,
    source_campaign: null,
    attribution_confidence: "unknown",
    source_refs: [{ type: "document_referrer", value: referrerHost }],
  };
}

function isBotUserAgent(userAgent: string): boolean {
  return /curl|wget|python|node-fetch|headless|playwright|puppeteer|bot|spider|crawl|x11; linux/.test(userAgent);
}

function referrerHostname(value: string | null): string {
  if (!value) return "";
  try {
    return new URL(value).hostname.toLowerCase().replace(/^www\./, "");
  } catch {
    return "";
  }
}

function clean(value: string | null): string | null {
  const cleaned = value?.trim();
  return cleaned ? cleaned.slice(0, 160) : null;
}
