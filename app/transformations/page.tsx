import type { Metadata } from "next";
import M4Watermark from "@/components/M4Watermark";
import ProofFigure from "@/components/ProofFigure";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import FieldChamber from "@/components/field/FieldChamber";
import FieldCta from "@/components/field/FieldCta";
import FieldJump from "@/components/field/FieldJump";
import ScanBand from "@/components/field/ScanBand";
import LogoCarousel from "@/components/field/LogoCarousel";
import LogoStrip from "@/components/field/LogoStrip";
import FieldKey from "@/components/field/FieldKey";
import ProofRail from "@/components/field/ProofRail";
import {
  BEEHIVE_SYSTEM_KEY,
  BPF_KEY,
  SYSTEMVERSE_KEY,
} from "@/lib/field/keys";
import {
  ESTATE_APP_GROUPS,
  MARQUEE_OPERATORS,
  PARTNERS,
} from "@/lib/field/marks";

export const metadata: Metadata = {
  title: {
    absolute: "Transformations · Built · Operated · Proven | idigdata",
  },
  description:
    "Field receipts and the customer-side operating estate - partners, systems, and clients behind real transformation.",
  alternates: { canonical: "/transformations/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/transformations/",
    title: "Transformations · Built · Operated · Proven | idigdata",
    description:
      "Field receipts and the customer-side operating estate - partners, systems, and clients behind real transformation.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata - Transformations",
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
      name: "Transformations",
      item: "https://idigdata.com/transformations/",
    },
  ],
};

const receipts = [
  "$350M post-M&A estate in 11 months - close cycle cut from 18 to 4 days · 30K+ SKUs under one operating picture",
  "Stalled $8M ERP recovered - client-owned API bridge registered as IP",
  "$8M-$10M vendor ask delivered for under $2M - company ownership preserved",
] as const;

const walk = [
  {
    name: "Stakeholder management",
    job: "Who is in the room, who can halt, who has to live with the result. I embed on the customer side. Authority above vendors and workstreams. Built with the people who run it - not done to them.",
  },
  {
    name: "Program management",
    job: "I keep the work dated, owned, and visible. Hybrid agile and waterfall - from the task list to a roadmap with timelines. Not a PMO slide after kickoff. I walk that in on day one.",
  },
  {
    name: "Change management",
    job: "Adoption is the result, not a workstream parked at the end. I train the people who will run it. The company keeps the next cycle.",
  },
  {
    name: "Map the work",
    job: "How work actually moves - not the org chart. People, data, systems, and workflows as one picture.",
  },
  {
    name: "Standardize the joints",
    job: "Best practice where the company is standard. Secret sauce where it is not. Most of the estate should look like a well-run peer. A thin slice should not.",
  },
] as const;

const body = "field-measure text-[16px] leading-[1.65] text-ink";

export default function TransformationsPage() {
  return (
    <div className="bg-cream font-body text-navy">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative mx-auto max-w-content px-6 pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <div className="field-measure">
          <SectionKicker className="mb-4">Transformations · The Field</SectionKicker>
          <h1 className="text-balance font-vollkorn text-[46px] font-bold leading-[1.02] tracking-normal text-navy md:text-[62px] lg:text-[74px]">
            Built. Operated. Proven.
          </h1>
          <p className="mt-6 font-vollkorn text-[20px] font-medium italic leading-snug text-warm-gray md:text-[22px]">
            The company keeps running. People, data, systems, and workflows
            become one operating whole. OI stays the scoreboard.
          </p>
          <p className="mt-6 text-[16px] leading-[1.65] text-ink">
            I walk in with a plan: program, stakeholders, and change as a real
            system - what to standardize, what is actually the sauce, a roadmap
            with timelines, trained people, vendors as trades. Hire me for the
            transformation. Add Agentics on the same path when the production
            bar is real.
          </p>
          <ScanBand
            className="mt-6"
            rows={[
              ["People", "Data"],
              ["Systems", "Workflows"],
            ]}
          />
        </div>
        <LogoCarousel
          marks={MARQUEE_OPERATORS}
          label="Operators alongside the work"
          dek="I sit alongside the people who already run it - not instead of them. Every company has incredible people. I work with those strengths."
          mono
        />
        <FieldJump />
      </section>

      <FieldChamber
        id="estate"
        kicker="Estate command"
        title="One estate. One command. Every vendor."
      >
        <p className={body}>
          The company keeps one picture of how the estate actually runs - data
          core, ERP, plant, warehouse, guest, commerce, HR, spend, compliance -
          under one customer-side command. I hold that command. The company
          keeps the capability.
        </p>
        <p className={`mt-5 ${body}`}>
          As CIO of Sierra Nevada Brewing (~$420M), I ran a $15M estate
          transformation - more than 150 people, 50+ systems under one
          command. Dynamics 365 and Business Central deep; hands-on across
          the Field app shelf; peer-literate across SAP / Oracle / NetSuite /
          JDE when the mandate requires it. The production path for agents
          lives on Agentics.
        </p>
        <ProofFigure
          src="/diagrams/system-verse.svg"
          alt="The Systemverse - future-state systems map with a company-owned data core at the center and the application layer around it"
          kicker="The estate picture"
          caption="The Systemverse is the estate picture the company keeps: a governed view of how data, applications, workflows, controls, and ownership fit together."
          legend={
            <FieldKey label="Systems" items={SYSTEMVERSE_KEY} />
          }
        />
        <div className="mt-5">
          <LogoStrip
            groups={ESTATE_APP_GROUPS}
            label="Systems under command"
            mono
          />
        </div>
        <blockquote className="field-measure mt-6 border-l-[3px] border-gold pl-4 font-vollkorn text-[18px] font-medium italic leading-snug text-navy md:text-[20px]">
          Every system on this picture was a contract I negotiated and a vendor
          I ran.
        </blockquote>
      </FieldChamber>

      <FieldChamber
        id="receipts"
        kicker="Receipts"
        title="Selected customer-side receipts"
      >
        <ul className="field-measure space-y-3">
          {receipts.map((line) => (
            <li
              key={line}
              className="border-l-[3px] border-gold pl-4 text-[16px] leading-[1.65] text-ink"
            >
              {line}
            </li>
          ))}
        </ul>
      </FieldChamber>

      <FieldChamber
        id="walk"
        kicker="Uniquely standard"
        title="Best practice where you are standard. Your sauce where you are not."
        tone="pale"
      >
        <p className={body}>
          Every company thinks it is a snowflake. Every company also wants
          best practice. Most of the estate should look like a well-run peer.
          A thin slice should not. That slice is how the company makes money.
        </p>
        <p className={`mt-5 ${body}`}>
          I walk that in on day one: map the work, date the roadmap, first
          owned decision. Program, stakeholders, and change are the system -
          not decorations. Hybrid agile and waterfall, from the task to a
          dated roadmap.
        </p>
        <ScanBand
          className="mt-6"
          rows={[["Program", "Stakeholders", "Change"]]}
        />
        <ul className="field-measure mt-8 space-y-5">
          {walk.map((item) => (
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
        <ProofFigure
          src="/diagrams/beehive.svg"
          alt="The Beehive - process flows crossing the people and functions who run the company"
          kicker="How work actually moves"
          caption="The Beehive is people and process on the same frame: the flows that run the company crossing the functions that own them."
          fit="contain"
          legend={
            <>
              <FieldKey label="Business process flows" items={BPF_KEY} />
              <FieldKey
                className="mt-5"
                label="Systems"
                items={BEEHIVE_SYSTEM_KEY}
              />
            </>
          }
        />
      </FieldChamber>

      <FieldChamber
        id="items"
        kicker="Item truth"
        title="Item numbers are where transformations quietly die."
      >
        <p className={body}>
          Thirty thousand SKUs do not forgive a soft master. Local item
          numbers, global identifiers, schemas that disagree, and trade
          partners that need one truth. I bring hands-on 1WorldSync /
          GDSN-class item discipline - so the warehouse, ERP, commerce, and
          the syndicated world stop arguing about what a thing is.
        </p>
      </FieldChamber>

      <FieldChamber
        id="ownership"
        kicker="Ownership"
        title="Vendors are trades. Someone still has to own the build."
        tone="pale"
      >
        <p className={body}>
          Platforms and SIs deliver scope. They do not own the operating
          result. I hold people, data, systems, vendors, and adoption as one
          job through cutover.
        </p>
        <p className={`mt-5 ${body}`}>
          OI is the scoreboard. Technology should protect and enable OI while
          the company keeps running - the expense carve finance can see, and
          the operating result the business can run. Two of my earliest calls
          are to finance and control. The roadmap is how strategy becomes
          execution on the estate. I land Agentics on that roadmap. It does
          not replace it.
        </p>
        <ProofRail marks={PARTNERS} markLabel="Partners / SI" mono />
      </FieldChamber>

      <FieldChamber kicker="Outcome" title="What the company keeps.">
        <p className={body}>
          Mapped workflows. Governed data. Visible delivery state. People able
          to carry the next cycle. The sauce still theirs. The operating
          capability stays with the company.
        </p>
        <FieldCta secondaryHref="/agentics/" secondaryLabel="See agentics →" />
      </FieldChamber>
    </div>
  );
}
