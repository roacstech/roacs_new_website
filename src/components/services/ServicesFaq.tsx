"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { Reveal } from "@/components/common/Reveal";
import { 
  ChevronDown, 
  HelpCircle, 
  ArrowRight 
} from "lucide-react";
import Link from "next/link";
import { CardSpotlight } from "@/components/ui/card-spotlight";

interface ServiceFaqItem {
  question: string;
  answer: string;
  category?: string;
}

const serviceFaqs: ServiceFaqItem[] = [
  {
    category: "IP & Ownership",
    question: "Who owns the intellectual property (IP), source code, and design assets?",
    answer:
      "You retain 100% complete ownership of all intellectual property, source code, UI/UX designs, and technical documentation. We execute strict mutual Non-Disclosure Agreements (NDAs) prior to discovery, and all Git repositories and cloud configurations are directly transferred to your organization upon milestone completion.",
  },
  {
    category: "Engagement Models",
    question: "What collaboration models do you support for IT and software projects?",
    answer:
      "We provide three flexible engagement models: (1) Dedicated Engineering Squads for long-term product roadmaps, (2) Fixed-Scope Milestone Delivery with guaranteed deadlines and budgets for defined scopes, and (3) Agile Time & Materials for rapidly evolving product development.",
  },
  {
    category: "Legacy & Integration",
    question: "Can Roacs modernize or integrate with our existing legacy systems?",
    answer:
      "Yes. We specialize in decoupling monolithic architectures into modern microservices, refactoring legacy codebases into Next.js/TypeScript, and integrating custom solutions with legacy ERPs, CRMs, and third-party APIs without interrupting live business operations.",
  },
  {
    category: "Timelines & Onboarding",
    question: "How quickly can an engineering squad or project kick off?",
    answer:
      "Following initial discovery and technical scoping, dedicated engineering squads or sprint teams typically onboard and commence Sprint Zero within 5 to 10 business days.",
  },
  {
    category: "Quality & Security",
    question: "How do you ensure enterprise security and code quality?",
    answer:
      "Security is engineered into our architecture from day zero. We enforce OWASP top-10 security practices, automated unit and integration test suites, end-to-end data encryption, and peer code reviews before any deployment to production.",
  },
  {
    category: "Support & SLA",
    question: "Do you provide post-launch maintenance and continuous support?",
    answer:
      "Yes. Every deployment includes post-launch warranty support. Additionally, we provide comprehensive SLA-backed maintenance plans covering 24/7 uptime monitoring, zero-downtime security patches, framework updates, and dedicated on-demand feature iterations.",
  },
];

export function ServicesFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      style={{
        backgroundColor: "#F8FAFC",
        paddingTop: "5rem",
        paddingBottom: "5.5rem",
        position: "relative",
        borderTop: "1px solid #E2E8F0",
      }}
      id="service-faqs"
    >
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
          }}
          className="services-faq-grid"
        >
          {/* Top Section Header */}
          <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}>
            <Reveal delay={0.1}>
              <h2
                style={{
                  fontSize: "clamp(1.75rem, 3.2vw, 2.35rem)",
                  fontWeight: 800,
                  color: "var(--color-primary-navy, #101D35)",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.25,
                }}
              >
                Frequently Asked Questions
              </h2>
            </Reveal>
          </div>

          {/* Main Content Area: Left Consultation Box + Right Accordion */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "2.5rem",
              alignItems: "start",
            }}
          >
            {/* Left Card: Direct Technical Support & Consultation with CardSpotlight */}
            <Reveal delay={0.15}>
              <div style={{ position: "sticky", top: "6rem" }}>
                <CardSpotlight
                  style={{
                    backgroundColor: "#080F1E",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    boxShadow: "0 25px 50px -12px rgba(8, 15, 30, 0.7)",
                    borderRadius: "1.25rem",
                    padding: "2.25rem 2rem",
                  }}
                  radius={160}
                >
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "48px",
                      height: "48px",
                      borderRadius: "0.75rem",
                      backgroundColor: "rgba(237, 25, 24, 0.15)",
                      color: "var(--color-brand-accent, #ED1918)",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <HelpCircle size={26} />
                  </div>

                  <h3
                    style={{
                      fontSize: "1.35rem",
                      fontWeight: 700,
                      color: "#FFFFFF",
                      marginBottom: "0.75rem",
                      lineHeight: 1.3,
                      letterSpacing: "-0.015em",
                    }}
                  >
                    Have a specific technical requirement?
                  </h3>

                  <p
                    style={{
                      fontSize: "0.925rem",
                      color: "#CBD5E1",
                      lineHeight: 1.65,
                      marginBottom: "1.75rem",
                    }}
                  >
                    Our senior solution architects can evaluate your project scope, review architectural
                    feasibility, and provide an initial technical proposal.
                  </p>

                  {/* Quick Trust Badges with Step & CheckIcon */}
                  <div
                    style={{
                      paddingTop: "1.25rem",
                      borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                      marginBottom: "2rem",
                    }}
                  >
                    <ul
                      style={{
                        listStyle: "none",
                        listStyleType: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "0.9rem",
                      }}
                    >
                      <Step title="Fast 5–10 Day Squad Onboarding" />
                      <Step title="Full Modern Next.js, Cloud & AI Stack" />
                      <Step title="Direct Communication with Lead Engineers" />
                      <Step title="Enterprise Security & Clean Architecture" />
                    </ul>
                  </div>

                  <Link
                    href="/contact"
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "0.6rem",
                      width: "100%",
                      backgroundColor: "var(--color-brand-accent, #ED1918)",
                      color: "#FFFFFF",
                      fontSize: "0.95rem",
                      fontWeight: 700,
                      padding: "0.85rem 1.5rem",
                      borderRadius: "0.6rem",
                      textDecoration: "none",
                      boxShadow: "0 6px 20px rgba(237, 25, 24, 0.35)",
                      transition: "all 0.25s ease",
                    }}
                  >
                    <span>Talk with an Architect</span>
                    <ArrowRight size={18} />
                  </Link>
                </CardSpotlight>
              </div>
            </Reveal>

            {/* Right Accordion List */}
            <div>
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {serviceFaqs.map((faq, idx) => {
                  const isOpen = openIndex === idx;
                  return (
                    <Reveal key={idx} delay={0.1 + idx * 0.05}>
                      <div
                        style={{
                          backgroundColor: "#FFFFFF",
                          border: "1px solid",
                          borderColor: isOpen
                            ? "var(--color-brand-accent, #ED1918)"
                            : "#E2E8F0",
                          borderRadius: "1rem",
                          boxShadow: isOpen
                            ? "0 10px 25px -5px rgba(237, 25, 24, 0.08), 0 4px 6px -2px rgba(0, 0, 0, 0.03)"
                            : "0 2px 4px rgba(0, 0, 0, 0.02)",
                          overflow: "hidden",
                          transition: "all 0.25s ease",
                        }}
                      >
                        <button
                          onClick={() => toggleFaq(idx)}
                          style={{
                            width: "100%",
                            padding: "1.35rem 1.5rem",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            gap: "1.25rem",
                            textAlign: "left",
                            backgroundColor: "transparent",
                            border: "none",
                            cursor: "pointer",
                          }}
                          aria-expanded={isOpen}
                        >
                          <span
                            style={{
                              fontSize: "1.05rem",
                              fontWeight: 700,
                              color: isOpen
                                ? "var(--color-brand-accent, #ED1918)"
                                : "var(--color-primary-navy, #101D35)",
                              lineHeight: 1.4,
                              letterSpacing: "-0.01em",
                              transition: "color 0.2s ease",
                            }}
                          >
                            {faq.question}
                          </span>
                          <div
                            style={{
                              width: "32px",
                              height: "32px",
                              borderRadius: "50%",
                              backgroundColor: isOpen
                                ? "var(--color-brand-accent, #ED1918)"
                                : "rgba(16, 29, 53, 0.05)",
                              color: isOpen ? "#FFFFFF" : "var(--color-primary-navy, #101D35)",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                            }}
                          >
                            <ChevronDown size={18} />
                          </div>
                        </button>

                        {isOpen && (
                          <div
                            style={{
                              padding: "0 1.5rem 1.5rem 1.5rem",
                              fontSize: "0.95rem",
                              lineHeight: 1.65,
                              color: "var(--color-text-secondary, #475569)",
                              borderTop: "1px solid #F1F5F9",
                              paddingTop: "1.1rem",
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
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

const Step = ({ title }: { title: string }) => {
  return (
    <li
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        listStyle: "none",
        listStyleType: "none",
        margin: 0,
        padding: 0,
      }}
    >
      <CheckIcon />
      <span
        style={{
          color: "#FFFFFF",
          fontSize: "0.95rem",
          fontWeight: 600,
          lineHeight: 1.4,
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </span>
    </li>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      style={{
        color: "var(--color-brand-accent, #ED1918)",
        flexShrink: 0,
      }}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path
        d="M12 2c-.218 0 -.432 .002 -.642 .005l-.616 .017l-.299 .013l-.579 .034l-.553 .046c-4.785 .464 -6.732 2.411 -7.196 7.196l-.046 .553l-.034 .579c-.005 .098 -.01 .198 -.013 .299l-.017 .616l-.004 .318l-.001 .324c0 .218 .002 .432 .005 .642l.017 .616l.013 .299l.034 .579l.046 .553c.464 4.785 2.411 6.732 7.196 7.196l.553 .046l.579 .034c.098 .005 .198 .01 .299 .013l.616 .017l.642 .005l.642 -.005l.616 -.017l.299 -.013l.579 -.034l.553 -.046c4.785 -.464 6.732 -2.411 7.196 -7.196l.046 -.553l.034 -.579c.005 -.098 .01 -.198 .013 -.299l.017 -.616l.005 -.642l-.005 -.642l-.017 -.616l-.013 -.299l-.034 -.579l-.046 -.553c-.464 -4.785 -2.411 -6.732 -7.196 -7.196l-.553 -.046l-.579 -.034a28.058 28.058 0 0 0 -.299 -.013l-.616 -.017l-.318 -.004l-.324 -.001zm2.293 7.293a1 1 0 0 1 1.497 1.32l-.083 .094l-4 4a1 1 0 0 1 -1.32 .083l-.094 -.083l-2 -2a1 1 0 0 1 1.32 -1.497l.094 .083l1.293 1.292l3.293 -3.292z"
        fill="currentColor"
        strokeWidth="0"
      />
    </svg>
  );
};

