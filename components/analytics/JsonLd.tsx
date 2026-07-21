const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Data Integration Group",
  alternateName: "idigdata",
  url: "https://idigdata.com",
  logo: "https://idigdata.com/idigdata-mark.svg",
  description:
    "Independent practice for enterprise transformation and business systems, led by transformational CIO Robert Paddock — embedded at senior-operator altitude inside $100M–$1B operating companies across architecture-engineering-construction (AEC), beverage consumer packaged goods (CPG), healthcare, and hospitality/gaming. Applied AI in production is the current edge. System breadth: ERP, WMS, MES, EMR, LIMS, QMS, CPQ, CRM, MDM, HRIS, with a Common Data Model and master-data discipline under every engagement. Business-owned substrate. Vendor-agnostic. Exit-by-design.",
  founder: {
    "@type": "Person",
    name: "Robert Paddock",
    jobTitle: "Transformational Chief Information Officer",
    sameAs: ["https://www.linkedin.com/in/robertpaddock"],
  },
  foundingDate: "2016",
  email: "robert@idigdata.com",
  areaServed: "United States",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert Paddock",
  jobTitle: "Transformational Chief Information Officer",
  description:
    "Transformational Chief Information Officer with 30 years inside mid-market ($100M–$1B) enterprise and business-system transformations — 50+ implementations and 15 full transformations led end-to-end across architecture-engineering-construction (AEC), beverage consumer packaged goods (CPG), healthcare, and hospitality/gaming — plus applied AI in production. Embeds at senior-operator altitude, owns the transformation path above the vendors, installs a business-owned operating asset, and exits by design. Founder of idigdata.",
  worksFor: {
    "@type": "Organization",
    name: "Data Integration Group",
    alternateName: "idigdata",
  },
  knowsAbout: [
    "Enterprise transformation",
    "Business-system transformation",
    "Chief Information Officer leadership",
    "Business transformation delivery",
    "Enterprise resource planning (ERP)",
    "ERP implementation and recovery",
    "Master data management (MDM)",
    "Common Data Model",
    "Warehouse management systems (WMS)",
    "Manufacturing execution systems (MES)",
    "Laboratory and quality systems (LIMS, QMS)",
    "CRM and CPQ",
    "HRIS",
    "Applied AI in production",
    "Decision integrity for agentic AI",
    "Six Process Constellations (P2P, O2C, P2M, S2S, D2R, MDM)",
    "Business-owned operating substrate",
    "Client-owned software architecture",
    "Vendor-agnostic transformation leadership",
    "Exit-by-design engagements",
    "Architecture-engineering-construction (AEC)",
    "Beverage consumer packaged goods (CPG)",
    "Healthcare operations",
    "Hospitality and gaming operations",
  ],
  sameAs: ["https://www.linkedin.com/in/robertpaddock"],
  url: "https://idigdata.com",
  email: "robert@idigdata.com",
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
    </>
  );
}
