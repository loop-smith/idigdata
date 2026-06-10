import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";

export const metadata: Metadata = {
  title: "Systems in Production - idigdata",
  description:
    "The systems behind the work: the governed build environment, the client-owned operating asset, and the FlowCraft domain that turns owned models into runnable work.",
  alternates: { canonical: "/systems/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/systems/",
    title: "Systems in Production - idigdata",
    description:
      "The systems behind the work: the governed build environment, the client-owned operating asset, and the FlowCraft domain that turns owned models into runnable work.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata - Systems in Production",
      },
    ],
  },
};

const operatingProof = [
  {
    eyebrow: "Built",
    title: "The rig = the machine that builds machines",
    logo: "/brand/systems/rig-banner-logo.png",
    logoWidth: 148,
    logoHeight: 115,
    tagline: "Orchestrate · Monitor · Invent",
    alt: "The Rig logo",
    accent: "#0ea5b7",
    body: "The governed build environment behind the work. It turns ideas into traceable assets with plans, gates, tests, decision records, and agentic loops so delivery is repeatable instead of heroic.",
    note: "Rig owns binary current: the forge, monitor, organizer, and harness creator.",
  },
  {
    eyebrow: "Owned",
    title: "BOSS = the workflow digital twin",
    logo: "/brand/systems/boss-banner-logo.png",
    logoWidth: 212,
    logoHeight: 66,
    tagline: "The Business Workflow Digital Twin",
    alt: "BOSS logo",
    accent: "#e8762d",
    body: "The organizer of how the company actually works. BOSS maps processes, owners, systems, data, controls, and decisions so the business keeps the operating model after the build.",
    note: "BOSS owns the six constellations: the structure that turns workflow reality into a governed twin.",
  },
  {
    eyebrow: "Run",
    title: "FlowCraft = how the work runs",
    logo: "/brand/systems/flowcraft-banner-logo.png",
    logoWidth: 176,
    logoHeight: 126,
    tagline: "Build the flow. Run the work.",
    alt: "FlowCraft logo",
    accent: "#3ce624",
    body: "The workflow-block craft layer for the business. FlowCraft turns the owned model into runnable human and agentic workflows across the operating ecosystem.",
    note: "FlowCraft owns the WFB block: composable business workflows made tangible.",
  },
];

export default function SystemsPage() {
  return (
    <div className="mx-auto max-w-content bg-cream px-6 font-body text-navy">
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-24">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-7">The systems behind the work</SectionKicker>
        <div className="max-w-[880px]">
          <h1 className="max-w-full text-wrap break-words font-vollkorn text-[42px] font-bold leading-[1.08] text-navy sm:text-[54px] md:text-[70px]">
            I don&apos;t pitch the operator model. I run it.
          </h1>
          <p className="mt-7 max-w-[760px] text-wrap break-words font-vollkorn text-[20px] italic leading-[1.42] text-warm-gray md:text-[26px]">
            Before I bring this to your business, I run it in mine. These are
            the systems that prove the model holds in production, not on a
            slide.
          </p>
          <p className="mt-6 max-w-[760px] border-t border-navy/15 pt-6 font-body text-[16px] leading-[1.65] text-navy">
            Thirty years of landing business-system transformations taught me
            one thing: the work dies in delivery, not design. So I built the
            systems that make delivery hold, and I run my own practice on them.
            You can watch them work.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The need that never went away</SectionKicker>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
              Transformation through business systems is still the hardest thing
              a company does.
            </h2>
          </div>
          <div>
            <p className="font-body text-[15.5px] leading-[1.65] text-navy">
              High stakes, complex requirements, multiple teams and vendors to
              shepherd toward a finish line that keeps moving. It&apos;s why
              I&apos;ve been hired for thirty years, and why the work has never
              dried up.
            </p>
            <p className="mt-5 border-l-[4px] border-l-gold bg-white px-5 py-4 font-vollkorn text-[22px] font-bold leading-[1.25] text-navy">
              50+ implementations · 15+ transformations at scale, led
              end-to-end.
            </p>
            <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
              The systems below are not a theory of how to do this. They are
              what thirty years of doing it turned into.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The scarce role</SectionKicker>
        <div className="max-w-[840px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            Most can build a demo. Most can explain adoption. Few can carry the
            whole arc.
          </h2>
          <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
            The market is full of people who can stand up an agent, and people
            who can talk about change management. The scarce role is the
            operator who can inspect the technology, own the business system
            around it, and carry the result through finance, compliance,
            vendors, workflows, and the people until it holds.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Operating proof</SectionKicker>
        <div className="mb-9 max-w-[860px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            Three systems, all running. The proof isn&apos;t a slide; it&apos;s the
            model in production.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">
          {operatingProof.map((system) => (
            <article
              key={system.title}
              className="flex h-full flex-col border border-navy/15 border-l-[4px] bg-white p-6"
              style={{ borderLeftColor: system.accent }}
            >
              <div className="mb-6 grid h-[218px] place-items-center overflow-hidden rounded-md bg-cream px-5 py-5">
                <div className="grid h-[174px] w-full max-w-[390px] grid-rows-[128px_1px_33px] items-center justify-items-center gap-y-[6px] text-center">
                  <div className="grid h-[128px] w-full place-items-center">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={system.logo}
                      alt={system.alt}
                      className="block object-contain"
                      style={{
                        width: `${system.logoWidth}px`,
                        height: `${system.logoHeight}px`,
                      }}
                    />
                  </div>
                  <div className="h-px w-[62%] bg-navy/25" />
                  <p className="w-full whitespace-nowrap font-vollkorn text-[13px] italic leading-[1.15] text-[#5F554B]">
                    {system.tagline}
                  </p>
                </div>
              </div>
              <p
                className="font-body text-[10.5px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: system.accent }}
              >
                {system.eyebrow}
              </p>
              <h3 className="mt-3 min-h-[68px] font-vollkorn text-[24px] font-bold leading-[1.18] text-navy">
                {system.title}
              </h3>
              <p className="mt-4 font-body text-[14.5px] leading-[1.62] text-navy/75">
                {system.body}
              </p>
              <p className="mt-6 border-t border-navy/10 pt-4 font-body text-[13px] leading-[1.45] text-navy/60">
                {system.note}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">What you own</SectionKicker>
        <div className="max-w-[840px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            What I leave you is an asset you own, not a service you rent.
          </h2>
          <div className="mt-6 max-w-[780px] space-y-5 font-body text-[15.5px] leading-[1.65] text-navy">
            <p>
              At the end you hold the operating system of your transformation:
              the mapped workflows, the governed data, the validated SOPs, the
              decision record, documented to your standards so your own team, or
              any vendor you choose, can run and extend it.
            </p>
            <p>
              Your people run it and extend it, so it keeps getting better after
              I leave. None of this was ever really about the software. The
              point is the people who run the work.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Continuity</SectionKicker>
        <div className="max-w-[820px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            One operator, and the work does not live in my head.
          </h2>
          <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
            The systems are the answer. The work is observable as it runs. The
            asset is owned by the business. Your people are developed through
            the build. And senior independents come in for scoped packages when
            the work calls for it. If I step away, the system and the people
            remain.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-16 md:py-24">
        <div className="mx-auto max-w-[700px] border-l-[4px] border-l-gold bg-navy px-8 py-10 text-cream md:px-10 md:py-12">
          <p className="font-body text-[10.5px] font-semibold uppercase tracking-[0.24em] text-gold">
            If the mandate is real
          </p>
          <h2 className="mt-5 font-vollkorn text-[31px] font-bold leading-[1.18] text-cream md:text-[42px]">
            I take on a small number of embedded mandates.
          </h2>
          <div className="mt-5 space-y-5 font-vollkorn text-[17px] italic leading-[1.55] text-[#DCD9CC]">
            <p>
              Your pilots are outrunning your governance. Your vendors are
              moving. Your board is asking about AI. If that&apos;s the room
              you&apos;re in, and the business is serious about owning the result,
              I can move the work.
            </p>
            <p>
              Bring the real situation, and I&apos;ll walk you through exactly how
              I&apos;d own it, live.
            </p>
          </div>
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
