import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ArticleRequestForm from "@/components/ArticleRequestForm";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import { renderInline } from "@/lib/articleRender";
import {
  ARTICLES,
  getArticleBySlug,
  getRelatedArticles,
} from "@/lib/articles";

type RouteParams = { slug: string };

export async function generateStaticParams(): Promise<RouteParams[]> {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<RouteParams> },
): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: "Article not found" };
  }
  return {
    title: article.title,
    description: article.thesis,
    alternates: { canonical: `/articles/${article.slug}/` },
    openGraph: {
      type: "article",
      url: `https://idigdata.com/articles/${article.slug}/`,
      title: article.title,
      description: article.thesis,
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function ArticlePage(
  { params }: { params: Promise<RouteParams> },
) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const related = getRelatedArticles(article.related);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://idigdata.com/" },
      { "@type": "ListItem", position: 2, name: "Articles", item: "https://idigdata.com/articles/" },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `https://idigdata.com/articles/${article.slug}/`,
      },
    ],
  };

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    author: {
      "@type": "Person",
      name: "Robert Paddock",
      url: "https://idigdata.com/about/",
    },
    publisher: {
      "@type": "Organization",
      name: "idigdata, LLC",
      url: "https://idigdata.com",
    },
    description: article.thesis,
    url: `https://idigdata.com/articles/${article.slug}/`,
  };

  return (
    <div className="mx-auto max-w-[760px] px-6">
      <JsonLdScript data={breadcrumbJsonLd} />
      <JsonLdScript data={articleJsonLd} />

      <article className="pt-16 md:pt-20">
        <h1 className="font-vollkorn font-bold text-navy text-[34px] md:text-[44px] leading-[1.1] tracking-tight">
          {article.title}
        </h1>
        <p className="mt-4 font-display italic text-stone text-[15px]">
          By Robert Paddock &middot; idigdata &middot; In peer review
        </p>
        <hr className="mt-8 mb-8 border-0 border-t border-stone/40" />

        <div className="space-y-5">
          {article.opening.map((para, i) => (
            <p
              key={`open-${i}`}
              className="text-[18px] text-ink leading-relaxed"
            >
              {renderInline(para)}
            </p>
          ))}
        </div>

        <div className="mt-10 space-y-10">
          {article.sections.map((section, i) => (
            <section key={`sec-${i}`}>
              <h2 className="font-vollkorn font-bold text-navy text-[24px] md:text-[28px] tracking-tight">
                {section.heading}
              </h2>
              <div className="mt-4 space-y-4">
                {section.paragraphs.map((para, j) => (
                  <p
                    key={`sec-${i}-${j}`}
                    className="text-[16.5px] text-ink leading-relaxed"
                  >
                    {renderInline(para)}
                  </p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="font-vollkorn font-bold text-navy text-[24px] md:text-[28px] tracking-tight">
            Why this matters
          </h2>
          <div className="mt-4 space-y-4">
            {article.closer.map((para, i) => (
              <p
                key={`closer-${i}`}
                className="text-[16.5px] text-ink leading-relaxed"
              >
                {renderInline(para)}
              </p>
            ))}
          </div>
        </div>

        <hr className="mt-12 mb-10 border-0 border-t border-stone/40" />

        <div className="bg-navy/[0.03] border border-stone/40 p-6 md:p-8">
          <h2 className="font-vollkorn font-bold text-navy text-[22px] md:text-[26px] tracking-tight">
            Want the full document?
          </h2>
          <p className="mt-2 text-[15px] text-ink leading-relaxed">
            Layer 1 publishes the frame, the thesis, and why it&rsquo;s hard.
            The full document — mechanism, diagnostic tools, templates — is
            available on request.
          </p>
          <div className="mt-6">
            <ArticleRequestForm articleSlug={article.slug} />
          </div>
        </div>

        {related.length > 0 ? (
          <div className="mt-12">
            <p className="font-body uppercase tracking-section text-[12px] text-stone mb-3">
              Related
            </p>
            <ul className="space-y-2">
              {related.map((r) => (
                <li key={r.slug}>
                  <Link
                    href={`/articles/${r.slug}/`}
                    className="font-body text-navy text-[15px] border-b border-navy/30 hover:border-navy"
                  >
                    {r.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </article>

      <div className="mt-16 mb-20 text-center">
        <Link
          href="/articles/"
          className="font-body text-stone text-[14px] hover:text-navy"
        >
          ← All articles
        </Link>
      </div>
    </div>
  );
}
