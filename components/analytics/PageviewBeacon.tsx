"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

const SESSION_KEY = "idig_anon_sid";

function getAnonSessionId(): string | null {
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

function send(path: string) {
  if (typeof window === "undefined") return;
  const payload = JSON.stringify({
    path,
    referrer: document.referrer || null,
    search: window.location.search || null,
    anon_session_id: getAnonSessionId(),
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

  return null;
}
