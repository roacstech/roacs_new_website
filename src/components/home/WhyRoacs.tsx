"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { 
  ShieldCheck, 
  GitBranch, 
  MessageSquare, 
  Gauge, 
  LifeBuoy, 
  Lock 
} from "lucide-react";

export function WhyRoacs() {
  const pillars = [
    {
      icon: Gauge,
      title: "Uncompromising Engineering Quality",
      description: "We adhere to strict automated linting, test suites, and peer code reviews. Every line of code is structured for maintainability, clarity, and high runtime efficiency.",
    },
    {
      icon: GitBranch,
      title: "Scalable Modular Architecture",
      description: "We build decoupled systems that grow alongside your business. No fragile monolithic dead-ends—only clean APIs and forward-compatible service layers.",
    },
    {
      icon: MessageSquare,
      title: "Transparent & Direct Communication",
      description: "Weekly milestone demonstrations, shared roadmap visibility, and direct engineering access. No bureaucratic layers or hidden project scopes.",
    },
    {
      icon: Lock,
      title: "Enterprise Security & Compliance",
      description: "Security is engineered into the architecture from day zero. Role-based access control, encrypted data pipelines, and strict compliance posture.",
    },
    {
      icon: LifeBuoy,
      title: "Dedicated Production Support & SLAs",
      description: "Our partnership continues long after deployment. We provide proactive monitoring, performance optimization, and guaranteed uptime response times.",
    },
    {
      icon: ShieldCheck,
      title: "Business-Driven Delivery Focus",
      description: "Technology serves business outcomes, not the other way around. We focus on velocity, total cost of ownership (TCO), and concrete return on investment.",
    },
  ];

  return (
    <section className="section section-light" id="why-roacs">
      <Container wide>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="The Roacs Advantage"
            eyebrowVariant="accent"
            title="Why leading organizations trust Roacs Corporation with their critical systems."
            description="We bridge the gap between business strategy and deep software engineering, delivering digital solutions that withstand production demands."
          />
        </Reveal>

        <div className="grid-3">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={index} delay={0.1 + (index % 3) * 0.1}>
                <div
                  style={{
                    padding: "2rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "var(--color-bg-subtle)",
                    border: "1px solid var(--border-light)",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    transition: "all var(--transition-normal)",
                  }}
                  className="pillar-card"
                >
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      borderRadius: "var(--radius-sm)",
                      backgroundColor: "#FFFFFF",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "var(--color-brand-accent)",
                      marginBottom: "1.25rem",
                      border: "1px solid var(--border-light)",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--color-primary-navy)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    {pillar.title}
                  </h3>

                  <p
                    style={{
                      fontSize: "0.925rem",
                      lineHeight: 1.6,
                      color: "var(--color-text-secondary)",
                      margin: 0,
                    }}
                  >
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>

      
    </section>
  );
}
