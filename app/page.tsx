import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BossJourneyFigure from "@/components/BossJourneyFigure";
import LatticeMark from "@/components/LatticeMark";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";

export const metadata: Metadata = {
  title: {
    absolute:
      "idigdata — Embedded transformation leadership for the agentic era",
  },
  description:
    "idigdata embeds Robert Paddock inside 100M-1B operators to deliver agentic-era business-system change and leave behind a business-owned operating asset.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "idigdata — Embedded transformation leadership",
    description:
      "A 30-year transformation operator who delivers agentic-era business-system change and leaves behind a business-owned operating asset.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Embedded transformation leadership",
      },
    ],
  },
};

const marketStops = [
  {
    title: "Diagnosers explain.",
    body: "They can name why transformation fails, but they do not embed and land the work.",
  },
  {
    title: "Vendors implement.",
    body: "They ship their slice, their roadmap, and often their managed-services tail.",
  },
  {
    title: "AI builders demo.",
    body: "They build impressive systems, usually on their state, for their economics.",
  },
];

const proofCards = [
  {
    kicker: "RECOVERY",
    title: "8M ERP, month seventeen, brought to done/done in six.",
    body: "A stalled program was re-orchestrated above the vendor playbook and put back on the operator's calendar.",
  },
  {
    kicker: "DELIVERY",
    title: "Vendor quoted twenty-four months and 10M. Delivered in eighteen months for 5M.",
    body: "Same scope, half the spend, six months faster, with the operator's team owning the asset from day one.",
  },
  {
    kicker: "CONSOLIDATION",
    title: "Two ERPs to one. Month-end close from eighteen days to four.",
    body: "Post-M&A operating reality became a governed system the finance and operations teams could run.",
  },
];

const systems = [
  {
    label: "The system I run on",
    title: "DigOps",
    image: "/brand/digops/digops-logo-panel.svg",
    alt: "DigOps — Buy Make Sell",
    body: "The system I run my own business on: books, pipeline, proposals, billing, and agent-assisted classification with a human on every decision.",
  },
  {
    label: "The machine that builds the machines",
    title: "The Rig",
    image: "/brand/rig/logo-lockup-tagline-panel.svg",
    alt: "The Rig — the human-in-the-loop layer",
    body: "The machine that builds the machines: build plans, full history, tests, acceptance, and observable agent work.",
  },
  {
    label: "What you own at the end",
    title: "BOSS",
    image: "/brand/boss/boss-lockup-panel.svg",
    alt: "BOSS — the business process harness",
    body: "The business process harness: the transformation delivery asset you own at exit.",
  },
];

function SubstrateTriangle() {
  return (
    <svg
      viewBox="0 0 700 600"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-labelledby="tri-title tri-desc"
      className="block h-auto w-full max-w-[680px]"
    >
      <title id="tri-title">Substrate triangle with human validation layer.</title>
      <desc id="tri-desc">
        A triangle connecting data, systems, and processes, with workforce in
        the center and observe validate approve above it.
      </desc>
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
      <line x1="20" y1="80" x2="680" y2="80" stroke="#142840" strokeWidth="1.2" />
      <line x1="350" y1="80" x2="350" y2="168" stroke="#6B6860" strokeWidth="0.6" opacity="0.45" />
      <line x1="80" y1="80" x2="80" y2="508" stroke="#6B6860" strokeWidth="0.6" opacity="0.45" />
      <line x1="620" y1="80" x2="620" y2="508" stroke="#6B6860" strokeWidth="0.6" opacity="0.45" />
      <polygon points="354,186 84,526 624,526" fill="#08182C" opacity="0.12" />
      <polygon points="350,180 80,520 620,520" fill="#F3EBD7" stroke="#142840" strokeWidth="1.6" />
      <line x1="350" y1="180" x2="350" y2="407" stroke="#142840" strokeWidth="0.9" strokeDasharray="3,5" opacity="0.45" />
      <line x1="80" y1="520" x2="350" y2="407" stroke="#142840" strokeWidth="0.9" strokeDasharray="3,5" opacity="0.45" />
      <line x1="620" y1="520" x2="350" y2="407" stroke="#142840" strokeWidth="0.9" strokeDasharray="3,5" opacity="0.45" />
      <circle cx="350" cy="180" r="12" fill="#142840" stroke="#08182C" strokeWidth="0.8" />
      <circle cx="80" cy="520" r="12" fill="#142840" stroke="#08182C" strokeWidth="0.8" />
      <circle cx="620" cy="520" r="12" fill="#142840" stroke="#08182C" strokeWidth="0.8" />
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
      <circle cx="354" cy="410" r="95" fill="#08182C" opacity="0.14" />
      <circle cx="350" cy="407" r="95" fill="#FACC15" stroke="#142840" strokeWidth="1.8" />
      <text x="350" y="403" textAnchor="middle" fontFamily="Vollkorn, Georgia, serif" fontSize="26" fontWeight="700" fill="#142840">
        Workforce
      </text>
      <text x="350" y="425" textAnchor="middle" fontFamily="Source Sans 3, sans-serif" fontSize="12" fontStyle="italic" fill="#142840">
        the users that run the workflows
      </text>
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-content bg-cream px-6 font-body text-navy">
      <section className="relative pt-8 pb-20 md:pt-12 md:pb-24">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-8">
          Embedded transformation leadership for the agentic era
        </SectionKicker>
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.04fr_0.96fr] lg:items-end">
          <div>
            <h1 className="max-w-[11ch] font-vollkorn text-[48px] font-bold leading-[0.98] tracking-[-0.01em] text-navy sm:text-[60px] md:text-[74px]">
              The operator who turns transformation into a system you own.
            </h1>
          </div>
          <div className="border-l-0 border-navy/20 lg:border-l lg:pl-8">
            <p className="font-vollkorn text-[21px] italic leading-[1.35] text-warm-gray md:text-[25px]">
              idigdata embeds Robert Paddock inside 100M-1B businesses to
              deliver agentic-era change, install the operating asset, and
              exit by design.
            </p>
            <p className="mt-5 max-w-[58ch] font-body text-[15.5px] leading-[1.65] text-navy">
              Transformations fail when no one owns the business system above
              the vendors. I own the path from inside the business: data,
              workflows, decisions, people, and the delivery discipline that
              makes the result survive handoff.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact/"
                className="inline-flex items-center justify-center rounded-full bg-gold px-7 py-3.5 font-body text-[13px] font-semibold uppercase tracking-[0.18em] text-navy transition hover:bg-[#FFD740]"
              >
                Start a conversation <span aria-hidden="true" className="ml-2">→</span>
              </Link>
              <Link
                href="/agentics/"
                className="inline-flex items-center justify-center rounded-full border border-navy/25 px-7 py-3.5 font-body text-[13px] font-semibold uppercase tracking-[0.18em] text-navy transition hover:border-navy"
              >
                See applied agentics
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The broken market</SectionKicker>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-vollkorn text-[32px] font-bold leading-[1.12] text-navy md:text-[42px]">
              The technology works. Delivery is where it dies.
            </h2>
            <p className="mt-5 font-vollkorn text-[18px] italic leading-[1.5] text-warm-gray">
              Bain says 88% of transformations fall short. Stanford's Digital
              Economy Lab puts the AI version plainly: the challenge is
              everything else.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {marketStops.map((item) => (
              <article key={item.title} className="border border-navy/15 bg-white p-5">
                <h3 className="font-vollkorn text-[20px] font-bold leading-tight text-navy">
                  {item.title}
                </h3>
                <p className="mt-3 font-body text-[14px] leading-[1.55] text-navy/75">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The missing third</SectionKicker>
        <div className="max-w-[780px]">
          <h2 className="font-vollkorn text-[32px] font-bold leading-[1.14] text-navy md:text-[44px]">
            A senior operator who embeds, builds, transfers, and exits.
          </h2>
          <p className="mt-5 font-body text-[16px] leading-[1.65] text-navy">
            I sit at operator altitude, not vendor altitude. I coordinate
            the vendors, the internal teams, the executives, and the operating
            reality into one delivery frame. Agentics is not the offer by
            itself; it is the unfair advantage inside the operator model.
          </p>
          <p className="mt-6 border-l-[3px] border-l-gold pl-5 font-vollkorn text-[22px] italic leading-[1.35] text-navy">
            No theater. No permanent entourage. The work should survive the
            person who led it.<LatticeMark />
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The model</SectionKicker>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.68fr_1.32fr] lg:items-center">
          <div>
            <h2 className="font-vollkorn text-[32px] font-bold leading-[1.14] text-navy md:text-[42px]">
              Data, systems, processes, with the workforce in the center.
            </h2>
            <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
              The asset is not a deck and not a rented platform. It is the
              operating system of the transformation: governed data, mapped
              workflows, visible decisions, and operators who can run the
              result.
            </p>
          </div>
          <div className="flex justify-center">
            <SubstrateTriangle />
          </div>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Receipts</SectionKicker>
        <div className="mb-8 grid grid-cols-1 gap-8 lg:grid-cols-[0.82fr_1.18fr]">
          <h2 className="font-vollkorn text-[32px] font-bold leading-[1.14] text-navy md:text-[42px]">
            Thirty years in the work. Five production agentic systems at the edge.
          </h2>
          <div>
            <dl className="grid grid-cols-2 gap-3 md:grid-cols-4">
              {["30 years", "50+ implementations", "15 transformations", "5 production agents"].map((metric) => (
                <div key={metric} className="border-t border-navy/20 pt-3">
                  <dt className="sr-only">Proof point</dt>
                  <dd className="font-body text-[12px] font-semibold uppercase tracking-[0.16em] text-navy">
                    {metric}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 font-body text-[15.5px] leading-[1.65] text-navy">
              AEC, beverage CPG, healthcare. ERP, WMS, MES, EMR, CRM/CPQ, and
              the workflows underneath. The rare credential is not AI
              familiarity; it is testing agentics against real work and knowing
              what lands.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {proofCards.map((card) => (
            <article key={card.kicker} className="border border-navy/15 border-l-[3px] border-l-gold bg-white p-5">
              <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
                {card.kicker}
              </p>
              <h3 className="mt-3 font-vollkorn text-[20px] font-bold leading-[1.25] text-navy">
                {card.title}
              </h3>
              <p className="mt-3 font-body text-[14px] leading-[1.55] text-navy/75">
                {card.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Proof systems</SectionKicker>
        <div className="mb-9 max-w-[760px]">
          <h2 className="font-vollkorn text-[32px] font-bold leading-[1.14] text-navy md:text-[42px]">
            I run this model before I bring it to you.
          </h2>
          <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
            The systems are not a product taxonomy for the buyer to memorize.
            They are proof that the operating model is real. BOSS is the one
            you receive: the delivery asset that keeps the transformation from
            decaying after handoff.
          </p>
        </div>
        <div className="grid grid-cols-1 items-stretch gap-5 lg:grid-cols-3">
          {systems.map((system) => (
            <article
              key={system.title}
              className="flex h-full flex-col border border-navy/15 bg-white p-6"
            >
              <p className="font-vollkorn text-[14px] italic text-warm-gray">
                {system.label}
              </p>
              <div className="my-5 flex h-24 items-center justify-center">
                <Image
                  src={system.image}
                  alt={system.alt}
                  width={620}
                  height={220}
                  className="h-20 w-auto"
                />
              </div>
              <h3 className="font-vollkorn text-[24px] font-bold leading-tight text-navy">
                {system.title}
              </h3>
              <p className="mt-3 font-body text-[14.5px] leading-[1.6] text-navy/75">
                {system.body}
              </p>
            </article>
          ))}
        </div>
        <BossJourneyFigure />
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <SectionKicker className="mb-5">How I plug in</SectionKicker>
            <h2 className="font-vollkorn text-[31px] font-bold leading-[1.14] text-navy md:text-[40px]">
              One model. Several entry points.
            </h2>
            <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
              The lead shape is embedded transformation leadership.
              Fractional, recovery, and agentics engagements are entry modes
              into the same operator model, not a menu of unrelated services.
            </p>
            <p className="mt-5 border-t border-navy/15 pt-5 font-vollkorn text-[18px] italic leading-[1.45] text-navy">
              I take on a small number of embedded transformations where the
              mandate is real and the business is ready to own the result.
            </p>
          </div>
          <div>
            <SectionKicker className="mb-5">Inform</SectionKicker>
            <h2 className="font-vollkorn text-[31px] font-bold leading-[1.14] text-navy md:text-[40px]">
              Serious buyers need a better map.
            </h2>
            <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
              The article layer teaches the mechanics: why transformations
              fail, how delivery gets governed, and what production agentics
              requires once it leaves the demo room.
            </p>
            <Link
              href="/articles/"
              className="mt-6 inline-flex font-body text-[13px] font-semibold uppercase tracking-[0.16em] text-navy underline decoration-navy/35 underline-offset-4 hover:decoration-navy"
            >
              Read the article briefings <span aria-hidden="true" className="ml-2">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 md:py-24">
        <div className="mx-auto max-w-[680px] border-l-[4px] border-l-gold bg-navy px-8 py-10 text-cream md:px-10 md:py-12">
          <p className="font-body text-[10.5px] font-semibold uppercase tracking-[0.24em] text-gold">
            Operator to operator
          </p>
          <h2 className="mt-5 font-vollkorn text-[31px] font-bold leading-[1.18] text-cream md:text-[42px]">
            If the work needs an owner, start there.
          </h2>
          <p className="mt-5 font-vollkorn text-[17px] italic leading-[1.55] text-[#DCD9CC]">
            No deck. No proposal theater. Bring the situation, the systems,
            the stalled decision, or the agentic ambition. We will talk shape.
          </p>
          <Link
            href="/contact/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-[13px] font-semibold uppercase tracking-[0.18em] text-navy transition hover:bg-[#FFD740]"
          >
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
