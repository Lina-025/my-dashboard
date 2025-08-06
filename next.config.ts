import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    appDir: true,
  },
  // Tell Next.js to look for pages/app directory inside the 'src' folder
  // This is often needed when using a custom source directory
  distDir: '.next',
  webpack(config) {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': __dirname + '/src',
    };
    return config;
  },
};

export default nextConfig;


