import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  basePath: '/balakrishnan.github.io',
  images: {
    unoptimized: true,
  },
  reactCompiler: true,
};

export default nextConfig;
