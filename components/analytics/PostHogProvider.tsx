"use client";

import { useEffect } from "react";
import posthog from "posthog-js";

export default function PostHogProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
    const host =
      process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

    if (!key) return;
    if (posthog.__loaded) return;

    posthog.init(key, {
      api_host: host,
      capture_pageview: true,
      capture_pageleave: true,
      autocapture: false,
      session_recording: {
        maskAllInputs: true,
      },
      person_profiles: "identified_only",
    });

    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.log("[PostHog] initialized");
    }
  }, []);

  return <>{children}</>;
}
