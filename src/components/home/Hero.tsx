"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { 
  ArrowRight, 
  Terminal, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Sparkles,
  CheckCircle2
} from "lucide-react";

export function Hero() {
  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "var(--color-primary-navy)",
        color: "#FFFFFF",
        paddingTop: "4.5rem",
        paddingBottom: "5.5rem",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Background Decorative Tech Grid & Glow Orbs */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          pointerEvents: "none",
          opacity: 0.7,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "-15%",
          right: "5%",
          width: "550px",
          height: "550px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(237, 25, 24, 0.12) 0%, rgba(37, 99, 235, 0.08) 50%, transparent 70%)",
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
          {/* Left Column: Editorial Value Proposition */}
          <div style={{ maxWidth: "680px" }}>
            <Reveal delay={0.1}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.4rem 0.9rem",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  borderRadius: "var(--radius-full)",
                  marginBottom: "1.75rem",
                }}
              >
                <span
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: "var(--color-brand-accent)",
                    boxShadow: "0 0 10px var(--color-brand-accent)",
                  }}
                />
                <span
                  style={{
                    fontSize: "0.8125rem",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    color: "rgba(255, 255, 255, 0.95)",
                  }}
                >
                  Enterprise Software & IT Consulting
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
                We turn complex ideas into{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FFFFFF 30%, #A9B7C9 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  powerful digital solutions.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.65,
                  color: "var(--color-muted-blue)",
                  marginBottom: "2.25rem",
                }}
              >
                Roacs Corporation partners with progressive enterprises and ambitious leaders to architect bespoke software systems, cloud-native infrastructures, scalable mobile platforms, and pragmatic AI workflows built for measurable business longevity.
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
                  Explore Our Services
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
                  <span style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.8)", fontWeight: 500 }}>
                    Enterprise-Grade Security
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.8)", fontWeight: 500 }}>
                    Scalable Cloud Architectures
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.8)", fontWeight: 500 }}>
                    Rapid & Transparent Delivery
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Abstract High-Tech Engineering Showcase Visual */}
          <div style={{ position: "relative" }}>
            <Reveal delay={0.3}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "rgba(21, 36, 66, 0.8)",
                  border: "1px solid rgba(255, 255, 255, 0.12)",
                  boxShadow: "0 24px 60px rgba(0, 0, 0, 0.45)",
                  backdropFilter: "blur(12px)",
                  padding: "1.75rem",
                  overflow: "hidden",
                }}
              >
                {/* Visual Window Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "1.25rem",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#EF4444" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#F59E0B" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10B981" }} />
                    <span style={{ fontSize: "0.78rem", color: "var(--color-muted-blue)", marginLeft: "0.5rem", fontFamily: "monospace" }}>
                      roacs://systems/architecture-core
                    </span>
                  </div>
                  <span
                    style={{
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      backgroundColor: "rgba(237, 25, 24, 0.15)",
                      color: "var(--color-brand-accent)",
                      padding: "0.2rem 0.6rem",
                      borderRadius: "var(--radius-xs)",
                      border: "1px solid rgba(237, 25, 24, 0.25)",
                    }}
                  >
                    STATUS: OPTIMAL
                  </span>
                </div>

                {/* Interactive Architectural Matrix */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "1rem",
                    marginBottom: "1.5rem",
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "rgba(16, 29, 53, 0.7)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "var(--radius-sm)",
                      padding: "1.25rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <Terminal size={18} color="var(--color-brand-accent)" />
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF" }}>Distributed Microservices</span>
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "var(--color-muted-blue)", margin: 0, lineHeight: 1.4 }}>
                      Decoupled domain services with low latency messaging and fault isolation.
                    </p>
                  </div>

                  <div
                    style={{
                      backgroundColor: "rgba(16, 29, 53, 0.7)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "var(--radius-sm)",
                      padding: "1.25rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <Cpu size={18} color="#38BDF8" />
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF" }}>Intelligent Automation</span>
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "var(--color-muted-blue)", margin: 0, lineHeight: 1.4 }}>
                      Practical LLM workflows & automated pipeline decision engines.
                    </p>
                  </div>

                  <div
                    style={{
                      backgroundColor: "rgba(16, 29, 53, 0.7)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "var(--radius-sm)",
                      padding: "1.25rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <ShieldCheck size={18} color="#34D399" />
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF" }}>Zero-Trust Security</span>
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "var(--color-muted-blue)", margin: 0, lineHeight: 1.4 }}>
                      End-to-end data encryption, role governance, and compliance readiness.
                    </p>
                  </div>

                  <div
                    style={{
                      backgroundColor: "rgba(16, 29, 53, 0.7)",
                      border: "1px solid rgba(255, 255, 255, 0.08)",
                      borderRadius: "var(--radius-sm)",
                      padding: "1.25rem",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                      <Layers size={18} color="#FBBF24" />
                      <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF" }}>Cloud Scalability</span>
                    </div>
                    <p style={{ fontSize: "0.78rem", color: "var(--color-muted-blue)", margin: 0, lineHeight: 1.4 }}>
                      Multi-region container orchestration with automated zero-downtime scaling.
                    </p>
                  </div>
                </div>

                {/* System Activity Stream */}
                <div
                  style={{
                    backgroundColor: "rgba(11, 20, 36, 0.9)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "var(--radius-sm)",
                    padding: "0.85rem 1rem",
                    fontSize: "0.78rem",
                    fontFamily: "monospace",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <span style={{ color: "#34D399" }}>● System Core Active</span>
                  <span style={{ color: "var(--color-muted-blue)" }}>Next.js 16 + React 19 RSC Pipeline</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>

      {/* Verified Partner & Client Recognition Strip */}
      <div
        style={{
          marginTop: "4.5rem",
          borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          paddingTop: "2.5rem",
        }}
      >
        <Container wide>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
            }}
          >
            <p
              style={{
                fontSize: "0.8125rem",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "var(--color-muted-blue)",
                fontWeight: 600,
                margin: 0,
              }}
            >
              Engineering Trusted Digital Solutions Across Global Industries
            </p>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.25rem",
              }}
            >
              {/* Brand 1: Cazanoo */}
              <div className="brand-badge-card" title="Cazanoo — Smart Housing">
                <Image
                  src="/images/brands/cazanoo-logo.jpg"
                  alt="Cazanoo Smart Housing"
                  width={125}
                  height={34}
                  style={{ objectFit: "contain", height: "30px", width: "auto" }}
                />
              </div>

              {/* Brand 2: BEC */}
              <div className="brand-badge-card" title="BEC Global">
                <Image
                  src="/images/brands/bec-logo.jpg"
                  alt="BEC Global"
                  width={42}
                  height={42}
                  style={{ objectFit: "contain", height: "34px", width: "auto" }}
                />
              </div>

              {/* Brand 3: A&B Import Export */}
              <div className="brand-badge-card" title="A&B Import Export — Global Trade">
                <Image
                  src="/images/brands/aandb-logo.png"
                  alt="A&B Import Export"
                  width={85}
                  height={34}
                  style={{ objectFit: "contain", height: "28px", width: "auto" }}
                />
              </div>

              {/* Brand 4: Ambit Triangle Safety */}
              <div className="brand-badge-card" title="Ambit Triangle Safety">
                <Image
                  src="/images/brands/ambit-logo.png"
                  alt="Ambit Triangle Safety"
                  width={125}
                  height={34}
                  style={{ objectFit: "contain", height: "30px", width: "auto" }}
                />
              </div>

              {/* Brand 5: Yazi Travels */}
              <div className="brand-badge-card" title="Yazi Travels">
                <Image
                  src="/images/brands/yazi-travels-logo.png"
                  alt="Yazi Travels"
                  width={135}
                  height={34}
                  style={{ objectFit: "contain", height: "28px", width: "auto" }}
                />
              </div>

              {/* Brand 6: Abir Ayurveda & Wellness */}
              <div className="brand-badge-card" title="Abir Ayurveda & Wellness">
                <Image
                  src="/images/brands/abir-logo.jpg"
                  alt="Abir Ayurveda & Wellness"
                  width={52}
                  height={34}
                  style={{ objectFit: "contain", height: "32px", width: "auto" }}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>

      
    </section>
  );
}
