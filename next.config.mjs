/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "myanimelist.net",
        port: "",
        pathname: "/signature/QingqueE6.png",
      },
    ],
  },
};

export default nextConfig;
