/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lirp.cdn-website.com',
      },
      {
        protocol: 'https',
        hostname: 'imagedelivery.net'
      },
      {
        protocol: 'https',
        hostname: 'yanoescoleccionable.com'
      }
    ],
  },
};

export default nextConfig;
