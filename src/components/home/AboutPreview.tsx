"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { 
  ArrowRight, 
  CheckCircle2, 
  Lightbulb, 
  Settings2, 
  BarChart3, 
  ShieldCheck 
} from "lucide-react";

export function AboutPreview() {
  const lifecycleSteps = [
    {
      step: "01",
      title: "Requirement Analysis",
      description: "We analyze business workflows, data models, and constraints to architect a verified roadmap before writing code.",
    },
    {
      step: "02",
      title: "Architecture & Development",
      description: "Our engineers build decoupled, modular solutions using modern component frameworks and automated test suites.",
    },
    {
      step: "03",
      title: "Deployment & Governance",
      description: "Continuous CI/CD deployment, rigorous security auditing, and SLA-backed monitoring for long-term production resilience.",
    },
  ];

  return (
    <section className="section section-light">
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
          {/* Left Column: Authentic Brand Image & Editorial Card */}
          <div style={{ position: "relative" }}>
            <Reveal delay={0.1}>
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  height: "460px",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-xl)",
                  backgroundColor: "#E2E8F0",
                }}
              >
                <Image
                  src="/images/about/about-overview.jpg"
                  alt="Roacs Corporation Software Engineering"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Floating Stat Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-25px",
                  right: "25px",
                  backgroundColor: "var(--color-primary-navy)",
                  color: "#FFFFFF",
                  padding: "1.5rem 1.75rem",
                  borderRadius: "var(--radius-md)",
                  boxShadow: "0 16px 36px rgba(16, 29, 53, 0.25)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  maxWidth: "240px",
                }}
              >
                <div
                  style={{
                    fontSize: "2.25rem",
                    fontWeight: 800,
                    color: "var(--color-brand-accent)",
                    lineHeight: 1,
                    marginBottom: "0.4rem",
                  }}
                >
                  100%
                </div>
                <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#FFFFFF", lineHeight: 1.3 }}>
                  Client Commitment & Engineering Transparency
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Narrative & Process */}
          <div>
            <Reveal delay={0.2}>
              <SectionHeading
                eyebrow="Company Overview"
                eyebrowVariant="accent"
                title="Driving growth through precision engineering & pragmatic technology."
                description="Roacs Corporation is a forward-thinking software development and IT consulting firm. We combine strategic design, robust cloud infrastructure, and modern engineering practices to build scalable products that solve tangible business challenges."
              />
            </Reveal>

            <Reveal delay={0.3}>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  marginBottom: "2.5rem",
                }}
              >
                {lifecycleSteps.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      gap: "1.25rem",
                      padding: "1.25rem",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "var(--color-bg-subtle)",
                      border: "1px solid var(--border-light)",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: 800,
                        color: "var(--color-brand-accent)",
                        fontFamily: "monospace",
                        flexShrink: 0,
                      }}
                    >
                      {item.step}
                    </span>
                    <div>
                      <h4
                        style={{
                          fontSize: "1.05rem",
                          fontWeight: 700,
                          color: "var(--color-primary-navy)",
                          marginBottom: "0.3rem",
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontSize: "0.925rem",
                          color: "var(--color-text-secondary)",
                          lineHeight: 1.5,
                          margin: 0,
                        }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <Button
                  href="/about"
                  variant="outline-navy"
                  icon={<ArrowRight size={16} />}
                >
                  Learn More About Roacs
                </Button>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      
    </section>
  );
}
