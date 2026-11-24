"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
  priority?: boolean;
}

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Category uppercase label (e.g. PREFAB & SMART HOUSING, GLOBAL CONSULTING & COMMERCE)
  const categoryLabel = (project.industry || project.category || "CASE STUDY").toUpperCase();

  // Clean hyphen in title instead of em dash for consistent typography
  const displayTitle = project.title.replace(/[—–]/g, "-");

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="case-study-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#030A1E",
        border: `1px solid ${isHovered ? "rgba(34, 211, 238, 0.55)" : "rgba(255, 255, 255, 0.1)"}`,
        boxShadow: isHovered
          ? "0 20px 40px -10px rgba(0, 0, 0, 0.55), 0 0 25px rgba(34, 211, 238, 0.18)"
          : "0 10px 25px -8px rgba(0, 0, 0, 0.35)",
        cursor: "pointer",
        textDecoration: "none",
        color: "inherit",
        transition:
          "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, box-shadow 0.3s ease",
        transform: isHovered ? "translateY(-5px)" : "translateY(0)",
      }}
    >
      {/* 1. Top Cover Image Section */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "205px",
          overflow: "hidden",
          backgroundColor: "#08132B",
        }}
      >
        <Image
          src={project.bannerImage || project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 380px"
          style={{
            objectFit: "cover",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          priority={priority || project.featured}
        />

        {/* Subtle Vignette Gradient Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(3, 10, 30, 0.15) 0%, transparent 60%, rgba(3, 10, 30, 0.6) 100%)",
            pointerEvents: "none",
          }}
        />
      </div>

      {/* 2. Lower Navy Details Container matching Reference Image */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          backgroundColor: "#030A1E",
          background:
            "linear-gradient(180deg, rgba(6, 18, 50, 0.98) 0%, rgba(3, 10, 30, 1) 100%)",
          borderTop: "1px solid rgba(255, 255, 255, 0.12)",
          padding: "1.2rem 1.4rem 1.4rem 1.4rem",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
          justifyContent: "center",
        }}
      >
        {/* Category Uppercase Label with Thin Underline */}
        <div style={{ marginBottom: "0.65rem" }}>
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.14em",
              color: "#E2E8F0",
              textTransform: "uppercase",
              borderBottom: "1px solid rgba(255, 255, 255, 0.32)",
              paddingBottom: "0.22rem",
              display: "inline-block",
            }}
          >
            {categoryLabel}
          </span>
        </div>

        {/* Project Title with Right-Pointing Triangle Arrow (▷) */}
        <div
          style={{
            fontSize: "clamp(1.02rem, 1.35vw, 1.2rem)",
            fontWeight: 700,
            lineHeight: 1.35,
            color: "#22D3EE",
            letterSpacing: "-0.01em",
            transition: "color 0.25s ease",
          }}
        >
          <span>{displayTitle}</span>
          <span
            style={{
              display: "inline-block",
              marginLeft: "0.45rem",
              verticalAlign: "middle",
              transform: isHovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.25s ease",
            }}
          >
            <svg
              width="15"
              height="15"
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
      </div>
    </Link>
  );
}
