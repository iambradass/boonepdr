import { BUSINESS, SERVICE_CITIES } from "./constants";

// LocalBusiness structured data for every page
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://boonepdr.com",
    name: BUSINESS.name,
    description:
      "Professional paintless dent repair serving the Dallas-Fort Worth metroplex. Hail damage repair, door ding removal, and lease return dent repair. Insurance claims assistance available.",
    url: "https://boonepdr.com",
    telephone: BUSINESS.phone,
    email: BUSINESS.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Fort Worth",
      addressRegion: "TX",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 32.7555,
      longitude: -97.3308,
    },
    areaServed: SERVICE_CITIES.map((city) => ({
      "@type": "City",
      name: `${city}, TX`,
    })),
    openingHours: ["Mo-Fr 08:00-18:00", "Sa 09:00-15:00"],
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: BUSINESS.rating,
      reviewCount: BUSINESS.reviewCount,
    },
    sameAs: [BUSINESS.social.facebook],
  };
}

// Service schema for individual service pages
export function getServiceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: service.url,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS.name,
      telephone: BUSINESS.phone,
    },
    areaServed: {
      "@type": "Place",
      name: "Dallas-Fort Worth, TX",
    },
  };
}

// FAQ schema for pages with FAQ sections
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
