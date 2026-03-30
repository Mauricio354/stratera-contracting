interface SchemaMarkupProps {
  schema: Record<string, unknown> | Record<string, unknown>[];
}

export default function SchemaMarkup({ schema }: SchemaMarkupProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://stateracontracting.com",
  name: "Statera Contracting",
  url: "https://stateracontracting.com",
  description:
    "Calgary renovation contractor with 20+ years experience in residential and commercial renovations. Licensed, insured, and WCB compliant.",
  telephone: "+1-403-512-8755",
  email: "statera.contracting@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Calgary",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "City", name: "Calgary" },
    { "@type": "City", name: "Airdrie" },
    { "@type": "City", name: "Cochrane" },
    { "@type": "City", name: "Chestermere" },
  ],
  priceRange: "$$",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    ratingCount: "8",
    bestRating: "5",
  },
  sameAs: [
    "https://www.facebook.com/people/Statera-Contracting/61559736449256/",
  ],
};
