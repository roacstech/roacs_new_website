"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ProjectCard } from "@/components/common/ProjectCard";
import { ProjectCardReveal } from "@/components/projects/ProjectCardReveal";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { projectsData } from "@/data/projects";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  // Curated 3 featured projects for the home page showcase (Cazanoo, BEC Global, A&B Impex)
  const homeProjects = projectsData.slice(0, 3);

  return (
    <section className="section section-light" id="projects">
      <Container wide>
        <Reveal delay={0.1}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginBottom: "3rem",
            }}
          >
            <SectionHeading
              eyebrow="Case Studies"
              eyebrowVariant="accent"
              title={
                <>
                  We help companies anticipate and act
                  <br className="hidden sm:inline" /> with insight, modern engineering, and speed.
                </>
              }
              titleStyle={{
                fontSize: "clamp(1.85rem, 2.5vw, 2.45rem)",
                lineHeight: 1.25,
              }}
              description="A curated look at enterprise solutions, web platforms, and digital products engineered by Roacs for established businesses, high-growth brands, and global enterprises."
              align="center"
              maxWidth="980px"
            />
          </div>
        </Reveal>

        {/* Projects Grid: Exactly 3 Cards in Home Page Matching Reference UI */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: "1.75rem",
          }}
          className="home-projects-grid"
        >
          {homeProjects.map((project, idx) => (
            <ProjectCardReveal key={project.id} index={idx}>
              <ProjectCard project={project} priority={idx === 0} />
            </ProjectCardReveal>
          ))}
        </div>

        {/* Explore All Projects / Case Studies Button */}
        <Reveal delay={0.25}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "2.75rem",
            }}
          >
            <Link
              href="/projects"
              className="explore-all-projects-btn"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.65rem",
                padding: "0.85rem 2.25rem",
                borderRadius: "9999px",
                backgroundColor: "var(--color-primary-navy)",
                color: "#FFFFFF",
                fontWeight: 600,
                fontSize: "0.95rem",
                textDecoration: "none",
                boxShadow: "0 8px 22px -4px rgba(15, 23, 42, 0.25)",
              }}
            >
              <span>Explore All Case Studies</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        {/* Bottom Case Study CTA */}
        {/* <Reveal delay={0.3}>
          <div
            style={{
              marginTop: "3.5rem",
              textAlign: "center",
              padding: "2rem",
              borderRadius: "var(--radius-md)",
              backgroundColor: "var(--color-bg-subtle)",
              border: "1px solid var(--border-light)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <h4 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--color-primary-navy)", margin: 0 }}>
              Need a custom platform engineered for your business requirements?
            </h4>
            <p style={{ fontSize: "0.925rem", color: "var(--color-text-secondary)", maxWidth: "600px", margin: 0 }}>
              Explore how we can evaluate your system requirements, design the technical architecture, and ship a high-performance solution on time.
            </p>
            <Button
              href="/contact"
              variant="primary"
              size="md"
              icon={<ArrowRight size={16} />}
            >
              Consult With Our Tech Team
            </Button>
          </div>
        </Reveal> */}
      </Container>
    </section>
  );
}
