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
    ];
  },
};

export default nextConfig;
