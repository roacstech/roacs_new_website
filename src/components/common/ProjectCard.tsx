"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ChevronUp, ChevronDown } from "lucide-react";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  // Category uppercase label (e.g. HEALTHCARE, BANKING, PREFAB & HOUSING)
  const categoryLabel = (project.industry || project.category || "CASE STUDY").toUpperCase();

  const handleCardClick = (e: React.MouseEvent) => {
    // If the click is on an anchor or button inside, let it navigate/action normally
    const target = e.target as HTMLElement;
    if (target.closest("a") || target.closest("button")) {
      return;
    }
    // Otherwise toggle expansion
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className="case-study-card"
      onClick={handleCardClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        minHeight: isExpanded ? "460px" : "390px",
        borderRadius: "20px",
        overflow: "hidden",
        backgroundColor: "#030A1E",
        border: `1px solid ${isExpanded || isHovered ? "rgba(34, 211, 238, 0.55)" : "rgba(255, 255, 255, 0.12)"}`,
        boxShadow: isExpanded || isHovered
          ? "0 20px 45px -10px rgba(0, 0, 0, 0.5), 0 0 25px rgba(34, 211, 238, 0.15)"
          : "0 10px 30px -10px rgba(0, 0, 0, 0.35)",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        transition: "min-height 0.35s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
      }}
    >
      {/* 1. Full-Bleed High-Res Background Image */}
      <Image
        src={project.bannerImage || project.image}
        alt={project.title}
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 45vw"
        style={{
          objectFit: "cover",
          transform: isHovered || isExpanded ? "scale(1.05)" : "scale(1)",
          transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        priority={project.featured}
      />

      {/* Top Contrast Vignette */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "40%",
          background: "linear-gradient(180deg, rgba(3, 10, 30, 0.35) 0%, transparent 100%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* 2. Lower Frosted Glass Navy Drawer (Cognizant Style) */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          background: "linear-gradient(180deg, rgba(8, 22, 58, 0.82) 0%, rgba(4, 12, 36, 0.96) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.16)",
          padding: "1.75rem 2rem",
          transition: "padding 0.35s ease, background 0.3s ease",
        }}
      >
        {/* Category Pill / Underline Label */}
        <div style={{ marginBottom: "0.85rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              fontSize: "0.75rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#E2E8F0",
              textTransform: "uppercase",
              borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
              paddingBottom: "0.25rem",
              display: "inline-block",
            }}
          >
            {categoryLabel}
          </span>

          {/* Click to expand/collapse helper pill */}
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 600,
              color: isExpanded ? "#22D3EE" : "rgba(255, 255, 255, 0.55)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.25rem",
              letterSpacing: "0.04em",
              transition: "color 0.2s ease",
            }}
          >
            <span>{isExpanded ? "Collapse" : "Click to view"}</span>
            {isExpanded ? <ChevronUp size={13} /> : <ChevronDown size={13} />}
          </span>
        </div>

        {/* Project Title with Hollow Play Triangle Icon (▷) */}
        <Link
          href={`/projects/${project.slug}`}
          className="case-study-title"
          onClick={(e) => e.stopPropagation()}
          style={{
            display: "inline-block",
            fontSize: "clamp(1.18rem, 2vw, 1.55rem)",
            fontWeight: 700,
            lineHeight: 1.3,
            color: "#22D3EE",
            textDecoration: "none",
            letterSpacing: "-0.01em",
            marginBottom: isExpanded ? "0.85rem" : "0",
            transition: "color 0.25s ease",
          }}
        >
          <span>{project.title.replace("—", "-")}</span>
          <span
            className="case-study-arrow"
            style={{
              display: "inline-block",
              marginLeft: "0.55rem",
              verticalAlign: "middle",
              transition: "transform 0.25s ease",
            }}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill={isExpanded ? "#22D3EE" : "none"}
              stroke="#22D3EE"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="6 3 20 12 6 21 6 3" />
            </svg>
          </span>
        </Link>

        {/* =========================================================================
            3. EXPANDED CONTENT ("if i click it comes like this")
            ========================================================================= */}
        <div
          style={{
            maxHeight: isExpanded ? "300px" : "0px",
            opacity: isExpanded ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease",
          }}
        >
          {/* Summary Paragraph (matching Card 3: 'In a record-breaking 11 months...') */}
          <p
            style={{
              color: "rgba(255, 255, 255, 0.92)",
              fontSize: "0.95rem",
              lineHeight: 1.65,
              margin: "0.75rem 0 1.25rem 0",
              fontWeight: 400,
            }}
          >
            {project.description}
          </p>

          {/* Technical Tag Badges */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.35rem" }}>
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 600,
                  padding: "0.25rem 0.75rem",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(255, 255, 255, 0.12)",
                  color: "#FFFFFF",
                  border: "1px solid rgba(255, 255, 255, 0.18)",
                  letterSpacing: "0.02em",
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Direct Link to View Full Case Study */}
          <div>
            <Link
              href={`/projects/${project.slug}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.55rem 1.35rem",
                borderRadius: "9999px",
                backgroundColor: "#22D3EE",
                color: "#030A1E",
                fontWeight: 700,
                fontSize: "0.85rem",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(34, 211, 238, 0.35)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <span>Explore Full Case Study</span>
              <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
