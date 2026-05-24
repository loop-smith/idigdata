import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";

export const metadata: Metadata = {
  title: "Agentics — idigdata",
  description:
    "Applied agentics for operators: delivery-first, production-tested, business-owned, and governed by the transformation system it must land inside.",
  alternates: { canonical: "/agentics/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/agentics/",
    title: "Agentics — idigdata",
    description:
      "Applied agentics for operators: delivery-first, production-tested, business-owned, and governed by the transformation system it must land inside.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Agentics",
      },
    ],
  },
};

const camps = [
  {
    title: "Diagnosers",
    body: "They name the failure, complain about vendors, and leave the operating business to land the change.",
  },
  {
    title: "Builders",
    body: "They build real AI-native systems for themselves, productized and usually held on their state.",
  },
  {
    title: "Operators",
    body: "They embed inside the business, make the technology survive contact with operations, and transfer the asset.",
  },
];

const systemProof = [
  {
    name: "DigOps",
    label: "Rob lives it",
    image: "/brand/digops/digops-logo-panel.svg",
    alt: "DigOps — Buy Make Sell",
    body: "Agent-assisted workflows run the practice: CRM, proposal flow, billing, books, and human validation on the decisions.",
  },
  {
    name: "The Rig",
    label: "Rob builds with it",
    image: "/brand/rig/logo-lockup-tagline-panel.svg",
    alt: "The Rig — the human-in-the-loop layer",
    body: "The work is observable: plans, tests, histories, acceptance gates, and agent output that can be reviewed.",
  },
  {
    name: "BOSS",
    label: "The client owns it",
    image: "/brand/boss/boss-lockup-panel.svg",
    alt: "BOSS — the business process harness",
    body: "The business process harness makes agentics part of the transformation delivery system, not a sidecar demo.",
  },
];

export default function AgenticsPage() {
  return (
    <div className="mx-auto max-w-content bg-cream px-6 font-body text-navy">
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-24">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-7">Applied agentics</SectionKicker>
        <div className="max-w-[880px]">
          <h1 className="font-vollkorn text-[46px] font-bold leading-[1] tracking-[-0.01em] text-navy sm:text-[58px] md:text-[72px]">
            Agentics is not an implementation problem. It is a delivery problem.
          </h1>
          <p className="mt-7 max-w-[720px] font-vollkorn text-[22px] italic leading-[1.38] text-warm-gray md:text-[26px]">
            The models are moving fast. The operating business is not.
            idigdata brings the operator discipline that turns agentic
            capability into delivered, validated work.
          </p>
          <p className="mt-6 max-w-[760px] border-t border-navy/15 pt-6 font-body text-[16px] leading-[1.65] text-navy">
            Data matters. But the sharper failure is delivery: no sponsor
            clearing obstacles, no process redesign, no validation cycle, no
            owner above the vendors. AI bolted onto a broken process produces
            faster broken outputs.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The honest read</SectionKicker>
        <div className="grid grid-cols-1 gap-9 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
              Diagnosers explain. Builders demo. Operators deliver.
            </h2>
            <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
              Rob is the missing third: a transformation operator who has
              shipped production agentic systems and can transfer the operating
              asset to the client.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {camps.map((camp) => (
              <article key={camp.title} className="border border-navy/15 bg-white p-5">
                <h3 className="font-vollkorn text-[22px] font-bold leading-tight text-navy">
                  {camp.title}
                </h3>
                <p className="mt-3 font-body text-[14px] leading-[1.55] text-navy/75">
                  {camp.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The wave</SectionKicker>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_0.75fr]">
          <div>
            <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
              The gap is not whether agentics works. It is whether your
              business can absorb it.
            </h2>
            <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
              Stanford's enterprise AI work points to the same conclusion:
              successful organizations get executive sponsorship, obstacle
              clearing, workflow redesign, and human validation around the
              technology. The productivity upside is real; the delivery gap is
              the bottleneck.
            </p>
          </div>
          <aside className="border border-navy/15 border-l-[3px] border-l-gold bg-white p-6">
            <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
              Dot-chart argument
            </p>
            <p className="mt-4 font-vollkorn text-[22px] italic leading-[1.35] text-navy">
              The chart is not a model leaderboard. It is the warning that
              capability is outrunning most companies' ability to land it.
            </p>
          </aside>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The production test</SectionKicker>
        <div className="max-w-[780px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            The valuable person is the one who has tested it against real work.
          </h2>
          <p className="mt-5 font-body text-[16px] leading-[1.65] text-navy">
            Rob has. Five production agentic systems, daily operational use,
            and a business he now runs on an agentic substrate. The point is
            not fluency with prompts; it is knowing what agents do and do not
            do once finance, supply chain, operations, governance, and people
            enter the room.
          </p>
          <p className="mt-6 border-l-[3px] border-l-gold pl-5 font-vollkorn text-[21px] italic leading-[1.4] text-navy">
            Agentics amplifies the operator model. It does not replace it.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Proof stack</SectionKicker>
        <div className="mb-9 max-w-[760px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            Three systems, one claim: operating practice, not AI theater.
          </h2>
          <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
            The proof is not that Rob knows the tools. The proof is that he has
            tested the tools against real operating work, built the discipline
            around them, and packaged the delivery asset for handoff.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {systemProof.map((system) => (
            <article key={system.name} className="border border-navy/15 bg-white p-6">
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
                {system.name}
              </h3>
              <p className="mt-3 font-body text-[14.5px] leading-[1.6] text-navy/75">
                {system.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <div className="mx-auto max-w-[680px] border-l-[4px] border-l-gold bg-navy px-8 py-10 text-cream md:px-10 md:py-12">
          <p className="font-body text-[10.5px] font-semibold uppercase tracking-[0.24em] text-gold">
            Delivery first
          </p>
          <h2 className="mt-5 font-vollkorn text-[31px] font-bold leading-[1.18] text-cream md:text-[42px]">
            Bring the agentic question back to the business system.
          </h2>
          <p className="mt-5 font-vollkorn text-[17px] italic leading-[1.55] text-[#DCD9CC]">
            If your pilots are stuck, your vendor roadmap is moving faster than
            your operators, or your board wants AI leverage without creating
            another dependency, start with the delivery frame.
          </p>
          <Link
            href="/contact/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-[13px] font-semibold uppercase tracking-[0.18em] text-navy transition hover:bg-[#FFD740]"
          >
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
          <p className="mt-7 border-t border-cream/15 pt-5 font-body text-[13px] italic leading-[1.5] text-[#DCD9CC]">
            For the full transformation model, see{" "}
            <Link
              href="/"
              className="text-gold underline decoration-gold/50 underline-offset-4 hover:decoration-gold"
            >
              the home page
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  );
}
