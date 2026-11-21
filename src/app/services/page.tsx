import { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { ServiceCard } from "@/components/common/ServiceCard";
import { ContactCTA } from "@/components/home/ContactCTA";
import { servicesData } from "@/data/services";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "IT Services & Digital Engineering | Roacs Corporation",
  description: "Explore enterprise software engineering, web application development, mobile applications, AI solutions, cloud DevOps, and strategic IT consultancy.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div>
      {/* Services Hero */}
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
              Enterprise Capabilities
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
              Engineering services built for operational resilience and scale.
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--color-muted-blue)",
                lineHeight: 1.6,
              }}
            >
              Explore our core practices across custom software, modern web platforms, mobile ecosystems, cloud infrastructure, and intelligent automation.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section 
        className="section section-light"
        style={{
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Clean Tech Grid Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
            `,
            backgroundSize: "36px 36px",
            pointerEvents: "none",
          }}
        />

        <Container wide style={{ position: "relative", zIndex: 1 }}>
          <div className="grid-3" style={{ marginBottom: "2rem" }}>
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}
