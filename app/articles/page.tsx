import type { Metadata } from "next";
import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import AccentRule from "@/components/AccentRule";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Articles — idigdata",
  description:
    "Three reads from the practice on what business transformation actually is, how it gets delivered, and what real applied agentics looks like at production scale. Sent to qualified requesters by request.",
  alternates: { canonical: "/articles/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/articles/",
    title: "Articles — idigdata · Forward-Deployed Operator",
    description:
      "Three reads from the practice on what business transformation actually is, how it gets delivered, and what real applied agentics looks like at production scale. Sent to qualified requesters by request.",
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

function firstSentence(text: string): string {
  const match = text.match(/^.*?[.!?](?=\s|$)/);
  return match ? match[0] : text;
}

export default function ArticlesIndexPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="pt-20 pb-10 md:pt-24 md:pb-14">
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
          Articles
        </h1>
        <p className="mt-6 max-w-[760px] font-display italic text-stone text-[18px] leading-snug">
          Three reads from the practice on what business transformation
          actually is, how it gets delivered, and what real applied agentics
          looks like at production scale. Articles are sent to qualified
          requesters by request — not posted publicly. Read the summary; if
          the substance is what you need, request access. Locate where on the
          path you fit on the{" "}
          <Link
            href="/approach/#engagement-roadmap"
            className="not-italic font-body text-navy border-b border-navy/40 hover:border-navy"
          >
            engagement roadmap
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
              pairBadge={a.pairBadge}
              title={a.title}
              hook={firstSentence(a.abstract)}
              readingTimeMin={a.readingTimeMin}
              category={a.category}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
