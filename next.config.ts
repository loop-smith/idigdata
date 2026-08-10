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
        destination: "/method/",
        permanent: true,
      },
      {
        source: "/atlas/",
        destination: "/method/",
        permanent: true,
      },
      {
        source: "/atlas/:path*",
        destination: "/method/",
        permanent: true,
      },
      {
        source: "/approach",
        destination: "/method/",
        permanent: true,
      },
      {
        source: "/approach/",
        destination: "/method/",
        permanent: true,
      },
      {
        source: "/approach/:path*",
        destination: "/method/",
        permanent: true,
      },
      {
        source: "/applied-agentics",
        destination: "/method/#agentics",
        permanent: true,
      },
      {
        source: "/applied-agentics/",
        destination: "/method/#agentics",
        permanent: true,
      },
      {
        source: "/applied-agentics/:path*",
        destination: "/method/#agentics",
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
        destination: "/work/#boss",
        permanent: true,
      },
      {
        source: "/boss/",
        destination: "/work/#boss",
        permanent: true,
      },
      {
        source: "/boss/:path*",
        destination: "/work/#boss",
        permanent: true,
      },
      {
        source: "/systems",
        destination: "/work/",
        permanent: true,
      },
      {
        source: "/systems/",
        destination: "/work/",
        permanent: true,
      },
      {
        source: "/agentics",
        destination: "/method/#agentics",
        permanent: true,
      },
      {
        source: "/agentics/",
        destination: "/method/#agentics",
        permanent: true,
      },
      {
        source: "/agentics/:path*",
        destination: "/method/#agentics",
        permanent: true,
      },
      {
        source: "/rig",
        destination: "/work/#rig",
        permanent: true,
      },
      {
        source: "/rig/",
        destination: "/work/#rig",
        permanent: true,
      },
      {
        source: "/flowcraft",
        destination: "/work/#flowcraft",
        permanent: true,
      },
      {
        source: "/flowcraft/",
        destination: "/work/#flowcraft",
        permanent: true,
      },
      {
        source: "/capabilities",
        destination: "/method/",
        permanent: true,
      },
      {
        source: "/capabilities/",
        destination: "/method/",
        permanent: true,
      },
      {
        source: "/engagement",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/engagement/",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/engagement/:path*",
        destination: "/contact/",
        permanent: true,
      },
      {
        source: "/articles",
        destination: "/",
        permanent: true,
      },
      {
        source: "/articles/",
        destination: "/",
        permanent: true,
      },
      {
        source: "/articles/:path*",
        destination: "/",
        permanent: true,
      },
    ];
  },
  async headers() {
    const scriptSrc = [
      "'self'",
      "'unsafe-inline'",
      ...(process.env.NODE_ENV !== "production" ? ["'unsafe-eval'"] : []),
      "https://va.vercel-scripts.com",
    ].join(" ");
    const csp = [
      "default-src 'self'",
      "base-uri 'self'",
      "connect-src 'self' https: wss:",
      "font-src 'self' data:",
      "form-action 'self' mailto:",
      "frame-ancestors 'self'",
      "frame-src 'self'",
      "img-src 'self' data: blob: https:",
      "manifest-src 'self'",
      "object-src 'none'",
      `script-src ${scriptSrc}`,
      "style-src 'self' 'unsafe-inline'",
      "worker-src 'self' blob:",
    ].join("; ");

    const securityHeaders = [
      { key: "Content-Security-Policy", value: csp },
      { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "SAMEORIGIN" },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=(), browsing-topics=()" },
      { key: "X-DNS-Prefetch-Control", value: "on" },
      { key: "X-Permitted-Cross-Domain-Policies", value: "none" },
      { key: "Origin-Agent-Cluster", value: "?1" },
    ];
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
