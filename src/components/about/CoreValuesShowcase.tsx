"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { 
  Sparkles, 
  ShieldCheck, 
  Users, 
  CheckCircle2
} from "lucide-react";

interface ValueItem {
  id: string;
  num: string;
  tag: string;
  title: string;
  subtitle: string;
  description: string;
  badges: string[];
  image: string;
  accentColor: string;
  accentBg: string;
  accentBorder: string;
  glowColor: string;
  cornerBadge: string;
  icon: React.ElementType;
}

const valuesData: ValueItem[] = [
  {
    id: "val-innovation",
    num: "01",
    tag: "Future-Ready Architecture",
    title: "Innovation",
    subtitle: "Pioneering Modern Stacks & Cloud-Native Systems",
    description: "We embrace innovation as the core of our growth and success. Our team constantly explores emerging technologies and modern development practices to build scalable, future-ready solutions that keep our clients ahead of their competition.",
    badges: ["Modern Tech Stacks", "Cloud-Native Architecture", "Automated CI/CD"],
    image: "/images/about/innovation.jpg",
    accentColor: "#6366F1",
    accentBg: "rgba(99, 102, 241, 0.08)",
    accentBorder: "rgba(99, 102, 241, 0.28)",
    glowColor: "rgba(99, 102, 241, 0.18)",
    cornerBadge: "⚡ Cloud-Native First",
    icon: Sparkles,
  },
  {
    id: "val-integrity",
    num: "02",
    tag: "Radical Transparency",
    title: "Integrity",
    subtitle: "Ethical Engineering & Complete Code Ownership",
    description: "Integrity is the foundation of everything we do. We believe in building long-term relationships through honesty, transparency, and accountability with ethical practices. Our clients receive direct, transparent updates at every milestone.",
    badges: ["Transparent Milestones", "Ethical Engineering", "Full Code Ownership"],
    image: "/images/about/integrity.jpg",
    accentColor: "#2563EB",
    accentBg: "rgba(37, 99, 235, 0.08)",
    accentBorder: "rgba(37, 99, 235, 0.28)",
    glowColor: "rgba(37, 99, 235, 0.18)",
    cornerBadge: "🛡️ 100% Code Ownership",
    icon: ShieldCheck,
  },
  {
    id: "val-customer",
    num: "03",
    tag: "Outcome Driven",
    title: "Customer Focus",
    subtitle: "Aligning Code Metrics With Tangible Business ROI",
    description: "Our clients are at the center of our approach. We take time to understand their unique needs, challenges, and goals before crafting solutions that truly make a difference. We align our engineering metrics directly with your business goals.",
    badges: ["Dedicated Engineering Leads", "Continuous Feedback Sprints", "Post-Launch Support"],
    image: "/images/about/customer-focus.jpg",
    accentColor: "#ED1918",
    accentBg: "rgba(237, 25, 24, 0.08)",
    accentBorder: "rgba(237, 25, 24, 0.28)",
    glowColor: "rgba(237, 25, 24, 0.18)",
    cornerBadge: "🤝 Dedicated Sprint Leads",
    icon: Users,
  },
  {
    id: "val-quality",
    num: "04",
    tag: "Mission-Critical Rigor",
    title: "Quality",
    subtitle: "Peer Architecture Reviews & Zero-Downtime SLAs",
    description: "We are committed to delivering high-quality software that meets the highest standards of performance, security, and reliability. Every application undergoes peer architecture reviews, automated test coverage, and strict performance audits.",
    badges: ["Rigorous Code Audits", "Automated QA Testing", "Zero-Downtime Releases"],
    image: "/images/about/quality.jpg",
    accentColor: "#10B981",
    accentBg: "rgba(16, 185, 129, 0.08)",
    accentBorder: "rgba(16, 185, 129, 0.28)",
    glowColor: "rgba(16, 185, 129, 0.18)",
    cornerBadge: "✨ 99.9% Production SLA",
    icon: CheckCircle2,
  },
];

export function CoreValuesShowcase() {
  const [activeIdx, setActiveIdx] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Track active card via scroll position
  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      cardRefs.current.forEach((el, idx) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        // If the card is in the upper 40% of the viewport, consider it active
        if (rect.top <= viewportHeight * 0.45 && rect.bottom >= viewportHeight * 0.2) {
          setActiveIdx(idx);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToCard = (idx: number) => {
    const target = cardRefs.current[idx];
    if (target) {
      const targetTop = target.getBoundingClientRect().top + window.scrollY - 150;
      window.scrollTo({ top: targetTop, behavior: "smooth" });
    }
  };

  const activeValue = valuesData[activeIdx];

  return (
    <section 
      style={{ 
        position: "relative", 
        backgroundColor: "#F8FAFC", 
        paddingTop: "3.5rem", 
        paddingBottom: "8rem",
        overflow: "visible"
      }}
    >
      {/* Dynamic Ambient Background Glow that changes with the active value */}
      <div
        style={{
          position: "absolute",
          top: "60px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "700px",
          height: "350px",
          background: `radial-gradient(ellipse at center, ${activeValue.glowColor} 0%, transparent 70%)`,
          filter: "blur(80px)",
          pointerEvents: "none",
          zIndex: 0,
          transition: "background 0.6s ease",
          opacity: 0.85,
        }}
      />

      <Container wide style={{ position: "relative", zIndex: 1 }}>
        {/* Section Header */}
        <div style={{ textAlign: "center", maxWidth: "760px", margin: "0 auto 3rem auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.85rem" }}>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "var(--color-brand-accent)",
              }}
            >
              Our Core Values
            </span>
          </div>

          <h2
            style={{
              fontSize: "clamp(2.15rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--color-primary-navy)",
              lineHeight: 1.18,
              marginBottom: "1rem",
            }}
          >
            What Makes Us Different and Drives Our Success
          </h2>

          <p style={{ color: "var(--color-text-secondary)", fontSize: "1.05rem", lineHeight: 1.65, maxWidth: "620px", margin: "0 auto" }}>
            The foundational principles that guide every architectural decision, line of code, and enterprise client interaction.
          </p>
        </div>

        {/* =========================================================================
            MNC STICKY SCROLL CONTROLLER ("Something that comes along as you scroll")
            ========================================================================= */}
        <div
          style={{
            position: "sticky",
            top: "85px",
            zIndex: 40,
            display: "flex",
            justifyContent: "center",
            marginBottom: "3.5rem",
            padding: "0 1rem",
          }}
        >
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.45rem",
              borderRadius: "9999px",
              backgroundColor: "rgba(255, 255, 255, 0.88)",
              backdropFilter: "blur(18px)",
              WebkitBackdropFilter: "blur(18px)",
              border: "1px solid rgba(226, 232, 240, 0.9)",
              boxShadow: "0 10px 30px -5px rgba(0, 0, 0, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.04)",
              maxWidth: "100%",
              overflowX: "auto",
            }}
          >
            {/* Live Counter Badge */}
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.4rem 0.85rem",
                borderRadius: "9999px",
                backgroundColor: activeValue.accentBg,
                color: activeValue.accentColor,
                fontSize: "0.75rem",
                fontWeight: 700,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                transition: "all 0.35s ease",
                whiteSpace: "nowrap",
              }}
            >
              <span style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: activeValue.accentColor }} />
              <span>{activeValue.num} / 04</span>
            </div>

            {/* Interactive Value Tabs */}
            {valuesData.map((val, idx) => {
              const isActive = activeIdx === idx;
              const IconComp = val.icon;
              return (
                <button
                  key={val.id}
                  onClick={() => scrollToCard(idx)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.45rem",
                    padding: "0.45rem 1rem",
                    borderRadius: "9999px",
                    border: "none",
                    cursor: "pointer",
                    fontSize: "0.85rem",
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? "#0F172A" : "#64748B",
                    backgroundColor: isActive ? "#FFFFFF" : "transparent",
                    boxShadow: isActive ? "0 4px 12px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)" : "none",
                    transition: "all 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                    whiteSpace: "nowrap",
                  }}
                  className="mnc-tab-btn"
                >
                  <IconComp 
                    size={15} 
                    color={isActive ? val.accentColor : "#94A3B8"} 
                    style={{ transition: "color 0.25s ease" }}
                  />
                  <span>{val.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* =========================================================================
            STICKY STACKING CARDS DECK (Apple / Stripe Deck Physics)
            ========================================================================= */}
        <div style={{ display: "flex", flexDirection: "column", gap: "5rem" }}>
          {valuesData.map((val, idx) => {
            const IconComp = val.icon;
            // Sticky top position incrementally offsets so each card docks right below the previous
            const stickyTop = 150 + idx * 24;

            return (
              <div
                key={val.id}
                ref={(el) => {
                  cardRefs.current[idx] = el;
                }}
                className="mnc-sticky-card"
                style={{
                  position: "sticky",
                  top: `${stickyTop}px`,
                  zIndex: idx + 1,
                  borderRadius: "28px",
                  backgroundColor: "#FFFFFF",
                  border: `1px solid ${activeIdx === idx ? val.accentBorder : "rgba(226, 232, 240, 0.85)"}`,
                  boxShadow: activeIdx === idx
                    ? `0 25px 60px -15px ${val.glowColor}, 0 0 1px 1px rgba(0, 0, 0, 0.06)`
                    : "0 15px 45px -10px rgba(0, 0, 0, 0.07), 0 0 1px 1px rgba(0, 0, 0, 0.04)",
                  overflow: "hidden",
                  transition: "border-color 0.4s ease, box-shadow 0.4s ease, transform 0.35s ease",
                }}
              >
                {/* Top Subtle Glowing Accent Header Bar */}
                <div
                  style={{
                    height: "4px",
                    width: "100%",
                    background: `linear-gradient(90deg, ${val.accentColor} 0%, transparent 80%)`,
                  }}
                />

                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
                    gap: "3.5rem",
                    alignItems: "center",
                    padding: "3.25rem",
                  }}
                >
                  {/* Left Column: Value Narrative & Badges */}
                  <div>
                    {/* Header Row: Large Accent Number & Tag */}
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                      <span
                        style={{
                          fontSize: "3.25rem",
                          fontWeight: 900,
                          lineHeight: 1,
                          color: val.accentColor,
                          letterSpacing: "-0.04em",
                          display: "inline-block",
                        }}
                      >
                        {val.num}
                      </span>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "0.45rem",
                          padding: "0.35rem 0.85rem",
                          borderRadius: "9999px",
                          backgroundColor: val.accentBg,
                          border: `1px solid ${val.accentBorder}`,
                          color: val.accentColor,
                          fontSize: "0.75rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        <IconComp size={13} />
                        <span>{val.tag}</span>
                      </div>
                    </div>

                    <h3
                      style={{
                        fontSize: "clamp(1.85rem, 3vw, 2.35rem)",
                        fontWeight: 800,
                        color: "var(--color-primary-navy)",
                        lineHeight: 1.2,
                        letterSpacing: "-0.02em",
                        marginBottom: "0.75rem",
                      }}
                    >
                      {val.title}
                    </h3>

                    <h4
                      style={{
                        fontSize: "1.05rem",
                        fontWeight: 600,
                        color: val.accentColor,
                        marginBottom: "1.25rem",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {val.subtitle}
                    </h4>

                    <p
                      style={{
                        fontSize: "1.05rem",
                        lineHeight: 1.7,
                        color: "#475569",
                        marginBottom: "2rem",
                      }}
                    >
                      {val.description}
                    </p>

                    {/* Technical Deliverable Badges */}
                    <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                      {val.badges.map((badge, bIdx) => (
                        <span
                          key={bIdx}
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "0.4rem",
                            fontSize: "0.8125rem",
                            fontWeight: 600,
                            padding: "0.4rem 0.9rem",
                            borderRadius: "9999px",
                            backgroundColor: "#F8FAFC",
                            border: "1px solid #E2E8F0",
                            color: "#334155",
                            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.03)",
                            transition: "all 0.2s ease",
                          }}
                          className="mnc-badge-pill"
                        >
                          <span
                            style={{
                              width: "5px",
                              height: "5px",
                              borderRadius: "50%",
                              backgroundColor: val.accentColor,
                            }}
                          />
                          <span>{badge}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Visual Showcase with Corner Floating Pill */}
                  <div
                    style={{
                      position: "relative",
                      height: "360px",
                      borderRadius: "22px",
                      overflow: "hidden",
                      boxShadow: "0 15px 35px -10px rgba(0, 0, 0, 0.12)",
                      border: "1px solid rgba(226, 232, 240, 0.9)",
                    }}
                    className="mnc-card-img-wrapper"
                  >
                    <Image
                      src={val.image}
                      alt={`${val.title} at Roacs Corporation`}
                      fill
                      sizes="(max-width: 768px) 100vw, 45vw"
                      style={{ objectFit: "cover" }}
                      className="mnc-card-img"
                    />

                    {/* Dark gradient overlay at bottom of image */}
                    <div
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, transparent 60%, rgba(2, 11, 30, 0.45) 100%)",
                        pointerEvents: "none",
                      }}
                    />

                    {/* Floating Corner Badge */}
                    <div
                      style={{
                        position: "absolute",
                        bottom: "1.25rem",
                        left: "1.25rem",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "0.45rem",
                        padding: "0.5rem 1rem",
                        borderRadius: "9999px",
                        backgroundColor: "rgba(2, 11, 30, 0.8)",
                        backdropFilter: "blur(12px)",
                        WebkitBackdropFilter: "blur(12px)",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        color: "#FFFFFF",
                        fontSize: "0.8125rem",
                        fontWeight: 600,
                        boxShadow: "0 8px 20px rgba(0, 0, 0, 0.3)",
                      }}
                    >
                      <span>{val.cornerBadge}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
