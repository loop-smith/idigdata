import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import AccentRule from "@/components/AccentRule";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: "Engagement - idigdata",
  description:
    "One engagement model: embedded transformation leadership, with fractional, adoption, and recovery paths into the same operator-led work.",
  alternates: { canonical: "/engagement/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/engagement/",
    title: "Engagement - idigdata",
    description:
      "Embedded transformation leadership for businesses ready to own the result.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata - Engagement",
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
      name: "Engagement",
      item: "https://idigdata.com/engagement/",
    },
  ],
};

const authorityDoors = [
  {
    name: "Fractional force",
    question: "One lever needs senior force.",
    body: "I step inside a specific transformation lever before the full mandate is clear: readiness, adoption, recovery triage, decision framing, or vendor-overwatch that needs an operator above the work.",
  },
  {
    name: "Full-time embedded owner",
    question: "The whole transformation needs one owner.",
    body: "I carry the mandate from inside the business: vendors, executives, operators, delivery state, adoption, capital logic, and the business-owned asset that remains when I exit.",
  },
];

const flavors = [
  "Agentics adoption becomes a fractional or embedded path depending on how much ownership the business needs.",
  "Recovery becomes the same question: is the stalled program one lever, or does the whole transformation need an owner?",
];

export default function EngagementPage() {
  return (
    <div className="mx-auto max-w-content bg-cream px-6 font-body text-navy">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative bg-cream pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-4">How I plug in</SectionKicker>
        <h1 className="text-balance font-vollkorn text-[46px] font-bold leading-[1.02] tracking-normal text-navy md:text-[62px] lg:text-[74px]">
          One model: embedded transformation leadership.
        </h1>
        <p className="mt-6 max-w-[820px] font-vollkorn text-[20px] font-medium italic leading-snug text-warm-gray md:text-[22px]">
          The buyer question is not which service line sounds right. It is how
          much owner the work needs.
        </p>
        <p className="mt-6 max-w-[820px] text-[16px] leading-relaxed text-ink">
          I work inside the business at senior-operator altitude, own the
          transformation path above the vendors, install the operating asset,
          and leave by design when the business can carry it.
        </p>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <SectionKicker className="mb-4">The model</SectionKicker>
        <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
          I embed where ownership is fractured.
        </h2>
        <div className="mt-6 max-w-[840px] space-y-4 text-[16px] leading-relaxed text-ink md:text-[17px]">
          <p>
            Most business-system work has no true owner above the vendor plan.
            Executives sponsor it, vendors implement pieces of it, project
            teams chase it, and operators absorb the consequences. I take the
            missing role: the senior embedded owner who binds mandate, delivery,
            adoption, capital logic, and exit into one accountable path.
          </p>
          <p>
            The owned asset layer underneath the work makes delivery visible,
            turns validation into operating knowledge, and gives the business
            something durable to own when I leave.
          </p>
        </div>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-cream px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <SectionKicker className="mb-4">Authority axis</SectionKicker>
        <h2 className="max-w-[900px] text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
          Fractional force or full-time embedded owner.
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] leading-relaxed text-ink md:text-[17px]">
          Adoption and recovery are not separate shelves. They are flavors under
          the same authority decision: does one lever need senior force, or does
          the whole transformation need one owner carrying the line?
        </p>
        <div className="mt-8 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {authorityDoors.map((door) => (
            <article
              key={door.name}
              className="border border-navy/15 border-l-[4px] border-l-gold bg-white px-6 py-7"
            >
              <p className="mb-3 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray">
                {door.name}
              </p>
              <h3 className="font-vollkorn text-[26px] font-bold leading-[1.18] tracking-normal text-navy">
                {door.question}
              </h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink">
                {door.body}
              </p>
            </article>
          ))}
        </div>
        <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-2">
          {flavors.map((flavor) => (
            <p
              key={flavor}
              className="border-t border-navy/15 pt-4 font-vollkorn text-[17px] italic leading-[1.45] text-warm-gray"
            >
              {flavor}
            </p>
          ))}
        </div>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <SectionKicker className="mb-4">The bench</SectionKicker>
        <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
          One operator, with continuity built into the work.
        </h2>
        <div className="mt-5 max-w-[820px] space-y-4 text-[16px] leading-relaxed text-ink md:text-[17px]">
          <p>
            I do not carry a standing bench. When the work needs specialist
            capacity, I bring known senior independents into scoped work
            packages, and they come off when the package is done. No pyramid,
            no overhead you carry, no dependency by design.
          </p>
          <p>
            The one-person question deserves a real answer, so here it is. The
            work is visible as it runs: delivery state, decisions, workflows,
            validations, none of it trapped in my head. The operating map,
            validation trail, and SOP memory remain as an asset your business
            owns. Your own people are developed through the work, so they can
            carry it. If I step away, the system and the people remain.
          </p>
        </div>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-cream px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <SectionKicker className="mb-4">Fit</SectionKicker>
        <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
          Best fit is a business ready to lead with technology now.
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] leading-relaxed text-ink md:text-[17px]">
          The work fits mid-market operators with enough complexity to justify
          senior embedded ownership: multi-entity, multi-platform, vendor-heavy
          environments across ERP, WMS, MES, EMR, CRM/CPQ, LIMS, QMS, MDM, or
          HRIS. AEC, beverage CPG, and healthcare are the strongest pattern
          matches.
        </p>
        <p className="mt-4 max-w-[820px] text-[16px] leading-relaxed text-ink md:text-[17px]">
          The buyer is not waiting for the market to settle. The buyer wants to
          lead with technology, land the work in the operating business, and own
          the result instead of renting dependency.
        </p>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <SectionKicker className="mb-4">Commercial logic</SectionKicker>
        <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
          Lean by design.
        </h2>
        <div className="mt-5 max-w-[820px] space-y-4 text-[16px] leading-relaxed text-ink md:text-[17px]">
          <p>
            The model is structurally lean: no carried bench, no permanent
            services tail, no vendor-platform lock-in, and no incentive to turn
            delivery into dependency. The business owns the asset and the exit
            is designed into the work.
          </p>
          <p>
            That structure matters in the boardroom. A meaningful
            transformation should be defended as a capital investment: build
            work creates an owned asset, go-live begins the useful-life
            conversation, and the CFO has a cleaner story than treating the
            whole program as temporary expense.
          </p>
          <p>
            I bring the operating and delivery substance. The CFO owns the final
            accounting judgment.
          </p>
        </div>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-cream px-0 pt-16 pb-20 md:px-8 md:pt-20 md:pb-24">
        <SectionKicker className="mb-4">Selectivity</SectionKicker>
        <h2 className="text-balance font-vollkorn text-[34px] font-extrabold leading-[1.06] tracking-normal text-navy md:text-[48px]">
          Not every mandate should become an engagement.
        </h2>
        <p className="mt-5 max-w-[820px] font-vollkorn text-[20px] font-medium italic leading-snug text-warm-gray md:text-[22px]">
          I take on a small number of embedded transformations where the mandate
          is real and the business is ready to own the result.
        </p>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[680px] rounded-[6px] border-l-[4px] border-l-gold bg-navy px-8 py-10 font-body text-cream shadow-[0_2px_24px_rgba(20,40,64,0.08)] md:px-10 md:py-12 lg:px-12 lg:py-14">
          <p className="mb-6 font-body text-[10.5px] font-semibold uppercase tracking-[0.24em] text-gold md:text-[11.5px]">
            Start with the mandate
          </p>
          <h2 className="mb-5 font-vollkorn text-[28px] font-bold leading-[1.18] tracking-normal text-cream md:text-[36px] lg:text-[42px]">
            Tell me what needs to be owned.
          </h2>
          <p className="mb-8 font-vollkorn text-[14.5px] font-normal italic leading-[1.6] text-[#DCD9CC] md:text-[15.5px]">
            The stalled transformation, the board pressure, the agentic
            question, the vendor knot, the CFO concern. One conversation will
            tell us whether this is a real fit.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-[13px] font-semibold uppercase tracking-[0.18em] text-navy transition-all duration-200 hover:bg-[#FFD740] hover:shadow-lg md:text-[14px]"
          >
            Start a conversation <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
