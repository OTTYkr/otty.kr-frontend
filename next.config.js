/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {},
  experimental: {
    scrollRestoration: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "otty.kr",
        port: "",
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
