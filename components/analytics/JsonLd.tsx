const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "idigdata, LLC",
  alternateName: "idigdata",
  url: "https://idigdata.com",
  logo: "https://idigdata.com/idigdata-mark.svg",
  description:
    "Battle-hardened transformative CIO consulting. Mid-market business transformation, fractional or full-embedded CIO engagements, and enterprise agentic adoption advisory.",
  founder: {
    "@type": "Person",
    name: "Robert Paddock",
  },
  foundingDate: "2016",
  email: "robert@idigdata.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Reno",
    addressRegion: "NV",
    addressCountry: "US",
  },
  areaServed: "United States",
};

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  );
}
