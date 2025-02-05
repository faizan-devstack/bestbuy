import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "merchandising-assets.bestbuy.ca",
      },
      {
        protocol: "https",
        hostname: "multimedia.bbycastatic.ca",
      },
    ]
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
