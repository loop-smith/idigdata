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
};

export default nextConfig;
