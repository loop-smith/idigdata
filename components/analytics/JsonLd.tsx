const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Data Integration Group",
  alternateName: "idigdata",
  url: "https://idigdata.com",
  logo: "https://idigdata.com/idigdata-mark.svg",
  description:
    "Independent practice for business system transformation. Forward-Deployed Operator at mid-market scale (100M-1B) across architecture-engineering-construction, beverage consumer packaged goods, and healthcare. Two core threads: ERP as financial and accounting backbone; compliance and risk as foundation. System breadth covers ERP, WMS, LIMS, QMS, CPQ, CRM, MDM, HRIS. Business-owned substrate. Vendor-agnostic. Exit-by-design.",
  founder: {
    "@type": "Person",
    name: "Robert Paddock",
  },
  foundingDate: "2016",
  email: "robert@idigdata.com",
  areaServed: "United States",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert Paddock",
  jobTitle: "Forward-Deployed Operator",
  description:
    "30 years inside mid-market business system transformations plus 2 years applied agentics. Founder of idigdata.",
  worksFor: {
    "@type": "Organization",
    name: "Data Integration Group",
    alternateName: "idigdata",
  },
  knowsAbout: [
    "Business system transformation",
    "Enterprise resource planning (ERP)",
    "Master data management (MDM)",
    "Applied agentics",
    "Forward-Deployed Operator (FDO)",
    "Six Process Constellations",
    "Business-owned substrate",
    "Common Data Model",
  ],
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
