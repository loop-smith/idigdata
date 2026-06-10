import { NextRequest, NextResponse } from "next/server";

type RateLimit = {
  name: string;
  windowMs: number;
  max: number;
};

type GuardOptions = {
  maxBytes: number;
  rateLimits: RateLimit[];
  silent?: boolean;
};

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

const DEFAULT_ALLOWED_ORIGINS = [
  "https://idigdata.com",
  "https://www.idigdata.com",
  "http://localhost:3100",
  "http://127.0.0.1:3100",
];

export function guardJsonPost(
  req: NextRequest,
  options: GuardOptions,
): NextResponse | null {
  const originFailure = enforceSameOrigin(req, options.silent);
  if (originFailure) return originFailure;

  const sizeFailure = enforceBodySize(req, options.maxBytes, options.silent);
  if (sizeFailure) return sizeFailure;

  const typeFailure = enforceJsonContentType(req, options.silent);
  if (typeFailure) return typeFailure;

  const rateFailure = enforceRateLimits(req, options.rateLimits, options.silent);
  if (rateFailure) return rateFailure;

  return null;
}

function enforceSameOrigin(
  req: NextRequest,
  silent = false,
): NextResponse | null {
  const origin = req.headers.get("origin");
  const referer = req.headers.get("referer");

  if (origin && isAllowedOrigin(origin, req)) return null;

  if (!origin && referer) {
    const refererOrigin = originFromUrl(referer);
    if (refererOrigin && isAllowedOrigin(refererOrigin, req)) return null;
  }

  if (!origin && !referer && process.env.NODE_ENV !== "production") return null;

  return reject(403, "forbidden_origin", silent);
}

function isAllowedOrigin(candidate: string, req: NextRequest): boolean {
  const normalized = originFromUrl(candidate);
  if (!normalized) return false;
  if (normalized === req.nextUrl.origin) return true;

  const configured = process.env.WEBSITE_ALLOWED_ORIGINS?.split(",") ?? [];
  const allowed = [...DEFAULT_ALLOWED_ORIGINS, ...configured]
    .map((value) => originFromUrl(value.trim()))
    .filter((value): value is string => Boolean(value));

  return allowed.includes(normalized);
}

function enforceBodySize(
  req: NextRequest,
  maxBytes: number,
  silent = false,
): NextResponse | null {
  const contentLength = req.headers.get("content-length");
  if (!contentLength) return null;

  const bytes = Number(contentLength);
  if (!Number.isFinite(bytes) || bytes <= maxBytes) return null;

  return reject(413, "payload_too_large", silent);
}

function enforceJsonContentType(
  req: NextRequest,
  silent = false,
): NextResponse | null {
  const contentType = req.headers.get("content-type") ?? "";
  const mediaType = contentType.split(";")[0]?.trim().toLowerCase();

  if (mediaType === "application/json" || mediaType.endsWith("+json")) {
    return null;
  }

  return reject(415, "unsupported_media_type", silent);
}

function enforceRateLimits(
  req: NextRequest,
  limits: RateLimit[],
  silent = false,
): NextResponse | null {
  const now = Date.now();
  pruneExpiredBuckets(now);

  const clientKey = getClientKey(req);
  for (const limit of limits) {
    const key = `${limit.name}:${clientKey}`;
    const existing = buckets.get(key);
    const bucket =
      existing && existing.resetAt > now
        ? existing
        : { count: 0, resetAt: now + limit.windowMs };

    bucket.count += 1;
    buckets.set(key, bucket);

    if (bucket.count > limit.max) {
      const retryAfter = Math.max(1, Math.ceil((bucket.resetAt - now) / 1000));
      if (silent) return new NextResponse(null, { status: 204 });
      return NextResponse.json(
        { ok: false, error: "rate_limited" },
        { status: 429, headers: { "Retry-After": String(retryAfter) } },
      );
    }
  }

  return null;
}

function getClientKey(req: NextRequest): string {
  const forwardedFor = req.headers.get("x-forwarded-for");
  const firstForwarded = forwardedFor?.split(",")[0]?.trim();
  const ip =
    firstForwarded ||
    req.headers.get("x-real-ip") ||
    req.headers.get("cf-connecting-ip") ||
    "unknown";
  const ua = req.headers.get("user-agent")?.slice(0, 80) ?? "unknown";
  return `${ip}:${ua}`;
}

function pruneExpiredBuckets(now: number) {
  if (buckets.size < 500) return;
  for (const [key, bucket] of buckets) {
    if (bucket.resetAt <= now) buckets.delete(key);
  }
}

function originFromUrl(value: string): string | null {
  try {
    return new URL(value).origin.toLowerCase();
  } catch {
    return null;
  }
}

function reject(status: number, error: string, silent = false): NextResponse {
  if (silent) return new NextResponse(null, { status: 204 });
  return NextResponse.json({ ok: false, error }, { status });
}
