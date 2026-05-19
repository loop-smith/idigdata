import type { Metadata } from "next";
import Link from "next/link";
import ConditionsAccordion from "@/components/ConditionsAccordion";
import M4Watermark from "@/components/M4Watermark";

export const metadata: Metadata = {
  title: {
    absolute:
      "idigdata — Forward-Deployed Operator for mid-market business transformations",
  },
  description:
    "Forward-Deployed Operator for mid-market business transformations. Business systems — data, workflows, and people. A living asset that compounds.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "idigdata — Forward-Deployed Operator",
    description:
      "Forward-Deployed Operator for mid-market business transformations. Business systems — data, workflows, and people. A living asset that compounds.",
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
    body: "ERP, WMS, MES, CRM, EMR. None of them quite talk to each other.",
  },
  {
    n: "02",
    h: "No common data model",
    body: "The same customer has five different records. The CFO knows.",
  },
  {
    n: "03",
    h: "Ungoverned, dirty data",
    body:
      "Three-way match exceptions climb. Intercompany reconciliation eats controller time.",
  },
  {
    n: "04",
    h: "Partners selling ERP-centric, customer-for-life",
    body:
      "Implementation-partner billable hours. Managed-services tail baked into the close.",
  },
  {
    n: "05",
    h: "Vendors who never learned the business",
    body: "Configuration expertise, not operating expertise.",
  },
  {
    n: "06",
    h: "Sparse PM, sparse change, sparse stakeholder discipline",
    body: "The people who actually run the work aren't in the taskforces.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-content px-6 font-body bg-cream text-navy">
      {/* ===================== Block 1 · HERO ===================== */}
      <section className="relative pt-6 md:pt-8 lg:pt-10 pb-20 md:pb-24">
        <M4Watermark position="top-right" />
          <p className="font-body font-semibold uppercase text-warm-gray text-[11px] md:text-[12px] tracking-[0.22em] mb-10 md:mb-12">
            Forward-Deployed Operator for mid-market business transformations
          </p>

          <p className="font-vollkorn font-bold text-navy text-[44px] sm:text-[54px] md:text-[64px] lg:text-[76px] leading-[1.02] tracking-[-0.015em] mb-3">
            Business Systems
          </p>
          <p className="font-vollkorn italic font-normal text-navy text-[26px] sm:text-[32px] md:text-[40px] lg:text-[46px] leading-[1.1] tracking-[-0.005em] mb-10 md:mb-12">
            Data, Workflows &amp; People
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
            {/* Left column — two serif beats */}
            <div>
              <p className="font-vollkorn font-bold text-navy text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] leading-[1.18] tracking-[-0.01em] mb-5">
                Half-shipped systems. Vendors running the play. Data nobody trusts.
              </p>
              <p className="font-vollkorn font-bold text-navy text-[28px] sm:text-[34px] md:text-[40px] lg:text-[46px] leading-[1.18] tracking-[-0.01em]">
                A living asset. Compounding across{" "}
                <span style={goldUnderlineStyle}>data, workflows, and people</span>.
              </p>

              <div className="mt-7 md:mt-8 space-y-1.5">
                <p className="font-body font-semibold uppercase text-warm-gray text-[12px] md:text-[13px] tracking-[0.16em]">
                  The Core Systems Stack ·{" "}
                  <span className="text-navy">
                    ERP · CRM/CPQ · WMS · MES · EMR · GRC
                  </span>
                </p>
                <p className="font-body font-semibold uppercase text-warm-gray text-[12px] md:text-[13px] tracking-[0.16em]">
                  The AI Labs ·{" "}
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
                After thirty years, here&rsquo;s what a successful business
                system transformation is: multiple deployments over time to
                a planned end state. Systems work. Users have adopted. The
                ecosystem becomes a living asset — happy people, happy systems.
              </p>
              <p className="mt-4 font-vollkorn italic font-semibold text-navy text-[16px] md:text-[17px] leading-[1.4]">
                My measure of success.
              </p>
              <p className="mt-6 pt-4 border-t border-navy/15 font-body text-warm-gray text-[12.5px] tracking-[0.04em]">
                Robert Paddock · idigdata
              </p>
            </aside>
          </div>
      </section>

      {/* ===================== Block 2 · THE PROBLEM ISN'T EFFORT ===================== */}
      <section className="py-14 md:py-16 border-t border-navy/15">
        <p className="font-body font-semibold uppercase text-warm-gray text-[11px] md:text-[12px] tracking-[0.22em] mb-5">
          The problem isn&rsquo;t effort
        </p>
          <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] tracking-[-0.01em] mb-5 max-w-[30ch]">
            Sixty percent of transformations fail. The effort was there. The orchestration wasn&rsquo;t.
          </h2>
          <p className="font-vollkorn italic font-normal text-warm-gray text-[16px] md:text-[18px] leading-[1.55] mb-8 max-w-[64ch]">
            Every operator&rsquo;s team I walk into is working hard. The
            transformation isn&rsquo;t stuck because effort is missing —
            it&rsquo;s stuck because nobody is unifying the work. Fifty smart
            people, three vendors, two finance teams, six process flows — all
            moving, none aligned. The structural headwinds don&rsquo;t help:
            subscription economics keeps the platforms rigid, data sovereignty
            slows every decision, partner playbooks pull each workstream toward
            the partner&rsquo;s commercial outcomes instead of the operator&rsquo;s.
          </p>

          <ConditionsAccordion conditions={CONDITIONS} />

          <p className="mt-8 font-vollkorn italic font-normal text-navy text-[17px] md:text-[19px] leading-[1.55] max-w-[64ch]">
            <b className="not-italic font-bold">
              If two or three of these are sitting on your desk right now,
            </b>{" "}
            the question isn&rsquo;t whether your team is working hard enough —{" "}
            <span style={goldUnderlineStyle}>
              it&rsquo;s whether anyone is unifying the work.
            </span>
          </p>
      </section>

      {/* ===================== Block 3 · SUBSTRATE TRIANGLE (LOCKED) ===================== */}
      <section className="py-14 md:py-16 border-t border-navy/15">
        <p className="font-body font-semibold uppercase text-warm-gray text-[11px] md:text-[12px] tracking-[0.22em] mb-5">
          The model
        </p>
          <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[36px] lg:text-[42px] leading-[1.2] tracking-[-0.01em] mb-2">
            Data, systems, processes — and the workforce.
          </h2>

          <div className="flex justify-center mt-6 md:mt-8">
            <svg
              viewBox="0 0 700 600"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-labelledby="tri-title tri-desc"
              className="block w-full h-auto max-w-[680px]"
            >
              <title id="tri-title">
                Substrate triangle below Architectural Datum · active-triplet headline.
              </title>
              <desc id="tri-desc">
                Horizontal navy datum line near top of canvas labeled Observe Validate
                Approve with sub the human-in-the-loop layer. Three thin warm-gray vertical
                plumb lines descend from datum to vertex orbs of substrate triangle.
                Vertices labeled Data the substrate, Systems the stack, Processes the
                workflows. Center disk labeled Workforce the users that run the workflows.
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

              {/* ARCHITECTURAL DATUM · observability layer · active-triplet headline */}
              <text
                x="350"
                y="42"
                textAnchor="middle"
                fontFamily="Vollkorn, Georgia, serif"
                fontSize="22"
                fontWeight="700"
                fill="#142840"
              >
                Observe · Validate · Approve
              </text>
              <text
                x="350"
                y="60"
                textAnchor="middle"
                fontFamily="Source Sans 3, sans-serif"
                fontSize="13"
                fontStyle="italic"
                fill="#6B6860"
              >
                the human-in-the-loop layer
              </text>

              {/* Horizontal navy datum line */}
              <line x1="20" y1="80" x2="680" y2="80" stroke="#142840" strokeWidth="1.2" />

              {/* 3 warm-gray plumb lines descending from datum to vertex orbs */}
              <line x1="350" y1="80" x2="350" y2="168" stroke="#6B6860" strokeWidth="0.6" opacity="0.45" />
              <line x1="80" y1="80" x2="80" y2="508" stroke="#6B6860" strokeWidth="0.6" opacity="0.45" />
              <line x1="620" y1="80" x2="620" y2="508" stroke="#6B6860" strokeWidth="0.6" opacity="0.45" />

              {/* SUBSTRATE TRIANGLE · apex (350,180) · BL (80,520) · BR (620,520) · centroid (350,407) */}
              <polygon points="354,186 84,526 624,526" fill="#08182C" opacity="0.12" />
              <polygon
                points="350,180 80,520 620,520"
                fill="url(#triFace)"
                stroke="#142840"
                strokeWidth="1.6"
              />

              {/* Dashed convergence lines to centroid */}
              <line x1="350" y1="180" x2="350" y2="407" stroke="#142840" strokeWidth="0.9" strokeDasharray="3,5" opacity="0.45" />
              <line x1="80" y1="520" x2="350" y2="407" stroke="#142840" strokeWidth="0.9" strokeDasharray="3,5" opacity="0.45" />
              <line x1="620" y1="520" x2="350" y2="407" stroke="#142840" strokeWidth="0.9" strokeDasharray="3,5" opacity="0.45" />

              {/* Vertex orbs */}
              <circle cx="350" cy="180" r="12" fill="url(#navyOrb)" stroke="#08182C" strokeWidth="0.8" />
              <circle cx="345" cy="176" r="4" fill="#FFFFFF" opacity="0.4" />
              <circle cx="80" cy="520" r="12" fill="url(#navyOrb)" stroke="#08182C" strokeWidth="0.8" />
              <circle cx="75" cy="516" r="4" fill="#FFFFFF" opacity="0.4" />
              <circle cx="620" cy="520" r="12" fill="url(#navyOrb)" stroke="#08182C" strokeWidth="0.8" />
              <circle cx="615" cy="516" r="4" fill="#FFFFFF" opacity="0.4" />

              {/* Vertex labels — v7 short-form subs */}
              <text x="350" y="143" textAnchor="middle" fontFamily="Vollkorn, Georgia, serif" fontSize="26" fontWeight="700" fill="#142840">
                Data
              </text>
              <text x="350" y="163" textAnchor="middle" fontFamily="Source Sans 3, sans-serif" fontSize="13" fontStyle="italic" fill="#6B6860">
                the substrate
              </text>

              <text x="80" y="558" textAnchor="middle" fontFamily="Vollkorn, Georgia, serif" fontSize="22" fontWeight="700" fill="#142840">
                Systems
              </text>
              <text x="80" y="576" textAnchor="middle" fontFamily="Source Sans 3, sans-serif" fontSize="13" fontStyle="italic" fill="#6B6860">
                the stack
              </text>

              <text x="620" y="558" textAnchor="middle" fontFamily="Vollkorn, Georgia, serif" fontSize="22" fontWeight="700" fill="#142840">
                Processes
              </text>
              <text x="620" y="576" textAnchor="middle" fontFamily="Source Sans 3, sans-serif" fontSize="13" fontStyle="italic" fill="#6B6860">
                the workflows
              </text>

              {/* Center disk · Workforce */}
              <circle cx="354" cy="410" r="95" fill="#08182C" opacity="0.14" />
              <circle cx="350" cy="407" r="95" fill="url(#goldOrb)" stroke="#142840" strokeWidth="1.8" />
              <ellipse cx="322" cy="378" rx="48" ry="30" fill="url(#goldHighlight)" />
              <text x="350" y="403" textAnchor="middle" fontFamily="Vollkorn, Georgia, serif" fontSize="26" fontWeight="700" fill="#142840">
                Workforce
              </text>
              <text x="350" y="425" textAnchor="middle" fontFamily="Source Sans 3, sans-serif" fontSize="12" fontStyle="italic" fill="#142840">
                the users that run the workflows
              </text>
            </svg>
          </div>

          <div className="md:hidden mt-6 font-body text-navy text-[14px] leading-[1.65]">
            <p className="mb-2"><span className="font-semibold">Data</span> at the apex — the substrate.</p>
            <p className="mb-2"><span className="font-semibold">Systems</span> bottom-left — the stack.</p>
            <p className="mb-2"><span className="font-semibold">Processes</span> bottom-right — the workflows.</p>
            <p className="mb-2"><span className="font-semibold">Workforce</span> at the center — the users that run them.</p>
            <p className="mt-3 pt-3 border-t border-navy/10 italic text-warm-gray text-[13px]">Above the substrate: the human-in-the-loop layer — observe, validate, approve.</p>
          </div>

          <p className="mt-5 pt-5 border-t border-navy/15 font-vollkorn font-bold text-navy text-[16px] md:text-[18px] leading-[1.55] text-center max-w-[58ch] mx-auto">
            Workforce at the center. Human-in-the-loop above.
            <span className="block font-normal italic mt-1.5">
              A living asset that compounds{" "}
              <span style={goldUnderlineStyle}>
                over time.
              </span>
            </span>
          </p>
      </section>

      {/* ===================== Block 4 · RECEIPTS ===================== */}
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

      {/* ===================== Block 5 · CTA · card-inset (Hero variant) ===================== */}
      <section id="contact" className="py-20 md:py-28">
        <div className="mx-auto max-w-[680px] bg-navy text-cream font-body rounded-[6px] shadow-[0_2px_24px_rgba(20,40,64,0.08)] border-l-[4px] border-l-gold px-8 md:px-10 lg:px-12 py-10 md:py-12 lg:py-14">

          <p className="font-body font-semibold uppercase text-gold text-[10.5px] md:text-[11.5px] tracking-[0.24em] mb-6">
            Embedded · Fractional · Agentics — sized to the work
          </p>

          <h2 className="font-vollkorn font-bold text-cream text-[28px] md:text-[36px] lg:text-[42px] leading-[1.18] mb-5">
            Let&rsquo;s talk shape.
          </h2>

          {/* Pull-quote · the emotional center */}
          <p className="font-vollkorn italic font-medium text-cream text-[20px] md:text-[24px] lg:text-[26px] leading-[1.3] mb-6 max-w-[26ch]">
            No deck. No proposal.{" "}
            <span className="text-gold">Just talking shape.</span>
          </p>

          <p className="font-vollkorn italic font-normal text-[#DCD9CC] text-[14.5px] md:text-[15.5px] leading-[1.6] mb-8">
            If your business is sitting on three different ERPs, a WMS the
            floor doesn&rsquo;t trust, agentic pilots that haven&rsquo;t
            landed in production, or a transformation that stalled — I&rsquo;m
            one operator-to-operator conversation away.
          </p>

          <Link
            href="/contact/"
            className="inline-flex items-center gap-2 bg-gold text-navy font-body font-semibold uppercase text-[13px] md:text-[14px] tracking-[0.18em] px-8 py-4 rounded-full hover:bg-[#FFD740] hover:shadow-lg transition-all duration-200"
          >
            Start a conversation <span aria-hidden>→</span>
          </Link>

          <p className="mt-8 pt-6 border-t border-cream/15 font-body italic text-[#9EA0A6] text-[13px] md:text-[13.5px] leading-[1.5]">
            Three engagement shapes, one practice —{" "}
            <Link
              href="/approach/"
              className="text-gold hover:text-[#FFD740] underline underline-offset-2 not-italic whitespace-nowrap"
            >
              /approach →
            </Link>
          </p>

        </div>
      </section>
    </div>
  );
}
