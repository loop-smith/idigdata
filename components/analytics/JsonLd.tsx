const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Data Integration Group",
  alternateName: ["idigdata", "DIG LLC"],
  url: "https://idigdata.com",
  logo: "https://idigdata.com/idigdata-mark.svg",
  description:
    "idigdata is the independent practice of transformational CIO/CTO Robert Paddock (Data Integration Group / DIG LLC), founded 2016. Customer-side enterprise transformation and Applied Agentics - modernize the core, put agents into production, keep the business in control. Embeds inside $100M-$1B operators above the vendors; delivery architecture includes BOSS, The Rig, and FlowCraft as owned operating systems, not SaaS seats. Vendor-agnostic. Exit-by-design.",
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
    "Transformational CIO/CTO and founder of idigdata. Owns the layer where AI and ERP fail: people, process, and data above the vendors. 30 years inside mid-market ($100M-$1B) enterprise change; 50+ implementations including 15 enterprise transformations at scale; embeds, installs a business-owned operating asset, exits by design. Recent CIO residency: Sierra Nevada Brewing (~$420M).",
  worksFor: {
    "@type": "Organization",
    name: "Data Integration Group",
    alternateName: "idigdata",
    url: "https://idigdata.com",
  },
  knowsAbout: [
    "Business transformation",
    "Transformational CIO/CTO leadership",
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
    "Discrete manufacturing",
    "Process manufacturing",
    "Architecture-engineering-construction (AEC)",
    "Beverage consumer packaged goods (CPG)",
    "Wellness and fitness operations",
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
