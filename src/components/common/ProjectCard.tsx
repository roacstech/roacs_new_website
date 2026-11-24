"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, X } from "lucide-react";
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
    const target = e.target as HTMLElement;

    // If clicking a link when already expanded, let normal navigation happen
    if (target.closest("a")) {
      if (!isExpanded) {
        e.preventDefault();
        e.stopPropagation();
        setIsExpanded(true);
      }
      return;
    }

    // If clicking the collapse button
    if (target.closest(".case-study-collapse-btn")) {
      e.stopPropagation();
      setIsExpanded(false);
      return;
    }

    // Where they click initially, it should open up
    if (!isExpanded) {
      setIsExpanded(true);
    }
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
        minHeight: isExpanded ? "420px" : "310px",
        borderRadius: "16px",
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
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 30vw"
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

      {/* 2. Lower Frosted Glass Navy Drawer */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          background: "linear-gradient(180deg, rgba(8, 22, 58, 0.86) 0%, rgba(4, 12, 36, 0.97) 100%)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderTop: "1px solid rgba(255, 255, 255, 0.16)",
          padding: "1.25rem 1.4rem",
          transition: "padding 0.35s ease, background 0.3s ease",
        }}
      >
        {/* Category Label (Without 'Click to view' text) */}
        <div style={{ marginBottom: "0.65rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#E2E8F0",
              textTransform: "uppercase",
              borderBottom: "1px solid rgba(255, 255, 255, 0.3)",
              paddingBottom: "0.2rem",
              display: "inline-block",
            }}
          >
            {categoryLabel}
          </span>

          {/* Subtle Collapse button when open */}
          {isExpanded && (
            <button
              type="button"
              className="case-study-collapse-btn"
              onClick={(e) => {
                e.stopPropagation();
                setIsExpanded(false);
              }}
              aria-label="Collapse details"
              style={{
                background: "rgba(255, 255, 255, 0.12)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#FFFFFF",
                cursor: "pointer",
                padding: 0,
                transition: "all 0.2s ease",
              }}
            >
              <X size={12} />
            </button>
          )}
        </div>

        {/* Project Title: Clicking initially opens; clicking when open navigates to page */}
        <div>
          {isExpanded ? (
            <Link
              href={`/projects/${project.slug}`}
              className="case-study-title"
              onClick={(e) => e.stopPropagation()}
              style={{
                display: "inline-block",
                fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
                fontWeight: 700,
                lineHeight: 1.3,
                color: "#22D3EE",
                textDecoration: "none",
                letterSpacing: "-0.01em",
                marginBottom: "0.75rem",
                transition: "color 0.25s ease",
              }}
            >
              <span>{project.title.replace("—", "-")}</span>
              <span
                className="case-study-arrow"
                style={{
                  display: "inline-block",
                  marginLeft: "0.45rem",
                  verticalAlign: "middle",
                  transition: "transform 0.25s ease",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#22D3EE"
                  stroke="#22D3EE"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </span>
            </Link>
          ) : (
            <div
              className="case-study-title"
              style={{
                display: "inline-block",
                fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)",
                fontWeight: 700,
                lineHeight: 1.3,
                color: "#22D3EE",
                letterSpacing: "-0.01em",
                cursor: "pointer",
                transition: "color 0.25s ease",
              }}
            >
              <span>{project.title.replace("—", "-")}</span>
              <span
                className="case-study-arrow"
                style={{
                  display: "inline-block",
                  marginLeft: "0.45rem",
                  verticalAlign: "middle",
                  transition: "transform 0.25s ease",
                }}
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#22D3EE"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="6 3 20 12 6 21 6 3" />
                </svg>
              </span>
            </div>
          )}
        </div>

        {/* 3. Expanded Content Drawer */}
        <div
          style={{
            maxHeight: isExpanded ? "320px" : "0px",
            opacity: isExpanded ? 1 : 0,
            overflow: "hidden",
            transition: "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease",
          }}
        >
          {/* Summary Paragraph */}
          <p
            style={{
              color: "rgba(255, 255, 255, 0.92)",
              fontSize: "0.875rem",
              lineHeight: 1.55,
              margin: "0.5rem 0 1rem 0",
              fontWeight: 400,
            }}
          >
            {project.description}
          </p>

          {/* Technical Tag Badges */}
          <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.1rem" }}>
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: "0.72rem",
                  fontWeight: 600,
                  padding: "0.2rem 0.65rem",
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
                gap: "0.45rem",
                padding: "0.5rem 1.15rem",
                borderRadius: "9999px",
                backgroundColor: "#22D3EE",
                color: "#030A1E",
                fontWeight: 700,
                fontSize: "0.82rem",
                textDecoration: "none",
                boxShadow: "0 4px 14px rgba(34, 211, 238, 0.35)",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
              }}
            >
              <span>Explore Full Case Study</span>
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
