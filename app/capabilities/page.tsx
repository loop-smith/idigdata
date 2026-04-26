import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: "Capabilities",
  description:
    "Three offering lines from one operator: business transformation (data-core first), transformative CIO (full scope, embedded), agentic adoption (enterprise framework, production systems).",
  alternates: {
    canonical: "/capabilities/",
  },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/capabilities/",
    title: "Capabilities — idigdata",
    description:
      "Business transformation. Transformative CIO. Agentic adoption.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Commonize the master data. Own the core. Apps and agents plug in.",
      },
    ],
  },
};

const provider = {
  "@type": "Organization",
  name: "idigdata, LLC",
  url: "https://idigdata.com",
};

const serviceBT = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Business Transformation Consulting",
  name: "Business Transformation",
  description:
    "Data-core first transformation that institutionalizes. Greenfield architecture, operating-model redesign, 50+ mid-market transformations delivered.",
  provider,
  areaServed: "United States",
  audience: {
    "@type": "Audience",
    audienceType:
      "Mid-market operators, PE-backed and founder-led companies",
  },
};

const serviceTCO = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Fractional / Embedded CIO",
  name: "Transformative CIO",
  description:
    "Full CIO scope, embedded. Strategy, operations, vendor portfolio, risk, governance. Transformer, not caretaker.",
  provider,
  areaServed: "United States",
  audience: {
    "@type": "Audience",
    audienceType: "Boards, PE, C-Suite executives",
  },
};

const serviceAA = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Agentic AI Adoption Advisory",
  name: "Agentic Adoption",
  description:
    "Enterprise agentic framework. Five production systems shipped at brand scale. Governance, security, onboarding, operator training, empowerment, beehive.",
  provider,
  areaServed: "United States",
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://idigdata.com/" },
    {
      "@type": "ListItem",
      position: 2,
      name: "Capabilities",
      item: "https://idigdata.com/capabilities/",
    },
  ],
};

const COLUMNS = [
  {
    title: "Business transformation",
    intro:
      "Data-core first. The method that makes transformation institutionalize.",
    bullets: [
      "Greenfield architecture + operating-model redesign. Change that holds.",
      "50+ transformations delivered across mid-market over 30 years.",
      "Operating model + governance + vendor portfolio rebuilt as one coherent fabric, not patched piecewise.",
    ],
  },
  {
    title: "Transformative CIO",
    intro:
      "Full CIO scope, embedded. The executive when the business needs change.",
    bullets: [
      "Full CIO scope: strategy, operations, vendor portfolio, risk, and governance.",
      "Transformer, not caretaker. The executive when the business needs change.",
      "Operator DNA. Built and ran his own business before running others'.",
    ],
  },
  {
    title: "Agentic adoption",
    intro: "Enterprise agentic framework. Production systems, not pilots.",
    bullets: [
      "Enterprise agentic framework: governance, security, onboarding, operator training, empowerment.",
      "Agentic MDM at the core. Master data curation is the gate.",
      "Adoption is the moat. Operator empowerment is the layer most AI advisors skip.",
    ],
  },
];

const SYSTEMS = [
  {
    label: "Data core",
    items: [
      "BI",
      "Data warehouse",
      "Master Data Management",
      "Integration platforms",
    ],
  },
  {
    label: "Core systems",
    items: [
      "ERP (Microsoft Dynamics D365, NAV, GP)",
      "PLM",
      "WMS",
      "MES",
    ],
  },
  {
    label: "Operational systems",
    items: [
      "CRM",
      "CPQ",
      "HRIS",
      "FP&A",
      "TMS",
      "QMS",
      "LIMS",
      "EAM",
    ],
  },
  {
    label: "Applied agentics",
    items: [
      "framework",
      "governance",
      "security",
      "onboarding",
      "training",
      "empowerment",
    ],
  },
];

export default function CapabilitiesPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      <JsonLdScript data={serviceBT} />
      <JsonLdScript data={serviceTCO} />
      <JsonLdScript data={serviceAA} />
      <JsonLdScript data={breadcrumbJsonLd} />
      {/* Header */}
      <section className="pt-20 pb-10 md:pt-24 md:pb-14">
        <h1 className="font-display font-medium text-d2-forest text-[36px] md:text-[48px] leading-[1.05] tracking-tight">
          Capabilities
        </h1>
        <p className="mt-4 font-display italic text-d2-stone text-[18px]">
          Three offering lines. One operator.
        </p>
      </section>

      {/* Three columns */}
      <section className="pt-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {COLUMNS.map((col) => (
            <div
              key={col.title}
              className="flex flex-col border-t border-d2-forest pt-6"
            >
              <h2 className="font-display font-bold text-d2-forest text-[22px] leading-tight">
                {col.title}
              </h2>
              <p className="mt-4 font-body font-semibold text-d2-ink text-[16px] leading-snug">
                {col.intro}
              </p>
              <ul className="mt-6 space-y-4 text-[15px] text-d2-ink leading-snug">
                {col.bullets.map((b, i) => (
                  <li key={i} className="pl-5 relative">
                    <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-d2-forest rounded-full" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* AGENTIC AI deep dive */}
      <section className="pt-20 md:pt-24">
        <SectionHeader>Agentic AI &mdash; what &ldquo;shipped&rdquo; looks like</SectionHeader>
        <p className="max-w-[820px] text-[16px] text-d2-ink leading-relaxed">
          From knowing about AI to confidently operating it. Two years at
          Sierra Nevada. One of mid-market&rsquo;s earliest full agentic
          deployments. Framework: governance, training, user empowerment, app
          onboarding, beehive. Five domain-experienced apps running in live
          operations today.
        </p>
        <p className="mt-4 max-w-[820px] font-display italic text-d2-copper text-[20px] leading-snug">
          Not chatbots. Not pilots.
        </p>

        <ul className="mt-8 max-w-[640px] space-y-2 font-mono text-[14px] text-d2-ink">
          <li className="flex items-start gap-3">
            <span aria-hidden className="text-d2-stone">
              ›
            </span>
            operational decisioning
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden className="text-d2-stone">
              ›
            </span>
            institutional-knowledge retrieval
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden className="text-d2-stone">
              ›
            </span>
            document-to-structured-data intake
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden className="text-d2-stone">
              ›
            </span>
            cross-system orchestration
          </li>
          <li className="flex items-start gap-3">
            <span aria-hidden className="text-d2-stone">
              ›
            </span>
            operator decision-support
          </li>
        </ul>
      </section>

      {/* SYSTEMS strip */}
      <section className="pt-20 md:pt-24">
        <SectionHeader>Systems</SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {SYSTEMS.map((sys) => (
            <div key={sys.label}>
              <h3 className="font-body font-bold uppercase tracking-section text-[12px] text-d2-stone mb-3">
                {sys.label}
              </h3>
              <p className="text-[14px] text-d2-ink leading-relaxed">
                {sys.items.map((item, i) => (
                  <span key={item}>
                    {item}
                    {i < sys.items.length - 1 && (
                      <span aria-hidden className="text-d2-stone px-1.5">
                        ·
                      </span>
                    )}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Dual CTA */}
      <section className="mt-24 mb-16 md:mb-24">
        <div className="text-center px-6 py-16 md:py-20">
          <h2 className="font-display font-medium text-d2-forest text-[28px] md:text-[36px] leading-tight">
            Two ways to reach me.
          </h2>
          <p className="mt-4 text-d2-ink text-[16px]">
            Both reach me directly.
          </p>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5">
            <a
              href="mailto:robert@idigdata.com"
              className="inline-block font-body font-semibold text-[16px] px-7 py-3.5 bg-d2-forest text-white hover:bg-d2-forest/90 transition-colors focus:outline-2 focus:outline-d2-stone focus:outline-offset-2"
            >
              Email Robert directly
            </a>
            <Link
              href="/contact"
              className="inline-block font-body font-semibold text-[16px] px-7 py-3.5 border border-d2-forest text-d2-forest hover:bg-d2-forest hover:text-white transition-colors focus:outline-2 focus:outline-d2-stone focus:outline-offset-2"
            >
              Or start a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
