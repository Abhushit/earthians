/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com", // Add any external domains for images here (e.g., "example.com")
                port: "",
              },
        ]
    }
}

module.exports = nextConfig
