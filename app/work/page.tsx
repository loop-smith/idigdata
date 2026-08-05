import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: {
    absolute: "The Work · Built · Operated · Proven | idigdata",
  },
  description:
    "BOSS, The Rig, and FlowCraft - the customer-side operating systems behind enterprise transformation and Applied Agentics - with enterprise field validation and 30 years of operator provenance.",
  alternates: { canonical: "/work/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/work/",
    title: "The Work · Built · Operated · Proven | idigdata",
    description:
      "Systems, scar tissue, enterprise validation, and the judgment underneath - not a product shelf.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata - The Work",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://idigdata.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "The Work",
      item: "https://idigdata.com/work/",
    },
  ],
};

const defects = [
  "Transformation knowledge is scattered across decks, vendor tools, and people's heads.",
  "Human and agent work disappears into threads; authority and completion are difficult to verify.",
  "Automations produce output without an owned operating path the business can run Monday morning.",
] as const;

const systems = [
  {
    id: "boss",
    name: "BOSS",
    job: "Client-owned transformation twin",
    holds:
      "Workflows, decisions, dependencies, systems, ownership, delivery state, and institutional memory held as one durable business asset.",
    owns: "The twin and the operating knowledge - not a rented PMO artifact.",
    frontier: "Continuous enrichment of the twin as the business changes.",
    defect:
      "Transformation knowledge lives in slide decks, partner tools, and people's heads - then walks out the door.",
  },
  {
    id: "rig",
    name: "The Rig",
    job: "Governed build and evidence environment",
    holds:
      "Work routing, validation gates, evidence trails, and human authority over agent action - inspectable, not chat-ephemeral.",
    owns: "The engagement evidence trail and the standards used to build.",
    frontier: "Tighter observability and handoff discipline under real load.",
    defect:
      "Agent and human work disappears into threads. Completion is unverifiable. Authority is unclear.",
  },
  {
    id: "flowcraft",
    name: "FlowCraft",
    job: "Human-and-agent workflow runtime",
    holds:
      "Live workflows across people, enterprise systems, data, and agents - with state, boundaries, handoffs, and validation made explicit.",
    owns: "Runnable workflow capability transferred with the team.",
    frontier: "Broader workflow coverage without losing named ownership.",
    defect:
      "Automations and agents produce output without an owned operating path the business can run Monday morning.",
  },
] as const;

const provenance = [
  {
    stage: "PCD",
    lesson:
      "Vendors are trades; someone on the owner's side must hold the whole build.",
  },
  {
    stage: "Timberline",
    lesson:
      "Systems must work inside the operating business - founder/CEO/CTO scale from $250K to $130M, national US and China.",
  },
  {
    stage: "AccessIT",
    lesson:
      "The partner and SI model has natural boundaries and incentives - later governed from the customer side.",
  },
  {
    stage: "idigdata",
    lesson:
      "The customer needs authority above platforms and workstreams.",
  },
  {
    stage: "Sierra Nevada",
    lesson:
      "Transformation, data ownership, and production AI can operate as one mandate.",
  },
  {
    stage: "Now",
    lesson:
      "BOSS, The Rig, and FlowCraft turn that operating model into working systems.",
  },
] as const;

const digCases = [
  {
    title: "Post-M&A consolidation",
    situation: "$350M post-M&A systems estate across entities and currencies.",
    stakes: "Close cycle, master data, WMS, and SKU chaos blocking the operating company.",
    seat: "Customer-side transformation ownership above the vendors.",
    changed:
      "Reconciled master data, unified chart of accounts and WMS, rationalized 30K+ SKUs.",
    result: "Period close cut from 18 to 4 days in 11 months.",
    kept: "A business-owned consolidated operating fabric.",
  },
  {
    title: "ERP recovery",
    situation: "Stalled $8M ERP program under partner-led delivery.",
    stakes: "Spend continuing without an owned outcome path.",
    seat: "Reset partner governance from the customer side.",
    changed: "Recovered the program; delivered a client-owned API bridge.",
    result: "Bridge later registered as IP.",
    kept: "Company-owned integration capability - not partner lock-in.",
  },
  {
    title: "Vendor cost reset",
    situation: "$8M-$10M vendor proposal for required capability.",
    stakes: "Capital and ownership at risk of vendor-shaped spend.",
    seat: "Reframe the ask from the customer's authority.",
    changed: "Delivered the required capability for under $2M.",
    result: "Material capital preserved.",
    kept: "Company ownership of the result.",
  },
] as const;

export default function WorkPage() {
  return (
    <div className="mx-auto max-w-content bg-cream px-6 font-body text-navy">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-4">The Work</SectionKicker>
        <h1 className="text-balance font-vollkorn text-[46px] font-bold leading-[1.02] tracking-normal text-navy md:text-[62px] lg:text-[74px]">
          Built. Operated. Proven.
        </h1>
        <p className="mt-6 max-w-[820px] font-vollkorn text-[20px] font-medium italic leading-snug text-warm-gray md:text-[22px]">
          The systems, the scar tissue, the enterprise validation, and the
          judgment underneath.
        </p>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Why they exist</SectionKicker>
        <h2 className="max-w-[24ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          Knowledge walks out. Work disappears. Automation stops at output.
        </h2>
        <ul className="mt-8 max-w-[62ch] space-y-3">
          {defects.map((line) => (
            <li
              key={line}
              className="border-l-[3px] border-gold pl-4 text-[16px] leading-[1.65] text-ink"
            >
              {line}
            </li>
          ))}
        </ul>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Present systems</SectionKicker>
        <h2 className="max-w-[24ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          Three working systems. One customer-side operating architecture.
        </h2>
        <div className="mt-12 space-y-14">
          {systems.map((s) => (
            <article
              key={s.id}
              id={s.id}
              className="scroll-mt-28 border-l-[3px] border-gold pl-5 md:pl-7"
            >
              <p className="font-brand text-[12px] font-bold uppercase tracking-[0.18em] text-warm-gray">
                {s.name}
              </p>
              <h3 className="mt-2 font-vollkorn text-[28px] font-bold leading-[1.15] text-navy md:text-[34px]">
                {s.job}
              </h3>
              <p className="mt-4 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
                <span className="font-semibold text-navy">Why it had to exist: </span>
                {s.defect}
              </p>
              <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
                <span className="font-semibold text-navy">What it holds: </span>
                {s.holds}
              </p>
              <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
                <span className="font-semibold text-navy">What the client owns: </span>
                {s.owns}
              </p>
              <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.6] text-warm-gray">
                <span className="font-semibold">Where the frontier remains: </span>
                {s.frontier}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-[62ch] border-l-[3px] border-navy/20 pl-5 text-[17px] leading-[1.65] text-navy">
          These are not three software products looking for a problem. They are
          the systems built after 30 years of seeing where transformations - and
          now production agentics - break.
        </p>
        <div className="mt-10 max-w-[720px]">
          <Image
            src="/diagrams/system-verse.svg"
            alt="Operating architecture spanning people, data, systems, and agents"
            width={720}
            height={400}
            className="h-auto w-full"
          />
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Enterprise field validation</SectionKicker>
        <h2 className="max-w-[24ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          The ownership doctrine was validated inside a ~$420M operating company.
        </h2>
        <div className="mt-6 max-w-[62ch] space-y-4 text-[16px] leading-[1.65] text-ink">
          <p>
            Embedded through idigdata as CIO and full member of the executive
            leadership team at Sierra Nevada Brewing - accountable for a $15M
            enterprise transformation portfolio across strategy, architecture,
            operations, cybersecurity, vendors, and governance.
          </p>
          <p>
            Consolidated siloed legacy technology into a cohesive, business-owned
            function; reduced consulting dependency; governed 150+ internal and
            external participants under one operating model; kept the business
            running while transforming.
          </p>
          <p>
            Established a company-owned data core and integration architecture
            spanning 50+ enterprise systems. Put enterprise agentic systems into
            production with training, security controls, human validation, and
            named business owners - then transferred the platform and operating
            discipline to internal teams.
          </p>
          <p className="font-semibold text-navy">
            BOSS, The Rig, and FlowCraft are the present operating answer that
            emerged from 30 years of customer-side work - including the
            enterprise lessons validated at Sierra Nevada.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Transformation receipts</SectionKicker>
        <h2 className="max-w-[20ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          Selected idigdata outcomes.
        </h2>
        <div className="mt-10 space-y-10">
          {digCases.map((c) => (
            <article
              key={c.title}
              className="max-w-[720px] border border-navy/10 bg-white px-6 py-7 md:px-8"
            >
              <h3 className="font-vollkorn text-[24px] font-bold text-navy">
                {c.title}
              </h3>
              <dl className="mt-5 space-y-3 text-[15px] leading-[1.55] text-ink">
                <div>
                  <dt className="font-brand text-[11px] font-bold uppercase tracking-[0.16em] text-warm-gray">
                    Situation
                  </dt>
                  <dd className="mt-1">{c.situation}</dd>
                </div>
                <div>
                  <dt className="font-brand text-[11px] font-bold uppercase tracking-[0.16em] text-warm-gray">
                    Stakes
                  </dt>
                  <dd className="mt-1">{c.stakes}</dd>
                </div>
                <div>
                  <dt className="font-brand text-[11px] font-bold uppercase tracking-[0.16em] text-warm-gray">
                    Seat
                  </dt>
                  <dd className="mt-1">{c.seat}</dd>
                </div>
                <div>
                  <dt className="font-brand text-[11px] font-bold uppercase tracking-[0.16em] text-warm-gray">
                    What changed
                  </dt>
                  <dd className="mt-1">{c.changed}</dd>
                </div>
                <div>
                  <dt className="font-brand text-[11px] font-bold uppercase tracking-[0.16em] text-warm-gray">
                    Result
                  </dt>
                  <dd className="mt-1 font-semibold text-navy">{c.result}</dd>
                </div>
                <div>
                  <dt className="font-brand text-[11px] font-bold uppercase tracking-[0.16em] text-warm-gray">
                    What remained
                  </dt>
                  <dd className="mt-1">{c.kept}</dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Provenance</SectionKicker>
        <h2 className="max-w-[20ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          Thirty years underneath the systems.
        </h2>
        <ol className="mt-10 space-y-5">
          {provenance.map((p) => (
            <li
              key={p.stage}
              className="grid gap-2 border-b border-navy/10 pb-5 md:grid-cols-[160px_1fr] md:gap-8"
            >
              <p className="font-brand text-[12px] font-bold uppercase tracking-[0.16em] text-navy">
                {p.stage}
              </p>
              <p className="text-[16px] leading-[1.65] text-ink">{p.lesson}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">What you keep</SectionKicker>
        <h2 className="max-w-[22ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          Owned capability after the engagement.
        </h2>
        <ul className="mt-8 max-w-[62ch] space-y-3 text-[16px] leading-[1.65] text-ink">
          <li className="border-l-[3px] border-gold pl-4">
            Mapped workflows and operating knowledge the business can run
          </li>
          <li className="border-l-[3px] border-gold pl-4">
            Governed data and visible delivery state
          </li>
          <li className="border-l-[3px] border-gold pl-4">
            People developed to carry the next cycle
          </li>
          <li className="border-l-[3px] border-gold pl-4">
            Agents under boundaries with named owners - when the mandate calls
            for them
          </li>
        </ul>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
          <Link
            href="/contact/"
            className="group inline-flex items-center justify-center gap-2 rounded-[3px] bg-gold px-7 py-3.5 font-brand text-[12px] font-bold uppercase tracking-[0.15em] text-navy transition-colors hover:bg-[#FFD84D]"
          >
            Start a conversation
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
          <Link
            href="/approach/"
            className="font-brand text-[12px] font-bold uppercase tracking-[0.14em] text-navy hover:text-navy/70"
          >
            Approach →
          </Link>
          <Link
            href="/applied-agentics/"
            className="font-brand text-[12px] font-bold uppercase tracking-[0.14em] text-navy hover:text-navy/70"
          >
            Applied Agentics →
          </Link>
        </div>
      </section>
    </div>
  );
}
