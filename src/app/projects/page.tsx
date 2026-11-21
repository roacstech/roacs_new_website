import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { ContactCTA } from "@/components/home/ContactCTA";
import { ProjectsShowcase } from "@/components/projects/ProjectsShowcase";
import { projectsData } from "@/data/projects";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Our Portfolio — Delivered Projects & Case Studies | Roacs Corporation",
  description: "Explore our portfolio of websites, enterprise platforms, and digital solutions built to help businesses grow. Discover verified case studies across modular housing, international trade, healthcare, and streaming media.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div style={{ backgroundColor: "#FFFFFF" }}>
      {/* 1. Projects Hero Section with Cleaned Tech Pattern Background */}
      <section
        style={{
          position: "relative",
          backgroundColor: "#FFFFFF",
          paddingTop: "5rem",
          paddingBottom: "3.5rem",
          borderBottom: "1px solid #F1F5F9",
          overflow: "hidden",
        }}
      >
        {/* Clean Tech Pattern Graphic in Background */}
        <div
          style={{
            position: "absolute",
            right: "-2%",
            top: "50%",
            transform: "translateY(-50%)",
            width: "clamp(340px, 48vw, 680px)",
            aspectRatio: "1024 / 547",
            pointerEvents: "none",
            zIndex: 0,
            opacity: 0.88,
          }}
          className="hero-tech-bg-pattern"
        >
          <Image
            src="/images/projects/hero-tech-pattern-final.png"
            alt="Technology Hexagon & Circuit Graphic"
            fill
            priority
            style={{
              objectFit: "contain",
              objectPosition: "right center",
            }}
          />
        </div>

        <Container wide style={{ position: "relative", zIndex: 1 }}>
          <div style={{ maxWidth: "800px" }}>
            <Reveal delay={0.1}>
              {/* Small Label with Subtle Red Accent */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.35rem 0.85rem",
                  backgroundColor: "rgba(237, 25, 24, 0.06)",
                  border: "1px solid rgba(237, 25, 24, 0.15)",
                  borderRadius: "9999px",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-brand-accent)",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "var(--color-brand-accent)",
                  }}
                >
                  Our Portfolio
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              {/* Main Heading */}
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4.8vw, 3.75rem)",
                  fontWeight: 800,
                  color: "#101D35",
                  lineHeight: 1.14,
                  letterSpacing: "-0.03em",
                  marginBottom: "1.25rem",
                }}
              >
                Turning Ideas Into Digital Experiences.
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              {/* Supporting Description */}
              <p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.65,
                  color: "#64748B",
                  maxWidth: "680px",
                  margin: 0,
                }}
              >
                Explore our portfolio of websites, enterprise platforms, and digital solutions built to help businesses grow.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 2. Main Project Showcase 3-Column Agency Grid (Filters Removed) */}
      <ProjectsShowcase projects={projectsData} />

      {/* 3. Bottom Conversion Section */}
      <ContactCTA />
    </div>
  );
}
