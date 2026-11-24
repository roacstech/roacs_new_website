"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { 
  ArrowRight, 
  CheckCircle2, 
  Award
} from "lucide-react";

export function AboutPreview() {
  const highlights = [
    { title: "Technology Consultancy", desc: "Expert technical roadmaps, architectural evaluation, and vendor selection." },
    { title: "300+ Successful Projects", desc: "Proven track record delivering mission-critical web, mobile, and SaaS platforms." },
    { title: "Elite Engineering Talent", desc: "Senior full-stack developers, cloud architects, and UX specialists." },
    { title: "Continuous Maintenance & SLAs", desc: "Proactive uptime monitoring, security patching, and ongoing feature evolution." },
  ];

  return (
    <section className="section section-light" id="about">
      <Container wide>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
          }}
          className="about-grid"
        >
          {/* Left Column: Authentic Brand Image & Floating Metric Card */}
          <div style={{ position: "relative" }}>
            <Reveal delay={0.1}>
              <div
                className="about-image-card"
                style={{
                  position: "relative",
                  width: "100%",
                  height: "480px",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-xl)",
                  backgroundColor: "#E2E8F0",
                  border: "1px solid var(--border-light)",
                }}
              >
                <Image
                  src="/images/about/team-collaboration.jpg"
                  alt="Roacs Software Engineering Team & Technical Architecture"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover", objectPosition: "left center" }}
                  priority
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to top, rgba(16, 29, 53, 0.45) 0%, transparent 60%)",
                  }}
                />
              </div>

              {/* Floating Stat Badge */}
              <div
                className="about-floating-badge"
                style={{
                  position: "absolute",
                  bottom: "-25px",
                  right: "25px",
                  backgroundColor: "var(--color-primary-navy)",
                  color: "#FFFFFF",
                  padding: "1.5rem 1.75rem",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "0 18px 40px rgba(16, 29, 53, 0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  maxWidth: "260px",
                  overflow: "hidden",
                  contain: "paint",
                  isolation: "isolate",
                }}
              >
                {/* Ambient Soft Glow Behind Content */}
                <div
                  className="floating-badge-ambient-glow"
                  style={{
                    position: "absolute",
                    top: "-20%",
                    right: "-20%",
                    width: "140px",
                    height: "140px",
                    borderRadius: "50%",
                    background: "radial-gradient(circle, rgba(56, 189, 248, 0.25) 0%, rgba(237, 25, 24, 0.15) 50%, transparent 70%)",
                    filter: "blur(20px)",
                    pointerEvents: "none",
                    opacity: 0.6,
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                  }}
                />

                <div style={{ position: "relative", zIndex: 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.4rem" }}>
                    <Award size={22} color="var(--color-brand-accent)" className="floating-award-icon" />
                    <span
                      style={{
                        fontSize: "2rem",
                        fontWeight: 800,
                        color: "#FFFFFF",
                        lineHeight: 1,
                      }}
                    >
                      50+ <span style={{ fontSize: "1.1rem", color: "var(--color-brand-accent)" }}>Clients</span>
                    </span>
                  </div>
                  <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-muted-blue)", lineHeight: 1.35 }}>
                    Global Enterprise Deployments & Production Support
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative, Strengths & CTA */}
          <div>
            <Reveal delay={0.2}>
              <SectionHeading
                eyebrow="About Roacs Corporation"
                eyebrowVariant="accent"
                title="We Strive To Offer Intelligent Business Solutions."
                description="At Roacs Corporation, we deliver intelligent software solutions tailored to your business needs, ensuring quality, scalability, and seamless user experiences across every digital touchpoint."
              />
            </Reveal>

            {/* Feature Bullets Grid with Staggered Entrance & Interactive Hover Animations */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "1.25rem",
                marginBottom: "2.5rem",
              }}
            >
              {highlights.map((item, idx) => (
                <Reveal key={idx} delay={0.25 + idx * 0.08} yOffset={16}>
                  <div className="about-feature-card">
                    <CheckCircle2
                      size={20}
                      className="feature-icon"
                    />
                    <div>
                      <h4 className="feature-title">
                        {item.title}
                      </h4>
                      <p className="feature-desc">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={0.4}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Button
                  href="/about"
                  variant="primary"
                  icon={<ArrowRight size={16} />}
                >
                  Discover More About Us
                </Button>
                <Button
                  href="/projects"
                  variant="outline-navy"
                >
                  View More
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
