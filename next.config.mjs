/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  webpack: (config) => {
    config.externals = [...config.externals, { canvas: 'canvas' }]; // required to make Konva & react-konva work
    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 's3.ap-northeast-2.amazonaws.com',
        port: '',
      },
    ],
  },
  output: 'standalone',
};

export default nextConfig;
