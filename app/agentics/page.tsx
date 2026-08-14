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
    dek: "The command and control center.",
    rails: [
      {
        name: "Command",
        job: "Eyes on the project from the first workshop to the last gate. Key users, vendors, and leadership watch the same path. Lessons learned. What good looks like.",
      },
      {
        name: "Twin",
        job: "Systems, workflows, integrations, and data models live in BOSS. The actual systems stay outside, getting ready for deployment. See the whole before you cut over the parts.",
      },
      {
        name: "Green/green",
        job: "Two greens. The workflow is delivered through the stage gate. Go-live is validated. One without the other is not done.",
      },
      {
        name: "SOP",
        job: "From requirements through UAT - screenshots, steps, business process flows, one company format. Training, go-live, then living documents. I have already run this.",
      },
    ],
  },
  {
    mark: BUILDER_STACK[1],
    stacked: true,
    dek: "The agentic builder suite.",
    job: "Three years deep in the builder's seat. How I build, govern, and evidence the work. Humans and agents in the same command.",
    more: "A template of possibility - so a company can start building on day one, wherever they are on the path.",
    scan: [["Builder", "Command", "Evidence"]],
  },
  {
    mark: BUILDER_STACK[2],
    stacked: true,
    dek: "A ready-made agentic workflow-block builder.",
    job: "When a company wants to start building its own workflows, FlowCraft helps determine what those blocks can look like. Uniquely standard. All through the MDM.",
    more: "A full builder on day one - not a rented overlay. The company sees the shape of the work before it invents the stack.",
    scan: [["Workflows", "Blocks", "MDM"]],
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
            Some roles compress. New work appears. People stay on the
            mission - if Agentics is owned, not bolted on.
          </p>
          <p className="mt-6 text-[16px] leading-[1.65] text-ink">
            I nest Agentics on the transformation: the same people, the same
            owned data, the same systems, the same workflows. The expense
            carve is real. So are new ways to create value. I do not call
            either one earned until finance and operations can see it. I have
            walked that path.
          </p>
          <ScanBand
            className="mt-6"
            rows={[
              ["People", "Data"],
              ["Systems", "Workflows"],
            ]}
          />
          <p className="mt-5 font-brand text-[12px] font-semibold uppercase tracking-[0.16em] text-navy/70">
            Agentics in production · ~$420M operator · transferred to internal
            teams
          </p>
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
            ["2020s AI"],
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
          I work with the company as one team. I bring what I know. They
          already hold the rest. That is the hedge.
        </p>
        <ProofFigure
          src="/diagrams/waves-of-technology.png"
          alt="Waves of Technology from the 1960s to the 2020s: stacked decades, then the AI break"
          kicker="Waves of Technology"
          caption="The first software and services revolution is happening right now."
          fit="measure"
          plate
        />
      </FieldChamber>

      <FieldChamber
        id="people"
        kicker="People"
        title="A human helping other humans run the next machine."
      >
        <p className={body}>
          The floor already knows the line: AI is going to take my job. Some
          work will change. Pretending otherwise is how adoption dies.
        </p>
        <p className={`mt-5 ${body}`}>
          Training and transfer are not a courtesy. They are how Agentics
          becomes production instead of shelfware. I still run program,
          stakeholders, and change - Agentics does not skip them. Best
          practice on the joints. The company&apos;s sauce stays protected.
          Humans stay in the work. The internal IT lead holds the keys after
          transfer.
        </p>
        <ProofRail quote="I keep people in the work and able to move OI - not cut them out of it." />
      </FieldChamber>

      <FieldChamber
        id="knowledge"
        kicker="Knowledge"
        title="What the world can ask. What the company keeps."
      >
        <p className={body}>
          Production agents need bounded company truth: named owners, explicit
          access, halt, and touch rights. Publish only the slice the company
          will stand behind. The operating graph stays inside.
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
      </FieldChamber>

      <FieldChamber
        id="command"
        kicker="Enterprise command"
        title="How enterprise Agentics actually runs."
        tone="pale"
      >
        <ScanBand
          rows={[
            ["Observability", "Security", "Governance"],
            ["Multi-model", "Harness"],
          ]}
        />
        <p className="field-measure mt-5 font-vollkorn text-[18px] font-medium italic leading-snug text-navy md:text-[20px]">
          Train. Deploy. Monitor. Govern. Adopt.
        </p>
        <p className={`mt-5 ${body}`}>
          It is not about the model. It is the operating company: data core,
          workflows, owners, controls. The technology roadmap lives on the
          transformation. I land Agentics on that roadmap. Agents land only
          where the production path is real.
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
          I ran enterprise agentic AI in production as CIO of Sierra Nevada
          Brewing (~$420M): company-owned data core, training, security
          controls, human validation, named business owners. Then the
          platform and the operating discipline transferred to internal
          teams.
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
          I bring tools from three years in the builder&apos;s seat and every
          transformation before it. The Rig, BOSS, and FlowCraft are how I do
          the work - not software for sale. They are templates of
          possibility - so we start on day one, wherever you are on the path.
        </p>
        <p className={`mt-5 ${body}`}>
          The tools are tools. The company already holds the operating
          knowledge - seasoned stakeholders, IT, supply chain, and by now
          most have some Agentics. I bring domain experience and the
          builder&apos;s journey to it. We start useful work on day one.
        </p>
        <div className="mt-10 space-y-10">
          {builders.map((item) => (
            <article
              key={item.mark.name}
              className="field-measure border-l-[3px] border-gold pl-4 md:pl-6"
            >
              <div className="flex items-center">
                <BuilderLockup
                  src={item.mark.src!}
                  name={item.mark.name}
                  stacked={item.stacked}
                  compact
                />
              </div>
              <p className="mt-3 font-vollkorn text-[18px] font-medium italic leading-snug text-navy md:text-[20px]">
                {item.dek}
              </p>
              {"rails" in item && item.rails ? (
                <ul className="mt-5 space-y-4">
                  {item.rails.map((rail) => (
                    <li key={rail.name}>
                      <p className="font-brand text-[12px] font-bold uppercase tracking-[0.16em] text-navy">
                        {rail.name}
                      </p>
                      <p className="mt-1 text-[16px] leading-[1.65] text-ink">
                        {rail.job}
                      </p>
                    </li>
                  ))}
                </ul>
              ) : null}
              {"job" in item && item.job ? (
                <p className="mt-3 text-[16px] leading-[1.65] text-ink">
                  {item.job}
                </p>
              ) : null}
              {"more" in item && item.more ? (
                <p className="mt-3 text-[16px] leading-[1.65] text-ink">
                  {item.more}
                </p>
              ) : null}
              {"scan" in item && item.scan ? (
                <ScanBand className="mt-4" rows={item.scan} />
              ) : null}
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
          I run multi-model on purpose. Anthropic, OpenAI, Gemini, xAI, Kimi,
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
