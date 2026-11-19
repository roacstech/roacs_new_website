"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { projectsData } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { label: "All Works", value: "all" },
    { label: "Prefab & Smart Tech", value: "smart-tech" },
    { label: "Enterprise & Trade", value: "enterprise" },
    { label: "Healthcare & Audio", value: "health-media" },
  ];

  const filteredProjects = projectsData.filter((p) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "smart-tech") return p.industry.includes("Housing") || p.industry.includes("Safety");
    if (activeFilter === "enterprise") return p.industry.includes("Commerce") || p.industry.includes("Export");
    if (activeFilter === "health-media") return p.industry.includes("Healthcare") || p.industry.includes("Media");
    return true;
  });

  return (
    <section className="section section-light" id="projects">
      <Container wide>
        <Reveal delay={0.1}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "2.5rem",
              gap: "1.5rem",
            }}
            className="projects-header-row"
          >
            <SectionHeading
              eyebrow="Proven Track Record"
              eyebrowVariant="accent"
              title="Verified case studies delivered with engineering excellence."
              description="A curated look at software solutions, web platforms, and digital products engineered by Roacs for established businesses and high-growth organizations."
            />

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                backgroundColor: "var(--color-bg-subtle)",
                padding: "0.35rem",
                borderRadius: "var(--radius-sm)",
                border: "1px solid var(--border-light)",
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setActiveFilter(cat.value)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "var(--radius-xs)",
                    fontSize: "0.85rem",
                    fontWeight: 600,
                    transition: "all var(--transition-fast)",
                    backgroundColor: activeFilter === cat.value ? "var(--color-primary-navy)" : "transparent",
                    color: activeFilter === cat.value ? "#FFFFFF" : "var(--color-text-secondary)",
                  }}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Project Cards Grid */}
        <div className="grid-3" style={{ marginBottom: "3.5rem" }}>
          {filteredProjects.map((project, index) => (
            <Reveal key={project.id} delay={0.1 + (index % 3) * 0.1}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Button
              href="/projects"
              variant="outline-navy"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              Explore Complete Case Studies Portfolio
            </Button>
          </div>
        </Reveal>
      </Container>

      
    </section>
  );
}
