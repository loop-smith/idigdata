import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import AccentRule from "@/components/AccentRule";
import ProofFigure from "@/components/ProofFigure";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: {
    absolute: "Method · How Robert Owns the Change | idigdata",
  },
  description:
    "People, data, systems, and workflows as one ownership job - with Applied Agentics nested on the same layer.",
  alternates: { canonical: "/method/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/method/",
    title: "Method · How Robert Owns the Change | idigdata",
    description:
      "People, data, systems, and workflows as one ownership job - with Applied Agentics nested on the same layer.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata - Method",
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
      name: "Method",
      item: "https://idigdata.com/method/",
    },
  ],
};

const workMoves = [
  "Embed on the customer side",
  "Establish authority above vendors and workstreams",
  "Map operating reality - how work actually moves",
  "One governance frame the business owns",
  "Modernize while the company still runs",
  "Land agents only where the production path is real",
  "Train, transfer, leave an owned asset",
] as const;

export default function MethodPage() {
  return (
    <div className="mx-auto max-w-content bg-cream px-6 font-body text-navy">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-4">Method</SectionKicker>
        <h1 className="text-balance font-vollkorn text-[46px] font-bold leading-[1.02] tracking-normal text-navy md:text-[62px] lg:text-[74px]">
          People, data, systems, and workflows - one ownership job.
        </h1>
        <p className="mt-6 max-w-[820px] text-[16px] leading-relaxed text-ink md:text-[17px]">
          I start inside the operating company, make the real workflows and
          decision paths visible, establish authority above platforms and
          workstreams, and carry the change through adoption and stable
          operations.
        </p>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
              Vendors are trades. Someone still has to own the build.
            </h2>
          </div>
          <div className="space-y-5 text-[16px] leading-relaxed text-ink md:text-[17px]">
            <p>
              Platforms and SIs deliver scope. They do not own the operating
              result. Someone on the customer side still has to hold people,
              data, systems, vendors, and adoption as one job through cutover.
            </p>
          </div>
        </div>
        <div className="mt-10 border-l-[4px] border-l-gold bg-navy px-7 py-8 text-cream md:max-w-[720px] md:px-8">
          <p className="font-vollkorn text-[22px] font-bold leading-[1.2] text-cream md:text-[26px]">
            Two of my earliest calls are to finance and control.
          </p>
        </div>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-cream px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
          I hold the layer above any one platform.
        </h2>
        <div className="mt-5 max-w-[820px] space-y-4 text-[16px] leading-relaxed text-ink md:text-[17px]">
          <p>
            ERP is usually the center of gravity - never the whole system. WMS,
            MES, CRM/CPQ, EAM, MDM, PLM, APIs, and integration have to
            reconcile to a truth the business can run and the audit can trust.
            Keep-running discipline through cutover, adoption, and multi-entity
            complexity.
          </p>
          <p className="text-[15px] leading-[1.6] text-warm-gray">
            Dynamics 365 and Business Central deep; peer-literate across other
            major estates when the mandate requires it.
          </p>
        </div>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
          How the work moves
        </h2>
        <ol className="mt-8 max-w-[62ch] space-y-4">
          {workMoves.map((step, i) => (
            <li
              key={step}
              className="flex gap-4 border-b border-navy/10 pb-4 text-[16px] leading-[1.65] text-ink last:border-b-0"
            >
              <span className="shrink-0 font-brand text-[12px] font-bold uppercase tracking-[0.16em] text-navy">
                {i + 1}.
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>

        <ProofFigure
          src="/diagrams/beehive.svg"
          alt="The Beehive - operating fabric of process flows crossing functional groups before any one platform"
          kicker="Operating fabric"
          caption="The Beehive - how work actually moves across functional groups before platforms. Universal frame; bespoke fill per operator. The operating fabric I map before we modernize or land agents."
        />
      </section>

      <AccentRule className="mt-4" />

      <section
        id="agentics"
        className="scroll-mt-28 bg-cream px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24"
      >
        <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
          Agents on the same ownership layer.
        </h2>
        <p className="mt-5 max-w-[820px] font-vollkorn text-[18px] font-medium italic leading-snug text-warm-gray md:text-[20px]">
          Applied Agentics means people, data, systems, and agents designed,
          governed, and operated as one production system - not four
          disconnected vendor relationships.
        </p>
        <div className="mt-8 max-w-[820px] space-y-5 text-[16px] leading-relaxed text-ink md:text-[17px]">
          <p>
            <span className="font-semibold text-navy">Why nested: </span>
            Transform opens the door. Agentics is today&apos;s power toolset on
            that same layer - not a second equal offer.
          </p>
          <p>
            <span className="font-semibold text-navy">Production means: </span>
            Boundaries. Human validation. Observability. Security. Training.
            Named business ownership. The standard is production capability,
            not demonstration.
          </p>
          <p>
            <span className="font-semibold text-navy">Field receipt: </span>
            At Sierra Nevada Brewing, enterprise agentic AI ran in production on
            a company-owned data platform - with training, controls, and named
            business ownership - not a lab pilot.
          </p>
          <p>
            <span className="font-semibold text-navy">
              Build environment (named once):{" "}
            </span>
            BOSS · The Rig · FlowCraft - receipts and templates for how that
            work gets built and evidenced. See{" "}
            <Link
              href="/work/"
              className="font-semibold text-navy underline decoration-gold/60 underline-offset-4"
            >
              /work/
            </Link>
            .
          </p>
          <p>
            <span className="font-semibold text-navy">What you own: </span>
            Transferred platform discipline and internal capacity to run and
            extend what we build.
          </p>
        </div>
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
            href="/work/"
            className="font-brand text-[12px] font-bold uppercase tracking-[0.14em] text-navy hover:text-navy/70"
          >
            See the work →
          </Link>
        </div>
      </section>
    </div>
  );
}
