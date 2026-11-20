import { MetadataRoute } from "next";
import { servicesData } from "@/data/services";
import { projectsData } from "@/data/projects";
import { insightsData } from "@/data/insights";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://roacs.com";
  const lastModified = new Date();

  // Core static pages
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/industries`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/insights`,
      lastModified,
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/material-management`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/faq`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },
  ];

  // Dynamic Service pages
  const serviceRoutes: MetadataRoute.Sitemap = servicesData.map((s) => ({
    url: `${baseUrl}/services/${s.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Dynamic Project case study pages
  const projectRoutes: MetadataRoute.Sitemap = projectsData.map((p) => ({
    url: `${baseUrl}/projects/${p.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  // Dynamic Insight pages
  const insightRoutes: MetadataRoute.Sitemap = insightsData.map((i) => ({
    url: `${baseUrl}/insights/${i.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [...staticRoutes, ...serviceRoutes, ...projectRoutes, ...insightRoutes];
}
