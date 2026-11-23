"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { industriesData } from "@/data/industries";
import { ArrowRight } from "lucide-react";

export function IndustriesSection() {
  return (
    <section 
      className="section" 
      id="industries"
      style={{
        backgroundColor: "#F8FAFC",
        position: "relative",
      }}
    >
      <Container wide>
        <Reveal delay={0.1}>
          <div
            style={{
              maxWidth: "760px",
              margin: "0 auto 3.5rem auto",
              textAlign: "center",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                fontWeight: 800,
                color: "#101D35",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
                marginBottom: "1rem",
                textAlign: "center",
              }}
            >
              Domain expertise matched with deep technical capabilities.
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "#64748B",
                lineHeight: 1.6,
                margin: 0,
                textAlign: "center",
              }}
            >
              We understand that every sector operates under distinct regulatory mandates, user expectations, and operational tempos. Our engineering solutions are built to address these domain-specific realities.
            </p>
          </div>
        </Reveal>

        <div className="grid-3" style={{ marginBottom: "3.5rem" }}>
          {industriesData.map((ind, index) => (
            <Reveal key={ind.id} delay={0.1 + (index % 3) * 0.1}>
              <div
                className="industry-light-card"
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid #E2E8F0",
                  borderRadius: "16px",
                  padding: "1.75rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.04), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <div>
                  {/* Top Row: Illustration on Left, Title + Description on Right */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "1.15rem",
                    }}
                  >
                    {/* Left: Illustration */}
                    <div
                      style={{
                        width: "72px",
                        height: "72px",
                        flexShrink: 0,
                        position: "relative",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Image
                        src={ind.illustration}
                        alt={ind.name}
                        width={72}
                        height={72}
                        style={{
                          objectFit: "contain",
                          maxWidth: "100%",
                          maxHeight: "100%",
                        }}
                      />
                    </div>

                    {/* Right: Title & Description */}
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <h3
                        style={{
                          fontSize: "1.15rem",
                          fontWeight: 700,
                          color: "#101D35",
                          marginBottom: "0.4rem",
                          lineHeight: 1.25,
                          letterSpacing: "-0.01em",
                        }}
                      >
                        {ind.name}
                      </h3>
                      <p
                        style={{
                          fontSize: "0.85rem",
                          color: "#64748B",
                          lineHeight: 1.45,
                          margin: 0,
                        }}
                      >
                        {ind.shortDescription}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Core Focus Checklist */}
                <div
                  style={{
                    borderTop: "1px solid #F1F5F9",
                    paddingTop: "1rem",
                    marginTop: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.45rem",
                  }}
                >
                  <span
                    style={{
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.08em",
                      color: "#94A3B8",
                      marginBottom: "0.25rem",
                      display: "block",
                    }}
                  >
                    CORE FOCUS:
                  </span>
                  {ind.focusAreas.map((area, aIdx) => (
                    <div
                      key={aIdx}
                      style={{
                        fontSize: "0.825rem",
                        color: "#334155",
                        fontWeight: 500,
                        display: "flex",
                        alignItems: "center",
                        gap: "0.5rem",
                        lineHeight: 1.4,
                      }}
                    >
                      <span
                        style={{
                          color: "#0EA5E9",
                          fontSize: "0.85rem",
                          fontWeight: 800,
                          lineHeight: 1,
                        }}
                      >
                        ✓
                      </span>
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA Link */}
        <Reveal delay={0.3}>
          <div
            style={{
              textAlign: "center",
              paddingTop: "0.5rem",
            }}
          >
            <Link
              href="/industries"
              className="industry-explore-link"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#101D35",
                fontSize: "0.95rem",
                fontWeight: 700,
                borderBottom: "1.5px solid var(--color-brand-accent)",
                paddingBottom: "0.25rem",
                transition: "all var(--transition-fast)",
              }}
            >
              <span>Explore All Industry Specializations & Capabilities</span>
              <ArrowRight size={16} color="var(--color-brand-accent)" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
