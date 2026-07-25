import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";

export const metadata: Metadata = {
  title: "Agentic AI",
  description:
    "Agentic AI that reaches production inside real operations — governed, traceable, human-validated, and owned by the business.",
  alternates: { canonical: "/agentics/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/agentics/",
    title: "Agentic AI | idigdata",
    description:
      "Agentic AI that reaches production inside real operations — governed, traceable, human-validated, and owned by the business.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Agentic AI",
      },
    ],
  },
};

const questions = [
  {
    label: "Hold",
    ask: "Can the business safely hold them?",
    body: "Governed data, a shared version of reality, clear ownership of what an agent is allowed to touch. Most AI readiness fails here, quietly, long before the model does.",
  },
  {
    label: "Absorb",
    ask: "Can the business actually absorb them?",
    body: "People who know how to delegate, verify, and own the output. Workflows redesigned around the work. A human on every consequential call. Capability the organization can't validate will not survive contact with the work.",
  },
];

export default function AgenticsPage() {
  return (
    <div className="mx-auto max-w-content bg-cream px-6 font-body text-navy">
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-24">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-7">Agentic AI, in production</SectionKicker>
        <div className="max-w-[880px]">
          <h1 className="max-w-full text-wrap break-words font-vollkorn text-[40px] font-bold leading-[1.12] text-navy min-[480px]:hidden">
            The agents are ready. Can your business hold them?
          </h1>
          <p className="hidden max-w-full text-wrap break-words font-vollkorn text-[40px] font-bold leading-[1.12] text-navy min-[480px]:block sm:text-[52px] md:text-[68px]">
            The agents are ready. The question is whether your business can hold them, and actually absorb them.
          </p>
          <p className="mt-7 max-w-full text-wrap break-words font-vollkorn text-[20px] italic leading-[1.42] text-warm-gray sm:max-w-[720px] md:text-[26px]">
            Capability is already outrunning most companies&apos; ability to land
            it. Most leadership teams want agents in production; very few have
            gotten there. The wall is data, governance, and ownership, not the
            model.
          </p>
          <div className="mt-6 max-w-[760px] border-t border-navy/15 pt-6 text-[16px] leading-[1.65] text-navy">
            <p>
              Enterprise buyers don&apos;t buy capability. They buy risk
              reduction. AI amplifies operational maturity; it doesn&apos;t replace
              it. You can&apos;t automate dysfunction.
            </p>
            <p className="mt-4">
              The upside is real. So is the failure mode: an agent acting on
              ungoverned data, with no human on the call and no record of who
              approved what. I build the other kind, agentic work that reaches
              production and holds up afterward because it was defensible by
              design.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Two questions</SectionKicker>
        <div className="max-w-[840px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            Before you put agents in the business, two questions decide everything.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {questions.map((question) => (
              <article
                key={question.label}
                className="border border-navy/15 border-l-[4px] border-l-gold bg-white p-6"
              >
                <p className="font-body text-[10.5px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
                  {question.label}
                </p>
                <h3 className="mt-3 font-vollkorn text-[25px] font-bold leading-[1.2] text-navy">
                  {question.ask}
                </h3>
                <p className="mt-4 font-body text-[15px] leading-[1.62] text-navy/80">
                  {question.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-[760px] font-vollkorn text-[20px] italic leading-[1.45] text-navy">
            Answer both and agentic capability becomes{" "}
            <span className="bg-gold/80 px-1 font-bold not-italic">
              decision integrity
            </span>
            : decisions the business can stand behind, trace, and defend. Skip
            them and you&apos;ve automated the disagreement at scale.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The honest read</SectionKicker>
        <div className="max-w-[780px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            Diagnosers explain. Builders demo. Operators finish.
          </h2>
          <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
            Plenty of people can name why these programs fail, and plenty can
            build an agent for themselves. The part that goes missing is the
            operator who owns the whole arc and pushes it to done, who has
            shipped production agentic systems. Getting business-system
            transformations across the finish line is the part I take — same
            ownership layer as the systems work: people, data, workflows — not
            a separate AI product line. I started running projects at eighteen,
            on construction sites; that finishing discipline is older than the
            technology, and it&apos;s what agentic work is actually missing.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The production test</SectionKicker>
        <div className="max-w-[780px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            What counts is testing it against the real work.
          </h2>
          <p className="mt-5 font-body text-[16px] leading-[1.65] text-navy">
            I have: agents in production against real business workflows, with
            human validation, and a practice I now run on an agentic substrate.
            The point is not fluency with prompts; it&apos;s knowing what agents
            do and do not do once finance, supply chain, operations,
            governance, and people are in the room. I&apos;d rather show you a live
            system than a slide.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Proof stack</SectionKicker>
        <div className="mb-9 max-w-[760px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            I run the model before I bring it to you.
          </h2>
        </div>
        <p className="max-w-[760px] font-body text-[15.5px] leading-[1.65] text-navy">
          I run the model before I bring it to you: a governed build
          environment, a business-owned transformation asset, and an operations
          layer with a human on every consequential call. The branded systems
          and proof live on the Systems page.
        </p>
        <Link
          href="/systems/"
          className="mt-6 inline-flex font-body text-[13px] font-semibold uppercase tracking-[0.16em] text-navy underline decoration-navy/35 underline-offset-4 hover:decoration-navy"
        >
          See the systems I run on <span aria-hidden="true" className="ml-2">→</span>
        </Link>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <div className="mx-auto max-w-[680px] border-l-[4px] border-l-gold bg-navy px-8 py-10 text-cream md:px-10 md:py-12">
          <p className="font-body text-[10.5px] font-semibold uppercase tracking-[0.24em] text-gold">
            Delivery first
          </p>
          <h2 className="mt-5 font-vollkorn text-[31px] font-bold leading-[1.18] text-cream md:text-[42px]">
            Bring the agentic question back to the business.
          </h2>
          <p className="mt-5 font-vollkorn text-[17px] italic leading-[1.55] text-[#DCD9CC]">
            If your pilots are stuck, your vendor roadmap is outrunning your
            operators, or your board wants AI leverage without creating another
            dependency, start with the operator who gets it to production and
            leaves it defensible.
          </p>
          <Link
            href="/contact/"
            className="mt-8 inline-flex items-center gap-2 rounded-[3px] bg-gold px-8 py-4 font-body text-[13px] font-semibold uppercase tracking-[0.18em] text-navy transition hover:bg-[#FFD740]"
          >
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
