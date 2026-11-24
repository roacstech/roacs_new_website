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
            marginBottom: "1rem",
          }}
        >
          <span
            style={{
              fontSize: "clamp(2.2rem, 3.2vw, 2.75rem)",
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
              width: "42px",
              height: "42px",
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
            <IconComponent size={20} strokeWidth={2} />
          </div>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "1.2rem",
            fontWeight: 800,
            color: "var(--color-primary-navy)",
            marginBottom: "0.6rem",
            lineHeight: 1.25,
            letterSpacing: "-0.015em",
          }}
        >
          {service.title}
        </h3>

        {/* Short Description */}
        <p
          style={{
            fontSize: "0.875rem",
            lineHeight: 1.55,
            color: "var(--color-text-secondary)",
            marginBottom: "1.25rem",
          }}
        >
          {service.shortDescription}
        </p>

        {/* Feature Pill Badges Matching Reference */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.55rem",
            marginBottom: "1.5rem",
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          {service.features.slice(0, 3).map((feat, idx) => (
            <div
              key={idx}
              className="service-pill-badge"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.55rem",
                padding: "0.42rem 0.85rem",
                backgroundColor: "#FFFFFF",
                border: "1px solid #D6E4FF",
                borderRadius: "9999px",
                maxWidth: "100%",
                boxShadow: "0 2px 6px rgba(59, 130, 246, 0.04)",
              }}
            >
              <CheckCircle2
                size={15}
                color="#3B82F6"
                strokeWidth={2.2}
                style={{ flexShrink: 0 }}
              />
              <span
                style={{
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  color: "#1E293B",
                  lineHeight: 1.3,
                  whiteSpace: "normal",
                  wordBreak: "break-word",
                }}
              >
                {feat}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Link */}
      <div style={{ paddingTop: "0.25rem" }}>
        <Link
          href={`/services/${service.slug}`}
          className="service-explore-link"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.885rem",
            fontWeight: 700,
            color: "#2563EB",
            textDecoration: "none",
          }}
        >
          <span>Explore Capabilities</span>
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
