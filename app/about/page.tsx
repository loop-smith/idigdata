import type { Metadata } from "next";
import Link from "next/link";
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
    name: "idigdata, LLC",
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

      <section className="pt-20 pb-10 md:pt-24 md:pb-14">
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
            <strong className="font-semibold text-navy">First</strong> — sixteen
            years at Timberline Architectural Openings as CEO and CTO. The
            first business transformation. Grew revenue from $250K in Year 1
            to $130M by Year 10 across US and China operations.
          </p>

          <p>
            <strong className="font-semibold text-navy">Second</strong> —
            full-cycle enterprise systems delivery at AccessIT, then a decade
            as principal at idigdata; 50+ ERP implementations across
            construction, manufacturing, distribution, and services.
          </p>

          <p>
            <strong className="font-semibold text-navy">Third</strong> — a
            two-year full-scope embedded residency at Sierra Nevada Brewing
            Company. Digital transformation, IT transformation, and
            enterprise agentics framework deployment and adoption.
          </p>
        </div>
      </section>

      <section className="pt-20 md:pt-24">
        <h2 className="font-body font-bold uppercase tracking-section text-[14px] text-navy border-b border-navy pb-2 mb-8">
          Experience
        </h2>

        <ol className="max-w-[860px] space-y-8">
          <li>
            <p className="font-vollkorn font-bold text-navy text-[18px]">
              Sierra Nevada Brewing Company &mdash; Contract CIO
            </p>
            <p className="font-body text-stone text-[14px] mt-0.5">
              2024 &ndash; 2025 (two-year residency)
            </p>
            <ul className="mt-3 space-y-1.5 text-[15.5px] text-ink leading-relaxed list-disc pl-5">
              <li>Full-scope embedded executive contractor.</li>
              <li>Digital transformation, IT transformation.</li>
              <li>Enterprise agentics framework deployment and adoption.</li>
            </ul>
          </li>

          <li>
            <p className="font-vollkorn font-bold text-navy text-[18px]">
              idigdata &mdash; Founder &amp; Principal
            </p>
            <p className="font-body text-stone text-[14px] mt-0.5">
              2016 &ndash; present
            </p>
            <ul className="mt-3 space-y-1.5 text-[15.5px] text-ink leading-relaxed list-disc pl-5">
              <li>
                Mid-market business system transformation across construction,
                manufacturing, distribution, and services.
              </li>
              <li>BOSS — Business Operating System Suite — productized.</li>
              <li>
                Common Data Model, integrated delivery discipline, applied
                agentics framework.
              </li>
            </ul>
          </li>

          <li>
            <p className="font-vollkorn font-bold text-navy text-[18px]">
              AccessIT &mdash; Lead Consultant
            </p>
            <p className="font-body text-stone text-[14px] mt-0.5">
              prior to idigdata
            </p>
            <ul className="mt-3 space-y-1.5 text-[15.5px] text-ink leading-relaxed list-disc pl-5">
              <li>Full-cycle enterprise systems delivery.</li>
              <li>50+ ERP implementations across multiple industries.</li>
            </ul>
          </li>

          <li>
            <p className="font-vollkorn font-bold text-navy text-[18px]">
              Timberline Architectural Openings &mdash; CEO &amp; CTO
            </p>
            <p className="font-body text-stone text-[14px] mt-0.5">
              sixteen years
            </p>
            <ul className="mt-3 space-y-1.5 text-[15.5px] text-ink leading-relaxed list-disc pl-5">
              <li>
                First business transformation. Grew revenue from $250K in Year 1
                to $130M by Year 10.
              </li>
              <li>
                US and China operations. Built proprietary software systems to
                drive the scale-up — the conceptual origin of BOSS.
              </li>
            </ul>
          </li>

          <li>
            <p className="font-vollkorn font-bold text-navy text-[18px]">
              PCD Group &mdash; Carpenter to Multi-PM
            </p>
            <p className="font-body text-stone text-[14px] mt-0.5">
              early career
            </p>
            <ul className="mt-3 space-y-1.5 text-[15.5px] text-ink leading-relaxed list-disc pl-5">
              <li>
                Field operator origin. Carpenter, then estimator, then PM, then
                multi-PM.
              </li>
              <li>
                Foundation in physical operations and the discipline of
                projects-on-the-ground.
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
