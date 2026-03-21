import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [360, 414, 640, 750, 828, 1080, 1200, 1920],
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'adanipanvelnavimumbai.com' },
      { protocol: 'https', hostname: 'samyak21.com' },
      { protocol: 'https', hostname: 'housiey.com' },
      { protocol: 'https', hostname: 'destinationcompress.s3.ap-south-1.amazonaws.com' },
      { protocol: 'https', hostname: 'tpvvishwakarma.com' },
      { protocol: 'https', hostname: 'imagecdn.99acres.com' },
      { protocol: 'https', hostname: 'images.openai.com' },
      { protocol: 'https', hostname: 'is1-3.housingcdn.com' },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)\\.jpg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)\\.jpeg',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)\\.png',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)\\.webp',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)\\.mp4',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
      {
        source: '/(.*)\\.woff2',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
