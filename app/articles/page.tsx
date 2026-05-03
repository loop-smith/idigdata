import type { Metadata } from "next";
import ArticleCard from "@/components/ArticleCard";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import { ARTICLES } from "@/lib/articles";

export const metadata: Metadata = {
  title: "Peer-reviewed articles",
  description:
    "Six articles authored from 30 years of operator practice. The architectural fork, integrated delivery, the vendor-partner trap, agile-fall, the six constellations, the beehive.",
  alternates: { canonical: "/articles/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/articles/",
    title: "Peer-reviewed articles — idigdata",
    description: "Six articles authored from 30 years of operator practice.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Peer-reviewed articles",
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
          Peer-reviewed articles
        </h1>
        <p className="mt-5 max-w-[820px] font-display italic text-stone text-[18px] leading-snug">
          Six articles authored from 30 years of operator practice. In peer
          review.
        </p>
      </section>

      <section className="pt-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((a) => (
            <ArticleCard
              key={a.slug}
              slug={a.slug}
              title={a.title}
              thesis={a.thesis}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
