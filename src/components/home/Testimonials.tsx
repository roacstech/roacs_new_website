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
            gap: "2rem",
            maxWidth: "1080px",
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
                  borderRadius: "var(--radius-lg)",
                  padding: "2.5rem",
                  boxShadow: "var(--shadow-md)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  position: "relative",
                  height: "100%",
                  transition: "all var(--transition-normal)",
                }}
                className="card"
              >
                <div
                  style={{
                    position: "absolute",
                    top: "1.75rem",
                    right: "2rem",
                    color: "rgba(237, 25, 24, 0.12)",
                  }}
                >
                  <Quote size={52} strokeWidth={1.5} />
                </div>

                <div>
                  {/* Rating Stars */}
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.25rem",
                      marginBottom: "1.25rem",
                    }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        fill="#F59E0B"
                        color="#F59E0B"
                      />
                    ))}
                    <span
                      style={{
                        marginLeft: "0.5rem",
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        color: "var(--color-primary-navy)",
                      }}
                    >
                      5.0 Verified Review
                    </span>
                  </div>

                  <p
                    style={{
                      fontSize: "1.05rem",
                      lineHeight: 1.7,
                      color: "var(--color-primary-navy)",
                      fontWeight: 500,
                      fontStyle: "italic",
                      marginBottom: "2rem",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    â€œ{test.quote}â€ 
                  </p>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    borderTop: "1px solid var(--border-light)",
                    paddingTop: "1.25rem",
                  }}
                >
                  <div
                    style={{
                      position: "relative",
                      width: "52px",
                      height: "52px",
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
                        fontSize: "1.05rem",
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
                        fontSize: "0.825rem",
                        color: "var(--color-brand-accent)",
                        fontWeight: 600,
                        display: "block",
                      }}
                    >
                      {test.role}
                    </span>
                    <span
                      style={{
                        fontSize: "0.78rem",
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
