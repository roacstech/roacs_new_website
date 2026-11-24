import { notFound } from "next/navigation";
import { insightsData } from "@/data/insights";
import { constructMetadata } from "@/lib/metadata";
import { ArticleDetailView } from "@/components/insights/ArticleDetailView";

interface InsightDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return insightsData.map((i) => ({
    slug: i.slug,
  }));
}

export async function generateMetadata({ params }: InsightDetailPageProps) {
  const { slug } = await params;
  const item = insightsData.find((i) => i.slug === slug);
  if (!item) return {};

  return constructMetadata({
    title: `${item.title} | Roacs Corporation Engineering`,
    description: item.excerpt,
    path: `/insights/${item.slug}`,
  });
}

export default async function InsightDetailPage({ params }: InsightDetailPageProps) {
  const { slug } = await params;
  const item = insightsData.find((i) => i.slug === slug);

  if (!item) {
    notFound();
  }

  // Calculate unique categories and post counts for sidebar
  const categoryMap = new Map<string, number>();
  insightsData.forEach((post) => {
    const count = categoryMap.get(post.category) || 0;
    categoryMap.set(post.category, count + 1);
  });

  const categories = Array.from(categoryMap.entries()).map(([name, count]) => ({
    name,
    count,
  }));

  return (
    <ArticleDetailView
      item={item}
      recentPosts={insightsData}
      categories={categories}
    />
  );
}
