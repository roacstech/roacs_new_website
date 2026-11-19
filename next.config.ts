import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/services.html",
        destination: "/services",
        permanent: true,
      },
      {
        source: "/projects.html",
        destination: "/projects",
        permanent: true,
      },
      {
        source: "/contact.html",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/team.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/faq.html",
        destination: "/contact",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
