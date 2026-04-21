import SectionHeader from "@/components/SectionHeader";

export default function HomePage() {
  return (
    <div className="mx-auto max-w-content px-6">
      {/* Hero */}
      <section className="pt-20 pb-24 md:pt-28 md:pb-32">
        <h1 className="font-display font-bold text-d2-forest text-[36px] md:text-[56px] leading-[1.05] tracking-tight">
          Operating-model change that sticks.
        </h1>
        <p className="mt-6 text-[20px] text-d2-ink max-w-[780px]">
          Thirty years across five industries. Mid-market operators. Designed
          and driven — not handed off with the deck.
        </p>
        <p className="mt-4 font-body italic text-[15px] text-d2-ink">
          Robert Paddock <span className="not-italic text-d2-stone px-1">·</span>
          Contract CIO <span className="not-italic text-d2-stone px-1">·</span>
          Business transformation{" "}
          <span className="not-italic text-d2-stone px-1">·</span> Agentic
          adoption
        </p>

        <figure className="mt-14 mx-auto max-w-[820px] text-center">
          <blockquote className="relative font-display italic text-d2-ink text-[22px] md:text-[26px] leading-snug px-8">
            <span
              aria-hidden
              className="font-display text-d2-stone text-[56px] leading-none align-top pr-2"
            >
              &ldquo;
            </span>
            Greenfield project. In flight. Between moves. At risk. I can help.
            <span
              aria-hidden
              className="font-display text-d2-stone text-[56px] leading-none align-bottom pl-2"
            >
              &rdquo;
            </span>
          </blockquote>
        </figure>

        <div className="mt-12 flex justify-center">
          <a
            href="mailto:robert@idigdata.com?subject=Start%20a%20conversation"
            className="inline-block bg-d2-forest text-white font-body font-semibold text-[16px] px-7 py-3.5 hover:bg-d2-forest/90 transition-colors focus:outline-2 focus:outline-d2-stone focus:outline-offset-2"
          >
            Start a conversation →
          </a>
        </div>
      </section>

      {/* Metrics strip */}
      <section className="py-10 border-y border-d2-forest/20">
        <ul className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-0 text-center text-d2-warmgray text-[15px]">
          <li>
            <span className="font-body font-bold text-d2-forest text-[26px] align-middle">
              50+
            </span>{" "}
            <span className="align-middle">implementations</span>
          </li>
          <li className="hidden md:inline text-d2-stone px-4">·</li>
          <li>
            <span className="font-body font-bold text-d2-forest text-[26px] align-middle">
              30
            </span>{" "}
            <span className="align-middle">years</span>
          </li>
          <li className="hidden md:inline text-d2-stone px-4">·</li>
          <li className="align-middle">
            <span className="font-body font-bold text-d2-forest text-[20px]">
              Five-industry specialist
            </span>
          </li>
        </ul>
      </section>

      {/* Who I work with */}
      <section className="pt-20 md:pt-24">
        <SectionHeader>Who I work with</SectionHeader>
        <p className="text-[17px] text-d2-ink max-w-[820px]">
          Mid-market operators in complex industries. PE-backed and founder-led.
          $100M to $750M revenue. CPG and food and beverage, specialty
          manufacturing, distribution and logistics, construction and
          engineering, operations-heavy services. Leaders who want
          transformation that institutionalizes — not change that leaves with
          the consultant.
        </p>
        <ul className="mt-8 space-y-4 max-w-[820px]">
          <li className="pl-5 relative">
            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-d2-forest rounded-full" />
            <span className="font-body font-semibold text-d2-forest">
              Boards and Private Equity
            </span>{" "}
            hiring an embedded Transformative CIO to run operating-model change.
          </li>
          <li className="pl-5 relative">
            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-d2-forest rounded-full" />
            <span className="font-body font-semibold text-d2-forest">
              C-Suite executives
            </span>{" "}
            modernizing the business-systems landscape.
          </li>
          <li className="pl-5 relative">
            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-d2-forest rounded-full" />
            <span className="font-body font-semibold text-d2-forest">
              Leadership teams
            </span>{" "}
            executing transformation on the ground.
          </li>
          <li className="pl-5 relative">
            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-d2-forest rounded-full" />
            <span className="font-body font-semibold text-d2-forest">
              Agentic adoption
            </span>{" "}
            — for all three tiers: strategy at the mandate level, portfolio
            integration at the executive level, deployment past the pilot stage
            in the work.
          </li>
        </ul>
      </section>

      {/* Three lanes */}
      <section className="pt-20 md:pt-24">
        <SectionHeader>How I work</SectionHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          <LaneCard
            title="Business transformations"
            pitch="A thirty-year transformative CIO, embedded for six to twelve months, to run your operating-model change — and leave it institutionalized so it outlasts the engagement."
            bullets={[
              "Transformative CIO engagements — fractional (2–3 days/week), part-time, or full-time exclusive.",
              "Six to twelve months typical; twelve to twenty-four for full-time residencies.",
              "Institutional durability by design — change that survives the consultant's exit.",
            ]}
            ctaText="Talk about a transformation"
            ctaHref="mailto:robert@idigdata.com?subject=Transformation%20engagement"
          />
          <LaneCard
            title="Business systems leadership"
            pitch="Microsoft Dynamics specialist — systems landscape strategy, delivery, and operating-model change across the ERP/WMS/commerce stack."
            bullets={[
              "Microsoft D365 ERP. Systems landscape assessment across WMS, commerce, and core operational systems.",
              "Two to three concurrent engagements at a time.",
              "Decade-plus track record as the bedrock service line.",
            ]}
            ctaText="Talk about a systems engagement"
            ctaHref="mailto:robert@idigdata.com?subject=Systems%20engagement"
          />
          <LaneCard
            title="Agentic adoption advisory"
            pitch="Agentic adoption advisory grounded in production systems — strategy, platform selection, and deployment planning for operators moving past pilots."
            bullets={[
              "Enterprise agentics framework — governance, security, onboarding, operator training, empowerment.",
              "Built in live production at Sierra Nevada Brewing. The framework itself — not prompt engineering.",
              "For operators past the pilot stage — discovery, advisory retainer, or roadmap engagements.",
            ]}
            ctaText="Talk about agentic adoption"
            ctaHref="mailto:robert@idigdata.com?subject=Agentic%20adoption"
          />
        </div>
      </section>

      {/* How I plug in */}
      <section className="pt-20 md:pt-24">
        <SectionHeader>How I plug in</SectionHeader>
        <div className="max-w-[820px] space-y-5 text-[17px] text-d2-ink">
          <p>Pick the intensity — fractional, part-time, or full embedded.</p>
          <p>
            A bench if needed — developers, data analysts, system analysts,
            implementors, project managers — the network that rebuilt Sierra
            Nevada's IS function, bolted on or placed permanently.
          </p>
          <p>
            Plus a working vendor and partner Rolodex — thirty years of
            gold-standard relationships across ERP, WMS, data, and agentics.
          </p>
        </div>
      </section>

      {/* BOSS / framework */}
      <section className="pt-20 md:pt-24">
        <SectionHeader>The framework</SectionHeader>
        <div className="max-w-[820px] text-[17px] text-d2-ink">
          <p>
            <span className="font-body font-semibold text-d2-forest">
              Business Operating System Suite
            </span>{" "}
            — the framework carried into every engagement. Thirty years of ERP,
            WMS, and data-warehouse strategy, extended by applied agentics —
            including agentic MDM: annotation and curation turning decades of
            disparate master data into a unified common data model. Proven at
            scale; unprecedented in digital transformation.
          </p>
          <p className="mt-4 text-d2-ink" aria-hidden="true">
            <span className="opacity-60 cursor-not-allowed" title="Link coming soon">
              → BOSS on GitHub
            </span>
          </p>
        </div>
      </section>

      {/* Thirty years, three chapters */}
      <section className="pt-20 md:pt-24">
        <SectionHeader>Thirty years, three chapters</SectionHeader>
        <p className="font-body font-bold text-d2-ink text-[19px] max-w-[820px]">
          Three chapters, one through-line: operating-model change that sticks.
          Designed and driven — not handed off with the deck.
        </p>
        <div className="mt-8 space-y-6 max-w-[820px] text-[17px] text-d2-ink">
          <p>
            <span className="font-display italic text-d2-forest">First</span> —
            sixteen years at Timberline Architectural Openings as CEO and CTO.
            First business transformation: $250K in Year 1 to $130M by Year 10
            across US, Mexico, and China.
          </p>
          <p>
            <span className="font-display italic text-d2-forest">Second</span> —
            full-cycle enterprise systems delivery at AccessIT, then a decade as
            principal at idigdata. 50+ ERP implementations across construction,
            manufacturing, distribution, and services.
          </p>
          <p>
            <span className="font-display italic text-d2-forest">Third</span> —
            a 25-month full Chief Information Officer residency at Sierra Nevada
            Brewing Company, contracted through idigdata. Full CIO scope plus
            the enterprise agentics framework built in live production.
          </p>
        </div>
        <div className="mt-10 text-[15px]">
          <a
            href="/about"
            className="font-body text-d2-forest hover:underline"
          >
            → Read the full career story
          </a>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="mt-24 mb-8">
        <div className="bg-d2-forest text-white py-20 md:py-24 px-6 text-center">
          <h2 className="font-display text-[30px] md:text-[40px] leading-tight">
            Greenfield project. In flight. Between moves. At risk.
          </h2>
          <p className="mt-6 text-[18px] text-white/80">One email. No form.</p>
          <a
            href="mailto:robert@idigdata.com?subject=idigdata%20inquiry"
            className="mt-10 inline-block font-body font-bold text-[22px] md:text-[26px] tracking-wide border-b-2 border-white/60 hover:border-white pb-1 focus:outline-2 focus:outline-white focus:outline-offset-4"
          >
            robert@idigdata.com
          </a>
        </div>
      </section>
    </div>
  );
}

function LaneCard({
  title,
  pitch,
  bullets,
  ctaText,
  ctaHref,
}: {
  title: string;
  pitch: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
}) {
  return (
    <div className="flex flex-col border-t border-d2-forest pt-6">
      <h3 className="font-body font-bold uppercase tracking-section text-[13px] text-d2-forest">
        {title}
      </h3>
      <p className="mt-4 font-display italic text-d2-ink text-[18px] leading-snug">
        {pitch}
      </p>
      <ul className="mt-5 space-y-3 text-[15px] text-d2-ink flex-1">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <a
        href={ctaHref}
        className="mt-6 font-body font-semibold text-d2-forest hover:underline text-[15px]"
      >
        → {ctaText}
      </a>
    </div>
  );
}
