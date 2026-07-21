import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";

export const metadata: Metadata = {
  title: "Systems in Production",
  description:
    "The systems behind the work: Rig, BOSS, and FlowCraft turn transformation into governed, inspectable, client-owned operating capability.",
  alternates: { canonical: "/systems/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/systems/",
    title: "Systems in Production | idigdata",
    description:
      "The systems behind the work: Rig, BOSS, and FlowCraft turn transformation into governed, inspectable, client-owned operating capability.",
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
    title: "Rig = the operator-owned work fabric",
    logo: "/brand/systems/rig-banner-logo.png",
    logoWidth: 148,
    logoHeight: 115,
    tagline: "Specify · Route · Prove",
    alt: "The Rig logo",
    accent: "#0ea5b7",
    body: "The control substrate I use to turn ambiguous work into governed, inspectable progress. Rig holds plans, gates, source, evidence, agent instructions, handoffs, receipts, and versioned decisions.",
    note: "The point is portability: files hold the working memory, git carries integrity, and markdown keeps the handoff inspectable instead of trapped in chat or vendor state.",
  },
  {
    eyebrow: "Owned",
    title: "BOSS = the business operating graph",
    logo: "/brand/systems/boss-banner-logo.png",
    logoWidth: 212,
    logoHeight: 66,
    tagline: "The Business Workflow Digital Twin",
    alt: "BOSS logo",
    accent: "#e8762d",
    body: "The client-owned map of how the business actually runs. BOSS models processes, owners, systems, controls, decisions, handoffs, delivery state, SOP memory, and green/green validation above the vendor stack.",
    note: "A client BOSS instance makes the operating model explicit enough for people, vendors, and agents to work against the same truth.",
  },
  {
    eyebrow: "Run",
    title: "FlowCraft = the human-and-agent runtime",
    logo: "/brand/systems/flowcraft-banner-logo.png",
    logoWidth: 176,
    logoHeight: 126,
    tagline: "Build the flow. Run the work.",
    alt: "FlowCraft logo",
    accent: "#3ce624",
    body: "The isolated firm runtime that turns the BOSS graph into live workflows. FlowCraft gives a specific firm controlled human-and-agent execution, evidence trails, and support routines around how the work really moves.",
    note: "DigOps is the first live FlowCraft instance: idigdata's own operating system proving the pattern at practice scale.",
  },
];

const constructionModel = [
  {
    title: "One work fabric",
    body: "Work lives as inspectable files, records, gates, and proof instead of side-channel chat. Human and agent contributions can be routed, checked, remembered, and improved.",
  },
  {
    title: "One business map",
    body: "BOSS names the processes, owners, controls, decisions, systems, exceptions, and validation states that make the operating model legible above the vendor stack.",
  },
  {
    title: "One live runtime",
    body: "FlowCraft turns the owned map into an isolated firm instance with trained client roles, controlled agents, support routines, release discipline, and evidence that survives the engagement.",
  },
];

const demandSignals = [
  "AI pilots are outrunning governance.",
  "An ERP or systems program is stalled between vendors and operators.",
  "The board wants leverage without another dependency.",
  "The CFO and Compliance Officer need a defensible operating trail.",
  "The business needs a real handoff instead of a managed-services tail.",
];

const handoffStack = [
  "client operators trained through the build",
  "controlled agent workflows with a person on consequential calls",
  "support and maintenance routines attached to the operating model",
  "CI/CD and release discipline for future change",
  "decision, validation, and evidence records the business can inspect",
  "source and configuration available for transfer, review, and extension under the engagement",
];

export default function SystemsPage() {
  return (
    <div className="mx-auto max-w-content bg-cream px-6 font-body text-navy">
      <section className="relative pt-10 pb-20 md:pt-16 md:pb-24">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-7">The systems behind the work</SectionKicker>
        <div className="max-w-[880px]">
          <h1 className="max-w-full text-wrap break-words font-vollkorn text-[42px] font-bold leading-[1.08] text-navy sm:text-[54px] md:text-[70px]">
            Three systems. One way to build, own, and run change.
          </h1>
          <p className="mt-7 max-w-[760px] text-wrap break-words font-vollkorn text-[20px] italic leading-[1.42] text-warm-gray md:text-[26px]">
            Rig, BOSS, and FlowCraft are not a SaaS trap or an advisory deck.
            They are the working architecture I use to turn transformation into
            governed, inspectable, client-owned operating capability.
          </p>
          <p className="mt-6 max-w-[760px] border-t border-navy/15 pt-6 font-body text-[16px] leading-[1.65] text-navy">
            I run the model before I bring it to anyone else. Rig is the
            operator-owned work fabric where the build is specified, routed, and
            proven. BOSS is the business operating graph clients own. FlowCraft
            is the runtime that turns the graph into live human-and-agent work.
            DigOps is the first live FlowCraft instance, running idigdata at
            practice scale.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The delivery architecture</SectionKicker>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
              These are not side projects. They are the architecture behind the
              work.
            </h2>
          </div>
          <div>
            <p className="font-body text-[15.5px] leading-[1.65] text-navy">
              Rig, BOSS, and FlowCraft are how I turn a mandate into an owned
              operating asset: govern the work in a portable build fabric, map
              the business above the vendor stack, then leave the client with a
              runnable instance for human and agentic workflows.
            </p>
            <p className="mt-5 border-l-[4px] border-l-gold bg-white px-5 py-4 font-vollkorn text-[22px] font-bold leading-[1.25] text-navy">
              The client instance is not the meter. The hard part is making the
              work visible enough to build, adopted enough to run, and portable
              enough to own.
            </p>
            <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
              BOSS and FlowCraft client instances are delivered as part of the
              engagement, not sold back by the seat. The paid work is the
              operator-led design, build, training, transfer, support path,
              maintenance path, and CI/CD capability that lets the business
              own what was built. Rig is the proof and construction substrate
              behind that work, not another dependency for the client to rent.
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
            Much of the software market still tries to convert capability
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
        <SectionKicker className="mb-5">Where this matters</SectionKicker>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
              The systems matter when the mandate is bigger than a tool.
            </h2>
          </div>
          <ul className="grid grid-cols-1 gap-3 font-body text-[14.5px] leading-[1.45] text-navy md:grid-cols-2">
            {demandSignals.map((item) => (
              <li key={item} className="border-l-[4px] border-l-gold bg-white px-5 py-4">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Operating proof</SectionKicker>
        <div className="mb-9 max-w-[860px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            Three systems, each with a job. Together they turn change into an
            operating asset.
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
              knowledge are made available for inspection, transfer, support,
              and extension under the engagement.
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
        <SectionKicker className="mb-5">Trained operators and agents</SectionKicker>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
              The handoff is an operating model, not a folder of documentation.
            </h2>
            <p className="mt-5 font-body text-[15.5px] leading-[1.65] text-navy">
              The new operating model includes your people and controlled
              agents working around the same asset. It defines who owns
              decisions, who verifies outputs, where support goes, how change
              ships, and how the system keeps telling the truth after the
              project room closes.
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
              trained human-and-agent operating model around your work.
            </p>
            <p>
              Your people run it and extend it. Qualified vendors and internal
              technologists can work against the source, configuration, and
              evidence the engagement transfers because the point was never
              software control. The point is the people who run the work owning
              the asset they run.
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
