import type { Metadata } from "next";
import { notFound } from "next/navigation";
import JsonLdScript from "@/components/analytics/JsonLdScript";
import ArticleLanding from "@/components/ArticleLanding";
import { ARTICLES, getArticleBySlug } from "@/lib/articles";

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
  // OG / search description draws from the public abstract — never the body.
  const description = article.abstract.substring(0, 160);
  return {
    title: article.title,
    description,
    alternates: { canonical: `/articles/${article.slug}/` },
    openGraph: {
      type: "article",
      url: `https://idigdata.com/articles/${article.slug}/`,
      title: article.title,
      description,
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

  // Article object contains only public-safe landing data; body lives
  // server-only at content/articles/*.md (see lib/articles-body.ts).
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
      url: "https://idigdata.com/",
    },
    publisher: {
      "@type": "Organization",
      name: "Data Integration Group",
      url: "https://idigdata.com",
    },
    description: article.abstract,
    url: `https://idigdata.com/articles/${article.slug}/`,
  };

  return (
    <>
      <JsonLdScript data={breadcrumbJsonLd} />
      <JsonLdScript data={articleJsonLd} />
      <ArticleLanding article={article} />
    </>
  );
}
