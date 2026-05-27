import type { Metadata } from "next";
import Link from "next/link";
import BossJourneyFigure from "@/components/BossJourneyFigure";
import LatticeMark from "@/components/LatticeMark";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";

export const metadata: Metadata = {
  title: {
    absolute:
      "idigdata - Embedded transformation leadership for the agentic era",
  },
  description:
    "idigdata embeds Robert Paddock inside $100M-$1B operators to deliver agentic-era business-system change and leave behind a business-owned operating asset.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "idigdata - Embedded transformation leadership",
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

const groundingStats = [
  {
    lead: "30 years",
    sub: "in business-system transformation",
    compact: false,
  },
  {
    lead: "50+",
    sub: "implementations across AEC, beverage CPG & healthcare",
    compact: false,
  },
  {
    lead: "15",
    sub: "full transformations at scale, led end-to-end",
    compact: false,
  },
  {
    lead: "$100M–$1B",
    sub: "operators, the scale I work at",
    compact: true,
  },
  {
    lead: "In production",
    sub: "agentics, running my own practice on it today",
    compact: true,
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
              idigdata embeds Robert Paddock, a 30-year business-system
              transformation operator, inside $100M-$1B businesses to deliver
              agentic-era change, install the operating asset, and exit by
              design.
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
                href="/approach/"
                className="inline-flex items-center justify-center rounded-full border border-navy/25 px-7 py-3.5 font-body text-[13px] font-semibold uppercase tracking-[0.18em] text-navy transition hover:border-navy"
              >
                See how I work
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-14 md:pb-20">
        <div className="rounded-[14px] bg-navy px-6 py-8 text-cream md:px-8 md:py-10">
          <dl className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-x-8 gap-y-8 lg:grid-cols-[repeat(5,minmax(0,1fr))]">
            {groundingStats.map((stat) => (
              <div
                key={stat.lead}
                className="min-w-0 overflow-hidden [overflow-wrap:break-word]"
              >
                <div className="mb-4 h-[3px] w-9 rounded-full bg-gold" />
                <dt
                  className={`font-vollkorn font-bold leading-[1.02] text-cream ${
                    stat.compact
                      ? "text-[22px] md:text-[24px] lg:text-[21px] xl:text-[23px]"
                      : "text-[31px] md:text-[36px] lg:text-[31px] xl:text-[35px]"
                  }`}
                >
                  {stat.lead}
                </dt>
                <dd className="mt-2 font-body text-[13px] leading-[1.35] text-[#DCD9CC]">
                  {stat.sub}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The broken market</SectionKicker>
        <div className="max-w-[860px]">
            <h2 className="font-vollkorn text-[32px] font-bold leading-[1.12] text-navy md:text-[42px]">
              The technology works. Delivery is where it dies.
            </h2>
            <p className="mt-5 font-body text-[16px] leading-[1.65] text-navy">
              Bain finds 88% of transformations fall short of their ambitions,
              and Stanford&apos;s Digital Economy Lab reaches the same verdict on
              the AI version: the bottleneck isn&apos;t the technology, it&apos;s
              ownership, delivery, adoption. Diagnosers explain the failure.
              Vendors implement their slice. AI builders rent you tools on
              their state. None of them owns the transformation as a business
              system. That&apos;s the work I take.
            </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The missing third</SectionKicker>
        <div className="max-w-[780px]">
          <h2 className="font-vollkorn text-[32px] font-bold leading-[1.14] text-navy md:text-[44px]">
            A senior operator who embeds, builds, transfers, and exits.
          </h2>
          <p className="mt-5 font-body text-[16px] leading-[1.65] text-navy">
            I work at the level of the business, not the vendor&apos;s slice. I
            pull the vendors, the internal teams, the executives, and the
            operating reality into one delivery frame. Agentics sharpens the
            operator model; it isn&apos;t the offer by itself.
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
              Data, systems, processes — with the workforce in the center.
            </h2>
            <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
              The asset is not a deck and not a rented platform. It is the
              operating system of the transformation: governed data, mapped
              workflows, visible decisions, and operators who can run the
              result.
            </p>
            <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
              When it works, the room gets calmer. Executives see the real
              state of the work. Decisions stop disappearing between meetings.
              And the business can explain, and keep improving, the system
              after I leave.
            </p>
          </div>
          <div className="flex justify-center">
            <SubstrateTriangle />
          </div>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Proof</SectionKicker>
        <div className="mb-9 max-w-[760px]">
          <h2 className="font-vollkorn text-[32px] font-bold leading-[1.14] text-navy md:text-[42px]">
            I run this model before I bring it to you.
          </h2>
        </div>
        <p className="max-w-[760px] font-body text-[15px] leading-[1.6] text-navy/80">
          I build it in a governed environment, the business owns the asset at
          the end, and I run my own practice on it today: built, owned, run.
        </p>
        <BossJourneyFigure />
        <p className="mt-8 max-w-[760px] border-t border-navy/15 pt-5 font-vollkorn text-[18px] italic leading-[1.45] text-navy">
          Built to be owned, not rented — an asset the business carries, not
          another line of expense.
        </p>
        <p className="mt-5 max-w-[760px] font-body text-[15px] font-semibold leading-[1.6] text-navy">
          I won&apos;t show you a slide. Bring a real situation and I&apos;ll walk you
          through a live one.
        </p>
        <Link
          href="/systems/"
          className="mt-6 inline-flex items-center justify-center rounded-full border border-navy/25 px-7 py-3.5 font-body text-[13px] font-semibold uppercase tracking-[0.18em] text-navy transition hover:border-navy"
        >
          See how I run the model <span aria-hidden="true" className="ml-2">→</span>
        </Link>
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
            No deck. No proposal theater. Bring the real situation — the
            systems, the stalled decision, the agentic ambition — and I&apos;ll
            walk you through exactly how I&apos;d own it.
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
