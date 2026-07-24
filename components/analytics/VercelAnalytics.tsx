"use client";

import { Analytics } from "@vercel/analytics/react";

export default function VercelAnalytics() {
  return (
    <Analytics
      beforeSend={(event) => {
        try {
          if (window.localStorage.getItem("idig_analytics_opt_out") === "1") {
            return null;
          }
        } catch {
          // ignore
        }
        return event;
      }}
    />
  );
}
