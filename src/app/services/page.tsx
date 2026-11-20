import { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { ServiceCard } from "@/components/common/ServiceCard";
import { ContactCTA } from "@/components/home/ContactCTA";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { servicesData } from "@/data/services";
import { servicesParallaxProducts } from "@/data/services-parallax";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "IT Services & Digital Engineering | Roacs Corporation",
  description: "Explore enterprise software engineering, web application development, mobile applications, AI solutions, cloud DevOps, and strategic IT consultancy.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div style={{ overflowX: "clip" }}>
      {/* Aceternity UI 3D Parallax Hero */}
      <HeroParallax products={servicesParallaxProducts} />

      {/* Detailed Services Grid */}
      <section className="section section-light" style={{ position: "relative", zIndex: 10 }}>
        <Container wide>
          <div style={{ marginBottom: "3rem", textAlign: "center", maxWidth: "700px", marginLeft: "auto", marginRight: "auto" }}>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-brand-accent)",
                marginBottom: "0.75rem",
                display: "inline-block",
              }}
            >
              Full Spectrum Engineering
            </span>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 2.5rem)",
                fontWeight: 800,
                color: "var(--color-primary-navy)",
                marginBottom: "1rem",
                letterSpacing: "-0.02em",
              }}
            >
              Explore In-Depth Core Practices
            </h2>
            <p
              style={{
                fontSize: "1.05rem",
                color: "var(--color-text-secondary)",
                lineHeight: 1.6,
              }}
            >
              Every practice is delivered with enterprise-grade quality benchmarks, dedicated SLA options, and modular architectures designed to evolve with your business.
            </p>
          </div>

          <div className="grid-3" style={{ marginBottom: "2rem" }}>
            {servicesData.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}
