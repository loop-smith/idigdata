import type { Metadata } from "next";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "FAQ — idigdata",
  description:
    "Forward-Deployed Operator for $100M – $750M operating companies. Embedded, Fractional, or Agentics — data-centric, vendor-agnostic, exit-by-design.",
  alternates: { canonical: "/faq/" },
};

type QA = { q: string; a: string; aHtml?: React.ReactNode };

const FAQ: QA[] = [
  {
    q: "Who is Robert Paddock?",
    a: "Forward-Deployed Operator with 30 years inside mid-market business system transformations and 2 years deep in applied agentics. I founded idigdata in 2016 — an independent practice running business-owned, vendor-agnostic transformations for $100M–$1B operators. Three industry specialties: architecture-engineering-construction (AEC), beverage consumer packaged goods (CPG), and healthcare (electronic health records / EHR). Two core threads under every engagement: ERP as the financial and accounting backbone, compliance and risk as the foundation. I work as one person plus a 30-year virtual network — no carried bench, no standing overhead.",
  },
  {
    q: "What is idigdata?",
    a: "An independent practice for business system transformation. Founded 2016 — decade-long operating history. The practice works with mid-market operators ($100M–$1B revenue) running enterprise-scale transformations across ERP, WMS, LIMS, QMS, CPQ, CRM, MDM, and HRIS. Two core threads run under every engagement: ERP as the financial and accounting backbone, compliance and risk as the foundation. The deliverable at engagement close is a fully deployed and maintained business-owned data substrate; the exit is part of the shape, not a bug to manage.",
  },
  {
    q: "What is a Forward-Deployed Operator?",
    a: "Senior leader who works inside the customer environment, sees with operator eyes, and ships against operator outcomes. The Forward-Deployed Operator (FDO) sits at the senior-leadership altitude — distinct from a Forward-Deployed Engineer (FDE), which sits at the engineering altitude. The FDO embeds, builds, and develops the systems and people to leave it. Two practice areas at two altitudes of one thesis: V1 mid-market operator transformation, V2 applied agentics at lab and PE altitude. Anthropic's $1.5B Goldman-Blackstone-Hellman&Friedman JV (May 2026) and OpenAI's $10B Deployment Company (May 2026) both ship engineer-altitude help with platform tie-in; the FDO is operator-altitude help with a business-owned substrate and a defined exit.",
  },
  {
    q: "How is idigdata different from McKinsey or the Big 4?",
    a: "McKinsey and the Big 4 ship consultant-altitude recommendations. idigdata ships operator-altitude deliverables — the systems, the data substrate, the people layer that owns it. The substantive difference: at engagement close they hand you a deck; idigdata hands you a deployed, maintained, business-owned system. Structurally idigdata carries no bench, no managed-services tail, no client lock-in. Pricing reflects the structural lean — no premium fees subsidizing infrastructure idigdata doesn't carry.",
  },
  {
    q: "How is idigdata different from Anthropic's FDE program or OpenAI's Deployment Company?",
    a: "Both lab programs ship Forward-Deployed Engineers — engineering altitude, platform-tied, default-forever-embedded. idigdata's FDO is at senior-leadership altitude, with a business-owned substrate and exit-by-design. Different corner of the same emerging market. The lab programs solve \"we need engineers fluent in this model\"; the FDO solves \"we need someone with 30 years inside the customer's reality to make this land in the operating business and walk out clean.\" idigdata sits at a third corner the lab JVs and traditional consulting both leave open.",
  },
  {
    q: "What does \"exit-by-design\" mean?",
    a: "The engagement has a defined exit. The deliverable is a fully deployed and maintained asset, owned by the business at handoff — not an engineer who stays forever. Exit is the shape of the work, not a bug to manage. This is structurally distinct from the Palantir-originated FDE pattern that Anthropic and OpenAI are now scaling, which embeds permanently by default. The positive value proposition is the asset transfer — not the absence of capture.",
  },
  {
    q: "What does \"business-owned substrate\" mean?",
    a: "The data, the systems, the people layer, and the operational knowledge all sit with the business at engagement close. Nothing is vendor-locked, nothing requires the FDO to come back to operate it, nothing is captured by a third-party platform. The business owns the substrate because the business runs the operation — anyone else owning it creates a structural extraction surface. This is the architectural difference behind the structurally lean firm thesis.",
  },
  {
    q: "What industries does idigdata work in?",
    a: "Three industry specialties: architecture-engineering-construction (AEC), beverage consumer packaged goods (CPG), and healthcare (electronic health records / EHR). 30 years of customer-side fluency concentrated in these three. Mid-market scale ($100M–$1B revenue band).",
  },
  {
    q: "What systems does idigdata work with?",
    a: "Enterprise resource planning (ERP), warehouse management (WMS), laboratory information management (LIMS), quality management (QMS), configure-price-quote (CPQ), customer relationship management (CRM), master data management (MDM), and human resources information systems (HRIS). Specific platforms in active rotation: Microsoft D365 Business Central, Dynamics NAV, Microsoft GP, Salesforce, SAP, Snowflake, Databricks, Tableau, Power BI. The Common Data Model and master data discipline thread through every engagement.",
  },
  {
    q: "What are the Six Process Constellations?",
    a: "The exhaustive operating-process spine idigdata uses across every transformation. Six constellations cover every business operation: P2P (procure-to-pay — buys), O2C (order-to-cash — sells), P2M (plan-to-make — makes), D2R (data-to-report — true business intelligence), MDM (master data management — the substrate), and S2S (systems-to-support — everything-else infrastructure). Same six in every install; the makeup of process-element groups, clusters, and components differs per operator. The constellation framework lets the FDO decompose any business operation cleanly without reinventing the spine each engagement.",
    aHtml: (
      <>
        The exhaustive operating-process spine idigdata uses across every transformation. Six constellations cover every business operation: <strong>P2P</strong> (procure-to-pay — buys), <strong>O2C</strong> (order-to-cash — sells), <strong>P2M</strong> (plan-to-make — makes), <strong>D2R</strong> (data-to-report — true business intelligence), <strong>MDM</strong> (master data management — the substrate), and <strong>S2S</strong> (systems-to-support — everything-else infrastructure). Same six in every install; the makeup of process-element groups, clusters, and components differs per operator. The constellation framework lets the FDO decompose any business operation cleanly without reinventing the spine each engagement.
      </>
    ),
  },
  {
    q: "Has idigdata actually shipped agentic systems?",
    a: "Yes. Five shipped agentic builds in production at brand scale, described at the pattern level due to IP constraints. The 2-year applied-agentics arc layers on top of 30 years of business system transformation — the receipts from V1 are what make the agents work in customer reality rather than in demo. This is the rare credential most AI advisory in the market doesn't have. Anthropic's safety research informs how idigdata frames agentic deployment risk; the practice cites the research rather than the lab leadership directly.",
  },
  {
    q: "What is BOSS?",
    a: "BOSS — Business Operating System Suite — is the open-source platform that institutionalizes the transformations idigdata delivers. It carries the data substrate, the Six Process Constellations spine, and the self-maintaining SOP machine. Operators own and maintain their BOSS install via in-house IT or the BOSS community; idigdata doesn't run a managed-services tail. BOSS is a separate product lane; idigdata services are the leading edge that deploys it. The bundled offer is idigdata transformation services plus BOSS deployment — two entities, contractually cooperating, structurally distinct.",
  },
  {
    q: "What does an idigdata engagement look like?",
    a: "One person embedded inside the operator's environment as senior leadership for the transformation. The 30-year virtual network activates per-engagement for vendor coordination, implementation, change management — no standing bench overhead. Two-thread structural discipline (ERP backbone + compliance/risk foundation). Phased through envisioning, architecture, build, validation, and cutover. Living SOPs generated as a byproduct of test-and-validate. Defined exit with business-owned substrate at handoff.",
  },
  {
    q: "How long does an engagement run?",
    a: "Engagement shape and length are calibrated to context. The right surface to discuss timeframe is a first conversation, not a published number. Three-month engagement minimum on any contract.",
  },
  {
    q: "Does idigdata work fractional or full-time?",
    a: "Both. Fractional engagements (2–3 days/week embedded), full-time exclusive residencies, and bundled engagements with platform deployment. The shape depends on the operator's scale, urgency, and existing internal leadership. The right surface to discuss shape is a first conversation.",
  },
  {
    q: "What does idigdata cost?",
    a: "Engagement economics are calibrated to context. The right surface to discuss is a first conversation, not a published rate sheet.",
  },
  {
    q: "V1 versus V2 — what's the difference?",
    a: "V1 is business system transformation at mid-market operator altitude — the bedrock practice, 30-year track record, CFO-led buyer, $100M–$1B scale. V2 is applied agentics at lab and PE altitude — the FDO posture serving Anthropic and OpenAI partner-program leadership who need senior customer-side fluency, plus PE-led FDE program leadership across portfolio companies. Same FDO frame at both altitudes. V1 and V2 are peer credentials, not framings of one another.",
  },
  {
    q: "Is idigdata available for new engagements?",
    a: "Reach out anytime. No commitment, no proposal-deck. Just talking shape.",
  },
  {
    q: "Does idigdata work with private equity portfolio companies?",
    a: "Yes. PE-led FDE program leadership and PE operating partners are part of the V2 buyer surface. PE portcos at mid-market scale also fit V1 directly. The FDO posture — senior-leadership altitude, business-owned substrate, defined exit — calibrates cleanly to PE portfolio-company dynamics: defined value-creation window, no standing overhead extraction, asset stays with the company at handoff.",
  },
  {
    q: "How do I get in touch?",
    a: "Email robert@idigdata.com, or use the contact form at idigdata.com/contact.",
    aHtml: (
      <>
        Email{" "}
        <a
          href="mailto:robert@idigdata.com"
          className="font-semibold text-navy border-b border-navy/40 hover:border-navy"
        >
          robert@idigdata.com
        </a>
        , or use the{" "}
        <a
          href="/contact/"
          className="font-semibold text-navy border-b border-navy/40 hover:border-navy"
        >
          contact form
        </a>
        .
      </>
    ),
  },
];

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      <JsonLdScript data={faqPageJsonLd} />

      <section className="pt-20 pb-8 md:pt-24 md:pb-10">
        <p className="font-body text-[13px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-5">
          FAQ
        </p>
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
          FAQ — idigdata.
        </h1>
        <p className="mt-5 max-w-[760px] font-display italic text-stone text-[18px] leading-snug">
          Structured Q/A canon for the practice. Twenty questions covering the
          Forward-Deployed Operator frame, idigdata as a firm, and what an
          engagement looks like.
        </p>
      </section>

      <section className="pt-2 pb-20">
        <dl className="max-w-[820px] space-y-12">
          {FAQ.map(({ q, a, aHtml }, i) => (
            <div key={i} className="border-t border-navy/15 pt-8">
              <dt className="font-display text-navy text-[22px] md:text-[26px] leading-[1.2] tracking-tight">
                {q}
              </dt>
              <dd className="mt-4 font-body text-ink text-[16px] leading-relaxed">
                {aHtml ?? a}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
