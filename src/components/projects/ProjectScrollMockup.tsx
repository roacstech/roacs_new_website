"use client";

import React from "react";
import Image from "next/image";
import { ProjectItem } from "@/data/projects";
import { Lock, ExternalLink } from "lucide-react";

interface ProjectScrollMockupProps {
  project: ProjectItem;
}

export function ProjectScrollMockup({ project }: ProjectScrollMockupProps) {
  const liveUrl = project.liveUrl || "https://www.cazanoo.com/";
  const displayHost = liveUrl.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#FFFFFF",
        border: "1px solid #E2E8F0",
        boxShadow: "0 20px 45px -10px rgba(16, 29, 53, 0.12), 0 4px 12px rgba(16, 29, 53, 0.04)",
        marginBottom: "3.5rem",
      }}
    >
      {/* 1. macOS-style Browser Chrome Mockup Toolbar */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0.75rem 1.25rem",
          backgroundColor: "#F8FAFC",
          borderBottom: "1px solid #E2E8F0",
          gap: "1rem",
        }}
      >
        {/* macOS Window Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <span style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#EF4444" }} />
          <span style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#F59E0B" }} />
          <span style={{ width: "11px", height: "11px", borderRadius: "50%", backgroundColor: "#10B981" }} />
        </div>

        {/* Browser URL Bar */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.45rem",
            padding: "0.35rem 1.25rem",
            backgroundColor: "#FFFFFF",
            borderRadius: "9999px",
            border: "1px solid #E2E8F0",
            fontSize: "0.78rem",
            color: "#475569",
            fontWeight: 500,
            maxWidth: "340px",
            width: "100%",
            justifyContent: "center",
            boxShadow: "0 1px 2px rgba(0, 0, 0, 0.02)",
          }}
        >
          <Lock size={12} color="#10B981" />
          <span style={{ overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {displayHost}
          </span>
        </div>

        {/* Actions: Direct Live Site Link */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.35rem",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#64748B",
                textDecoration: "none",
                padding: "0.3rem 0.65rem",
                borderRadius: "6px",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--color-brand-accent)";
                e.currentTarget.style.backgroundColor = "rgba(237, 25, 24, 0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#64748B";
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              <span>Live Site</span>
              <ExternalLink size={12} />
            </a>
          )}
        </div>
      </div>

      {/* 2. Full Image Showcase inside Browser Mockup (No Cropping) */}
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "clamp(360px, 46vw, 510px)",
          backgroundColor: "#0B132B",
          overflow: "hidden",
        }}
      >
        <Image
          src={project.image}
          alt={`${project.title} live interface showcase`}
          fill
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
    </div>
  );
}
