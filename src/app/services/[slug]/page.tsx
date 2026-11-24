import React, { Fragment } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { servicesData } from "@/data/services";
import { constructMetadata } from "@/lib/metadata";
import { 
  ArrowLeft, 
  ArrowRight, 
  CheckCircle2, 
  Layers, 
  FileCheck2,
  ChevronsRight,
  ShieldCheck,
  Zap,
  Cpu,
  Clock,
  Sparkles,
  Workflow,
  Rocket,
  Code2,
  SearchCheck,
  CloudUpload
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

  // Engineering process pipeline steps (Matching Image 1 reference)
  const pipelineSteps = [
    {
      step: "Step 1: PLAN",
      sub: "Define & Scope",
      desc: "Gather requirements, set milestones, allocate resources.",
      icon: <Rocket size={32} strokeWidth={1.8} className="delivery-step-icon" />,
    },
    {
      step: "Step 2: BUILD",
      sub: "Develop & Integrate",
      desc: "Write code, CI/CD pipelines, architectural design.",
      icon: <Code2 size={32} strokeWidth={1.8} className="delivery-step-icon" />,
    },
    {
      step: "Step 3: TEST",
      sub: "Validate & Verify",
      desc: "Automated testing, QA checks, UAT, security scans.",
      icon: <SearchCheck size={32} strokeWidth={1.8} className="delivery-step-icon" />,
    },
    {
      step: "Step 4: DEPLOY",
      sub: "Launch & Monitor",
      desc: "Production release, performance monitoring, scale infrastructure.",
      icon: <CloudUpload size={32} strokeWidth={1.8} className="delivery-step-icon" />,
    },
  ];

  return (
    <div style={{ backgroundColor: "#F8FAFC" }}>
      {/* Premium Service Hero Header */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#0B1424",
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(237, 25, 24, 0.15), rgba(11, 20, 36, 0))",
          color: "#FFFFFF",
          paddingTop: "6.5rem",
          paddingBottom: "4.5rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
          overflow: "hidden",
        }}
      >
        {/* Subtle grid pattern background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
            pointerEvents: "none",
          }}
        />

        <Container>
          <div style={{ position: "relative", zIndex: 2 }}>
            {/* Breadcrumb Navigation */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.85rem",
                color: "#94A3B8",
                marginBottom: "1.75rem",
              }}
            >
              <Link
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.4rem",
                  color: "#94A3B8",
                  textDecoration: "none",
                  transition: "color 0.2s ease",
                }}
              >
                <ArrowLeft size={15} />
                <span>Services</span>
              </Link>
              <span>/</span>
              <span style={{ color: "#f80303", fontWeight: 500 }}>{service.title}</span>
            </div>

            <div style={{ maxWidth: "860px" }}>
              {/* Practice Tag */}
              {/* <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(237, 25, 24, 0.12)",
                  border: "1px solid rgba(237, 25, 24, 0.3)",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    width: "6px",
                    height: "6px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-brand-accent)",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                    color: "#FCA5A5",
                  }}
                >
                  Core Engineering Practice
                </span>
              </div> */}

              {/* Title */}
              <h1
                style={{
                  fontSize: "clamp(2.35rem, 4.5vw, 3.5rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginBottom: "1.25rem",
                  lineHeight: 1.12,
                  letterSpacing: "-0.02em",
                }}
              >
                {service.title}
              </h1>

              {/* Punchy Subtitle (shortDescription in header, fullDescription below in body) */}
              {/* <p
                style={{
                  fontSize: "1.15rem",
                  color: "#CBD5E1",
                  lineHeight: 1.65,
                  maxWidth: "760px",
                  marginBottom: "2.25rem",
                }}
              >
                {service.shortDescription}
              </p> */}

              {/* Executive Trust Indicators */}
              {/* <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "1.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#E2E8F0" }}>
                  <ShieldCheck size={16} color="var(--color-brand-accent)" />
                  <span>Enterprise Security & Compliance</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#E2E8F0" }}>
                  <Zap size={16} color="#FFD13B" />
                  <span>High-Throughput Scalability</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.85rem", color: "#E2E8F0" }}>
                  <CheckCircle2 size={16} color="#22C55E" />
                  <span>100% Client Codebase Ownership</span>
                </div>
              </div> */}
            </div>
          </div>
        </Container>
      </section>

      {/* Main Content Body */}
      <section style={{ padding: "4rem 0 6rem" }}>
        <Container>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
            }}
            className="service-detail-grid"
          >
            {/* Left Main Content */}
            <div style={{ minWidth: 0 }}>
              {/* Practice Overview (User requested: full description moved below into content body) */}
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "2.5rem",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)",
                  marginBottom: "3rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginBottom: "0.75rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-brand-accent)",
                    }}
                  >
                    Executive Summary
                  </span>
                </div>

                <h2
                  style={{
                    fontSize: "1.75rem",
                    fontWeight: 800,
                    color: "var(--color-primary-navy)",
                    marginBottom: "1.25rem",
                    letterSpacing: "-0.01em",
                  }}
                >
                  Practice Overview & Architecture Focus
                </h2>

                {/* The highlighted full description text */}
                <div
                  style={{
                    borderLeft: "4px solid var(--color-brand-accent)",
                    padding: "1.25rem 1.75rem",
                    backgroundColor: "rgba(237, 25, 24, 0.03)",
                    borderRadius: "0 10px 10px 0",
                    marginBottom: "2rem",
                  }}
                >
                  <p
                    style={{
                      fontSize: "1.125rem",
                      fontWeight: 500,
                      color: "#1E293B",
                      lineHeight: 1.75,
                      margin: 0,
                    }}
                  >
                    {service.fullDescription}
                  </p>
                </div>

                {/* Featured Service Cover Image */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "360px",
                    borderRadius: "12px",
                    overflow: "hidden",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.06)",
                  }}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 800px"
                    style={{ objectFit: "cover" }}
                    priority
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background:
                        "linear-gradient(180deg, transparent 60%, rgba(11, 20, 36, 0.7) 100%)",
                    }}
                  />
                  <div
                    style={{
                      position: "absolute",
                      bottom: "1.25rem",
                      left: "1.5rem",
                      color: "#FFFFFF",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        backgroundColor: "rgba(0, 0, 0, 0.6)",
                        padding: "0.3rem 0.65rem",
                        borderRadius: "4px",
                        backdropFilter: "blur(6px)",
                      }}
                    >
                      {service.title} • Production Environment
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Architectural Features */}
              <div style={{ marginBottom: "3.5rem" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-brand-accent)",
                    }}
                  >
                    Core Technical Pillars
                  </span>
                  <h2
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "var(--color-primary-navy)",
                      marginTop: "0.25rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Key Architectural Features
                  </h2>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  {service.features.map((feat, idx) => (
                    <div
                      key={idx}
                      className="service-feature-card"
                    >
                      <div
                        style={{
                          width: "36px",
                          height: "36px",
                          borderRadius: "8px",
                          backgroundColor: "rgba(237, 25, 24, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          marginBottom: "1rem",
                        }}
                      >
                        <CheckCircle2 size={18} color="var(--color-brand-accent)" />
                      </div>
                      <h3
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          color: "var(--color-primary-navy)",
                          marginBottom: "0.4rem",
                        }}
                      >
                        {feat}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.875rem",
                          color: "#64748B",
                          lineHeight: 1.55,
                          margin: 0,
                        }}
                      >
                        Engineered with fault-tolerant distributed standards, ensuring high throughput and resilience under extreme production loads.
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Domain Capabilities */}
              <div style={{ marginBottom: "3.5rem" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-brand-accent)",
                    }}
                  >
                    Engineering Depth
                  </span>
                  <h2
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "var(--color-primary-navy)",
                      marginTop: "0.25rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Domain Capabilities & Specializations
                  </h2>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1rem",
                  }}
                >
                  {service.capabilities.map((cap, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "1.15rem 1.35rem",
                        borderRadius: "10px",
                        backgroundColor: "#FFFFFF",
                        border: "1px solid #E2E8F0",
                        display: "flex",
                        alignItems: "center",
                        gap: "0.85rem",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.02)",
                        transition: "all 0.2s ease",
                      }}
                    >
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "6px",
                          backgroundColor: "#F1F5F9",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                        }}
                      >
                        <Layers size={16} color="var(--color-primary-navy)" />
                      </div>
                      <span
                        style={{
                          fontSize: "0.95rem",
                          fontWeight: 600,
                          color: "var(--color-primary-navy)",
                        }}
                      >
                        {cap}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Production Deliverables */}
              <div style={{ marginBottom: "4rem" }}>
                <div style={{ marginBottom: "1.5rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-brand-accent)",
                    }}
                  >
                    Tangible Outcomes
                  </span>
                  <h2
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "var(--color-primary-navy)",
                      marginTop: "0.25rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Production-Ready Deliverables
                  </h2>
                </div>

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                    gap: "1.25rem",
                  }}
                >
                  {service.deliverables.map((deliv, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "1.35rem 1.5rem",
                        borderRadius: "12px",
                        border: "1px solid #E2E8F0",
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0 2px 8px rgba(0, 0, 0, 0.02)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.85rem",
                      }}
                    >
                      <div
                        style={{
                          width: "32px",
                          height: "32px",
                          borderRadius: "6px",
                          backgroundColor: "rgba(37, 99, 235, 0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "0.1rem",
                        }}
                      >
                        <FileCheck2 size={16} color="var(--color-tech-blue)" />
                      </div>
                      <div>
                        <div
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 700,
                            color: "var(--color-primary-navy)",
                            marginBottom: "0.25rem",
                          }}
                        >
                          {deliv}
                        </div>
                        <div
                          style={{
                            fontSize: "0.825rem",
                            color: "#64748B",
                            lineHeight: 1.45,
                          }}
                        >
                          Fully documented, tested, and handed over with enterprise version control and audit logs.
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Engineering Delivery Lifecycle (Horizontal Pipeline matching Image 1) */}
              <div
                style={{
                  backgroundColor: "#F8FAFC",
                  borderRadius: "24px",
                  padding: "3rem 2.25rem",
                  border: "1px solid #E2E8F0",
                  boxShadow: "0 4px 20px rgba(0, 0, 0, 0.02)",
                  marginBottom: "4rem",
                }}
              >
                <div style={{ marginBottom: "2.5rem" }}>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--color-brand-accent)",
                    }}
                  >
                    Engagement Roadmap
                  </span>
                  <h2
                    style={{
                      fontSize: "1.75rem",
                      fontWeight: 800,
                      color: "var(--color-primary-navy)",
                      marginTop: "0.25rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Our Engineering Delivery Lifecycle
                  </h2>
                </div>

                <div className="delivery-pipeline-wrapper">
                  {pipelineSteps.map((item, idx) => (
                    <Fragment key={idx}>
                      <div className="delivery-step-card">
                        <div>{item.icon}</div>
                        <div className="delivery-step-title">{item.step}</div>
                        <div
                          style={{
                            fontSize: "0.95rem",
                            fontWeight: 700,
                            color: "#1E293B",
                            marginBottom: "0.45rem",
                          }}
                        >
                          {item.sub}
                        </div>
                        <div
                          style={{
                            fontSize: "0.825rem",
                            color: "#64748B",
                            lineHeight: 1.55,
                          }}
                        >
                          {item.desc}
                        </div>
                      </div>

                      {idx < pipelineSteps.length - 1 && (
                        <div className="delivery-pipeline-connector" aria-hidden="true">
                          <div className="delivery-connector-node" />
                          <div className="delivery-connector-node" />
                        </div>
                      )}
                    </Fragment>
                  ))}
                </div>
              </div>

              {/* Bottom Architectural Review Banner (High-definition CTA matching Blog detail view) */}
              {/* <div
                style={{
                  position: "relative",
                  borderRadius: "20px",
                  overflow: "hidden",
                  padding: "3.5rem 3rem",
                  backgroundImage: "url('/images/insights/architectural-review-card-bg-hd.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center right",
                  backgroundColor: "#101922",
                  color: "#FFFFFF",
                  boxShadow: "0 20px 40px -15px rgba(0, 0, 0, 0.35)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  gap: "2rem",
                }}
              >
                <div style={{ maxWidth: "600px", position: "relative", zIndex: 2 }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      marginBottom: "0.75rem",
                    }}
                  >
                    <span
                      style={{
                        width: "16px",
                        height: "2px",
                        backgroundColor: "var(--color-brand-accent)",
                        display: "inline-block",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        letterSpacing: "0.15em",
                        textTransform: "uppercase",
                        color: "#94A3B8",
                      }}
                    >
                      Architectural Review
                    </span>
                  </div>

                  <h3
                    style={{
                      fontSize: "clamp(1.75rem, 3vw, 2.35rem)",
                      fontWeight: 800,
                      lineHeight: 1.2,
                      color: "#FFFFFF",
                      marginBottom: "0.85rem",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Need an Architectural Review for Your{" "}
                    <span style={{ color: "var(--color-brand-accent)" }}>Software?</span>
                  </h3>

                  <p
                    style={{
                      fontSize: "1rem",
                      color: "#CBD5E1",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    Elevate your code’s scalability, performance, and maintainability with expert architectural insights from senior Roacs consultants.
                  </p>
                </div>

                <div style={{ position: "relative", zIndex: 2 }}>
                  <Link
                    href="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.6rem",
                      backgroundColor: "var(--color-brand-accent)",
                      color: "#FFFFFF",
                      padding: "0.95rem 1.85rem",
                      borderRadius: "9999px",
                      fontWeight: 700,
                      fontSize: "0.95rem",
                      textDecoration: "none",
                      boxShadow: "0 8px 24px rgba(237, 25, 24, 0.4)",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                  >
                    <span>Consult With Our Architects</span>
                    <ArrowRight size={17} />
                  </Link>
                </div>
              </div> */}
            </div>

            {/* Right Sticky Sidebar (User requested: "Our Services" card matching Image 3) */}
            <div>
              <div
                style={{
                  position: "sticky",
                  top: "100px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "2rem",
                }}
              >
                {/* "Our Services" Navigation Card (Matching Image 3) */}
                <div
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "2rem 1.75rem",
                    border: "1px solid #E2E8F0",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.04)",
                  }}
                >
                  <div style={{ marginBottom: "1.5rem" }}>
                    <h3
                      style={{
                        fontSize: "1.35rem",
                        fontWeight: 800,
                        color: "var(--color-primary-navy)",
                        marginBottom: "0.5rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      Our Services
                    </h3>
                    <div
                      style={{
                        width: "36px",
                        height: "3px",
                        backgroundColor: "var(--color-brand-accent)",
                        borderRadius: "2px",
                      }}
                    />
                  </div>

                  {/* List of Services */}
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "0.75rem",
                    }}
                  >
                    {servicesData.map((s) => {
                      const isActive = s.slug === service.slug;

                      return (
                        <Link
                          key={s.id}
                          href={`/services/${s.slug}`}
                          className={`service-nav-item ${isActive ? "active" : ""}`}
                        >
                          <span>{s.title}</span>
                          <ChevronsRight
                            size={18}
                            className="service-nav-chevron"
                            style={{
                              flexShrink: 0,
                              color: isActive ? "#FFFFFF" : "#94A3B8",
                              transition: "transform 0.2s ease, color 0.2s ease",
                            }}
                          />
                        </Link>
                      );
                    })}
                  </div>
                </div>

                {/* Quick Consultation Card */}
                {/* <div
                  style={{
                    backgroundColor: "#0B1424",
                    backgroundImage:
                      "radial-gradient(circle at 100% 0%, rgba(237, 25, 24, 0.18), transparent 70%)",
                    color: "#FFFFFF",
                    borderRadius: "16px",
                    padding: "2rem",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.12)",
                  }}
                >
                  <div
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "10px",
                      backgroundColor: "rgba(237, 25, 24, 0.15)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Sparkles size={20} color="var(--color-brand-accent)" />
                  </div>

                  <h4
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "0.6rem",
                    }}
                  >
                    Need Expert Guidance?
                  </h4>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#94A3B8",
                      lineHeight: 1.6,
                      marginBottom: "1.5rem",
                    }}
                  >
                    Discuss project scope, technical specifications, and delivery timelines directly with our senior software architects.
                  </p>

                  <Button
                    href="/contact"
                    variant="primary"
                    size="md"
                    icon={<ArrowRight size={16} />}
                    style={{ width: "100%", justifyContent: "center", marginBottom: "0.75rem" }}
                  >
                    Schedule Consultation
                  </Button>

                  <div
                    style={{
                      fontSize: "0.78rem",
                      color: "#64748B",
                      textAlign: "center",
                    }}
                  >
                    Direct response within 24 business hours
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
