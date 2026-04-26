const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert Paddock",
  jobTitle: "Contract CIO",
  description:
    "Thirty years across five industries. Mid-market operators. Operating-model change that institutionalizes.",
  url: "https://idigdata.com/about",
  email: "mailto:robert@idigdata.com",
  worksFor: {
    "@type": "Organization",
    name: "idigdata LLC",
    url: "https://idigdata.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Nevada, Reno",
  },
  knowsAbout: [
    "Business transformation",
    "Chief Information Officer",
    "Microsoft Dynamics 365",
    "Enterprise Resource Planning",
    "Agentic AI adoption",
    "Operating-model change",
  ],
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "idigdata LLC",
  description:
    "Independent consulting practice — Contract CIO, business transformation, agentic adoption. Mid-market operators, $100M to $750M revenue.",
  url: "https://idigdata.com",
  email: "mailto:robert@idigdata.com",
  founder: {
    "@type": "Person",
    name: "Robert Paddock",
  },
  serviceType: [
    "Business transformation consulting",
    "Fractional Chief Information Officer",
    "Microsoft Dynamics D365 systems delivery",
    "Agentic AI adoption advisory",
  ],
  areaServed: "United States",
};

export default function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
