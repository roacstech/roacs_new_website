import { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { insightsData } from "@/data/insights";
import { constructMetadata } from "@/lib/metadata";
import { Clock, ArrowRight } from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Engineering Insights & Articles | Roacs Corporation",
  description: "Read technical articles and architecture perspectives from Roacs Corporation on modern web frameworks, cloud DevOps, and enterprise AI orchestration.",
  path: "/insights",
});

export default function InsightsPage() {
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
              Engineering Perspectives
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
              Technical viewpoints on building software that scales.
            </h1>
            <p
              style={{
                fontSize: "1.15rem",
                color: "var(--color-muted-blue)",
                lineHeight: 1.6,
              }}
            >
              Insights into distributed architecture, database migrations, developer velocity, and pragmatic enterprise AI.
            </p>
          </div>
        </Container>
      </section>

      <section className="section section-light">
        <Container wide>
          <div className="grid-3">
            {insightsData.map((item) => (
              <article
                key={item.id}
                className="card"
                style={{
                  padding: "2rem",
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                }}
              >
                <div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: "1rem",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "0.75rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "var(--color-brand-accent)",
                        backgroundColor: "var(--color-brand-accent-subtle)",
                        padding: "0.25rem 0.6rem",
                        borderRadius: "var(--radius-xs)",
                      }}
                    >
                      {item.category}
                    </span>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "0.3rem",
                        fontSize: "0.78rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      <Clock size={13} />
                      <span>{item.readTime}</span>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "var(--color-primary-navy)",
                      lineHeight: 1.35,
                      marginBottom: "0.85rem",
                    }}
                  >
                    <Link href={`/insights/${item.slug}`} style={{ color: "inherit", textDecoration: "none" }}>
                      {item.title}
                    </Link>
                  </h3>

                  <p
                    style={{
                      fontSize: "0.925rem",
                      lineHeight: 1.6,
                      color: "var(--color-text-secondary)",
                      marginBottom: "1.75rem",
                    }}
                  >
                    {item.excerpt}
                  </p>
                </div>

                <div
                  style={{
                    borderTop: "1px solid var(--border-light)",
                    paddingTop: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div>
                    <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-primary-navy)" }}>
                      {item.author}
                    </div>
                    <div style={{ fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                      {item.publishedDate}
                    </div>
                  </div>

                  <Link href={`/insights/${item.slug}`} style={{ color: "var(--color-brand-accent)" }}>
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
