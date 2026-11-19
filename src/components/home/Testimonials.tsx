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
            eyebrow="Verified Client Feedback"
            eyebrowVariant="accent"
            title="What our partners say about delivering with Roacs."
            description="We measure our achievement by the tangible business efficiency and operational longevity our clients experience in production."
            align="center"
          />
        </Reveal>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "2rem",
            maxWidth: "960px",
            margin: "0 auto",
          }}
          className="testimonials-grid"
        >
          {testimonialsData.map((test, index) => (
            <Reveal key={test.id} delay={0.15 * index}>
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
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: "1.75rem",
                    right: "2rem",
                    color: "rgba(16, 29, 53, 0.08)",
                  }}
                >
                  <Quote size={48} strokeWidth={1.5} />
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
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} size={18} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <blockquote
                    style={{
                      fontSize: "1.1rem",
                      lineHeight: 1.65,
                      color: "var(--color-primary-navy)",
                      fontStyle: "normal",
                      fontWeight: 500,
                      marginBottom: "2rem",
                      position: "relative",
                      zIndex: 1,
                    }}
                  >
                    &ldquo;{test.quote}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
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
                      width: "50px",
                      height: "50px",
                      borderRadius: "50%",
                      overflow: "hidden",
                      border: "2px solid var(--color-bg-subtle)",
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
                        marginBottom: "0.15rem",
                      }}
                    >
                      {test.name}
                    </h4>
                    <p
                      style={{
                        fontSize: "0.85rem",
                        color: "var(--color-text-muted)",
                        margin: 0,
                      }}
                    >
                      {test.role} &bull; {test.company}
                    </p>
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
