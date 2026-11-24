export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  image: string;
  features: string[];
  capabilities: string[];
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "custom-software-development",
    slug: "custom-software-development",
    title: "Custom Software Development",
    shortDescription: "Tailored software solutions engineered to solve complex operational challenges with scalability, enterprise-grade security, and high performance.",
    fullDescription: "At Roacs Corporation, we design and build bespoke enterprise software systems that align directly with your unique workflows and business objectives. We replace legacy bottlenecks with resilient architectures built to scale gracefully as your organization expands.",
    iconName: "Code2",
    image: "/images/services/custom-software.avif",
    features: [
      "Enterprise Workflow Automation",
      "Modular Microservices Architecture",
      "Legacy Modernization & Refactoring",
      "High-Throughput API Frameworks"
    ],
    capabilities: [
      "Custom ERP & CRM Solutions",
      "Cross-System Data Pipelines",
      "Fault-Tolerant Distributed Backends",
      "Regulatory Compliance & Security Auditing"
    ],
    deliverables: [
      "Production-ready codebase",
      "Full API specifications",
      "Automated unit & integration test suites",
      "Architectural documentation & deployment runbooks"
    ]
  },
  {
    id: "web-development",
    slug: "web-development",
    title: "Web Application Development",
    shortDescription: "High-performance, secure, and modern web platforms built with cutting-edge frameworks for rapid delivery and frictionless user interaction.",
    fullDescription: "We engineer resilient web platforms and SaaS solutions using modern architectures. From customer-facing responsive applications to high-concurrency internal administration dashboards, our web solutions prioritize Core Web Vitals, enterprise security, and seamless user experiences.",
    iconName: "Globe",
    image: "/images/services/web-app-development.jpg",
    features: [
      "Full-Stack Next.js & React Architectures",
      "Real-Time Data Streaming & WebSockets",
      "Progressive Web Apps (PWA)",
      "Accessible, Multi-Device Responsive UI"
    ],
    capabilities: [
      "Interactive Enterprise Portals",
      "Multi-tenant SaaS Platforms",
      "E-Commerce & Global Trade Hubs",
      "Headless CMS & Content Systems"
    ],
    deliverables: [
      "Optimized production web application",
      "Performance and SEO baseline reports",
      "Responsive cross-browser verification",
      "Integrated analytics & error tracking"
    ]
  },
  {
    id: "mobile-development",
    slug: "mobile-development",
    title: "Mobile Application Development",
    shortDescription: "Native and cross-platform iOS and Android applications delivering fluid 60fps performance, intuitive interfaces, and offline resilience.",
    fullDescription: "Roacs develops mission-critical mobile applications that keep your workforce connected and your customers engaged. Utilizing Flutter, React Native, and native toolchains, we deliver unified codebases without sacrificing device-level speed or platform ergonomics.",
    iconName: "Smartphone",
    image: "/images/services/mobile-development.webp",
    features: [
      "iOS & Android Unified Codebases",
      "Offline-First Data Synchronization",
      "Hardware Sensor & Biometric Integration",
      "App Store & Google Play Governance"
    ],
    capabilities: [
      "Enterprise Field Workforce Apps",
      "Consumer Digital Products",
      "IoT Device Control Applications",
      "Secure Mobile Payment Wallets"
    ],
    deliverables: [
      "Signed production binaries (IPA & APK/AAB)",
      "App Store deployment management",
      "Push notification service setup",
      "Comprehensive device compatibility matrix"
    ]
  },
  {
    id: "ai-solutions",
    slug: "ai-solutions",
    title: "AI & Intelligent Automation",
    shortDescription: "Practical artificial intelligence and machine learning pipelines that automate complex data processing, extraction, and strategic decisions.",
    fullDescription: "We help forward-thinking organizations harness artificial intelligence pragmatically. Rather than building speculative demos, Roacs implements real-world LLM orchestration, intelligent document ingestion, predictive workflows, and computer vision models that tangibly reduce operational costs.",
    iconName: "Cpu",
    image: "/images/services/ai-solutions.jpg",
    features: [
      "Domain-Specific LLM Integration & RAG",
      "OCR & Document Data Extraction",
      "Predictive Operations & Demand Forecasting",
      "Intelligent Process Automation (IPA)"
    ],
    capabilities: [
      "Enterprise Knowledge Base Assistants",
      "Computer Vision & Posture Analytics",
      "Automated Customer Triage Systems",
      "Algorithmic Data Classification"
    ],
    deliverables: [
      "Benchmarked AI inference pipelines",
      "Prompt engineering & fine-tuning datasets",
      "Data privacy & governance safeguard layers",
      "Real-time token and latency monitoring"
    ]
  },
  {
    id: "cloud-devops",
    slug: "cloud-devops",
    title: "Cloud & DevOps Solutions",
    shortDescription: "Resilient cloud infrastructure, automated CI/CD pipelines, containerization, and 99.99% uptime operational governance.",
    fullDescription: "Accelerate deployment velocity while lowering infrastructure overhead. Roacs architects scalable cloud platforms across AWS, Azure, and Google Cloud using Infrastructure as Code (Terraform), Kubernetes container orchestration, and zero-downtime CI/CD pipelines.",
    iconName: "Cloud",
    image: "/images/services/cloud-devops.jpg",
    features: [
      "Infrastructure as Code (Terraform / OpenTofu)",
      "Zero-Downtime CI/CD Pipelines",
      "Kubernetes & Docker Container Orchestration",
      "24/7 Observability, Logging & Alerting"
    ],
    capabilities: [
      "Cloud Migration & Cost Optimization (FinOps)",
      "Serverless Architecture Engineering",
      "Disaster Recovery & Multi-Region Failover",
      "SOC 2 & ISO-Ready Security Hardening"
    ],
    deliverables: [
      "Version-controlled IaC repositories",
      "Automated CI/CD workflows",
      "Prometheus & Grafana observability dashboards",
      "Infrastructure security & compliance audit"
    ]
  },
  {
    id: "ui-ux-design",
    slug: "ui-ux-design",
    title: "UI/UX Design Excellence",
    shortDescription: "Human-centric digital product design, interactive wireframes, and scalable design systems that transform complex data into intuitive experiences.",
    fullDescription: "Great software requires clarity and effortless usability. Our design practice combines qualitative user research, ergonomic wireframing, interactive prototyping, and component-driven Figma design systems that bridge the gap between creative vision and engineering execution.",
    iconName: "Palette",
    image: "/images/services/ui-ux-design.jpg",
    features: [
      "Design Systems & Reusable Token Libraries",
      "Interactive High-Fidelity Prototypes",
      "User Journey Mapping & Ergonomic Audits",
      "WCAG 2.1 AA Accessibility Standards"
    ],
    capabilities: [
      "Complex Dashboard & Data Visualization Design",
      "B2B Enterprise Portal UX",
      "Mobile App UI Guidelines",
      "Brand Identity & Corporate Design Direction"
    ],
    deliverables: [
      "Comprehensive Figma design system and component kit",
      "Interactive clickable prototypes",
      "Design-to-code design token export",
      "User research synthesis documentation"
    ]
  },
  {
    id: "it-consultancy",
    slug: "it-consultancy",
    title: "Strategic IT Consultancy",
    shortDescription: "Actionable technology advisory, enterprise architecture planning, tech stack evaluation, and digital transformation roadmaps.",
    fullDescription: "Navigate rapid technological change with confident, experienced leadership. Roacs consultants collaborate with founders, CTOs, and enterprise leaders to evaluate tech debt, select future-proof frameworks, and formulate concrete roadmaps that drive long-term business valuation.",
    iconName: "TrendingUp",
    image: "/images/services/it-strategy-consultancy.jpg",
    features: [
      "Technology Architecture Assessment",
      "Vendor & Third-Party Stack Due Diligence",
      "Digital Transformation Roadmap Planning",
      "Cybersecurity Posture & Risk Mitigation"
    ],
    capabilities: [
      "Fractional CTO & Advisory Services",
      "Tech Debt Remediation Strategies",
      "Data Strategy & Governance Frameworks",
      "Engineering Team Enablement & Mentorship"
    ],
    deliverables: [
      "Enterprise technology audit report",
      "Quarterly digital roadmap with priority matrices",
      "Architecture decision records (ADRs)",
      "Security & risk mitigation recommendations"
    ]
  }
];
