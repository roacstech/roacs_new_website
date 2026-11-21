import { Hero } from "@/components/home/Hero";
import { BrandMarquee } from "@/components/home/BrandMarquee";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesSection } from "@/components/home/ServicesSection";
import { WorkProcess } from "@/components/home/WorkProcess";
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

      {/* 5. Core Services & Proprietary Product Spotlight (Material Management) */}
      <ServicesSection />

      {/* 6. Our 4-Stage Development Lifecycle Process */}
      <WorkProcess />

      {/* 7. Featured Client Case Studies & Filterable Portfolio */}
      <ProjectsSection />

      {/* 8. Global Industries Supported */}
      <IndustriesSection />

      {/* 9. Why Roacs — Engineering Pillars & Guarantees */}
      <WhyRoacs />

      {/* 10. Verified Client Testimonials */}
      <Testimonials />

      {/* 11. Interactive Frequently Asked Questions */}
      <FaqSection />

      {/* 12. Latest Technology Insights & Blog Articles */}
      <InsightsSection />

      {/* 13. High-Conversion Contact CTA Banner */}
      <ContactCTA />
    </>
  );
}
