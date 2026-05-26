import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";

export const metadata: Metadata = {
  title: "Agentics - idigdata",
  description:
    "Agentic AI that reaches production inside real operations — governed, traceable, human-validated, and owned by the business.",
  alternates: { canonical: "/agentics/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/agentics/",
    title: "Agentics - idigdata",
    description:
      "Agentic AI that reaches production inside real operations — governed, traceable, human-validated, and owned by the business.",
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

const questions = [
  {
    label: "Hold",
    ask: "Can the business safely hold them?",
    body: "Governed data, a shared version of reality, clear ownership of what an agent is allowed to touch. Most \"AI readiness\" fails here — quietly, long before the model does.",
  },
  {
    label: "Absorb",
    ask: "Can the business actually absorb them?",
    body: "People who know how to delegate, verify, and own the output. Workflows redesigned around the work. A human on every consequential call. Capability the organization can't validate will not survive contact with the work.",
  },
];

const systemProof = [
  {
    name: "DigOps",
    label: "I run my own practice on it.",
    image: "/brand/digops/digops-logo-panel.svg",
    alt: "DigOps — Buy Make Sell",
    body: "I run my own practice on agent-assisted workflows with a human on every consequential call.",
  },
  {
    name: "The Rig",
    label: "Observable, tested, traceable.",
    image: "/brand/rig/logo-lockup-tagline-panel.svg",
    alt: "The Rig — the human-in-the-loop layer",
    body: "The build environment keeps agentic work observable, tested, and traceable — so what happened, and who approved it, is always answerable.",
  },
  {
    name: "BOSS",
    label: "Owned by the business.",
    image: "/brand/boss/boss-lockup-panel.svg",
    alt: "BOSS — the business process harness",
    body: "The client-facing delivery asset makes agentics part of the transformation system the business owns — defensible after I leave, not dependent on me staying.",
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
          <h1 className="hidden max-w-full text-wrap break-words font-vollkorn text-[40px] font-bold leading-[1.12] text-navy min-[480px]:block sm:text-[52px] md:text-[68px]">
            The agents are ready. The question is whether your business can hold them — and actually absorb them.
          </h1>
          <p className="mt-7 max-w-full text-wrap break-words font-vollkorn text-[20px] italic leading-[1.42] text-warm-gray sm:max-w-[720px] md:text-[26px]">
            Capability is already outrunning most companies&apos; ability to land
            it. Most leadership teams want agents in production; very few have
            gotten there — and the wall is data, governance, and ownership, not
            the model. I&apos;m the operator who gets them across that line.
          </p>
          <p className="mt-6 max-w-[760px] border-t border-navy/15 pt-6 font-body text-[16px] leading-[1.65] text-navy">
            The upside is real. So is the failure mode: an agent acting on
            ungoverned data, with no human on the call and no record of who
            approved what. I build the other kind — agentic work that reaches
            production and holds up afterward, because it was defensible by
            design.
          </p>
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
            </span>{" "}
            — decisions the business can stand behind, trace, and defend. Skip
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
            operator who owns the whole arc and pushes it to done — who has
            shipped production agentic systems. Getting business-system
            transformations across the finish line is the part I take. I
            started running projects at eighteen, on construction sites; that
            finishing discipline is older than the technology, and it&apos;s what
            agentic work is actually missing.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <div className="border-l-[4px] border-l-gold bg-navy px-7 py-9 text-cream md:px-10 md:py-12">
          <SectionKicker className="mb-5 [&_span:first-child]:bg-gold [&_span:last-child]:text-gold">
            Where I start
          </SectionKicker>
          <h2 className="max-w-[760px] font-vollkorn text-[32px] font-bold leading-[1.15] text-cream md:text-[44px]">
            My first two calls are to the CFO and the Compliance Officer.
          </h2>
          <p className="mt-6 max-w-[780px] font-body text-[15.5px] leading-[1.68] text-[#DCD9CC]">
            Not the innovation team — the people who carry the consequences. A
            vendor can demo capability; they can&apos;t tell you whether it
            survives an audit, a regulator, or discovery. That answer comes
            from having sat with those roles through a real transformation —
            the financial close, the revenue definitions, the controls
            underneath. Get those two in the room first and agentics stops being
            a science project and becomes something the business can actually
            run. This is sharpest in finance, where a wrong number isn&apos;t a
            bug — it&apos;s a finding.
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
            I have — agents in production against real business workflows, with
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
            Three systems, one claim: this is operating practice, not AI theater.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {systemProof.map((system) => (
            <article
              key={system.name}
              className="flex min-h-[330px] flex-col border border-navy/15 bg-navy p-6 text-cream"
            >
              <p className="font-body text-[10.5px] font-semibold uppercase tracking-[0.22em] text-gold">
                {system.name}
              </p>
              <div className="my-5 flex h-24 items-center justify-center bg-cream/95 px-4">
                <Image
                  src={system.image}
                  alt={system.alt}
                  width={620}
                  height={220}
                  className="h-20 w-auto"
                />
              </div>
              <h3 className="font-vollkorn text-[24px] font-bold leading-tight text-cream">
                {system.label}
              </h3>
              <p className="mt-3 font-body text-[14.5px] leading-[1.6] text-[#DCD9CC]">
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
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-8 py-4 font-body text-[13px] font-semibold uppercase tracking-[0.18em] text-navy transition hover:bg-[#FFD740]"
          >
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
