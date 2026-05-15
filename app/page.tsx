import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";

export const metadata: Metadata = {
  title: {
    absolute:
      "idigdata — Forward-Deployed Operator. Data. Processes. People.",
  },
  description:
    "I lead implementations to outcomes — built where data lives. A practice for mid-market business transformations. A living asset that compounds — owned, operating, growing.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "idigdata — Forward-Deployed Operator",
    description:
      "Data. Processes. People. I lead implementations to outcomes — built where data lives. A living asset that compounds — owned, operating, growing.",
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

const goldUnderlineStyle = {
  backgroundImage:
    "linear-gradient(180deg, transparent 60%, var(--color-gold) 60%, var(--color-gold) 92%, transparent 92%)",
  padding: "0 3px",
};

const CONDITIONS = [
  {
    n: "01",
    h: "Disparate legacy systems",
    body:
      "Accumulated through years of point solutions and acquisitions. ERP, WMS, MES, CRM, EMR — none of them quite talk to each other. Each rollout left another integration debt.",
  },
  {
    n: "02",
    h: "No common data model",
    body:
      "Every system carries its own version of master data. The same customer has five different records. The CFO knows. The auditor will too.",
  },
  {
    n: "03",
    h: "Ungoverned, dirty data",
    body:
      "Integrity issues compound silently. Three-way match exception rates climb. Intercompany reconciliation eats senior controller time. The financial impact lands downstream where nobody traces it back to the data layer.",
  },
  {
    n: "04",
    h: "Partners selling ERP-centric, customer-for-life",
    body:
      "PowerPoints pitching the vendor's roadmap. Implementation-partner channel running on billable hours. Managed-services tail baked into the close. They sell tooling. They don't sell operator outcomes.",
  },
  {
    n: "05",
    h: "Vendors who never learned the business",
    body:
      "Configuration expertise, not operating expertise. They know the platform's switches. They don't know your workflows, your people, your real cost structures, or your stakeholder politics.",
  },
  {
    n: "06",
    h: "Sparse PM, sparse change, sparse stakeholder discipline",
    body:
      "Project management thin. Change management treated as an afterthought. The people who actually run the work aren't in the taskforces. Stakeholders disengage. Adoption decays after go-live — if go-live ever lands.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-content px-6 font-body bg-cream text-navy">
      {/* ===================== Block 1 · HERO ===================== */}
      <section className="relative pt-16 md:pt-20 lg:pt-24 pb-20 md:pb-24">
        <M4Watermark position="top-right" />
          <p className="font-body font-semibold uppercase text-warm-gray text-[11px] md:text-[12px] tracking-[0.22em] mb-10 md:mb-12">
            Forward-Deployed Operator · A practice for mid-market business transformations
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
            {/* Left column — three serif beats */}
            <div>
              <p className="font-vollkorn font-bold text-navy text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] leading-[1.1] tracking-[-0.01em] mb-5">
                Data. Processes. People.
              </p>
              <p className="font-vollkorn italic font-normal text-navy text-[28px] sm:text-[32px] md:text-[38px] lg:text-[42px] leading-[1.18] tracking-[-0.005em] mb-5">
                I lead implementations to outcomes — built where data lives.
              </p>
              <p className="font-vollkorn font-bold text-navy text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] leading-[1.18] tracking-[-0.01em]">
                A living asset that compounds — owned, operating,{" "}
                <span style={goldUnderlineStyle}>growing</span>.
              </p>

              <div className="mt-7 md:mt-8 space-y-1.5">
                <p className="font-body font-semibold uppercase text-warm-gray text-[12px] md:text-[13px] tracking-[0.16em]">
                  The Stack ·{" "}
                  <span className="text-navy">
                    ERP · WMS · MES · EMR · CRM/CPQ
                  </span>
                </p>
                <p className="font-body font-semibold uppercase text-warm-gray text-[12px] md:text-[13px] tracking-[0.16em]">
                  The Labs ·{" "}
                  <span className="text-navy">
                    Anthropic · OpenAI · Google · Open Source
                  </span>
                </p>
              </div>
            </div>

            {/* Right column — letter card */}
            <aside
              aria-label="Founder note"
              className="bg-white border border-navy/15 rounded-[4px] px-7 md:px-8 py-7 md:py-8"
            >
              <p className="font-body font-semibold uppercase text-warm-gray text-[10px] md:text-[11px] tracking-[0.24em] mb-4">
                A note from Rob
              </p>
              <p className="font-vollkorn font-normal text-navy text-[18px] md:text-[19px] leading-[1.5]">
                After thirty years leading the deployment end-to-end, I built
                the model that gives mid-market operators back their own
                businesses — and leaves them owning it after I&rsquo;m gone.
              </p>
              <p className="mt-6 pt-4 border-t border-navy/15 font-body text-warm-gray text-[12.5px] tracking-[0.04em]">
                Robert Paddock · idigdata
              </p>
            </aside>
          </div>
      </section>

      {/* ===================== Block 2 · WHAT YOU'RE UP AGAINST ===================== */}
      <section className="py-14 md:py-16 border-t border-navy/15">
        <p className="font-body font-semibold uppercase text-warm-gray text-[11px] md:text-[12px] tracking-[0.22em] mb-5">
          What you&rsquo;re up against
        </p>
          <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] tracking-[-0.01em] mb-6 max-w-[26ch]">
            Sixty percent of transformations fail. The rest rarely survive
            go-live.
          </h2>
          <p className="font-body text-navy text-[15px] md:text-[16px] leading-[1.65] max-w-[68ch]">
            The platform isn&rsquo;t the variable — the economics are. Vendor
            partners run vendor playbooks. Big-four runs staffing economics
            and scope expansion. Advisory firms bill by milestone. They all
            exit at go-live. None ships the post-go-live transformation.
          </p>
      </section>

      {/* ===================== Block 3 · WHAT I USUALLY WALK INTO ===================== */}
      <section className="py-14 md:py-16 border-t border-navy/15">
        <p className="font-body font-semibold uppercase text-warm-gray text-[11px] md:text-[12px] tracking-[0.22em] mb-5">
          What I usually walk into
        </p>
          <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] tracking-[-0.01em] mb-5 max-w-[28ch]">
            The pattern across fifty engagements barely changes.
          </h2>
          <p className="font-vollkorn italic font-normal text-warm-gray text-[16px] md:text-[18px] leading-[1.55] mb-8 max-w-[64ch]">
            Every mid-market operator I&rsquo;ve engaged with arrives at the
            same set of conditions — accumulated over years of vendor-driven
            decisions, partner-led implementations, and the discipline that
            quietly never landed. Sound familiar?
          </p>

          <div className="border-t border-navy/15 max-w-[860px]">
            {CONDITIONS.map((c) => (
              <div
                key={c.n}
                className="grid grid-cols-[56px_1fr] md:grid-cols-[72px_1fr] gap-4 md:gap-6 py-5 md:py-6 border-b border-navy/15"
              >
                <div className="font-vollkorn font-bold text-gold text-[26px] md:text-[30px] leading-none pt-1">
                  {c.n}
                </div>
                <div>
                  <h3 className="font-vollkorn font-bold text-navy text-[18px] md:text-[20px] leading-[1.3] mb-1.5">
                    {c.h}
                  </h3>
                  <p className="font-body text-navy text-[14.5px] md:text-[15.5px] leading-[1.6]">
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="mt-8 font-vollkorn italic font-normal text-navy text-[17px] md:text-[19px] leading-[1.55] max-w-[64ch]">
            <b className="not-italic font-bold">
              If two or three of these are sitting on your desk right now,
            </b>{" "}
            the model below is what fixes them —{" "}
            <span style={goldUnderlineStyle}>
              one operator, six business process flows, the people who run
              them at the center.
            </span>
          </p>
      </section>

      {/* ===================== Block 4 · SUBSTRATE TRIANGLE (LOCKED) ===================== */}
      <section className="py-14 md:py-16 border-t border-navy/15">
        <p className="font-body font-semibold uppercase text-warm-gray text-[11px] md:text-[12px] tracking-[0.22em] mb-5">
          How the work fits together
        </p>
          <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] tracking-[-0.01em] mb-2">
            Where the work converges.
          </h2>
          <p className="font-vollkorn italic font-normal text-warm-gray text-[15px] md:text-[17px] leading-[1.5] mb-6">
            Data, systems, processes — and the people who run them.
          </p>

          <div className="flex justify-center mt-2">
            <svg
              viewBox="0 0 700 620"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="tri-title tri-desc"
              className="block w-full h-auto max-w-[680px]"
            >
              <title id="tri-title">
                Substrate triangle with workflow users at the center.
              </title>
              <desc id="tri-desc">
                Equilateral triangle. Data at the top vertex, Systems at the
                bottom-left, Processes at the bottom-right. A gold dimensional
                disk at the centroid labeled workflow users — the people who
                run the work.
              </desc>
              <defs>
                <radialGradient id="goldOrb" cx="36%" cy="30%" r="75%">
                  <stop offset="0%" stopColor="#FFF0A8" />
                  <stop offset="38%" stopColor="#FACC15" />
                  <stop offset="85%" stopColor="#D9A800" />
                  <stop offset="100%" stopColor="#9E7900" />
                </radialGradient>
                <radialGradient id="navyOrb" cx="34%" cy="28%" r="80%">
                  <stop offset="0%" stopColor="#4A6788" />
                  <stop offset="55%" stopColor="#1F3D5C" />
                  <stop offset="100%" stopColor="#08182C" />
                </radialGradient>
                <linearGradient id="triFace" x1="20%" y1="0%" x2="80%" y2="100%">
                  <stop offset="0%" stopColor="#FFFDF5" />
                  <stop offset="60%" stopColor="#F3EBD7" />
                  <stop offset="100%" stopColor="#E5DBC0" />
                </linearGradient>
                <linearGradient id="goldHighlight" x1="20%" y1="15%" x2="50%" y2="55%">
                  <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon
                points="354,138 84,478 624,478"
                fill="#08182C"
                opacity="0.12"
              />
              <polygon
                points="350,132 80,472 620,472"
                fill="url(#triFace)"
                stroke="#142840"
                strokeWidth="1.6"
              />
              <line
                x1="350"
                y1="132"
                x2="350"
                y2="362"
                stroke="#142840"
                strokeWidth="0.9"
                strokeDasharray="3,5"
                opacity="0.45"
              />
              <line
                x1="80"
                y1="472"
                x2="350"
                y2="362"
                stroke="#142840"
                strokeWidth="0.9"
                strokeDasharray="3,5"
                opacity="0.45"
              />
              <line
                x1="620"
                y1="472"
                x2="350"
                y2="362"
                stroke="#142840"
                strokeWidth="0.9"
                strokeDasharray="3,5"
                opacity="0.45"
              />
              <circle
                cx="350"
                cy="132"
                r="12"
                fill="url(#navyOrb)"
                stroke="#08182C"
                strokeWidth="0.8"
              />
              <circle cx="345" cy="128" r="4" fill="#FFFFFF" opacity="0.4" />
              <circle
                cx="80"
                cy="472"
                r="12"
                fill="url(#navyOrb)"
                stroke="#08182C"
                strokeWidth="0.8"
              />
              <circle cx="75" cy="468" r="4" fill="#FFFFFF" opacity="0.4" />
              <circle
                cx="620"
                cy="472"
                r="12"
                fill="url(#navyOrb)"
                stroke="#08182C"
                strokeWidth="0.8"
              />
              <circle cx="615" cy="468" r="4" fill="#FFFFFF" opacity="0.4" />
              <text
                x="350"
                y="95"
                textAnchor="middle"
                fontFamily="Vollkorn, Georgia, serif"
                fontSize="26"
                fontWeight="700"
                fill="#142840"
              >
                Data
              </text>
              <text
                x="350"
                y="106"
                textAnchor="middle"
                fontFamily="Source Sans 3, sans-serif"
                fontSize="10"
                fill="#6B6860"
              >
                <tspan x="350" dy="0">Common Data Model · golden schemas</tspan>
                <tspan x="350" dy="11">master data governance</tspan>
              </text>
              <text
                x="80"
                y="510"
                textAnchor="middle"
                fontFamily="Vollkorn, Georgia, serif"
                fontSize="22"
                fontWeight="700"
                fill="#142840"
              >
                Systems
              </text>
              <text
                x="80"
                y="528"
                textAnchor="middle"
                fontFamily="Source Sans 3, sans-serif"
                fontSize="11"
                fill="#6B6860"
              >
                ERP · WMS · MES · EMR · CRM/CPQ
              </text>
              <text
                x="80"
                y="543"
                textAnchor="middle"
                fontFamily="Source Sans 3, sans-serif"
                fontSize="10"
                fill="#6B6860"
                fontStyle="italic"
              >
                multi-platform · multi-vendor
              </text>
              <text
                x="620"
                y="510"
                textAnchor="middle"
                fontFamily="Vollkorn, Georgia, serif"
                fontSize="22"
                fontWeight="700"
                fill="#142840"
              >
                Processes
              </text>
              <text
                x="620"
                y="528"
                textAnchor="middle"
                fontFamily="Source Sans 3, sans-serif"
                fontSize="11"
                fill="#6B6860"
              >
                Six business process flows · workflows
              </text>
              <text
                x="620"
                y="543"
                textAnchor="middle"
                fontFamily="Source Sans 3, sans-serif"
                fontSize="10"
                fill="#6B6860"
                fontStyle="italic"
              >
                P2P · O2C · P2M · D2R · MDM · S2S
              </text>
              <circle cx="354" cy="365" r="100" fill="#08182C" opacity="0.14" />
              <circle
                cx="350"
                cy="362"
                r="100"
                fill="url(#goldOrb)"
                stroke="#142840"
                strokeWidth="1.8"
              />
              <ellipse
                cx="320"
                cy="330"
                rx="50"
                ry="32"
                fill="url(#goldHighlight)"
              />
              <text
                x="350"
                y="358"
                textAnchor="middle"
                fontFamily="Vollkorn, Georgia, serif"
                fontSize="22"
                fontWeight="700"
                fill="#142840"
              >
                Workflow users
              </text>
              <text
                x="350"
                y="383"
                textAnchor="middle"
                fontFamily="Source Sans 3, sans-serif"
                fontSize="12"
                fill="#142840"
                fontStyle="italic"
              >
                the people who run the work
              </text>
            </svg>
          </div>

          <p className="mt-5 pt-5 border-t border-navy/15 font-vollkorn font-bold text-navy text-[16px] md:text-[18px] leading-[1.55] text-center max-w-[58ch] mx-auto">
            Every transformation that failed put a system at the center.
            <span className="block font-normal italic mt-1.5">
              I put{" "}
              <span style={goldUnderlineStyle}>
                the people who run the work.
              </span>
            </span>
          </p>
      </section>

      {/* ===================== Block 5 · V1 + V2 (two value props) ===================== */}
      <section className="py-14 md:py-16 border-t border-navy/15">
        <p className="font-body font-semibold uppercase text-warm-gray text-[11px] md:text-[12px] tracking-[0.22em] mb-6">
          What I do · two value props, one practice
        </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 md:gap-6">
            {/* V1 card */}
            <div className="bg-navy text-cream rounded-[4px] px-7 md:px-8 py-8 md:py-9">
              <p className="font-body font-semibold uppercase text-gold text-[10.5px] md:text-[11.5px] tracking-[0.24em] mb-3">
                V1 · Transformation
              </p>
              <h3 className="font-vollkorn font-bold text-cream text-[20px] md:text-[23px] leading-[1.3] mb-4">
                I deliver business transformation as a forward-deployed asset
                — not as a firm running on billings.
              </h3>
              <div className="font-body text-[14.5px] md:text-[15px] leading-[1.65] text-[#DCD9CC] space-y-3">
                <p>
                  <em className="not-italic italic font-normal text-white">
                    I run the inversion.
                  </em>{" "}
                  One forward-deployed operator with a virtual bench of senior
                  independent specialists assembled across fifty-plus
                  engagements — fifteen of them full multi-year
                  transformations. Flat-rate weekly economics tied to
                  outcomes. Exit-by-design at handoff. No managed-services
                  tail. No vendor commissions. No partner-channel pressure.{" "}
                  <em className="not-italic italic font-normal text-white">
                    Continuity discipline:
                  </em>{" "}
                  every workstream is documented and shadow-staffed across the
                  bench from week one — the practice does not depend on me
                  being in the room.
                </p>
                <p>
                  I live inside the operator. I breathe the pain. I know the
                  workflows the operator runs every day — across ERP, WMS,
                  MES, EMR, CRM/CPQ. Multi-platform, multi-vendor versed. I
                  know the systems and I know the people who use them — their
                  pain points, their unmet needs, what makes a transformation
                  land for them or stall.
                </p>
                <p>
                  What makes the handoff stick: every workflow documented in
                  SOPs the operator&rsquo;s team can run; every data model
                  governed and vendor-portable; every system talking to a
                  Common Data Model the operator owns — not the consultant,
                  not the ERP vendor. Vendor-agnostic isn&rsquo;t a marketing
                  posture. It&rsquo;s a structural consequence of putting the
                  operator at the center of the data graph instead of the ERP
                  vendor at the center.
                </p>
                <p>
                  <span className="text-gold font-semibold">
                    Start with the end in mind
                  </span>{" "}
                  — the operator&rsquo;s asset, fully built and operating. My
                  data-centric structure reduces the repeating noise that
                  consumes most transformations, adds clarity at every
                  cross-functional decision point, and gives the operator
                  command and control over delivery and user adoption —
                  better and faster than any vendor partner can manage.
                  That&rsquo;s the FDO model.
                </p>
              </div>
            </div>

            {/* V2 card */}
            <div className="bg-navy text-cream rounded-[4px] px-7 md:px-8 py-8 md:py-9">
              <p className="font-body font-semibold uppercase text-gold text-[10.5px] md:text-[11.5px] tracking-[0.24em] mb-3">
                V2 · Applied agentics
              </p>
              <h3 className="font-vollkorn font-bold text-cream text-[20px] md:text-[23px] leading-[1.3] mb-4">
                I deploy agentic workflows on top of a substrate that&rsquo;s
                real — not a demo.
              </h3>
              <div className="font-body text-[14.5px] md:text-[15px] leading-[1.65] text-[#DCD9CC] space-y-3">
                <p>
                  Agentic workflows are being deployed at scale right now.
                  Most implementations will fail for the same reason every
                  business-system transformation has failed for decades: they
                  don&rsquo;t solve the fragmented data and undocumented
                  workflow problem first. Engineers know how to write model
                  code. Very few know how to architect the unsexy data
                  schemas, documented workflows, and governance protocols a
                  business actually runs on. If the substrate is garbage, the
                  AI is vaporware.
                </p>
                <p>
                  <em className="not-italic italic font-normal text-white">
                    I fix the substrate so the agents work.
                  </em>{" "}
                  Five production agentic systems already shipped at a
                  mid-market beverage CPG operator — named functions in
                  supply chain, finance, and operations. Not demos.
                  Production.
                </p>
                <p>Same operator across both. Two value props, one practice.</p>
              </div>
            </div>
          </div>
      </section>

      {/* ===================== Block 6 · RECEIPTS ===================== */}
      <section className="py-14 md:py-16 border-t border-navy/15">
        <p className="font-body font-semibold uppercase text-warm-gray text-[11px] md:text-[12px] tracking-[0.22em] mb-5">
          Where I&rsquo;ve lived this
        </p>
          <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] tracking-[-0.01em] mb-5 max-w-[32ch]">
            Three industry specialties. Five primary system families. The
            workflows underneath.
          </h2>
          <p className="font-body text-navy text-[15px] md:text-[16px] leading-[1.65] max-w-[68ch] mb-8">
            AEC (architecture, engineering, construction). Beverage CPG (wine,
            beer, spirits). Healthcare (EHR). Multi-platform and multi-vendor
            versed across ERP, WMS, MES, EMR, and CRM/CPQ — the five primary
            system families where mid-market operators run their work.
            Fifty-plus engagements, fifteen of them full multi-year
            transformations, plus five production agentic systems shipped in
            the most recent program.
          </p>

          <p className="font-vollkorn italic font-normal text-navy text-[17px] md:text-[19px] leading-[1.45] mb-6 pt-6 border-t border-navy/15">
            Selected outcomes — across the range, with the orchestration
            discipline that lands them.
          </p>

          <div className="flex flex-col gap-4">
            {[
              {
                kicker: "RECOVERY ENGAGEMENT",
                h: "Took an $8M stalled ERP from month seventeen to done/done in six.",
                body: (
                  <>
                    Mid-market operator. $8M ERP implementation stalled at
                    month seventeen of an eighteen-month plan. Partner running
                    the vendor playbook. Stakeholders disengaged. No go-live
                    in sight. Brought in mid-stride as forward-deployed lead.{" "}
                    <b className="font-bold">
                      Six months later: go-live on the operator&rsquo;s
                      calendar, with the operator&rsquo;s team running the
                      asset.
                    </b>
                  </>
                ),
                orch:
                  "Orchestrated: operator's PMO, in-house IT, vendor PS, and two specialty consultancies — under unified governance.",
              },
              {
                kicker: "FORWARD-DEPLOYED BUILD",
                h: "Vendor quoted twenty-four months and $10M. Delivered in eighteen months for $5M.",
                body: (
                  <>
                    Mid-market operator. Full business transformation — core
                    ERP, WMS, and specialty software, multi-site. Vendor
                    proposal: twenty-four months, $10M, vendor-led delivery
                    with a managed-services tail. Ran instead as
                    forward-deployed operator above the vendors.{" "}
                    <b className="font-bold">
                      All systems to go-live in eighteen months for $5M. Same
                      scope. Half the spend. Six months faster.
                    </b>{" "}
                    The operator&rsquo;s team owned the asset from day one.
                  </>
                ),
                orch:
                  "Orchestrated: ERP vendor implementation partner, two specialty software vendors, internal IT, and operator-side functional taskforces — single delivery org, single governance cadence.",
              },
              {
                kicker: "POST-M&A CONSOLIDATION",
                h: "Two ERPs to one. Month-end close from eighteen days to four.",
                body: (
                  <>
                    Mid-market operator post-acquisition — combined revenue
                    around $350M. Two parallel ERPs. A WMS that didn&rsquo;t
                    talk to either. Finance teams in two cities operating on
                    incompatible chart-of-accounts. Built a single delivery
                    organization across both entities. Consolidated to a
                    unified ERP with integrated WMS in eleven months. Master
                    data governed in one place under a Common Data Model the
                    operator owns.{" "}
                    <b className="font-bold">
                      Month-end close from eighteen days to four. Intercompany
                      reconciliation from a three-day controller burden to
                      overnight.
                    </b>
                  </>
                ),
                orch:
                  "Orchestrated: two acquired-entity finance teams, two IT shops, ERP vendor and integration partner, WMS specialty firm — consolidated under one transformation governance from week one.",
              },
            ].map((o) => (
              <article
                key={o.kicker}
                className="bg-white border border-navy/15 border-l-[3px] border-l-gold rounded-[4px] px-6 md:px-7 py-6 md:py-7"
              >
                <p
                  className="font-body font-semibold uppercase text-[10px] md:text-[11px] tracking-[0.26em] mb-2"
                  style={{ color: "#6B5408" }}
                >
                  {o.kicker}
                </p>
                <h3 className="font-vollkorn font-bold text-navy text-[19px] md:text-[22px] leading-[1.3] mb-3">
                  {o.h}
                </h3>
                <p className="font-body text-navy text-[14.5px] md:text-[15.5px] leading-[1.6]">
                  {o.body}
                </p>
                <p className="mt-3 pt-3 border-t border-navy/10 font-body italic text-warm-gray text-[12.5px] md:text-[13px] leading-[1.5]">
                  {o.orch}
                </p>
              </article>
            ))}
          </div>
      </section>

      {/* ===================== Block 7 · ENGAGEMENT PROCESS ===================== */}
      <section className="py-14 md:py-16 border-t border-navy/15">
        <p className="font-body font-semibold uppercase text-warm-gray text-[11px] md:text-[12px] tracking-[0.22em] mb-5">
          How an engagement runs
        </p>
          <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] tracking-[-0.01em] mb-7">
            Phase zero to handoff.
          </h2>

          <div className="grid grid-cols-[36px_1fr] md:grid-cols-[48px_1fr] gap-x-4 md:gap-x-5 gap-y-4 max-w-[820px]">
            {[
              {
                n: "01",
                body: (
                  <>
                    <b className="font-bold">Read the operator.</b> Six-axis
                    diagnostic before contract — data architecture, operating
                    model, post-M&amp;A consolidation, agentic readiness, IT
                    maturity, change-receptivity. The political map is never
                    the org chart.
                  </>
                ),
              },
              {
                n: "02",
                body: (
                  <>
                    <b className="font-bold">Build the substrate.</b> Common
                    Data Model. Governed master data. Documented workflows
                    across ERP, WMS, MES, EMR, CRM/CPQ. Working taskforces of
                    the people who actually run those workflows. Mock
                    go-lives. UAT cycles. SOPs auto-generate during
                    validation, not as a separate workstream.
                  </>
                ),
              },
              {
                n: "03",
                body: (
                  <>
                    <b className="font-bold">Cutover.</b> A date, not a vibe.
                    Tested, validated, ready.
                  </>
                ),
              },
              {
                n: "04",
                body: (
                  <>
                    <b className="font-bold">Handoff and exit.</b>{" "}
                    Operator&rsquo;s team runs the substrate. Asset is owned,
                    documented, and maintained in-house. I leave. The work
                    compounds.
                  </>
                ),
              },
            ].map((p) => (
              <div key={p.n} className="contents">
                <div className="font-vollkorn font-bold text-gold text-[18px] md:text-[20px] leading-[1.55]">
                  {p.n}
                </div>
                <div className="font-body text-navy text-[14.5px] md:text-[15.5px] leading-[1.6]">
                  {p.body}
                </div>
              </div>
            ))}
          </div>
      </section>

      {/* ===================== Block 8 · CTA ===================== */}
      <section
        id="contact"
        className="bg-navy text-cream py-14 md:py-20"
      >
        <h2 className="font-vollkorn font-bold text-cream text-[28px] md:text-[36px] lg:text-[42px] leading-[1.25] mb-4">
          Plug me in.
        </h2>
          <p className="font-body text-[15px] md:text-[16px] leading-[1.65] text-[#DCD9CC] max-w-[58ch] mb-7">
            If your business is sitting on three different ERPs, a WMS the
            floor doesn&rsquo;t trust, agentic pilots that haven&rsquo;t
            landed in production, or a transformation that stalled before it
            landed — I&rsquo;m one operator-to-operator conversation away. No
            deck. No proposal. Just talking shape.
          </p>
          <Link
            href="/contact/"
            className="inline-block bg-gold text-navy font-body font-semibold uppercase text-[13px] md:text-[14px] tracking-[0.06em] px-6 py-3 rounded-[4px] hover:bg-[#FFD740] transition-colors"
          >
            Start a conversation →
          </Link>
      </section>
    </div>
  );
}
