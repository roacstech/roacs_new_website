"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { insightsData } from "@/data/insights";
import { ArrowRight, Clock, Calendar, User } from "lucide-react";

export function InsightsSection() {
  return (
    <section className="section section-light" id="insights">
      <Container wide>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Latest Insights"
            eyebrowVariant="tech"
            title="Technology, Trends & Expert Insights."
            description="Deep dives, architectural perspectives, and industry trends from the Roacs engineering team to keep your organization at the leading edge of software and cloud technology."
            align="center"
          />
        </Reveal>

        <div className="grid-3">
          {insightsData.map((item, index) => (
            <Reveal key={item.id} delay={0.1 + index * 0.1}>
              <article
                className="card"
                style={{
                  borderRadius: "var(--radius-md)",
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--border-light)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%",
                  overflow: "hidden",
                  transition: "all var(--transition-normal)",
                }}
              >
                <div>
                  {/* Blog Image */}
                  {item.image && (
                    <div
                      style={{
                        position: "relative",
                        width: "100%",
                        height: "210px",
                        backgroundColor: "#F1F5F9",
                        overflow: "hidden",
                      }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
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
                            backgroundColor: "rgba(16, 29, 53, 0.88)",
                            backdropFilter: "blur(6px)",
                            color: "#FFFFFF",
                            fontSize: "0.72rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.06em",
                            padding: "0.25rem 0.65rem",
                            borderRadius: "var(--radius-full)",
                            border: "1px solid rgba(255, 255, 255, 0.15)",
                          }}
                        >
                          {item.category}
                        </span>
                      </div>
                    </div>
                  )}

                  <div style={{ padding: "1.75rem 1.75rem 1rem 1.75rem" }}>
                    {/* Meta info (from index.html: By Roacs Team, Date) */}
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                        fontSize: "0.8rem",
                        color: "var(--color-text-muted)",
                        marginBottom: "0.85rem",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                        <User size={13} color="var(--color-brand-accent)" />
                        <span>By {item.author}</span>
                      </div>
                      <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                        <Calendar size={13} />
                        <span>{item.publishedDate}</span>
                      </div>
                    </div>

                    <h4
                      style={{
                        fontSize: "1.2rem",
                        fontWeight: 700,
                        color: "var(--color-primary-navy)",
                        lineHeight: 1.35,
                        marginBottom: "0.75rem",
                      }}
                    >
                      <Link
                        href={`/insights/${item.slug}`}
                        style={{ color: "inherit", textDecoration: "none" }}
                        className="service-link"
                      >
                        {item.title}
                      </Link>
                    </h4>

                    <p
                      style={{
                        fontSize: "0.9rem",
                        lineHeight: 1.6,
                        color: "var(--color-text-secondary)",
                        margin: 0,
                      }}
                    >
                      {item.excerpt}
                    </p>
                  </div>
                </div>

                <div
                  style={{
                    padding: "1rem 1.75rem 1.5rem 1.75rem",
                    borderTop: "1px solid var(--border-light)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <Link
                    href={`/insights/${item.slug}`}
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "var(--color-brand-accent)",
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.4rem",
                    }}
                    className="service-link"
                  >
                    <span>Read Article</span>
                    <ArrowRight size={14} className="arrow-icon" />
                  </Link>

                  <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.75rem", color: "var(--color-text-muted)" }}>
                    <Clock size={12} />
                    <span>{item.readTime}</span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        {/* Centered Bottom Link */}
        <Reveal delay={0.3}>
          <div
            style={{
              textAlign: "center",
              marginTop: "3.5rem",
            }}
          >
            <Link
              href="/insights"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "var(--color-primary-navy)",
                fontSize: "0.95rem",
                fontWeight: 700,
                borderBottom: "1.5px solid var(--color-brand-accent)",
                paddingBottom: "0.25rem",
                transition: "all var(--transition-fast)",
              }}
              className="industry-explore-link"
            >
              <span>View All Insights & Technical Perspectives</span>
              <ArrowRight size={16} color="var(--color-brand-accent)" />
            </Link>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
