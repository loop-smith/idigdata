import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import AccentRule from "@/components/AccentRule";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles",
  description:
    "Three pro-level reads on what business transformation actually is, how it gets delivered, and what real applied agentics looks like at production scale.",
  alternates: { canonical: "/articles/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/articles/",
    title: "Articles — idigdata",
    description:
      "Three pro-level reads on what business transformation actually is, how it gets delivered, and what real applied agentics looks like at production scale.",
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

      <section className="pt-20 pb-10 md:pt-24 md:pb-14">
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
          Articles
        </h1>
        <p className="mt-6 max-w-[760px] font-display italic text-stone text-[18px] leading-snug">
          Three pro-level reads on what business transformation actually is, how
          it gets delivered, and what real applied agentics looks like at
          production scale. Build belief at depth, then locate where on the
          path you fit on the{" "}
          <Link
            href="/atlas/"
            className="not-italic font-body text-navy border-b border-navy/40 hover:border-navy"
          >
            atlas
          </Link>
          .
        </p>
      </section>

      <AccentRule className="mt-2" />

      <section className="pt-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((a) => (
            <ArticleCard
              key={a.slug}
              slug={a.slug}
              title={a.title}
              thesis={a.thesis}
              readingMinutes={a.readingMinutes}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
