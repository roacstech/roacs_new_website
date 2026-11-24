"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import {
  ArrowRight,
  Play,
  Zap,
  ShieldCheck,
  BarChart3,
  Layers,
  Disc,
  Droplets,
  Hexagon,
  AlertTriangle,
  XCircle
} from "lucide-react";

interface StockItem {
  id: string;
  sku: string;
  name: string;
  category: "metals" | "gaskets" | "chemicals" | "fasteners";
  categoryLabel: string;
  facility: string;
  bay: string;
  quantity: string;
  capacityPercent: number;
  status: "In Stock" | "Low Stock" | "Critical";
  statusType: "success" | "warning" | "danger";
  reorderPoint: string;
  unitCost: string;
  accentColor: string;
  icon: React.ElementType;
  image: string;
  warehouseCode: string;
}

const STOCK_DATA: StockItem[] = [
  {
    id: "1",
    sku: "SKU-2321-364",
    name: "High-Tensile Steel Rods (12mm)",
    category: "metals",
    categoryLabel: "Raw Metals Division",
    facility: "Warehouse E-14",
    bay: "Rack 08-B",
    quantity: "2,450 kg",
    capacityPercent: 88,
    status: "In Stock",
    statusType: "success",
    reorderPoint: "800 kg",
    unitCost: "$3.40 / kg",
    accentColor: "#0284C7",
    icon: Layers,
    image: "/images/services/material-management.jpg",
    warehouseCode: "WH E-14",
  },
  {
    id: "2",
    sku: "SKU-4419-268",
    name: "Industrial Silicone Gaskets",
    category: "gaskets",
    categoryLabel: "Precision Gaskets & Seals",
    facility: "Central Depot",
    bay: "Bay 02-C",
    quantity: "140 pcs",
    capacityPercent: 18,
    status: "Low Stock",
    statusType: "warning",
    reorderPoint: "300 pcs",
    unitCost: "$18.50 / pc",
    accentColor: "#F59E0B",
    icon: Disc,
    image: "/images/products/material-management-o2.1.jpg",
    warehouseCode: "CENTRAL DEPOT",
  },
  {
    id: "3",
    sku: "SKU-2717-884",
    name: "Hydraulic Fluid Type-IV (20L)",
    category: "chemicals",
    categoryLabel: "Hydraulic & Chemical Fluids",
    facility: "Main Yard",
    bay: "Tank C-4",
    quantity: "85 drums",
    capacityPercent: 72,
    status: "In Stock",
    statusType: "success",
    reorderPoint: "25 drums",
    unitCost: "$142.00 / drum",
    accentColor: "#0D9488",
    icon: Droplets,
    image: "/images/about/cloud-infrastructure.jpg",
    warehouseCode: "MAIN YARD T-4",
  },
  {
    id: "4",
    sku: "SKU-1104-546",
    name: "Titanium Fasteners M8x40",
    category: "fasteners",
    categoryLabel: "Structural Fasteners",
    facility: "Warehouse A-1",
    bay: "Bin 14-D",
    quantity: "12 boxes",
    capacityPercent: 5,
    status: "Critical",
    statusType: "danger",
    reorderPoint: "80 boxes",
    unitCost: "$95.00 / box",
    accentColor: "#EF4444",
    icon: Hexagon,
    image: "/images/about/quality.jpg",
    warehouseCode: "WH A-1 BIN 14",
  },
];

export function MaterialHero() {
  const [activeTab, setActiveTab] = useState<"all" | "critical" | "metals" | "fluids">("all");

  const filteredItems = useMemo(() => {
    return STOCK_DATA.filter((item) => {
      if (activeTab === "critical" && item.statusType === "success") return false;
      if (activeTab === "metals" && item.category !== "metals") return false;
      if (activeTab === "fluids" && item.category !== "chemicals") return false;
      return true;
    });
  }, [activeTab]);

  return (
    <section className="material-hero-section">
      {/* Industrial Aggregate & Quarry Conveyor Facility Background Image */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          overflow: "hidden"
        }}
        aria-hidden="true"
      >
        <Image
          src="/images/material/quarry-conveyor-hero-bg.jpg"
          alt="Modern Industrial Aggregate and Raw Materials Conveyor Facility"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center right", opacity: 0.88 }}
        />
        {/* Directional Soft Scrim: Opaque on left for pristine text legibility, crystal clear on right */}
        <div 
          style={{ 
            position: "absolute", 
            inset: 0, 
            background: "linear-gradient(90deg, rgba(255, 255, 255, 0.94) 0%, rgba(255, 255, 255, 0.82) 38%, rgba(255, 255, 255, 0.42) 70%, rgba(255, 255, 255, 0.15) 100%)" 
          }} 
        />
      </div>

      {/* Precision Engineering Grid Background (Subtle Overlay) */}
      <div className="material-hero-grid-bg" style={{ opacity: 0.15 }} aria-hidden="true" />

      {/* Gentle Ambient Top Radial Light */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "380px",
          pointerEvents: "none",
          opacity: 0.5,
          background: "radial-gradient(circle 450px at 50% -20%, rgba(99, 102, 241, 0.12), rgba(37, 99, 235, 0.04), transparent 70%)",
        }}
        aria-hidden="true"
      />

      <Container wide>
        <div className="material-hero-layout" style={{ position: "relative", zIndex: 1 }}>

          {/* =========================================================
              Left Column: Executive Value Proposition
             ========================================================= */}
          <div>
            {/* Headline */}
            <h1
              style={{
                fontSize: "clamp(2.35rem, 4.1vw, 3.25rem)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.15,
                letterSpacing: "-0.03em",
                marginBottom: "1rem",
              }}
            >
              Roacs Material<br />
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
            </h1>

            {/* Subheading */}
            <p
              style={{
                fontSize: "1.025rem",
                color: "#475569",
                lineHeight: 1.62,
                maxWidth: "540px",
                marginBottom: "1.75rem",
              }}
            >
              An enterprise-grade supply chain control tower engineered by Roacs Corporation. Eliminate stock-outs, automate multi-tiered procurement cycles, and synchronize inventory flow with sub-second auditability.
            </p>

            {/* Dual Action CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "1.85rem" }}>
              <Link href="/contact" className="material-hero-primary-btn" style={{ padding: "0.82rem 1.85rem", fontSize: "0.95rem" }}>
                <span>Schedule Platform Demo</span>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    backgroundColor: "rgba(255, 255, 255, 0.22)",
                  }}
                >
                  <ArrowRight size={13} color="#FFFFFF" />
                </span>
              </Link>

              <Link href="#capabilities" className="material-hero-secondary-btn" style={{ padding: "0.82rem 1.7rem", fontSize: "0.95rem" }}>
                <span
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: 22,
                    height: 22,
                    borderRadius: "50%",
                    backgroundColor: "#0F172A",
                    color: "#FFFFFF",
                  }}
                >
                  <Play size={11} fill="#FFFFFF" color="#FFFFFF" style={{ marginLeft: "1px" }} />
                </span>
                <span>View System Capabilities</span>
              </Link>
            </div>

            {/* 3 Executive Trust Pillars */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                gap: "0.85rem",
                paddingTop: "1.25rem",
                borderTop: "1px solid rgba(226, 232, 240, 0.9)",
              }}
            >
              <div className="material-feature-badge">
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "9px",
                    backgroundColor: "rgba(99, 102, 241, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6366F1",
                    flexShrink: 0,
                  }}
                >
                  <Zap size={17} />
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0F172A", lineHeight: 1.25 }}>
                    Sub-Second Sync
                  </div>
                  <div style={{ fontSize: "0.725rem", color: "#64748B", marginTop: "3px" }}>
                    Live multi-hub socket
                  </div>
                </div>
              </div>

              <div className="material-feature-badge">
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "9px",
                    backgroundColor: "rgba(16, 185, 129, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#059669",
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={17} />
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0F172A", lineHeight: 1.25 }}>
                    Automated POs
                  </div>
                  <div style={{ fontSize: "0.725rem", color: "#64748B", marginTop: "3px" }}>
                    Rule-based routing
                  </div>
                </div>
              </div>

              <div className="material-feature-badge">
                <div
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: "9px",
                    backgroundColor: "rgba(37, 99, 235, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2563EB",
                    flexShrink: 0,
                  }}
                >
                  <BarChart3 size={17} />
                </div>
                <div style={{ textAlign: "left" }}>
                  <div style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0F172A", lineHeight: 1.25 }}>
                    Predictive Stock
                  </div>
                  <div style={{ fontSize: "0.725rem", color: "#64748B", marginTop: "3px" }}>
                    Dynamic thresholds
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              Right Column: Compact Serpentine Flow Console
             ========================================================= */}
          <div className="warehouse-console-wrapper">
            <div className="warehouse-glass-console">

              {/* Facility Filter Tabs */}
              <div className="console-filter-bar">
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", flexWrap: "wrap", width: "100%" }}>
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`console-tab-btn ${activeTab === "all" ? "console-tab-btn-active" : "console-tab-btn-inactive"}`}
                  >
                    All Facilities ({STOCK_DATA.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("critical")}
                    className={`console-tab-btn ${activeTab === "critical" ? "console-tab-btn-alert" : "console-tab-btn-inactive"}`}
                  >
                    Alerts &amp; Low (2)
                  </button>
                  <button
                    onClick={() => setActiveTab("metals")}
                    className={`console-tab-btn ${activeTab === "metals" ? "console-tab-btn-active" : "console-tab-btn-inactive"}`}
                  >
                    Raw Metals
                  </button>
                  <button
                    onClick={() => setActiveTab("fluids")}
                    className={`console-tab-btn ${activeTab === "fluids" ? "console-tab-btn-active" : "console-tab-btn-inactive"}`}
                  >
                    Fluids
                  </button>
                </div>
              </div>

              {/* Serpentine Flow Pipeline (Compact S-Track) */}
              <div className="serpentine-pipeline-wrap">
                {/* Continuous Winding Serpentine Snake Path SVG (when all 4 items displayed) */}
                {filteredItems.length >= 4 && (
                  <svg
                    className="serpentine-track-svg"
                    viewBox="0 0 560 372"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 70 42 L 490 42 A 48 48 0 0 1 490 138 L 70 138 A 48 48 0 0 0 70 234 L 490 234 A 48 48 0 0 1 490 330"
                      stroke="url(#serpentineGradient)"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="5 3"
                      opacity="0.85"
                    />
                    <defs>
                      <linearGradient id="serpentineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#4338CA" />
                        <stop offset="40%" stopColor="#0284C7" />
                        <stop offset="70%" stopColor="#0D9488" />
                        <stop offset="100%" stopColor="#EF4444" />
                      </linearGradient>
                    </defs>
                  </svg>
                )}

                {filteredItems.length === 0 ? (
                  <div style={{ padding: "2.5rem 1rem", textAlign: "center", fontSize: "0.825rem", color: "#64748B" }}>
                    No matching inventory items found for current filter.
                  </div>
                ) : (
                  filteredItems.map((item, index) => {
                    const ItemIcon = item.icon;
                    const isEven = index % 2 === 1;

                    return (
                      <div
                        key={item.id}
                        className={`serpentine-row ${isEven ? "serpentine-row-even" : ""}`}
                      >
                        {/* Visual Capsule (Compact Stadium Shape with Photo & Capacity Ring) */}
                        <div
                          className="serpentine-capsule"
                          style={{ borderColor: item.accentColor }}
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="140px"
                            style={{ objectFit: "cover", objectPosition: "center" }}
                          />
                          {/* Dark Scrim */}
                          <div
                            style={{
                              position: "absolute",
                              inset: 0,
                              background: "linear-gradient(180deg, rgba(15, 23, 42, 0.2) 0%, rgba(15, 23, 42, 0.78) 100%)"
                            }}
                          />

                          {/* Top Badge: Warehouse ID Tag */}
                          <div
                            style={{
                              position: "absolute",
                              top: "6px",
                              left: isEven ? "auto" : "12px",
                              right: isEven ? "12px" : "auto",
                              backgroundColor: "rgba(15, 23, 42, 0.78)",
                              backdropFilter: "blur(4px)",
                              color: "#FFFFFF",
                              fontSize: "0.58rem",
                              fontWeight: 800,
                              padding: "0.1rem 0.4rem",
                              borderRadius: "9999px",
                              letterSpacing: "0.05em",
                              border: "1px solid rgba(255, 255, 255, 0.2)",
                            }}
                          >
                            {item.warehouseCode}
                          </div>

                          {/* Center / Bottom: Compact Circular Capacity Gauge Meter */}
                          <div
                            style={{
                              position: "absolute",
                              bottom: "6px",
                              left: "50%",
                              transform: "translateX(-50%)",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.3rem",
                            }}
                          >
                            <div style={{ position: "relative", width: 30, height: 30 }}>
                              <svg width="30" height="30" viewBox="0 0 30 30" style={{ transform: "rotate(-90deg)" }}>
                                <circle
                                  cx="15"
                                  cy="15"
                                  r="11.5"
                                  fill="none"
                                  stroke="rgba(255, 255, 255, 0.2)"
                                  strokeWidth="2.5"
                                />
                                <circle
                                  cx="15"
                                  cy="15"
                                  r="11.5"
                                  fill="none"
                                  stroke={item.accentColor}
                                  strokeWidth="2.5"
                                  strokeDasharray={72.26}
                                  strokeDashoffset={72.26 * (1 - item.capacityPercent / 100)}
                                  strokeLinecap="round"
                                />
                              </svg>
                              <span
                                style={{
                                  position: "absolute",
                                  inset: 0,
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  fontSize: "0.58rem",
                                  fontWeight: 800,
                                  color: "#FFFFFF",
                                  fontFamily: "monospace",
                                }}
                              >
                                {item.capacityPercent}%
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Content Card (Compact FurniFlex Detail Card Style) */}
                        <div className="serpentine-card">
                          {/* Top: Category Pill Badge */}
                          <div
                            className="serpentine-pill-badge"
                            style={{
                              backgroundColor: `${item.accentColor}14`,
                              color: item.accentColor,
                              border: `1px solid ${item.accentColor}30`,
                            }}
                          >
                            <ItemIcon size={10} />
                            <span>{item.categoryLabel}</span>
                          </div>

                          {/* Item Name & Quantity */}
                          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
                            <div style={{ fontWeight: 700, color: "#0F172A", fontSize: "0.825rem", lineHeight: 1.25 }}>
                              {item.name}
                            </div>
                            <div style={{ fontFamily: "monospace", fontWeight: 800, color: "#0F172A", fontSize: "0.85rem", flexShrink: 0 }}>
                              {item.quantity}
                            </div>
                          </div>

                          {/* SKU Chip & Warehouse Location */}
                          <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", fontSize: "0.68rem", color: "#64748B", marginTop: "0.2rem", flexWrap: "wrap" }}>
                            <span style={{ fontFamily: "monospace", fontWeight: 600, backgroundColor: "#F1F5F9", padding: "0.08rem 0.35rem", borderRadius: "4px", color: "#475569", border: "1px solid #E2E8F0" }}>
                              {item.sku}
                            </span>
                            <span>•</span>
                            <span>{item.facility}</span>
                            <span>•</span>
                            <span style={{ color: "#94A3B8" }}>{item.bay}</span>
                          </div>

                          {/* Bottom Status & Reorder Threshold */}
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.45rem", paddingTop: "0.35rem", borderTop: "1px dashed rgba(226, 232, 240, 0.9)" }}>
                            <div style={{ fontSize: "0.68rem", color: "#64748B" }}>
                              <span style={{ fontWeight: 600, color: "#475569" }}>Reorder: </span>
                              {item.reorderPoint} ({item.unitCost})
                            </div>

                            <div>
                              {item.statusType === "success" && (
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.2rem", fontSize: "0.65rem", fontWeight: 700, color: "#059669", backgroundColor: "#ECFDF5", border: "1px solid #A7F3D0", padding: "0.1rem 0.45rem", borderRadius: "9999px" }}>
                                  <span>↗</span> In Stock
                                </span>
                              )}
                              {item.statusType === "warning" && (
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.2rem", fontSize: "0.65rem", fontWeight: 700, color: "#D97706", backgroundColor: "#FFFBEB", border: "1px solid #FDE68A", padding: "0.1rem 0.45rem", borderRadius: "9999px" }}>
                                  <AlertTriangle size={9} color="#D97706" /> Low Stock
                                </span>
                              )}
                              {item.statusType === "danger" && (
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.2rem", fontSize: "0.65rem", fontWeight: 700, color: "#DC2626", backgroundColor: "#FEF2F2", border: "1px solid #FECACA", padding: "0.1rem 0.45rem", borderRadius: "9999px" }}>
                                  <XCircle size={9} color="#DC2626" /> Critical
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
