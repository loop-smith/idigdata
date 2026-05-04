import type { Metadata } from "next";
import Link from "next/link";
import AccentRule from "@/components/AccentRule";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import AtlasVisualization from "@/components/atlas/AtlasVisualization";

export const metadata: Metadata = {
  title: "The transformation atlas — where on the path are you?",
  description:
    "A map of business transformation from start to go-live, marking the moments where Robert Paddock plugs in. Locate your position; see the engagement shape that fits.",
  alternates: { canonical: "/atlas/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/atlas/",
    title: "The transformation atlas — idigdata",
    description:
      "A map of business transformation from start to go-live, marking the moments where Robert Paddock plugs in.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — The transformation atlas",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://idigdata.com/" },
    { "@type": "ListItem", position: 2, name: "Atlas", item: "https://idigdata.com/atlas/" },
  ],
};

export default function AtlasPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="pt-20 pb-8 md:pt-24 md:pb-10">
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
          The transformation atlas
        </h1>
        <p className="mt-4 font-display italic text-stone text-[20px]">
          Where on the path are you?
        </p>
        <p className="mt-6 max-w-[820px] font-body text-ink text-[17px] leading-relaxed">
          A map of business transformation from start to go-live, marking the
          moments where Robert plugs in. Eight phases — pre-contract recon
          through post-engagement — sized by duration. Click a phase to see
          what happens there, the engagement shape that fits, and the trigger
          conditions a reader recognizes from their own organization.
        </p>
      </section>

      <AccentRule className="mt-2" />

      <section className="pt-8 pb-12">
        <AtlasVisualization />
      </section>

      <AccentRule />

      <section className="pt-10 pb-20">
        <h2 className="font-vollkorn font-bold text-navy text-[24px] md:text-[28px] tracking-tight">
          Build belief at depth
        </h2>
        <p className="mt-4 max-w-[760px] font-body text-ink text-[16.5px] leading-relaxed">
          The atlas is a navigation surface. Three pro-level reads carry the
          conviction layer — what business transformation actually is and who
          it's done with, the mechanics of how it gets delivered, and what real
          applied agentics looks like at production scale.
        </p>
        <p className="mt-5">
          <Link
            href="/articles/"
            className="font-body font-semibold text-navy text-[15px] border-b-2 border-gold pb-0.5 hover:text-navy/80"
          >
            Read the articles →
          </Link>
        </p>
      </section>
    </div>
  );
}
