/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }]; // required to make Konva & react-konva work
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_IMAGE_URL,
        port: '',
      },
      {
        protocol: 'https',
        hostname: process.env.NEXT_PUBLIC_STICKER_URL,
        port: '',
      },
    ],
  },
};

export default nextConfig;
