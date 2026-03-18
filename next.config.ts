import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'plus.unsplash.com' },
      { protocol: 'https', hostname: 'adanipanvelnavimumbai.com' },
      { protocol: 'https', hostname: 'samyak21.com' },
      { protocol: 'https', hostname: 'housiey.com' },
      { protocol: 'https', hostname: 'destinationcompress.s3.ap-south-1.amazonaws.com' },
      { protocol: 'https', hostname: 'tpvvishwakarma.com' },
      { protocol: 'https', hostname: 'imagecdn.99acres.com' },
    ],
  },
};

export default nextConfig;
