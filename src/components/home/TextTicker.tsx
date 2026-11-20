"use client";

import React from "react";

const tickerItems = [
  "Custom Software Development",
  "Scalable Web Applications",
  "UI/UX Design Excellence",
  "Cloud & DevOps Architecture",
  "Enterprise Software Systems",
  "Transforming Ideas into Products",
  "Next.js & React Full-Stack Scale",
  "High-Availability SLA Infrastructure",
];

function RedStar() {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 60 60"
      fill="none"
      style={{
        flexShrink: 0,
        margin: "0 1.5rem",
        filter: "drop-shadow(0 0 8px rgba(237, 25, 24, 0.6))",
      }}
      aria-hidden="true"
    >
      <path
        d="M30 0L38.1027 21.8973L60 30L38.1027 38.1027L30 60L21.8973 38.1027L0 30L21.8973 21.8973L30 0Z"
        fill="#ED1918"
      />
    </svg>
  );
}

export function TextTicker() {
  return (
    <div
      style={{
        backgroundColor: "var(--color-navy-surface)",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        padding: "1.25rem 0",
        overflow: "hidden",
        position: "relative",
      }}
      className="marquee-mask"
      aria-label="Capabilities Ticker"
    >
      <div className="marquee-track-reverse" style={{ alignItems: "center" }}>
        {[...tickerItems, ...tickerItems].map((text, idx) => (
          <div
            key={idx}
            style={{
              display: "inline-flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "1.15rem",
                fontWeight: 700,
                letterSpacing: "-0.01em",
                color: "#FFFFFF",
                textTransform: "uppercase",
              }}
            >
              {text}
            </span>
            <RedStar />
          </div>
        ))}
      </div>
    </div>
  );
}
