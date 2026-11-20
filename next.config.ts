import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    cpus: 1,
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
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/material-management.html",
        destination: "/material-management",
        permanent: true,
      },
      {
        source: "/blog-grid.html",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/blog-standard.html",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/blog-details.html",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/blog-details-2.html",
        destination: "/insights",
        permanent: true,
      },
      {
        source: "/it-consultancy.html",
        destination: "/services/it-consultancy",
        permanent: true,
      },
      {
        source: "/custom-software-development.html",
        destination: "/services/custom-software-development",
        permanent: true,
      },
      {
        source: "/web-app-development.html",
        destination: "/services/web-development",
        permanent: true,
      },
      {
        source: "/mobile-app-development.html",
        destination: "/services/mobile-development",
        permanent: true,
      },
      {
        source: "/ui-ux-design.html",
        destination: "/services/ui-ux-design",
        permanent: true,
      },
      {
        source: "/cloud-devops.html",
        destination: "/services/cloud-devops",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
