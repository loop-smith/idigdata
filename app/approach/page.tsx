import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import AccentRule from "@/components/AccentRule";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: "Approach — idigdata",
  description:
    "A transformation that compounds. Build. Observe. Iterate. Five interlocking layers, one loop — the framework that turns business reality into a transformation system the business owns.",
  alternates: { canonical: "/approach/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/approach/",
    title: "Approach — idigdata · Forward-Deployed Operator",
    description:
      "A transformation that compounds. Build. Observe. Iterate. Five interlocking layers, one loop. The business owns the asset.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — The Practice",
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
      name: "Approach",
      item: "https://idigdata.com/approach/",
    },
  ],
};

export default function ApproachPage() {
  return (
    <div className="mx-auto max-w-content px-6 font-body bg-cream text-navy">
      <JsonLdScript data={breadcrumbJsonLd} />

      {/* ===== HERO ===== */}
      <section className="relative bg-cream pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-4">
          The outcome
        </p>
        <h1 className="font-vollkorn font-bold text-navy text-[48px] md:text-[64px] lg:text-[76px] leading-[1.02] tracking-[-0.015em]">
          A transformation that{" "}
          <em className="italic font-semibold">compounds.</em>
        </h1>
        <p className="mt-6 max-w-[820px] font-vollkorn italic font-medium text-warm-gray text-[20px] md:text-[22px] leading-snug">
          Build. Observe. Iterate. Five interlocking layers, one loop &mdash; the framework that turns business reality into a transformation system the business owns.
        </p>
        <p className="mt-6 max-w-[820px] text-[16px] text-ink leading-relaxed">
          Most transformations are linear &mdash; diagnose, design, deploy,
          hope. Mine runs as a build-observe-iterate loop instead, sized to
          your cadence.
        </p>
      </section>

      <AccentRule className="mt-4" />

      {/* ===== SYNTHESIS INTERSTITIAL ===== */}
      <section className="bg-pale-navy px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-4">
          Diagnosis &middot; invention
        </p>
        <p className="max-w-[820px] font-vollkorn text-navy text-[22px] md:text-[26px] leading-[1.32] tracking-[-0.005em]">
          Sixty percent of transformations fail. The pattern repeats: people
          change, systems change, processes change, delivery changes &mdash;
          each in a different workstream, none binding to the others.{" "}
          <strong className="font-bold">
            Thirty years and fifty engagements taught me to stop working that way.
          </strong>{" "}
          I built a single operator-grade framework that binds them. It runs as{" "}
          <em className="italic font-semibold">
            five interlocking layers
          </em>{" "}
          &mdash; the people, the systems they run on today, the universal
          grammar underneath, the architecture I design against, and the
          execution layer that drives the loop &mdash; until your operators
          own the asset and don&rsquo;t need me anymore.
        </p>
      </section>

      <AccentRule className="mt-4" />

      {/* ===== LAYER 1 · THE BEEHIVE ===== */}
      <section className="bg-cream px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-4">
          Layer 1 &middot; The beehive
        </p>
        <h2 className="font-vollkorn font-extrabold text-navy text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.02em] text-balance">
          Find where the work actually moves.
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed">
          I begin with the people. Map the current workflows by functional
          area. Decompose into the beehive&apos;s taskforce functional groups.
          Locate the stakeholders who&rsquo;ll fund and approve the change.
          Locate the SMEs &mdash; the operators who hold the unwritten
          exception queues and the workarounds no one documented.{" "}
          <strong className="font-semibold text-navy">
            They&rsquo;re not &ldquo;resources.&rdquo; They&rsquo;re the atomic
            units of work.
          </strong>{" "}
          Identify the senior operators who&rsquo;ll lead the change inside
          your business. Read where the work actually moves and where it
          stalls &mdash; not the org chart, the operating reality.
        </p>
        <p className="mt-4 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed">
          <strong className="font-semibold text-navy">
            The enablement thread starts here and runs through every layer that follows.
          </strong>{" "}
          Each layer transfers capability to your team. By engagement close,
          your operators own what we built, can extend it, and don&rsquo;t need
          me to do it. Exit-by-design at the workforce layer.
        </p>
        <p className="mt-4 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed">
          <em className="italic">Scope option:</em>{" "}when the IS department itself
          needs rebuilding &mdash; under-resourced, organizationally weak, lagging
          on capability &mdash; that&rsquo;s a second domain expertise I bring.
          Transformations across business systems AND across the IS
          organizations supporting them.
        </p>
        <figure className="mt-10 max-w-3xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diagrams/beehive.svg"
            alt="The beehive — process flows × functional groups; six BPFs feed the operating fabric, MDM and the Common Data Model at the gold-on-navy center hex"
            width={540}
            height={700}
            className="w-full h-auto"
          />
        </figure>
      </section>

      <AccentRule className="mt-4" />

      {/* ===== LAYER 2 · CURRENT SYSTEMS ===== */}
      <section className="bg-pale-navy px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-4">
          Layer 2 &middot; The current systems
        </p>
        <h2 className="font-vollkorn font-extrabold text-navy text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.02em] text-balance">
          Expose the system truth.
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed">
          Every system the workforce uses today. ERP. CRM. WMS. MES. EMR.
          Specialty tools. Spreadsheets that became business-critical. Shadow
          IT no one talks about. The actual AS-IS inventory with the
          integration topology, the data flow, the trust gaps, the
          workarounds. No assumptions, no theory &mdash; the operating truth.
        </p>
        <p className="mt-4 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed">
          Most engagements discover that the business is running on more
          systems than anyone realized, in more configurations than anyone
          documented, with more integration debt than anyone budgeted. The
          map is the first uncomfortable conversation &mdash; and the first
          place trust starts compounding.
        </p>
      </section>

      <AccentRule className="mt-4" />

      {/* ===== LAYER 3 · THE 6 PROCESS CONSTELLATIONS ===== */}
      <section className="bg-cream px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-4">
          Layer 3 &middot; The 6 Process Constellations
        </p>
        <h2 className="font-vollkorn font-extrabold text-navy text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.02em] text-balance">
          Separate uniqueness from mechanics.
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed">
          The paradox of mid-market operations:{" "}
          <strong className="font-semibold text-navy">
            your culture is fiercely unique. Your operating mechanics are entirely standard.
          </strong>{" "}
          Every business runs on the same six process flows:{" "}
          <strong className="font-bold">P2P</strong> (procure-to-pay),{" "}
          <strong className="font-bold">O2C</strong> (order-to-cash),{" "}
          <strong className="font-bold">P2M</strong> (plan-to-make),{" "}
          <strong className="font-bold">S2S</strong> (systems-to-support),{" "}
          <strong className="font-bold">D2R</strong> (data-to-reporting), and{" "}
          <strong className="font-bold">MDM</strong>{" "}(master data
          management). Different industries, different software stacks &mdash;
          same six constellations every time.
        </p>
        <p className="mt-4 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed">
          Same six every install. The makeup of process-element groups,
          clusters, and components differs per operator. The 6 Process
          Constellations are the grammar for reading where load is, where
          gaps are, and where the new architecture needs to land.
        </p>
        <figure className="mt-10 max-w-3xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diagrams/six-constellations.svg"
            alt="The 6 Process Constellations — universal spine of P2P, O2C, P2M, S2S, D2R, MDM around a sovereign Data Core; BPSc density bands ring each constellation"
            width={810}
            height={940}
            className="w-full h-auto"
          />
        </figure>
      </section>

      <AccentRule className="mt-4" />

      {/* ===== LAYER 4 · THE SYSTEM-VERSE ===== */}
      <section className="bg-pale-navy px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-4">
          Layer 4 &middot; The system-verse
        </p>
        <h2 className="font-vollkorn font-extrabold text-navy text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.02em] text-balance">
          Design around the architecture, not the vendor.
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed">
          Because the 6 Process Constellations expose where operating load
          actually lives, the system-verse can be designed around the
          business instead of around vendors. Sovereign Data Core at center.
          Integration mesh. Application layer of functional system groups.
          The system-verse supports the Business Process Flows via the 6
          Process Constellations &mdash; built TO, not bought-and-hoped-into.
        </p>
        <p className="mt-4 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed">
          The architecture is the artifact the business owns and operates after
          handoff.{" "}
          <strong className="font-semibold text-navy">
            This is the plug-and-play architectural inversion: the sovereign
            Data Core is permanent; the surrounding functional system groups
            are modular commodities.
          </strong>{" "}
          Vendor decisions slot in around the architecture, not the other way
          around. Apps come and go. The core stays. The vendors stay vendors;
          the architecture stays yours.
        </p>
        <figure className="mt-10 max-w-3xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diagrams/system-verse.svg"
            alt="The system-verse — future-state systems map; sovereign Data Core at center, integration mesh, application layer of 16 functional system groups"
            width={800}
            height={900}
            className="w-full h-auto"
          />
        </figure>
      </section>

      <AccentRule className="mt-4" />

      {/* ===== LAYER 5 · THE PM SUITE ===== */}
      <section className="bg-cream px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-4">
          Layer 5 &middot; The PM Suite
        </p>
        <h2 className="font-vollkorn font-extrabold text-navy text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.02em] text-balance">
          Drive the loop until it holds.
        </h2>

        <p className="mt-5 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed">
          The PM Suite is the operating layer &mdash; the build-observe-iterate
          loop made concrete. It runs the framework against your reality,
          directs the bench, and holds the cadence sprint after sprint. The
          bench is the virtual network of senior independent specialists
          I&rsquo;ve assembled across fifty engagements &mdash; engineers,
          data analysts, architects, project managers &mdash; pulled in for
          the exact scope, off when done.{" "}
          <strong className="font-semibold text-navy">
            Firm architecture, not firm size.
          </strong>{" "}
          No carried bench. No utilization pressure. The right capacity for
          the right sprint.
        </p>

        <div className="mt-8 max-w-[820px] space-y-6">
          <div>
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray mb-1">
              The Ramrod Effect
            </p>
            <p className="text-[16px] md:text-[17px] text-ink leading-relaxed">
              Transformations stall because organizations diffuse
              accountability. Thirty years taught me where organizational
              inertia actually forms &mdash; and how to apply force against
              it. The PM Suite concentrates the force. The ramrod is the
              operator-pattern that moves the work through resistance until
              the new architecture holds its own weight.
            </p>
          </div>

          <div>
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray mb-1">
              Agile/Fall discipline
            </p>
            <p className="text-[16px] md:text-[17px] text-ink leading-relaxed">
              Agile speed inside fall rigor. Fourteen-day sprints, daily
              standups, retros, inside capital-defensible gates and
              audit-clean phase progression. The CFO gets the structure their
              auditors need. The operators get the iteration speed the work
              needs.
            </p>
          </div>

          <div>
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray mb-1">
              Agentic acceleration
            </p>
            <p className="text-[16px] md:text-[17px] text-ink leading-relaxed">
              Agentics compresses the observe-adjust cycle further. The PM
              Suite already runs shorter loops than traditional consulting
              can manage. Agentics shortens them again. See{" "}
              <Link
                href="/agentics/"
                className="text-navy font-semibold underline underline-offset-2 hover:text-aubergine"
              >
                Applied Agentics
              </Link>{" "}
              for the deeper proof surface.
            </p>
          </div>
        </div>

        <figure className="mt-10 max-w-4xl mx-auto">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/diagrams/pm-suite.svg"
            alt="The PM Suite — four execution altitudes: TASK and STORY peers at the operating level, 14-day AGILE SPRINTS feeding a gold TRANSFER POINT into WATERFALL ROADMAP STAGES, all anchored to the engagement timeline"
            width={1200}
            height={720}
            className="w-full h-auto"
          />
        </figure>

      </section>

      <AccentRule className="mt-4" />

      {/* ===== THE LIFECYCLE · AV-07 ENGAGEMENT ROADMAP ===== */}
      <section className="bg-pale-navy px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-4">
          The lifecycle
        </p>
        <h2 className="font-vollkorn font-extrabold text-navy text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.02em] text-balance">
          What the loop looks like over time.
        </h2>
        <p className="mt-5 max-w-[820px] text-[16px] md:text-[17px] text-ink leading-relaxed">
          <strong className="font-semibold text-navy">
            The loop is not a sixth layer. It is the motion across all five
            &mdash; build against the map, observe what operators and systems
            reveal, adjust the architecture, then run the next sprint.
          </strong>{" "}
          Five layers running over twenty-four months &mdash; two portfolios
          (Transformation and Applied Agentics) moving through identical
          staged discipline, density redistributing under agentics, the
          CI/CD-by-design loop opening the next build plan after handoff.
        </p>
        <div className="mt-10 w-full">
          <iframe
            src="/diagrams/engagement-roadmap-public.html"
            title="The Engagement Roadmap — 8-lane temporal arc with two portfolios, density gradient, and the CI/CD-by-design loop opening the next build plan after handoff (public-tier variant; per-stage delivers + value-props gated via Article 02)"
            className="w-full block border-0 bg-cream rounded-[6px]"
            style={{ height: "960px" }}
            loading="lazy"
          />
        </div>
        <p className="mt-8 max-w-[820px] font-vollkorn italic font-medium text-stone text-[15px] md:text-[16px] leading-snug">
          Five layers running on the loop. The compounding starts when I leave.
        </p>
      </section>

      <AccentRule className="mt-4" />

      {/* ===== SUCCESS ===== */}
      <section className="bg-cream px-0 md:px-8 pt-16 md:pt-20 pb-20 md:pb-24">
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-4">
          Success
        </p>
        <h2 className="font-vollkorn font-extrabold text-navy text-[36px] md:text-[52px] leading-[1.02] tracking-[-0.02em] text-balance">
          Measured by. <em className="italic font-semibold">Leaves behind.</em>
        </h2>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14">
          <div>
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray mb-3">
              Measured by
            </p>
            <p className="font-vollkorn font-bold text-navy text-[22px] md:text-[26px] leading-[1.25] mb-4">
              Align. Adapt. Empower.{" "}
              <em className="italic font-semibold">Repeat.</em>
            </p>
            <p className="text-[16px] md:text-[17px] text-ink leading-relaxed">
              The four-beat heartbeat that proves the loop is working. Resources
              align with the architecture. The architecture adapts to operating
              reality. The workforce gets empowered to run the new system. The
              cycle repeats short enough to compound rather than decay.
            </p>
          </div>
          <div>
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray mb-3">
              Leaves behind
            </p>
            <p className="font-vollkorn font-bold text-navy text-[22px] md:text-[26px] leading-[1.25] mb-4">
              A living system the business owns.
            </p>
            <p className="text-[16px] md:text-[17px] text-ink leading-relaxed">
              Operator-grade ergonomics. Exit-by-design. Capability transferred
              to your operators. No managed-services tail. No vendor-platform
              lock-in. The asset stays with the business, compounding in your
              favor &mdash; happy people, happy systems.
            </p>
          </div>
        </div>
      </section>

      {/* ===== CTA · OPERATOR-STAMP CARD ===== */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-[680px] bg-navy text-cream font-body rounded-[6px] shadow-[0_2px_24px_rgba(20,40,64,0.08)] border-l-[4px] border-l-gold px-8 md:px-10 lg:px-12 py-10 md:py-12 lg:py-14">
          <p className="font-body font-semibold uppercase text-gold text-[10.5px] md:text-[11.5px] tracking-[0.24em] mb-6">
            More on the approach
          </p>
          <h2 className="font-vollkorn font-bold text-cream text-[28px] md:text-[36px] lg:text-[42px] leading-[1.18] tracking-[-0.01em] mb-5">
            Let&rsquo;s talk shape &mdash; of the{" "}
            <em className="italic font-semibold">loop.</em>
          </h2>
          <p className="font-vollkorn italic font-normal text-[#DCD9CC] text-[14.5px] md:text-[15.5px] leading-[1.6] mb-8">
            What&rsquo;s on this page is the frame. The mechanic depth
            &mdash; stage substance, sprint plan, agentics calibration,
            what your loop actually looks like &mdash; lives in
            conversation. No deck. No proposal.{" "}
            <span className="text-gold not-italic font-medium">
              Just talking shape.
            </span>
          </p>
          <div className="flex flex-col gap-3">
            <Link
              href="/contact/"
              className="inline-flex items-center gap-2 bg-gold text-navy font-body font-semibold uppercase text-[13px] md:text-[14px] tracking-[0.18em] px-8 py-4 rounded-full hover:bg-[#FFD740] hover:shadow-lg transition-all duration-200"
            >
              Start a conversation <span aria-hidden>&rarr;</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
