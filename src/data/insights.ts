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
}

export const insightsData: InsightItem[] = [
  {
    id: "scalable-web-architecture",
    slug: "architecting-scalable-web-platforms-nextjs",
    title: "Architecting Scalable Enterprise Web Platforms with Next.js and Modern Server Components",
    excerpt: "How modern React Server Components and hybrid rendering decouple data-fetching bottlenecks, drastically cut bundle sizes, and improve Core Web Vitals for high-concurrency systems.",
    category: "Software Engineering",
    readTime: "6 min read",
    publishedDate: "November 2026",
    author: "Roacs Engineering Team",
    authorRole: "Systems Architecture Group"
  },
  {
    id: "zero-downtime-database-migrations",
    slug: "zero-downtime-cloud-database-migrations",
    title: "Zero-Downtime Database Migration Patterns in Mission-Critical Production Environments",
    excerpt: "Practical architectural patterns using dual-write buffers, blue-green cutovers, and backward-compatible schemas to modernize database tiers without impacting operational uptime.",
    category: "Cloud & DevOps",
    readTime: "8 min read",
    publishedDate: "October 2026",
    author: "Roacs DevOps Practice",
    authorRole: "Infrastructure Engineering"
  },
  {
    id: "practical-ai-enterprise-automation",
    slug: "practical-llm-orchestration-in-b2b-workflows",
    title: "Pragmatic AI & LLM Orchestration in Regulated Enterprise Workflows",
    excerpt: "Moving beyond superficial chatbot demos: How deterministic safeguards, semantic validation, and retrieval-augmented generation produce verifiable cost reductions in business operations.",
    category: "Artificial Intelligence",
    readTime: "7 min read",
    publishedDate: "September 2026",
    author: "Roacs AI & Research Lab",
    authorRole: "Applied Intelligence"
  }
];
