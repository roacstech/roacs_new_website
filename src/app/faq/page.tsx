import { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { FaqSection } from "@/components/home/FaqSection";
import { ContactCTA } from "@/components/home/ContactCTA";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Frequently Asked Questions | Roacs Corporation",
  description: "Find clear answers to common questions about Roacs Corporation software engineering services, web application timelines, pricing models, and cloud hosting.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <div>
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
              Support & Knowledge Base
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
              Frequently Asked Questions.
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--color-muted-blue)",
                lineHeight: 1.6,
              }}
            >
              Explore detailed answers regarding our engineering capabilities, software delivery timelines, security standards, and intellectual property terms.
            </p>
          </div>
        </Container>
      </section>

      <FaqSection />

      <ContactCTA />
    </div>
  );
}
