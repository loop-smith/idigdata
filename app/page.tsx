import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: {
    absolute:
      "idigdata — Client-owned data. Vendor-agnostic architecture. Transformation that institutionalizes.",
  },
  description:
    "A boutique transformation practice for $100M – $750M operating companies whose ERP is a tax, not a tool. Embedded, Fractional, or Agentics — same architecture, sized to the work.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "idigdata — Transformation that institutionalizes",
    description:
      "Client-owned data. Vendor-agnostic architecture. For operators ready to own their data.",
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

function M4Lattice({
  size = 28,
  cellColor = "var(--color-navy)",
  centerColor = "var(--color-gold)",
  className = "",
  ariaHidden = true,
}: {
  size?: number;
  cellColor?: string;
  centerColor?: string;
  className?: string;
  ariaHidden?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 28"
      aria-hidden={ariaHidden}
      className={className}
    >
      <rect fill={cellColor} x="0" y="0" width="8" height="8" />
      <rect fill={cellColor} x="10" y="0" width="8" height="8" />
      <rect fill={cellColor} x="20" y="0" width="8" height="8" />
      <rect fill={cellColor} x="0" y="10" width="8" height="8" />
      <rect fill={centerColor} x="10" y="10" width="8" height="8" />
      <rect fill={cellColor} x="20" y="10" width="8" height="8" />
      <rect fill={cellColor} x="0" y="20" width="8" height="8" />
      <rect fill={cellColor} x="10" y="20" width="8" height="8" />
      <rect fill={cellColor} x="20" y="20" width="8" height="8" />
    </svg>
  );
}

const ARTICLE_CARDS = [
  {
    slug: "architectural-fork",
    essay: "Essay № I",
    num: "No. 01",
    title: (
      <>
        The architectural <em className="italic font-semibold">fork.</em>
      </>
    ),
    thesis: "Vendor-agnostic, data-centric. ERPs become apps.",
    featured: true,
  },
  {
    slug: "integrated-delivery",
    essay: "Essay № II",
    num: "No. 02",
    title: (
      <>
        The integrated <em className="italic font-semibold">delivery</em>{" "}
        discipline.
      </>
    ),
    thesis: "PM, change management, and agile-fall as one practice.",
  },
  {
    slug: "vendor-partner-trap",
    essay: "Essay № III",
    num: "No. 03",
    title: (
      <>
        The vendor-partner <em className="italic font-semibold">trap.</em>
      </>
    ),
    thesis: "Why most ERP implementations fail to deliver outcomes.",
  },
  {
    slug: "agile-fall",
    essay: "Essay № IV",
    num: "No. 04",
    title: (
      <>
        <em className="italic font-semibold">Agile-fall.</em>
      </>
    ),
    thesis: "Hybrid PM for complex business system transformation.",
  },
  {
    slug: "six-constellations",
    essay: "Essay № V",
    num: "No. 05",
    title: (
      <>
        The six <em className="italic font-semibold">constellations.</em>
      </>
    ),
    thesis: "Same structure, different surface, every time.",
  },
  {
    slug: "beehive",
    essay: "Essay № VI",
    num: "No. 06",
    title: (
      <>
        The <em className="italic font-semibold">beehive.</em>
      </>
    ),
    thesis: "Organizing the people side of transformation.",
  },
];

export default function HomePage() {
  return (
    <div className="font-body bg-cream text-navy">
      {/* ===================== HERO ===================== */}
      <section className="relative overflow-hidden bg-cream">
        {/* Background giant lattice */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-20 top-[420px] opacity-[0.10]"
        >
          <M4Lattice size={640} />
        </div>

        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 pt-16 md:pt-24 pb-24 md:pb-32 relative">
          <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_480px] gap-8 lg:gap-12 items-start">
            {/* Left rule */}
            <div className="hidden lg:flex flex-col gap-6 pt-2">
              <span className="block w-px h-60 bg-navy/15" />
            </div>

            {/* Main hero */}
            <div className="pt-2">
              <div className="flex items-center gap-3.5 mb-10 md:mb-12">
                <span className="block w-1.5 h-1.5 rounded-full bg-gold" />
                <span className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
                  A Practice for Mid-Market Operators
                </span>
              </div>

              <h1 className="font-vollkorn font-extrabold text-navy text-[44px] md:text-[64px] lg:text-[88px] leading-[0.98] tracking-[-0.025em] text-balance mb-10 md:mb-12">
                Client-owned data
                <span className="text-gold px-1.5">·</span>
                <br className="hidden md:block" />
                <em className="italic font-semibold">Vendor-agnostic</em>{" "}
                architecture
                <span className="text-gold px-1.5">·</span>
                <br className="hidden md:block" />
                Transformation that{" "}
                <span
                  className="relative inline-block"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 64%, var(--color-gold) 64%, var(--color-gold) 92%, transparent 92%)",
                    padding: "0 4px",
                  }}
                >
                  institutionalizes
                </span>
                .
              </h1>

              <p className="font-vollkorn italic font-medium text-warm-gray text-[17px] md:text-[18px] leading-snug max-w-[520px] border-t border-navy/15 pt-5">
                idigdata — Data Integration Group, established 2016. A boutique
                transformation practice for $100M – $750M operating companies
                whose ERP is a tax, not a tool.
              </p>
            </div>

            {/* Right pull-quote card */}
            <aside
              aria-label="Founder pull quote"
              className="relative bg-navy text-cream px-8 md:px-10 pt-12 pb-10 mt-8 lg:mt-2"
            >
              <span
                aria-hidden="true"
                className="absolute top-7 left-7 font-vollkorn text-gold text-[120px] md:text-[140px] leading-[0.6] opacity-95"
              >
                &ldquo;
              </span>
              <p className="font-vollkorn italic font-semibold text-[20px] md:text-[22px] leading-[1.35] tracking-[-0.005em] mt-12 text-pretty">
                After thirty years, I built the model that gives mid-market
                operators back their own businesses — and leaves them owning it
                after I&rsquo;m gone.
              </p>
              <div className="mt-8 pt-5 border-t border-gold/35 flex justify-between items-center">
                <span className="font-vollkorn font-bold text-[15px]">
                  Robert — Founder
                </span>
                <span className="font-body text-[11px] uppercase tracking-[0.16em] text-gold">
                  Letter № I
                </span>
              </div>
            </aside>
          </div>

          {/* Metrics strip */}
          <div className="mt-20 md:mt-24 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-[2fr_1fr_1fr_1fr] border-t border-navy border-b border-navy/15">
            <div className="px-6 md:px-8 py-6 md:py-7 border-r border-navy/10 flex flex-col gap-2">
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray">
                Operating Premise
              </span>
              <span className="font-vollkorn italic font-semibold text-navy text-[20px] md:text-[24px] leading-tight tracking-[-0.02em]">
                &ldquo;All businesses are uniquely standard.&rdquo;
              </span>
            </div>
            <div className="px-6 md:px-8 py-6 md:py-7 border-r border-navy/10 flex flex-col gap-2">
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray">
                Engagements
              </span>
              <span className="font-vollkorn font-bold text-navy text-[28px] md:text-[32px] tracking-[-0.02em]">
                50<span className="text-gold">+</span>
              </span>
              <span className="font-vollkorn italic text-warm-gray text-[12px]">
                mid-market transformations
              </span>
            </div>
            <div className="px-6 md:px-8 py-6 md:py-7 border-r border-navy/10 flex flex-col gap-2">
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray">
                Framework
              </span>
              <span className="font-vollkorn font-bold text-navy text-[28px] md:text-[32px] tracking-[-0.02em]">
                Agentic
              </span>
              <span className="font-vollkorn italic text-warm-gray text-[12px]">
                at brand scale
              </span>
            </div>
            <div className="px-6 md:px-8 py-6 md:py-7 flex flex-col gap-2">
              <span className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-warm-gray">
                Tenure
              </span>
              <span className="font-vollkorn font-bold text-navy text-[28px] md:text-[32px] tracking-[-0.02em]">
                30 yrs
              </span>
              <span className="font-vollkorn italic text-warm-gray text-[12px]">
                single operator practice
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== II — THE NEW MODEL ===================== */}
      <section id="model" className="bg-pale-navy">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <header className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-8 lg:gap-12 items-end mb-16 md:mb-20">
            <div className="hidden lg:block pt-2">
              <span className="block w-10 h-0.5 bg-gold" />
            </div>
            <h2 className="font-vollkorn font-extrabold text-navy text-[40px] md:text-[56px] lg:text-[64px] leading-none tracking-[-0.02em] text-balance">
              The architectural
              <br />
              <em className="italic font-semibold">fork</em> in the road.
            </h2>
            <p className="font-vollkorn font-medium text-navy text-[18px] md:text-[20px] leading-[1.5] border-l-2 border-gold pl-6 text-pretty">
              The dominant model in mid-market software is lock-in. The
              platforms know it. Their partners enforce it. The operator pays
              the rent — in license, in data, in optionality — for the rest of
              the company&rsquo;s life.
            </p>
          </header>

          <blockquote className="mb-16 md:mb-20 lg:pl-32 lg:pr-20">
            <p className="font-vollkorn italic font-bold text-navy text-[26px] md:text-[34px] lg:text-[36px] leading-[1.25] tracking-[-0.012em] text-balance">
              &ldquo;Their model is{" "}
              <span
                style={{
                  backgroundImage:
                    "linear-gradient(180deg, transparent 62%, var(--color-gold) 62%, var(--color-gold) 90%, transparent 90%)",
                  padding: "0 4px",
                }}
              >
                &lsquo;we own you and your data.&rsquo;
              </span>{" "}
              I built a different one — where the client owns the data and the
              ERP is just an app.&rdquo;
            </p>
          </blockquote>

          {/* Comparison diagram */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_80px_1fr] bg-cream border border-navy/15">
            {/* Them */}
            <div className="px-8 md:px-10 py-10 md:py-12 bg-cream">
              <h4 className="font-body text-[11px] font-bold uppercase tracking-[0.22em] text-warm-gray mb-2">
                The Incumbent Architecture
              </h4>
              <h3 className="font-vollkorn font-extrabold text-navy text-[26px] md:text-[32px] leading-[1.1] tracking-[-0.015em] mb-6">
                Vendor at the{" "}
                <em className="italic font-semibold">center.</em>
              </h3>
              <div className="flex flex-wrap gap-2 mt-5 mb-7">
                {["SAP", "Microsoft D365", "Acumatica", "Salesforce"].map(
                  (v) => (
                    <span
                      key={v}
                      className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-warm-gray border border-navy/15 px-3 py-1.5"
                    >
                      {v}
                    </span>
                  ),
                )}
              </div>
              <ul className="flex flex-col gap-3.5">
                {[
                  "License the platform, hire the partner, integrate on the vendor’s calendar, migrate when they say so.",
                  "Implementation fees, support contracts, upgrade cycles, migration retrofits — paid forever, on the vendor’s timeline.",
                  "Your data lives inside the product. Their model is, plainly, “we own you and your data.”",
                  "Vendor change is a transformation event — paid for again, in full, at the next cycle.",
                ].map((b, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[14px_1fr] gap-3.5 text-[15px] leading-[1.5] text-warm-gray"
                  >
                    <span className="font-vollkorn italic font-bold text-stone leading-[1.4]">
                      ·
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* vs */}
            <div
              aria-hidden="true"
              className="hidden lg:flex items-center justify-center bg-cream border-l border-r border-navy/15"
            >
              <span className="font-vollkorn italic font-semibold text-warm-gray text-[14px] tracking-[0.1em]">
                vs.
              </span>
            </div>
            <div
              aria-hidden="true"
              className="lg:hidden flex items-center justify-center bg-cream py-4 border-t border-b border-navy/15"
            >
              <span className="font-vollkorn italic font-semibold text-warm-gray text-[14px] tracking-[0.1em]">
                vs.
              </span>
            </div>

            {/* Us */}
            <div className="px-8 md:px-10 py-10 md:py-12 bg-navy text-cream">
              <h4 className="font-body text-[11px] font-bold uppercase tracking-[0.22em] text-gold mb-2">
                The idigdata Architecture
              </h4>
              <h3 className="font-vollkorn font-extrabold text-cream text-[26px] md:text-[32px] leading-[1.1] tracking-[-0.015em] mb-6">
                Client at the <em className="italic font-semibold">center.</em>
              </h3>
              <div className="flex flex-wrap gap-2 mt-5 mb-7">
                {[
                  "Data layer · owned",
                  "ERPs · interchangeable apps",
                  "Agentic · stacked",
                ].map((v) => (
                  <span
                    key={v}
                    className="font-body text-[11px] font-semibold uppercase tracking-[0.14em] text-cream border border-gold/30 px-3 py-1.5"
                  >
                    {v}
                  </span>
                ))}
              </div>
              <ul className="flex flex-col gap-3.5">
                {[
                  "The client owns the data — a Common Data Model the client controls. ERP, CRM, WMS, HRIS, FP&A become apps.",
                  "Replaceable, swappable, contained. Vendor change is a commodity decision, not a transformation.",
                  "Sovereignty over data and integrations is structural, not negotiated.",
                  "BOSS is the architectural layer above SAP, D365, Acumatica, Salesforce — not a competitor to them.",
                ].map((b, i) => (
                  <li
                    key={i}
                    className="grid grid-cols-[14px_1fr] gap-3.5 text-[15px] leading-[1.5]"
                  >
                    <span className="font-vollkorn italic font-bold text-gold leading-[1.4]">
                      ·
                    </span>
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== III — HOW I WORK ===================== */}
      <section id="how" className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <header className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-8 lg:gap-12 items-end mb-16">
            <div className="hidden lg:block pt-2">
              <span className="block w-10 h-0.5 bg-gold" />
            </div>
            <h2 className="font-vollkorn font-extrabold text-navy text-[40px] md:text-[56px] lg:text-[64px] leading-none tracking-[-0.02em] text-balance">
              Three engagement{" "}
              <em className="italic font-semibold">shapes.</em>
            </h2>
            <p className="font-vollkorn font-medium text-navy text-[18px] md:text-[20px] leading-[1.5] border-l-2 border-gold pl-6 text-pretty">
              One operator. One practice. Three ways to plug in — depending on
              what the business needs and where the lever is.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-navy">
            {[
              {
                num: "No. 01",
                name: "Embedded.",
                tag: "Best bang for the buck on a full transformation — short term and long term.",
                body: (
                  <>
                    Full transformation residency. Full executive scope as
                    contractor: strategy, operations, vendor portfolio, risk,
                    governance. Inside-out: team-building, full lifecycle
                    delivery, operating-model change, IT-department shore-up,
                    BOSS deployment, agentic framework.
                  </>
                ),
                rows: [
                  ["Cadence", "12 – 24 months", true],
                  ["Footprint", "On-site, full operating depth", false],
                  ["Outcome", "Owned platform · trained team", false],
                ] as const,
              },
              {
                num: "No. 02",
                name: "Fractional.",
                tag: "Plug me in at any stage of an existing project.",
                body: (
                  <>
                    Engagements where a specific lever needs moving: unblock a
                    stalled ERP, deploy a production agent on a critical
                    bottleneck, re-architect the data core while your CIO stays
                    in seat.
                  </>
                ),
                rows: [
                  ["Cadence", "90 – 180 days", true],
                  ["Footprint", "Targeted · lever-specific", false],
                  ["Outcome", "One problem, retired permanently", false],
                ] as const,
              },
              {
                num: "No. 03",
                name: "Agentics.",
                tag: "Standalone, or stacked on either of the above.",
                body: (
                  <>
                    The enterprise agentic framework deployed against the data
                    foundation. Five production apps in live operations is the
                    proof; the framework is what makes it repeatable.
                  </>
                ),
                rows: [
                  ["Cadence", "60 – 120 days", true],
                  ["Footprint", "Function-scoped · platform-aware", false],
                  ["Outcome", "Operating leverage, audited end-to-end", false],
                ] as const,
              },
            ].map((card, i, arr) => (
              <article
                key={card.num}
                className={`relative px-8 py-10 md:py-12 flex flex-col gap-5 min-h-[520px] border-b border-navy/15 ${
                  i < arr.length - 1
                    ? "md:border-r border-b md:border-b-0 border-navy/15"
                    : ""
                }`}
              >
                <span className="font-vollkorn italic font-semibold text-gold text-[18px] tracking-[0.02em]">
                  {card.num}
                </span>
                <span className="absolute top-6 right-6 opacity-85">
                  <M4Lattice size={20} />
                </span>
                <h3 className="font-vollkorn font-extrabold text-navy text-[34px] md:text-[38px] leading-[1.05] tracking-[-0.018em] mt-1">
                  {card.name}
                </h3>
                <p className="font-vollkorn italic font-medium text-warm-gray text-[16px] pb-6 border-b border-navy/15">
                  {card.tag}
                </p>
                <p className="font-body text-navy text-[15px] leading-[1.6]">
                  {card.body}
                </p>
                <div className="mt-auto flex flex-col gap-2.5 pt-6">
                  {card.rows.map(([k, v, italic]) => (
                    <div
                      key={k}
                      className="grid grid-cols-[80px_1fr] gap-4 text-[12px] leading-[1.4]"
                    >
                      <span className="font-body text-[10px] font-bold uppercase tracking-[0.18em] text-warm-gray pt-0.5">
                        {k}
                      </span>
                      <span
                        className={`font-vollkorn font-semibold text-navy text-[14px] ${
                          italic ? "italic font-medium" : ""
                        }`}
                      >
                        {v}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/approach/"
              className="font-body font-semibold text-navy text-[15px] border-b border-navy/40 hover:border-navy"
            >
              Read the full approach →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== IV — BOSS (full-bleed navy) ===================== */}
      <section id="boss" className="relative overflow-hidden bg-navy text-cream">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-10 top-20 opacity-[0.07]"
        >
          <M4Lattice
            size={560}
            cellColor="var(--color-cream)"
            centerColor="var(--color-gold)"
          />
        </div>

        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 py-28 md:py-40 relative">
          <header className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-8 lg:gap-12 items-end mb-20 md:mb-24">
            <div className="hidden lg:block pt-2">
              <span className="block w-10 h-0.5 bg-gold" />
            </div>
            <h2 className="font-vollkorn font-extrabold text-cream text-[72px] md:text-[104px] lg:text-[128px] leading-[0.9] tracking-[-0.04em]">
              B<span className="text-gold">·</span>O
              <span className="text-gold">·</span>S
              <span className="text-gold">·</span>S
            </h2>
            <p className="font-vollkorn italic font-medium text-cream/80 text-[19px] md:text-[22px] leading-[1.45] text-pretty">
              The platform that{" "}
              <strong className="not-italic font-semibold text-cream">
                institutionalizes the new model
              </strong>{" "}
              in the client&rsquo;s hands. Three pillars, one operating
              discipline — engineered so the company keeps running it long
              after the residency ends.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-gold/40 relative">
            {[
              {
                pnum: "Pillar I",
                pname: "Data.",
                ptag: "The layer the client owns.",
                pbody:
                  "Curation, transformation, annotation, quality, and governance pulling a company’s disparate data into one Common Data Model the client owns. Systems and data inventory. Six-constellation current-state process map. Data-to-Reports framework collapsing thousands of ad-hoc reports into one coherent model.",
                items: [
                  ["01", "Common Data Model", "The client owns it. Day one and day one-thousand."],
                  ["02", "Systems & data inventory", "The map of what the company actually runs on."],
                  ["03", "Data-to-Reports framework", "Thousands of ad-hoc reports, collapsed."],
                ] as const,
              },
              {
                pnum: "Pillar II",
                pname: "People.",
                ptag: "The team that carries it forward.",
                pbody:
                  "The beehive — organizing taskforces of leads and SMEs by departmental functional system groups. Change and stakeholder management. Operator empowerment. The deliverable is institutional capacity, not a binder.",
                items: [
                  ["01", "The beehive", "Taskforces by functional system group."],
                  ["02", "Stakeholder & change management", "Cadence the company learns to run."],
                  ["03", "Operator empowerment", "The team carries it after the residency ends."],
                ] as const,
              },
              {
                pnum: "Pillar III",
                pname: (
                  <>
                    <em className="italic font-semibold">Delivery.</em>
                  </>
                ),
                ptag: "The discipline that ships, audits, and repeats.",
                pbody:
                  "Project Management, Governance, and Stakeholder/Change Management as one unified suite. Sprint cadence, decision-traces, capitalization tracking (CFO-defensible per ASC 350-40), vendor-lane orchestration. Native or interop with the client’s existing PM tool — adoption barrier collapses.",
                items: [
                  ["01", "Unified PM + governance + change", "One suite, one cadence, one rhythm."],
                  ["02", "Capitalization tracking", "CFO-defensible per ASC 350-40."],
                  ["03", "Vendor-lane orchestration", "Vendors stay in their lanes — by structure."],
                ] as const,
              },
            ].map((p, i, arr) => (
              <div
                key={p.pnum}
                className={`px-8 md:px-9 pt-12 pb-2 flex flex-col gap-6 ${
                  i < arr.length - 1
                    ? "md:border-r border-cream/15 border-b md:border-b-0"
                    : ""
                }`}
              >
                <span className="font-vollkorn italic font-semibold text-gold text-[13px] tracking-[0.1em]">
                  {p.pnum}
                </span>
                <h3 className="font-vollkorn font-extrabold text-cream text-[44px] md:text-[56px] leading-none tracking-[-0.02em]">
                  {p.pname}
                </h3>
                <p className="font-vollkorn italic font-medium text-gold text-[16px] md:text-[17px] leading-[1.35]">
                  {p.ptag}
                </p>
                <p className="font-body text-cream/80 text-[14.5px] leading-[1.65]">
                  {p.pbody}
                </p>
                <ul className="mt-2 flex flex-col gap-3 pt-6 border-t border-cream/15">
                  {p.items.map(([ix, head, sub]) => (
                    <li
                      key={ix}
                      className="grid grid-cols-[28px_1fr] gap-3 text-[13px] leading-[1.5]"
                    >
                      <span className="font-mono text-gold text-[10px] tracking-[0.1em] pt-1">
                        {ix}
                      </span>
                      <span className="text-cream/90">
                        <b className="block font-vollkorn font-bold text-cream mb-0.5 text-[14px]">
                          {head}
                        </b>
                        {sub}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-14 lg:pl-[112px]">
            <Link
              href="/boss/"
              className="inline-flex items-center gap-2 font-body font-semibold text-gold text-[13px] uppercase tracking-[0.18em] border-b border-gold/40 hover:border-gold pb-1"
            >
              How BOSS works <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== V — ARTICLES ===================== */}
      <section id="articles" className="bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 py-24 md:py-32">
          <header className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-8 lg:gap-12 items-end mb-16">
            <div className="hidden lg:block pt-2">
              <span className="block w-10 h-0.5 bg-gold" />
            </div>
            <h2 className="font-vollkorn font-extrabold text-navy text-[40px] md:text-[56px] lg:text-[64px] leading-none tracking-[-0.02em] text-balance">
              Peer-reviewed{" "}
              <em className="italic font-semibold">articles.</em>
            </h2>
            <p className="font-vollkorn font-medium text-navy text-[18px] md:text-[20px] leading-[1.5] border-l-2 border-gold pl-6 text-pretty">
              Six pieces from the practice. Each is the long answer to a
              question CFOs and CIOs keep asking the wrong people.
            </p>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-navy border-l border-navy/15">
            {ARTICLE_CARDS.map((a) => (
              <article
                key={a.slug}
                className={`relative bg-cream border-r border-b border-navy/15 transition-colors hover:bg-white px-8 py-10 flex flex-col gap-5 min-h-[380px] ${
                  a.featured ? "lg:col-span-2 lg:min-h-[420px] lg:px-10" : ""
                }`}
              >
                <div className="flex justify-between items-center font-body text-[10px] uppercase tracking-[0.18em] text-warm-gray font-semibold">
                  <span>
                    {a.essay}
                    {a.featured ? " · The Practice" : ""}
                  </span>
                  <span className="font-vollkorn italic font-medium text-stone normal-case tracking-normal text-[12px]">
                    In peer review
                  </span>
                </div>
                {a.featured ? (
                  <p className="font-body text-warm-gray text-[15px] md:text-[16px] leading-[1.55] text-pretty max-w-[560px]">
                    {a.thesis}
                  </p>
                ) : null}
                <span className="font-vollkorn italic font-semibold text-gold text-[14px] tracking-[0.04em]">
                  {a.num}
                </span>
                <h3
                  className={`font-vollkorn font-extrabold text-navy leading-[1.1] tracking-[-0.012em] text-balance mt-auto ${
                    a.featured
                      ? "text-[32px] md:text-[42px] max-w-[680px] leading-[1.05]"
                      : "text-[24px] md:text-[26px]"
                  }`}
                >
                  {a.title}
                </h3>
                {!a.featured ? (
                  <p className="font-body text-warm-gray text-[14px] leading-[1.55] text-pretty">
                    {a.thesis}
                  </p>
                ) : null}
                <Link
                  href={`/articles/${a.slug}/`}
                  className="flex items-center gap-2.5 font-body text-[11px] uppercase tracking-[0.18em] font-semibold text-navy pt-3 border-t border-navy/15 hover:text-aubergine"
                >
                  {a.featured ? "Read the essay" : "Read"}{" "}
                  <span className="text-gold text-[14px]">→</span>
                </Link>
              </article>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/articles/"
              className="font-body font-semibold text-navy text-[15px] border-b border-navy/40 hover:border-navy"
            >
              All articles →
            </Link>
          </div>
        </div>
      </section>

      {/* ===================== VI — WHO THIS ISN'T FOR ===================== */}
      <section className="bg-pale-navy">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 py-28 md:py-40">
          <div className="grid grid-cols-1 lg:grid-cols-[80px_1fr_1fr] gap-8 lg:gap-12">
            <div className="hidden lg:block pt-2">
              <span className="block w-10 h-0.5 bg-gold" />
            </div>

            <h2 className="font-vollkorn font-extrabold text-navy text-[44px] md:text-[60px] lg:text-[72px] leading-[0.98] tracking-[-0.025em] text-balance">
              It&rsquo;s not a fit for{" "}
              <em className="italic font-semibold">everyone.</em>
              <span className="block font-vollkorn italic font-semibold text-warm-gray text-[34px] md:text-[44px] lg:text-[54px] mt-2">
                By design.
              </span>
            </h2>

            <ul className="flex flex-col">
              {[
                "Operators comfortable with their partner relationships.",
                "Operators paying license stacks, implementation fees, support contracts, upgrade cycles, and migration retrofits on the vendor’s calendar.",
                "Operators whose users have learned to live with what the system gives them.",
                "Operators whose AI claim has outpaced their operating fabric and who think the next vendor pitch will fix it.",
              ].map((line, i) => (
                <li
                  key={i}
                  className="grid grid-cols-[24px_1fr] gap-4 py-5 border-b border-navy/15 font-vollkorn text-navy text-[17px] md:text-[18px] leading-[1.4]"
                >
                  <span className="font-vollkorn font-bold text-stone text-[18px] pt-0.5">
                    ×
                  </span>
                  <span className="line-through decoration-stone decoration-[1px]">
                    {line}
                  </span>
                </li>
              ))}
            </ul>

            <div className="lg:col-start-2 lg:col-span-2 mt-12 pt-8 border-t-2 border-gold max-w-[820px] flex flex-col gap-6">
              <p className="font-vollkorn italic font-semibold text-navy text-[20px] md:text-[24px] leading-[1.4] text-pretty">
                The practice is one operator, one engagement at a time. The
                selection is deliberate, and — for the right operator — the
                most consequential procurement decision of the decade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VII — FINAL CTA ===================== */}
      <section id="contact" className="relative overflow-hidden bg-cream">
        <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-24 py-28 md:py-36 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-12 lg:gap-24 items-center">
            <div>
              <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-6">
                A Conversation, Not a Proposal
              </p>
              <h2 className="font-vollkorn font-extrabold text-navy text-[48px] md:text-[72px] lg:text-[88px] leading-[0.95] tracking-[-0.025em] text-balance mb-8">
                Begin where the{" "}
                <em className="italic font-semibold">model</em>
                <br className="hidden md:block" />
                actually{" "}
                <span
                  className="inline-block"
                  style={{
                    backgroundImage:
                      "linear-gradient(180deg, transparent 64%, var(--color-gold) 64%, var(--color-gold) 92%, transparent 92%)",
                    padding: "0 6px",
                  }}
                >
                  institutionalizes.
                </span>
              </h2>
              <p className="font-vollkorn italic font-medium text-warm-gray text-[18px] md:text-[20px] max-w-[560px] border-t border-navy/15 pt-5">
                A first conversation is ninety minutes, off-record, and on the
                operator&rsquo;s terms. We end either with a clear next step,
                or a clear answer that this isn&rsquo;t the right fit. Both are
                useful.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <Link
                href="/contact/"
                className="bg-navy text-cream px-7 py-5 font-body text-[13px] font-semibold uppercase tracking-[0.18em] flex justify-between items-center border border-navy hover:bg-aubergine transition-colors"
              >
                Begin a Conversation{" "}
                <span className="text-gold text-[18px]">→</span>
              </Link>
              <Link
                href="/approach/"
                className="bg-transparent text-navy px-7 py-5 font-body text-[13px] font-semibold uppercase tracking-[0.18em] flex justify-between items-center border border-navy hover:bg-navy hover:text-cream transition-colors"
              >
                Read the Practice Letter{" "}
                <span className="text-gold text-[18px]">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
