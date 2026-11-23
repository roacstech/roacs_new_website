export interface ParallaxProduct {
  title: string;
  link: string;
  thumbnail: string;
  category?: string;
}

export const servicesParallaxProducts: ParallaxProduct[] = [
  // Row 1: Core Engineering & Product Practices (Items 1 to 5)
  {
    title: "UI/UX Design Excellence",
    link: "/services/ui-ux-design",
    thumbnail: "/images/services/ui-ux-design.jpg",
    category: "Product Design",
  },
  {
    title: "Cloud & DevOps Solutions",
    link: "/services/cloud-devops",
    thumbnail: "/images/services/cloud-devops.jpg",
    category: "Cloud Infrastructure",
  },
  {
    title: "AI & Intelligent Automation",
    link: "/services/ai-solutions",
    thumbnail: "/images/services/ai-solutions.jpg",
    category: "GenAI & ML",
  },
  {
    title: "Mobile Application Development",
    link: "/services/mobile-development",
    thumbnail: "/images/services/mobile-development.webp",
    category: "iOS & Android",
  },
  {
    title: "Web Application Development",
    link: "/services/web-development",
    thumbnail: "/images/services/web-app-development.jpg",
    category: "Modern Web",
  },

  // Row 2: Advisory, Architecture & Flagship Platforms (Items 6 to 10)
  {
    title: "IT Consultancy",
    link: "/services/it-consultancy",
    thumbnail: "/images/services/it-strategy-consultancy.jpg",
    category: "Advisory & Strategy",
  },
  {
    title: "Cybersecurity",
    link: "/services",
    thumbnail: "/images/services/cybersecurity.jpg",
    category: "Enterprise Security",
  },
  {
    title: "API & Microservices Architecture",
    link: "/services",
    thumbnail: "/images/services/api-microservices.jpg",
    category: "System Integration",
  },
  {
    title: "Travel & Healthcare Platforms",
    link: "/projects",
    thumbnail: "/images/services/travel-healthcare.jpg",
    category: "Industry Solutions",
  },
  {
    title: "Roacs Material Management",
    link: "/material-management",
    thumbnail: "/images/services/material-management.jpg",
    category: "Proprietary Software",
  },
];
