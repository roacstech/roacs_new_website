"use client";

import React from "react";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { testimonialsData } from "@/data/testimonials";
import { Star, Quote } from "lucide-react";

export function Testimonials() {
  return (
    <section className="section section-subtle" id="testimonials">
      <Container wide>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Client Testimonials"
            eyebrowVariant="accent"
            title="What Our Clients Say About Roacs."
            description="We take pride in delivering reliable, scalable, and result-driven digital solutions. Here's what our enterprise clients and founders say about their experience working with Roacs."
            align="center"
          />
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "1.5rem",
            maxWidth: "860px",
            margin: "0 auto",
          }}
          className="testimonials-grid"
        >
          {testimonialsData.map((test, index) => (
            <Reveal key={test.id} delay={0.15 * (index + 1)}>
              <div
                style={{
                  backgroundColor: "#FFFFFF",
                  border: "1px solid var(--border-light)",
                  borderRadius: "14px",
                  padding: "1.6rem",
                  boxShadow: "0 4px 18px rgba(16, 29, 53, 0.05), 0 1px 3px rgba(0, 0, 0, 0.03)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  height: "100%",
                  transition: "all var(--transition-normal)",
                }}
                className="testimonial-card"
              >
                <div
                  style={{
                    position: "absolute",
                    top: "1.25rem",
                    right: "1.25rem",
                    color: "rgba(237, 25, 24, 0.12)",
                  }}
                >
                  <Quote size={32} strokeWidth={1.5} />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.2rem",
                      marginBottom: "0.85rem",
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        fill="#F59E0B"
                        color="#F59E0B"
                      />
                    ))}
                    <span
                      style={{
                        marginLeft: "0.4rem",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        color: "var(--color-primary-navy)",
                      }}
                    >
                      5.0 Verified Review
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "0.925rem",
                      lineHeight: 1.55,
                      color: "var(--color-primary-navy)",
                      fontWeight: 500,
                      fontStyle: "italic",
                      marginBottom: "1.25rem",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    &ldquo;{test.quote}&rdquo;
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.85rem",
                    borderTop: "1px solid var(--border-light)",
                    paddingTop: "1rem",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "42px",
                      height: "42px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      backgroundColor: "var(--color-bg-subtle)",
                      border: "2px solid var(--color-brand-accent)",
                      flexShrink: 0,
                    }}
                  >
                    <Image
                      src={test.avatar}
                      alt={test.name}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div>
                    <h4
                      style={{
                        fontSize: "0.95rem",
                        fontWeight: 700,
                        color: "var(--color-primary-navy)",
                        margin: 0,
                        lineHeight: 1.2,
                      }}
                    >
                      {test.name}
                    </h4>
                    <span
                      style={{
                        fontSize: "0.75rem",
                        color: "var(--color-brand-accent)",
                        fontWeight: 600,
                        display: "block",
                      }}
                    >
                      {test.role}
                    </span>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--color-text-muted)",
                      }}
                    >
                      {test.company}
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
