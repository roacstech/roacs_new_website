"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { industriesData } from "@/data/industries";
import { 
  Home, 
  Truck, 
  ShieldAlert, 
  Activity, 
  Radio, 
  Layers, 
  ArrowRight 
} from "lucide-react";

const industryIcons: Record<string, React.ElementType> = {
  Home,
  Truck,
  ShieldAlert,
  Activity,
  Radio,
  Layers,
};

export function IndustriesSection() {
  return (
    <section className="section section-dark" id="industries">
      <Container wide>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Sector Expertise"
            eyebrowVariant="dark"
            title="Domain expertise matched with deep technical capabilities."
            description="We understand that every sector operates under distinct regulatory mandates, user expectations, and operational tempos. Our engineering solutions are built to address these domain-specific realities."
            dark
          />
        </Reveal>

        <div className="grid-3" style={{ marginBottom: "3rem" }}>
          {industriesData.map((ind, index) => {
            const Icon = industryIcons[ind.iconName] || Layers;
            return (
              <Reveal key={ind.id} delay={0.1 + (index % 3) * 0.1}>
                <div
                  className="card-dark"
                  style={{
                    padding: "2rem",
                    borderRadius: "var(--radius-md)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    height: "100%",
                  }}
                >
                  <div>
                    <div
                      style={{
                        width: "48px",
                        height: "48px",
                        borderRadius: "var(--radius-sm)",
                        backgroundColor: "rgba(255, 255, 255, 0.08)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "var(--color-brand-accent)",
                        marginBottom: "1.25rem",
                        border: "1px solid rgba(255, 255, 255, 0.12)",
                      }}
                    >
                      <Icon size={24} />
                    </div>

                    <h3
                      style={{
                        fontSize: "1.25rem",
                        fontWeight: 700,
                        color: "#FFFFFF",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {ind.name}
                    </h3>

                    <p
                      style={{
                        fontSize: "0.925rem",
                        color: "var(--color-muted-blue)",
                        lineHeight: 1.6,
                        marginBottom: "1.5rem",
                      }}
                    >
                      {ind.shortDescription}
                    </p>
                  </div>

                  <div>
                    <div
                      style={{
                        borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                        paddingTop: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.4rem",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "0.72rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                          color: "rgba(255, 255, 255, 0.5)",
                        }}
                      >
                        Core Focus:
                      </span>
                      {ind.focusAreas.map((area, aIdx) => (
                        <div
                          key={aIdx}
                          style={{
                            fontSize: "0.825rem",
                            color: "rgba(255, 255, 255, 0.85)",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.4rem",
                          }}
                        >
                          <span style={{ color: "var(--color-brand-accent)" }}>›</span>
                          <span>{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.3}>
          <div
            style={{
              textAlign: "center",
              paddingTop: "1rem",
            }}
          >
            <Link
              href="/industries"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#FFFFFF",
                fontSize: "0.95rem",
                fontWeight: 600,
                borderBottom: "1px solid var(--color-brand-accent)",
                paddingBottom: "0.25rem",
              }}
            >
              <span>Explore All Industry Specializations & Capabilities</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
