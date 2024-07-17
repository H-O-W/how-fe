/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.freedommayer.com",
      },
    ],
  },
  reactStrictMode: false,
  compress: true,
};

export default nextConfig;
