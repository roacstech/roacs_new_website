export interface IndustryItem {
  id: string;
  name: string;
  shortDescription: string;
  focusAreas: string[];
  iconName: string;
}

export const industriesData: IndustryItem[] = [
  {
    id: "smart-housing",
    name: "Prefab & Smart Housing",
    shortDescription: "Architectural configurators, modular production tracking, and interactive customer inquiry systems for modern construction leaders.",
    focusAreas: ["Modular Component Tracking", "Digital Spec Configurators", "Construction Pipeline CRM"],
    iconName: "Home"
  },
  {
    id: "trade-logistics",
    name: "Global Trade & Logistics",
    shortDescription: "Container shipment tracking, inventory catalog indexing, and real-time customs documentation pipelines.",
    focusAreas: ["Supply Chain Visibility", "Material Flow Optimization", "Automated Quoting Portals"],
    iconName: "Truck"
  },
  {
    id: "industrial-safety",
    name: "Industrial Safety & Manufacturing",
    shortDescription: "Occupational safety audits, regulatory compliance dashboards, and job-site hazard documentation systems.",
    focusAreas: ["OSHA Compliance Governance", "Incident Reporting Portals", "Preventative Maintenance Tracking"],
    iconName: "ShieldAlert"
  },
  {
    id: "healthcare-wellness",
    name: "Healthcare & Clinical Wellness",
    shortDescription: "Biomechanical posture analytics, secure electronic health records, and clinical consultation booking platforms.",
    focusAreas: ["HIPAA-Conscious Data Pipelines", "Biomechanical Visualization", "Patient Intake Automation"],
    iconName: "Activity"
  },
  {
    id: "media-streaming",
    name: "Digital Media & Streaming",
    shortDescription: "High-throughput audio and video distribution, podcast syndication engines, and multi-channel audience engagement tools.",
    focusAreas: ["Low-Latency Streaming", "Automated Audio Transcoding", "Content Syndication Pipelines"],
    iconName: "Radio"
  },
  {
    id: "enterprise-saas",
    name: "Enterprise SaaS & B2B Portals",
    shortDescription: "Multi-tenant software platforms, administrative control consoles, and bespoke workflow automation engines.",
    focusAreas: ["Multi-Tenant Data Isolation", "Role-Based Access Governance", "Continuous Integration & Deployment"],
    iconName: "Layers"
  }
];
