"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";

interface BrandItem {
  name: string;
  industry: string;
  logo: string;
  width: number;
  height: number;
}

const brands: BrandItem[] = [
  {
    name: "Cazanoo",
    industry: "Smart Housing",
    logo: "/images/brands/cazanoo-transparent.png",
    width: 140,
    height: 44,
  },
  {
    name: "BEC Global",
    industry: "Education & Consulting",
    logo: "/images/brands/bec-transparent.png",
    width: 48,
    height: 48,
  },
  {
    name: "Tetas by Vanessa",
    industry: "Audio & Media Platform",
    logo: "/images/brands/tetas-transparent.png",
    width: 110,
    height: 42,
  },
  {
    name: "A&B Impex",
    industry: "Export & Global Trade",
    logo: "/images/brands/aandb-transparent.png",
    width: 95,
    height: 42,
  },
  {
    name: "Ambit Triangle",
    industry: "Industrial Safety",
    logo: "/images/brands/ambit-transparent.png",
    width: 135,
    height: 44,
  },
  {
    name: "Yazi Travels",
    industry: "Travel Tech Platform",
    logo: "/images/brands/yazi-transparent.png",
    width: 135,
    height: 42,
  },
  {
    name: "Abir Ayurveda",
    industry: "Health & Wellness",
    logo: "/images/brands/abir-transparent.png",
    width: 46,
    height: 46,
  },
];

export function BrandMarquee() {
  return (
    <section
      style={{
        backgroundColor: "#FFFFFF",
        color: "var(--color-primary-navy)",
        paddingTop: "3.5rem",
        paddingBottom: "3.5rem",
        borderTop: "1px solid var(--border-light)",
        borderBottom: "1px solid var(--border-light)",
        position: "relative",
        overflow: "hidden",
      }}
      aria-label="Trusted by Global Brands"
    >
      <Container wide>
        <div
          style={{
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <span
            style={{
              fontSize: "0.8125rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--color-text-secondary)",
              display: "inline-block",
            }}
          >
            Trusted by Forward-Thinking Enterprises & Industry Leaders
          </span>
        </div>
      </Container>

      {/* Infinite Scrolling Marquee Track with Dual Gradient Mask */}
      <div className="marquee-container marquee-mask">
        <div className="marquee-track" style={{ gap: "2rem", paddingLeft: "1rem" }}>
          {/* Double the list to achieve seamless infinite looping */}
          {[...brands, ...brands].map((brand, idx) => (
            <div
              key={`${brand.name}-${idx}`}
              className="brand-pill-glass"
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.85rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid var(--border-light)",
                borderRadius: "var(--radius-md)",
                padding: "0.45rem 1.15rem",
                height: "58px",
                boxShadow: "0 2px 10px rgba(16, 29, 53, 0.05)",
                flexShrink: 0,
              }}
              title={`${brand.name} — ${brand.industry}`}
            >
              {/* Pure Floating Brand Logo (Transparent Alpha, No White Box) */}
              <div
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "38px",
                  minWidth: "70px",
                  padding: "0 0.25rem",
                  flexShrink: 0,
                }}
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={brand.width}
                  height={brand.height}
                  style={{
                    objectFit: "contain",
                    height: "34px",
                    width: "auto",
                    maxWidth: "130px",
                  }}
                  className="brand-logo-img"
                />
              </div>

              <div
                style={{
                  borderLeft: "1px solid var(--border-light)",
                  paddingLeft: "0.75rem",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontWeight: 700,
                    color: "var(--color-primary-navy)",
                    letterSpacing: "-0.01em",
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                  }}
                >
                  {brand.name}
                </span>
                <span
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--color-text-secondary)",
                    lineHeight: 1.2,
                    whiteSpace: "nowrap",
                  }}
                >
                  {brand.industry}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
