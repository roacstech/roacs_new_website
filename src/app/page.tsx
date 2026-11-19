import { Hero } from "@/components/home/Hero";
import { AboutPreview } from "@/components/home/AboutPreview";
import { ServicesSection } from "@/components/home/ServicesSection";
import { ProjectsSection } from "@/components/home/ProjectsSection";
import { IndustriesSection } from "@/components/home/IndustriesSection";
import { WhyRoacs } from "@/components/home/WhyRoacs";
import { Testimonials } from "@/components/home/Testimonials";
import { InsightsSection } from "@/components/home/InsightsSection";
import { ContactCTA } from "@/components/home/ContactCTA";

export default function HomePage() {
  return (
    <>
      {/* B. Hero Section */}
      <Hero />

      {/* C. Company Introduction */}
      <AboutPreview />

      {/* D. Core Services & Proprietary Product Spotlight */}
      <ServicesSection />

      {/* E. Featured Projects Case Studies */}
      <ProjectsSection />

      {/* F. Industries Supported */}
      <IndustriesSection />

      {/* G. Why Roacs Engineering Pillars */}
      <WhyRoacs />

      {/* H. Genuine Testimonials */}
      <Testimonials />

      {/* I. Modern Editorial Insights */}
      <InsightsSection />

      {/* J. Contact CTA: Let's build what's next */}
      <ContactCTA />
    </>
  );
}
