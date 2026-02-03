import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  images: { unoptimized: true } // Image optimization requires a server usually, so unoptimized is safer for pure static export
};

export default nextConfig;
