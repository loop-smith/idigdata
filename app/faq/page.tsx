import type { Metadata } from "next";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "FAQ - idigdata",
  description:
    "Robert Paddock and idigdata: embedded transformation leadership for $100M-$1B businesses, agentic-era delivery, DigOps, the Rig, and BOSS.",
  alternates: { canonical: "/faq/" },
};

type QA = { q: string; a: string; aHtml?: React.ReactNode };

const FAQ: QA[] = [
  {
    q: "Who is Robert Paddock?",
    a: "Robert Paddock is a 30-year business-system transformation operator and the founder of idigdata. He embeds inside $100M-$1B businesses to lead agentic-era transformation, align vendors and internal teams, install a business-owned operating asset, and exit by design when the business can carry the result.",
  },
  {
    q: "What is idigdata?",
    a: "idigdata is Robert Paddock's independent consulting practice, founded in 2016. The practice serves mid-market operators with complex business-system change across ERP, WMS, MES, EMR, LIMS, QMS, CPQ, CRM, MDM, HRIS, data, workflow, and adoption work.",
  },
  {
    q: "What problem does idigdata solve?",
    a: "idigdata solves the ownership gap above the vendors. Transformations fall apart when executives hold the mandate, vendors hold their slice, project teams hold task lists, and operators carry the real work in the gaps. idigdata supplies the senior embedded owner who binds mandate, delivery, adoption, capital logic, and exit into one accountable path.",
  },
  {
    q: "What is the value proposition?",
    a: "idigdata embeds Robert Paddock inside $100M-$1B businesses to deliver agentic-era business-system change and leave behind a business-owned operating asset, not another vendor dependency.",
  },
  {
    q: "Why do transformations fail?",
    a: "Transformations fail because delivery fractures. Bain reports that 88% of transformations fall short, and Stanford's enterprise AI work points to the same delivery bottleneck in AI: the technology works, the challenge is everything else. idigdata focuses on the constant across both: ownership, workflow, validation, sponsorship, people, and the delivery frame.",
  },
  {
    q: "What is embedded transformation leadership?",
    a: "Embedded transformation leadership is idigdata's primary model. Robert works inside the business at senior-operator altitude, owns the transformation path above vendors, runs the delivery frame, develops the people who will carry the result, and exits when the operating asset can survive without him.",
  },
  {
    q: "Is idigdata a fractional CIO, contract CIO, or transformation lead?",
    a: "Yes, those familiar labels can describe the seat. The more precise description is embedded transformation leadership: a senior operator brought in to land a business-system transformation and leave the business stronger, not to hold a chair forever.",
  },
  {
    q: "What are the entry modes?",
    a: "Fractional, adoption, and recovery are entry modes into the same operator model. Fractional work fits a specific lever before the full mandate is clear. Adoption fits agentics and readiness work. Recovery fits stalled ERP, systems, or transformation programs that need an owner above the vendor path.",
  },
  {
    q: "How are engagement economics handled?",
    a: "Engagement economics are handled directly with Robert Paddock after the mandate, scope, urgency, and ownership conditions are clear. The public site is for fit and substance, not a fee sheet.",
  },
  {
    q: "What size company is the best fit?",
    a: "$100M-$1B operators are the best fit. The work fits businesses with enough complexity to need senior embedded ownership: multi-entity, multi-platform, vendor-heavy environments where delivery, data, workflows, and people have to move as one system.",
  },
  {
    q: "What industries does idigdata know best?",
    a: "idigdata's strongest field patterns are architecture, engineering, and construction; beverage consumer packaged goods; and healthcare. The common thread is operations-heavy work where systems, data, finance, compliance, and frontline adoption all have to hold together.",
  },
  {
    q: "What systems does idigdata work around?",
    a: "idigdata works around ERP, WMS, MES, EMR, LIMS, QMS, CPQ, CRM, MDM, HRIS, analytics, data platforms, specialty systems, and the workflows that connect them. The point is not one preferred vendor stack; the point is the business architecture above the stack.",
  },
  {
    q: "What is DigOps?",
    a: "DigOps is the system Robert uses to run his own practice: books, pipeline, proposals, billing, classification, and decision support with agents in daily use and a human on every decision. It is proof that the agentic operating model is lived before it is advised.",
  },
  {
    q: "What is the Rig?",
    a: "The Rig is the build environment behind Robert's work: build plans, acceptance gates, tests, history, handoffs, and observable agent work. It is the machine that builds the machines, including DigOps, BOSS, and the idigdata site itself.",
  },
  {
    q: "What is BOSS?",
    a: "BOSS is the business process harness: the transformation delivery asset a client can own at exit. It carries the workflow map, delivery state, validation cycle, SOP memory, and operating knowledge that make the transformation durable after the embedded operator leaves.",
  },
  {
    q: "How do DigOps, the Rig, and BOSS relate to idigdata?",
    a: "DigOps proves how Robert thinks and runs work. The Rig proves how Robert builds with discipline. BOSS is the client-facing operating asset that helps the business own the transformation. The three systems are proof of the model, not a menu of unrelated products.",
  },
  {
    q: "What are the Six Process Constellations?",
    a: "The Six Process Constellations are the operating-process spine idigdata uses to map every business: procure to pay, order to cash, plan to make, systems to support, data to report, and master data management. The six are common; the company-specific fill is what the engagement reveals.",
    aHtml: (
      <>
        The Six Process Constellations are the operating-process spine idigdata uses to map every business: <strong>P2P</strong> (procure to pay), <strong>O2C</strong> (order to cash), <strong>P2M</strong> (plan to make), <strong>S2S</strong> (systems to support), <strong>D2R</strong> (data to report), and <strong>MDM</strong> (master data management). The six are common; the company-specific fill is what the engagement reveals.
      </>
    ),
  },
  {
    q: "What does green/green or done/done mean?",
    a: "Green/green means delivered and validated. A workflow is not done because a task moved, a vendor signed off, or a go-live date arrived. It is done when delivery is complete and validation through real business use is also complete. BOSS makes that state visible.",
  },
  {
    q: "How is idigdata different from traditional consulting firms?",
    a: "Traditional firms often advise, staff layers, or run a vendor-adjacent program. idigdata supplies one senior embedded operator with a focused network behind him, no standing bench to feed, no managed-services tail, and a designed exit. The deliverable is an operating asset the business owns.",
  },
  {
    q: "How is idigdata different from AI advisory firms?",
    a: "Most AI advisory stops at literacy, policy, pilots, or tool selection. idigdata starts with the operating business: sponsorship, workflows, data, validation, controls, and adoption. Robert has shipped production agentic systems and uses agents in his own operating stack, so the advice is grounded in real work.",
  },
  {
    q: "How does someone contact idigdata?",
    a: "Contact Robert Paddock at robert@idigdata.com or through the contact form at idigdata.com/contact. The best first note names the business situation, the mandate, and what needs to be owned.",
    aHtml: (
      <>
        Contact Robert Paddock at{" "}
        <a
          href="mailto:robert@idigdata.com"
          className="font-semibold text-navy border-b border-navy/40 hover:border-navy"
        >
          robert@idigdata.com
        </a>{" "}
        or through the{" "}
        <a
          href="/contact/"
          className="font-semibold text-navy border-b border-navy/40 hover:border-navy"
        >
          contact form
        </a>
        . The best first note names the business situation, the mandate, and what needs to be owned.
      </>
    ),
  },
];

type Fact = { label: string; body: React.ReactNode };

const KEY_FACTS: Fact[] = [
  {
    label: "Name",
    body: (
      <>
        Robert Paddock. <strong className="text-navy">Practice:</strong> idigdata, independent since 2016.
      </>
    ),
  },
  {
    label: "Role",
    body: <>embedded transformation leader for agentic-era business-system change.</>,
  },
  {
    label: "Best fit",
    body: <>$100M-$1B operators with complex systems, workflows, vendors, and adoption pressure.</>,
  },
  {
    label: "Proof",
    body: <>30 years, 50+ implementations, 15 full transformations, 5 production agentic systems.</>,
  },
  {
    label: "Systems",
    body: <>DigOps, the Rig, and BOSS: proof stack, build discipline, and client-owned delivery asset.</>,
  },
  {
    label: "Core model",
    body: <>embedded transformation leadership, with fractional, adoption, and recovery as entry modes.</>,
  },
  {
    label: "Asset",
    body: <>business-owned operating asset: governed data, mapped workflows, visible delivery state, SOP memory, and people able to carry the work.</>,
  },
  {
    label: "Contact",
    body: (
      <>
        <a
          href="mailto:robert@idigdata.com"
          className="font-semibold text-navy border-b border-navy/40 hover:border-navy"
        >
          robert@idigdata.com
        </a>{" "}
        ·{" "}
        <a
          href="/contact/"
          className="font-semibold text-navy border-b border-navy/40 hover:border-navy"
        >
          idigdata.com/contact
        </a>
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
        <SectionKicker className="mb-5">
          FAQ
        </SectionKicker>
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
          FAQ - idigdata.
        </h1>
        <p className="mt-5 max-w-[760px] font-display italic text-stone text-[18px] leading-snug">
          Answer-first canon for machine-mediated research on idigdata,
          Robert Paddock, embedded transformation leadership, DigOps, the Rig,
          and BOSS.
        </p>
      </section>

      <section className="pt-2 pb-10">
        <div className="border-t border-navy/15 pt-8 max-w-[820px]">
          <p className="font-body uppercase tracking-section text-[12px] text-stone mb-5">
            Key facts
          </p>
          <dl className="font-body text-ink text-[16px] leading-relaxed space-y-2">
            {KEY_FACTS.map(({ label, body }) => (
              <div key={label} className="flex flex-col md:flex-row md:gap-2">
                <dt className="font-semibold text-navy md:whitespace-nowrap">
                  {label}:
                </dt>
                <dd>{body}</dd>
              </div>
            ))}
          </dl>
        </div>
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
