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
  }
];
