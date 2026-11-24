import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { constructMetadata } from "@/lib/metadata";
import { 
  Boxes, 
  ArrowRight, 
  BarChart3, 
  Clock, 
  ShieldCheck, 
  Truck, 
  Workflow,
  Play,
  Activity,
  TrendingUp,
  Gauge,
  Zap,
  Building2,
  Layers,
  Disc,
  Droplets,
  Hexagon
} from "lucide-react";

export const metadata: Metadata = constructMetadata({
  title: "Material Management Software Platform | Roacs Corporation",
  description: "Enterprise material management and inventory control software engineered by Roacs. Streamline multi-warehouse inventory, procurement flows, and supplier logistics.",
  path: "/material-management",
});

export default function MaterialManagementPage() {
  const capabilities = [
    {
      icon: Boxes,
      title: "Real-Time Multi-Warehouse Stock",
      description: "Unified visibility across regional distribution centers, production floors, and staging hubs with bin-level precision.",
    },
    {
      icon: Workflow,
      title: "Automated Approval Hierarchies",
      description: "Dynamic rule-based purchase order routing with multi-tiered authority approvals and digital sign-offs.",
    },
    {
      icon: BarChart3,
      title: "Vendor Lead-Time & Scorecards",
      description: "Automated tracking of supplier delivery fulfillment, pricing volatility, quality rejection rates, and compliance.",
    },
    {
      icon: Truck,
      title: "Barcode & RFID Gate Logistics",
      description: "Rapid goods receipt and dispatch verification through mobile handheld scanners, reducing intake errors by 98%.",
    },
    {
      icon: ShieldCheck,
      title: "Audit & Compliance Readiness",
      description: "Immutable transactional event logs, lot traceability, and automated discrepancy reporting for financial auditing.",
    },
    {
      icon: Clock,
      title: "Smart Reorder Thresholds",
      description: "Predictive minimum stock calculations that trigger automated purchase requisitions before stock-outs occur.",
    },
  ];

  const stockRows = [
    {
      sku: "SKU-2321-364",
      name: "High-Tensile Steel Rods (12mm)",
      wh: "Warehouse: E-14",
      qty: "2,450 kg",
      status: "In Stock",
      stripeColor: "#0284C7",
      iconBg: "#E0F2FE",
      iconColor: "#0284C7",
      icon: Layers,
      trendIcon: true,
    },
    {
      sku: "SKU-4419-268",
      name: "Industrial Silicone Gaskets",
      wh: "Central Depot",
      qty: "140 pcs",
      status: "Low Stock",
      stripeColor: "#F59E0B",
      iconBg: "#FEF3C7",
      iconColor: "#D97706",
      icon: Disc,
      trendIcon: false,
    },
    {
      sku: "SKU-2717-884",
      name: "Hydraulic Fluid Type-IV (20L)",
      wh: "Main Yard",
      qty: "85 drums",
      status: "In Stock",
      stripeColor: "#0D9488",
      iconBg: "#CCFBF1",
      iconColor: "#0D9488",
      icon: Droplets,
      trendIcon: true,
    },
    {
      sku: "SKU-1104-546",
      name: "Titanium Fasteners M8x40",
      wh: "Warehouse: A-1",
      qty: "12 boxes",
      status: "Out of Stock",
      stripeColor: "#EF4444",
      iconBg: "#FEE2E2",
      iconColor: "#EF4444",
      icon: Hexagon,
      trendIcon: false,
    },
  ];

  return (
    <div>
      {/* 3D Glassmorphic SaaS Platform Hero */}
      <section className="material-hero-section">
        {/* Ambient Top-Left Dot Matrix */}
        <div className="material-hero-dot-grid" aria-hidden="true" />

        {/* Ambient Soft Radial Backdrops */}
        <div
          style={{
            position: "absolute",
            top: "-15%",
            right: "10%",
            width: "650px",
            height: "650px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(99, 102, 241, 0.12) 0%, rgba(37, 99, 235, 0.05) 50%, transparent 75%)",
            filter: "blur(100px)",
            pointerEvents: "none",
          }}
          aria-hidden="true"
        />

        <Container wide>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "3.5rem",
              alignItems: "center",
            }}
            className="about-grid"
          >
            {/* Left Content Column */}
            <div>
              {/* Eyebrow Pill */}
              <div className="material-hero-eyebrow">
                <Building2 size={15} style={{ color: "#4F46E5" }} />
                <span>Proprietary SaaS Platform</span>
                <span
                  style={{
                    width: 7,
                    height: 7,
                    borderRadius: "50%",
                    backgroundColor: "#10B981",
                    display: "inline-block",
                    boxShadow: "0 0 6px rgba(16, 185, 129, 0.6)",
                  }}
                />
              </div>

              {/* Main Headline */}
              <h1
                style={{
                  fontSize: "clamp(2.5rem, 4.5vw, 3.6rem)",
                  fontWeight: 800,
                  color: "#0F172A",
                  marginBottom: "1.25rem",
                  lineHeight: 1.15,
                  letterSpacing: "-0.03em",
                }}
              >
                Roacs Material<br />
                <span
                  style={{
                    background: "linear-gradient(90deg, #7C3AED 0%, #6366F1 45%, #2563EB 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    display: "inline-block",
                  }}
                >
                  Management
                </span>{" "}
                Platform
              </h1>

              {/* Enterprise Copy */}
              <p
                style={{
                  fontSize: "1.1rem",
                  color: "#475569",
                  lineHeight: 1.65,
                  maxWidth: "540px",
                  marginBottom: "2.25rem",
                }}
              >
                An enterprise-grade supply chain and inventory control platform engineered by Roacs Corporation. Eliminate stock-outs, automate procurement cycles, and synchronize multi-warehouse material flow with real-time auditability.
              </p>

              {/* Interactive CTA Buttons */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  alignItems: "center",
                  gap: "1rem",
                  marginBottom: "2.75rem",
                }}
              >
                <Link
                  href="/contact"
                  className="material-hero-primary-btn"
                >
                  <span>Schedule Platform Demo</span>
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "22px",
                      height: "22px",
                      borderRadius: "50%",
                      backgroundColor: "rgba(255, 255, 255, 0.22)",
                    }}
                  >
                    <ArrowRight size={13} color="#FFFFFF" />
                  </span>
                </Link>

                <Link
                  href="#capabilities"
                  className="material-hero-secondary-btn"
                >
                  <span
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      justifyContent: "center",
                      width: "22px",
                      height: "22px",
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

              {/* 3 Bottom Feature Highlights */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))",
                  gap: "0.85rem",
                  maxWidth: "540px",
                }}
              >
                <div className="material-feature-badge">
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "10px",
                      backgroundColor: "rgba(99, 102, 241, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#6366F1",
                      flexShrink: 0,
                    }}
                  >
                    <Zap size={16} />
                  </div>
                  <span style={{ fontSize: "0.825rem", fontWeight: 600, color: "#1E293B", lineHeight: 1.3 }}>
                    Real-Time<br />Tracking
                  </span>
                </div>

                <div className="material-feature-badge">
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "10px",
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#10B981",
                      flexShrink: 0,
                    }}
                  >
                    <ShieldCheck size={16} />
                  </div>
                  <span style={{ fontSize: "0.825rem", fontWeight: 600, color: "#1E293B", lineHeight: 1.3 }}>
                    Automated<br />Controls
                  </span>
                </div>

                <div className="material-feature-badge">
                  <div
                    style={{
                      width: 32,
                      height: 32,
                      borderRadius: "10px",
                      backgroundColor: "rgba(37, 99, 235, 0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#2563EB",
                      flexShrink: 0,
                    }}
                  >
                    <BarChart3 size={16} />
                  </div>
                  <span style={{ fontSize: "0.825rem", fontWeight: 600, color: "#1E293B", lineHeight: 1.3 }}>
                    Smarter<br />Procurement
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column: 3D Live Warehouse Console with Floating Elements */}
            <div className="warehouse-console-wrapper">
              {/* Floating 3D Cardboard Parcel Box */}
              <Image
                src="/images/3d-parcel-box.png"
                alt="3D Parcel Box"
                width={120}
                height={160}
                className="floating-parcel-box"
                style={{
                  position: "absolute",
                  top: "-30px",
                  left: "10px",
                  zIndex: 2,
                  pointerEvents: "none",
                  filter: "drop-shadow(0 15px 25px rgba(0,0,0,0.12))",
                }}
                priority
              />

              {/* Floating 3D Translucent Bar Chart with Rising Arrow */}
              <Image
                src="/images/3d-growth-chart.png"
                alt="3D Growth Chart"
                width={250}
                height={140}
                className="floating-growth-chart"
                style={{
                  position: "absolute",
                  top: "-45px",
                  right: "15px",
                  zIndex: 2,
                  pointerEvents: "none",
                  filter: "drop-shadow(0 15px 30px rgba(37,99,235,0.2))",
                }}
                priority
              />

              {/* Floating 3D Purple Glossy Cube */}
              <Image
                src="/images/3d-purple-cube.png"
                alt="3D Purple Cube"
                width={80}
                height={90}
                className="floating-purple-cube"
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  left: "15px",
                  zIndex: 25,
                  pointerEvents: "none",
                  filter: "drop-shadow(0 15px 25px rgba(124,58,237,0.3))",
                }}
                priority
              />

              {/* Subtle Neon Orbit Rings Behind Console */}
              <div
                style={{
                  position: "absolute",
                  top: "20%",
                  right: "-20px",
                  width: "380px",
                  height: "220px",
                  borderRadius: "50%",
                  border: "2px solid rgba(6, 182, 212, 0.35)",
                  transform: "rotate(-25deg)",
                  filter: "blur(0.5px)",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
                aria-hidden="true"
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "15%",
                  left: "-10px",
                  width: "340px",
                  height: "180px",
                  borderRadius: "50%",
                  border: "2px solid rgba(139, 92, 246, 0.3)",
                  transform: "rotate(15deg)",
                  filter: "blur(0.5px)",
                  pointerEvents: "none",
                  zIndex: 1,
                }}
                aria-hidden="true"
              />

              {/* Main 3D Tilted Glass Console */}
              <div className="warehouse-glass-console">
                {/* Console Header */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    paddingBottom: "1.1rem",
                    borderBottom: "1px solid rgba(226, 232, 240, 0.8)",
                    marginBottom: "1.15rem",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "0.65rem" }}>
                    {/* Roacs Red Triangle Logo Mark */}
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0 }}>
                      <path d="M12 2L2 20H22L12 2Z" fill="#ED1918" />
                      <path d="M12 7.5L6.5 17.5H17.5L12 7.5Z" fill="#FFFFFF" />
                      <circle cx="12" cy="14" r="1.8" fill="#ED1918" />
                    </svg>
                    <span style={{ fontSize: "0.98rem", fontWeight: 700, color: "#0F172A", letterSpacing: "-0.01em" }}>
                      Live Warehouse Stock Balances
                    </span>
                  </div>

                  {/* Auto Sync Active Pill */}
                  <div
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: "0.45rem",
                      fontSize: "0.74rem",
                      backgroundColor: "rgba(16, 185, 129, 0.1)",
                      color: "#059669",
                      padding: "0.3rem 0.75rem",
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
                    <span>Auto Sync Active</span>
                    <Activity size={12} style={{ color: "#059669" }} />
                  </div>
                </div>

                {/* 4 Inventory Stock Items */}
                <div style={{ display: "flex", flexDirection: "column", gap: "0.65rem", marginBottom: "1.25rem" }}>
                  {stockRows.map((row) => {
                    const ItemIcon = row.icon;
                    return (
                      <div key={row.sku} className="stock-row-card">
                        {/* Colored Left Accent Stripe */}
                        <div
                          className="stock-row-stripe"
                          style={{ backgroundColor: row.stripeColor }}
                        />

                        {/* Product Icon + Details */}
                        <div style={{ display: "flex", alignItems: "center", gap: "0.85rem", paddingLeft: "0.4rem" }}>
                          <div
                            style={{
                              width: 38,
                              height: 38,
                              borderRadius: "10px",
                              backgroundColor: row.iconBg,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              color: row.iconColor,
                              flexShrink: 0,
                            }}
                          >
                            <ItemIcon size={19} />
                          </div>
                          <div>
                            <div style={{ fontWeight: 700, color: "#0F172A", fontSize: "0.88rem" }}>
                              {row.name}
                            </div>
                            <div style={{ fontSize: "0.74rem", color: "#64748B", marginTop: "1px" }}>
                              {row.sku} • {row.wh}
                            </div>
                          </div>
                        </div>

                        {/* Quantity + Status */}
                        <div style={{ textAlign: "right" }}>
                          <div style={{ fontWeight: 800, color: "#0F172A", fontSize: "0.95rem" }}>
                            {row.qty}
                          </div>
                          <div
                            style={{
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "0.3rem",
                              fontSize: "0.72rem",
                              fontWeight: 700,
                              color:
                                row.status === "In Stock"
                                  ? "#059669"
                                  : row.status === "Low Stock"
                                  ? "#D97706"
                                  : "#DC2626",
                            }}
                          >
                            {row.trendIcon ? (
                              <span style={{ fontSize: "0.75rem" }}>↗</span>
                            ) : (
                              <span style={{ fontSize: "0.6rem" }}>●</span>
                            )}
                            <span>{row.status}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Bottom 2 Metric Cards */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: "0.85rem",
                    paddingTop: "1.1rem",
                    borderTop: "1px solid rgba(226, 232, 240, 0.8)",
                  }}
                >
                  {/* Metric 1 */}
                  <div
                    style={{
                      background: "rgba(240, 253, 244, 0.75)",
                      border: "1px solid rgba(187, 247, 208, 0.8)",
                      padding: "0.85rem 1rem",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "10px",
                        backgroundColor: "rgba(16, 185, 129, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#059669",
                        flexShrink: 0,
                      }}
                    >
                      <TrendingUp size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.73rem", color: "#64748B", fontWeight: 500 }}>
                        Discrepancy Rate
                      </div>
                      <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#059669", letterSpacing: "-0.01em" }}>
                        &lt; 0.02%
                      </div>
                    </div>
                  </div>

                  {/* Metric 2 */}
                  <div
                    style={{
                      background: "rgba(245, 243, 255, 0.75)",
                      border: "1px solid rgba(221, 214, 254, 0.8)",
                      padding: "0.85rem 1rem",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                    }}
                  >
                    <div
                      style={{
                        width: 36,
                        height: 36,
                        borderRadius: "10px",
                        backgroundColor: "rgba(99, 102, 241, 0.15)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#6366F1",
                        flexShrink: 0,
                      }}
                    >
                      <Gauge size={20} />
                    </div>
                    <div>
                      <div style={{ fontSize: "0.73rem", color: "#64748B", fontWeight: 500 }}>
                        Procurement Velocity
                      </div>
                      <div style={{ fontSize: "1.15rem", fontWeight: 800, color: "#4338CA", letterSpacing: "-0.01em" }}>
                        3.4x Faster
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>

        {/* Ambient Bottom Fluid Wave Ribbons */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "140px",
            pointerEvents: "none",
            overflow: "hidden",
            zIndex: 1,
          }}
          aria-hidden="true"
        >
          <svg
            viewBox="0 0 1440 180"
            fill="none"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%" }}
          >
            <defs>
              <linearGradient id="waveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#C084FC" stopOpacity="0.45" />
                <stop offset="40%" stopColor="#818CF8" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#60A5FA" stopOpacity="0.25" />
              </linearGradient>
              <linearGradient id="waveGrad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#A855F7" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#38BDF8" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#2DD4BF" stopOpacity="0.15" />
              </linearGradient>
            </defs>
            <path
              d="M0,90 C320,160 580,20 900,100 C1180,170 1340,90 1440,110 L1440,180 L0,180 Z"
              fill="url(#waveGrad1)"
            />
            <path
              d="M0,120 C360,50 680,180 1020,90 C1220,40 1380,130 1440,140 L1440,180 L0,180 Z"
              fill="url(#waveGrad2)"
            />
          </svg>
        </div>
      </section>

      {/* Core Modules Grid */}
      <section className="section section-light" id="capabilities">
        <Container wide>
          <SectionHeading
            eyebrow="Enterprise Modules"
            eyebrowVariant="accent"
            title="Engineered to solve the most demanding supply chain bottlenecks."
            description="Built modularly so your operations can implement what is needed immediately and expand into advanced automated logistics as volume grows."
            align="center"
          />

          <div className="grid-3" style={{ marginTop: "3rem" }}>
            {capabilities.map((cap, idx) => {
              const Icon = cap.icon;
              return (
                <div
                  key={idx}
                  className="card"
                  style={{
                    padding: "2rem",
                    borderRadius: "var(--radius-md)",
                    backgroundColor: "#FFFFFF",
                    border: "1px solid var(--border-light)",
                  }}
                >
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      borderRadius: "8px",
                      backgroundColor: "rgba(237, 25, 24, 0.08)",
                      color: "var(--color-brand-accent)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      marginBottom: "1.25rem",
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <h3
                    style={{
                      fontSize: "1.15rem",
                      fontWeight: 700,
                      color: "var(--color-primary-navy)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {cap.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "0.925rem",
                      color: "var(--color-text-secondary)",
                      lineHeight: 1.6,
                      margin: 0,
                    }}
                  >
                    {cap.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Box */}
          <div
            style={{
              marginTop: "4.5rem",
              backgroundColor: "var(--color-primary-navy)",
              color: "#FFFFFF",
              borderRadius: "var(--radius-lg)",
              padding: "3rem",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "2rem", fontWeight: 800, color: "#FFFFFF", marginBottom: "1rem" }}>
              Ready to modernize your material & inventory operations?
            </h2>
            <p style={{ fontSize: "1.05rem", color: "var(--color-muted-blue)", maxWidth: "680px", margin: "0 auto 2rem auto" }}>
              Schedule a personalized technical demonstration with Roacs solution architects to explore deployment options for your enterprise.
            </p>
            <Button
              href="/contact"
              variant="primary"
              size="lg"
              icon={<ArrowRight size={18} />}
            >
              Request Enterprise Consultation
            </Button>
          </div>
        </Container>
      </section>
    </div>
  );
}
