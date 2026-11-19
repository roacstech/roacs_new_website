import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ProjectItem } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  project: ProjectItem;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className="card"
      style={{
        backgroundColor: "#FFFFFF",
        border: "1px solid var(--border-light)",
        borderRadius: "var(--radius-md)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        transition: "all var(--transition-normal)",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          height: "230px",
          backgroundColor: "#F1F5F9",
          overflow: "hidden",
        }}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{
            objectFit: "cover",
            transition: "transform var(--transition-slow)",
          }}
          className="project-image-hover"
        />
        <div
          style={{
            position: "absolute",
            top: "1rem",
            left: "1rem",
            zIndex: 2,
          }}
        >
          <span
            style={{
              backgroundColor: "rgba(16, 29, 53, 0.85)",
              backdropFilter: "blur(4px)",
              color: "#FFFFFF",
              fontSize: "0.75rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              padding: "0.3rem 0.75rem",
              borderRadius: "var(--radius-full)",
            }}
          >
            {project.industry}
          </span>
        </div>
      </div>

      <div
        style={{
          padding: "1.75rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: 1,
        }}
      >
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "1rem",
              marginBottom: "0.75rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                color: "var(--color-primary-navy)",
                lineHeight: 1.3,
              }}
            >
              {project.title}
            </h3>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: "36px",
                height: "36px",
                borderRadius: "var(--radius-full)",
                backgroundColor: "var(--color-bg-subtle)",
                color: "var(--color-primary-navy)",
                flexShrink: 0,
              }}
            >
              <ArrowUpRight size={18} />
            </span>
          </div>

          <p
            style={{
              fontSize: "0.925rem",
              lineHeight: 1.6,
              color: "var(--color-text-secondary)",
              marginBottom: "1.25rem",
            }}
          >
            {project.description}
          </p>

          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "0.4rem",
              marginBottom: "1.5rem",
            }}
          >
            {project.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                style={{
                  fontSize: "0.75rem",
                  fontWeight: 500,
                  color: "var(--color-text-muted)",
                  backgroundColor: "var(--color-bg-subtle)",
                  padding: "0.25rem 0.6rem",
                  borderRadius: "var(--radius-xs)",
                  border: "1px solid var(--border-light)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border-light)",
            paddingTop: "1rem",
          }}
        >
          <Link
            href={`/projects/${project.slug}`}
            style={{
              fontSize: "0.875rem",
              fontWeight: 600,
              color: "var(--color-brand-accent)",
              display: "inline-flex",
              alignItems: "center",
              gap: "0.35rem",
            }}
          >
            View Case Study &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
