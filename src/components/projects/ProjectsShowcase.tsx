"use client";

import React from "react";
import { ProjectItem } from "@/data/projects";
import { ProjectCard } from "@/components/common/ProjectCard";
import { Container } from "@/components/common/Container";
import { ProjectCardReveal } from "@/components/projects/ProjectCardReveal";

interface ProjectsShowcaseProps {
  projects: ProjectItem[];
}

export function ProjectsShowcase({ projects }: ProjectsShowcaseProps) {
  return (
    <section
      style={{
        backgroundColor: "#F8FAFC",
        paddingTop: "3rem",
        paddingBottom: "6rem",
      }}
    >
      <Container wide>
        {/* 2-Column High-Impact Case Studies Grid (Cognizant Style) */}
        <div
          className="grid-3"
          style={{
            gap: "28px",
          }}
        >
          {projects.map((project, idx) => (
            <ProjectCardReveal key={project.id} index={idx}>
              <ProjectCard project={project} />
            </ProjectCardReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
