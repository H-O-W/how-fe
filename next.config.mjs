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
};

export default nextConfig;
