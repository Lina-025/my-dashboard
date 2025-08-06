import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Remove the 'experimental' block entirely
  // experimental: {
  //   appDir: true,
  // },
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
