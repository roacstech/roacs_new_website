export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  client: string;
  category: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: string[];
  image: string;
  tags: string[];
  featured: boolean;
  liveUrl?: string;
}

export const projectsData: ProjectItem[] = [
  {
    id: "cazanoo",
    slug: "cazanoo-prefab-smart-housing",
    title: "Cazanoo — Smart Housing Platform",
    client: "Cazanoo",
    category: "Web & Digital Platform",
    industry: "Prefab & Smart Housing",
    description: "An interactive digital platform showcasing precision modular housing, smart energy integration, and virtual construction configurations.",
    challenge: "Cazanoo required a high-performance web experience to convey complex engineering specifications, 3D floor plan layouts, and streamlined buyer inquiry flows.",
    solution: "Roacs designed and engineered a clean, modern digital platform featuring responsive asset loading, dynamic modular catalogs, and automated inquiry distribution.",
    results: [
      "Sub-second page load times across mobile and desktop",
      "Streamlined buyer consultation pipeline",
      "Intuitive navigation for technical architectural details"
    ],
    image: "/images/projects/cazanoo.png",
    tags: ["Web Architecture", "UI/UX Design", "Performance Optimization", "Modular Tech"],
    featured: true,
    liveUrl: "https://www.cazanoo.com/"
  },
  {
    id: "bec-global",
    slug: "bec-global-corporate-platform",
    title: "BEC Global — Corporate Enterprise Platform",
    client: "BEC Global",
    category: "Enterprise Web Solution",
    industry: "Global Consulting & Commerce",
    description: "Enterprise digital headquarters presenting BEC Global's international trade networks, corporate advisory, and partner ecosystems.",
    challenge: "The client needed a trustworthy corporate web presence capable of projecting institutional stability to global enterprise partners and investors.",
    solution: "Engineered an editorial, multilingual-ready corporate portal built with clean typography, structured schema data, and rock-solid cloud hosting.",
    results: [
      "Institutional credibility established across global markets",
      "Seamless cross-border partner communication flows",
      "Full adherence to modern accessibility and SEO standards"
    ],
    image: "/images/projects/bec.jpg",
    tags: ["Enterprise Web", "Information Architecture", "Cloud Infrastructure"],
    featured: true,
    liveUrl: "https://www.becgpl.com/"
  },
  {
    id: "aandb-impex",
    slug: "a-and-b-impex-global-trade",
    title: "A&B Impex — Global Export Portal",
    client: "A&B Impex",
    category: "Trade & Commerce System",
    industry: "Export & International Logistics",
    description: "International export management hub facilitating containerized merchandise tracking, product catalog indexing, and customs documentation requests.",
    challenge: "Global buyers needed transparent visibility into product assortments, specifications, and shipment dispatch parameters across fluctuating time zones.",
    solution: "Implemented an end-to-end export showcase with fast search indexing, structured item catalogs, and automated quotation routing.",
    results: [
      "Accelerated overseas quotation cycles",
      "Eliminated manual product specification handoffs",
      "Mobile-optimized catalog for international trade fairs"
    ],
    image: "/images/projects/aandb.jpg",
    tags: ["International Trade", "Catalog Management", "B2B Logistics"],
    featured: true,
    liveUrl: "https://aandbimpex.com/"
  },
  {
    id: "ambit-triangle",
    slug: "ambit-triangle-industrial-safety",
    title: "Ambit Triangle — Industrial Safety System",
    client: "Ambit Triangle",
    category: "Safety & Compliance Engineering",
    industry: "Industrial Manufacturing",
    description: "A specialized compliance and risk management portal for heavy manufacturing and hazardous material safety protocols.",
    challenge: "Navigating strict occupational health compliance required structured procedural distribution and transparent training verifications.",
    solution: "Built a compliance resource center with categorized protocol libraries, quick reference emergency sheets, and client inspection tracking.",
    results: [
      "Rapid retrieval of OSHA and factory safety documentation",
      "Standardized compliance audits across client job sites",
      "Zero downtime during critical operational shifts"
    ],
    image: "/images/projects/ambit.jpg",
    tags: ["Compliance", "Industrial Safety", "Portal Engineering"],
    featured: true,
    liveUrl: "https://ambittrianglesafety.co.in/"
  },
  {
    id: "abir-ayurveda",
    slug: "abir-ayurveda-wellness-tech",
    title: "Abir Ayurveda — Clinical Wellness Experience",
    client: "Abir Ayurveda",
    category: "Digital Healthcare & Wellness",
    industry: "Ayurveda & Healthcare",
    description: "A serene, customer-centric digital wellness portal integrating practitioner consultations, treatment cataloging, and wellness appointment scheduling.",
    challenge: "Blending traditional clinical holistic therapies with modern digital booking and secure patient intake protocols.",
    solution: "Crafted a tranquil visual identity combined with high-speed appointment scheduling, consultation questionnaire workflows, and service indexing.",
    results: [
      "Substantial increase in online appointment bookings",
      "Decreased intake friction for first-time holistic clients",
      "High patient satisfaction with digital schedule confirmations"
    ],
    image: "/images/projects/abir.png",
    tags: ["Healthcare UI", "Appointment Engine", "Responsive Design"],
    featured: true,
    liveUrl: "https://abirayurveda.com/"
  },
  {
    id: "tetas-podcast",
    slug: "tetas-podcast-media-streaming",
    title: "Tetas Podcast — Audio Media Platform",
    client: "Tetas Podcast",
    category: "Media Streaming & Distribution",
    industry: "Digital Media & Broadcasting",
    description: "Dedicated streaming and syndication portal engineered for high-bitrate audio playback, episode categorization, and listener analytics.",
    challenge: "Delivering continuous audio playback across mobile devices with low latency and clean RSS syndicate synchronization.",
    solution: "Engineered an audio-first web interface featuring persistent background playback, episode transcripts, and direct platform syndicate links.",
    results: [
      "Buffer-free audio playback across fluctuating mobile networks",
      "Expanded listener engagement and multi-channel subscription growth",
      "Seamless publishing workflow for production creators"
    ],
    image: "/images/projects/tetas.png",
    tags: ["Media Streaming", "Audio Engine", "Web Performance"],
    featured: true,
    liveUrl: "https://tetaspodcast.com/"
  },
  {
    id: "accupose",
    slug: "accupose-clinical-posture-healthtech",
    title: "Accupose — Clinical Posture HealthTech",
    client: "Accupose",
    category: "HealthTech & Computer Vision",
    industry: "Healthcare Technology",
    description: "Advanced biomechanical posture assessment interface designed for physiotherapists, ergonomic specialists, and rehabilitation clinics.",
    challenge: "Translating skeletal point coordinates and posture analytics into actionable, readable charts for clinicians and patients.",
    solution: "Developed an ergonomic clinical portal featuring biomechanical angle charts, longitudinal recovery tracking, and encrypted patient reporting.",
    results: [
      "Accelerated clinical documentation time by 45%",
      "Clear visual posture improvement feedback for patients",
      "HIPAA-conscious data isolation and role-based clinician access"
    ],
    image: "/images/projects/accupose.png",
    tags: ["HealthTech", "Biomechanical Analytics", "Data Visualization"],
    featured: true,
    liveUrl: "https://www.accupose.com/"
  }
];
