import { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { constructMetadata } from "@/lib/metadata";
import { 
  Package, 
  Boxes, 
  ArrowRight, 
  BarChart3, 
  Clock, 
  ShieldCheck, 
  Truck, 
  Workflow 
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
    { sku: "SKU-9021", name: "High-Tensile Steel Rods (12mm)", wh: "Warehouse B-4", qty: "2,450 kg", status: "In Stock", color: "#10B981" },
    { sku: "SKU-4819", name: "Industrial Silicone Gaskets", wh: "Central Depot", qty: "140 pcs", status: "Low Stock", color: "#F59E0B" },
    { sku: "SKU-7732", name: "Hydraulic Fluid Type-IV (200L)", wh: "Hub East", qty: "85 drums", status: "In Stock", color: "#10B981" },
    { sku: "SKU-1104", name: "Titanium Fasteners M8x40", wh: "Warehouse A-1", qty: "12 boxes", status: "Critical", color: "#EF4444" },
  ];

  return (
    <div>
      {/* Product Hero */}
      <section
        style={{
          backgroundColor: "var(--color-primary-navy)",
          color: "#FFFFFF",
          paddingTop: "5.5rem",
          paddingBottom: "5.5rem",
          position: "relative",
          overflow: "hidden",
          borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "-10%",
            right: "5%",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(237, 25, 24, 0.16) 0%, transparent 70%)",
            filter: "blur(90px)",
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
            }}
            className="about-grid"
          >
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
                  fontSize: "0.8rem",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "1.25rem",
                }}
              >
                <Package size={14} />
                <span>Proprietary SaaS Platform</span>
              </div>

              <h1
                style={{
                  fontSize: "clamp(2.4rem, 4.5vw, 3.5rem)",
                  fontWeight: 800,
                  color: "#FFFFFF",
                  marginBottom: "1.25rem",
                  lineHeight: 1.15,
                }}
              >
                Roacs Material Management Platform
              </h1>

              <p
                style={{
                  fontSize: "1.15rem",
                  color: "var(--color-muted-blue)",
                  lineHeight: 1.65,
                  marginBottom: "2rem",
                }}
              >
                An enterprise-grade supply chain and inventory control platform engineered by Roacs Corporation. Eliminate stock-outs, automate procurement cycles, and synchronize multi-warehouse material flow with real-time auditability.
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "1rem" }}>
                <Button
                  href="/contact"
                  variant="primary"
                  size="lg"
                  icon={<ArrowRight size={18} />}
                >
                  Schedule Platform Demo
                </Button>
                <Button
                  href="#capabilities"
                  variant="secondary"
                  size="lg"
                >
                  View System Capabilities
                </Button>
              </div>
            </div>

            {/* Live Interactive Inventory Preview Card */}
            <div
              style={{
                backgroundColor: "rgba(11, 20, 36, 0.9)",
                border: "1px solid rgba(255, 255, 255, 0.15)",
                borderRadius: "var(--radius-lg)",
                padding: "2rem",
                boxShadow: "0 24px 60px rgba(0, 0, 0, 0.5)",
                backdropFilter: "blur(14px)",
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
                  <Boxes size={20} color="var(--color-brand-accent)" />
                  <span style={{ fontSize: "0.9rem", fontWeight: 700, color: "#FFFFFF" }}>
                    Live Warehouse Stock Balances
                  </span>
                </div>
                <span
                  style={{
                    fontSize: "0.72rem",
                    backgroundColor: "rgba(16, 185, 129, 0.15)",
                    color: "#34D399",
                    padding: "0.2rem 0.6rem",
                    borderRadius: "4px",
                    fontWeight: 700,
                  }}
                >
                  AUTO-SYNC ACTIVE
                </span>
              </div>

              {/* Table */}
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem", marginBottom: "1.5rem" }}>
                {stockRows.map((row) => (
                  <div
                    key={row.sku}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "0.75rem 1rem",
                      backgroundColor: "rgba(255, 255, 255, 0.04)",
                      borderRadius: "6px",
                      fontSize: "0.825rem",
                    }}
                  >
                    <div>
                      <div style={{ fontWeight: 600, color: "#FFFFFF" }}>{row.name}</div>
                      <div style={{ fontSize: "0.72rem", color: "var(--color-muted-blue)" }}>
                        {row.sku} â€¢ {row.wh}
                      </div>
                    </div>
                    <div style={{ textAlign: "right" }}>
                      <div style={{ fontWeight: 700, color: "#FFFFFF" }}>{row.qty}</div>
                      <span
                        style={{
                          fontSize: "0.7rem",
                          fontWeight: 700,
                          color: row.color,
                        }}
                      >
                        â—  {row.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mini Stats Bar */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "0.75rem",
                  paddingTop: "1rem",
                  borderTop: "1px solid rgba(255, 255, 255, 0.08)",
                }}
              >
                <div style={{ background: "rgba(255,255,255,0.03)", padding: "0.75rem", borderRadius: "6px" }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--color-muted-blue)" }}>Discrepancy Rate</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#34D399" }}>&lt; 0.02%</div>
                </div>
                <div style={{ background: "rgba(255,255,255,0.03)", padding: "0.75rem", borderRadius: "6px" }}>
                  <div style={{ fontSize: "0.72rem", color: "var(--color-muted-blue)" }}>Procurement Velocity</div>
                  <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#38BDF8" }}>3.4x Faster</div>
                </div>
              </div>
            </div>
          </div>
        </Container>
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
