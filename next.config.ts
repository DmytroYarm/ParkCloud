import type { NextConfig } from "next";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1672trkrgk4ug.cloudfront.net",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "auto-star.ua",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ireland.apollo.olxcdn.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
