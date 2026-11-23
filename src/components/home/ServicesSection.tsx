"use client";

import React from "react";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { servicesData } from "@/data/services";
import { 
  ArrowRight, 
  Package, 
  CheckCircle2, 
  Boxes 
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
              backgroundColor: "var(--color-primary-navy)",
              color: "#FFFFFF",
              borderRadius: "var(--radius-lg)",
              border: "1px solid rgba(255, 255, 255, 0.14)",
              padding: "3rem 2.5rem",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2.5rem",
              alignItems: "center",
              boxShadow: "var(--shadow-xl)",
              position: "relative",
              overflow: "hidden",
            }}
            className="product-spotlight-grid"
          >
            {/* Ambient Red Glow */}
            <div
              style={{
                position: "absolute",
                top: "-15%",
                right: "10%",
                width: "420px",
                height: "420px",
                borderRadius: "50%",
                background: "radial-gradient(circle, rgba(237, 25, 24, 0.18) 0%, transparent 70%)",
                filter: "blur(80px)",
                pointerEvents: "none",
              }}
            />

            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.35rem 0.85rem",
                  borderRadius: "var(--radius-full)",
                  backgroundColor: "rgba(237, 25, 24, 0.15)",
                  border: "1px solid rgba(237, 25, 24, 0.3)",
                  color: "var(--color-brand-accent)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "1.25rem",
                }}
              >
                <Package size={14} />
                <span>Proprietary SaaS Product</span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginBottom: "1rem",
                  lineHeight: 1.2,
                }}
              >
                Roacs Material Management Platform
              </h3>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--color-muted-blue)",
                  lineHeight: 1.65,
                  marginBottom: "1.75rem",
                }}
              >
                An enterprise-grade supply chain and inventory management software engineered to streamline inventory tracking, multi-warehouse flow of goods, supplier procurement, and audit compliance in real time.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "0.85rem",
                  marginBottom: "2rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.875rem", color: "#FFFFFF" }}>Real-time Multi-Warehouse Stock</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.875rem", color: "#FFFFFF" }}>Automated Purchase Requisitions</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.875rem", color: "#FFFFFF" }}>Barcode & RFID Flow Control</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.6rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.875rem", color: "#FFFFFF" }}>Instant Low-Stock Dispatches</span>
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
                <Button
                  href="/material-management"
                  variant="primary"
                  icon={<ArrowRight size={16} />}
                >
                  Explore Product Platform
                </Button>
                <Button
                  href="/contact"
                  variant="secondary"
                >
                  Request Live Demo
                </Button>
              </div>
            </div>

            {/* Right: Simulated Interactive Inventory Control Console */}
            <div
              style={{
                backgroundColor: "rgba(10, 18, 33, 0.85)",
                border: "1px solid rgba(255, 255, 255, 0.12)",
                borderRadius: "var(--radius-md)",
                padding: "1.75rem",
                backdropFilter: "blur(14px)",
                boxShadow: "0 16px 36px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingBottom: "1rem",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
                  marginBottom: "1.25rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <Boxes size={18} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#FFFFFF" }}>
                    Warehouse Inventory Monitor
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    padding: "0.2rem 0.5rem",
                    borderRadius: "4px",
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    color: "#34D399",
                    fontWeight: 600,
                  }}
                >
                  CONNECTED
                </span>
              </div>

              {/* Stock Items Table */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.25rem" }}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.6rem 0.85rem",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: "#FFFFFF" }}>SKU-9021 Industrial Steel Rods</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--color-muted-blue)" }}>Warehouse B-4 â€¢ Lot #412</div>
                  </div>
                  <span style={{ color: "#34D399", fontWeight: 700, fontSize: "0.78rem" }}>2,450 Units OK</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.6rem 0.85rem",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: "#FFFFFF" }}>SKU-4819 Silicon Gaskets</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--color-muted-blue)" }}>Central Hub â€¢ Bin #14</div>
                  </div>
                  <span style={{ color: "#F59E0B", fontWeight: 700, fontSize: "0.78rem" }}>Low: 140 Units</span>
                </div>

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "0.6rem 0.85rem",
                    backgroundColor: "rgba(255, 255, 255, 0.04)",
                    borderRadius: "4px",
                    fontSize: "0.8rem",
                  }}
                >
                  <div>
                    <div style={{ fontWeight: 600, color: "#FFFFFF" }}>PO-8840 Auto-Requisition</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--color-muted-blue)" }}>Supplier: Global Metals Corp</div>
                  </div>
                  <span style={{ color: "#38BDF8", fontWeight: 700, fontSize: "0.78rem" }}>Dispatched</span>
                </div>
              </div>

              {/* Bottom Quick Metric */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "0.75rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                  fontSize: "0.75rem",
                  color: "var(--color-muted-blue)",
                }}
              >
                <span>Stock Accuracy: 99.98%</span>
                <span style={{ color: "var(--color-brand-accent)", fontWeight: 600 }}>Audited & Verified</span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
