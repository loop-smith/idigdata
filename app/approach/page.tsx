import type { Metadata } from "next";
import Link from "next/link";
import EngagementShape from "@/components/EngagementShape";
import EngagementRoadmapEmbed from "@/components/EngagementRoadmapEmbed";
import M4Watermark from "@/components/M4Watermark";
import RomanMarker from "@/components/RomanMarker";
import AccentRule from "@/components/AccentRule";
import SixConstellations from "@/components/diagrams/SixConstellations";
import SprintRoadmap from "@/components/diagrams/SprintRoadmap";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: "Approach — idigdata",
  description:
    "How I plug in. Three engagement shapes — embedded, fractional, agentics. Structurally lean. Exit by design. Engagement roadmap and capital structure.",
  alternates: { canonical: "/approach/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/approach/",
    title: "Approach — idigdata · Forward-Deployed Operator",
    description:
      "Three engagement shapes. Same architecture. Sized to the work.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Forward-Deployed Operator",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://idigdata.com/" },
    { "@type": "ListItem", position: 2, name: "Approach", item: "https://idigdata.com/approach/" },
  ],
};

export default function ApproachPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative bg-cream pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
          How I plug in
        </h1>
        <p className="mt-5 max-w-[820px] text-[18px] text-ink leading-relaxed">
          Three engagement shapes. Same architecture. Sized to the work.
        </p>
        <p className="mt-4 max-w-[820px] font-display italic text-stone text-[16px] leading-snug">
          Three industry specialties &mdash; AEC, beverage CPG (wine, beer,
          spirits), and healthcare (EHR) &mdash; unified by two core threads:
          ERP as financial and accounting backbone, and compliance and risk as
          foundation. Every major operating-system class deployed in the
          trenches: ERP, WMS, LIMS, QMS, CPQ, CRM, MDM, HRIS.
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
            lead="Best bang for the buck on a full transformation — short term and long term."
            body={
              <>
                <p>
                  Full transformation residency. One forward-deployed operator
                  with a virtual bench of senior independent specialists
                  assembled across fifty-plus engagements — fifteen of them full
                  multi-year transformations. Full executive scope as contractor:
                  strategy, operations, vendor portfolio, risk, governance.
                  Inside-out: team-building, full lifecycle delivery,
                  operating-model change, IT-department shore-up, BOSS
                  deployment, agentic framework.
                </p>
                <p className="mt-3">
                  Flat-rate weekly economics tied to outcomes. Exit-by-design at
                  handoff. No managed-services tail. No vendor commissions. No
                  partner-channel pressure.{" "}
                  <em className="not-italic italic font-normal">
                    Continuity discipline:
                  </em>{" "}
                  every workstream is documented and shadow-staffed across the
                  bench from week one — the practice does not depend on me being
                  in the room.
                </p>
                <p className="mt-3">
                  Start with the end in mind — the operator&rsquo;s asset, fully
                  built and operating. The data-centric structure reduces the
                  repeating noise that consumes most transformations, adds
                  clarity at every cross-functional decision point, and gives the
                  operator unified governance over delivery and user adoption —
                  better and faster than any vendor partner can manage.
                  That&rsquo;s the FDO model.
                </p>
              </>
            }
          />
          <EngagementShape
            variant="editorial"
            marker={<RomanMarker num={2} />}
            name="Fractional"
            lead="Plug me in at any stage of an existing project."
            body={
              <>
                <p>
                  Engagements where a specific lever needs moving: unblock a
                  stalled ERP, deploy a production agent on a critical
                  bottleneck, stand up the operator-owned data substrate
                  alongside the existing tier-1 stack. Same architecture, sized
                  to the work.
                </p>
                <p className="mt-3">
                  I live inside the operator and breathe the pain — the workflows
                  run every day across ERP, WMS, MES, EMR, CRM/CPQ.
                  Multi-platform, multi-vendor versed. I know the systems and the
                  people who use them.
                </p>
              </>
            }
          />
          <EngagementShape
            variant="editorial"
            marker={<RomanMarker num={3} />}
            name="Agentics"
            lead="Standalone, or stacked onto either of the above."
            body={
              <>
                <p>
                  Agentic workflows are being deployed at scale right now. Most
                  implementations will fail for the same reason every
                  business-system transformation has failed for decades: they
                  don&rsquo;t solve the fragmented data and undocumented workflow
                  problem first. Engineers know how to write model code. Very
                  few know how to architect the unsexy data schemas, documented
                  workflows, and governance protocols a business actually runs
                  on. If the substrate is garbage, the AI is vaporware.
                </p>
                <p className="mt-3">
                  <em className="not-italic italic font-normal">
                    I fix the substrate so agents work.
                  </em>{" "}
                  Five production agentic systems already shipped at a mid-market
                  beverage CPG operator — named functions in supply chain,
                  finance, and operations. Not demos. Production.
                </p>
                <p className="mt-3">
                  The enterprise agentic framework runs on the same staged
                  delivery discipline as transformation work. Same architecture,
                  sized to the work.
                </p>
              </>
            }
          />
        </div>
      </section>

      <section className="bg-pale-navy px-0 md:px-8 pt-16 md:pt-20 pb-12 mt-12">
        <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
          Structurally lean
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] text-ink leading-relaxed">
          <strong className="font-semibold text-navy">Structurally lean.</strong>{" "}
          No carried bench (virtual network when one is needed). No
          managed-services tail (BOSS is open source; clients own and
          maintain). No client lock-in (mutual break-clauses, clean exits by
          design). No vendor-economics misalignment (transformation runs above
          the vendors, not through them). No documentation drift (SOPs
          auto-maintain — see BOSS).{" "}
          <strong className="font-semibold text-navy">
            Firm architecture, not firm size.
          </strong>
        </p>
        <p className="mt-4 max-w-[820px] text-[16px] text-ink leading-relaxed">
          Vendor-agnostic isn&rsquo;t a marketing posture. It&rsquo;s a
          structural consequence of putting the operator at the center of the
          data graph instead of the ERP vendor at the center.
        </p>
      </section>

      <section className="bg-pale-navy px-0 md:px-8 pt-12 pb-12">
        <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
          The exit is clean
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] text-ink leading-relaxed">
          <strong className="font-semibold text-navy">The exit is clean.</strong>{" "}
          When the transformation institutionalizes, I leave. Open source
          platform; the client and their in-house team carry it. No
          managed-services tail. No retainer that quietly becomes the line
          item nobody can kill. The break-clauses cut both ways.
          Decision-makers who&rsquo;ve been burned by consultants who never
          leave can verify this on day one — it&rsquo;s structural, not
          promised.
        </p>
      </section>

      <section className="bg-pale-navy px-0 md:px-8 pt-12 pb-16">
        <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
          Value-justification
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] text-ink leading-relaxed">
          <strong className="font-semibold text-navy">
            A fraction of the cost of a Big-4 transformation,
          </strong>{" "}
          with outcomes Big-4 doesn&rsquo;t deliver. The bundle: thirty years
          of operator practice, BOSS platform deployment, the agentic
          framework, the bench when needed, the clean exit. One engagement,
          one weekly rate.{" "}
          <strong className="font-semibold text-navy">
            A handful of operators can deliver this end-to-end.
          </strong>{" "}
          Most of the market gets the partner-led result.
        </p>
      </section>

      <section
        id="architecture-views"
        className="bg-cream px-0 md:px-8 pt-20 md:pt-24 pb-12 md:pb-16 scroll-mt-20 mt-12"
      >
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-5">
          The trinity · three views of the operating fabric
        </p>
        <h2 className="font-vollkorn font-extrabold text-navy text-[36px] md:text-[52px] lg:text-[60px] leading-[1.02] tracking-[-0.02em] text-balance">
          The architecture{" "}
          <em className="italic font-semibold">I build to.</em>
        </h2>
        <p className="mt-6 max-w-[820px] font-vollkorn italic font-medium text-warm-gray text-[18px] md:text-[20px] leading-snug">
          Three views of the substrate triangle you saw on the homepage — same operator, three lenses. The people lens · the process lens · the systems lens. Together they show how the workforce moves the work across the data substrate.
        </p>
      </section>

      {/* Trinity panel I — The beehive */}
      <section className="bg-cream px-0 md:px-8 pt-12 md:pt-16 pb-24 md:pb-28 border-t border-navy/15">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-4">
          Diagram I · the people lens — the beehive
        </p>
        <h3 className="font-vollkorn font-extrabold text-navy text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.02em] text-balance mb-3">
          The <em className="italic font-semibold">beehive.</em>
        </h3>
        <p className="font-vollkorn italic font-medium text-stone text-[19px] md:text-[22px] leading-snug max-w-[720px] mb-10">
          Unpacking the people lens — how the workforce moves the work. Process
          flows × functional groups · six BPFs feed the operating fabric · MDM
          and the Common Data Model at the center.
        </p>
        <figure className="max-w-3xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diagrams/beehive.svg"
            alt="The beehive — process flows × functional groups; six BPFs feed the operating fabric, MDM and the Common Data Model at the gold-on-navy center hex"
            width={540}
            height={700}
            className="w-full h-auto"
          />
        </figure>
        <div className="mt-10 max-w-3xl mx-auto pt-5 border-t border-navy/15 flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray">
          <span>Diagram I</span>
          <span aria-hidden className="text-stone">·</span>
          <span>Universal frame</span>
          <span aria-hidden className="text-stone">·</span>
          <span>Live in every engagement</span>
        </div>
      </section>

      {/* Trinity panel II — Six constellations */}
      <section className="bg-pale-navy px-0 md:px-8 pt-20 md:pt-24 pb-24 md:pb-28">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-4">
          Diagram II · the process lens — the six constellations
        </p>
        <h3 className="font-vollkorn font-extrabold text-navy text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.02em] text-balance mb-3">
          The <em className="italic font-semibold">six constellations.</em>
        </h3>
        <p className="font-vollkorn italic font-medium text-stone text-[19px] md:text-[22px] leading-snug max-w-[720px] mb-10">
          Unpacking the process lens — the universal spine of operating
          processes. P2P · O2C · P2M · S2S · D2R · MDM around a sovereign Data
          Core. BPSc density bands ring each constellation.
        </p>
        <figure className="max-w-3xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diagrams/six-constellations.svg"
            alt="The six constellations — universal spine of P2P, O2C, P2M, S2S, D2R, MDM around a sovereign Data Core; BPSc density bands ring each constellation"
            width={810}
            height={940}
            className="w-full h-auto"
          />
        </figure>
        <div className="mt-10 max-w-3xl mx-auto pt-5 border-t border-navy/15 flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray">
          <span>Diagram II</span>
          <span aria-hidden className="text-stone">·</span>
          <span>Universal spine</span>
          <span aria-hidden className="text-stone">·</span>
          <span>Same six every install</span>
        </div>
      </section>

      {/* Trinity panel III — System-verse */}
      <section className="bg-cream px-0 md:px-8 pt-20 md:pt-24 pb-24 md:pb-28">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-4">
          Diagram III · the systems lens — the system-verse
        </p>
        <h3 className="font-vollkorn font-extrabold text-navy text-[40px] md:text-[56px] leading-[1.02] tracking-[-0.02em] text-balance mb-3">
          The <em className="italic font-semibold">system-verse.</em>
        </h3>
        <p className="font-vollkorn italic font-medium text-stone text-[19px] md:text-[22px] leading-snug max-w-[720px] mb-10">
          Unpacking the systems lens — the future-state map operators build to.
          Sovereign Data Core at center · integration mesh · application layer
          of 16 functional system groups.
        </p>
        <figure className="max-w-3xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diagrams/system-verse.svg"
            alt="The system-verse — future-state systems map; sovereign Data Core at center, integration mesh, application layer of 16 functional system groups"
            width={800}
            height={900}
            className="w-full h-auto"
          />
        </figure>
        <div className="mt-10 max-w-3xl mx-auto pt-5 border-t border-navy/15 flex flex-wrap items-center gap-x-6 gap-y-2 font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray">
          <span>Diagram III</span>
          <span aria-hidden className="text-stone">·</span>
          <span>Future-state map</span>
          <span aria-hidden className="text-stone">·</span>
          <span>The Phase 1 deliverable</span>
        </div>
      </section>

      <section
        id="engagement-roadmap"
        className="bg-cream px-0 md:px-8 pt-20 md:pt-24 pb-16 scroll-mt-20 mt-12"
      >
        <p className="font-vollkorn italic font-medium text-stone text-[15px] md:text-[17px] leading-snug max-w-[820px] mb-3">
          The trinity shows what gets built. The roadmap shows when.
        </p>
        <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
          Engagement roadmap
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] text-ink leading-relaxed">
          This is the time-to-deliverable view. Thirty years of staged
          delivery — seven BOSS delivery stages with PMO orchestration
          spanning all of them. Two parallel portfolios — Transformation and
          Applied Agentics — promote through identical stages on different
          time signatures, converging at a single Go-live. The framework
          holds whether the portfolio is ERP, WMS, or agentic apps. Density
          redistributes as the technology shifts; discipline does not
          compress. Anyone shipping a full transformation in four months is
          shipping a workflow, not a transformation. Stage is the unit of
          promotion — hundreds of work units (PEGs) move through gates at
          their own readiness. After Go-live: operator-led CI/CD by design —
          a new build plan opens, in-house.
        </p>
        <EngagementRoadmapEmbed />
        <p className="mt-3 max-w-[820px] font-display italic text-stone text-[14px]">
          Engagement roadmap — operator-owned substrate · exit-by-design · no
          managed-services tail · no vendor-platform lock-in. The asset stays
          with the operator.
        </p>

        <div className="mt-10 max-w-[820px] border-t border-navy/15 pt-6">
          <p className="font-body text-[15px] md:text-[16px] text-ink leading-relaxed">
            <strong className="font-semibold text-navy">
              The full methodology
            </strong>{" "}
            — stage substance, agentics density calibration,
            trinity-to-roadmap mapping, CI/CD handoff pattern — lives in the
            engagement brief.{" "}
            <Link
              href="/contact/"
              className="text-navy font-semibold underline underline-offset-2 hover:text-aubergine"
            >
              Start a conversation →
            </Link>
          </p>
        </div>
      </section>

      {/* The diagnostic frame — six constellations */}
      <section className="bg-cream px-0 md:px-8 pt-16 md:pt-20 pb-16">
        <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
          The diagnostic frame
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] text-ink leading-relaxed">
          Every business maps into six constellations. Phase 1 reads the load
          on each — Phase 2 architecture builds from there.
        </p>
        <div className="mt-8 max-w-4xl mx-auto -mx-8 md:mx-auto">
          <div className="overflow-x-auto px-8 md:px-0 [-webkit-overflow-scrolling:touch]">
            <div className="min-w-[640px] md:min-w-0 max-w-4xl mx-auto">
              <SixConstellations />
            </div>
          </div>
        </div>
      </section>

      {/* Inside a sprint — sprint roadmap */}
      <section className="bg-pale-navy px-0 md:px-8 pt-16 md:pt-20 pb-16 mt-12">
        <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
          Inside a sprint
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] text-ink leading-relaxed">
          Engagement-level cadence is sprints. 13 days each. Tasks decompose
          to stories; stories pin to sprints; outputs persist to the next.
        </p>
        <div className="mt-8 max-w-4xl mx-auto -mx-8 md:mx-auto">
          <div className="overflow-x-auto px-8 md:px-0 [-webkit-overflow-scrolling:touch]">
            <div className="min-w-[640px] md:min-w-0 max-w-4xl mx-auto">
              <SprintRoadmap />
            </div>
          </div>
        </div>
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
            the balance sheet under ASC 350-40 / equivalent. At go-live, the
            asset moves to depreciation; the standard period for major
            enterprise transformation is{" "}
            <strong className="font-semibold text-navy">ten years</strong>,
            field-validated. The implication: a multi-year investment
            doesn&rsquo;t crater two years of earnings during the build, and
            post-go-live impact smooths over a decade.
          </p>
          <p>
            <strong className="font-semibold text-navy">
              CFO-defensible. Audit-clean. Built into BOSS&rsquo;s Delivery
              pillar from day one.
            </strong>{" "}
            The cap treatment is real, traceable, and the receiving CFO carries
            it forward post-handoff — no consultant in the loop on permanent
            accounting decisions.
          </p>
        </div>
      </section>

      <section className="mt-24 mb-16 md:mb-24">
        <div className="text-center px-6 py-12 md:py-16 border-t border-navy">
          <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
            Talk to Robert
          </h2>
          <div className="mt-8">
            <Link
              href="/contact?interest=engagement"
              className="inline-flex items-center gap-2 bg-navy text-cream px-8 py-3.5 rounded-full font-body text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-aubergine transition-colors focus:outline-2 focus:outline-stone focus:outline-offset-2"
            >
              Start a conversation <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
