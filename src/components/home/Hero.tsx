"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { HeroImageShowcase } from "@/components/home/HeroImageShowcase";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function Hero() {

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "var(--color-primary-navy)",
        color: "#FFFFFF",
        paddingTop: "5rem",
        paddingBottom: "5.5rem",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* High-Tech Glowing Cyber Network Sphere Background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/images/hero-network-sphere.jpg')",
          backgroundPosition: "center right",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          opacity: 0.55,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Radiant Vignette & Legibility Dark Gradients */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `
            linear-gradient(to right, var(--color-primary-navy) 20%, rgba(10, 18, 33, 0.88) 55%, rgba(10, 18, 33, 0.45) 100%),
            linear-gradient(to top, var(--color-primary-navy) 0%, transparent 40%),
            linear-gradient(to bottom, var(--color-primary-navy) 0%, transparent 25%)
          `,
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* Background Decorative Tech Grid & Radiant Glow Orbs */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.025) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.025) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          pointerEvents: "none",
          opacity: 0.5,
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "2%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(237, 25, 24, 0.14) 0%, rgba(37, 99, 235, 0.09) 45%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "5%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 65%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Container wide>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
          className="hero-grid"
        >
          {/* Left Column: Value Proposition & Executive Copy */}
          <div style={{ maxWidth: "680px" }}>
            <Reveal delay={0.1}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.45rem 1rem",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  borderRadius: "var(--radius-full)",
                  marginBottom: "1.75rem",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "rgba(255, 255, 255, 0.95)",
                  }}
                >
                  Software & Technology Solutions
                </span>
              
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4.5vw, 3.85rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.15,
                  marginBottom: "1.5rem",
                  color: "#FFFFFF",
                }}
              >
                We build scalable software that drives{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FFFFFF 20%, #A9B7C9 70%, #ED1918 100%)",
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
                  fontSize: "1.15rem",
                  lineHeight: 1.68,
                  color: "var(--color-muted-blue)",
                  marginBottom: "2.25rem",
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
                  variant="secondary"
                  size="lg"
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
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.85)", fontWeight: 500 }}>
                    Enterprise Security Standards
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.85)", fontWeight: 500 }}>
                    Modular Next.js Architectures
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.85)", fontWeight: 500 }}>
                    Dedicated SLA Production Support
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Animated Project & Platform Imagery Showcase */}
          <div style={{ position: "relative", width: "100%" }}>
            <Reveal delay={0.3}>
              <HeroImageShowcase />
            </Reveal>
          </div>
        </div>

        {/* High-Impact Stat Counters Ribbon (from index.html: 300+ projects, 3+ years, 99.9% uptime, 100% satisfaction) */}
        <div
          style={{
            marginTop: "4.5rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
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
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                <span style={{ color: "var(--color-brand-accent)" }}>300</span>+
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-muted-blue)" }}>
                Successful Projects Completed
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                <span style={{ color: "var(--color-brand-accent)" }}>3</span>+
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-muted-blue)" }}>
                Years Working Experience
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                <span style={{ color: "#34D399" }}>99.9</span>%
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-muted-blue)" }}>
                Production Infrastructure Uptime
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                <span style={{ color: "#38BDF8" }}>50</span>+
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-muted-blue)" }}>
                Global Enterprise & Startup Clients
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
