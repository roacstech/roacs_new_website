"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Award, 
  ArrowUpRight
} from "lucide-react";

interface ShowcaseSlide {
  id: string;
  title: string;
  category: string;
  metric: string;
  highlight: string;
  image: string;
  link?: string;
  isExternal?: boolean;
}

const SHOWCASE_SLIDES: ShowcaseSlide[] = [
  {
    id: "cazanoo",
    title: "Cazanoo Multi-Vendor Property Portal",
    category: "Enterprise Marketplace & SaaS",
    metric: "High-Traffic Multi-Tenant Architecture",
    highlight: "10,000+ Active Listings",
    image: "/images/projects/cazanoo.png",
    link: "https://cazanoo.com",
    isExternal: true,
  },
  {
    id: "material-mgmt",
    title: "Roacs Material Management Platform",
    category: "Cloud ERP & Industrial Supply",
    metric: "Automated Barcoding & Live Inventory",
    highlight: "Zero Stock Discrepancy",
    image: "/images/products/material-management-o2.1.jpg",
    link: "/material-management",
    isExternal: false,
  },
  {
    id: "bec-global",
    title: "BEC Global Engineering Solutions",
    category: "Industrial Cloud & Integration",
    metric: "99.9% Production SLA Infrastructure",
    highlight: "Zero Downtime Deployments",
    image: "/images/projects/bec.jpg",
    link: "https://becglobal.in",
    isExternal: true,
  },
  {
    id: "accupose",
    title: "Accupose Computer Vision AI Platform",
    category: "AI & Motion Estimation Engine",
    metric: "Sub-50ms Real-Time Inference",
    highlight: "30+ Spatial Keypoints",
    image: "/images/projects/accupose.png",
    link: "https://accupose.in",
    isExternal: true,
  },
  {
    id: "aandb",
    title: "A&B Global Retail E-Commerce",
    category: "Headless Commerce Architecture",
    metric: "Instant Checkout & Scalable Catalog",
    highlight: "Enterprise Next.js Stack",
    image: "/images/projects/aandb.jpg",
    link: "https://aandb.co.in",
    isExternal: true,
  },
  {
    id: "enterprise-suite",
    title: "Roacs Enterprise Technology Suite",
    category: "Full-Stack Custom Architecture",
    metric: "Scalable Microservices & Cloud DevOps",
    highlight: "300+ Verified Projects",
    image: "/images/banner.webp",
    link: "/services",
    isExternal: false,
  },
];

const AUTOPLAY_INTERVAL = 4500;

export function HeroImageShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState<1 | -1>(1);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % SHOWCASE_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + SHOWCASE_SLIDES.length) % SHOWCASE_SLIDES.length);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      nextSlide();
    }, AUTOPLAY_INTERVAL);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [nextSlide, isPaused, currentIndex]);

  const currentSlide = SHOWCASE_SLIDES[currentIndex];

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        maxWidth: "640px",
        margin: "0 auto",
      }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Radiant Ambient Glow Behind Frame */}
      <div className="hero-showcase-glow" />

      {/* Stacked 3D Depth Card 2 (Bottom-most rotated layer) */}
      <div
        style={{
          position: "absolute",
          inset: "8px -10px -10px 10px",
          borderRadius: "24px",
          background: "linear-gradient(135deg, rgba(237, 25, 24, 0.22) 0%, rgba(37, 99, 235, 0.15) 100%)",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          transform: "rotate(-2deg)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Stacked 3D Depth Card 1 (Sub-layer slightly rotated) */}
      <div
        style={{
          position: "absolute",
          inset: "4px -6px -6px 6px",
          borderRadius: "24px",
          background: "rgba(15, 26, 48, 0.75)",
          border: "1px solid rgba(255, 255, 255, 0.12)",
          transform: "rotate(1.5deg)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* Main Glassmorphic Showcase Stage */}
      <div
        style={{
          position: "relative",
          zIndex: 3,
          borderRadius: "22px",
          backgroundColor: "rgba(10, 18, 33, 0.92)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          boxShadow: "0 28px 70px rgba(0, 0, 0, 0.65), 0 0 0 1px rgba(255, 255, 255, 0.06) inset",
          overflow: "hidden",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Animated Progress Bar (Indicates Slide Duration) */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "3px",
            backgroundColor: "rgba(255, 255, 255, 0.1)",
            zIndex: 15,
            overflow: "hidden",
          }}
        >
          <motion.div
            key={currentIndex + (isPaused ? "-paused" : "-active")}
            initial={{ width: "0%" }}
            animate={{ width: isPaused ? undefined : "100%" }}
            transition={{
              duration: isPaused ? 0 : AUTOPLAY_INTERVAL / 1000,
              ease: "linear",
            }}
            style={{
              height: "100%",
              background: "linear-gradient(90deg, var(--color-brand-accent) 0%, #38BDF8 100%)",
              boxShadow: "0 0 8px rgba(237, 25, 24, 0.8)",
            }}
          />
        </div>

        {/* Top Control Bar / Slide Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0.85rem 1.25rem",
            backgroundColor: "rgba(15, 26, 48, 0.85)",
            borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
            position: "relative",
            zIndex: 10,
          }}
        >
          {/* Mac-style Traffic Light Dots with Live Indicator */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.55rem" }}>
            <div style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#EF4444" }} />
            <div style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#F59E0B" }} />
            <div style={{ width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#10B981" }} />
            <span
              style={{
                fontSize: "0.74rem",
                color: "var(--color-muted-blue)",
                marginLeft: "0.4rem",
                fontFamily: "monospace",
                letterSpacing: "0.02em",
              }}
            >
              roacs://showcase/{currentSlide.id}
            </span>
          </div>

          {/* Slide Counter & Category Pill */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
            <span
              style={{
                fontSize: "0.72rem",
                fontFamily: "monospace",
                color: "rgba(255, 255, 255, 0.85)",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                padding: "0.2rem 0.55rem",
                borderRadius: "var(--radius-full)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
              }}
            >
              {String(currentIndex + 1).padStart(2, "0")} / {String(SHOWCASE_SLIDES.length).padStart(2, "0")}
            </span>
          </div>
        </div>

        {/* Visual Viewport with Animated Image Transitions */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "360px",
            backgroundColor: "#070E1B",
            overflow: "hidden",
          }}
        >
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{
                opacity: 0,
                scale: 1.05,
                x: direction * 30,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.98,
                x: direction * -30,
              }}
              transition={{
                duration: 0.55,
                ease: [0.16, 1, 0.3, 1],
              }}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
              }}
            >
              <Image
                src={currentSlide.image}
                alt={currentSlide.title}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 640px"
                style={{
                  objectFit: "cover",
                  objectPosition: "top center",
                }}
              />

              {/* Sophisticated Dark Gradient Overlays for High Legibility */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: `
                    linear-gradient(to top, rgba(7, 14, 27, 0.96) 0%, rgba(7, 14, 27, 0.6) 45%, transparent 75%),
                    linear-gradient(to bottom, rgba(7, 14, 27, 0.4) 0%, transparent 35%)
                  `,
                  pointerEvents: "none",
                }}
              />
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows (Prev / Next) */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            style={{
              position: "absolute",
              left: "12px",
              top: "45%",
              transform: "translateY(-50%)",
              zIndex: 12,
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "rgba(10, 18, 33, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-brand-accent)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(10, 18, 33, 0.75)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <ChevronLeft size={18} />
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            style={{
              position: "absolute",
              right: "12px",
              top: "45%",
              transform: "translateY(-50%)",
              zIndex: 12,
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              backgroundColor: "rgba(10, 18, 33, 0.75)",
              border: "1px solid rgba(255, 255, 255, 0.18)",
              color: "#FFFFFF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              transition: "all 0.2s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--color-brand-accent)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1.08)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "rgba(10, 18, 33, 0.75)";
              e.currentTarget.style.transform = "translateY(-50%) scale(1)";
            }}
          >
            <ChevronRight size={18} />
          </button>

          {/* Slide Description & Meta Overlay (Bottom of Viewport) */}
          <div
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              padding: "1.25rem 1.4rem",
              zIndex: 11,
            }}
          >
            <motion.div
              key={currentSlide.id + "-caption"}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {/* Category Pill & Highlight */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "0.5rem",
                  marginBottom: "0.45rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    textTransform: "uppercase",
                    letterSpacing: "0.06em",
                    color: "#FFFFFF",
                    backgroundColor: "rgba(237, 25, 24, 0.85)",
                    padding: "0.2rem 0.65rem",
                    borderRadius: "var(--radius-full)",
                    boxShadow: "0 2px 8px rgba(237, 25, 24, 0.4)",
                  }}
                >
                  {currentSlide.category}
                </span>

                <span
                  style={{
                    fontSize: "0.72rem",
                    fontWeight: 600,
                    color: "#34D399",
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    border: "1px solid rgba(16, 185, 129, 0.3)",
                    padding: "0.2rem 0.55rem",
                    borderRadius: "var(--radius-full)",
                  }}
                >
                  {currentSlide.highlight}
                </span>
              </div>

              {/* Slide Title */}
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "0.35rem",
                  lineHeight: 1.3,
                  textShadow: "0 2px 10px rgba(0, 0, 0, 0.7)",
                }}
              >
                {currentSlide.title}
              </h3>

              {/* Metrics & Action Link Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "0.75rem",
                }}
              >
                <span
                  style={{
                    fontSize: "0.8rem",
                    color: "rgba(255, 255, 255, 0.75)",
                    lineHeight: 1.4,
                  }}
                >
                  {currentSlide.metric}
                </span>

                {currentSlide.link && (
                  <a
                    href={currentSlide.link}
                    target={currentSlide.isExternal ? "_blank" : undefined}
                    rel={currentSlide.isExternal ? "noopener noreferrer" : undefined}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.35rem",
                      fontSize: "0.76rem",
                      fontWeight: 600,
                      color: "#FFFFFF",
                      backgroundColor: "rgba(255, 255, 255, 0.12)",
                      border: "1px solid rgba(255, 255, 255, 0.2)",
                      padding: "0.3rem 0.75rem",
                      borderRadius: "var(--radius-full)",
                      whiteSpace: "nowrap",
                      backdropFilter: "blur(8px)",
                      transition: "all 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "var(--color-brand-accent)";
                      e.currentTarget.style.borderColor = "var(--color-brand-accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.12)";
                      e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
                    }}
                  >
                    <span>{currentSlide.isExternal ? "Live Site" : "View Details"}</span>
                    {currentSlide.isExternal ? <ExternalLink size={12} /> : <ArrowUpRight size={12} />}
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Thumbnail Selector Pills Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "0.5rem",
            padding: "0.85rem 1rem",
            backgroundColor: "rgba(10, 18, 33, 0.95)",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          {SHOWCASE_SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                onClick={() => goToSlide(idx)}
                aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
                style={{
                  height: "8px",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: isActive ? "var(--color-brand-accent)" : "rgba(255, 255, 255, 0.2)",
                  width: isActive ? "36px" : "10px",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                  cursor: "pointer",
                  boxShadow: isActive ? "0 0 10px rgba(237, 25, 24, 0.7)" : "none",
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Floating Animated Badge 1: Top-Left "Live Deployments" */}
      <div
        className="hero-float-badge-1"
        style={{
          position: "absolute",
          top: "-16px",
          left: "-14px",
          zIndex: 20,
          backgroundColor: "rgba(10, 18, 33, 0.88)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
          borderRadius: "var(--radius-full)",
          padding: "0.45rem 0.9rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          boxShadow: "0 12px 28px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div className="live-pulse-dot" />
        <span
          style={{
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.06em",
            color: "#FFFFFF",
            fontFamily: "monospace",
          }}
        >
          LIVE PRODUCTION CLIENTS
        </span>
      </div>

      {/* Floating Animated Badge 2: Bottom-Right "300+ Projects & Reliability" */}
      <div
        className="hero-float-badge-2"
        style={{
          position: "absolute",
          bottom: "-18px",
          right: "-12px",
          zIndex: 20,
          backgroundColor: "rgba(10, 18, 33, 0.9)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid rgba(237, 25, 24, 0.35)",
          borderRadius: "16px",
          padding: "0.65rem 1.1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          boxShadow: "0 16px 36px rgba(0, 0, 0, 0.5), 0 0 20px rgba(237, 25, 24, 0.15)",
        }}
      >
        <div
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            backgroundColor: "rgba(237, 25, 24, 0.15)",
            border: "1px solid rgba(237, 25, 24, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-brand-accent)",
            flexShrink: 0,
          }}
        >
          <Award size={19} />
        </div>
        <div>
          <div
            style={{
              fontSize: "0.92rem",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.2,
            }}
          >
            300+ Projects Completed
          </div>
          <div
            style={{
              fontSize: "0.72rem",
              color: "var(--color-muted-blue)",
              fontWeight: 500,
            }}
          >
            99.9% Production SLA Uptime
          </div>
        </div>
      </div>
    </div>
  );
}
