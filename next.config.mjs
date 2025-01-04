/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myanimelist.net",
        port: "",
        pathname: "/signature/Akkowiz.png",
      },
    ],
  },
};

export default nextConfig;
