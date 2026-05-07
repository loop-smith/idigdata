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
  title: "Approach",
  description:
    "How Robert plugs in. Three engagement shapes — embedded, fractional, agentics. Structurally lean. Clean exit. Engagement roadmap and capital structure.",
  alternates: { canonical: "/approach/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/approach/",
    title: "Approach — idigdata",
    description:
      "Three engagement shapes. Same architecture. Sized to the work.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Client-owned data. Vendor-agnostic architecture. Transformation that institutionalizes.",
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
              <p>
                Full transformation residency. Full executive scope as
                contractor: strategy, operations, vendor portfolio, risk,
                governance. Inside-out: team-building, full lifecycle delivery,
                operating-model change, IT-department shore-up, BOSS
                deployment, agentic framework.
              </p>
            }
          />
          <EngagementShape
            variant="editorial"
            marker={<RomanMarker num={2} />}
            name="Fractional"
            lead="Plug me in at any stage of an existing project."
            body={
              <p>
                Engagements where a specific lever needs moving: unblock a
                stalled ERP, deploy a production agent on a critical
                bottleneck, re-architect the data core while your CIO stays in
                seat. Same architecture, sized to the work.
              </p>
            }
          />
          <EngagementShape
            variant="editorial"
            marker={<RomanMarker num={3} />}
            name="Agentics"
            lead="Standalone, or stacked onto either of the above."
            body={
              <p>
                The enterprise agentic framework deployed against the data
                foundation. Five production apps in live operations is the
                proof; the framework is what makes it repeatable.
              </p>
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
        className="bg-cream px-0 md:px-8 pt-20 md:pt-24 pb-16 scroll-mt-20 mt-12"
      >
        <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
          The architecture we build to
        </h2>
        <p className="mt-5 max-w-[820px] font-display italic text-stone text-[16px] leading-relaxed">
          Three views of the same operating fabric — same operator, three
          angles. The people layer, the work layer, the substrate.
        </p>

        <figure className="mt-12 max-w-2xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diagrams/beehive.svg"
            alt="The beehive — process flows × functional groups; six BPFs feed the operating fabric, MDM and the Common Data Model at the gold-on-navy center hex"
            width={540}
            height={700}
            className="w-full h-auto"
          />
          <figcaption className="mt-3 font-display italic text-stone text-[14px]">
            <strong className="font-semibold not-italic text-navy">
              The beehive
            </strong>{" "}
            &mdash; process flows &times; functional groups · the people
            fabric
          </figcaption>
        </figure>

        <figure className="mt-12 max-w-2xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diagrams/six-constellations.svg"
            alt="The six constellations — universal spine of P2P, O2C, P2M, S2S, D2R, MDM around a sovereign Data Core; BPSc density bands ring each constellation"
            width={810}
            height={940}
            className="w-full h-auto"
          />
          <figcaption className="mt-3 font-display italic text-stone text-[14px]">
            <strong className="font-semibold not-italic text-navy">
              The six constellations
            </strong>{" "}
            &mdash; universal spine · same six every install
          </figcaption>
        </figure>

        <figure className="mt-12 max-w-2xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diagrams/system-verse.svg"
            alt="The system-verse — future-state systems map; sovereign Data Core at center, integration mesh, application layer of 16 functional system groups"
            width={800}
            height={900}
            className="w-full h-auto"
          />
          <figcaption className="mt-3 font-display italic text-stone text-[14px]">
            <strong className="font-semibold not-italic text-navy">
              The system-verse
            </strong>{" "}
            &mdash; future-state systems map · the first major outcome of
            every engagement, the architecture you receive at the end of
            Phase 1
          </figcaption>
        </figure>
      </section>

      <section
        id="engagement-roadmap"
        className="bg-cream px-0 md:px-8 pt-20 md:pt-24 pb-16 scroll-mt-20 mt-12"
      >
        <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
          Engagement roadmap
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] text-ink leading-relaxed">
          The engagement runs as a portfolio of work moving through 8 stages —
          PMO (orchestration) plus 7 BOSS delivery stages: Design, Build,
          Deploy and Test, UAT, Mock Golive, Golive, Stable state. Stage is
          the unit of promotion, not project phase — hundreds of work units
          (PEGs) move through gates at their own readiness. Two parallel
          portfolios — transformation and agentics — promote through identical
          stages on different time signatures, converging at a single Go-live.
        </p>
        <EngagementRoadmapEmbed />
        <p className="mt-3 max-w-[820px] font-display italic text-stone text-[14px]">
          Engagement roadmap — full-residency shape preconfigured. PMO + 7
          BOSS delivery stages, two-portfolio overlay, single Go-live
          convergence.
        </p>
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
              className="inline-block font-body font-semibold text-[16px] px-7 py-3.5 bg-navy text-white hover:bg-navy/90 transition-colors focus:outline-2 focus:outline-stone focus:outline-offset-2"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
