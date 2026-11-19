import { Metadata } from "next";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { constructMetadata } from "@/lib/metadata";
import { Target, Eye, ArrowRight } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "About Us | Roacs Corporation",
  description: "Learn about Roacs Corporation, our engineering philosophy, leadership commitment, and track record in delivering scalable software and IT consulting.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div>
      {/* Sub-page Hero */}
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
              Who We Are
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
              Architecting scalable software that drives sustainable business growth.
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--color-muted-blue)",
                lineHeight: 1.6,
              }}
            >
              Roacs Corporation is a forward-thinking software engineering and IT consulting company based in Coimbatore, Tamil Nadu, serving organizations globally.
            </p>
          </div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="section section-light">
        <Container wide>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "2.5rem",
              marginBottom: "4rem",
            }}
          >
            <div
              style={{
                padding: "2.5rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--color-bg-subtle)",
                border: "1px solid var(--border-light)",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-brand-accent)",
                  marginBottom: "1.5rem",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <Target size={26} />
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary-navy)" }}>
                Our Mission
              </h3>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
                To empower modern enterprises by engineering software systems that are resilient, scalable, and intuitive. We remove technical complexity so organizations can focus on expanding their core market impact.
              </p>
            </div>

            <div
              style={{
                padding: "2.5rem",
                borderRadius: "var(--radius-md)",
                backgroundColor: "var(--color-bg-subtle)",
                border: "1px solid var(--border-light)",
              }}
            >
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "var(--radius-sm)",
                  backgroundColor: "#FFFFFF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "var(--color-brand-accent)",
                  marginBottom: "1.5rem",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <Eye size={26} />
              </div>
              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "0.75rem", color: "var(--color-primary-navy)" }}>
                Our Vision
              </h3>
              <p style={{ color: "var(--color-text-secondary)", lineHeight: 1.65 }}>
                To become the preferred technology partner for enterprises worldwide, recognized for unwavering code quality, engineering transparency, and innovative digital product delivery.
              </p>
            </div>
          </div>

          {/* Narrative Overview */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3rem",
              alignItems: "center",
            }}
            className="about-detail-grid"
          >
            <div>
              <SectionHeading
                eyebrow="Our Background"
                title="Combining technical rigor with business acumen."
                description="We believe software development should not be an uncertain endeavor. Roacs operates with a structured, transparent software engineering methodology that combines rigorous architecture reviews, agile release cadence, and post-deployment observability."
              />
              <p style={{ color: "var(--color-text-secondary)", marginBottom: "1.5rem", lineHeight: 1.65 }}>
                From our engineering center in Coimbatore, our specialists serve international and regional clients across diverse sectors—including prefabricated construction, medical posture biomechanics, industrial safety, and international export logistics.
              </p>
              <Button href="/contact" variant="primary" icon={<ArrowRight size={16} />}>
                Work With Our Team
              </Button>
            </div>

            <div
              style={{
                position: "relative",
                height: "380px",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-lg)",
                backgroundColor: "#E2E8F0",
              }}
            >
              <Image
                src="/images/about/about-overview.jpg"
                alt="Roacs Corporation Team & Facilities"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </Container>
      </section>

      
    </div>
  );
}
