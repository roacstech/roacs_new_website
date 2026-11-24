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

  // Extract clean client mark for the center image overlay (e.g. CAZANOO, BEC GLOBAL)
  const watermarkName = project.client.toUpperCase();

  // Extract up to 2 clean category tags for the pill badges
  const categoryTags = project.tags.slice(0, 2);

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
        transition:
          "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s ease, border-color 0.3s ease",
      }}
    >
      {/* 1. Top Media Box: Clean, sharp image with centered bold white client mark */}
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
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
          priority={project.featured}
        />

        {/* Contrast Tint for Text Legibility */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.42) 100%)",
            transition: "opacity 0.3s ease",
            opacity: 1,
            zIndex: 1,
          }}
        />

        {/* Centered Bold Client Brand Mark / Name (Always visible as in reference Image 1) */}
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
            transform: isHovered ? "scale(1.04)" : "scale(1)",
            transition: "transform 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
          }}
        >
          <span
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(1.15rem, 2.2vw, 1.55rem)",
              fontWeight: 800,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textShadow: "0 2px 12px rgba(0, 0, 0, 0.7)",
              textAlign: "center",
            }}
          >
            {categoryLabel}
          </span>
        </div>
      </div>

      {/* 2. Bottom Content Box: Category pills and uppercase project title */}
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
          {/* Category Badges */}
          <div
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

          {/* Project Title */}
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
    </div>
  );
}
