import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { industriesData } from "@/data/industries";
import { constructMetadata } from "@/lib/metadata";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Industries & Sector Expertise | Roacs Corporation",
  description: "Specialized software development and IT consulting for Prefab & Smart Housing, Global Trade, Industrial Safety, Healthcare, Media, and Enterprise SaaS.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <div>
      {/* Header */}
      <section
        style={{
          backgroundColor: "var(--color-primary-navy)",
          color: "#FFFFFF",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Container>
          <div style={{ maxWidth: "780px" }}>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-brand-accent)",
                marginBottom: "1rem",
                display: "inline-block",
              }}
            >
              Sector Solutions
            </span>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              Domain-specific technology engineered for operational precision.
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--color-muted-blue)",
                lineHeight: 1.6,
              }}
            >
              We translate specific industry regulatory frameworks and workflows into reliable, scalable software architectures.
            </p>
          </div>
        </Container>
      </section>

      {/* Industries Grid */}
      <section className="section section-light">
        <Container wide>
          <div className="grid-2">
            {industriesData.map((ind) => (
              <div
                key={ind.id}
                style={{
                  padding: "2.5rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "var(--color-bg-subtle)",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h3
                    style={{
                      fontSize: "1.5rem",
                      fontWeight: 700,
                      color: "var(--color-primary-navy)",
                      marginBottom: "1rem",
                    }}
                  >
                    {ind.name}
                  </h3>

                  <p
                    style={{
                      fontSize: "1rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.6,
                      marginBottom: "1.75rem",
                    }}
                  >
                    {ind.shortDescription}
                  </p>

                  <div style={{ marginBottom: "1.75rem" }}>
                    <div style={{ fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--color-brand-accent)", marginBottom: "0.75rem" }}>
                      Key Architectural Capabilities
                    </div>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                      {ind.focusAreas.map((area, idx) => (
                        <li key={idx} style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontSize: "0.925rem", color: "var(--color-text-primary)" }}>
                          <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                          <span>{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <Button href="/contact" variant="outline-navy" size="sm" icon={<ArrowRight size={14} />}>
                    Discuss Sector Requirements
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
