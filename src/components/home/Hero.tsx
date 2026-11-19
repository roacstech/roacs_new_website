"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "#FAFAFA",
        backgroundImage: "url('/images/hero-mesh-gradient.jpg')",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "#0F172A",
        paddingTop: "5.5rem",
        paddingBottom: "5.5rem",
        overflow: "hidden",
        borderBottom: "1px solid rgba(0, 0, 0, 0.08)",
      }}
    >
      {/* Subtle Clean Tech Grid Overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.02) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.02) 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
          pointerEvents: "none",
          opacity: 0.8,
        }}
      />

      <Container wide>
        {/* Value Proposition & Executive Copy */}
        <div
          style={{
            maxWidth: "860px",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Reveal delay={0.1}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.45rem 1rem",
                backgroundColor: "rgba(255, 255, 255, 0.85)",
                border: "1px solid rgba(15, 23, 42, 0.1)",
                borderRadius: "var(--radius-full)",
                marginBottom: "1.75rem",
                boxShadow: "0 4px 14px rgba(0, 0, 0, 0.05)",
                backdropFilter: "blur(8px)",
              }}
            >
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#0F172A",
                }}
              >
                Software & Technology Solutions
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 4.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
                color: "#0A1221",
              }}
            >
              We build scalable software that drives{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #0A1221 20%, #1E293B 65%, #ED1918 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                business growth.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.3}>
            <p
              style={{
                fontSize: "1.2rem",
                lineHeight: 1.7,
                color: "#475569",
                marginBottom: "2.25rem",
                maxWidth: "760px",
              }}
            >
              At Roacs Corporation, we design and develop powerful SaaS platforms, web applications, and enterprise solutions that help businesses streamline operations and scale efficiently.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "1rem",
                marginBottom: "2.5rem",
              }}
            >
              <Button
                href="/services"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
              >
                Explore Core Services
              </Button>

              <Button
                href="/contact"
                variant="secondary-light"
                size="lg"
                style={{
                  border: "1px solid rgba(15, 23, 42, 0.18)",
                  color: "#0F172A",
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.06)",
                }}
              >
                Start a Project
              </Button>
            </div>
          </Reveal>

          {/* Credibility Badges */}
          <Reveal delay={0.5}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "1.5rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(0, 0, 0, 0.08)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                <span style={{ fontSize: "0.85rem", color: "#1E293B", fontWeight: 600 }}>
                  Enterprise Security Standards
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                <span style={{ fontSize: "0.85rem", color: "#1E293B", fontWeight: 600 }}>
                  Modular Next.js Architectures
                </span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                <span style={{ fontSize: "0.85rem", color: "#1E293B", fontWeight: 600 }}>
                  Dedicated SLA Production Support
                </span>
              </div>
            </div>
          </Reveal>
        </div>

        {/* High-Impact Stat Counters Ribbon (from index.html: 300+ projects, 3+ years, 99.9% uptime, 100% satisfaction) */}
        <div
          style={{
            marginTop: "4.5rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(0, 0, 0, 0.08)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#0A1221",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                <span style={{ color: "var(--color-brand-accent)" }}>300</span>+
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#64748B" }}>
                Successful Projects Completed
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#0A1221",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                <span style={{ color: "var(--color-brand-accent)" }}>3</span>+
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#64748B" }}>
                Years Working Experience
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#0A1221",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                <span style={{ color: "#059669" }}>99.9</span>%
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#64748B" }}>
                Production Infrastructure Uptime
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#0A1221",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                <span style={{ color: "#2563EB" }}>50</span>+
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "#64748B" }}>
                Global Enterprise & Startup Clients
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
