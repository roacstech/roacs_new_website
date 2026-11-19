import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { insightsData } from "@/data/insights";
import { constructMetadata } from "@/lib/metadata";
import { ArrowLeft, Clock, Calendar, User, ArrowRight } from "lucide-react";

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

  return (
    <div>
      <section
        style={{
          backgroundColor: "var(--color-primary-navy)",
          color: "#FFFFFF",
          paddingTop: "4.5rem",
          paddingBottom: "4.5rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Container>
          <div style={{ marginBottom: "1.5rem" }}>
            <Link
              href="/insights"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
                color: "var(--color-muted-blue)",
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to All Articles</span>
            </Link>
          </div>

          <div style={{ maxWidth: "840px" }}>
            <div style={{ display: "flex", gap: "1rem", alignItems: "center", marginBottom: "1rem" }}>
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-brand-accent)",
                }}
              >
                {item.category}
              </span>
              <span style={{ color: "rgba(255, 255, 255, 0.4)" }}>&bull;</span>
              <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.85rem", color: "var(--color-muted-blue)" }}>
                <Clock size={14} />
                <span>{item.readTime}</span>
              </div>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.25rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "1.25rem",
                lineHeight: 1.2,
              }}
            >
              {item.title}
            </h1>

            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", color: "var(--color-muted-blue)", fontSize: "0.9rem" }}>
              <User size={16} color="var(--color-brand-accent)" />
              <span>By {item.author} ({item.authorRole})</span>
              <span>&bull;</span>
              <span>{item.publishedDate}</span>
            </div>
          </div>
        </Container>
      </section>

      {/* Article Content */}
      <section className="section section-light">
        <Container>
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              fontSize: "1.1rem",
              lineHeight: 1.8,
              color: "var(--color-text-secondary)",
            }}
          >
            <p style={{ fontSize: "1.25rem", lineHeight: 1.6, fontWeight: 500, color: "var(--color-primary-navy)", marginBottom: "2rem" }}>
              {item.excerpt}
            </p>

            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--color-primary-navy)", marginTop: "2.5rem", marginBottom: "1rem" }}>
              Executive Summary & Practical Considerations
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              In modern enterprise software engineering, architectural decisions must constantly balance velocity against technical debt. Systems designed around decoupled boundaries, deterministic testing, and observable metrics consistently exhibit 4x fewer critical production incidents than tightly bound monolithic counterparts.
            </p>

            <h2 style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--color-primary-navy)", marginTop: "2.5rem", marginBottom: "1rem" }}>
              Architectural Guardrails for Production Systems
            </h2>
            <p style={{ marginBottom: "1.5rem" }}>
              Before introducing new distributed microservices or third-party AI dependencies into mission-critical pipelines, engineering leaders should establish strict boundary contracts. Every asynchronous process should feature idempotent retry logic, circuit-breaker fallbacks, and real-time distributed tracing.
            </p>

            <div
              style={{
                backgroundColor: "var(--color-bg-subtle)",
                borderLeft: "4px solid var(--color-brand-accent)",
                padding: "1.5rem 1.75rem",
                borderRadius: "0 var(--radius-sm) var(--radius-sm) 0",
                marginTop: "2.5rem",
                marginBottom: "2.5rem",
              }}
            >
              <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.5rem" }}>
                Key Takeaway for CTOs and Engineering Managers:
              </h4>
              <p style={{ fontSize: "1rem", color: "var(--color-text-primary)", margin: 0 }}>
                Measure total cost of ownership across maintenance and incident recovery—not just initial build speed. Well-governed architecture yields compound returns across multi-year lifecycles.
              </p>
            </div>

            <div
              style={{
                borderTop: "1px solid var(--border-light)",
                paddingTop: "2.5rem",
                marginTop: "3.5rem",
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1.5rem",
              }}
            >
              <div>
                <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--color-primary-navy)", marginBottom: "0.25rem" }}>
                  Discuss this topic with Roacs architects
                </h4>
                <p style={{ fontSize: "0.9rem", color: "var(--color-text-muted)", margin: 0 }}>
                  We provide advisory reviews for enterprise codebases and cloud platforms.
                </p>
              </div>

              <Button href="/contact" variant="primary" icon={<ArrowRight size={16} />}>
                Consult With Our Architects
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
