"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/common/Container";
import { 
  ArrowRight, 
  Play, 
  Activity, 
  TrendingUp, 
  Gauge, 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Layers, 
  Disc, 
  Droplets, 
  Hexagon,
  Search,
  AlertTriangle,
  XCircle,
  Building2
} from "lucide-react";

interface StockItem {
  id: string;
  sku: string;
  name: string;
  category: "metals" | "gaskets" | "chemicals" | "fasteners";
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
}

const STOCK_DATA: StockItem[] = [
  {
    id: "1",
    sku: "SKU-2321-364",
    name: "High-Tensile Steel Rods (12mm)",
    category: "metals",
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
  },
  {
    id: "2",
    sku: "SKU-4419-268",
    name: "Industrial Silicone Gaskets",
    category: "gaskets",
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
  },
  {
    id: "3",
    sku: "SKU-2717-884",
    name: "Hydraulic Fluid Type-IV (20L)",
    category: "chemicals",
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
  },
  {
    id: "4",
    sku: "SKU-1104-546",
    name: "Titanium Fasteners M8x40",
    category: "fasteners",
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
              Right Column: Control Tower Console
             ========================================================= */}
          <div className="warehouse-console-wrapper">
            <div className="warehouse-glass-console">
              
              {/* Chrome Top Bar: Traffic lights + Roacs Title + Pulse Telemetry */}
              <div className="console-top-bar">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div className="console-traffic-pips">
                    <span className="console-pip console-pip-red" />
                    <span className="console-pip console-pip-yellow" />
                    <span className="console-pip console-pip-green" />
                  </div>

                  <div style={{ height: "16px", width: "1px", backgroundColor: "#E2E8F0" }} />

                  <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                    {/* Roacs Red Triangle Logo Mark */}
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M12 2L2 20H22L12 2Z" fill="#ED1918" />
                      <path d="M12 7.5L6.5 17.5H17.5L12 7.5Z" fill="#FFFFFF" />
                      <circle cx="12" cy="14" r="1.8" fill="#ED1918" />
                    </svg>
                    <span style={{ fontSize: "0.88rem", fontWeight: 700, color: "#0F172A", letterSpacing: "-0.01em" }}>
                      Live Warehouse Stock Balances
                    </span>
                  </div>
                </div>

                {/* Auto Sync Active Pill */}
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.4rem",
                    fontSize: "0.72rem",
                    backgroundColor: "rgba(16, 185, 129, 0.1)",
                    color: "#059669",
                    padding: "0.25rem 0.65rem",
                    borderRadius: "9999px",
                    fontWeight: 700,
                    border: "1px solid rgba(16, 185, 129, 0.2)",
                  }}
                >
                  <span
                    style={{
                      width: 6,
                      height: 6,
                      borderRadius: "50%",
                      backgroundColor: "#10B981",
                      boxShadow: "0 0 6px rgba(16, 185, 129, 0.8)",
                    }}
                  />
                  <span>Auto-Sync Active</span>
                  <Activity size={11} color="#059669" />
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

              {/* Dense High-Precision Inventory Records */}
              <div style={{ padding: "0.85rem 1.15rem", display: "flex", flexDirection: "column", gap: "0.65rem" }}>
                {filteredItems.length === 0 ? (
                  <div style={{ padding: "2rem", textAlign: "center", fontSize: "0.825rem", color: "#64748B" }}>
                    No matching inventory items found.
                  </div>
                ) : (
                  filteredItems.map((item) => {
                    const ItemIcon = item.icon;
                    return (
                      <div key={item.id} className="stock-row-card">
                        {/* Colored Left Accent Stripe */}
                        <div
                          className="stock-row-stripe"
                          style={{ backgroundColor: item.accentColor }}
                        />

                        {/* Left: Icon + Details */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                          <div
                            style={{
                              width: 36,
                              height: 36,
                              borderRadius: "8px",
                              backgroundColor: `${item.accentColor}18`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: item.accentColor,
                              flexShrink: 0,
                            }}
                          >
                            <ItemIcon size={18} />
                          </div>

                          <div>
                            <div style={{ fontWeight: 700, color: "#0F172A", fontSize: "0.875rem" }}>
                              {item.name}
                            </div>
                            <div style={{ display: "flex", alignItems: "center", gap: "0.45rem", fontSize: "0.72rem", color: "#64748B", marginTop: "2px" }}>
                              <span style={{ fontFamily: "monospace", fontWeight: 600, backgroundColor: "#F1F5F9", padding: "0.1rem 0.4rem", borderRadius: "4px", color: "#475569", border: "1px solid #E2E8F0" }}>
                                {item.sku}
                              </span>
                              <span>•</span>
                              <span>{item.facility}</span>
                              <span>•</span>
                              <span style={{ color: "#94A3B8" }}>{item.bay}</span>
                            </div>
                          </div>
                        </div>

                        {/* Center: Capacity Micro Progress Bar */}
                        <div className="console-capacity-bar-wrap">
                          <div style={{ display: "flex", justifyContent: "space-between", width: "100%", fontSize: "0.68rem", color: "#64748B" }}>
                            <span>Capacity</span>
                            <span style={{ fontFamily: "monospace", fontWeight: 700, color: "#334155" }}>
                              {item.capacityPercent}%
                            </span>
                          </div>
                          <div style={{ width: "100%", height: "5px", borderRadius: "9999px", backgroundColor: "#F1F5F9", overflow: "hidden" }}>
                            <div
                              style={{
                                height: "100%",
                                borderRadius: "9999px",
                                width: `${item.capacityPercent}%`,
                                backgroundColor: item.accentColor,
                                transition: "width 0.4s ease",
                              }}
                            />
                          </div>
                        </div>

                        {/* Right: Quantity + Status Badge */}
                        <div style={{ textAlign: "right", flexShrink: 0 }}>
                          <div style={{ fontFamily: "monospace", fontWeight: 800, color: "#0F172A", fontSize: "0.95rem" }}>
                            {item.quantity}
                          </div>
                          <div style={{ marginTop: "2px" }}>
                            {item.statusType === "success" && (
                              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", fontSize: "0.7rem", fontWeight: 700, color: "#059669", backgroundColor: "#ECFDF5", border: "1px solid #A7F3D0", padding: "0.15rem 0.55rem", borderRadius: "9999px" }}>
                                <span>↗</span> In Stock
                              </span>
                            )}
                            {item.statusType === "warning" && (
                              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", fontSize: "0.7rem", fontWeight: 700, color: "#D97706", backgroundColor: "#FFFBEB", border: "1px solid #FDE68A", padding: "0.15rem 0.55rem", borderRadius: "9999px" }}>
                                <AlertTriangle size={10} color="#D97706" /> Low Stock
                              </span>
                            )}
                            {item.statusType === "danger" && (
                              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.25rem", fontSize: "0.7rem", fontWeight: 700, color: "#DC2626", backgroundColor: "#FEF2F2", border: "1px solid #FECACA", padding: "0.15rem 0.55rem", borderRadius: "9999px" }}>
                                <XCircle size={10} color="#DC2626" /> Out of Stock
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Bottom Bento Telemetry Cards (3 Executive KPIs) */}
              <div className="console-bento-grid">
                <div className="console-bento-card">
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "8px",
                      backgroundColor: "rgba(16, 185, 129, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#059669",
                      flexShrink: 0,
                    }}
                  >
                    <TrendingUp size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "#64748B", fontWeight: 600 }}>
                      Discrepancy Rate
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: "1.05rem", fontWeight: 800, color: "#059669" }}>
                      &lt; 0.02%
                    </div>
                    <div style={{ fontSize: "0.65rem", color: "#059669", fontWeight: 700 }}>
                      99.98% Accuracy
                    </div>
                  </div>
                </div>

                <div className="console-bento-card">
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "8px",
                      backgroundColor: "rgba(99, 102, 241, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#6366F1",
                      flexShrink: 0,
                    }}
                  >
                    <Gauge size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "#64748B", fontWeight: 600 }}>
                      Procurement Velocity
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: "1.05rem", fontWeight: 800, color: "#4338CA" }}>
                      3.4x Faster
                    </div>
                    <div style={{ fontSize: "0.65rem", color: "#6366F1", fontWeight: 700 }}>
                      Auto PO Routing
                    </div>
                  </div>
                </div>

                <div className="console-bento-card">
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "8px",
                      backgroundColor: "rgba(37, 99, 235, 0.12)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2563EB",
                      flexShrink: 0,
                    }}
                  >
                    <Building2 size={18} />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.7rem", color: "#64748B", fontWeight: 600 }}>
                      Audited Valuation
                    </div>
                    <div style={{ fontFamily: "monospace", fontSize: "1.05rem", fontWeight: 800, color: "#0F172A" }}>
                      $4.28M
                    </div>
                    <div style={{ fontSize: "0.65rem", color: "#2563EB", fontWeight: 700 }}>
                      4 Hubs Synced
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
