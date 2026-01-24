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
      },
      {
        hostname : "res.cloudinary.com",
      }
    ]
  }
};

export default nextConfig;
