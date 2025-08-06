import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  
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
