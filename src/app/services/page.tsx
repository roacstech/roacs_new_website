import { Metadata } from "next";
import { ContactCTA } from "@/components/home/ContactCTA";
import { HeroParallax } from "@/components/ui/hero-parallax";
import { ServicesStickyScroll } from "@/components/services/ServicesStickyScroll";
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

      {/* Aceternity Sticky Scroll Reveal Section */}
      <ServicesStickyScroll />

      {/* Contact CTA */}
      <ContactCTA />
    </div>
  );
}
