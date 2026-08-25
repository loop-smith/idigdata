import type { Metadata } from "next";
import Link from "next/link";
import PresenceShell from "@/components/presence/PresenceShell";
import HaloFilm from "@/components/presence/HaloFilm";

export const metadata: Metadata = {
  title: { absolute: "Application layer | idigdata" },
  description:
    "Thirty years inside companies that already run it. The Systemverse, the Beehive, and the transformation you keep.",
  alternates: { canonical: "/application-layer/" },
};

const sectors = [
  {
    title: "CPG, Wine & Food",
    logos: [
      ["sierra-nevada.png", "Sierra Nevada Brewing"],
      ["duckhorn.webp", "Duckhorn"],
      ["foley-family-wines.png", "Foley Family Wines"],
      ["everytable.svg", "Everytable"],
      ["greenham.svg", "Greenham"],
      ["valley-fine-foods.png", "Valley Fine Foods"],
    ],
  },
  {
    title: "Architecture & Construction",
    logos: [
      ["turner.svg", "Turner Construction"],
      ["pcl.svg", "PCL Construction"],
      ["som.svg", "SOM"],
      ["hok.svg", "HOK"],
    ],
  },
  {
    title: "Sports, Entertainment & Healthcare",
    logos: [
      ["wynn-resorts.svg", "Wynn Resorts"],
      ["mgm-resorts.svg", "MGM Resorts"],
      ["hca-healthcare.svg", "HCA Healthcare"],
      ["san-jose-sharks-wordmark.png", "San Jose Sharks"],
    ],
  },
] as const;

const estate = [
  {
    title: "Core Enterprise ERP",
    tag: "General Ledger",
    rows: [
      "Microsoft Dynamics 365 · Finance & Supply Chain / Business Central",
      "SAP · S/4HANA & ECC",
      "Oracle · Enterprise Financials",
      "NetSuite · Cloud ERP",
      "JD Edwards (JDE) · EnterpriseOne / World",
    ],
  },
  {
    title: "Corporate Financial Planning",
    tag: "CPM / EPM",
    rows: [
      "OneStream · Enterprise CPM & Financial Close Consolidation",
      "Solver · Corporate Planning, Budgeting & Reporting",
    ],
  },
  {
    title: "Human Capital Management",
    tag: "HCM · People",
    rows: [
      "Workday · Enterprise HCM & Core Human Capital",
      "UKG · Workforce Management, Time & Labor, Payroll",
    ],
  },
  {
    title: "Clinical Records",
    tag: "EMR",
    rows: ["Tebra · Electronic Medical Records (EMR)"],
  },
  {
    title: "Manufacturing & Plant Automation",
    tag: "MES · SCADA",
    rows: [
      "ProLeiT · Brewing & Process Automation MES",
      "Ignition · Industrial SCADA & Plant Floor Execution",
    ],
  },
  {
    title: "Supply Chain & Transportation",
    tag: "WMS · TMS · S&OP",
    rows: [
      "Infios · Warehouse Management System (WMS)",
      "MercuryGate · Transportation Management System (TMS)",
      "John Galt Solutions · Atlas Demand Planning & S&OP",
      "1WorldSync · Master Item Data & GDSN Network",
    ],
  },
  {
    title: "Engineering & Asset Lifecycle",
    tag: "PLM · EAM · AEC",
    rows: [
      "Aras · Product Lifecycle Management (PLM)",
      "Brightly Asset Essentials · Enterprise Asset Management (EAM / CMMS)",
      "Procore · Capital Project & Construction Management",
    ],
  },
  {
    title: "CRM & Wholesale Distribution",
    tag: "Route to Market",
    rows: [
      "Salesforce · Enterprise CRM & Sales Cloud",
      "VIP (Vermont Info Processing) · 3-Tier Beverage Distribution & Depletions",
      "NielsenIQ · Syndicated Retail & Market Measurement",
    ],
  },
  {
    title: "DTC Commerce & Point of Sale",
    tag: "Commerce · POS",
    rows: [
      "Commerce7 · Winery & Craft Beverage DTC, Clubs & Tasting Room POS",
      "Shopify · Enterprise Omnichannel eCommerce",
      "Toast · Hospitality, Taproom & Restaurant POS",
    ],
  },
  {
    title: "Data Core & Integration Spine",
    tag: "Data Core",
    rows: [
      "Databricks · Unified Lakehouse & Analytics",
      "Microsoft Fabric · Enterprise Data Fabric",
      "Azure Data Lake · Cloud Data Storage",
      "Boomi & Fivetran · iPaaS & Automated Data Pipelines",
      "Power BI · Executive Reporting & BI",
    ],
  },
] as const;

export default function ApplicationLayerPage() {
  return (
    <PresenceShell>
      <header className="p-section p-section--hire">
        <div className="page-well">
          <p className="p-kicker">The application layer</p>
          <h1 className="p-h1" style={{ maxWidth: "20ch" }}>
            Thirty years inside companies that already run it.
          </h1>
          <p className="p-dek">
            CPG, AEC, wine, sports and entertainment, healthcare. I sit
            alongside the people who already run the work.
          </p>
          <div className="p-lead">
            <p>
              ERP programs fail on people, vendors, SI work, and data. Nobody
              owns the map above them.
            </p>
            <p>
              First port of call is the CFO. The application layer comes down to
              the ERP and the P&amp;L. For most enterprise operators, the WMS,
              MES, and supply chain sit next to it, defending gross margins and
              protecting Operating Income.
            </p>
          </div>
        </div>
      </header>

      <section className="p-section p-section--job">
        <div className="page-well">
          <p className="p-kicker">The Systemverse</p>
          <h2 className="p-h2">Named systems. Customer-side command.</h2>
          <p className="p-prose">
            Dynamics 365 and Business Central deep. Hands-on across the estate.
            I run SAP, Oracle, NetSuite, and JDE from the customer side when
            the mandate requires it.
          </p>
          <div className="command-plate">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/diagrams/system-verse.svg"
              alt="The Systemverse: company-owned data core at the center, systems around it"
            />
            <div className="telemetry-badge">
              <HaloFilm
                src="/media/systemverse-loop.mp4?c=2"
                poster="/media/systemverse-poster.png?c=2"
                label="Systemverse telemetry loop"
                size={80}
              />
              <div>
                <p className="font-vollkorn text-[14px] font-bold text-navy">
                  The estate picture, live
                </p>
                <p className="mt-1 text-[14px] text-[#243345]">
                  Gold routes from the data core to the systems that run the work.
                </p>
              </div>
            </div>
            <p className="mt-4 font-display text-[15.5px] italic text-warm-gray">
              The estate picture: data, applications, workflows, and ownership
              as one view.
            </p>
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">Who I have sat with</p>
          <h2 className="p-h2">Companies that already run it.</h2>
          <div className="portfolio-strip">
            <div className="mb-6 flex flex-wrap items-baseline justify-between gap-3">
              <p className="portfolio-label">Client Portfolio</p>
              <p className="portfolio-sub">
                Past transformations, leadership, and operational delivery
              </p>
            </div>
            {sectors.map((sector) => (
              <div key={sector.title} className="sector-block">
                <p className="sector-title">{sector.title}</p>
                <div className="sector-logos">
                  {sector.logos.map(([file, name]) => (
                    <div key={file} className="logo-card" title={name}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={`/brand/field/operators/${file}`}
                        alt={name}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <p className="portfolio-disclaimer">
              All product names, logos, and brands are property of their
              respective owners and are used for identification purposes only.
              Reference to past clients does not imply endorsement.
            </p>
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">The estate</p>
          <h2 className="p-h2">Named systems I have run.</h2>
          <p className="portfolio-sub">
            Contracts negotiated. Vendors run. Customer-side command.
          </p>
          <div className="estate-grid">
            {estate.map((card) => (
              <article key={card.title} className="estate-card">
                <div className="estate-head">
                  <span>{card.title}</span>
                  <span className="estate-tag">{card.tag}</span>
                </div>
                {card.rows.map((row) => (
                  <p key={row} className="estate-sys">
                    {row}
                  </p>
                ))}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">The Beehive</p>
          <h2 className="p-h2">All companies are uniquely standard.</h2>
          <p className="mt-4 font-vollkorn text-[20px] italic leading-[1.45]">
            Best practice where you are standard. Your sauce where you are not.
            The work is knowing which is which, then carrying people and process
            through the change.
          </p>
          <p className="p-prose">
            Most of the estate should look like a well-run peer. A thin slice
            should not. That slice is what makes the company distinct, and the
            systems have to fit the people and process that carry it.
          </p>
          <div className="command-plate mt-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/diagrams/beehive.svg"
              alt="The Beehive process flow map"
            />
            <p className="mt-3 font-display text-[15.5px] italic text-warm-gray">
              How work actually moves across functions.
            </p>
          </div>

          <p className="mt-10 font-brand text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
            Delivery mechanics
          </p>
          <ul className="mechanics-grid">
            <li className="mechanic-card">
              <p className="font-vollkorn text-[18px] font-bold text-navy">
                Project management
              </p>
              <p className="mt-2 text-[15.5px] leading-[1.6]">
                I hold the roadmap, decisions, timeline, and execution on one
                customer-side rail. Partners deliver into it. The business does
                not rent command.
              </p>
            </li>
            <li className="mechanic-card">
              <p className="font-vollkorn text-[18px] font-bold text-navy">
                Stakeholder management
              </p>
              <p className="mt-2 text-[15.5px] leading-[1.6]">
                I name who decides, who does the work, and who has to live with
                the change. Floor to board, nobody is assumed.
              </p>
            </li>
            <li className="mechanic-card">
              <p className="font-vollkorn text-[18px] font-bold text-navy">
                Change management
              </p>
              <p className="mt-2 text-[15.5px] leading-[1.6]">
                I carry the new way through order, test, train, SOP, UAT, and
                adoption. Go-live is a milestone, not the finish.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section className="p-section" style={{ background: "#F3ECE0" }}>
        <div className="page-well">
          <div className="beat-gold">
            <p className="p-kicker">The transformation</p>
            <h2 className="p-h2">What you get is the transformation.</h2>
            <p className="p-prose">
              This layer, taken through production. Vendors are trades. Someone
              still has to own the build.
            </p>
            <div className="dossier">
              <p className="dossier-entry">
                <strong>Most recent: CIO, Sierra Nevada Brewing (~$420M).</strong>{" "}
                $15M estate transformation on a company-owned data core. Rebuilt
                the IS function.
              </p>
              <p className="dossier-entry">
                <strong>Earlier: CEO/CTO, Timberline.</strong> $250K to $130M.
                Systems that had to hold in the field.
              </p>
              <p className="dossier-entry">
                <strong>Healthcare: HCA Healthcare.</strong> Tebra EMR on that
                estate, including medical-spa work on the same record.
              </p>
              <p className="dossier-entry">
                $350M post-M&amp;A estate in 11 months. Stalled $8M ERP
                recovered. Company ownership preserved.
              </p>
              <p className="dossier-spine">
                30 years · 50+ implementations · 15 full transformations ·
                $100M–$1B operators
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="p-section p-section--close">
        <div className="page-well">
          <h2 className="p-h2">If this layer needs an owner, start there.</h2>
          <div className="mt-8">
            <Link href="/contact/" className="p-btn">
              <span className="p-gold-sq" aria-hidden="true" />
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </PresenceShell>
  );
}
