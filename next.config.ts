import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["example.com"],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true
  }
};

export default nextConfig;
