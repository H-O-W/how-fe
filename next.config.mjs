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
  reactStrictMode: true,
  compress: true,
};

export default nextConfig;
