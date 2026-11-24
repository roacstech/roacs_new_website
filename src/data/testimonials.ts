export interface TestimonialItem {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  rating: number;
  avatar: string;
}

export const testimonialsData: TestimonialItem[] = [
  {
    id: "ravi-kumar",
    name: "Ravi Kumar",
    role: "Operations Manager",
    company: "Enterprise Manufacturing & Logistics",
    quote: "Roacs delivered exactly what we needed. Their team understood our requirements clearly and built a scalable solution that improved our operational efficiency. Highly recommended!",
    rating: 5,
    avatar: "/images/testimonials/testimonial-1.png"
  },
  {
    id: "priya-sharma",
    name: "Priya Sharma",
    role: "Startup Founder",
    company: "Digital Wellness & Consumer Health",
    quote: "Working with Roacs was a great experience. Their design and development team delivered a high-quality product on time, helping us launch faster and grow confidently.",
    rating: 5,
    avatar: "/images/testimonials/testimonial-2.png"
  },
  {
    id: "arun-mehta",
    name: "Arun Mehta",
    role: "Chief Technology Officer",
    company: "FinEdge Global Banking Solutions",
    quote: "The engineering depth at Roacs is extraordinary. They modernized our cloud infrastructure with zero downtime and built an automated audit trail that passed our stringent regulatory compliance effortlessly.",
    rating: 5,
    avatar: "/images/testimonials/testimonial-3.png"
  },
  {
    id: "ananya-deshmukh",
    name: "Ananya Deshmukh",
    role: "VP of Product Strategy",
    company: "OmniRetail Commerce Cloud",
    quote: "Roacs transformed our supply chain visibility with their material platform. We reduced stock discrepancy rates to near zero and accelerated procurement cycles by over 3x within the first quarter.",
    rating: 5,
    avatar: "/images/testimonials/testimonial-4.png"
  }
];
