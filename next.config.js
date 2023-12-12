/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {},
  experimental: {
    scrollRestoration: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.otty.kr/:path*",
      },
    ];
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
