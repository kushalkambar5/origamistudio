import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/sitemap.txt",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/sitemap.ts",
        destination: "/sitemap.xml",
        permanent: true,
      },
      {
        source: "/sitemap",
        destination: "/sitemap.xml",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
