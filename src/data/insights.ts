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
}

export const insightsData: InsightItem[] = [
  {
    id: "ai-in-business",
    slug: "how-ai-is-transforming-modern-business-operations",
    title: "How AI is Transforming Modern Business Operations",
    excerpt: "Explore how machine learning models, deterministic safeguards, and intelligent workflow automation are streamlining operational overhead and powering data-driven enterprise agility.",
    category: "Artificial Intelligence",
    readTime: "5 min read",
    publishedDate: "15 Mar, 2026",
    author: "Roacs Team",
    authorRole: "Applied Intelligence Practice",
    image: "/images/blog/blog-1.jpg"
  },
  {
    id: "web-development-trends-2026",
    slug: "top-web-development-trends-to-watch-in-2026",
    title: "Top Web Development Trends to Watch in 2026",
    excerpt: "From React Server Components and edge computing to streaming SSR and micro-frontends, discover the foundational modern web architectures driving enterprise performance.",
    category: "Web Engineering",
    readTime: "6 min read",
    publishedDate: "10 Mar, 2026",
    author: "Roacs Team",
    authorRole: "Frontend Systems Architecture",
    image: "/images/blog/blog-2.jpg"
  },
  {
    id: "cloud-solutions-scalability",
    slug: "why-cloud-solutions-are-essential-for-business-scalability",
    title: "Why Cloud Solutions are Essential for Business Scalability",
    excerpt: "Why modern enterprises rely on automated DevOps pipelines, multi-region container clusters, and elastic cloud infrastructure to achieve zero-downtime reliability and sustainable growth.",
    category: "Cloud & DevOps",
    readTime: "5 min read",
    publishedDate: "05 Mar, 2026",
    author: "Roacs Team",
    authorRole: "Cloud Infrastructure Engineering",
    image: "/images/blog/blog-3.jpg"
  }
];
