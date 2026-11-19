"use client";

import React, { useState } from "react";
import { Container } from "@/components/common/Container";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { 
  ArrowRight, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Activity, 
  Server 
} from "lucide-react";

type ActiveTab = "architecture" | "ai" | "security" | "cloud";

export function Hero() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("architecture");

  return (
    <section
      style={{
        position: "relative",
        backgroundColor: "var(--color-primary-navy)",
        color: "#FFFFFF",
        paddingTop: "5rem",
        paddingBottom: "5.5rem",
        overflow: "hidden",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      {/* Background Decorative Tech Grid & Radiant Glow Orbs */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "56px 56px",
          pointerEvents: "none",
          opacity: 0.65,
        }}
      />

      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "2%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(237, 25, 24, 0.14) 0%, rgba(37, 99, 235, 0.09) 45%, transparent 70%)",
          filter: "blur(90px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          position: "absolute",
          bottom: "-15%",
          left: "5%",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(37, 99, 235, 0.12) 0%, transparent 65%)",
          filter: "blur(80px)",
          pointerEvents: "none",
        }}
      />

      <Container wide>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: "3.5rem",
            alignItems: "center",
            position: "relative",
            zIndex: 1,
          }}
          className="hero-grid"
        >
          {/* Left Column: Value Proposition & Executive Copy */}
          <div style={{ maxWidth: "680px" }}>
            <Reveal delay={0.1}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.6rem",
                  padding: "0.45rem 1rem",
                  backgroundColor: "rgba(255, 255, 255, 0.06)",
                  border: "1px solid rgba(255, 255, 255, 0.14)",
                  borderRadius: "var(--radius-full)",
                  marginBottom: "1.75rem",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                }}
              >
                
              
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4.5vw, 3.85rem)",
                  fontWeight: 800,
                  letterSpacing: "-0.035em",
                  lineHeight: 1.15,
                  marginBottom: "1.5rem",
                  color: "#FFFFFF",
                }}
              >
                We build scalable software that drives{" "}
                <span
                  style={{
                    background: "linear-gradient(135deg, #FFFFFF 20%, #A9B7C9 70%, #ED1918 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  business growth.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={0.3}>
              <p
                style={{
                  fontSize: "1.15rem",
                  lineHeight: 1.68,
                  color: "var(--color-muted-blue)",
                  marginBottom: "2.25rem",
                }}
              >
                At Roacs Corporation, we design and develop powerful SaaS platforms, web applications, and enterprise solutions that help businesses streamline operations and scale efficiently.
              </p>
            </Reveal>

            <Reveal delay={0.4}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "2.5rem",
                }}
              >
                <Button
                  href="/services"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                >
                  Explore Core Services
                </Button>

                <Button
                  href="/contact"
                  variant="secondary"
                  size="lg"
                >
                  Start a Project
                </Button>
              </div>
            </Reveal>

            {/* Credibility Badges */}
            <Reveal delay={0.5}>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.5rem",
                  paddingTop: "1.5rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.1)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.85)", fontWeight: 500 }}>
                    Enterprise Security Standards
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.85)", fontWeight: 500 }}>
                    Modular Next.js Architectures
                  </span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.85rem", color: "rgba(255, 255, 255, 0.85)", fontWeight: 500 }}>
                    Dedicated SLA Production Support
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Right Column: Interactive System & Architecture Showcase Panel */}
          <div style={{ position: "relative" }}>
            <Reveal delay={0.3}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "var(--radius-lg)",
                  backgroundColor: "rgba(15, 26, 48, 0.85)",
                  border: "1px solid rgba(255, 255, 255, 0.15)",
                  boxShadow: "0 28px 70px rgba(0, 0, 0, 0.55)",
                  backdropFilter: "blur(16px)",
                  padding: "1.75rem",
                  overflow: "hidden",
                }}
              >
                {/* Visual Window Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "1.25rem",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                    marginBottom: "1.25rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#EF4444" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#F59E0B" }} />
                    <div style={{ width: "10px", height: "10px", borderRadius: "50%", backgroundColor: "#10B981" }} />
                    <span style={{ fontSize: "0.78rem", color: "var(--color-muted-blue)", marginLeft: "0.5rem", fontFamily: "monospace" }}>
                      roacs://enterprise/platform-engine
                    </span>
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <div className="live-pulse-dot" />
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        color: "#10B981",
                        fontFamily: "monospace",
                        letterSpacing: "0.05em",
                      }}
                    >
                      LIVE â€¢ 99.9% UPTIME
                    </span>
                  </div>
                </div>

                {/* Interactive Feature Category Tabs */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr)",
                    gap: "0.35rem",
                    backgroundColor: "rgba(10, 18, 33, 0.8)",
                    padding: "0.35rem",
                    borderRadius: "var(--radius-sm)",
                    marginBottom: "1.25rem",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                  }}
                >
                  {[
                    { id: "architecture" as ActiveTab, label: "Architecture", icon: Layers },
                    { id: "ai" as ActiveTab, label: "Automation", icon: Cpu },
                    { id: "security" as ActiveTab, label: "Security", icon: ShieldCheck },
                    { id: "cloud" as ActiveTab, label: "Cloud Scale", icon: Server },
                  ].map((tab) => {
                    const TabIcon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        style={{
                          padding: "0.45rem 0.25rem",
                          borderRadius: "var(--radius-xs)",
                          backgroundColor: isActive ? "var(--color-brand-accent)" : "transparent",
                          color: isActive ? "#FFFFFF" : "var(--color-muted-blue)",
                          fontSize: "0.75rem",
                          fontWeight: 600,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "0.35rem",
                          transition: "all 0.15s ease",
                          cursor: "pointer",
                        }}
                      >
                        <TabIcon size={12} />
                        <span>{tab.label}</span>
                      </button>
                    );
                  })}
                </div>

                {/* Dynamic Panel Content Based on Active Tab */}
                <div
                  style={{
                    backgroundColor: "rgba(11, 20, 36, 0.85)",
                    border: "1px solid rgba(255, 255, 255, 0.08)",
                    borderRadius: "var(--radius-sm)",
                    padding: "1.25rem",
                    minHeight: "185px",
                    marginBottom: "1.25rem",
                  }}
                >
                  {activeTab === "architecture" && (
                    <div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF" }}>Distributed Microservices Cluster</span>
                        <span style={{ fontSize: "0.72rem", color: "#34D399", fontFamily: "monospace" }}>12ms Latency</span>
                      </div>
                      <p style={{ fontSize: "0.8rem", color: "var(--color-muted-blue)", lineHeight: 1.5, marginBottom: "1rem" }}>
                        Decoupled Next.js frontend with high-concurrency Node/Go service nodes, Kafka messaging bus, and isolated tenancy.
                      </p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                        <div style={{ background: "rgba(255,255,255,0.04)", padding: "0.5rem 0.75rem", borderRadius: "4px" }}>
                          <div style={{ fontSize: "0.68rem", color: "var(--color-muted-blue)" }}>API Throughput</div>
                          <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#FFFFFF" }}>45,000 req/sec</div>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.04)", padding: "0.5rem 0.75rem", borderRadius: "4px" }}>
                          <div style={{ fontSize: "0.68rem", color: "var(--color-muted-blue)" }}>Fault Tolerance</div>
                          <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#34D399" }}>Self-Healing N+1</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "ai" && (
                    <div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF" }}>Intelligent Workflow Orchestration</span>
                        <span style={{ fontSize: "0.72rem", color: "#38BDF8", fontFamily: "monospace" }}>Deterministic GenAI</span>
                      </div>
                      <p style={{ fontSize: "0.8rem", color: "var(--color-muted-blue)", lineHeight: 1.5, marginBottom: "1rem" }}>
                        Enterprise automation embedding structured LLM agents, vector embeddings, and rule-based validation pipelines.
                      </p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                        <div style={{ background: "rgba(255,255,255,0.04)", padding: "0.5rem 0.75rem", borderRadius: "4px" }}>
                          <div style={{ fontSize: "0.68rem", color: "var(--color-muted-blue)" }}>Manual Task Reduction</div>
                          <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#FFFFFF" }}>-82% Cycle Time</div>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.04)", padding: "0.5rem 0.75rem", borderRadius: "4px" }}>
                          <div style={{ fontSize: "0.68rem", color: "var(--color-muted-blue)" }}>Guardrail Accuracy</div>
                          <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#38BDF8" }}>99.8% Precision</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "security" && (
                    <div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF" }}>Zero-Trust Compliance & Encryption</span>
                        <span style={{ fontSize: "0.72rem", color: "#FBBF24", fontFamily: "monospace" }}>SOC2 / ISO Ready</span>
                      </div>
                      <p style={{ fontSize: "0.8rem", color: "var(--color-muted-blue)", lineHeight: 1.5, marginBottom: "1rem" }}>
                        End-to-end TLS 1.3 data encryption, role-based OAuth access control, audit logs, and automated penetration testing.
                      </p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                        <div style={{ background: "rgba(255,255,255,0.04)", padding: "0.5rem 0.75rem", borderRadius: "4px" }}>
                          <div style={{ fontSize: "0.68rem", color: "var(--color-muted-blue)" }}>Security Posture</div>
                          <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#FFFFFF" }}>Zero Vulnerability</div>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.04)", padding: "0.5rem 0.75rem", borderRadius: "4px" }}>
                          <div style={{ fontSize: "0.68rem", color: "var(--color-muted-blue)" }}>Data Encryption</div>
                          <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#FBBF24" }}>AES-256 at Rest</div>
                        </div>
                      </div>
                    </div>
                  )}

                  {activeTab === "cloud" && (
                    <div>
                      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "0.75rem" }}>
                        <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF" }}>Multi-Region Container Orchestration</span>
                        <span style={{ fontSize: "0.72rem", color: "#A78BFA", fontFamily: "monospace" }}>Automated Autoscaling</span>
                      </div>
                      <p style={{ fontSize: "0.8rem", color: "var(--color-muted-blue)", lineHeight: 1.5, marginBottom: "1rem" }}>
                        Kubernetes and AWS ECS infrastructure with automated failover, load balancing, and continuous deployment pipelines.
                      </p>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.5rem" }}>
                        <div style={{ background: "rgba(255,255,255,0.04)", padding: "0.5rem 0.75rem", borderRadius: "4px" }}>
                          <div style={{ fontSize: "0.68rem", color: "var(--color-muted-blue)" }}>Global CDN Nodes</div>
                          <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#FFFFFF" }}>300+ Edge Points</div>
                        </div>
                        <div style={{ background: "rgba(255,255,255,0.04)", padding: "0.5rem 0.75rem", borderRadius: "4px" }}>
                          <div style={{ fontSize: "0.68rem", color: "var(--color-muted-blue)" }}>Deployment Downtime</div>
                          <div style={{ fontSize: "0.9rem", fontWeight: 700, color: "#A78BFA" }}>0.00s Zero Downtime</div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                {/* System Activity Stream Footer */}
                <div
                  style={{
                    backgroundColor: "rgba(10, 18, 33, 0.95)",
                    border: "1px solid rgba(255, 255, 255, 0.06)",
                    borderRadius: "var(--radius-sm)",
                    padding: "0.75rem 1rem",
                    fontSize: "0.78rem",
                    fontFamily: "monospace",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    <Activity size={14} color="#34D399" />
                    <span style={{ color: "#34D399" }}>System Active</span>
                  </div>
                  <span style={{ color: "var(--color-muted-blue)" }}>Next.js 16.4 â€¢ React 19 RSC Stack</span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* High-Impact Stat Counters Ribbon (from index.html: 300+ projects, 3+ years, 99.9% uptime, 100% satisfaction) */}
        <div
          style={{
            marginTop: "4.5rem",
            paddingTop: "2.5rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                <span style={{ color: "var(--color-brand-accent)" }}>300</span>+
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-muted-blue)" }}>
                Successful Projects Completed
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                <span style={{ color: "var(--color-brand-accent)" }}>3</span>+
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-muted-blue)" }}>
                Years Working Experience
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                <span style={{ color: "#34D399" }}>99.9</span>%
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-muted-blue)" }}>
                Production Infrastructure Uptime
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  fontSize: "clamp(2rem, 3.5vw, 2.75rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  fontFamily: "var(--font-heading)",
                  lineHeight: 1,
                  marginBottom: "0.4rem",
                }}
              >
                <span style={{ color: "#38BDF8" }}>50</span>+
              </div>
              <div style={{ fontSize: "0.85rem", fontWeight: 600, color: "var(--color-muted-blue)" }}>
                Global Enterprise & Startup Clients
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
