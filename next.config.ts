import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Required for 20i static hosting
  images: {
    unoptimized: true // 20i doesn't support Next.js image optimization
  }
};

export default nextConfig;
