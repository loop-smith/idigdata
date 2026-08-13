import type { Metadata } from "next";
import M4Watermark from "@/components/M4Watermark";
import ProofFigure from "@/components/ProofFigure";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import FieldChamber from "@/components/field/FieldChamber";
import FieldCta from "@/components/field/FieldCta";
import FieldJump from "@/components/field/FieldJump";
import EstateMap from "@/components/field/EstateMap";
import ProofRail from "@/components/field/ProofRail";
import {
  ESTATE_APPS,
  ITEM_APPS,
  LOGISTICS_APPS,
  MARKET_APPS,
  MARQUEE_AEC,
  MARQUEE_CPG,
  PARTNERS,
  PLANT_APPS,
  RETAIL_APPS,
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
  "$350M post-M&A estate in 11 months - close cycle 18→4 days · 30K+ SKUs under one operating picture",
  "Stalled $8M ERP recovered - client-owned API bridge registered as IP",
  "$8M-$10M vendor ask delivered for under $2M - company ownership preserved",
] as const;

const workMoves = [
  "Embed on the customer side",
  "Establish authority above vendors and workstreams",
  "Map operating reality - how work actually moves",
  "One governance frame the business owns",
  "Modernize while the company still runs",
  "Land agents only where the production path is real",
  "Train, transfer, leave an owned asset",
] as const;

const body = "max-w-[62ch] text-[16px] leading-[1.65] text-ink";

export default function TransformationsPage() {
  return (
    <div className="bg-cream font-body text-navy">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative mx-auto max-w-content px-6 pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-4">Transformations · The Field</SectionKicker>
        <h1 className="text-balance font-vollkorn text-[46px] font-bold leading-[1.02] tracking-normal text-navy md:text-[62px] lg:text-[74px]">
          Built. Operated. Proven.
        </h1>
        <p className="mt-6 max-w-[820px] font-vollkorn text-[20px] font-medium italic leading-snug text-warm-gray md:text-[22px]">
          Scar tissue from owning the whole under pressure - estate command,
          item truth, guest commerce, logistics, and the architecture so the
          next mandate does not start from zero.
        </p>
        <ProofRail
          marks={[...MARQUEE_CPG, ...MARQUEE_AEC]}
          markLabel="Operators I have worked alongside"
        />
        <FieldJump />
      </section>

      <FieldChamber
        title="Maturity is fewer clearer ways - not more technology."
        tone="pale"
      >
        <p className={body}>
          Enterprises do not fail because they lack platforms. They fail when
          integration, data, security, vendors, and now agents are treated as
          separate science projects. I connect those disciplines into one
          operating whole the business can run - reusable patterns and decision
          frames, not a new tool for every program.
        </p>
        <p className={`mt-5 ${body}`}>
          The question is never API vs event vs batch vs file vs agent. It is
          when each pattern earns its place - and who owns the result.
        </p>
      </FieldChamber>

      <FieldChamber
        id="estate"
        kicker="Estate command"
        title="One estate. One command. Every vendor."
      >
        <p className={body}>
          As CIO of Sierra Nevada Brewing (~$420M), I led a $15M transformation
          with more than 150 people in the program. Every major system on the
          estate map was a contract I negotiated and a vendor I ran - data
          core, ERP, plant, warehouse, guest, commerce, HR, spend, compliance -
          under one customer-side command. Capability transferred to internal
          teams; consulting dependency cut.
        </p>
        <p className={`mt-5 ${body}`}>
          Dynamics 365 and Business Central deep; hands-on across the Field app
          shelf; peer-literate across SAP / Oracle / NetSuite / JDE when the
          mandate requires it. BOSS, The Rig, and FlowCraft are the delivery
          architecture behind the mandate - working receipts, not products for
          sale. That production path lives on Agentics.
        </p>
        <EstateMap />
        <ProofRail
          marks={[...ESTATE_APPS, ...PARTNERS]}
          markLabel="Estate command · partners"
          quote="Every circle is a contract I negotiated and a vendor I ran."
        />
        <ProofFigure
          src="/diagrams/system-verse.svg"
          alt="The Systemverse - future-state systems map with a company-owned data core at the center and the application layer around it"
          kicker="Future-state systems map"
          caption="The Systemverse is the estate picture the company keeps: a governed view of how data, applications, workflows, controls, and ownership fit together."
        />
      </FieldChamber>

      <FieldChamber
        id="items"
        kicker="Item truth"
        title="Item numbers are where transformations quietly die."
        tone="pale"
      >
        <p className={body}>
          Thirty thousand SKUs do not forgive a soft master. Local item
          numbers, global identifiers, schemas that disagree, and trade
          partners that need one truth. I have hands-on 1WorldSync / GDSN-class
          item discipline - so the warehouse, ERP, commerce, and syndicated
          world stop arguing about what a thing is.
        </p>
        <ProofRail
          marks={ITEM_APPS}
          scene="warehouse"
          quote="One item truth - local, global, and trade-ready."
        />
      </FieldChamber>

      <FieldChamber
        id="retail"
        kicker="Retail and guest"
        title="Tasting rooms, merchandise, and the guest path are part of the estate."
      >
        <p className={body}>
          Retail and guest experience are not a side app. Tasting rooms,
          events, merch, and connected commerce have to reconcile to the same
          data core and the same ownership job as ERP and plant - or the brand
          leaks at the counter.
        </p>
        <ProofRail
          marks={RETAIL_APPS}
          scene="tasting"
          quote="Guest experience sits on the same rails as the brewery - or it is theater."
        />
      </FieldChamber>

      <FieldChamber
        id="feeds"
        kicker="Market signal"
        title="Transformation that cannot hear the market is half-blind."
        tone="pale"
      >
        <p className={body}>
          Syndicated and enrichment feeds - Nielsen, VIP, and kin - are not a
          BI footnote. They are how the operating company sees demand, account
          reality, and trade signal while the estate modernizes. I bring those
          feeds onto the same governed data core as the internal systems.
        </p>
        <ProofRail
          marks={MARKET_APPS}
          scene="meeting"
          quote="Internal systems tell you what you did. The feeds tell you what the market did."
        />
      </FieldChamber>

      <FieldChamber
        id="logistics"
        kicker="Move the goods"
        title="Warehouse, 3PL, and the road are where OI gets protected or lost."
      >
        <p className={body}>
          WMS, TMS, 3PL, and fulfillment partners have to move with the cutover
          - scan guns, dock doors, carriers, and inventory truth. I run
          logistics systems as part of the transformation, not as someone
          else&apos;s workstream after go-live.
        </p>
        <ProofRail
          marks={LOGISTICS_APPS}
          scene="warehouse"
          quote="If the floor cannot trust the number, the board deck is fiction."
        />
      </FieldChamber>

      <FieldChamber
        id="plant"
        kicker="Make and maintain"
        title="Plant and assets stay in the same ownership frame."
        tone="pale"
      >
        <p className={body}>
          MES, EAM, quality, and safety systems are not OT orphans. Production
          continuity, maintenance, and compliance belong on the same command
          map as ERP and data - especially when the company cannot stop
          running.
        </p>
        <ProofRail marks={PLANT_APPS} scene="plant" />
      </FieldChamber>

      <FieldChamber
        id="ownership"
        kicker="Ownership"
        title="Vendors are trades. Someone still has to own the build."
      >
        <p className={body}>
          Platforms and SIs deliver scope. They do not own the operating
          result. Someone on the customer side still has to hold people, data,
          systems, vendors, and adoption as one job through cutover. I have
          run beside top-flight partners - and still held the owner seat.
        </p>
        <p className={`mt-5 ${body}`}>
          I take Operating Income (OI) seriously. Technology should protect
          and enable OI while the company keeps running. Two of my earliest
          calls are to finance and control - not as a courtesy, as the
          scoreboard.
        </p>
        <p className={`mt-5 ${body}`}>
          Governance should speed delivery - not perform theater. Architecture,
          data, and AI governance belong in one control frame the company owns.
          Good governance reduces repeated decisions and lets teams move faster
          inside clear guardrails.
        </p>
        <ProofRail
          marks={PARTNERS}
          markLabel="Partners / SI"
          scene="meeting"
          quote="I have run beside top-flight partners - and still held the owner seat."
        />
      </FieldChamber>

      <FieldChamber
        id="fabric"
        kicker="Operating fabric"
        title="How the work moves"
        tone="pale"
      >
        <ol className="max-w-[62ch] space-y-4">
          {workMoves.map((step, i) => (
            <li
              key={step}
              className="flex gap-4 border-b border-navy/10 pb-4 text-[16px] leading-[1.65] text-ink last:border-b-0"
            >
              <span className="shrink-0 font-brand text-[12px] font-bold uppercase tracking-[0.16em] text-navy">
                {i + 1}.
              </span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
        <ProofFigure
          src="/diagrams/beehive.svg"
          alt="The Beehive - operating fabric of process flows crossing functional groups before any one platform"
          kicker="Operating fabric"
          caption="The Beehive - how work actually moves across functional groups before platforms. The operating fabric I map before we modernize or land agents."
        />
      </FieldChamber>

      <FieldChamber id="receipts" title="Selected customer-side receipts">
        <ul className="max-w-[62ch] space-y-3">
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
        id="marquee"
        kicker="Marquee"
        title="Operators I have worked alongside"
        tone="pale"
      >
        <p className={`mb-8 ${body}`}>
          CPG and AEC first. Overflow operators by name when the mandate
          earned a logo; the rest stay a conversation.
        </p>
        <ProofRail
          marks={[...MARQUEE_CPG, ...MARQUEE_AEC]}
          markLabel="CPG · AEC"
        />
      </FieldChamber>

      <FieldChamber title="Built to be owned, not rented.">
        <p className={body}>
          Mapped workflows. Governed data. Visible delivery state. People able
          to carry the next cycle. Agents under boundaries with named owners. I
          leave; the operating capability stays.
        </p>
        <FieldCta secondaryHref="/agentics/" secondaryLabel="See agentics →" />
      </FieldChamber>
    </div>
  );
}
