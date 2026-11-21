"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { 
  Search, 
  Layout, 
  Code2, 
  Rocket, 
  CheckCircle2, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";

interface ProcessStep {
  number: string;
  icon: React.ElementType;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
}

const steps: ProcessStep[] = [
  {
    number: "01",
    icon: Search,
    title: "Requirement Analysis & Strategic Blueprint",
    subtitle: "Discovery, Scoping & Architectural Validation",
    description: "We deeply examine your business workflows, user journeys, data structures, and operational bottlenecks. We define technical specifications, security models, and a transparent delivery roadmap before a single line of code is written.",
    deliverables: [
      "Technical Architecture Document (TAD)",
      "Database schema & API endpoint blueprints",
      "Security compliance & SLA boundaries",
      "Transparent sprint delivery roadmap"
    ],
  },
  {
    number: "02",
    icon: Layout,
    title: "High-Fidelity UI/UX & Interactive Prototyping",
    subtitle: "Frictionless Design & Component Architecture",
    description: "Our product design team translates complex requirements into intuitive, elegant user interfaces. We design comprehensive design systems, interactive prototypes, and atomic component trees optimized for both user retention and engineering speed.",
    deliverables: [
      "Figma design system & interactive prototypes",
      "Responsive accessibility (WCAG AA) auditing",
      "Design token mapping for seamless dev handoff",
      "Executive & stakeholder design approvals"
    ],
  },
  {
    number: "03",
    icon: Code2,
    title: "Agile Engineering & Continuous Testing",
    subtitle: "Modern Stacks, Decoupled Code & Automated QA",
    description: "Our software engineers build decoupled, modular solutions utilizing Next.js, TypeScript, cloud microservices, and distributed pipelines. Every sprint undergoes automated unit tests, static code analysis, and peer reviews to maintain elite code standards.",
    deliverables: [
      "Decoupled, modular production codebase",
      "Automated unit, integration & E2E tests",
      "Weekly staging demos & transparent progress",
      "Strict zero-regression code reviews"
    ],
  },
  {
    number: "04",
    icon: Rocket,
    title: "Cloud Deployment & 24/7 SLA Support",
    subtitle: "Zero-Downtime Launch & Continuous Observability",
    description: "We orchestrate seamless zero-downtime production deployments with automated CI/CD pipelines, multi-region CDN caching, and comprehensive monitoring. Post-launch, our engineers provide proactive uptime monitoring and continuous SLA support.",
    deliverables: [
      "Production CI/CD deployment on AWS / cloud VPS",
      "Real-time APM telemetry & error tracking",
      "Full API & operational handover runbooks",
      "Guaranteed uptime & response-time SLAs"
    ],
  },
];

export function WorkProcess() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="section section-light" id="process">
      <Container wide>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Our Development Process"
            eyebrowVariant="accent"
            title="A rigorous engineering methodology designed for speed and predictability."
            description="From initial requirement discovery to post-deployment scaling, our proven 4-stage lifecycle ensures your digital products are engineered to highest quality and delivered on schedule."
            align="center"
          />
        </Reveal>

        {/* Step Navigation Tabs */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "1rem",
            marginBottom: "3rem",
          }}
        >
          {steps.map((step, idx) => {
            const Icon = step.icon;
            const isActive = activeStep === idx;
            return (
              <button
                key={step.number}
                onClick={() => setActiveStep(idx)}
                style={{
                  padding: "1.25rem 1.5rem",
                  borderRadius: "var(--radius-md)",
                  border: "1.5px solid",
                  borderColor: isActive ? "var(--color-brand-accent)" : "var(--border-light)",
                  backgroundColor: isActive ? "rgba(237, 25, 24, 0.04)" : "#FFFFFF",
                  boxShadow: isActive ? "var(--shadow-md)" : "var(--shadow-sm)",
                  display: "flex",
                  alignItems: "center",
                  gap: "1rem",
                  textAlign: "left",
                  transition: "all var(--transition-normal)",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "var(--radius-sm)",
                    backgroundColor: isActive ? "var(--color-brand-accent)" : "rgba(16, 29, 53, 0.06)",
                    color: isActive ? "#FFFFFF" : "var(--color-primary-navy)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "all var(--transition-fast)",
                  }}
                >
                  <Icon size={20} />
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 800,
                      color: isActive ? "var(--color-brand-accent)" : "var(--color-text-muted)",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                      display: "block",
                    }}
                  >
                    Step {step.number}
                  </span>
                  <span
                    style={{
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      color: "var(--color-primary-navy)",
                      lineHeight: 1.2,
                    }}
                  >
                    {step.title.split("&")[0].trim()}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card */}
        <div
          style={{
            backgroundColor: "var(--color-primary-navy)",
            color: "#FFFFFF",
            borderRadius: "var(--radius-lg)",
            padding: "3rem",
            boxShadow: "var(--shadow-xl)",
            border: "1px solid rgba(255, 255, 255, 0.12)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Subtle background glow orb */}
          <div
            style={{
              position: "absolute",
              top: "-20%",
              right: "-10%",
              width: "400px",
              height: "400px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(237, 25, 24, 0.15) 0%, transparent 70%)",
              filter: "blur(70px)",
              pointerEvents: "none",
            }}
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
              alignItems: "center",
              position: "relative",
              zIndex: 1,
            }}
            className="about-detail-grid"
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "rgba(237, 25, 24, 0.15)",
                  border: "1px solid rgba(237, 25, 24, 0.3)",
                  color: "var(--color-brand-accent)",
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "1.25rem",
                }}
              >
                <span>Phase {steps[activeStep].number}</span>
                <span>•</span>
                <span>{steps[activeStep].subtitle}</span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginBottom: "1.25rem",
                  lineHeight: 1.2,
                }}
              >
                {steps[activeStep].title}
              </h3>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--color-muted-blue)",
                  lineHeight: 1.7,
                  marginBottom: "2rem",
                }}
              >
                {steps[activeStep].description}
              </p>

              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "#FFFFFF",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "var(--radius-sm)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  transition: "all var(--transition-fast)",
                }}
                className="btn-secondary"
              >
                <span>Start Discovery with Roacs</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Deliverables Panel */}
            <div
              style={{
                backgroundColor: "rgba(11, 20, 36, 0.75)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                borderRadius: "var(--radius-md)",
                padding: "2rem",
                backdropFilter: "blur(12px)",
              }}
            >
              <h4
                style={{
                  fontSize: "0.9rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "var(--color-brand-accent)",
                  marginBottom: "1.5rem",
                }}
              >
                Phase Deliverables & Governance
              </h4>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {steps[activeStep].deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.85rem",
                    }}
                  >
                    <CheckCircle2
                      size={18}
                      color="var(--color-brand-accent)"
                      style={{ flexShrink: 0, marginTop: "2px" }}
                    />
                    <span
                      style={{
                        fontSize: "0.925rem",
                        color: "#FFFFFF",
                        lineHeight: 1.5,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
