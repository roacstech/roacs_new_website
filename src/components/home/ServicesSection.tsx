"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { ServiceCard } from "@/components/common/ServiceCard";
import { Button } from "@/components/common/Button";
import { Reveal } from "@/components/common/Reveal";
import { servicesData } from "@/data/services";
import { ArrowRight, Package, CheckCircle2 } from "lucide-react";

export function ServicesSection() {
  return (
    <section className="section section-subtle" id="services">
      <Container wide>
        <Reveal delay={0.1}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "space-between",
              marginBottom: "3rem",
            }}
            className="services-header-row"
          >
            <SectionHeading
              eyebrow="Core Capabilities"
              eyebrowVariant="accent"
              title="Comprehensive technology services for modern enterprise growth."
              description="From concept and architecture to production deployment and lifecycle support, we provide end-to-end software engineering capabilities tailored to enterprise demands."
            />
          </div>
        </Reveal>

        {/* Services Grid */}
        <div className="grid-3" style={{ marginBottom: "3.5rem" }}>
          {servicesData.map((service, index) => (
            <Reveal key={service.id} delay={0.1 + (index % 3) * 0.1}>
              <ServiceCard service={service} />
            </Reveal>
          ))}
        </div>

        {/* Proprietary Product Spotlight Banner: Roacs Material Management */}
        <Reveal delay={0.3}>
          <div
            style={{
              backgroundColor: "var(--color-primary-navy)",
              color: "#FFFFFF",
              borderRadius: "var(--radius-lg)",
              border: "1px solid rgba(255, 255, 255, 0.12)",
              padding: "2.5rem 2.25rem",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "2rem",
              alignItems: "center",
              boxShadow: "var(--shadow-xl)",
            }}
            className="product-spotlight-grid"
          >
            <div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.3rem 0.75rem",
                  backgroundColor: "rgba(237, 25, 24, 0.15)",
                  color: "var(--color-brand-accent)",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.78rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "1rem",
                }}
              >
                <Package size={14} />
                <span>Proprietary Enterprise Solution</span>
              </div>

              <h3
                style={{
                  fontSize: "clamp(1.5rem, 2.5vw, 2rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginBottom: "0.75rem",
                }}
              >
                Roacs Material Management
              </h3>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--color-muted-blue)",
                  lineHeight: 1.6,
                  marginBottom: "1.5rem",
                  maxWidth: "600px",
                }}
              >
                Efficiently managing the flow of goods across warehouses, fabrication facilities, and distribution centers. Streamline purchase orders, inventory reconciliation, and tracking with end-to-end traceability.
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "1.25rem",
                  marginBottom: "1.75rem",
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.875rem", color: "#FFFFFF" }}>Real-time stock auditing</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.875rem", color: "#FFFFFF" }}>Automated dispatch manifests</span>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <CheckCircle2 size={16} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.875rem", color: "#FFFFFF" }}>Multi-location governance</span>
                </div>
              </div>

              <Button
                href="/contact"
                variant="primary"
                icon={<ArrowRight size={16} />}
              >
                Request Product Demo
              </Button>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: "360px",
                  height: "240px",
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  padding: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Image
                  src="/logos/material-management.png"
                  alt="Roacs Material Management Software"
                  fill
                  style={{ objectFit: "contain", padding: "1.5rem" }}
                />
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      
    </section>
  );
}
