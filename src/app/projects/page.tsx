import { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { ProjectCard } from "@/components/common/ProjectCard";
import { ContactCTA } from "@/components/home/ContactCTA";
import { projectsData } from "@/data/projects";
import { constructMetadata } from "@/lib/metadata";

export const metadata: Metadata = constructMetadata({
  title: "Case Studies & Featured Projects | Roacs Corporation",
  description: "Explore delivered software platforms, web systems, and digital products engineered by Roacs Corporation across healthcare, trade, prefabricated construction, and media.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div>
      <section
        style={{
          backgroundColor: "var(--color-primary-navy)",
          color: "#FFFFFF",
          paddingTop: "5rem",
          paddingBottom: "5rem",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Container>
          <div style={{ maxWidth: "780px" }}>
            <span
              style={{
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: "var(--color-brand-accent)",
                marginBottom: "1rem",
                display: "inline-block",
              }}
            >
              Client Case Studies
            </span>
            <h1
              style={{
                fontSize: "clamp(2.5rem, 5vw, 3.5rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "1.25rem",
                lineHeight: 1.15,
              }}
            >
              Measurable outcomes delivered for forward-thinking clients.
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--color-muted-blue)",
                lineHeight: 1.6,
              }}
            >
              Every system we engineer is tailored to specific operational goals. Explore our verified project track record.
            </p>
          </div>
        </Container>
      </section>

      <section className="section section-light">
        <Container wide>
          <div className="grid-3">
            {projectsData.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </Container>
      </section>

      <ContactCTA />
    </div>
  );
}
