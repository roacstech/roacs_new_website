"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
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
        {/* Centered Hero Content Matching Reference UI */}
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          {/* Centered Frosted Capsule Category Pill */}
          <Reveal delay={0.1}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                padding: "0.45rem 1.25rem",
                backgroundColor: "rgba(255, 255, 255, 0.75)",
                border: "1px solid rgba(0, 0, 0, 0.08)",
                borderRadius: "9999px",
                marginBottom: "1.75rem",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.04)",
                backdropFilter: "blur(10px)",
                WebkitBackdropFilter: "blur(10px)",
              }}
            >
              <span
                style={{
                  fontSize: "0.8125rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#3F3F46",
                }}
              >
                Software & Technology Solutions
              </span>
            </div>
          </Reveal>

          {/* Centered High-Impact Headline with Reference UI Font Colors */}
          <Reveal delay={0.2}>
            <h1
              style={{
                fontSize: "clamp(2.75rem, 5.5vw, 4.75rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: 1.15,
                marginBottom: "1.5rem",
                color: "#0A0A0A",
              }}
            >
              We Build Scalable{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #9333EA 0%, #D946EF 45%, #F59E0B 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Software
              </span>
              <br />
              That Drives{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #EC4899 0%, #EF4444 35%, #F59E0B 70%, #2563EB 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Business Growth
              </span>
            </h1>
          </Reveal>

          {/* Centered Subtitle Copy */}
          <Reveal delay={0.3}>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.68,
                color: "#52525B",
                marginBottom: "2.5rem",
                maxWidth: "680px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              At Roacs Corporation, we design and develop powerful SaaS platforms, web applications, and enterprise solutions that help businesses streamline operations and scale efficiently.
            </p>
          </Reveal>

          {/* Centered CTA Button Group Styled Like Reference UI */}
          <Reveal delay={0.4}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
                marginBottom: "3.5rem",
              }}
            >
              {/* Primary Black Capsule Button with Circle Arrow */}
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.85rem",
                  backgroundColor: "#18181B",
                  color: "#FFFFFF",
                  padding: "0.6rem 0.75rem 0.6rem 1.6rem",
                  borderRadius: "9999px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  boxShadow: "0 10px 25px -4px rgba(0, 0, 0, 0.28), 0 4px 10px -2px rgba(0, 0, 0, 0.15)",
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px) scale(1.02)";
                  e.currentTarget.style.backgroundColor = "#000000";
                  e.currentTarget.style.boxShadow = "0 14px 30px -4px rgba(0, 0, 0, 0.38)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.backgroundColor = "#18181B";
                  e.currentTarget.style.boxShadow = "0 10px 25px -4px rgba(0, 0, 0, 0.28)";
                }}
              >
                <span>Get Started</span>
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "50%",
                    backgroundColor: "#27272A",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#FFFFFF",
                  }}
                >
                  <ArrowRight size={15} />
                </div>
              </Link>

              {/* Secondary Clean Glass Pill Button */}
              <Link
                href="/services"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "rgba(255, 255, 255, 0.85)",
                  color: "#18181B",
                  border: "1px solid rgba(0, 0, 0, 0.12)",
                  padding: "0.75rem 1.6rem",
                  borderRadius: "9999px",
                  fontSize: "0.95rem",
                  fontWeight: 600,
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.05)",
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                  transition: "all 0.2s ease",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-2px)";
                  e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.25)";
                  e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.08)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.borderColor = "rgba(0, 0, 0, 0.12)";
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.05)";
                }}
              >
                <span>Explore Core Services</span>
              </Link>
            </div>
          </Reveal>

          {/* Centered Credibility Badges */}
          <Reveal delay={0.5}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                alignItems: "center",
                gap: "2rem",
                paddingTop: "2rem",
                borderTop: "1px solid rgba(0, 0, 0, 0.08)",
                maxWidth: "760px",
                marginLeft: "auto",
                marginRight: "auto",
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
