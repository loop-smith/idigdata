import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: {
    absolute: "The Work · Built · Operated · Proven | idigdata",
  },
  description:
    "Field receipts, provenance, and the customer-side operating architecture behind transformation and Applied Agentics.",
  alternates: { canonical: "/work/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/work/",
    title: "The Work · Built · Operated · Proven | idigdata",
    description:
      "Field receipts, provenance, and the customer-side operating architecture behind transformation and Applied Agentics.",
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

const systems = [
  {
    id: "boss",
    name: "BOSS",
    why: "The business needs a twin of the transformation it can own - not a binder the SI leaves behind.",
    holds:
      "Operating model, workflows, decisions, delivery state, and the evidence trail the company keeps.",
    owns: "The twin. The history. The next cycle.",
    frontier:
      "Deeper coupling to live estate data without becoming another platform the business rents.",
  },
  {
    id: "rig",
    name: "The Rig",
    why: "Agents and integrations need a governed place to be built, tested, and evidenced - not laptop demos.",
    holds:
      "Builder environment, controls, observability, and proof that production path is real.",
    owns: "The method and the artifacts that survive the engagement.",
    frontier:
      "Faster path from validated pattern to floor-safe production without losing governance.",
  },
  {
    id: "flowcraft",
    name: "FlowCraft",
    why: "Human and agent work has to run as one workflow the business can see and improve.",
    holds: "Runtime for people-and-agent processes under named ownership.",
    owns: "The operating rhythm - not a black-box automation vendor.",
    frontier:
      "Broader production patterns without turning the runtime into a second ERP.",
  },
] as const;

const receipts = [
  "$350M post-M&A estate in 11 months - close cycle 18→4 days · 30K+ SKUs under one operating picture",
  "Stalled $8M ERP recovered - client-owned API bridge registered as IP",
  "$8M-$10M vendor ask delivered for under $2M - company ownership preserved",
] as const;

const mandateCovers = [
  "ERP and estate modernization",
  "Data and integration spine the business owns",
  "Vendor and SI governance under one accountable seat",
  "Keep-running change through cutover and adoption",
  "Applied Agentics in production on that same layer",
  "Transfer - team capability and owned operating asset",
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
          Scar tissue, enterprise validation, and the systems built so the next
          mandate does not start from zero.
        </p>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <h2 className="max-w-[24ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          Knowledge walks out. Work disappears. Automation stops at output.
        </h2>
        <p className="mt-8 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
          Transformations fail in the seams - between vendors, between systems,
          between the program and the people who have to run Monday morning. The
          architecture below exists because those seams kept repeating across 30
          years of customer-side work.
        </p>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <h2 className="max-w-[24ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          Three working systems. One customer-side operating architecture.
        </h2>
        <p className="mt-8 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
          These are not three software products looking for a problem. They are
          receipts and templates from 30 years of seeing where transformations -
          and now production agentics - break.
        </p>
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
              <p className="mt-4 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
                <span className="font-semibold text-navy">Why: </span>
                {s.why}
              </p>
              <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
                <span className="font-semibold text-navy">Holds: </span>
                {s.holds}
              </p>
              <p className="mt-3 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
                <span className="font-semibold text-navy">Owns: </span>
                {s.owns}
              </p>
              <p className="mt-3 max-w-[62ch] text-[15px] leading-[1.6] text-warm-gray">
                <span className="font-semibold">Frontier: </span>
                {s.frontier}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <h2 className="max-w-[24ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          The ownership doctrine was validated inside a ~$420M operating company.
        </h2>
        <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
          As CIO at Sierra Nevada Brewing, I led a $15M transformation with 150+
          internal and external participants. Siloed legacy technology became a
          business-owned function. One governance model. Company-owned data
          platform. Enterprise agentic AI in production - with training,
          controls, and named business ownership. Capability transferred to
          internal teams.
        </p>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <h2 className="max-w-[20ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          Selected customer-side receipts
        </h2>
        <ul className="mt-8 max-w-[62ch] space-y-3">
          {receipts.map((line) => (
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
        <h2 className="max-w-[20ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          Thirty years on the customer side of the work
        </h2>
        <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
          SI floors → embedded customer-side mandates → CIO altitude. Pattern
          recognition from owning the whole under pressure - warehouse floor to
          boardroom - long before the vocabulary was fashionable.
        </p>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <h2 className="max-w-[20ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          What the mandate covers
        </h2>
        <ul className="mt-8 max-w-[62ch] space-y-3">
          {mandateCovers.map((line) => (
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
        <h2 className="max-w-[22ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          Built to be owned, not rented.
        </h2>
        <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
          Mapped workflows. Governed data. Visible delivery state. People able
          to carry the next cycle. Agents under boundaries with named owners. I
          leave; the asset stays.
        </p>
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
            href="/method/"
            className="font-brand text-[12px] font-bold uppercase tracking-[0.14em] text-navy hover:text-navy/70"
          >
            How I work →
          </Link>
        </div>
      </section>
    </div>
  );
}
