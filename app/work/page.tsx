import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import ProofFigure from "@/components/ProofFigure";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: {
    absolute: "The Work · Built · Operated · Proven | idigdata",
  },
  description:
    "Field receipts and the customer-side operating architecture behind transformation and Applied Agentics - what the company keeps.",
  alternates: { canonical: "/work/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/work/",
    title: "The Work · Built · Operated · Proven | idigdata",
    description:
      "Field receipts and the customer-side operating architecture behind transformation and Applied Agentics - what the company keeps.",
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

const receipts = [
  "$350M post-M&A estate in 11 months - close cycle 18→4 days · 30K+ SKUs under one operating picture",
  "Stalled $8M ERP recovered - client-owned API bridge registered as IP",
  "$8M-$10M vendor ask delivered for under $2M - company ownership preserved",
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
          Scar tissue from owning the whole under pressure - and the
          architecture so the next mandate does not start from zero.
        </p>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <h2 className="max-w-[24ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          Maturity is fewer clearer ways - not more technology.
        </h2>
        <p className="mt-8 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
          Enterprises do not fail because they lack platforms. They fail when
          integration, data, security, vendors, and now agents are treated as
          separate science projects. I connect those disciplines into one
          operating whole the business can run - reusable patterns and decision
          frames, not a new tool for every program.
        </p>
        <p className="mt-5 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
          The question is never API vs event vs batch vs file vs agent. It is
          when each pattern earns its place - and who owns the result.
        </p>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <h2 className="max-w-[24ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          The operating architecture behind the work.
        </h2>
        <p className="mt-8 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
          BOSS, The Rig, and FlowCraft form the delivery architecture behind the
          mandate: a client-owned transformation twin, a governed builder and
          evidence environment, and a human-and-agent workflow runtime. They are
          working receipts, not products for sale.
        </p>
        <ProofFigure
          src="/diagrams/system-verse.svg"
          alt="The Systemverse - future-state systems map with a company-owned data core at the center and the application layer around it"
          kicker="Future-state systems map"
          caption="The Systemverse is the estate picture the company keeps: a governed view of how data, applications, workflows, controls, and ownership fit together."
        />
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <h2 className="max-w-[24ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          Proven inside a ~$420M operating company.
        </h2>
        <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
          As CIO of Sierra Nevada Brewing, I led a $15M transformation involving
          more than 150 people. We consolidated siloed legacy technology into a
          business-owned function, reduced consulting dependency, established a
          single governance model, and put enterprise agentic AI into production
          on a company-owned data platform - with training, controls, and named
          ownership. Capability transferred to internal teams.
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
        <h2 className="max-w-[22ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          Thirty years across SI floors, customer-side mandates, and CIO
          accountability.
        </h2>
        <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
          Pattern recognition from owning the whole under pressure - warehouse
          floor to boardroom - long before the vocabulary was fashionable. My
          advantage is not allegiance to one platform. It is the scar tissue
          from carrying customer-side accountability when the outcome was on the
          line.
        </p>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <h2 className="max-w-[22ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
          Built to be owned, not rented.
        </h2>
        <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.65] text-ink">
          Mapped workflows. Governed data. Visible delivery state. People able
          to carry the next cycle. Agents under boundaries with named owners. I
          leave; the operating capability stays.
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
