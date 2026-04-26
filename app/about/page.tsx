import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: "About Robert",
  description:
    "Operator. Builder. Thirty years. Three chapters, one through-line — commonize the master data, own the core, apps and agents plug in.",
  alternates: {
    canonical: "/about/",
  },
  openGraph: {
    type: "profile",
    url: "https://idigdata.com/about/",
    title: "About Robert Paddock — idigdata",
    description: "Operator. Builder. Thirty years.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Commonize the master data. Own the core. Apps and agents plug in.",
      },
    ],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Robert Paddock",
  jobTitle: "Transformative CIO",
  description:
    "Battle-hardened transformative CIO. Thirty years moving mid-market businesses through systems.",
  url: "https://idigdata.com/about/",
  image: "https://idigdata.com/og-image.png",
  worksFor: {
    "@type": "Organization",
    name: "idigdata, LLC",
    url: "https://idigdata.com",
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "University of Nevada, Reno",
  },
  knowsAbout: [
    "Business Transformation",
    "Enterprise Resource Planning",
    "Agentic AI",
    "Master Data Management",
    "CIO Leadership",
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
      {/* Header */}
      <section className="pt-20 pb-10 md:pt-24 md:pb-14">
        <h1 className="font-display font-medium text-d2-forest text-[36px] md:text-[48px] leading-[1.05] tracking-tight">
          About Robert
        </h1>
        <p className="mt-4 font-display italic text-d2-stone text-[18px]">
          Operator. Builder. Thirty years.
        </p>
      </section>

      {/* Three Chapters */}
      <section className="pt-4">
        <SectionHeader>Three chapters, one through-line</SectionHeader>
        <p className="max-w-[820px] text-[16px] text-d2-ink leading-relaxed">
          Commonize the master data, own the core, apps and agents plug in.
          Designed and driven. Not handed off with the deck.
        </p>

        <ol className="mt-10 max-w-[820px] space-y-8">
          <li>
            <p className="font-display italic text-d2-ink text-[18px] leading-relaxed pl-6 border-l-2 border-d2-forest/20">
              <span className="font-bold not-italic text-d2-forest">First.</span>{" "}
              Sixteen years at Timberline Architectural Openings as CEO and
              CTO. His first business transformation. Grew revenue from $250K
              in Year 1 to $130M by Year 10 across US and China operations.{" "}
              <span className="text-d2-warmgray">
                Built proprietary software systems to drive the scale-up. The
                conceptual origin of BOSS.
              </span>
            </p>
          </li>
          <li>
            <p className="font-display italic text-d2-ink text-[18px] leading-relaxed pl-6 border-l-2 border-d2-forest/20">
              <span className="font-bold not-italic text-d2-forest">
                Second.
              </span>{" "}
              Full-cycle enterprise systems delivery at AccessIT, then a
              decade as principal at idigdata. 50+ ERP implementations across
              construction, manufacturing, distribution, and services.
            </p>
          </li>
          <li>
            <p className="font-display italic text-d2-ink text-[18px] leading-relaxed pl-6 border-l-2 border-d2-forest/20">
              <span className="font-bold not-italic text-d2-forest">
                Third.
              </span>{" "}
              A two-year full-scope CIO residency at Sierra Nevada Brewing
              Company. Digital transformation, IT transformation, and
              enterprise agentics framework deployment and adoption.
            </p>
          </li>
        </ol>
      </section>

      {/* Who I work with */}
      <section className="pt-20 md:pt-24">
        <SectionHeader>Who I work with</SectionHeader>
        <p className="max-w-[820px] text-[16px] text-d2-ink leading-relaxed">
          Mid-market operators in complex industries. PE-backed and
          founder-led. $100M–$750M revenue. CPG and food &amp; beverage,
          specialty manufacturing, distribution and logistics, AEC
          (architecture, engineering, construction), operations-heavy
          services.
        </p>

        <p className="mt-6 max-w-[820px] font-body font-bold text-d2-forest text-[17px] leading-relaxed">
          Leaders who want the data core fixed first. So transformation
          institutionalizes.
        </p>

        <ul className="mt-8 max-w-[820px] space-y-4 text-[16px] text-d2-ink">
          <li className="pl-5 relative">
            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-d2-forest rounded-full" />
            <span className="font-body font-bold text-d2-forest">
              Boards and Private Equity
            </span>{" "}
            hiring an embedded Transformative CIO to run operating-model
            change.
          </li>
          <li className="pl-5 relative">
            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-d2-forest rounded-full" />
            <span className="font-body font-bold text-d2-forest">
              C-Suite executives
            </span>{" "}
            modernizing the business-systems landscape.
          </li>
          <li className="pl-5 relative">
            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-d2-forest rounded-full" />
            <span className="font-body font-bold text-d2-forest">
              Leadership teams
            </span>{" "}
            executing transformation on the ground.
          </li>
          <li className="pl-5 relative">
            <span className="absolute left-0 top-2.5 w-1.5 h-1.5 bg-d2-forest rounded-full" />
            <span className="font-body font-bold text-d2-forest">
              Agentic adoption.
            </span>{" "}
            For all three tiers: strategy at the mandate level, portfolio
            integration at the executive level, deployment past the pilot
            stage in the work.
          </li>
        </ul>
      </section>

      {/* How I plug in */}
      <section className="pt-20 md:pt-24">
        <SectionHeader>How I plug in</SectionHeader>
        <p className="max-w-[820px] text-[16px] text-d2-ink leading-relaxed">
          Pick the intensity. Fractional, part-time, or full embedded. A bench
          if needed: developers, data analysts, system analysts, implementers,
          project managers. The network that rebuilt a national-brand IS
          function, bolted on or placed permanently. Plus a working vendor and
          partner Rolodex. 30 years of vendor and partner relationships across
          ERP, WMS, data, and agentics.
        </p>
      </section>

      {/* Where I'm looking next — blockchain */}
      <section className="pt-20 md:pt-24">
        <SectionHeader>Where I&rsquo;m looking next</SectionHeader>
        <p className="max-w-[820px] text-[16px] text-d2-ink leading-relaxed">
          <span className="text-d2-copper italic">
            The next frontier worth following:
          </span>{" "}
          blockchain as a substrate for trust between businesses that
          don&rsquo;t share a database. Most adoption has been
          speculation-shaped; the operator opportunity is interoperability
          — provenance, contracts, multi-party data exchange. Watching it for
          the same reason agentic AI was worth watching three years before it
          became commercial.
        </p>
      </section>

      {/* Dual CTA */}
      <section className="mt-24 mb-16 md:mb-24">
        <div className="text-center px-6 py-16 md:py-20">
          <h2 className="font-display font-medium text-d2-forest text-[28px] md:text-[36px] leading-tight">
            Two ways to reach me.
          </h2>
          <p className="mt-4 text-d2-ink text-[16px]">
            Both reach me directly.
          </p>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5">
            <a
              href="mailto:robert@idigdata.com"
              className="inline-block font-body font-semibold text-[16px] px-7 py-3.5 bg-d2-forest text-white hover:bg-d2-forest/90 transition-colors focus:outline-2 focus:outline-d2-stone focus:outline-offset-2"
            >
              Email Robert directly
            </a>
            <Link
              href="/contact"
              className="inline-block font-body font-semibold text-[16px] px-7 py-3.5 border border-d2-forest text-d2-forest hover:bg-d2-forest hover:text-white transition-colors focus:outline-2 focus:outline-d2-stone focus:outline-offset-2"
            >
              Or start a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
