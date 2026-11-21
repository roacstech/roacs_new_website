"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectItem } from "@/data/projects";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Extract clean client mark for the center image overlay (e.g. CAZANOO, BEC GLOBAL)
  const watermarkName = project.client.toUpperCase();

  // Extract up to 2 clean category tags for the top pill badges
  const categoryTags = project.tags.slice(0, 2);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="agency-portfolio-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        textDecoration: "none",
        color: "inherit",
        backgroundColor: "#FFFFFF",
        borderRadius: "16px",
        overflow: "hidden",
        border: "1px solid",
        borderColor: isHovered ? "rgba(237, 25, 24, 0.3)" : "#E5E7EB",
        boxShadow: isHovered
          ? "0 14px 32px rgba(16, 29, 53, 0.08)"
          : "0 2px 8px rgba(16, 29, 53, 0.03)",
        transform: isHovered ? "translateY(-4px)" : "translateY(0)",
        transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* 1. Top Media Box with Blur and About Project Content on Hover */}
      <div
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "16 / 10",
          overflow: "hidden",
          backgroundColor: "#F1F5F9",
          flexShrink: 0,
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 680px) 100vw, (max-width: 1024px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            transform: isHovered ? "scale(1.06)" : "scale(1)",
            filter: isHovered ? "blur(8px) brightness(0.4)" : "blur(0px) brightness(0.95)",
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), filter 0.35s ease",
          }}
          priority={project.featured}
        />

        {/* Soft Contrast Veil for Normal State */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0.32) 100%)",
            transition: "opacity 0.25s ease",
            opacity: isHovered ? 0 : 0.85,
            zIndex: 1,
          }}
        />

        {/* Normal State: Centered Brand Mark / Logo Watermark */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 2,
            pointerEvents: "none",
            padding: "1rem",
            opacity: isHovered ? 0 : 1,
            transform: isHovered ? "scale(0.92)" : "scale(1)",
            transition: "opacity 0.25s ease, transform 0.25s ease",
          }}
        >
          <span
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1.2rem, 2.5vw, 1.55rem)",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textShadow: "0 2px 14px rgba(0, 0, 0, 0.55)",
              textAlign: "center",
            }}
          >
            {watermarkName}
          </span>
        </div>

        {/* Hover State: Blurred Overlay with About Project Content */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "1.25rem 1.5rem",
            zIndex: 3,
            pointerEvents: "none",
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0)" : "translateY(8px)",
            transition: "opacity 0.3s ease, transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            backgroundColor: "rgba(16, 29, 53, 0.45)",
            backdropFilter: isHovered ? "blur(4px)" : "none",
            WebkitBackdropFilter: isHovered ? "blur(4px)" : "none",
          }}
        >
          <span
            style={{
              fontSize: "0.72rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "0.12em",
              color: "var(--color-brand-accent)",
              marginBottom: "0.45rem",
            }}
          >
            About Project
          </span>
          <p
            style={{
              color: "#FFFFFF",
              fontSize: "0.85rem",
              lineHeight: 1.5,
              margin: 0,
              fontWeight: 500,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textShadow: "0 1px 4px rgba(0, 0, 0, 0.7)",
            }}
          >
            {project.description}
          </p>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
              fontSize: "0.72rem",
              fontWeight: 700,
              color: "#FFFFFF",
              marginTop: "0.75rem",
              padding: "0.3rem 0.85rem",
              borderRadius: "9999px",
              backgroundColor: "var(--color-brand-accent)",
              boxShadow: "0 2px 10px rgba(237, 25, 24, 0.4)",
            }}
          >
            View More →
          </span>
        </div>
      </div>

      {/* 2. Bottom Content Box (Seamless Single Card Section) */}
      <div
        style={{
          padding: "1.25rem 1.35rem 1.45rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          {/* Category Badges (Uniform Height, Year Removed) */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.4rem",
              flexWrap: "wrap",
              minHeight: "26px",
              marginBottom: "0.65rem",
            }}
          >
            {categoryTags.map((tag, idx) => (
              <span
                key={idx}
                style={{
                  border: "1px solid #E2E8F0",
                  borderRadius: "9999px",
                  padding: "0.22rem 0.65rem",
                  fontSize: "0.68rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                  color: "#475569",
                  backgroundColor: "#FAFAFA",
                  lineHeight: 1.2,
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Project Title (Standardized Height for 1 or 2 lines) */}
          <h3
            style={{
              fontSize: "1.02rem",
              fontWeight: 800,
              textTransform: "uppercase",
              letterSpacing: "-0.01em",
              color: isHovered ? "var(--color-brand-accent)" : "#0F172A",
              lineHeight: 1.35,
              minHeight: "2.75rem",
              margin: 0,
              transition: "color 0.2s ease",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.title.replace("—", "-")}
          </h3>
        </div>
      </div>
    </Link>
  );
}
