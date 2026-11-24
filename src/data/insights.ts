export interface InsightItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  authorRole: string;
  image?: string;
  heroImage?: string;
  tags?: string[];
}

export const insightsData: InsightItem[] = [
  {
    id: "why-your-business-needs-custom-web-application-2026",
    slug: "why-your-business-needs-a-custom-web-application-in-2026",
    title: "Why Your Business Needs a Custom Web Application in 2026",
    excerpt: "Discover why off-the-shelf software falls short and how custom web applications provide tailored workflows, superior performance, and long-term scalability for growing businesses.",
    category: "Custom Web Application",
    readTime: "5 min read",
    publishedDate: "15 Mar, 2026",
    author: "Roacs Team",
    authorRole: "Custom Software Practice",
    image: "/images/blog/blog-1.jpg",
    heroImage: "/images/insights/article-hero-bg.jpg",
    tags: ["custom-web", "enterprise", "scalability"]
  },
  {
    id: "top-7-benefits-react-nodejs-scalable-apps",
    slug: "top-7-benefits-of-using-react-and-nodejs-for-scalable-apps",
    title: "Top 7 Benefits of Using React & Node.js for Scalable Apps",
    excerpt: "Explore the architectural synergy between React frontend components and high-throughput Node.js backends for powering modern, responsive, and horizontally scalable web applications.",
    category: "Full Stack Engineering",
    readTime: "6 min read",
    publishedDate: "10 Mar, 2026",
    author: "Roacs Team",
    authorRole: "Full Stack Architecture",
    image: "/images/blog/blog-2.jpg",
    heroImage: "/images/insights/article-hero-react-node.jpg",
    tags: ["react", "nodejs", "fullstack"]
  },
  {
    id: "how-cloud-deployment-improves-business-performance",
    slug: "how-cloud-deployment-improves-business-performance",
    title: "How Cloud Deployment Improves Business Performance",
    excerpt: "Learn how migrating enterprise infrastructure to modern elastic cloud platforms reduces latency, optimizes server costs, and achieves continuous 99.99% availability.",
    category: "Cloud Solutions",
    readTime: "5 min read",
    publishedDate: "05 Mar, 2026",
    author: "Roacs Team",
    authorRole: "Cloud Infrastructure Practice",
    image: "/images/blog/blog-3.jpg",
    heroImage: "/images/insights/article-hero-cloud.jpg",
    tags: ["cloud", "devops", "performance"]
  },
  {
    id: "best-practices-secure-web-application-development",
    slug: "best-practices-for-secure-web-application-development",
    title: "Best Practices for Secure Web Application Development",
    excerpt: "From automated dependency vulnerability scanning and robust token-based authentication to strict CORS and sanitization policies, implement defense-in-depth across your stack.",
    category: "Web Security",
    readTime: "7 min read",
    publishedDate: "01 Mar, 2026",
    author: "Roacs Team",
    authorRole: "Application Security Engineering",
    image: "/images/blog/blog-4.jpg",
    heroImage: "/images/insights/article-hero-security.jpg",
    tags: ["security", "owasp", "web-dev"]
  },
  {
    id: "devops-cicd-speeding-up-software-delivery",
    slug: "devops-and-cicd-speeding-up-your-software-delivery",
    title: "DevOps & CI/CD: Speeding Up Your Software Delivery",
    excerpt: "Discover how automated testing pipelines, trunk-based development, and containerized deployment workflows eliminate release bottlenecks and accelerate developer velocity.",
    category: "DevOps & CI/CD",
    readTime: "5 min read",
    publishedDate: "25 Feb, 2026",
    author: "Roacs Team",
    authorRole: "DevOps & Automation Team",
    image: "/images/blog/blog-5.jpg",
    heroImage: "/images/insights/article-hero-devops.jpg",
    tags: ["devops", "cicd", "automation"]
  },
  {
    id: "common-mistakes-businesses-make-in-it-projects",
    slug: "common-mistakes-businesses-make-in-it-projects",
    title: "Common Mistakes Businesses Make in IT Projects",
    excerpt: "Avoid costly pitfalls in software development projects—from scope creep and vague technical specifications to inadequate QA and delayed architectural planning.",
    category: "IT Consultancy",
    readTime: "6 min read",
    publishedDate: "20 Feb, 2026",
    author: "Roacs Team",
    authorRole: "Strategic Technology Advisory",
    image: "/images/blog/blog-6.jpg",
    heroImage: "/images/insights/article-hero-consultancy.jpg",
    tags: ["consultancy", "project-management", "it-strategy"]
  }
];
