"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { ArrowRight, Mail, Phone, CalendarCheck, ShieldCheck } from "lucide-react";

export function ContactCTA() {
  return (
    <section
      style={{
        backgroundColor: "var(--color-primary-navy)",
        color: "#FFFFFF",
        paddingTop: "5.5rem",
        paddingBottom: "5.5rem",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255, 255, 255, 0.08)",
      }}
      id="contact-cta"
    >
      {/* Ambient background glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(237, 25, 24, 0.1) 0%, rgba(37, 99, 235, 0.06) 50%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <Container>
        <div
          style={{
            maxWidth: "820px",
            margin: "0 auto",
            textAlign: "center",
            position: "relative",
            zIndex: 1,
          }}
        >
          <Reveal delay={0.1}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                padding: "0.35rem 0.85rem",
                borderRadius: "var(--radius-full)",
                backgroundColor: "rgba(255, 255, 255, 0.08)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                color: "#FFFFFF",
                fontSize: "0.8125rem",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                marginBottom: "1.5rem",
              }}
            >
              <CalendarCheck size={14} color="var(--color-brand-accent)" />
              <span>Partner With Roacs</span>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <h2
              style={{
                fontSize: "clamp(2.25rem, 4.5vw, 3.5rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                letterSpacing: "-0.03em",
                lineHeight: 1.15,
                marginBottom: "1.25rem",
              }}
            >
              Let&apos;s build what&apos;s next.
            </h2>
          </Reveal>

          <Reveal delay={0.3}>
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.65,
                color: "var(--color-muted-blue)",
                marginBottom: "2.5rem",
                maxWidth: "680px",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              Whether you are architecting a new enterprise SaaS platform, modernizing mission-critical legacy software, or scaling cloud infrastructure, our engineering teams are ready to collaborate.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "1.25rem",
                marginBottom: "3rem",
              }}
            >
              <Button
                href="/contact"
                variant="primary"
                size="lg"
                icon={<ArrowRight size={18} />}
              >
                Start a Conversation
              </Button>

              <Button
                href="/services"
                variant="secondary"
                size="lg"
              >
                Review Service Capabilities
              </Button>
            </div>
          </Reveal>

          {/* Direct channels */}
          <Reveal delay={0.5}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                gap: "2.5rem",
                borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                paddingTop: "2rem",
                fontSize: "0.925rem",
                color: "var(--color-text-on-dark-muted)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Mail size={16} color="var(--color-brand-accent)" />
                <span>Direct inquiries: </span>
                <a href="mailto:info@roacs.com" style={{ color: "#FFFFFF", fontWeight: 600 }}>
                  info@roacs.com
                </a>
              </div>

              <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <Phone size={16} color="var(--color-brand-accent)" />
                <span>Call our advisory desk: </span>
                <a href="tel:+919363282216" style={{ color: "#FFFFFF", fontWeight: 600 }}>
                  +91 93632 82216
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
