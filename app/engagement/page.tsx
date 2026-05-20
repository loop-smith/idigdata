import type { Metadata } from "next";
import Link from "next/link";
import EngagementShape from "@/components/EngagementShape";
import M4Watermark from "@/components/M4Watermark";
import RomanMarker from "@/components/RomanMarker";
import AccentRule from "@/components/AccentRule";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: "Engagement — idigdata",
  description:
    "How I plug in. Three engagement shapes — embedded, fractional, agentics. Commercial logic that's flat-rate, structurally lean, and exit-by-design. Capital structure that's CFO-defensible.",
  alternates: { canonical: "/engagement/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/engagement/",
    title: "Engagement — idigdata · Forward-Deployed Operator",
    description:
      "Three engagement shapes. Same architecture. Sized to the work.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Engagement",
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

export default function EngagementPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative bg-cream pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-4">
          How I plug in
        </p>
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
          Three engagement shapes.
        </h1>
        <p className="mt-5 max-w-[820px] font-vollkorn italic font-medium text-warm-gray text-[18px] md:text-[20px] leading-snug">
          Same architecture. Sized to the work.
        </p>
        <p className="mt-5 max-w-[820px] text-[16px] text-ink leading-relaxed">
          <strong className="font-semibold text-navy">Embedded</strong> for the
          full transformation.{" "}
          <strong className="font-semibold text-navy">Fractional</strong> for the
          specific lever.{" "}
          <strong className="font-semibold text-navy">Agentics</strong> for the
          substrate-aware AI program.{" "}
          <em className="italic font-medium text-navy">
            Same discipline underneath.
          </em>
        </p>
      </section>

      <section className="bg-cream px-0 md:px-8 pt-4 pb-12">
        <h2 className="font-body font-bold uppercase tracking-section text-[14px] text-navy border-b border-navy pb-2 mb-8">
          Three engagement shapes
        </h2>

        <div className="max-w-[860px] space-y-2">
          <EngagementShape
            variant="editorial"
            marker={<RomanMarker num={1} />}
            name="Embedded"
            lead="Use when the transformation itself needs an operator inside it."
            body={
              <>
                <p>
                  Full transformation residency. Forward-deployed operator with
                  virtual bench pulled in for exact scope. Full executive scope
                  as contractor: strategy, operations, vendor portfolio, risk,
                  governance. Inside-out: team-building, lifecycle delivery,
                  operating-model change, IT-department shore-up, BOSS
                  deployment, agentic framework.
                </p>
                <p className="mt-3">
                  Outcome: the operator&rsquo;s asset, fully built and operating.
                  Unified governance across delivery, adoption, and operational
                  change &mdash; one operating layer over the entire
                  transformation.
                </p>
              </>
            }
          />
          <EngagementShape
            variant="editorial"
            marker={<RomanMarker num={2} />}
            name="Fractional"
            lead="Use when one lever needs senior force without a full residency."
            body={
              <>
                <p>
                  Engagements where a specific lever needs moving: unblock a
                  stalled ERP, ship a production agent on a critical
                  bottleneck, stand up the business-owned data substrate
                  alongside the existing tier-1 stack.
                </p>
                <p className="mt-3">
                  I work from inside the operator&rsquo;s reality &mdash; the
                  workflows that run every day across ERP, WMS, MES, EMR,
                  CRM/CPQ. Multi-platform, multi-vendor versed across the
                  systems and the people who use them.
                </p>
              </>
            }
          />
          <EngagementShape
            variant="editorial"
            marker={<RomanMarker num={3} />}
            name="Agentics"
            lead="Use when the AI program depends on business substrate, workflow discipline, and production adoption."
            body={
              <>
                <p>
                  Most agentic implementations fail because they don&rsquo;t
                  solve the fragmented data and undocumented workflow problem
                  first.{" "}
                  <em className="not-italic italic font-normal">
                    If the substrate is garbage, the AI is vaporware.
                  </em>
                </p>
                <p className="mt-3">
                  <em className="not-italic italic font-normal">
                    I fix the substrate so agents work.
                  </em>{" "}
                  Five production agentic systems shipped at a mid-market
                  beverage CPG operator, described at pattern level due to IP constraints &mdash; named functions in supply chain,
                  finance, and operations. Not demos. Production.
                </p>
                <p className="mt-3">
                  Runs on the same staged delivery discipline as transformation
                  work, stacked standalone or onto either shape above.
                </p>
              </>
            }
          />
        </div>
      </section>

      <section className="bg-cream px-0 md:px-8 pt-12 pb-12">
        <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
          Scope option &middot; IT department transformation
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] text-ink leading-relaxed">
          <strong className="font-semibold text-navy">
            Stacks onto any of the three shapes above.
          </strong>{" "}
          When the IS organization itself needs structural realignment
          alongside the systems it supports &mdash; capacity, vendor
          governance, capability mapping &mdash; that&rsquo;s a second domain
          expertise I bring. Transformations across business systems{" "}
          <em className="italic font-medium text-navy">AND</em> across the IS
          organizations supporting them. Same operator, same discipline, scope
          extended to the function that owns the systems.
        </p>
      </section>

      <section className="bg-cream px-0 md:px-8 pt-12 pb-12">
        <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
          The bench
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] text-ink leading-relaxed">
          A virtual network of senior independent specialists assembled across
          fifty-plus engagements &mdash; engineers, data analysts, architects,
          project managers. Pulled in for the exact scope, off when done.{" "}
          <strong className="font-semibold text-navy">
            Firm architecture, not firm size.
          </strong>{" "}
          No carried bench. No utilization pressure. The right capacity for the
          right sprint.
        </p>
        <p className="mt-4 max-w-[820px] text-[16px] text-ink leading-relaxed">
          <strong className="font-semibold text-navy">
            Continuity discipline:
          </strong>{" "}
          every workstream documented and shadow-staffed across the bench from
          week one. The practice does not depend on me being in the room.
        </p>
      </section>

      <section className="bg-cream px-0 md:px-8 pt-12 pb-12">
        <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
          Where this fits
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] text-ink leading-relaxed">
          <strong className="font-semibold text-navy">
            This model fits mid-market operators running multi-entity,
            multi-platform stacks &mdash;
          </strong>{" "}
          typically three or more system classes across ERP, WMS, LIMS, QMS,
          CPQ, CRM, MDM, HRIS. I work most often with AEC, beverage CPG (wine,
          beer, spirits), and healthcare operators running EHR &mdash; ERP as
          financial backbone, compliance and risk as non-negotiables.
        </p>
      </section>

      <section className="bg-pale-navy px-0 md:px-8 pt-16 md:pt-20 pb-16 mt-12">
        <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
          Commercial logic
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] text-ink leading-relaxed">
          <strong className="font-semibold text-navy">
            Flat-rate weekly economics tied to outcomes.
          </strong>{" "}
          One engagement, one weekly rate. Typically a fraction of a Big-4
          transformation budget, without their overhead structure.
        </p>
        <p className="mt-4 max-w-[820px] text-[16px] text-ink leading-relaxed">
          <strong className="font-semibold text-navy">
            Structurally lean by architecture:
          </strong>{" "}
          no carried bench, no managed-services tail (BOSS is open source;
          clients own and maintain), no client lock-in (mutual break-clauses,
          clean exits by design), no vendor-economics misalignment
          (transformation runs above the vendors, not through them), no
          documentation drift (SOPs auto-maintain &mdash; see BOSS).
        </p>
        <p className="mt-4 max-w-[820px] text-[16px] text-ink leading-relaxed">
          <strong className="font-semibold text-navy">
            The exit is clean.
          </strong>{" "}
          When the transformation institutionalizes, I leave. Open source
          platform; the client and their in-house team carry it. Break-clauses
          cut both ways &mdash; verifiable on day one. Structural, not
          promised.
        </p>
      </section>

      <AccentRule className="mt-16" />

      <section
        id="capital-structure"
        className="bg-cream px-0 md:px-8 pt-12 md:pt-16 pb-16 scroll-mt-20"
      >
        <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
          The capital structure
        </h2>
        <div className="mt-5 max-w-[820px] text-[16px] text-ink leading-relaxed space-y-5">
          <p>
            A transformation of this scope is a capital investment, not a P&amp;L
            hit. Build-phase costs — including internal labor — capitalize to
            the balance sheet. At go-live, the asset moves to depreciation over
            a long period. The implication: a multi-year investment
            doesn&rsquo;t crater two years of earnings during the build, and
            the impact smooths across a decade.
          </p>
          <p>
            <strong className="font-semibold text-navy">
              CFO-defensible. Audit-clean. Built into BOSS&rsquo;s Delivery
              pillar from day one.
            </strong>{" "}
            The cap treatment is the CFO&rsquo;s conversation — I bring the
            substance, they own the decision.
          </p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[680px] bg-navy text-cream font-body rounded-[6px] shadow-[0_2px_24px_rgba(20,40,64,0.08)] border-l-[4px] border-l-gold px-8 md:px-10 lg:px-12 py-10 md:py-12 lg:py-14">
          <p className="font-body font-semibold uppercase text-gold text-[10.5px] md:text-[11.5px] tracking-[0.24em] mb-6">
            Sized to the work
          </p>
          <h2 className="font-vollkorn font-bold text-cream text-[28px] md:text-[36px] lg:text-[42px] leading-[1.18] tracking-[-0.01em] mb-5">
            Let&rsquo;s talk shape &mdash; of the{" "}
            <em className="italic font-semibold">engagement.</em>
          </h2>
          <p className="font-vollkorn italic font-normal text-[#DCD9CC] text-[14.5px] md:text-[15.5px] leading-[1.6] mb-8">
            Embedded, fractional, or agentics &mdash; which shape fits
            depends on where your business actually is. One conversation
            tells us. No deck. No proposal.{" "}
            <span className="text-gold not-italic font-medium">
              Just talking shape.
            </span>
          </p>
          <Link
            href="/contact?interest=engagement"
            className="inline-flex items-center gap-2 bg-gold text-navy font-body font-semibold uppercase text-[13px] md:text-[14px] tracking-[0.18em] px-8 py-4 rounded-full hover:bg-[#FFD740] hover:shadow-lg transition-all duration-200"
          >
            Start a conversation <span aria-hidden>&rarr;</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
