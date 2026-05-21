import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import ArticlesIndexInteractive from "@/components/ArticlesIndexInteractive";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles — idigdata",
  description:
    "Three gated briefs on transformation as an operator-owned asset — why buying fails, how the build holds, and what agentics becomes when the substrate is real. Sent on request.",
  alternates: { canonical: "/articles/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/articles/",
    title: "Articles — idigdata",
    description:
      "Three gated briefs on transformation as an operator-owned asset — why buying fails, how the build holds, and what agentics becomes when the substrate is real. Sent on request.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Articles",
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

export default function ArticlesIndexPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative pt-20 pb-10 md:pt-24 md:pb-14">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-5">
          Field notes
        </SectionKicker>
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
          Articles
        </h1>
        <p className="mt-6 max-w-[760px] font-display italic text-stone text-[18px] leading-snug">
          Three gated briefs on transformation as an operator-owned asset: why
          buying fails, how the build holds, and what agentics becomes when the
          substrate is real.
        </p>
        <p className="mt-4 max-w-[760px] font-body text-warm-gray text-[15px] leading-snug">
          Public summaries stay high-level. Full PDFs are sent on request.
        </p>
        <p className="mt-4 max-w-[760px] font-body text-warm-gray text-[15px] leading-snug">
          Locate where on the path you fit on the{" "}
          <Link
            href="/engagement/"
            className="text-navy border-b border-navy/40 hover:border-navy"
          >
            engagement roadmap
          </Link>
          .
        </p>

        <ArticlesIndexInteractive articles={ARTICLES} />
      </section>
    </div>
  );
}
