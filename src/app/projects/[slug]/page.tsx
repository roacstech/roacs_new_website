import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { projectsData } from "@/data/projects";
import { constructMetadata } from "@/lib/metadata";
import { ArrowLeft, CheckCircle2, ChevronsRight } from "lucide-react";
import { ProjectScrollMockup } from "@/components/projects/ProjectScrollMockup";

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
      {/* Case Study Header with Background Banner */}
      <section
        style={{
          position: "relative",
          backgroundColor: "var(--color-primary-navy)",
          color: "#FFFFFF",
          paddingTop: "5rem",
          paddingBottom: "5.5rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          overflow: "hidden",
        }}
      >
        {/* Background Banner Image if available */}
        {project.bannerImage && (
          <>
            <div
              style={{
                position: "absolute",
                inset: 0,
                zIndex: 0,
              }}
            >
              <Image
                src={project.bannerImage}
                alt={project.title}
                fill
                priority
                style={{
                  objectFit: "cover",
                  objectPosition: "right center",
                }}
              />
            </div>
            {/* Cinematic Gradient Veil for pure contrast and typography readability */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to right, rgba(11, 21, 40, 0.96) 0%, rgba(11, 21, 40, 0.88) 45%, rgba(11, 21, 40, 0.45) 75%, rgba(11, 21, 40, 0.2) 100%)",
                zIndex: 1,
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(to bottom, rgba(11, 21, 40, 0.4) 0%, transparent 25%, transparent 75%, rgba(11, 21, 40, 0.7) 100%)",
                zIndex: 1,
              }}
            />
          </>
        )}

        <Container style={{ position: "relative", zIndex: 2 }}>
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
              <span>Back to Projects</span>
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
          {/* Main Visual Showcase (Clean Static Browser Mockup) */}
          <ProjectScrollMockup project={project} />

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

              {/* 3. Solution */}
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

              {/* 4. Verified Results */}
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

            {/* Right Meta Column: Projects Directory (Matching UI Reference) */}
            <div>
              <div
                style={{
                  backgroundColor: "#F8FAFC",
                  border: "1px solid #E2E8F0",
                  borderRadius: "14px",
                  padding: "2rem 1.5rem",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.35rem",
                    fontWeight: 800,
                    color: "#101D35",
                    margin: "0 0 1.5rem 0",
                    letterSpacing: "-0.02em",
                  }}
                >
                  Our Projects
                </h3>

                {/* Projects Navigation List */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {projectsData.map((p) => {
                    const isCurrent = p.slug === project.slug;
                    return (
                      <Link
                        key={p.id}
                        href={`/projects/${p.slug}`}
                        className={isCurrent ? "service-menu-item-active" : "service-menu-item"}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          padding: "1.05rem 1.25rem",
                          borderRadius: "4px",
                          textDecoration: "none",
                          backgroundColor: isCurrent ? "var(--color-brand-accent)" : "#FFFFFF",
                          color: isCurrent ? "#FFFFFF" : "#101D35",
                          boxShadow: isCurrent
                            ? "0 4px 14px rgba(237, 25, 24, 0.25)"
                            : "0 1px 3px rgba(16, 29, 53, 0.04)",
                          transition: "all 0.2s ease",
                        }}
                      >
                        <span
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 600,
                            color: isCurrent ? "#FFFFFF" : "#101D35",
                            lineHeight: 1.35,
                          }}
                        >
                          {p.title.replace("—", "-")}
                        </span>

                        <ChevronsRight
                          size={18}
                          color={isCurrent ? "#FFFFFF" : "#101D35"}
                          style={{ flexShrink: 0, marginLeft: "0.75rem" }}
                        />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      
    </div>
  );
}
