"use client";

import React from "react";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { Reveal } from "@/components/common/Reveal";
import { servicesData } from "@/data/services";
import { 
  ArrowRight, 
  Package, 
  Layers,
  Sparkles,
  QrCode,
  BellRing,
  Boxes,
  TrendingUp,
  Activity
} from "lucide-react";

export function ServicesSection() {
  return (
    <section 
      className="section section-subtle" 
      id="services"
      style={{
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle Clean Tech Grid Overlay matching Reference */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.035) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.035) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
          pointerEvents: "none",
        }}
      />

      <Container wide style={{ position: "relative", zIndex: 1 }}>
        <Reveal delay={0.1}>
          <SectionHeading
            eyebrow="Our Core Services"
            eyebrowVariant="accent"
            title="Innovative IT Solutions for Modern Businesses."
            description="From strategic IT consultancy to custom software, mobile ecosystems, and cloud automation, we engineer enterprise-grade solutions tailored to accelerate your business goals."
            align="center"
          />
        </Reveal>

        {/* 6 Core Services Grid */}
        <div className="grid-3" style={{ marginBottom: "4rem" }}>
          {servicesData.map((service, index) => (
            <Reveal key={service.id} delay={0.1 + (index % 3) * 0.1}>
              <ServiceCard service={service} index={index} />
            </Reveal>
          ))}
        </div>

        {/* Flagship Proprietary SaaS Spotlight: Roacs Material Management */}
        <Reveal delay={0.3}>
          <div
            style={{
              background: "linear-gradient(145deg, #FFFFFF 0%, #F8FAFC 55%, #F0F4FF 100%)",
              color: "#0F172A",
              borderRadius: "24px",
              border: "1px solid rgba(226, 232, 240, 0.95)",
              padding: "clamp(2rem, 3.5vw, 3rem) clamp(1.75rem, 3vw, 2.75rem)",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
              alignItems: "center",
              boxShadow: "0 20px 50px -12px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.03)",
              position: "relative",
              overflow: "hidden",
            }}
            className="product-spotlight-grid"
          >
            {/* Ambient Dual Glow */}
            <div
              style={{
                position: "absolute",
                top: "-20%",
                right: "5%",
                width: "480px",
                height: "480px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(99, 102, 241, 0.1) 0%, rgba(6, 182, 212, 0.04) 40%, transparent 70%)",
                filter: "blur(60px)",
                pointerEvents: "none",
              }}
              aria-hidden="true"
            />

            {/* Subtle Tech Grid Texture */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `
                  linear-gradient(to right, rgba(99, 102, 241, 0.035) 1px, transparent 1px),
                  linear-gradient(to bottom, rgba(99, 102, 241, 0.035) 1px, transparent 1px)
                `,
                backgroundSize: "28px 28px",
                pointerEvents: "none",
              }}
              aria-hidden="true"
            />

            {/* Left: Value Proposition */}
            <div style={{ position: "relative", zIndex: 1 }}>
              {/* Modern SaaS Pill */}
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "9999px",
                  backgroundColor: "rgba(99, 102, 241, 0.08)",
                  border: "1px solid rgba(99, 102, 241, 0.22)",
                  color: "#4338CA",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "1.25rem",
                }}
              >
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#10B981",
                    display: "inline-block",
                    boxShadow: "0 0 8px #10B981",
                  }}
                />
                <Package size={14} />
                <span>Proprietary SaaS Product</span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: "clamp(1.75rem, 3.2vw, 2.35rem)",
                  fontWeight: 800,
                  color: "#0F172A",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                  letterSpacing: "-0.02em",
                }}
              >
                Roacs Material{" "}
                <span
                  style={{
                    background: "linear-gradient(90deg, #4338CA 0%, #6366F1 45%, #0284C7 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  Management
                </span>{" "}
                Platform
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: "1.025rem",
                  color: "#475569",
                  lineHeight: 1.65,
                  marginBottom: "1.75rem",
                }}
              >
                An enterprise-grade supply chain and inventory control platform engineered by Roacs Corporation. Eliminate stock-outs, automate multi-tiered procurement cycles, and synchronize inventory flow with real-time auditability.
              </p>

              {/* 4 Modern Enterprise Feature Badges */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))",
                  gap: "0.75rem",
                  marginBottom: "2rem",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    padding: "0.65rem 0.85rem",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid rgba(226, 232, 240, 0.95)",
                    boxShadow: "0 1px 3px rgba(15, 23, 42, 0.03)",
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "7px",
                      backgroundColor: "rgba(99, 102, 241, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#4F46E5",
                      flexShrink: 0,
                    }}
                  >
                    <Layers size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>
                      Multi-Warehouse Stock
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "#64748B" }}>Sub-second socket sync</div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    padding: "0.65rem 0.85rem",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid rgba(226, 232, 240, 0.95)",
                    boxShadow: "0 1px 3px rgba(15, 23, 42, 0.03)",
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "7px",
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#059669",
                      flexShrink: 0,
                    }}
                  >
                    <Sparkles size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>
                      Automated PO Requisitions
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "#64748B" }}>Rule-based dispatch</div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    padding: "0.65rem 0.85rem",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid rgba(226, 232, 240, 0.95)",
                    boxShadow: "0 1px 3px rgba(15, 23, 42, 0.03)",
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "7px",
                      backgroundColor: "rgba(2, 132, 199, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#0284C7",
                      flexShrink: 0,
                    }}
                  >
                    <QrCode size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>
                      Barcode & RFID Flow
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "#64748B" }}>End-to-end audit trace</div>
                  </div>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "0.65rem",
                    padding: "0.65rem 0.85rem",
                    borderRadius: "12px",
                    backgroundColor: "rgba(255, 255, 255, 0.95)",
                    border: "1px solid rgba(226, 232, 240, 0.95)",
                    boxShadow: "0 1px 3px rgba(15, 23, 42, 0.03)",
                  }}
                >
                  <div
                    style={{
                      width: 28,
                      height: 28,
                      borderRadius: "7px",
                      backgroundColor: "rgba(217, 119, 6, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#D97706",
                      flexShrink: 0,
                    }}
                  >
                    <BellRing size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>
                      Instant Low-Stock Alert
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "#64748B" }}>Dynamic thresholds</div>
                  </div>
                </div>
              </div>

              {/* CTAs */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
                <Link
                  href="/material-management"
                  className="material-hero-primary-btn"
                  style={{
                    padding: "0.8rem 1.75rem",
                    fontSize: "0.92rem",
                  }}
                >
                  <span>Explore Product Platform</span>
                  <ArrowRight size={16} />
                </Link>
                <Link
                  href="/contact"
                  className="material-hero-secondary-btn"
                  style={{
                    padding: "0.8rem 1.65rem",
                    fontSize: "0.92rem",
                  }}
                >
                  Request Live Demo
                </Link>
              </div>
            </div>

            {/* Right: Modern Light Warehouse Inventory Monitor Console */}
            <div
              style={{
                position: "relative",
                zIndex: 1,
                backgroundColor: "#FFFFFF",
                border: "1px solid rgba(226, 232, 240, 0.95)",
                borderRadius: "18px",
                boxShadow: "0 16px 36px -8px rgba(15, 23, 42, 0.08), 0 0 1px 1px rgba(0, 0, 0, 0.02)",
                overflow: "hidden",
              }}
            >
              {/* Chrome Top Bar */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "0.75rem 1.15rem",
                  backgroundColor: "#F8FAFC",
                  borderBottom: "1px solid rgba(226, 232, 240, 0.9)",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#FDA4AF" }} />
                    <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#FDE047" }} />
                    <span style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: "#86EFAC" }} />
                  </div>
                  <div style={{ height: "14px", width: "1px", backgroundColor: "#E2E8F0" }} />
                  <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                    <Boxes size={15} color="#4338CA" />
                    <span style={{ fontSize: "0.82rem", fontWeight: 700, color: "#0F172A" }}>
                      Warehouse Inventory Monitor
                    </span>
                  </div>
                </div>

                <span
                  style={{
                    fontSize: "0.68rem",
                    padding: "0.2rem 0.55rem",
                    borderRadius: "9999px",
                    backgroundColor: "rgba(16, 185, 129, 0.12)",
                    color: "#059669",
                    fontWeight: 700,
                    letterSpacing: "0.04em",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.35rem",
                    border: "1px solid rgba(16, 185, 129, 0.25)",
                  }}
                >
                  <span
                    style={{
                      width: 5,
                      height: 5,
                      borderRadius: "50%",
                      backgroundColor: "#10B981",
                      display: "inline-block",
                    }}
                  />
                  CONNECTED
                </span>
              </div>

              {/* Stock Items List */}
              <div style={{ padding: "0.85rem 1rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {/* Row 1 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.65rem 0.85rem",
                    backgroundColor: "#F8FAFC",
                    border: "1px solid rgba(226, 232, 240, 0.8)",
                    borderRadius: "10px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "3.5px",
                      backgroundColor: "#0284C7",
                    }}
                  />
                  <div style={{ paddingLeft: "0.35rem" }}>
                    <div style={{ fontWeight: 700, color: "#0F172A", fontSize: "0.82rem" }}>
                      SKU-9021 Industrial Steel Rods
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "1px" }}>
                      Warehouse B-4 • Lot #412
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.5rem",
                        borderRadius: "9999px",
                        backgroundColor: "#ECFDF5",
                        color: "#059669",
                        border: "1px solid rgba(16, 185, 129, 0.2)",
                      }}
                    >
                      2,450 Units OK
                    </span>
                  </div>
                </div>

                {/* Row 2 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.65rem 0.85rem",
                    backgroundColor: "#F8FAFC",
                    border: "1px solid rgba(226, 232, 240, 0.8)",
                    borderRadius: "10px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "3.5px",
                      backgroundColor: "#F59E0B",
                    }}
                  />
                  <div style={{ paddingLeft: "0.35rem" }}>
                    <div style={{ fontWeight: 700, color: "#0F172A", fontSize: "0.82rem" }}>
                      SKU-4819 Silicon Gaskets
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "1px" }}>
                      Central Hub • Bin #14
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.5rem",
                        borderRadius: "9999px",
                        backgroundColor: "#FFFBEB",
                        color: "#D97706",
                        border: "1px solid rgba(245, 158, 11, 0.25)",
                      }}
                    >
                      Low: 140 Units
                    </span>
                  </div>
                </div>

                {/* Row 3 */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.65rem 0.85rem",
                    backgroundColor: "#F8FAFC",
                    border: "1px solid rgba(226, 232, 240, 0.8)",
                    borderRadius: "10px",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      left: 0,
                      top: 0,
                      bottom: 0,
                      width: "3.5px",
                      backgroundColor: "#6366F1",
                    }}
                  />
                  <div style={{ paddingLeft: "0.35rem" }}>
                    <div style={{ fontWeight: 700, color: "#0F172A", fontSize: "0.82rem" }}>
                      PO-8840 Auto-Requisition
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "#64748B", marginTop: "1px" }}>
                      Supplier: Global Metals Corp
                    </div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <span
                      style={{
                        fontSize: "0.72rem",
                        fontWeight: 700,
                        padding: "0.2rem 0.5rem",
                        borderRadius: "9999px",
                        backgroundColor: "#EFF6FF",
                        color: "#2563EB",
                        border: "1px solid rgba(37, 99, 235, 0.2)",
                      }}
                    >
                      Dispatched
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Quick Metric Bar */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.5rem",
                  padding: "0.75rem 1rem",
                  backgroundColor: "#F8FAFC",
                  borderTop: "1px solid rgba(226, 232, 240, 0.9)",
                  fontSize: "0.72rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                  <TrendingUp size={14} color="#10B981" />
                  <div>
                    <span style={{ color: "#64748B" }}>Stock Accuracy: </span>
                    <strong style={{ color: "#0F172A" }}>99.98%</strong>
                  </div>
                </div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: "0.4rem" }}>
                  <Activity size={14} color="#4338CA" />
                  <span style={{ color: "#4338CA", fontWeight: 700 }}>
                    Audited & Verified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
