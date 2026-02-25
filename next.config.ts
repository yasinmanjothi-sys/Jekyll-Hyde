import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Required for 20i static hosting
  trailingSlash: true, // Forces generation of [route]/index.html to prevent 403 Forbidden errors
  images: {
    unoptimized: true // 20i doesn't support Next.js image optimization
  }
};

export default nextConfig;
