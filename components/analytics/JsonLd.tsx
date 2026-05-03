const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "idigdata, LLC",
  alternateName: "idigdata",
  url: "https://idigdata.com",
  logo: "https://idigdata.com/idigdata-mark.svg",
  description:
    "Mid-market business system transformation. Embedded transformation residencies, fractional engagements, and enterprise agentics framework deployment. Client-owned data, vendor-agnostic architecture.",
  founder: {
    "@type": "Person",
    name: "Robert Paddock",
  },
  foundingDate: "2016",
  email: "robert@idigdata.com",
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
