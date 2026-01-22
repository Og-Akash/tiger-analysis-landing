import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        hostname : "localhost",
        port: "1337"
      },
      {
        hostname : "tiger-analysis-strapi.onrender.com",
      }
    ]
  }
};

export default nextConfig;
