import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  webpack: (config, { isServer }) => {
    if (!isServer) {
      // Prevent pdfjs-dist from trying to load 'canvas' on the client
      config.resolve.alias.canvas = false;
    }
    return config;
  },
};

export default nextConfig;
