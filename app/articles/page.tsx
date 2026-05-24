import type { Metadata } from "next";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import ArticlesIndexInteractive from "@/components/ArticlesIndexInteractive";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles - idigdata",
  description:
    "Gated briefs and diagrams on business-system transformation, delivery mechanics, and applied agentics. Full PDFs are sent on request.",
  alternates: { canonical: "/articles/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/articles/",
    title: "Articles - idigdata",
    description:
      "Gated briefs and diagrams on business-system transformation, delivery mechanics, and applied agentics. Full PDFs are sent on request.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata - Articles",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://idigdata.com/" },
    { "@type": "ListItem", position: 2, name: "Articles", item: "https://idigdata.com/articles/" },
  ],
};

const GATED_DIAGRAMS = [
  {
    title: "System-verse",
    src: "/diagrams/system-verse.svg",
    body: "The architecture view: a sovereign data core with the business systems held in orbit around it.",
  },
  {
    title: "PM Suite",
    src: "/diagrams/pm-suite.svg",
    body: "The delivery view: governance, work modes, validation, and ownership moving through one operating frame.",
  },
  {
    title: "Engagement roadmap",
    src: "/diagrams/engagement-roadmap.svg",
    body: "The time view: transformation and applied agentics moving through staged work toward a business-owned handoff.",
  },
];

export default function ArticlesIndexPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-5">
          Inform layer
        </SectionKicker>
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
          I keep the deeper mechanics here.
        </h1>
        <p className="mt-6 max-w-[760px] font-display italic text-stone text-[18px] leading-snug">
          The main site gives the spine. The article layer holds the maps:
          why business-system change fails, how delivery gets governed, and
          what agentics becomes when it is tied to real operating work.
        </p>
        <p className="mt-4 max-w-[760px] font-body text-warm-gray text-[15px] leading-snug">
          Public summaries stay high-level. Full PDFs are sent on request, with
          the heavy mechanics kept behind a human exchange.
        </p>

        <ArticlesIndexInteractive articles={ARTICLES} />
      </section>

      <section className="pb-20">
        <div className="border-t border-navy/15 pt-10">
          <SectionKicker className="mb-5">
            Gated diagrams
          </SectionKicker>
          <h2 className="font-vollkorn font-semibold text-navy text-[30px] md:text-[38px] leading-tight tracking-tight">
            The visuals that came off Approach live in the article layer.
          </h2>
          <p className="mt-4 max-w-[720px] font-body text-stone text-[15px] leading-relaxed">
            These are the deeper maps I use when the conversation moves from
            public orientation to serious buyer diligence.
          </p>
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            {GATED_DIAGRAMS.map((diagram) => (
              <figure
                key={diagram.src}
                className="border border-stone/40 bg-white p-5"
              >
                <div className="aspect-[4/3] flex items-center justify-center">
                  <img
                    src={diagram.src}
                    alt={`${diagram.title} diagram`}
                    className="max-h-full w-full object-contain"
                  />
                </div>
                <figcaption className="mt-5">
                  <h3 className="font-vollkorn font-semibold text-navy text-[21px] leading-tight">
                    {diagram.title}
                  </h3>
                  <p className="mt-2 font-body text-ink text-[14px] leading-relaxed">
                    {diagram.body}
                  </p>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
