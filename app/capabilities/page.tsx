import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Capabilities",
  description:
    "Three offering lines. One operator. Business transformation, Transformative CIO, and Agentic adoption.",
  alternates: {
    canonical: "/capabilities",
  },
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
    emphasizeIndex: 1,
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
                    {col.emphasizeIndex === i ? (
                      <span className="text-d2-copper">{b}</span>
                    ) : (
                      b
                    )}
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
          operations today. Not chatbots. Not pilots.
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
      <section className="pt-20 md:pt-24 pb-12">
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
    </div>
  );
}
