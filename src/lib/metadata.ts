import { Metadata } from "next";

export const siteConfig = {
  name: "Roacs Corporation",
  legalName: "Roacs Corporation",
  description: "Enterprise IT consulting, custom software development, cloud infrastructure, AI solutions, and high-performance digital engineering.",
  url: "https://roacs.com",
  ogImage: "https://roacs.com/logos/roacs-logo.png",
  contact: {
    email: "info@roacs.com",
    phoneIndia: "+91 93632 82216",
    phoneUSA: "+1 320-316-2929",
    address: {
      streetAddress: "82, KRM Residency, Sarcarsamakulam, Kovilpalayam",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      postalCode: "641107",
      addressCountry: "IN"
    },
    businessHours: "Mon - Sat: 10:00 AM - 4:00 PM IST"
  }
};

export function constructMetadata({
  title,
  description = siteConfig.description,
  image = siteConfig.ogImage,
  path = "",
  noIndex = false
}: {
  title?: string;
  description?: string;
  image?: string;
  path?: string;
  noIndex?: boolean;
} = {}): Metadata {
  const fullTitle = title 
    ? `${title} | ${siteConfig.name}` 
    : `${siteConfig.name} — IT Consulting & Software Development`;

  const canonicalUrl = `${siteConfig.url}${path.startsWith('/') ? path : `/${path}`}`;

  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${siteConfig.name} Corporate Header`,
        },
      ],
      type: "website",
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [image],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
      googleBot: {
        index: !noIndex,
        follow: !noIndex,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/favicon.ico",
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Corporation",
    "name": siteConfig.name,
    "legalName": siteConfig.legalName,
    "url": siteConfig.url,
    "logo": `${siteConfig.url}/logos/roacs-logo.png`,
    "description": siteConfig.description,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": siteConfig.contact.address.streetAddress,
      "addressLocality": siteConfig.contact.address.addressLocality,
      "addressRegion": siteConfig.contact.address.addressRegion,
      "postalCode": siteConfig.contact.address.postalCode,
      "addressCountry": siteConfig.contact.address.addressCountry
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": siteConfig.contact.phoneIndia,
        "contactType": "customer service",
        "areaServed": "IN",
        "availableLanguage": ["English", "Tamil", "Hindi"]
      },
      {
        "@type": "ContactPoint",
        "telephone": siteConfig.contact.phoneUSA,
        "contactType": "sales",
        "areaServed": "US",
        "availableLanguage": ["English"]
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/roacs"
    ]
  };
}
