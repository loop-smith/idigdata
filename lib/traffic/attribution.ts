/**
 * First-party attribution cookie — UTMs / click IDs survive navigation
 * after the landing URL loses query params.
 */

export const ATTRIBUTION_COOKIE = "idig_attr";
export const ATTRIBUTION_SECONDS = 30 * 24 * 60 * 60; // 30 days

export type AttributionPayload = {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
  gclid: string | null;
  landing_path: string | null;
  referrer_host: string | null;
  captured_at: string;
};

export function parseAttributionSearch(
  search: string | null | undefined,
): Omit<AttributionPayload, "landing_path" | "referrer_host" | "captured_at"> {
  const empty = {
    utm_source: null,
    utm_medium: null,
    utm_campaign: null,
    utm_term: null,
    utm_content: null,
    gclid: null,
  };
  if (!search) return empty;
  try {
    const params = new URLSearchParams(
      search.startsWith("?") ? search.slice(1) : search,
    );
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
      gclid: pick("gclid"),
    };
  } catch {
    return empty;
  }
}

export function hasCampaignSignal(
  payload: Pick<
    AttributionPayload,
    "utm_source" | "utm_medium" | "utm_campaign" | "gclid"
  >,
): boolean {
  return Boolean(
    payload.utm_source ||
      payload.utm_medium ||
      payload.utm_campaign ||
      payload.gclid,
  );
}

export function encodeAttributionCookie(payload: AttributionPayload): string {
  return toBase64Url(JSON.stringify(payload));
}

export function decodeAttributionCookie(
  raw: string | null | undefined,
): AttributionPayload | null {
  if (!raw) return null;
  try {
    const json = fromBase64Url(raw);
    const parsed = JSON.parse(json) as Partial<AttributionPayload>;
    if (!parsed || typeof parsed !== "object") return null;
    return {
      utm_source: clean(parsed.utm_source),
      utm_medium: clean(parsed.utm_medium),
      utm_campaign: clean(parsed.utm_campaign),
      utm_term: clean(parsed.utm_term),
      utm_content: clean(parsed.utm_content),
      gclid: clean(parsed.gclid),
      landing_path: clean(parsed.landing_path),
      referrer_host: clean(parsed.referrer_host),
      captured_at:
        typeof parsed.captured_at === "string"
          ? parsed.captured_at.slice(0, 40)
          : new Date().toISOString(),
    };
  } catch {
    return null;
  }
}

/** Edge-safe base64url (works in proxy/middleware + Node). */
function toBase64Url(value: string): string {
  const bytes = new TextEncoder().encode(value);
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  const b64 =
    typeof btoa === "function"
      ? btoa(binary)
      : Buffer.from(value, "utf8").toString("base64");
  return b64.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function fromBase64Url(value: string): string {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/");
  const pad = padded.length % 4 === 0 ? "" : "=".repeat(4 - (padded.length % 4));
  const b64 = padded + pad;
  if (typeof atob === "function") {
    const binary = atob(b64);
    const bytes = Uint8Array.from(binary, (ch) => ch.charCodeAt(0));
    return new TextDecoder().decode(bytes);
  }
  return Buffer.from(b64, "base64").toString("utf8");
}

/**
 * Prefer live URL UTMs; fill gaps from the first-party cookie.
 * Returns a synthetic `?…` search string for classifyWebsiteSignal.
 */
export function mergeAttributionSearch(
  liveSearch: string | null | undefined,
  cookie: AttributionPayload | null,
): string | null {
  const live = parseAttributionSearch(liveSearch);
  const merged = {
    utm_source: live.utm_source ?? cookie?.utm_source ?? null,
    utm_medium: live.utm_medium ?? cookie?.utm_medium ?? null,
    utm_campaign: live.utm_campaign ?? cookie?.utm_campaign ?? null,
    utm_term: live.utm_term ?? cookie?.utm_term ?? null,
    utm_content: live.utm_content ?? cookie?.utm_content ?? null,
    gclid: live.gclid ?? cookie?.gclid ?? null,
  };
  if (!hasCampaignSignal(merged) && !merged.utm_term && !merged.utm_content) {
    return liveSearch?.slice(0, 2048) || null;
  }
  const params = new URLSearchParams();
  for (const [key, value] of Object.entries(merged)) {
    if (value) params.set(key, value);
  }
  const qs = params.toString();
  return qs ? `?${qs}` : liveSearch?.slice(0, 2048) || null;
}

export function buildAttributionFromRequest(input: {
  path: string;
  search: string | null | undefined;
  referrer: string | null | undefined;
  existing: AttributionPayload | null;
}): AttributionPayload | null {
  const live = parseAttributionSearch(input.search);
  if (!hasCampaignSignal(live) && !input.existing) return null;

  const referrerHost = referrerHostname(input.referrer);
  if (hasCampaignSignal(live)) {
    return {
      ...live,
      landing_path: input.path.slice(0, 512),
      referrer_host: referrerHost || input.existing?.referrer_host || null,
      captured_at: new Date().toISOString(),
    };
  }

  return input.existing;
}

function referrerHostname(value: string | null | undefined): string | null {
  if (!value) return null;
  try {
    return new URL(value).hostname.replace(/^www\./, "").slice(0, 255);
  } catch {
    return null;
  }
}

function clean(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  return trimmed ? trimmed.slice(0, 512) : null;
}
