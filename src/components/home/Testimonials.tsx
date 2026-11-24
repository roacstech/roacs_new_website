"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { testimonialsData } from "@/data/testimonials";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = testimonialsData.length;

  const nextTestimonial = useCallback(() => {
    setDirection("right");
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevTestimonial = useCallback(() => {
    setDirection("left");
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setDirection(idx > currentIndex ? "right" : "left");
    setCurrentIndex(idx);
  };

  // Auto-advance every 6 seconds, pausing on hover
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextTestimonial();
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, nextTestimonial]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) nextTestimonial();
      else prevTestimonial();
    }
    touchStartX.current = null;
  };

  const current = testimonialsData[currentIndex];

  // Animation variants
  const variants = {
    enter: (dir: "left" | "right") => ({
      x: dir === "right" ? 30 : -30,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
    exit: (dir: "left" | "right") => ({
      x: dir === "right" ? -30 : 30,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.3,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  return (
    <section
      id="testimonials"
      style={{
        position: "relative",
        paddingTop: "5.5rem",
        paddingBottom: "6.5rem",
        backgroundColor: "#FFFFFF",
        overflow: "hidden",
      }}
    >
      <Container wide>
        {/* Section Heading matching reference UI */}
        <Reveal delay={0.1}>
          <div
            style={{
              textAlign: "center",
              marginBottom: "3.5rem",
              maxWidth: "760px",
              margin: "0 auto 3.5rem auto",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(2rem, 3.8vw, 2.85rem)",
                fontWeight: 800,
                color: "#1E293B",
                letterSpacing: "-0.03em",
                lineHeight: 1.2,
                marginBottom: "0.75rem",
              }}
            >
              What our Customers say
            </h2>
            <p
              style={{
                fontSize: "clamp(0.95rem, 1.2vw, 1.05rem)",
                color: "#64748B",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              Discover why enterprise leaders, founders, and CTOs trust Roacs Corporation to build and scale their digital products.
            </p>
          </div>
        </Reveal>

        {/* Carousel Row: Left Arrow | Stacked Card Deck | Right Arrow */}
        <Reveal delay={0.2}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "clamp(0.5rem, 2vw, 2rem)",
              position: "relative",
              maxWidth: "960px",
              margin: "0 auto",
            }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left Circular Navigation Button */}
            <button
              type="button"
              onClick={prevTestimonial}
              aria-label="Previous testimonial"
              className="testimonial-nav-btn testimonial-prev-btn"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(226, 232, 240, 0.95)",
                boxShadow: "0 4px 14px rgba(15, 23, 42, 0.08)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#475569",
                cursor: "pointer",
                flexShrink: 0,
                zIndex: 10,
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                outline: "none",
              }}
            >
              <ChevronLeft size={20} strokeWidth={2.2} />
            </button>

            {/* Stacked Cards Deck Container */}
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "720px",
                paddingBottom: "32px", // reserve space for stacked stepped layers
              }}
            >
              {/* Stacked Layer 2 (Bottom-most peeking card) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "4px",
                  left: "6%",
                  right: "6%",
                  height: "55px",
                  backgroundColor: "rgba(255, 255, 255, 0.7)",
                  borderRadius: "22px",
                  border: "1px solid rgba(226, 232, 240, 0.85)",
                  boxShadow: "0 10px 25px -4px rgba(15, 23, 42, 0.035)",
                  zIndex: 1,
                  pointerEvents: "none",
                }}
              />

              {/* Stacked Layer 1 (Middle peeking card) */}
              <div
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "3%",
                  right: "3%",
                  height: "55px",
                  backgroundColor: "#FFFFFF",
                  borderRadius: "22px",
                  border: "1px solid rgba(226, 232, 240, 0.95)",
                  boxShadow: "0 14px 30px -4px rgba(15, 23, 42, 0.05)",
                  zIndex: 2,
                  pointerEvents: "none",
                }}
              />

              {/* Active Front Card */}
              <div
                style={{
                  position: "relative",
                  zIndex: 3,
                  backgroundColor: "#FFFFFF",
                  borderRadius: "22px",
                  border: "1px solid rgba(226, 232, 240, 0.95)",
                  boxShadow:
                    "0 20px 45px -10px rgba(15, 23, 42, 0.09), 0 2px 6px rgba(0, 0, 0, 0.02)",
                  padding: "clamp(2.25rem, 4vw, 3.25rem) clamp(1.5rem, 3.5vw, 3rem)",
                  textAlign: "center",
                  overflow: "hidden",
                }}
              >
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={current.id}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    {/* Centered Circular Avatar */}
                    <div
                      style={{
                        position: "relative",
                        width: "82px",
                        height: "82px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        backgroundColor: "#F1F5F9",
                        border: "3px solid #FFFFFF",
                        boxShadow: "0 6px 18px rgba(15, 23, 42, 0.1)",
                        marginBottom: "1.25rem",
                      }}
                    >
                      <Image
                        src={current.avatar}
                        alt={current.name}
                        fill
                        sizes="82px"
                        style={{ objectFit: "cover" }}
                        priority
                      />
                    </div>

                    {/* Customer Name */}
                    <h3
                      style={{
                        fontSize: "clamp(1.2rem, 1.8vw, 1.4rem)",
                        fontWeight: 700,
                        color: "#1E293B",
                        margin: "0 0 0.35rem 0",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {current.name}
                    </h3>

                    {/* Role / Designation */}
                    <div
                      style={{
                        fontSize: "0.925rem",
                        color: "#64748B",
                        fontWeight: 500,
                        marginBottom: "1.75rem",
                      }}
                    >
                      {current.role}
                    </div>

                    {/* Quote text in double quotes */}
                    <p
                      style={{
                        fontSize: "clamp(0.95rem, 1.25vw, 1.05rem)",
                        lineHeight: 1.75,
                        color: "#64748B",
                        maxWidth: "600px",
                        margin: 0,
                        fontStyle: "normal",
                        letterSpacing: "-0.005em",
                      }}
                    >
                      &ldquo;{current.quote}&rdquo;
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* Right Circular Navigation Button */}
            <button
              type="button"
              onClick={nextTestimonial}
              aria-label="Next testimonial"
              className="testimonial-nav-btn testimonial-next-btn"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(226, 232, 240, 0.95)",
                boxShadow: "0 4px 14px rgba(15, 23, 42, 0.08)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#475569",
                cursor: "pointer",
                flexShrink: 0,
                zIndex: 10,
                transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                outline: "none",
              }}
            >
              <ChevronRight size={20} strokeWidth={2.2} />
            </button>
          </div>
        </Reveal>

        {/* Bottom Pagination Dots matching reference UI */}
        <Reveal delay={0.25}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "0.5rem",
              marginTop: "2.75rem",
            }}
          >
            {testimonialsData.map((_, idx) => {
              const isActive = idx === currentIndex;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  style={{
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: isActive ? "#2563EB" : "#93C5FD",
                    border: "none",
                    padding: 0,
                    cursor: "pointer",
                    transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    transform: isActive ? "scale(1.2)" : "scale(1)",
                    outline: "none",
                  }}
                />
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
