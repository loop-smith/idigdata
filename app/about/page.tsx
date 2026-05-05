import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import RomanMarker from "@/components/RomanMarker";
import AccentRule from "@/components/AccentRule";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: "About Robert Paddock",
  description:
    "Operator. Business system transformationist. Founder, idigdata. Three chapters, one through-line. 30 years and 50+ transformations across construction, manufacturing, distribution, and services.",
  alternates: { canonical: "/about/" },
  openGraph: {
    type: "profile",
    url: "https://idigdata.com/about/",
    title: "About Robert Paddock — idigdata",
    description: "Operator. Business system transformationist. Founder, idigdata.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Client-owned data. Vendor-agnostic architecture. Transformation that institutionalizes.",
      },
    ],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert Paddock",
  jobTitle: "Operator. Business system transformationist. Founder, idigdata.",
  description:
    "Thirty years moving mid-market businesses through systems. Three chapters: Timberline, AccessIT/idigdata, and Sierra Nevada Brewing.",
  url: "https://idigdata.com/about/",
  image: "https://idigdata.com/og-image.png",
  worksFor: {
    "@type": "Organization",
    name: "Data Integration Group",
    url: "https://idigdata.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Nevada, Reno",
  },
  knowsAbout: [
    "Business System Transformation",
    "Enterprise Resource Planning",
    "Applied Agentics",
    "Master Data Management",
    "Operating Model Change",
    "Mid-Market Operations",
  ],
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://idigdata.com/" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://idigdata.com/about/" },
  ],
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      <JsonLdScript data={personJsonLd} />
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
          Robert Paddock
        </h1>
        <p className="mt-5 font-display italic text-stone text-[20px]">
          Operator. Business system transformationist. Founder, idigdata.
        </p>
      </section>

      <section className="pt-4">
        <h2 className="font-body font-bold uppercase tracking-section text-[14px] text-navy border-b border-navy pb-2 mb-8">
          Thirty years, three chapters
        </h2>

        <div className="max-w-[860px] space-y-6 text-[16.5px] text-ink leading-relaxed">
          <p className="font-display italic text-navy">
            After thirty years, I have never once walked into a company where
            systems, common data structures, and processes were defined.
          </p>
          <p>
            That&rsquo;s why this market exists. That&rsquo;s why the new
            model matters. Three chapters, one through-line: commonize the
            master data, own the core, apps and agents plug in. Designed and
            driven. Not handed off with the deck.
          </p>

          <p>
            <RomanMarker num={1} />
            <strong className="font-semibold text-navy">First</strong> — sixteen
            years at Timberline Architectural Openings as CEO and CTO. The
            first business transformation. Grew revenue from $250K in Year 1
            to $130M by Year 10 across US and China operations.
          </p>

          <p>
            <RomanMarker num={2} />
            <strong className="font-semibold text-navy">Second</strong> —
            full-cycle enterprise systems delivery at AccessIT, then a decade
            as principal at idigdata; 50+ ERP implementations across
            construction, manufacturing, distribution, and services.
          </p>

          <p>
            <RomanMarker num={3} />
            <strong className="font-semibold text-navy">Third</strong> — a
            two-year full-scope embedded residency at Sierra Nevada Brewing
            Company. Digital transformation, IT transformation, and
            enterprise agentics framework deployment and adoption.
          </p>
        </div>
      </section>

      <AccentRule className="mt-16" />

      <section className="pt-12 md:pt-16">
        <h2 className="font-body font-bold uppercase tracking-section text-[14px] text-navy border-b border-navy pb-2 mb-8">
          Experience
        </h2>

        <ol className="max-w-[860px] space-y-8">
          <li>
            <p className="font-vollkorn font-bold text-aubergine text-[18px]">
              Chief Information Officer (Contract) &mdash; Sierra Nevada Brewing Company
            </p>
            <p className="font-display italic text-warm-gray text-[14px] mt-0.5">
              Embedded &middot; May 2024 &ndash; April 2026
            </p>
            <ul className="mt-3 space-y-1.5 text-[15.5px] text-ink leading-relaxed list-disc pl-5">
              <li>
                Full senior-leadership scope across the brewery: strategy,
                operations, vendor portfolio, risk, and governance.
              </li>
              <li>
                Digital transformation. Greenfield, data-centric systems
                landscape with sovereign data fabric. D365 Business Central,
                WMS, tier-1 systems treated as replaceable services.
                Vendor-agnostic, no lock-in.
              </li>
              <li>
                IT transformation. Full-scope IT function rebuild. Team,
                operating model, governance, vendor portfolio, change
                management.
              </li>
              <li>
                Built, deployed, and drove adoption of the enterprise agentic
                framework: governance, security, onboarding, operator training.
                Production applications running on it: operational decisioning,
                institutional-knowledge retrieval, document-to-structured-data
                intake, cross-system orchestration, operator decision-support.
              </li>
            </ul>
          </li>

          <li>
            <p className="font-vollkorn font-bold text-aubergine text-[18px]">
              Founder &amp; Principal &mdash; Data Integration Group
            </p>
            <p className="font-display italic text-warm-gray text-[14px] mt-0.5">
              Embedded + Fractional &middot; 2016 &ndash; present
            </p>
            <ul className="mt-3 space-y-1.5 text-[15.5px] text-ink leading-relaxed list-disc pl-5">
              <li>
                50+ full-cycle ERP implementations. The core transformation
                portfolio. Construction, manufacturing, distribution, and
                services.
              </li>
              <li>
                2024 onward: repositioned toward senior-leadership
                transformation engagements, applied agentics advisory, and BOSS
                platform deployment.
              </li>
            </ul>
          </li>

          <li>
            <p className="font-vollkorn font-bold text-aubergine text-[18px]">
              Lead Consultant &middot; Solution Architect &mdash; AccessIT / ContractERP
            </p>
            <p className="font-display italic text-warm-gray text-[14px] mt-0.5">
              Fractional &middot; 2012 &ndash; 2016
            </p>
            <ul className="mt-3 space-y-1.5 text-[15.5px] text-ink leading-relaxed list-disc pl-5">
              <li>
                Full-cycle Dynamics NAV delivery for mid-market operators in
                construction, distribution, manufacturing, and services.
              </li>
              <li>
                Microsoft Dynamics partner with proprietary IP on top of the
                ERP. Delivered for clients and helped build the product.
              </li>
            </ul>
          </li>

          <li>
            <p className="font-vollkorn font-bold text-aubergine text-[18px]">
              CEO &amp; CTO &mdash; Timberline Architectural Openings
            </p>
            <p className="font-display italic text-warm-gray text-[14px] mt-0.5">
              1996 &ndash; 2012
            </p>
            <ul className="mt-3 space-y-1.5 text-[15.5px] text-ink leading-relaxed list-disc pl-5">
              <li>
                Founded and scaled a global
                contractor-manufacturer-distributor of engineered building
                systems. US and China operations. The first full business
                transformation; origin of the practice.
              </li>
              <li>
                Year 1: $250K revenue, 3 staff. Year 10: $130M revenue, 100+
                staff. Built proprietary software systems to drive the
                scale-up. The conceptual origin of BOSS.
              </li>
            </ul>
          </li>

          <li>
            <p className="font-vollkorn font-bold text-aubergine text-[18px]">
              Carpenter &rarr; Multi-Discipline, Multi-Project Manager &mdash; PCD Group
            </p>
            <p className="font-display italic text-warm-gray text-[14px] mt-0.5">
              1986 &ndash; 1996
            </p>
            <ul className="mt-3 space-y-1.5 text-[15.5px] text-ink leading-relaxed list-disc pl-5">
              <li>
                Started on the tools. Hammer-swinger at a family commercial
                design-build contractor; $5M&ndash;$75M projects. Evolved
                across trades into multi-discipline, multi-project management.
                Running crews, vendors, and schedules simultaneously. Where the
                operating-model instinct, and the execution discipline,
                started.
              </li>
            </ul>
          </li>
        </ol>
      </section>

      <section className="pt-20 md:pt-24">
        <h2 className="font-body font-bold uppercase tracking-section text-[14px] text-navy border-b border-navy pb-2 mb-8">
          Studies
        </h2>
        <p className="max-w-[820px] text-[16.5px] text-ink leading-relaxed">
          University of Nevada, Reno
          <span className="text-warm-gray px-2">·</span>
          Computer Science, Economics minor
          <span className="text-warm-gray px-2">·</span>
          jetski world slalom champion
        </p>
      </section>

      <section className="mt-24 mb-16 md:mb-24">
        <div className="text-center px-6 py-12 md:py-16 border-t border-navy">
          <h2 className="font-vollkorn font-bold text-navy text-[28px] md:text-[34px] tracking-tight">
            Get in touch
          </h2>
          <div className="mt-8">
            <Link
              href="/contact/"
              className="inline-block font-body font-semibold text-[16px] px-7 py-3.5 bg-navy text-white hover:bg-navy/90 transition-colors focus:outline-2 focus:outline-stone focus:outline-offset-2"
            >
              Start a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
