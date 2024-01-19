/** @type {import('next').NextConfig} */
const nextConfig = {
  image: {
    remotePattern: [
      {
        protocol: "https",
        hostname: "image.pexels.com",
        hostname: "pexels.com",
      },
    ],
  },
};

module.exports = nextConfig;
