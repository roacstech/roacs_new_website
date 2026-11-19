"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { insightsData } from "@/data/insights";
import { ArrowRight, Clock, Calendar } from "lucide-react";

export function InsightsSection() {
  return (
    <section className="section section-light" id="insights">
      <Container wide>
        <Reveal delay={0.1}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "flex-start",
              marginBottom: "3rem",
              gap: "1rem",
            }}
            className="insights-header-row"
          >
            <SectionHeading
              eyebrow="Engineering Insights"
              eyebrowVariant="tech"
              title="Perspectives on software architecture, cloud scale, and practical AI."
              description="Deep dives and engineering methodologies from our teams on architecting modern platforms that perform under pressure."
            />

            <Link
              href="/insights"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.4rem",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "var(--color-primary-navy)",
                whiteSpace: "nowrap",
              }}
            >
              <span>View All Articles</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </Reveal>

        <div className="grid-3">
          {insightsData.map((item, index) => (
            <Reveal key={item.id} delay={0.1 + index * 0.1}>
              <article
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
                    <Link
                      href={`/insights/${item.slug}`}
                      style={{ color: "inherit", textDecoration: "none" }}
                    >
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

                  <Link
                    href={`/insights/${item.slug}`}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      color: "var(--color-brand-accent)",
                    }}
                    aria-label={`Read article: ${item.title}`}
                  >
                    <ArrowRight size={18} />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>

      
    </section>
  );
}
