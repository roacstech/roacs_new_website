"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { Reveal } from "@/components/common/Reveal";
import { servicesData } from "@/data/services";
import { motion, useScroll, useTransform } from "framer-motion";
import { 
  ArrowRight, 
  Package, 
  Layers,
  Sparkles,
  QrCode,
  BellRing,
  Boxes,
  TrendingUp,
  Activity
} from "lucide-react";

export function ServicesSection() {
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [isDesktop, setIsDesktop] = useState(true);

  // Responsive check for desktop sticky horizontal window vs mobile swipe carousel
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize, { passive: true });
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Track container width changes with ResizeObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      for (const entry of entries) {
        if (entry.contentRect.width > 0) {
          setContainerWidth(entry.contentRect.width);
        }
      }
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const totalCards = servicesData.length;
  const gap = 24; // 24px gap between cards matching gap-6

  // Exactly 3 cards visible side-by-side in container width:
  // 3 * cardWidth + 2 * gap = containerWidth => cardWidth = (containerWidth - 2 * gap) / 3
  const cardWidth = containerWidth > 0 ? (containerWidth - 2 * gap) / 3 : 380;
  const shiftStep = cardWidth + gap;
  const maxShift = Math.max(0, (totalCards - 3) * shiftStep);

  // Scroll Progress across the tall sticky section
  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
    offset: ["start start", "end end"],
  });

  // Smooth horizontal translation: exactly from 0px to -maxShift px
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxShift]);

  return (
    <section 
      className="section-subtle" 
      id="services"
      style={{
        position: "relative",
        overflow: "visible",
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
          zIndex: 0,
        }}
      />

      {/* =========================================================================
          DESKTOP: Sticky 3-Card Horizontal Scroll Window (>= 1024px)
          ========================================================================= */}
      {isDesktop ? (
        <div
          ref={scrollSectionRef}
          style={{
            position: "relative",
            // Height formula: 100vh base + 60vh scroll distance per shift step (4 shifts = 240vh -> 340vh total)
            height: `calc(100vh + ${(totalCards - 3) * 60}vh)`,
            zIndex: 1,
          }}
        >
          {/* Sticky Viewport Window Centered on Screen */}
          <div
            style={{
              position: "sticky",
              top: 0,
              height: "100vh",
              maxHeight: "100vh",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <Container wide>
              {/* Section Heading */}
              <div
                style={{
                  textAlign: "center",
                  maxWidth: "920px",
                  margin: "0 auto clamp(1.25rem, 2.5vh, 2rem) auto",
                }}
              >
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.3rem 0.85rem",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(237, 25, 24, 0.08)",
                    border: "1px solid rgba(237, 25, 24, 0.18)",
                    color: "var(--color-brand-accent, #ED1918)",
                    fontSize: "0.78rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    marginBottom: "0.65rem",
                  }}
                >
                  Our Core Services
                </div>
                <h2
                  style={{
                    fontSize: "clamp(1.85rem, 2.8vw, 2.5rem)",
                    fontWeight: 800,
                    color: "var(--color-primary-navy, #101D35)",
                    lineHeight: 1.2,
                    letterSpacing: "-0.025em",
                    marginBottom: "0.65rem",
                  }}
                >
                  Innovative IT Solutions for Modern Businesses.
                </h2>
                <p
                  style={{
                    fontSize: "clamp(0.9rem, 1.1vw, 0.98rem)",
                    color: "var(--color-text-secondary, #64748B)",
                    lineHeight: 1.55,
                    maxWidth: "760px",
                    margin: "0 auto",
                  }}
                >
                  From strategic IT consultancy to custom software, mobile ecosystems, and cloud automation, we engineer enterprise-grade solutions tailored to accelerate your business goals.
                </p>
              </div>

              {/* Exact 3-Card Masked Viewport Window */}
              <div
                ref={containerRef}
                style={{
                  width: "100%",
                  maxWidth: "1280px",
                  margin: "0 auto",
                  overflow: "hidden", // Masks cards 04+ on right and exiting cards on left
                  position: "relative",
                  padding: "10px 0",
                }}
              >
                <motion.div
                  style={{
                    x,
                    display: "flex",
                    gap: `${gap}px`,
                    width: "max-content",
                    willChange: "transform",
                  }}
                >
                  {servicesData.map((service, index) => (
                    <div
                      key={service.id}
                      style={{
                        width: cardWidth > 0 ? `${cardWidth}px` : "380px",
                        flexShrink: 0,
                        display: "flex",
                      }}
                    >
                      <ServiceCard service={service} index={index} />
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Horizontal Scroll Progress Hint */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.65rem",
                  marginTop: "clamp(1rem, 2vh, 1.5rem)",
                }}
              >
                <span style={{ fontSize: "0.75rem", color: "#94A3B8", fontWeight: 600, letterSpacing: "0.04em" }}>
                  SCROLL TO EXPLORE ALL 7 SERVICES
                </span>
                <div
                  style={{
                    width: "80px",
                    height: "3px",
                    backgroundColor: "#E2E8F0",
                    borderRadius: "9999px",
                    overflow: "hidden",
                    position: "relative",
                  }}
                >
                  <motion.div
                    style={{
                      height: "100%",
                      backgroundColor: "#2563EB",
                      width: "100%",
                      scaleX: scrollYProgress,
                      transformOrigin: "left",
                    }}
                  />
                </div>
              </div>
            </Container>
          </div>
        </div>
      ) : (
        /* =========================================================================
            MOBILE & TABLET (< 1024px): Clean Horizontal Swipe Carousel Fallback
            ========================================================================= */
        <div style={{ paddingTop: "4.5rem", paddingBottom: "3rem", position: "relative", zIndex: 1 }}>
          <Container wide>
            <Reveal delay={0.1}>
              <SectionHeading
                eyebrow="Our Core Services"
                eyebrowVariant="accent"
                title="Innovative IT Solutions for Modern Businesses."
                description="From strategic IT consultancy to custom software, mobile ecosystems, and cloud automation, we engineer enterprise-grade solutions tailored to accelerate your business goals."
                align="center"
              />
            </Reveal>

            {/* Swipeable Carousel */}
            <div
              style={{
                display: "flex",
                gap: "1.25rem",
                overflowX: "auto",
                scrollSnapType: "x mandatory",
                WebkitOverflowScrolling: "touch",
                padding: "0.5rem 0.5rem 1.75rem 0.5rem",
                scrollbarWidth: "none",
                marginBottom: "2rem",
              }}
              className="services-mobile-swipe-track"
            >
              {servicesData.map((service, index) => (
                <div
                  key={service.id}
                  style={{
                    width: "min(88vw, 340px)",
                    flexShrink: 0,
                    scrollSnapAlign: "start",
                    display: "flex",
                  }}
                >
                  <ServiceCard service={service} index={index} />
                </div>
              ))}
            </div>

            <div style={{ textAlign: "center", fontSize: "0.78rem", color: "#94A3B8", fontWeight: 600 }}>
              ← Swipe horizontally to view all services →
            </div>
          </Container>
        </div>
      )}    
    </section>
  );
}
