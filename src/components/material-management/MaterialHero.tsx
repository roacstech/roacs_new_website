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
  Search, 
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
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return STOCK_DATA.filter((item) => {
      if (activeTab === "critical" && item.statusType === "success") return false;
      if (activeTab === "metals" && item.category !== "metals") return false;
      if (activeTab === "fluids" && item.category !== "chemicals") return false;

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          item.name.toLowerCase().includes(query) ||
          item.sku.toLowerCase().includes(query) ||
          item.facility.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [activeTab, searchQuery]);

  return (
    <section className="material-hero-section">
      {/* High-Tech Geometric Mesh Background */}
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
          src="/images/material-hero-bg.jpg"
          alt="Tech Mesh Background"
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center", opacity: 0.22 }}
        />
        <div 
          style={{ 
            position: "absolute", 
            inset: 0, 
            background: "radial-gradient(ellipse at 50% 30%, rgba(255, 255, 255, 0.72) 0%, rgba(255, 255, 255, 0.94) 100%)" 
          }} 
        />
      </div>

      {/* Precision Engineering Grid Background */}
      <div className="material-hero-grid-bg" aria-hidden="true" />

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
                fontSize: "clamp(2.5rem, 4.5vw, 3.5rem)",
                fontWeight: 800,
                color: "#0F172A",
                lineHeight: 1.12,
                letterSpacing: "-0.03em",
                marginBottom: "1.25rem",
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
                fontSize: "1.1rem",
                color: "#475569",
                lineHeight: 1.65,
                maxWidth: "540px",
                marginBottom: "2rem",
              }}
            >
              An enterprise-grade supply chain control tower engineered by Roacs Corporation. Eliminate stock-outs, automate multi-tiered procurement cycles, and synchronize inventory flow with sub-second auditability.
            </p>

            {/* Dual Action CTAs */}
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
              <Link href="/contact" className="material-hero-primary-btn">
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

              <Link href="#capabilities" className="material-hero-secondary-btn">
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
                  <Play size={10} fill="#FFFFFF" color="#FFFFFF" style={{ marginLeft: "1px" }} />
                </span>
                <span>View System Capabilities</span>
              </Link>
            </div>

            {/* 3 Executive Trust Pillars */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "0.85rem",
                paddingTop: "1.5rem",
                borderTop: "1px solid rgba(226, 232, 240, 0.9)",
              }}
            >
              <div className="material-feature-badge">
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "8px",
                    backgroundColor: "rgba(99, 102, 241, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#6366F1",
                    flexShrink: 0,
                  }}
                >
                  <Zap size={16} />
                </div>
                <div>
                  <div style={{ fontSize: "0.825rem", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>
                    Sub-Second Sync
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B", marginTop: "2px" }}>
                    Live multi-hub socket
                  </div>
                </div>
              </div>

              <div className="material-feature-badge">
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "8px",
                    backgroundColor: "rgba(16, 185, 129, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#059669",
                    flexShrink: 0,
                  }}
                >
                  <ShieldCheck size={16} />
                </div>
                <div>
                  <div style={{ fontSize: "0.825rem", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>
                    Automated POs
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B", marginTop: "2px" }}>
                    Rule-based routing
                  </div>
                </div>
              </div>

              <div className="material-feature-badge">
                <div
                  style={{
                    width: 32,
                    height: 32,
                    borderRadius: "8px",
                    backgroundColor: "rgba(37, 99, 235, 0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#2563EB",
                    flexShrink: 0,
                  }}
                >
                  <BarChart3 size={16} />
                </div>
                <div>
                  <div style={{ fontSize: "0.825rem", fontWeight: 700, color: "#0F172A", lineHeight: 1.2 }}>
                    Predictive Stock
                  </div>
                  <div style={{ fontSize: "0.72rem", color: "#64748B", marginTop: "2px" }}>
                    Dynamic thresholds
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* =========================================================
              Right Column: Control Tower Console (Serpentine Flow & Grid)
             ========================================================= */}
          <div className="warehouse-console-wrapper">
            <div className="warehouse-glass-console">
              
              {/* Chrome Top Bar: Traffic lights + Roacs Title */}
              <div className="console-top-bar">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                  <div className="console-traffic-pips">
                    <span className="console-pip console-pip-red" />
                    <span className="console-pip console-pip-yellow" />
                    <span className="console-pip console-pip-green" />
                  </div>

                  <div style={{ height: "16px", width: "1px", backgroundColor: "#E2E8F0" }} />

                  {/* Roacs Brand Mark & Header */}
                  <div style={{ display: "flex", alignItems: "center", gap: "0.45rem" }}>
                    <div
                      style={{
                        width: 18,
                        height: 18,
                        borderRadius: "4px",
                        backgroundColor: "#ED1918",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#FFFFFF",
                        fontSize: "0.6rem",
                        fontWeight: 900,
                        boxShadow: "0 1px 4px rgba(237, 25, 24, 0.4)",
                      }}
                    >
                      ▲
                    </div>
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#0F172A" }}>
                      Live Warehouse Stock Balances
                    </span>
                  </div>
                </div>
              </div>

              {/* Sub-Header: Facility Tabs + Live Search Filter */}
              <div className="console-filter-bar">
                <div style={{ display: "flex", alignItems: "center", gap: "0.35rem", flexWrap: "wrap" }}>
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

                <div className="console-search-box">
                  <Search size={13} color="#94A3B8" style={{ position: "absolute", left: "0.65rem", pointerEvents: "none" }} />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Filter SKUs..."
                    className="console-search-input"
                  />
                </div>
              </div>

              {/* Serpentine Flow Pipeline (FurniFlex Style) */}
              <div className="serpentine-pipeline-wrap">
                {/* Continuous Winding Serpentine Snake Path SVG (when all 4 items displayed) */}
                {filteredItems.length >= 4 && (
                  <svg 
                    className="serpentine-track-svg" 
                    viewBox="0 0 600 480" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M 90 20 A 45 45 0 0 0 90 110 L 510 110 A 45 45 0 0 1 510 230 L 90 230 A 45 45 0 0 0 90 350 L 510 350 A 45 45 0 0 1 510 460"
                      stroke="url(#serpentineGradient)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeDasharray="4 2"
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
                  <div style={{ padding: "3rem 1rem", textAlign: "center", fontSize: "0.85rem", color: "#64748B" }}>
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
                        {/* Visual Capsule (Stadium Shape with Photo & Capacity Ring) */}
                        <div 
                          className="serpentine-capsule"
                          style={{ borderColor: item.accentColor }}
                        >
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            sizes="(max-width: 640px) 100vw, 200px"
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
                              top: "8px",
                              left: isEven ? "auto" : "16px",
                              right: isEven ? "16px" : "auto",
                              backgroundColor: "rgba(15, 23, 42, 0.75)",
                              backdropFilter: "blur(4px)",
                              color: "#FFFFFF",
                              fontSize: "0.62rem",
                              fontWeight: 800,
                              padding: "0.15rem 0.5rem",
                              borderRadius: "9999px",
                              letterSpacing: "0.06em",
                              border: "1px solid rgba(255, 255, 255, 0.2)",
                            }}
                          >
                            {item.warehouseCode}
                          </div>

                          {/* Center / Bottom: Circular Capacity Gauge Meter */}
                          <div 
                            style={{ 
                              position: "absolute", 
                              bottom: "8px", 
                              left: "50%", 
                              transform: "translateX(-50%)",
                              display: "flex",
                              alignItems: "center",
                              gap: "0.45rem",
                            }}
                          >
                            <div style={{ position: "relative", width: 36, height: 36 }}>
                              <svg width="36" height="36" viewBox="0 0 36 36" style={{ transform: "rotate(-90deg)" }}>
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="14"
                                  fill="none"
                                  stroke="rgba(255, 255, 255, 0.2)"
                                  strokeWidth="3"
                                />
                                <circle
                                  cx="18"
                                  cy="18"
                                  r="14"
                                  fill="none"
                                  stroke={item.accentColor}
                                  strokeWidth="3"
                                  strokeDasharray={87.96}
                                  strokeDashoffset={87.96 * (1 - item.capacityPercent / 100)}
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
                                  fontSize: "0.65rem",
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

                        {/* Content Card (FurniFlex Detail Card Style) */}
                        <div className="serpentine-card">
                          {/* Top: Category Pill Badge (Matching Image 1 badge) */}
                          <div 
                            className="serpentine-pill-badge"
                            style={{ 
                              backgroundColor: `${item.accentColor}14`, 
                              color: item.accentColor,
                              border: `1px solid ${item.accentColor}30`,
                            }}
                          >
                            <ItemIcon size={11} />
                            <span>{item.categoryLabel}</span>
                          </div>

                          {/* Item Name */}
                          <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: "0.5rem" }}>
                            <div style={{ fontWeight: 800, color: "#0F172A", fontSize: "0.925rem", lineHeight: 1.25 }}>
                              {item.name}
                            </div>
                            <div style={{ fontFamily: "monospace", fontWeight: 800, color: "#0F172A", fontSize: "0.95rem", flexShrink: 0 }}>
                              {item.quantity}
                            </div>
                          </div>

                          {/* SKU Chip & Warehouse Location */}
                          <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.72rem", color: "#64748B", marginTop: "0.3rem", flexWrap: "wrap" }}>
                            <span style={{ fontFamily: "monospace", fontWeight: 600, backgroundColor: "#F1F5F9", padding: "0.1rem 0.4rem", borderRadius: "4px", color: "#475569", border: "1px solid #E2E8F0" }}>
                              {item.sku}
                            </span>
                            <span>•</span>
                            <span>{item.facility}</span>
                            <span>•</span>
                            <span style={{ color: "#94A3B8" }}>{item.bay}</span>
                          </div>

                          {/* Bottom Status & Reorder Threshold */}
                          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "0.6rem", paddingTop: "0.45rem", borderTop: "1px dashed rgba(226, 232, 240, 0.9)" }}>
                            <div style={{ fontSize: "0.72rem", color: "#64748B" }}>
                              <span style={{ fontWeight: 600, color: "#475569" }}>Reorder: </span>
                              {item.reorderPoint} ({item.unitCost})
                            </div>

                            <div>
                              {item.statusType === "success" && (
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", fontSize: "0.68rem", fontWeight: 700, color: "#059669", backgroundColor: "#ECFDF5", border: "1px solid #A7F3D0", padding: "0.12rem 0.5rem", borderRadius: "9999px" }}>
                                  <span>↗</span> In Stock
                                </span>
                              )}
                              {item.statusType === "warning" && (
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", fontSize: "0.68rem", fontWeight: 700, color: "#D97706", backgroundColor: "#FFFBEB", border: "1px solid #FDE68A", padding: "0.12rem 0.5rem", borderRadius: "9999px" }}>
                                  <AlertTriangle size={10} color="#D97706" /> Low Stock
                                </span>
                              )}
                              {item.statusType === "danger" && (
                                <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", fontSize: "0.68rem", fontWeight: 700, color: "#DC2626", backgroundColor: "#FEF2F2", border: "1px solid #FECACA", padding: "0.12rem 0.5rem", borderRadius: "9999px" }}>
                                  <XCircle size={10} color="#DC2626" /> Critical
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
