import { Hero } from "@/components/home/Hero";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyRoacs } from "@/components/home/WhyRoacs";
import { Testimonials } from "@/components/home/Testimonials";
import { FaqSection } from "@/components/home/FaqSection";
import { InsightsSection } from "@/components/home/InsightsSection";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section with Interactive System Console & Core Metrics */}
      <Hero />

      {/* 2. Infinite Continuous Client Brand Marquee (Transparent Logos) */}
      <BrandMarquee />

      {/* 3. Company Introduction & Capabilities */}
      <AboutPreview />

      {/* 4. Core Services & Proprietary Product Spotlight (Material Management) */}
      <ServicesSection />

      {/* 5. Featured Client Case Studies & Filterable Portfolio */}
      <ProjectsSection />

      {/* 6. Global Industries Supported */}
      <IndustriesSection />

      {/* 7. Why Roacs — Engineering Pillars & Guarantees */}
      <WhyRoacs />

      {/* 8. Verified Client Testimonials */}
      <Testimonials />

      {/* 9. Interactive Frequently Asked Questions */}
      <FaqSection />

      {/* 10. Latest Technology Insights & Blog Articles */}
      <InsightsSection />

      {/* 11. High-Conversion Contact CTA Banner */}
      <ContactCTA />
    </>
  );
}
