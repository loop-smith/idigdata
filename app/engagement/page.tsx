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

const entryModes = [
  {
    name: "Fractional entry",
    use: "When one transformation lever needs senior force before the full mandate is clear.",
    body: "I step inside the work, stabilize the decision frame, and show the business what the embedded model can do.",
  },
  {
    name: "Adoption entry",
    use: "When the question is agentics, readiness, or how to lead with new capability without creating another dependency.",
    body: "I turn the agentic ambition back into workflow, data, sponsorship, and validation choices the business can own.",
  },
  {
    name: "Recovery entry",
    use: "When an ERP, systems, or transformation program is stuck and needs an operator above the vendor path.",
    body: "I reframe the delivery spine, pull the real blockers into view, and drive toward done/done with the operator's team.",
  },
];

const benchPoints = [
  "senior independents for scoped packages",
  "no standing bench overhead",
  "continuity that survives the operator",
];

export default function EngagementPage() {
  return (
    <div className="mx-auto max-w-content px-6 font-body bg-cream text-navy">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative bg-cream pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-4">How I plug in</SectionKicker>
        <h1 className="font-vollkorn font-bold text-navy text-[46px] md:text-[62px] lg:text-[74px] leading-[1.02] tracking-normal text-balance">
          One model: embedded transformation leadership.
        </h1>
        <p className="mt-6 max-w-[820px] font-vollkorn italic font-medium text-warm-gray text-[20px] md:text-[22px] leading-snug">
          Fractional, adoption, and recovery are entry modes into the same work,
          not a shelf of services.
        </p>
        <p className="mt-6 max-w-[820px] text-[16px] text-ink leading-relaxed">
          The shape is simple: I work inside the business at senior-operator
          altitude, own the transformation path above the vendors, install the
          operating asset, and leave by design when the business can carry it.
        </p>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <SectionKicker className="mb-4">The model</SectionKicker>
        <h2 className="font-vollkorn font-extrabold text-navy text-[34px] md:text-[48px] leading-[1.04] tracking-normal text-balance">
          I embed where ownership is fractured.
        </h2>
        <div className="mt-6 max-w-[840px] text-[16px] md:text-[17px] text-ink leading-relaxed space-y-4">
          <p>
            Most business-system work has no true owner above the vendor plan.
            Executives sponsor it, vendors implement pieces of it, project teams
            chase it, and operators absorb the consequences. I take the missing
            role: the senior embedded owner who binds mandate, delivery,
            adoption, capital logic, and exit into one accountable path.
          </p>
          <p>
            BOSS is the asset layer underneath the work. It makes delivery
            visible, turns validation into operating knowledge, and gives the
            business something durable to own when I leave.
          </p>
        </div>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-cream px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <SectionKicker className="mb-4">Entry modes</SectionKicker>
        <h2 className="font-vollkorn font-extrabold text-navy text-[34px] md:text-[48px] leading-[1.04] tracking-normal text-balance">
          Three doorways into the same operator model.
        </h2>
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {entryModes.map((mode) => (
            <article
              key={mode.name}
              className="rounded-md border border-navy/15 bg-white px-6 py-6 shadow-[0_2px_16px_rgba(20,40,64,0.05)]"
            >
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray mb-3">
                {mode.name}
              </p>
              <h3 className="font-vollkorn font-bold text-navy text-[21px] leading-[1.22] tracking-normal">
                {mode.use}
              </h3>
              <p className="mt-4 text-[15px] text-ink leading-relaxed">
                {mode.body}
              </p>
            </article>
          ))}
        </div>
        <p className="mt-8 max-w-[820px] font-vollkorn italic text-warm-gray text-[15px] md:text-[16px] leading-snug">
          If the doorway matures, the work becomes the embedded model. If it
          does not, we both know early.
        </p>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <SectionKicker className="mb-4">The bench</SectionKicker>
        <h2 className="font-vollkorn font-extrabold text-navy text-[34px] md:text-[48px] leading-[1.04] tracking-normal text-balance">
          One operator — with continuity built into the work.
        </h2>
        <div className="mt-5 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed space-y-4">
          <p>
            I do not carry a standing bench. When the work needs specialist
            capacity, I bring known senior independents into scoped work
            packages, and they come off when the package is done. No pyramid,
            no overhead you carry, no dependency by design.
          </p>
          <p>
            The one-person question deserves a real answer, so here it is. The
            work is visible as it runs — delivery state, decisions, workflows,
            validations — none of it trapped in my head. BOSS holds the
            operating map, the validation trail, and the SOP memory as an asset
            your business owns. Your own people are developed through the work,
            so they can carry it. And when a scope needs specialist hands, I
            bring in senior independents for that package. If I step away, the
            system and the people remain.
          </p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-5">
          {benchPoints.map((point) => (
            <div
              key={point}
              className="rounded-md border border-navy/15 bg-cream px-5 py-5 shadow-[0_2px_16px_rgba(20,40,64,0.05)]"
            >
              <p className="text-[15px] text-ink leading-relaxed">{point}</p>
            </div>
          ))}
        </div>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-cream px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <SectionKicker className="mb-4">Fit</SectionKicker>
        <h2 className="font-vollkorn font-extrabold text-navy text-[34px] md:text-[48px] leading-[1.04] tracking-normal text-balance">
          Best fit is a business ready to lead with technology now.
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed">
          The work fits mid-market operators with enough complexity to justify
          senior embedded ownership: multi-entity, multi-platform, vendor-heavy
          environments across ERP, WMS, MES, EMR, CRM/CPQ, LIMS, QMS, MDM, or
          HRIS. AEC, beverage CPG, and healthcare are the strongest pattern
          matches.
        </p>
        <p className="mt-4 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed">
          The buyer is not waiting for the market to settle. The buyer wants to
          lead with technology, land the work in the operating business, and own
          the result instead of renting dependency.
        </p>
      </section>

      <AccentRule className="mt-4" />

      <section className="bg-pale-navy px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <SectionKicker className="mb-4">Commercial logic</SectionKicker>
        <h2 className="font-vollkorn font-extrabold text-navy text-[34px] md:text-[48px] leading-[1.04] tracking-normal text-balance">
          Lean by design.
        </h2>
        <div className="mt-5 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed space-y-4">
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

      <section className="bg-cream px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <SectionKicker className="mb-4">Selectivity</SectionKicker>
        <h2 className="font-vollkorn font-extrabold text-navy text-[34px] md:text-[48px] leading-[1.04] tracking-normal text-balance">
          Not every mandate should become an engagement.
        </h2>
        <p className="mt-5 max-w-[820px] font-vollkorn italic font-medium text-warm-gray text-[20px] md:text-[22px] leading-snug">
          I take on a small number of embedded transformations where the mandate
          is real and the business is ready to own the result.
        </p>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[680px] bg-navy text-cream font-body rounded-[6px] shadow-[0_2px_24px_rgba(20,40,64,0.08)] border-l-[4px] border-l-gold px-8 md:px-10 lg:px-12 py-10 md:py-12 lg:py-14">
          <p className="font-body font-semibold uppercase text-gold text-[10.5px] md:text-[11.5px] tracking-[0.24em] mb-6">
            Start with the mandate
          </p>
          <h2 className="font-vollkorn font-bold text-cream text-[28px] md:text-[36px] lg:text-[42px] leading-[1.18] tracking-normal mb-5">
            Tell me what needs to be owned.
          </h2>
          <p className="font-vollkorn italic font-normal text-[#DCD9CC] text-[14.5px] md:text-[15.5px] leading-[1.6] mb-8">
            The stalled transformation, the board pressure, the agentic question,
            the vendor knot, the CFO concern. One conversation will tell us
            whether this is a real fit.
          </p>
          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 bg-gold text-navy font-body font-semibold uppercase text-[13px] md:text-[14px] tracking-[0.18em] px-8 py-4 rounded-full hover:bg-[#FFD740] hover:shadow-lg transition-all duration-200"
          >
            Start a conversation <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
