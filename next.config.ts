import type { NextConfig } from "next";
import 'dotenv/config';
require('dotenv').config();

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'example.com',
      },
      {
        protocol: 'https',
        hostname: 'another-example.com',
        pathname: '/images/**',
      },
    ],
  },
};