import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { projectsData } from "@/data/projects";
import { constructMetadata } from "@/lib/metadata";
import { ArrowLeft, ArrowRight, CheckCircle2, Building2, Tag } from "lucide-react";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return projectsData.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);
  if (!project) return {};

  return constructMetadata({
    title: `${project.title} | Roacs Corporation Case Study`,
    description: project.description,
    image: project.image,
    path: `/projects/${project.slug}`,
  });
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = projectsData.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <div>
      {/* Case Study Header */}
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
              href="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
                color: "var(--color-muted-blue)",
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to Case Studies</span>
            </Link>
          </div>

          <div style={{ maxWidth: "820px" }}>
            <div style={{ display: "flex", gap: "0.75rem", alignItems: "center", marginBottom: "0.75rem" }}>
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "var(--color-brand-accent)",
                }}
              >
                {project.industry}
              </span>
              <span style={{ color: "rgba(255, 255, 255, 0.4)" }}>&bull;</span>
              <span style={{ fontSize: "0.875rem", color: "var(--color-muted-blue)" }}>
                Client: {project.client}
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              {project.title}
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--color-muted-blue)",
                lineHeight: 1.6,
              }}
            >
              {project.description}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Case Study Content */}
      <section className="section section-light">
        <Container>
          {/* Main Visual Banner */}
          <div
            style={{
              position: "relative",
              width: "100%",
              height: "440px",
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              marginBottom: "3.5rem",
              boxShadow: "var(--shadow-xl)",
              backgroundColor: "#E2E8F0",
            }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3.5rem",
            }}
            className="case-study-body-grid"
          >
            {/* Left Content Column */}
            <div>
              {/* Challenge */}
              <div style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "var(--color-primary-navy)",
                    marginBottom: "1rem",
                  }}
                >
                  The Operational Challenge
                </h2>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div style={{ marginBottom: "2.5rem" }}>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "var(--color-primary-navy)",
                    marginBottom: "1rem",
                  }}
                >
                  The Engineering Solution
                </h2>
                <p
                  style={{
                    fontSize: "1.05rem",
                    lineHeight: 1.65,
                    color: "var(--color-text-secondary)",
                  }}
                >
                  {project.solution}
                </p>
              </div>

              {/* Verified Results */}
              <div>
                <h2
                  style={{
                    fontSize: "1.65rem",
                    fontWeight: 700,
                    color: "var(--color-primary-navy)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Verified Production Results
                </h2>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {project.results.map((res, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "1rem 1.25rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--color-bg-subtle)",
                        border: "1px solid var(--border-light)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        fontSize: "0.95rem",
                        fontWeight: 600,
                        color: "var(--color-primary-navy)",
                      }}
                    >
                      <CheckCircle2 size={18} color="var(--color-brand-accent)" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Meta Column */}
            <div>
              <div
                style={{
                  backgroundColor: "var(--color-bg-subtle)",
                  border: "1px solid var(--border-light)",
                  borderRadius: "var(--radius-md)",
                  padding: "2rem",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: 700,
                    color: "var(--color-primary-navy)",
                    marginBottom: "1.5rem",
                    borderBottom: "1px solid var(--border-light)",
                    paddingBottom: "0.75rem",
                  }}
                >
                  Project Summary
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem", marginBottom: "2rem" }}>
                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-text-muted)" }}>
                      Client Partner
                    </span>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-primary-navy)", marginTop: "0.2rem" }}>
                      {project.client}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-text-muted)" }}>
                      Industry
                    </span>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-primary-navy)", marginTop: "0.2rem" }}>
                      {project.industry}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-text-muted)" }}>
                      Service Engagement
                    </span>
                    <div style={{ fontSize: "1rem", fontWeight: 600, color: "var(--color-primary-navy)", marginTop: "0.2rem" }}>
                      {project.category}
                    </div>
                  </div>

                  <div>
                    <span style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", color: "var(--color-text-muted)" }}>
                      Core Technologies
                    </span>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem", marginTop: "0.4rem" }}>
                      {project.tags.map((t, idx) => (
                        <span
                          key={idx}
                          style={{
                            fontSize: "0.78rem",
                            backgroundColor: "#FFFFFF",
                            border: "1px solid var(--border-light)",
                            padding: "0.25rem 0.5rem",
                            borderRadius: "var(--radius-xs)",
                            color: "var(--color-text-primary)",
                          }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight size={16} />}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  Build a Similar System
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      
    </div>
  );
}
