import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { z } from "zod";
import { guardJsonPost } from "@/lib/server/requestSecurity";

export const runtime = "nodejs";

const PageviewSchema = z.object({
  path: z.string().min(1).max(2048).refine((value) => value.startsWith("/")),
  referrer: z.string().max(2048).optional().nullable(),
  search: z.string().max(2048).optional().nullable(),
  anon_session_id: z.string().max(128).optional().nullable(),
});

const NO_CONTENT = new NextResponse(null, { status: 204 });
type UtmFields = {
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_term: string | null;
  utm_content: string | null;
};

function getIdigdataAppSupabase() {
  const url = process.env.IDIGDATA_APP_SUPABASE_URL;
  const serviceRoleKey = process.env.IDIGDATA_APP_SUPABASE_SERVICE_ROLE_KEY;
  const anonKey = process.env.IDIGDATA_APP_SUPABASE_ANON_KEY;
  const key = serviceRoleKey ?? anonKey;

  if (!url || !key) return null;

  return createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
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

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NO_CONTENT;
  }

  const parsed = PageviewSchema.safeParse(body);
  if (!parsed.success) return NO_CONTENT;

  const supabase = getIdigdataAppSupabase();
  if (!supabase) {
    console.warn("pageview: idigdata-app Supabase env not configured");
    return NO_CONTENT;
  }

  const ua = req.headers.get("user-agent");
  const utms = parseUtms(parsed.data.search);

  const row = {
    source: "idigdata-website",
    path: parsed.data.path,
    referrer: parsed.data.referrer?.slice(0, 2048) || null,
    user_agent: ua ? ua.slice(0, 1024) : null,
    anon_session_id: parsed.data.anon_session_id || null,
    ...utms,
  };

  const { error } = await supabase.from("pageviews").insert(row);
  if (error) {
    console.error(`pageview insert failed: ${error.message}`);
  }

  return NO_CONTENT;
}
