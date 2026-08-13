import type { Metadata } from "next";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import FieldChamber from "@/components/field/FieldChamber";
import FieldCta from "@/components/field/FieldCta";
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

const body = "max-w-[62ch] text-[16px] leading-[1.65] text-ink";

const builderJobs = [
  {
    name: "BOSS",
    job: "Client-owned transformation twin - workflows, decisions, systems, ownership, delivery state, institutional memory.",
  },
  {
    name: "The Rig",
    job: "Governed builder and evidence environment across humans and agents.",
  },
  {
    name: "FlowCraft",
    job: "Human-and-agent workflow runtime with explicit state, handoffs, boundaries, and validation.",
  },
] as const;

export default function AgenticsPage() {
  return (
    <div className="bg-cream font-body text-navy">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative mx-auto max-w-content px-6 pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-4">Agentics · The Field</SectionKicker>
        <h1 className="text-balance font-vollkorn text-[46px] font-bold leading-[1.02] tracking-normal text-navy md:text-[62px] lg:text-[74px]">
          Agents on a production path the company owns.
        </h1>
        <p className="mt-6 max-w-[820px] font-vollkorn text-[20px] font-medium italic leading-snug text-warm-gray md:text-[22px]">
          Applied Agentics means people, data, systems, and agents designed,
          governed, and operated as one production system - not four
          disconnected vendor relationships.
        </p>
        <p className={`mt-6 ${body}`}>
          I start inside the operating company. Agentics belongs inside the
          transformation, governed against the same people, data, systems,
          workflows, and operating outcomes. A pilot beside a broken estate is
          still a broken estate.
        </p>
        <ProofRail quote="Models are instruments. Ownership is the job." />
      </section>

      <FieldChamber
        id="models"
        kicker="Frontier models"
        title="The models are the instruments."
        tone="pale"
      >
        <p className={body}>
          I work across the frontier - Anthropic, OpenAI, Gemini, xAI, Kimi,
          Thinking Machines Lab - as instruments on a company-owned path. The
          claim is command and production use, not a partnership wall or a
          model beauty contest.
        </p>
        <ProofRail
          marks={FRONTIER_MODELS}
          markLabel="Frontier models in the work"
          scene="workshop"
        />
      </FieldChamber>

      <FieldChamber
        id="builder"
        kicker="Builder stack"
        title="The machinery behind the production path."
      >
        <p className={body}>
          BOSS, The Rig, and FlowCraft are the delivery architecture used to
          build, govern, and evidence that production path. They are working
          receipts the company keeps - not products for sale, not a Home SKU
          shelf.
        </p>
        <ul className="mt-8 max-w-[62ch] space-y-5">
          {builderJobs.map((item) => (
            <li
              key={item.name}
              className="border-l-[3px] border-gold pl-4"
            >
              <p className="font-brand text-[12px] font-bold uppercase tracking-[0.16em] text-navy">
                {item.name}
              </p>
              <p className="mt-1 text-[16px] leading-[1.65] text-ink">
                {item.job}
              </p>
            </li>
          ))}
        </ul>
        <ProofRail
          marks={BUILDER_STACK}
          markLabel="Delivery architecture"
        />
      </FieldChamber>

      <FieldChamber
        id="production"
        kicker="Production bar"
        title="Production, or it is still a lab."
        tone="pale"
      >
        <p className={body}>
          Production requires boundaries, human validation, observability,
          security, training, and named business ownership.
        </p>
        <p className={`mt-5 ${body}`}>
          At Sierra Nevada Brewing, enterprise agentic AI ran in production on
          a company-owned data platform - with training, controls, and named
          business ownership - not a lab pilot.
        </p>
        <ProofRail quote="A pilot beside a broken estate is still a broken estate." />
      </FieldChamber>

      <FieldChamber title="What the company keeps.">
        <p className={body}>
          The operating discipline and internal capacity to run and extend
          what we build. Mapped workflows. Governed data. Agents under
          boundaries with named owners. I leave; the production path stays.
        </p>
        <FieldCta
          secondaryHref="/transformations/"
          secondaryLabel="See transformations →"
        />
      </FieldChamber>
    </div>
  );
}
