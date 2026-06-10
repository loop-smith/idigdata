import { NextResponse, type NextFetchEvent, type NextRequest } from "next/server";
import { recordDoorKnock, shouldCaptureDoorKnock } from "@/lib/server/doorKnock";

const DOOR_SESSION_COOKIE = "idig_door_sid";
const DOOR_SEEN_COOKIE = "idig_door_seen";
const INTERNAL_COOKIE = "idig_internal_traffic";
const DOOR_SESSION_SECONDS = 30 * 60;
const INTERNAL_SECONDS = 365 * 24 * 60 * 60;

export function proxy(req: NextRequest, event: NextFetchEvent) {
  const response = NextResponse.next();
  syncInternalCookie(req, response);

  if (!shouldCaptureDoorKnock(req)) return response;

  const isInternalMarked = isInternalTraffic(req);
  const isSeen = req.cookies.get(DOOR_SEEN_COOKIE)?.value === "1";
  const isAgent = /curl|wget|python|node-fetch|headless|playwright|puppeteer|bot|spider|crawl|x11; linux/i.test(
    req.headers.get("user-agent") ?? "",
  );

  const doorSessionId =
    req.cookies.get(DOOR_SESSION_COOKIE)?.value || crypto.randomUUID();
  stampDoorCookies(response, doorSessionId);

  if (!isSeen || isAgent) {
    event.waitUntil(
      recordDoorKnock(req, {
        doorSessionId,
        isInternalMarked,
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

function syncInternalCookie(req: NextRequest, response: NextResponse) {
  const internal = req.nextUrl.searchParams.get("internal");
  const clearInternal = req.nextUrl.searchParams.get("clear_internal");
  const secure = process.env.NODE_ENV === "production";

  if (internal === "1") {
    response.cookies.set(INTERNAL_COOKIE, "1", {
      httpOnly: false,
      sameSite: "lax",
      secure,
      path: "/",
      maxAge: INTERNAL_SECONDS,
    });
  }

  if (internal === "0" || clearInternal === "1") {
    response.cookies.set(INTERNAL_COOKIE, "", {
      httpOnly: false,
      sameSite: "lax",
      secure,
      path: "/",
      maxAge: 0,
    });
  }
}

function isInternalTraffic(req: NextRequest): boolean {
  const internal = req.nextUrl.searchParams.get("internal");
  if (internal === "1") return true;
  if (internal === "0" || req.nextUrl.searchParams.get("clear_internal") === "1") {
    return false;
  }
  return req.cookies.get(INTERNAL_COOKIE)?.value === "1";
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
