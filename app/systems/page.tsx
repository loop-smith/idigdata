import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";

export const metadata: Metadata = {
  title: "Systems in Production - idigdata",
  description:
    "The systems behind the work: Rig, BOSS, and FlowCraft form a free, client-owned delivery architecture with trained human and agentic operators built into the handoff.",
  alternates: { canonical: "/systems/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/systems/",
    title: "Systems in Production - idigdata",
    description:
      "The systems behind the work: Rig, BOSS, and FlowCraft form a free, client-owned delivery architecture with trained human and agentic operators built into the handoff.",
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
    body: "The governed estate where the work is built. Rig carries build plans, source checks, write discipline, evidence, gates, tests, agent routing, and CI/CD so delivery is repeatable instead of heroic.",
    note: "Rig is its own thing: the forge, monitor, organizer, and operating discipline that makes the other systems real.",
  },
  {
    eyebrow: "Owned",
    title: "BOSS = the business process harness",
    logo: "/brand/systems/boss-banner-logo.png",
    logoWidth: 212,
    logoHeight: 66,
    tagline: "The Business Workflow Digital Twin",
    alt: "BOSS logo",
    accent: "#e8762d",
    body: "The tier-2 fabric above ERP, CRM, HRIS, data, and specialty systems. BOSS maps processes, owners, systems, controls, decisions, delivery state, SOP memory, and green/green validation.",
    note: "A client BOSS instance is delivered as a company-owned asset, not sold by the seat.",
  },
  {
    eyebrow: "Run",
    title: "FlowCraft = the instance and workflow runtime",
    logo: "/brand/systems/flowcraft-banner-logo.png",
    logoWidth: 176,
    logoHeight: 126,
    tagline: "Build the flow. Run the work.",
    alt: "FlowCraft logo",
    accent: "#3ce624",
    body: "The org and instance framework that turns owned operating models into runnable human and agentic workflows. One firm, one instance, built around how that firm actually works.",
    note: "DigOps is the first live FlowCraft instance: idigdata's own operating system at practice scale.",
  },
];

const constructionModel = [
  {
    title: "One grammar",
    body: "The systems share a construction grammar. Reusable workflow blocks, loadable business content, governed build plans, and conformance checks keep client work from turning into one-off software folklore.",
  },
  {
    title: "One owner",
    body: "The business owns the asset. Vendors, agents, operators, and specialists can all work on it, but the model, decisions, records, and operating knowledge do not disappear into someone else's platform.",
  },
  {
    title: "One handoff",
    body: "The delivery includes the people and agents who will run the system: trained roles, support routines, maintenance paths, deployment discipline, and an evidence trail that survives the engagement.",
  },
];

const handoffStack = [
  "your operators trained through the build",
  "human-owned agent workflows with a person on consequential calls",
  "support and maintenance routines attached to the system",
  "CI/CD and release discipline for future change",
  "decision, validation, and evidence records the business can inspect",
  "source and configuration that can be transferred, reviewed, and extended",
];

export default function SystemsPage() {
  return (
    <div className="mx-auto max-w-content bg-cream px-6 font-body text-navy">
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-24">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-7">The systems behind the work</SectionKicker>
        <div className="max-w-[880px]">
          <h1 className="max-w-full text-wrap break-words font-vollkorn text-[42px] font-bold leading-[1.08] text-navy sm:text-[54px] md:text-[70px]">
            Three systems. One client-owned operating capability.
          </h1>
          <p className="mt-7 max-w-[760px] text-wrap break-words font-vollkorn text-[20px] italic leading-[1.42] text-warm-gray md:text-[26px]">
            Rig, BOSS, and FlowCraft are not subscription products I use to
            trap a client. They are the delivery architecture I built so a
            company can own the system it runs on.
          </p>
          <p className="mt-6 max-w-[760px] border-t border-navy/15 pt-6 font-body text-[16px] leading-[1.65] text-navy">
            I run the model before I bring it to anyone else. DigOps, the
            operating system for idigdata, is now the first live FlowCraft
            instance. BOSS is becoming the business process harness for client
            transformations. Rig is the governed build estate that makes both
            of them real.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">What changed</SectionKicker>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
              This is no longer stale proof copy. The systems have become the
              delivery model.
            </h2>
          </div>
          <div>
            <p className="font-body text-[15.5px] leading-[1.65] text-navy">
              The original site language treated the systems like supporting
              evidence: three things I run behind the scenes. The build has
              moved past that. Rig, BOSS, and FlowCraft now define how the work
              is designed, built, transferred, supported, maintained, and
              improved.
            </p>
            <p className="mt-5 border-l-[4px] border-l-gold bg-white px-5 py-4 font-vollkorn text-[22px] font-bold leading-[1.25] text-navy">
              The software is free. My time is not.
            </p>
            <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
              Rig is its own thing. BOSS and FlowCraft client instances are not
              charged like SaaS licenses. They are part of the delivered asset.
              The paid work is the operator-led design, build, training,
              transfer, support path, maintenance path, and CI/CD capability
              that lets the business own what was built.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The industry break</SectionKicker>
        <div className="max-w-[840px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            Agentics should make companies more sovereign, not more dependent.
          </h2>
          <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
            Most of the software market is still trying to convert capability
            into control: host the code, meter the seats, own the state, and
            keep the customer attached. That is the wrong lesson from
            agentics. The power is in building a company&apos;s ability to run and
            improve its own work with trained people and trained agents around
            a system it owns.
          </p>
          <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
            That is the scarce role: an operator who can inspect the
            technology, own the business system around it, carry the work
            through finance, compliance, vendors, workflows, and people, then
            leave behind a living operating capability.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Operating proof</SectionKicker>
        <div className="mb-9 max-w-[860px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            Three systems, each with a job. Together they build, own, and run
            the transformation.
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
        <SectionKicker className="mb-5">The construction model</SectionKicker>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {constructionModel.map((item) => (
            <article key={item.title} className="border-t-[4px] border-t-gold bg-white px-6 py-6">
              <h3 className="font-vollkorn text-[24px] font-bold leading-[1.18] text-navy">
                {item.title}
              </h3>
              <p className="mt-4 font-body text-[14.5px] leading-[1.62] text-navy/75">
                {item.body}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The commercial inversion</SectionKicker>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
              I am not selling access to software. I am building ownership.
            </h2>
          </div>
          <div className="space-y-5 font-body text-[15.5px] leading-[1.65] text-navy">
            <p>
              In the old model, software companies rent the system and services
              firms rent the people. In this model, the business keeps the
              asset. BOSS and FlowCraft instances are delivered with the work,
              and the source, configuration, workflow logic, and operating
              knowledge are meant to be inspectable and transferable.
            </p>
            <p>
              What you pay for is the hard part: the senior operator work that
              designs the target, builds the system, trains the operators,
              installs the agents, creates the support and maintenance loop,
              and proves the business can keep improving it.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The delivered staff</SectionKicker>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
              The handoff is a trained crew, not a folder of documentation.
            </h2>
            <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
              The new operating model includes human staff and actual agents.
              It includes who owns decisions, who verifies outputs, where
              support goes, how change ships, and how the system keeps telling
              the truth after the project room closes.
            </p>
          </div>
          <ul className="grid grid-cols-1 gap-3 font-body text-[14.5px] leading-[1.45] text-navy md:grid-cols-2">
            {handoffStack.map((item) => (
              <li key={item} className="border-l-[4px] border-l-gold bg-white px-5 py-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">What you own</SectionKicker>
        <div className="max-w-[860px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            The asset is the company&apos;s ability to change.
          </h2>
          <div className="mt-6 max-w-[800px] space-y-5 font-body text-[15.5px] leading-[1.65] text-navy">
            <p>
              At the end you hold the operating system of the transformation:
              mapped workflows, governed data, validation trails, SOP memory,
              decision records, the BOSS and FlowCraft instances, and the
              trained human-and-agent staff around your work.
            </p>
            <p>
              Your people run it and extend it. Any qualified vendor or
              internal technologist can inspect it, support it, or build on it
              because the point was never software control. The point is the
              people who run the work owning the asset they run.
            </p>
          </div>
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
              Bring the real situation, and I&apos;ll walk you through the systems
              I would use to build it, train it, transfer it, and keep it alive.
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
