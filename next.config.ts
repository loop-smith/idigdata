import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.idigdata.com" }],
        destination: "https://idigdata.com/:path*/",
        permanent: true,
      },
      {
        source: "/atlas",
        destination: "/approach/#engagement-roadmap",
        permanent: true,
      },
      {
        source: "/atlas/",
        destination: "/approach/#engagement-roadmap",
        permanent: true,
      },
      {
        source: "/atlas/:path*",
        destination: "/approach/#engagement-roadmap",
        permanent: true,
      },
      {
        source: "/about",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/boss",
        destination: "/agentics/",
        permanent: true,
      },
      {
        source: "/boss/",
        destination: "/agentics/",
        permanent: true,
      },
      {
        source: "/boss/:path*",
        destination: "/agentics/",
        permanent: true,
      },
      {
        source: "/capabilities",
        destination: "/approach/",
        permanent: true,
      },
      {
        source: "/capabilities/",
        destination: "/approach/",
        permanent: true,
      },
    ];
  },
  async headers() {
    // bp6 O-006: baseline security headers for a static marketing site.
    // CSP intentionally deferred — a Content-Security-Policy must be authored
    // against the inline JSON-LD scripts (dangerouslySetInnerHTML) + Vercel
    // Analytics and verified with a real build + live smoke before shipping,
    // or it will break structured data / analytics. Tracked in bp6 O-006 receipt.
    const securityHeaders = [
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
      { key: "X-DNS-Prefetch-Control", value: "on" },
    ];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
