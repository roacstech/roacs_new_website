import React from "react";
import Link from "next/link";
import { ServiceItem } from "@/data/services";
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

export function ServiceCard({ service }: ServiceCardProps) {
  const IconComponent = iconMap[service.iconName] || Code2;

  return (
    <div
      className="card"
      style={{
        padding: "2rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        backgroundColor: "#FFFFFF",
        border: "1px solid var(--border-light)",
        borderRadius: "var(--radius-md)",
        position: "relative",
        transition: "all var(--transition-normal)",
      }}
    >
      <div>
        <div
          style={{
            width: "52px",
            height: "52px",
            borderRadius: "var(--radius-sm)",
            backgroundColor: "rgba(16, 29, 53, 0.05)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--color-brand-accent)",
            marginBottom: "1.5rem",
            border: "1px solid rgba(16, 29, 53, 0.08)",
          }}
        >
          <IconComponent size={26} strokeWidth={2} />
        </div>

        <h3
          style={{
            fontSize: "1.35rem",
            fontWeight: 700,
            color: "var(--color-primary-navy)",
            marginBottom: "0.85rem",
          }}
        >
          {service.title}
        </h3>

        <p
          style={{
            fontSize: "0.95rem",
            lineHeight: 1.6,
            color: "var(--color-text-secondary)",
            marginBottom: "1.5rem",
          }}
        >
          {service.shortDescription}
        </p>

        <ul
          style={{
            listStyle: "none",
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            marginBottom: "1.75rem",
            borderTop: "1px solid var(--border-light)",
            paddingTop: "1.25rem",
          }}
        >
          {service.features.slice(0, 3).map((feat, idx) => (
            <li
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                fontSize: "0.875rem",
                color: "var(--color-text-primary)",
                fontWeight: 500,
              }}
            >
              <CheckCircle2 size={16} color="var(--color-brand-accent)" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <Link
          href={`/services/${service.slug}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.5rem",
            fontSize: "0.9rem",
            fontWeight: 600,
            color: "var(--color-primary-navy)",
            textDecoration: "none",
            transition: "color var(--transition-fast), gap var(--transition-fast)",
          }}
          className="service-link"
        >
          <span>Explore Capabilities</span>
          <ArrowRight size={16} className="arrow-icon" />
        </Link>
      </div>
    </div>
  );
}
