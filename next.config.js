/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/rooms/:id",
        destination: "/rooms/[id]",
      },
    ];
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
