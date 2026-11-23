import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowVariant?: "accent" | "dark" | "tech";
  title: string;
  description?: string;
  align?: "left" | "center" | "right";
  dark?: boolean;
  className?: string;
}

export function SectionHeading({
  eyebrow,
  eyebrowVariant = "accent",
  title,
  description,
  align = "left",
  dark = false,
  className = "",
}: SectionHeadingProps) {
  const alignClass = {
    left: "text-left",
    center: "text-center mx-auto",
    right: "text-right ml-auto",
  }[align];

  const eyebrowClass = {
    accent: "badge-eyebrow-accent",
    dark: "badge-eyebrow-dark",
    tech: "badge-eyebrow-tech",
  }[eyebrowVariant];

  return (
    <div
      className={cn(
        "section-header",
        alignClass,
        className
      )}
      style={{
        maxWidth: align === "center" ? "760px" : "800px",
        margin: align === "center" ? "0 auto 2.5rem auto" : align === "right" ? "0 0 2.5rem auto" : "0 0 2.5rem 0",
        textAlign: align,
      }}
    >
      {eyebrow && (
        <div
          style={{
            display: "flex",
            justifyContent: align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start",
            marginBottom: "0.75rem",
          }}
        >
          <span className={cn("badge-eyebrow", eyebrowClass)}>
            {eyebrow}
          </span>
        </div>
      )}
      <h2
        style={{
          color: dark ? "#FFFFFF" : "var(--color-primary-navy)",
          marginBottom: description ? "1rem" : "0",
          fontWeight: 800,
          textAlign: align,
        }}
      >
        {title}
      </h2>
      {description && (
        <p
          style={{
            color: dark ? "var(--color-muted-blue)" : "var(--color-text-secondary)",
            fontSize: "1.125rem",
            lineHeight: 1.6,
            textAlign: align,
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
}
