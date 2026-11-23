"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Reveal } from "@/components/common/Reveal";
import { ChevronDown, HelpCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "What services does Roacs IT Consulting provide?",
    answer: "Roacs Corporation offers end-to-end IT consulting and engineering services, including custom software development, modern web applications (Next.js/React), native and cross-platform mobile apps, cloud infrastructure (AWS/DevOps), UI/UX product design, and dedicated post-launch technical support with guaranteed SLAs.",
  },
  {
    question: "Do you build custom web applications and SaaS platforms?",
    answer: "Yes, we specialize in building full-scale, customized web applications and multi-tenant SaaS platforms tailored to specific enterprise workflows using Next.js 16, React 19, Node.js, distributed microservices, and modern cloud database architectures.",
  },
  {
    question: "Can you upgrade, modernize, or maintain existing software?",
    answer: "Absolutely. We routinely modernize legacy software systems, migrate monolithic applications to decoupled cloud architectures, optimize database query performance, remediate technical debt, and provide continuous SLA-backed maintenance and feature enhancements.",
  },
  {
    question: "How long does it typically take to develop a web application or software system?",
    answer: "Project timelines depend on feature complexity and architectural requirements. A focused MVP or custom web application typically delivers in 3–6 weeks, while extensive enterprise software systems with third-party ERP integrations and custom microservices span 8–16 weeks with transparent weekly milestone sprints.",
  },
  {
    question: "Do you handle cloud hosting, DevOps automation, and deployment?",
    answer: "Yes, our engineering team manages complete cloud infrastructure deployment across AWS, Google Cloud, Docker container clusters, and VPS environments. We implement automated CI/CD deployment pipelines, zero-downtime rolling updates, SSL security, and proactive APM telemetry.",
  },
  {
    question: "Who owns the Intellectual Property (IP) and source code?",
    answer: "You own 100% of all intellectual property, design assets, and source code upon project completion. We execute strict Non-Disclosure Agreements (NDAs) prior to project kickoff, and deliver the complete Git repository, documentation, and deployment runbooks directly to your organization.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="section section-subtle" id="faq">
      <Container wide>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            eyebrowVariant="tech"
            title="Clear answers on our engineering process, pricing, and timelines."
            description="Everything you need to know about partnering with Roacs Corporation. We prioritize upfront clarity, transparent contracts, and predictable software delivery."
            align="center"
          />
        </Reveal>

        <div style={{ maxWidth: "880px", margin: "0 auto" }}>
          {/* Interactive Accordion */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <Reveal key={idx} delay={0.1 + idx * 0.05}>
                  <div
                    style={{
                      backgroundColor: "#FFFFFF",
                      border: "1px solid",
                      borderColor: isOpen ? "var(--color-primary-navy)" : "var(--border-light)",
                      borderRadius: "var(--radius-md)",
                      boxShadow: isOpen ? "var(--shadow-md)" : "var(--shadow-sm)",
                      overflow: "hidden",
                      transition: "all var(--transition-fast)",
                    }}
                  >
                    <button
                      onClick={() => toggleFaq(idx)}
                      style={{
                        width: "100%",
                        padding: "1.25rem 1.5rem",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        textAlign: "left",
                        backgroundColor: "transparent",
                        cursor: "pointer",
                      }}
                      aria-expanded={isOpen}
                    >
                      <span
                        style={{
                          fontSize: "1.025rem",
                          fontWeight: 700,
                          color: isOpen ? "var(--color-brand-accent)" : "var(--color-primary-navy)",
                          lineHeight: 1.4,
                        }}
                      >
                        {faq.question}
                      </span>
                      <div
                        style={{
                          width: "28px",
                          height: "28px",
                          borderRadius: "50%",
                          backgroundColor: isOpen ? "var(--color-brand-accent)" : "rgba(16, 29, 53, 0.06)",
                          color: isOpen ? "#FFFFFF" : "var(--color-primary-navy)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          transition: "all var(--transition-fast)",
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        }}
                      >
                        <ChevronDown size={16} />
                      </div>
                    </button>

                    {isOpen && (
                      <div
                        style={{
                          padding: "0 1.5rem 1.5rem 1.5rem",
                          fontSize: "0.95rem",
                          lineHeight: 1.65,
                          color: "var(--color-text-secondary)",
                          borderTop: "1px solid rgba(16, 29, 53, 0.06)",
                          paddingTop: "1rem",
                        }}
                      >
                        {faq.answer}
                      </div>
                    )}
                  </div>
                </Reveal>
              );
            })}
          </div>

          {/* Consultation CTA Banner */}
          <Reveal delay={0.3}>
            <div
              style={{
                backgroundColor: "var(--color-primary-navy)",
                color: "#FFFFFF",
                padding: "2rem 2.25rem",
                borderRadius: "var(--radius-md)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "var(--shadow-md)",
                marginTop: "2.5rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1.5rem",
                flexWrap: "wrap",
              }}
            >
              <div style={{ flex: "1 1 320px" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "0.5rem" }}>
                  <HelpCircle size={20} color="var(--color-brand-accent)" />
                  <h4 style={{ fontSize: "1.1rem", fontWeight: 700, color: "#FFFFFF", margin: 0 }}>
                    Have a unique requirement?
                  </h4>
                </div>
                <p style={{ fontSize: "0.925rem", color: "var(--color-muted-blue)", lineHeight: 1.6, margin: 0 }}>
                  Our technical directors are ready to review your project scope, evaluate tech stack options, and provide a tailored consultation without obligation.
                </p>
              </div>
              <Link
                href="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  backgroundColor: "var(--color-brand-accent)",
                  color: "#FFFFFF",
                  fontSize: "0.9rem",
                  fontWeight: 600,
                  padding: "0.75rem 1.5rem",
                  borderRadius: "var(--radius-sm)",
                  textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(237, 25, 24, 0.3)",
                  whiteSpace: "nowrap",
                }}
                className="btn-primary"
              >
                <span>Speak With an Engineer</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
