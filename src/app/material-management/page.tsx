import { Metadata } from "next";
import { Container } from "@/components/common/Container";
import { SectionHeading } from "@/components/common/SectionHeading";
import { Button } from "@/components/common/Button";
import { constructMetadata } from "@/lib/metadata";
import { MaterialHero } from "@/components/material-management/MaterialHero";
import { 
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

  return (
    <div>
      {/* Enterprise SaaS Control Tower Hero */}
      <MaterialHero />

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
            className="material-cta-card"
            style={{
              marginTop: "4.5rem",
              backgroundColor: "var(--color-primary-navy)",
              color: "#FFFFFF",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(2rem, 5vw, 3.5rem) clamp(1.25rem, 4vw, 2.5rem)",
              textAlign: "center",
              overflow: "hidden",
            }}
          >
            <h2
              style={{
                fontSize: "clamp(1.5rem, 3.8vw, 2rem)",
                fontWeight: 800,
                color: "#FFFFFF",
                marginBottom: "1rem",
                lineHeight: 1.25,
              }}
            >
              Ready to modernize your material & inventory operations?
            </h2>
            <p
              style={{
                fontSize: "clamp(0.925rem, 2vw, 1.05rem)",
                color: "var(--color-muted-blue)",
                maxWidth: "680px",
                margin: "0 auto 2rem auto",
                lineHeight: 1.6,
              }}
            >
              Schedule a personalized technical demonstration with Roacs solution architects to explore deployment options for your enterprise.
            </p>
            <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
              <Button
                href="/contact"
                variant="primary"
                size="md"
                icon={<ArrowRight size={18} />}
                className="material-cta-btn"
              >
                Request Enterprise Consultation
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
