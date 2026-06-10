"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { getAnonSessionId, getCurrentTrafficSignal, trackWebsiteEvent } from "./websiteEvents";

const TRACK_PAGE_NAVIGATION = process.env.NEXT_PUBLIC_TRACK_PAGE_NAVIGATION === "1";

function send(path: string) {
  if (typeof window === "undefined") return;
  if (!TRACK_PAGE_NAVIGATION) return;

  const signal = getCurrentTrafficSignal(path);
  if (signal.suppress_pageview) return;

  trackWebsiteEvent({
    event_type: "pageview_event",
    path,
    payload: { legacy_pageview_route: true },
  });

  const payload = JSON.stringify({
    path,
    referrer: document.referrer || null,
    search: window.location.search || null,
    anon_session_id: getAnonSessionId(),
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
  });

  try {
    if (navigator.sendBeacon) {
      const blob = new Blob([payload], { type: "application/json" });
      const ok = navigator.sendBeacon("/api/pageview", blob);
      if (ok) return;
    }
    fetch("/api/pageview", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: payload,
      keepalive: true,
    }).catch(() => {});
  } catch {
    // analytics never breaks the page
  }
}

export default function PageviewBeacon() {
  const pathname = usePathname();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (!pathname) return;
    if (lastPath.current === pathname) return;
    lastPath.current = pathname;
    send(pathname);
  }, [pathname]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target instanceof Element ? event.target : null;
      const anchor = target?.closest("a[href]");
      if (!anchor) return;
      const href = anchor.getAttribute("href");
      if (!href) return;
      const text = (anchor.textContent ?? "").trim().slice(0, 120);

      if (href.startsWith("mailto:")) {
        trackWebsiteEvent({
          event_type: "mailto_click",
          payload: { href, text },
        });
        return;
      }

      trackWebsiteEvent({
        event_type: "cta_click",
        payload: { href, text },
      });
    }

    document.addEventListener("click", handleClick, { capture: true });
    return () => document.removeEventListener("click", handleClick, true);
  }, []);

  return null;
}
