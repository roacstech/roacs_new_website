import React from "react";
import Link from "next/link";
import { ServiceItem, servicesData } from "@/data/services";
import { 
  Code2, 
  Globe, 
  Smartphone, 
  Cpu, 
  Cloud, 
  Palette, 
  TrendingUp, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

interface ServiceCardProps {
  service: ServiceItem;
  index?: number;
}

const iconMap: Record<string, React.ElementType> = {
  Code2,
  Globe,
  Smartphone,
  Cpu,
  Cloud,
  Palette,
  TrendingUp,
};

export function ServiceCard({ service, index }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Code2;
  const serviceIndex = index !== undefined 
    ? index 
    : servicesData.findIndex((s) => s.id === service.id);
  const displayNum = String((serviceIndex >= 0 ? serviceIndex : 0) + 1).padStart(2, "0");

  return (
    <div className="service-process-card">
      <div>
        {/* Top Header: Big Periwinkle Step Number & Clean Icon Badge */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
            marginBottom: "1.5rem",
          }}
        >
          <span
            style={{
              fontSize: "clamp(2.5rem, 4vw, 3rem)",
              fontWeight: 800,
              color: "#7892FE",
              lineHeight: 1,
              letterSpacing: "-0.03em",
              userSelect: "none",
            }}
          >
            {displayNum}
          </span>

          <div
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "12px",
              backgroundColor: "#FFFFFF",
              border: "1px solid #D6E4FF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#2563EB",
              boxShadow: "0 2px 8px rgba(59, 130, 246, 0.08)",
              flexShrink: 0,
            }}
          >
            <IconComponent size={22} strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.35rem",
            fontWeight: 800,
            color: "var(--color-primary-navy)",
            marginBottom: "0.85rem",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
          }}
        >
          {service.title}
        </h3>

        {/* Short Description */}
        <p
          style={{
            fontSize: "0.935rem",
            lineHeight: 1.6,
            color: "var(--color-text-secondary)",
            marginBottom: "1.75rem",
          }}
        >
          {service.shortDescription}
        </p>

        {/* Feature Pill Badges Matching Reference */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.65rem",
            marginBottom: "2rem",
            alignItems: "flex-start",
          }}
        >
          {service.features.slice(0, 3).map((feat, idx) => (
            <div key={idx} className="service-pill-badge">
              <CheckCircle2
                size={16}
                color="#3B82F6"
                strokeWidth={2.2}
                style={{ flexShrink: 0 }}
              />
              <span
                style={{
                  fontSize: "0.85rem",
                  fontWeight: 600,
                  color: "#1E293B",
                  whiteSpace: "nowrap",
                }}
              >
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Link */}
      <div style={{ paddingTop: "0.5rem" }}>
        <Link
          href={`/services/${service.slug}`}
          className="service-explore-link"
        >
          <span>Explore Capabilities</span>
          <ArrowRight size={16} />
        </Link>
      </div>
    </div>
  );
}
