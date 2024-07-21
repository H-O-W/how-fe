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
  compiler: {
    removeConsole: {
      exclude: ["error", "warn"],
    },
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_PORT: process.env.NEXT_PUBLIC_PORT,
  },
};

export default nextConfig;
