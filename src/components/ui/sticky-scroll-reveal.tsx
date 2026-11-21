"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export interface StickyScrollItem {
  number?: string;
  cleanTitle?: string;
  title: string;
  category?: string;
  description: string;
  points?: string[];
  link?: string;
  content?: React.ReactNode;
}

export type HeadingDesignStyle =
  | "solid-pill"
  | "giant-watermark"
  | "left-bar"
  | "tall-industrial"
  | "terminal-tag"
  | "gradient-text"
  | "clean-red";

export interface StickyScrollProps {
  content: StickyScrollItem[];
  contentClassName?: string;
  className?: string;
  dark?: boolean;
  headingStyle?: React.CSSProperties;
  designStyle?: HeadingDesignStyle;
}

export const StickyScroll = ({
  content,
  contentClassName,
  className,
  dark = false,
  headingStyle,
  designStyle = "tall-industrial",
}: StickyScrollProps) => {
  const [activeCard, setActiveCard] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const viewportMid = window.innerHeight * 0.45;
      let currentActive = 0;

      itemRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();
        if (rect.top <= viewportMid) {
          currentActive = index;
        }
      });

      setActiveCard(currentActive);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [content.length]);

  const renderHeading = (item: StickyScrollItem) => {
    const num = item.number || item.title.split(".")[0]?.trim() || "01";
    const clean = item.cleanTitle || item.title.replace(/^\d+\.\s*/, "").trim();

    switch (designStyle) {
      case "solid-pill":
        return (
          <div style={{ marginBottom: "1rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.45rem",
                padding: "0.3rem 0.8rem",
                borderRadius: "9999px",
                backgroundColor: "var(--color-brand-accent, #ED1918)",
                color: "#FFFFFF",
                fontSize: "0.8125rem",
                fontWeight: 800,
                letterSpacing: "0.06em",
                marginBottom: "0.75rem",
                boxShadow: "0 2px 8px rgba(237, 25, 24, 0.25)",
              }}
            >
              <span>{num}</span>
              <span style={{ opacity: 0.7 }}>•</span>
              <span>SERVICE</span>
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 2.8vw, 2.25rem)",
                fontWeight: 800,
                color: dark ? "#FFFFFF" : "#101D35",
                letterSpacing: "-0.025em",
                lineHeight: 1.25,
                margin: 0,
                ...headingStyle,
              }}
            >
              {clean}
            </h2>
          </div>
        );

      case "giant-watermark":
        return (
          <div style={{ position: "relative", marginBottom: "1rem" }}>
            <div
              style={{
                position: "absolute",
                top: "-2.2rem",
                left: "-0.5rem",
                fontSize: "clamp(5rem, 8vw, 7rem)",
                fontWeight: 900,
                color: "rgba(237, 25, 24, 0.08)",
                lineHeight: 1,
                userSelect: "none",
                pointerEvents: "none",
                fontFamily: "'Bebas Neue', Impact, 'Arial Narrow', sans-serif",
                zIndex: 0,
              }}
            >
              {num}
            </div>
            <h2
              style={{
                position: "relative",
                zIndex: 1,
                fontSize: "clamp(1.75rem, 2.8vw, 2.25rem)",
                fontWeight: 800,
                color: "var(--color-brand-accent, #ED1918)",
                letterSpacing: "-0.025em",
                lineHeight: 1.25,
                margin: 0,
                ...headingStyle,
              }}
            >
              {num}. {clean}
            </h2>
          </div>
        );

      case "left-bar":
        return (
          <div
            style={{
              borderLeft: "4px solid var(--color-brand-accent, #ED1918)",
              paddingLeft: "1.1rem",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                fontSize: "0.75rem",
                fontWeight: 800,
                color: "var(--color-brand-accent, #ED1918)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                marginBottom: "0.35rem",
              }}
            >
              SERVICE {num}
            </div>
            <h2
              style={{
                fontSize: "clamp(1.75rem, 2.8vw, 2.25rem)",
                fontWeight: 800,
                color: dark ? "#FFFFFF" : "#101D35",
                letterSpacing: "-0.025em",
                lineHeight: 1.25,
                margin: 0,
                ...headingStyle,
              }}
            >
              {clean}
            </h2>
          </div>
        );

      case "tall-industrial":
        return (
          <div style={{ marginBottom: "1rem" }}>
            <h2
              className="page-sticky-heading-industrial"
              style={{
                fontFamily: "'Plus Jakarta Sans', var(--font-heading), sans-serif",
                fontWeight: 800,
                letterSpacing: "-0.025em",
                ...headingStyle,
              }}
            >
              <span
                style={{
                  color: "var(--color-brand-accent, #ED1918)",
                  fontSize: "1.05em",
                  flexShrink: 0,
                  fontFamily: headingStyle?.fontFamily || "'Plus Jakarta Sans', var(--font-heading), sans-serif",
                  fontWeight: headingStyle?.fontWeight || 800,
                }}
              >
                {num}
              </span>
              <span
                style={{
                  color: dark ? "#FFFFFF" : "#101D35",
                  whiteSpace: "nowrap",
                }}
              >
                {headingStyle?.textTransform === "uppercase"
                  ? clean.toUpperCase()
                  : clean}
              </span>
            </h2>
          </div>
        );

      case "terminal-tag":
        return (
          <div style={{ marginBottom: "1rem" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                padding: "0.25rem 0.65rem",
                borderRadius: "4px",
                backgroundColor: "rgba(237, 25, 24, 0.08)",
                border: "1px solid rgba(237, 25, 24, 0.2)",
                fontFamily: "'Space Mono', Consolas, 'Courier New', monospace",
                fontSize: "0.8125rem",
                fontWeight: 700,
                color: "var(--color-brand-accent, #ED1918)",
                letterSpacing: "0.04em",
                marginBottom: "0.5rem",
              }}
            >
              &lt;MODULE_{num} /&gt;
            </div>
            <h2
              style={{
                fontSize: "clamp(1.6rem, 2.5vw, 2.05rem)",
                fontFamily: "'Space Mono', Consolas, 'Courier New', monospace",
                fontWeight: 700,
                color: dark ? "#FFFFFF" : "#101D35",
                letterSpacing: "-0.02em",
                lineHeight: 1.3,
                margin: 0,
                ...headingStyle,
              }}
            >
              {clean}
            </h2>
          </div>
        );

      case "gradient-text":
        return (
          <h2
            style={{
              fontSize: "clamp(1.85rem, 3vw, 2.35rem)",
              fontWeight: 900,
              backgroundImage:
                "linear-gradient(135deg, #ED1918 0%, #FF5A5F 50%, #990000 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "-0.03em",
              lineHeight: 1.25,
              marginBottom: "1rem",
              ...headingStyle,
            }}
          >
            {item.title}
          </h2>
        );

      case "clean-red":
      default:
        return (
          <h2
            style={{
              fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
              fontWeight: 800,
              color: dark ? "#FFFFFF" : "var(--color-brand-accent, #ED1918)",
              letterSpacing: "-0.025em",
              marginBottom: "1rem",
              lineHeight: 1.25,
              ...headingStyle,
            }}
          >
            {item.title}
          </h2>
        );
    }
  };

  return (
    <div className={`page-sticky-scroll-row ${className || ""}`}>
      {/* Left Column: Natural page-flowing text with clean bullet points */}
      <div className="page-sticky-scroll-left">
        {content.map((item, index) => {
          const isActive = activeCard === index;
          return (
            <div
              key={item.title + index}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
              style={{
                paddingTop: index === 0 ? "0.5rem" : "4.5rem",
                paddingBottom: index === content.length - 1 ? "14rem" : "4.5rem",
                minHeight: "48vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: index === 0 ? "flex-start" : "center",
                transition: "opacity 0.35s ease",
                opacity: isActive ? 1 : 0.22,
              }}
            >
              {/* Distinct Heading Style */}
              {renderHeading(item)}

              {/* Short Overview */}
              <p
                style={{
                  fontSize: "1.0625rem",
                  color: dark ? "#CBD5E1" : "var(--color-text-secondary, #475569)",
                  lineHeight: 1.7,
                  maxWidth: "580px",
                  marginBottom: "1.25rem",
                }}
              >
                {item.description}
              </p>

              {/* Clean Points */}
              {item.points && item.points.length > 0 && (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.65rem",
                    marginBottom: "1.5rem",
                    maxWidth: "580px",
                  }}
                >
                  {item.points.map((point) => (
                    <div
                      key={point}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "0.65rem",
                      }}
                    >
                      <CheckCircle2
                        size={18}
                        color="var(--color-brand-accent, #ED1918)"
                        style={{ flexShrink: 0, marginTop: "0.2rem" }}
                      />
                      <span
                        style={{
                          fontSize: "0.9375rem",
                          color: dark ? "#E2E8F0" : "#334155",
                          fontWeight: 500,
                          lineHeight: 1.5,
                        }}
                      >
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              )}

              {/* Action Link */}
              {item.link && (
                <div>
                  <Link
                    href={item.link}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      fontSize: "0.875rem",
                      fontWeight: 700,
                      color: "var(--color-brand-accent, #ED1918)",
                      transition: "gap 0.2s ease",
                    }}
                  >
                    <span>Explore Service Details</span>
                    <ArrowRight size={15} />
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Right Column: Sticky preview card with Real Image */}
      <div className={`page-sticky-scroll-right ${contentClassName || ""}`}>
        {content[activeCard]?.content ?? null}
      </div>
    </div>
  );
};
