export interface ParallaxProduct {
  title: string;
  link: string;
  thumbnail: string;
  category?: string;
}

export const servicesParallaxProducts: ParallaxProduct[] = [
  // Row 1: Core Practice Areas (6 items)
  {
    title: "Custom Software Development",
    link: "/services/custom-software-development",
    thumbnail: "/images/services/custom-software.avif",
    category: "Enterprise Practice",
  },
  {
    title: "Web Application Development",
    link: "/services/web-development",
    thumbnail: "/images/services/web-development.jpg",
    category: "Modern Web",
  },
  {
    title: "Mobile Application Development",
    link: "/services/mobile-development",
    thumbnail: "/images/services/mobile-development.webp",
    category: "iOS & Android",
  },
  {
    title: "AI & Intelligent Automation",
    link: "/services/ai-solutions",
    thumbnail: "/images/hero-network-sphere.jpg",
    category: "GenAI & ML",
  },
  {
    title: "Cloud & DevOps Solutions",
    link: "/services/cloud-devops",
    thumbnail: "/images/services/cloud-devops.jpeg",
    category: "Cloud Infrastructure",
  },
  {
    title: "UI/UX Design Excellence",
    link: "/services/ui-ux-design",
    thumbnail: "/images/services/ui-ux-design.png",
    category: "Product Design",
  },

  // Row 2: Proprietary Products & Flagship Deliverables (6 items)
  {
    title: "Roacs Material Management",
    link: "/material-management",
    thumbnail: "/images/products/material-management-o2.1.jpg",
    category: "Proprietary Software",
  },
  {
    title: "Warehouse & Stock Automation",
    link: "/material-management",
    thumbnail: "/images/products/inventory-management-01.jpg",
    category: "Enterprise Platform",
  },
  {
    title: "Strategic IT Consultancy",
    link: "/services/it-consultancy",
    thumbnail: "/images/services/it-consultancy.jpg",
    category: "Advisory & Strategy",
  },
  {
    title: "AccuPose Health Platform",
    link: "/projects",
    thumbnail: "/images/projects/accupose.png",
    category: "Client Success",
  },
  {
    title: "Cazanoo Real Estate Portal",
    link: "/projects",
    thumbnail: "/images/projects/cazanoo.png",
    category: "Client Platform",
  },
  {
    title: "Tetas Smart Logistics",
    link: "/projects",
    thumbnail: "/images/projects/tetas.png",
    category: "Supply Chain",
  },
];
