/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
    domains: ['localhost', 'vercel.app'],
  },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
