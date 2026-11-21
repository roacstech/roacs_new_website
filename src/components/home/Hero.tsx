"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { ArrowRight } from "lucide-react";

export function Hero() {

  return (
    <section
      className="hero-section"
      style={{
        position: "relative",
        backgroundColor: "#FAFAFA",
        backgroundImage: "url('/images/hero-mesh-gradient.jpg')",
        backgroundPosition: "top center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        color: "#0F172A",
        minHeight: "calc(100vh - 68px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        paddingTop: "2.5rem",
        paddingBottom: "3rem",
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
          {/* Centered High-Impact Headline with Reference UI Font Colors */}
          <Reveal delay={0.1}>
            <h1
              className="hero-heading"
              style={{
                fontSize: "clamp(1.85rem, 6.5vw, 4.25rem)",
                fontWeight: 800,
                letterSpacing: "-0.035em",
                lineHeight: 1.14,
                marginBottom: "1rem",
                color: "#0A0A0A",
                wordBreak: "break-word",
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
          <Reveal delay={0.2}>
            <p
              className="hero-subtitle"
              style={{
                fontSize: "clamp(0.925rem, 3.6vw, 1.05rem)",
                lineHeight: 1.6,
                color: "#52525B",
                marginBottom: "1.75rem",
                maxWidth: "680px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              At Roacs Corporation, we design and develop powerful SaaS platforms, web applications, and enterprise solutions that help businesses streamline operations and scale efficiently.
            </p>
          </Reveal>

          {/* Centered CTA Button Group Styled Like Reference UI */}
          <Reveal delay={0.3}>
            <div
              className="hero-buttons-wrapper"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
                flexWrap: "wrap",
              }}
            >
              {/* Primary Black Capsule Button with Circle Arrow */}
              <Link
                href="/contact"
                className="hero-btn-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
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
                className="hero-btn-secondary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
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
        </div>
      </Container>
    </section>
  );
}
