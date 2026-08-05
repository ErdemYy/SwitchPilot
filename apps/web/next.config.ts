import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@switchpilot/ui', '@switchpilot/types'],
  typedRoutes: true,
};

export default nextConfig;
