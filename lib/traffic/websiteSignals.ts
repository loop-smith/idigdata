export type TrafficClass =
  | "internal"
  | "agent"
  | "asset"
  | "dev"
  | "preview"
  | "campaign"
  | "external_referral"
  | "direct"
  | "unknown";

export type SourceKind =
  | "rob_internal"
  | "agent"
  | "asset"
  | "dev"
  | "preview"
  | "campaign"
  | "external_referral"
  | "direct"
  | "unknown";

export type AttributionConfidence = "exact" | "labeled_fallback" | "unknown";

export type WebsiteSignal = {
  traffic_class: TrafficClass;
  source_kind: SourceKind;
  source_channel: string | null;
  source_medium: string | null;
  source_campaign: string | null;
  attribution_confidence: AttributionConfidence;
  source_refs: Array<Record<string, string>>;
  is_internal: boolean;
  is_bot: boolean;
  is_asset: boolean;
  buyer_signal: boolean;
  suppress_pageview: boolean;
  suppress_reason: string | null;
};

type ClassifyInput = {
  path: string;
  search?: string | null;
  referrer?: string | null;
  userAgent?: string | null;
  hostname?: string | null;
  isInternalMarked?: boolean;
  trackPreviewTraffic?: boolean;
  suppressBotTraffic?: boolean;
};

const ASSET_PREFIXES = [
  "/_next/",
  "/favicon",
  "/icon",
  "/apple-icon",
  "/og-image",
  "/diagrams/",
  "/brand/",
];

const ASSET_EXTENSIONS = /\.(avif|css|gif|ico|jpg|jpeg|js|json|map|pdf|png|svg|txt|webmanifest|webp|xml)$/i;
const BOT_USER_AGENT = /curl|wget|python|node-fetch|headless|playwright|puppeteer|bot|spider|crawl|x11; linux/i;

export function classifyWebsiteSignal(input: ClassifyInput): WebsiteSignal {
  const path = normalizePath(input.path);
  const params = parseSearch(input.search);
  const hostname = cleanHostname(input.hostname);
  const referrerHost = referrerHostname(input.referrer);
  const userAgent = input.userAgent ?? "";
  const isInternal =
    input.isInternalMarked === true || params.get("internal") === "1";
  const isAsset = isAssetPath(path);
  const isBot = isBotUserAgent(userAgent);
  const isDevHost = isLocalHost(hostname);
  const isPreviewHost = hostname.endsWith(".vercel.app");
  const utmSource = clean(params.get("utm_source"));
  const utmMedium = clean(params.get("utm_medium"));
  const utmCampaign = clean(params.get("utm_campaign"));

  if (isAsset) {
    return suppressed("asset", "asset", "asset_path", {
      is_internal: isInternal,
      is_bot: isBot,
      is_asset: true,
      source_refs: [{ type: "path_class", value: path }],
    });
  }

  if (isInternal) {
    return suppressed("internal", "rob_internal", "internal_marker", {
      is_internal: true,
      is_bot: isBot,
      is_asset: false,
      source_refs: [{ type: "internal_marker", value: "true" }],
    });
  }

  if (isDevHost) {
    return suppressed("dev", "dev", "dev_host", {
      is_internal: false,
      is_bot: isBot,
      is_asset: false,
      source_refs: [{ type: "host_class", value: hostname || "local" }],
    });
  }

  if (isPreviewHost && !input.trackPreviewTraffic) {
    return suppressed("preview", "preview", "preview_host", {
      is_internal: false,
      is_bot: isBot,
      is_asset: false,
      source_refs: [{ type: "host_class", value: hostname }],
    });
  }

  if (isBot && input.suppressBotTraffic !== false) {
    return suppressed("agent", "agent", "bot_like_user_agent", {
      is_internal: false,
      is_bot: true,
      is_asset: false,
      source_refs: [{ type: "user_agent_class", value: "agent" }],
    });
  }

  if (isBot) {
    return tracked("agent", "agent", {
      source_channel: "bot_like_user_agent",
      source_refs: [{ type: "user_agent_class", value: "agent" }],
      is_bot: true,
      buyer_signal: false,
    });
  }

  if (utmSource) {
    return tracked("campaign", "campaign", {
      source_channel: utmSource,
      source_medium: utmMedium,
      source_campaign: utmCampaign,
      source_refs: [{ type: "utm_source", value: utmSource }],
    });
  }

  if (referrerHost && referrerHost !== hostname.replace(/^www\./, "")) {
    return tracked("external_referral", "external_referral", {
      source_channel: referrerHost,
      source_refs: [{ type: "document_referrer", value: referrerHost }],
    });
  }

  if (!referrerHost) {
    return tracked("direct", "direct", { source_refs: [] });
  }

  return tracked("unknown", "unknown", {
    source_channel: referrerHost,
    attribution_confidence: "unknown",
    source_refs: [{ type: "document_referrer", value: referrerHost }],
    buyer_signal: false,
  });
}

export function isAssetPath(path: string): boolean {
  const normalized = normalizePath(path).toLowerCase();
  if (ASSET_PREFIXES.some((prefix) => normalized.startsWith(prefix))) {
    return true;
  }
  if (normalized === "/robots.txt" || normalized === "/sitemap.xml") {
    return true;
  }
  if (normalized === "/llms.txt" || normalized === "/manifest.webmanifest") {
    return true;
  }
  return ASSET_EXTENSIONS.test(normalized);
}

export function isBotUserAgent(userAgent: string): boolean {
  return BOT_USER_AGENT.test(userAgent);
}

export function isLocalHost(hostname: string): boolean {
  return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
}

export function normalizePath(path: string): string {
  if (!path.startsWith("/")) return "/";
  return path.slice(0, 2048);
}

function tracked(
  trafficClass: TrafficClass,
  sourceKind: SourceKind,
  overrides: Partial<WebsiteSignal>,
): WebsiteSignal {
  return {
    traffic_class: trafficClass,
    source_kind: sourceKind,
    source_channel: null,
    source_medium: null,
    source_campaign: null,
    attribution_confidence: "exact",
    source_refs: [],
    is_internal: false,
    is_bot: false,
    is_asset: false,
    buyer_signal: true,
    suppress_pageview: false,
    suppress_reason: null,
    ...overrides,
  };
}

function suppressed(
  trafficClass: TrafficClass,
  sourceKind: SourceKind,
  reason: string,
  overrides: Partial<WebsiteSignal>,
): WebsiteSignal {
  return {
    traffic_class: trafficClass,
    source_kind: sourceKind,
    source_channel: reason,
    source_medium: null,
    source_campaign: null,
    attribution_confidence: "exact",
    source_refs: [],
    is_internal: false,
    is_bot: false,
    is_asset: false,
    buyer_signal: false,
    suppress_pageview: true,
    suppress_reason: reason,
    ...overrides,
  };
}

function parseSearch(search: string | null | undefined): URLSearchParams {
  try {
    return new URLSearchParams(search?.startsWith("?") ? search.slice(1) : search ?? "");
  } catch {
    return new URLSearchParams();
  }
}

function referrerHostname(value: string | null | undefined): string {
  if (!value) return "";
  try {
    return cleanHostname(new URL(value).hostname);
  } catch {
    return "";
  }
}

function cleanHostname(value: string | null | undefined): string {
  return value?.trim().toLowerCase().replace(/^www\./, "") ?? "";
}

function clean(value: string | null): string | null {
  const cleaned = value?.trim();
  return cleaned ? cleaned.slice(0, 160) : null;
}
