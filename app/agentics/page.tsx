import type { Metadata } from "next";
import M4Watermark from "@/components/M4Watermark";
import ProofFigure from "@/components/ProofFigure";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import BuilderLockup from "@/components/field/BuilderLockup";
import FieldChamber from "@/components/field/FieldChamber";
import FieldCta from "@/components/field/FieldCta";
import FieldJump from "@/components/field/FieldJump";
import ScanBand from "@/components/field/ScanBand";
import ProofRail from "@/components/field/ProofRail";
import { BUILDER_STACK, FRONTIER_MODELS } from "@/lib/field/marks";

export const metadata: Metadata = {
  title: {
    absolute: "Agentics · Production Path | idigdata",
  },
  description:
    "Applied Agentics for the enterprise - frontier models on a governed production path with Rig, BOSS, and FlowCraft.",
  alternates: { canonical: "/agentics/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/agentics/",
    title: "Agentics · Production Path | idigdata",
    description:
      "Applied Agentics for the enterprise - frontier models on a governed production path with Rig, BOSS, and FlowCraft.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata - Agentics",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://idigdata.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Agentics",
      item: "https://idigdata.com/agentics/",
    },
  ],
};

const body = "field-measure text-[16px] leading-[1.65] text-ink";

const jump = [
  { href: "#scale", label: "Scale" },
  { href: "#people", label: "People" },
  { href: "#knowledge", label: "Knowledge" },
  { href: "#command", label: "Command" },
  { href: "#receipt", label: "Receipt" },
  { href: "#builder", label: "Builder" },
  { href: "#models", label: "Models" },
] as const;

const command = [
  {
    name: "People",
    job: "Named owners who are actual humans. Training. Transfer. Human validation is not a slogan - a person keeps the last move on a consequential action.",
  },
  {
    name: "Harness",
    job: "Agents run inside named workflows, with named owners, explicit state, and a handoff a person can stand behind. A copilot beside a broken estate is not a harness.",
  },
  {
    name: "Security",
    job: "Boundaries, identity, least privilege, halt, override, and recovery. Named touch rights on the estate. Tool access only under production ownership.",
  },
  {
    name: "Governance",
    job: "Architecture, data, and AI governance as one control frame the company owns. Guardrails that speed delivery - not theater that slows it. Standards are inputs. The company still has to own the layer.",
  },
  {
    name: "Observability",
    job: "Who acted, on whose authority, with what evidence, what is still unknown. Visible while it runs. A dashboard that hides that is not observability.",
  },
  {
    name: "Owned data",
    job: "Agents run on a company-owned data core - the same estate as ERP, plant, warehouse, guest, and finance. A sidecar lake with a chatbot is not a production path.",
  },
] as const;

const knowledge = [
  {
    name: "Published slice",
    job: "What the company is willing to be known for. Answer engines cite a governed public record - not the live operating graph.",
  },
  {
    name: "Operating graph",
    job: "The knowledge production agents run on. Owned, bounded, halt-able. The sauce stays inside.",
  },
  {
    name: "Touch rights",
    job: "What an agent may see and do on the estate. Named access. A person keeps the last move on a consequential action.",
  },
] as const;

const builders = [
  {
    mark: BUILDER_STACK[0],
    stacked: false,
    job: "Client-owned transformation twin: workflows, decisions, systems, ownership, delivery state, institutional memory.",
  },
  {
    mark: BUILDER_STACK[1],
    stacked: true,
    job: "Governed builder and evidence environment. Humans and agents in the same command. Observability is how the work runs.",
  },
  {
    mark: BUILDER_STACK[2],
    stacked: true,
    job: "Human-and-agent workflow runtime. Explicit state, handoffs, boundaries, validation. Agents inside named work, not floating beside it.",
  },
] as const;

export default function AgenticsPage() {
  return (
    <div className="bg-cream font-body text-navy">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative mx-auto max-w-content px-6 pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <div className="field-measure">
          <SectionKicker className="mb-4">Agentics · The Field</SectionKicker>
          <h1 className="text-balance font-vollkorn text-[46px] font-bold leading-[1.02] tracking-normal text-navy md:text-[62px] lg:text-[74px]">
            Work will change. The company still has to win.
          </h1>
          <p className="mt-6 font-vollkorn text-[20px] font-medium italic leading-snug text-warm-gray md:text-[22px]">
            Some roles compress. New work appears. People get more aligned to
            the mission - if Agentics is owned, not bolted on.
          </p>
          <p className="mt-6 text-[16px] leading-[1.65] text-ink">
            Nested on the transformation: the same people, the same owned data,
            the same systems, the same workflows. Expense carve is real. So is
            new revenue that did not exist on a pile of systems. Companies that
            do both lead. They need someone who has walked the path.
          </p>
          <ScanBand
            className="mt-6"
            rows={[
              ["People", "Data"],
              ["Systems", "Workflows"],
            ]}
          />
          <ScanBand
            className="mt-3"
            rows={[
              ["Observability", "Security", "Governance"],
              ["Multi-model", "Harness"],
            ]}
          />
        </div>
        <ProofRail quote="Models are instruments. Ownership is the job." />
        <FieldJump items={jump} />
      </section>

      <FieldChamber
        id="scale"
        kicker="Scale"
        title="One wave a decade. This one is not."
        tone="pale"
      >
        <ScanBand
          rows={[
            ["1960s semiconductors", "1970s systems", "1980s networks"],
            ["1990s internet", "2000s apps", "2010s mobile"],
          ]}
        />
        <p className={`mt-5 ${body}`}>
          Each stacked on the last. A generation to absorb it.
        </p>
        <p className={`mt-5 ${body}`}>
          This wave is far different. It does not wait a generation, and it
          changes the work itself.
        </p>
        <p className={`mt-5 ${body}`}>
          Today we are a team - the company and I - anchored in that. We
          build with the knowledge I have and the knowledge they already
          hold. Every company has incredible people. We work with those
          strengths. That is the hedge. That is how the engagement succeeds.
        </p>
        <ProofFigure
          src="/diagrams/waves-of-technology.png"
          alt="Waves of Technology from the 1960s to the 2020s: stacked decades, then the AI break"
          kicker="Waves of Technology"
          caption="History to the 2010s. Then the break."
          fit="measure"
        />
      </FieldChamber>

      <FieldChamber
        id="people"
        kicker="People"
        title="A human helping other humans run the next machine."
      >
        <p className={body}>
          The floor already knows the line: AI is going to take my job. Some
          work will. Pretending otherwise is how adoption dies. The mandate is
          to make the people more - more organized, more able to move OI - not
          fewer and lost.
        </p>
        <p className={`mt-5 ${body}`}>
          Training and transfer are not a courtesy. They are how Agentics
          becomes production instead of a riot. Program management,
          stakeholder management, and change management still run the path -
          Agentics does not skip them. Uniquely standard still applies: best
          practice on the joints, the company's sauce protected, humans in
          the work.
        </p>
      </FieldChamber>

      <FieldChamber
        id="knowledge"
        kicker="Knowledge"
        title="What the world can ask. What the company keeps."
      >
        <p className={body}>
          Answer engines will talk about the company whether the company owns
          the answer or not. Production agents will run on whatever truth they
          are handed. Those are not the same door.
        </p>
        <p className={`mt-5 ${body}`}>
          A published slice of company truth - canonical pages, schema, a
          record the business will stand behind - is what the world is allowed
          to cite. The operating graph stays inside: owners, access, halt.
          Open the live graph to the open internet and you did not rank. You
          handed over the sauce.
        </p>
        <ul className="field-measure mt-8 space-y-5">
          {knowledge.map((item) => (
            <li key={item.name} className="border-l-[3px] border-gold pl-4">
              <p className="font-brand text-[12px] font-bold uppercase tracking-[0.16em] text-navy">
                {item.name}
              </p>
              <p className="mt-1 text-[16px] leading-[1.65] text-ink">
                {item.job}
              </p>
            </li>
          ))}
        </ul>
        <p className={`mt-8 ${body}`}>
          Publish a slice. Own the graph. Named touch rights on the estate.
          Those doors do not share a key.
        </p>
      </FieldChamber>

      <FieldChamber
        id="command"
        kicker="Enterprise command"
        title="How enterprise Agentics actually runs."
        tone="pale"
      >
        <p className="field-measure font-vollkorn text-[18px] font-medium italic leading-snug text-navy md:text-[20px]">
          Train. Deploy. Monitor. Govern. Adopt.
        </p>
        <p className={`mt-5 ${body}`}>
          Not a model. The operating company: data core, workflows, owners,
          controls. The technology roadmap lives on the transformation.
          Agentics lands on that roadmap. Agents land only where the
          production path is real.
        </p>
        <ul className="field-measure mt-8 space-y-5">
          {command.map((item) => (
            <li key={item.name} className="border-l-[3px] border-gold pl-4">
              <p className="font-brand text-[12px] font-bold uppercase tracking-[0.16em] text-navy">
                {item.name}
              </p>
              <p className="mt-1 text-[16px] leading-[1.65] text-ink">
                {item.job}
              </p>
            </li>
          ))}
        </ul>
      </FieldChamber>

      <FieldChamber
        id="receipt"
        kicker="Production receipt"
        title="This has already run as CIO."
      >
        <p className={body}>
          Sierra Nevada Brewing, a ~$420M multi-site operator: a $15M
          transformation, more than 150 people under one operating model, a
          company-owned data core spanning 50+ enterprise systems, and
          enterprise agentic AI in production on that platform - training,
          security controls, human validation, named business owners. Then the
          platform and the operating discipline transferred to internal teams.
        </p>
        <ProofRail quote="A pilot beside a broken estate is still a broken estate." />
      </FieldChamber>

      <FieldChamber
        id="builder"
        kicker="Builder"
        title="The machinery behind that path."
        tone="pale"
      >
        <p className={body}>
          BOSS, The Rig, and FlowCraft are how that production path gets
          built, governed, and evidenced. They are in process, and they can
          go to work in an engagement while they are being built. That is a
          builder's loop run from the owner seat - not an IC builder job.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3 md:gap-10">
          {builders.map((item) => (
            <article
              key={item.mark.name}
              className="grid grid-rows-[7.5rem_auto_1fr] text-center"
            >
              <div className="flex items-center justify-center">
                <BuilderLockup
                  src={item.mark.src!}
                  name={item.mark.name}
                  stacked={item.stacked}
                  compact
                />
              </div>
              <p className="mt-1 font-brand text-[12px] font-bold uppercase tracking-[0.16em] text-navy">
                {item.mark.name}
              </p>
              <p className="mt-2 text-[16px] leading-[1.65] text-ink">
                {item.job}
              </p>
            </article>
          ))}
        </div>
      </FieldChamber>

      <FieldChamber
        id="models"
        kicker="Frontier models"
        title="The models are the instruments."
      >
        <p className={body}>
          Multi-model on purpose. Anthropic, OpenAI, Gemini, xAI, Kimi,
          Thinking Machines Lab - instruments on a company-owned path.
          Multimodal: text, documents, images, and operating data. Command and
          production use, not a partnership wall.
        </p>
        <ProofRail
          marks={FRONTIER_MODELS}
          markLabel="Frontier models in the work"
        />
      </FieldChamber>

      <FieldChamber title="What the company keeps." tone="pale">
        <p className={body}>
          People who can run and extend it. Mapped workflows. Governed data.
          Agents under boundaries with named owners. The production path
          stays.
        </p>
        <FieldCta
          secondaryHref="/transformations/"
          secondaryLabel="See transformations →"
        />
      </FieldChamber>
    </div>
  );
}
