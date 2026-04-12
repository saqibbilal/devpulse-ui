import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.mbilal.ca', // Your live production API
        pathname: '/storage/**',
      },
      {
        protocol: 'https',
        hostname: 'devpulse-assets.s3.amazonaws.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'devpulse-assets.s3.us-east-1.amazonaws.com', // 👈 Specific S3 Bucket
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;