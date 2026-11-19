import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { servicesData } from "@/data/services";
import { constructMetadata } from "@/lib/metadata";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  FileCheck2 
} from "lucide-react";

interface ServiceDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return servicesData.map((s) => ({
    slug: s.slug,
  }));
}

export async function generateMetadata({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);
  if (!service) return {};

  return constructMetadata({
    title: `${service.title} | Roacs Corporation`,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const { slug } = await params;
  const service = servicesData.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <div>
      {/* Service Header */}
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
              href="/services"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
                color: "var(--color-muted-blue)",
              }}
            >
              <ArrowLeft size={16} />
              <span>Back to All Services</span>
            </Link>
          </div>

          <div style={{ maxWidth: "800px" }}>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-brand-accent)",
                marginBottom: "0.75rem",
                display: "inline-block",
              }}
            >
              Service Practice
            </span>
            <h1
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.25rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              {service.title}
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--color-muted-blue)",
                lineHeight: 1.6,
              }}
            >
              {service.fullDescription}
            </p>
          </div>
        </Container>
      </section>

      {/* Main Body */}
      <section className="section section-light">
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3.5rem",
            }}
            className="service-detail-grid"
          >
            {/* Left Main Content */}
            <div>
              {/* Feature Highlights */}
              <div style={{ marginBottom: "3rem" }}>
                <h2
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "var(--color-primary-navy)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Key Architectural Features
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "1.25rem",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "var(--color-bg-subtle)",
                        border: "1px solid var(--border-light)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                      }}
                    >
                      <CheckCircle2 size={18} color="var(--color-brand-accent)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                      <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--color-primary-navy)" }}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Capabilities */}
              <div style={{ marginBottom: "3rem" }}>
                <h2
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "var(--color-primary-navy)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Domain Capabilities
                </h2>
                <ul
                  style={{
                    listStyle: "none",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  {service.capabilities.map((cap, idx) => (
                    <li
                      key={idx}
                      style={{
                        padding: "1rem 1.25rem",
                        borderRadius: "var(--radius-xs)",
                        backgroundColor: "#FFFFFF",
                        border: "1px solid var(--border-light)",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.75rem",
                        fontSize: "0.95rem",
                        color: "var(--color-text-primary)",
                      }}
                    >
                      <Layers size={18} color="var(--color-primary-navy)" />
                      <span>{cap}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Deliverables */}
              <div>
                <h2
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 700,
                    color: "var(--color-primary-navy)",
                    marginBottom: "1.25rem",
                  }}
                >
                  Production Deliverables
                </h2>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {service.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "1.25rem",
                        borderRadius: "var(--radius-sm)",
                        border: "1px solid var(--border-light)",
                        backgroundColor: "var(--color-bg-subtle)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.75rem",
                      }}
                    >
                      <FileCheck2 size={18} color="var(--color-tech-blue)" style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                      <span style={{ fontSize: "0.9rem", color: "var(--color-text-secondary)" }}>
                        {deliv}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar CTA */}
            <div>
              <div
                style={{
                  position: "sticky",
                  top: "100px",
                  backgroundColor: "var(--color-primary-navy)",
                  color: "#FFFFFF",
                  borderRadius: "var(--radius-md)",
                  padding: "2rem",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: 700,
                    color: "#FFFFFF",
                    marginBottom: "0.75rem",
                  }}
                >
                  Start This Engagement
                </h3>
                <p
                  style={{
                    fontSize: "0.925rem",
                    color: "var(--color-muted-blue)",
                    lineHeight: 1.6,
                    marginBottom: "1.75rem",
                  }}
                >
                  Discuss your project requirements, target architecture, and timelines with a senior Roacs engineering consultant.
                </p>

                <Button
                  href="/contact"
                  variant="primary"
                  size="md"
                  icon={<ArrowRight size={16} />}
                  style={{ width: "100%", justifyContent: "center", marginBottom: "1rem" }}
                >
                  Schedule Architecture Review
                </Button>

                <div
                  style={{
                    fontSize: "0.825rem",
                    color: "rgba(255, 255, 255, 0.6)",
                    textAlign: "center",
                  }}
                >
                  Direct response within 24 business hours
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      
    </div>
  );
}
