import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { recordDoorKnock, shouldCaptureDoorKnock } from "@/lib/server/doorKnock";
import { parseInternalIpAllowlist } from "@/lib/traffic/websiteSignals";

const DOOR_SESSION_COOKIE = "idig_door_sid";
const DOOR_SEEN_COOKIE = "idig_door_seen";
const INTERNAL_COOKIE = "idig_internal_traffic";
const FLEET_COOKIE = "idig_fleet_traffic";
const DOOR_SESSION_SECONDS = 30 * 60;
const MARKER_SECONDS = 365 * 24 * 60 * 60;

export function proxy(req: NextRequest, event: NextFetchEvent) {
  const response = NextResponse.next();
  syncTrafficCookies(req, response);

  if (!shouldCaptureDoorKnock(req)) return response;

  const marks = resolveTrafficMarks(req);
  const isSeen = req.cookies.get(DOOR_SEEN_COOKIE)?.value === "1";
  const isAgentUa =
    /curl|wget|python|node-fetch|headless|playwright|puppeteer|bot|spider|crawl|x11; linux/i.test(
      req.headers.get("user-agent") ?? "",
    );

  const doorSessionId =
    req.cookies.get(DOOR_SESSION_COOKIE)?.value || crypto.randomUUID();
  stampDoorCookies(response, doorSessionId);

  // Always capture marked internal/fleet (even if door-seen) so DigOps gets the flag.
  // Unmarked agents/scanners still re-fire when UA looks automated.
  if (!isSeen || isAgentUa || marks.isInternalMarked || marks.isFleetMarked) {
    event.waitUntil(
      recordDoorKnock(req, {
        doorSessionId,
        isInternalMarked: marks.isInternalMarked,
        isFleetMarked: marks.isFleetMarked,
      }).catch((err) => {
        console.error("door knock capture failed:", err);
      }),
    );
  }

  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|icon.svg|apple-icon.png).*)"],
};

function syncTrafficCookies(req: NextRequest, response: NextResponse) {
  const secure = process.env.NODE_ENV === "production";
  const internal = req.nextUrl.searchParams.get("internal");
  const fleet = req.nextUrl.searchParams.get("fleet") ?? req.nextUrl.searchParams.get("agent");
  const clearInternal = req.nextUrl.searchParams.get("clear_internal");
  const clearFleet = req.nextUrl.searchParams.get("clear_fleet");

  if (internal === "1") {
    setMarkerCookie(response, INTERNAL_COOKIE, "1", secure);
  }
  if (internal === "0" || clearInternal === "1") {
    setMarkerCookie(response, INTERNAL_COOKIE, "", secure, 0);
  }

  if (fleet === "1") {
    setMarkerCookie(response, FLEET_COOKIE, "1", secure);
  }
  if (fleet === "0" || clearFleet === "1") {
    setMarkerCookie(response, FLEET_COOKIE, "", secure, 0);
  }

  // Header can mint the fleet cookie for Playwright without polluting the URL.
  if (isFleetHeaderAuthorized(req)) {
    setMarkerCookie(response, FLEET_COOKIE, "1", secure);
  }
}

function resolveTrafficMarks(req: NextRequest): {
  isInternalMarked: boolean;
  isFleetMarked: boolean;
} {
  const internalParam = req.nextUrl.searchParams.get("internal");
  const fleetParam =
    req.nextUrl.searchParams.get("fleet") ?? req.nextUrl.searchParams.get("agent");
  const clearInternal = req.nextUrl.searchParams.get("clear_internal") === "1";
  const clearFleet = req.nextUrl.searchParams.get("clear_fleet") === "1";

  const allowlist = parseInternalIpAllowlist(process.env.DIGOPS_INTERNAL_IPS);
  const clientIp = getClientIp(req);
  const ipAllowlisted = Boolean(clientIp && allowlist.includes(clientIp));

  let isInternalMarked = false;
  if (internalParam === "1" || ipAllowlisted) isInternalMarked = true;
  else if (internalParam === "0" || clearInternal) isInternalMarked = false;
  else isInternalMarked = req.cookies.get(INTERNAL_COOKIE)?.value === "1";

  let isFleetMarked = false;
  if (fleetParam === "1" || isFleetHeaderAuthorized(req)) isFleetMarked = true;
  else if (fleetParam === "0" || clearFleet) isFleetMarked = false;
  else isFleetMarked = req.cookies.get(FLEET_COOKIE)?.value === "1";

  return { isInternalMarked, isFleetMarked };
}

function isFleetHeaderAuthorized(req: NextRequest): boolean {
  const secret = process.env.DIGOPS_FLEET_BEACON_SECRET?.trim();
  if (!secret) return false;
  const header = req.headers.get("x-digops-traffic")?.trim();
  return header === `fleet:${secret}` || header === `agent:${secret}`;
}

function setMarkerCookie(
  response: NextResponse,
  name: string,
  value: string,
  secure: boolean,
  maxAge = MARKER_SECONDS,
) {
  response.cookies.set(name, value, {
    httpOnly: false,
    sameSite: "lax",
    secure,
    path: "/",
    maxAge,
  });
}

function stampDoorCookies(response: NextResponse, doorSessionId: string) {
  const secure = process.env.NODE_ENV === "production";
  const common = {
    httpOnly: false,
    sameSite: "lax" as const,
    secure,
    path: "/",
    maxAge: DOOR_SESSION_SECONDS,
  };

  response.cookies.set(DOOR_SESSION_COOKIE, doorSessionId, common);
  response.cookies.set(DOOR_SEEN_COOKIE, "1", common);
}

function getClientIp(req: NextRequest): string | null {
  const direct =
    req.headers.get("x-real-ip") ||
    req.headers.get("cf-connecting-ip") ||
    req.headers.get("true-client-ip") ||
    req.headers.get("x-vercel-forwarded-for");
  if (direct) return direct.split(",")[0]?.trim().slice(0, 128) || null;

  const forwarded = req.headers.get("x-forwarded-for");
  const first = forwarded?.split(",")[0]?.trim();
  return first ? first.slice(0, 128) : null;
}
