/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com", // Add any external domains for images here (e.g., "example.com")
        port: "",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com", // Add any external domains for images here (e.g., "example.com")
        port: "",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com", // Add any external domains for images here (e.g., "example.com")
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
