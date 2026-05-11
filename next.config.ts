import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  async redirects() {
    return [
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
