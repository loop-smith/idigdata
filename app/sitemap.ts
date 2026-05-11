import type { MetadataRoute } from "next";
import { ARTICLES } from "@/lib/articles";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://idigdata.com";
  const lastModified = new Date("2026-05-10");
  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/approach/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/agentics/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/articles/`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    ...ARTICLES.map((a) => ({
      url: `${base}/articles/${a.slug}/`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    { url: `${base}/articles/03-applied-agentics-v2/`, lastModified, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact/`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/faq/`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
