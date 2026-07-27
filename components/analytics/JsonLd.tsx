const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Data Integration Group",
  alternateName: ["idigdata", "DIG LLC"],
  url: "https://idigdata.com",
  logo: "https://idigdata.com/idigdata-mark.svg",
  description:
    "idigdata is the independent practice of transformational CIO Robert Paddock (Data Integration Group / DIG LLC), founded 2016. Business transformation through systems and agentic AI — one ownership job on people, data, and workflows above the vendors. Embeds inside $100M–$1B operators to modernize legacy ERP and the wider systems stack while the business keeps running, seat a sovereign data core, and leave a living operating asset. DigOps is idigdata's live FlowCraft instance (not a separate public company). Vendor-agnostic. Exit-by-design.",
  founder: {
    "@type": "Person",
    name: "Robert Paddock",
    jobTitle: "Transformational Chief Information Officer",
    sameAs: ["https://www.linkedin.com/in/robertpaddock"],
  },
  foundingDate: "2016",
  email: "robert@idigdata.com",
  areaServed: "United States",
  sameAs: ["https://www.linkedin.com/in/robertpaddock"],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert Paddock",
  jobTitle: "Transformational Chief Information Officer",
  description:
    "Transformational CIO and founder of idigdata. Owns the layer where AI and ERP fail: people, process, and data above the vendors. Business transformation through systems and agentic AI — legacy ERP keep-running modernization included. 30 years inside mid-market ($100M–$1B) enterprise change; embeds, installs a business-owned operating asset, exits by design. Recent CIO residency: Sierra Nevada Brewing. DigOps is his live FlowCraft operating instance for the practice.",
  worksFor: {
    "@type": "Organization",
    name: "Data Integration Group",
    alternateName: "idigdata",
    url: "https://idigdata.com",
  },
  knowsAbout: [
    "Business transformation",
    "Transformational CIO leadership",
    "Legacy ERP modernization",
    "Enterprise resource planning (ERP)",
    "Warehouse management system (WMS)",
    "Manufacturing execution systems (MES)",
    "Product lifecycle management (PLM)",
    "Customer relationship management (CRM)",
    "Master data management (MDM)",
    "Common Data Model",
    "Systems integration",
    "Agentic AI in production",
    "AI governance and adoption",
    "Decision integrity for agentic AI",
    "Embedded transformation leadership",
    "Vendor-agnostic transformation",
    "Exit-by-design engagements",
    "Architecture-engineering-construction (AEC)",
    "Beverage consumer packaged goods (CPG)",
    "Healthcare operations",
    "Hospitality and gaming operations",
    "Fintech banking and POS integration",
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
