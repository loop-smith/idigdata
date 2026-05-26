import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://idigdata.com";
  const lastModified = new Date("2026-05-18");
  return [
    { url: `${base}/`, lastModified, changeFrequency: "monthly", priority: 1.0 },
    { url: `${base}/approach/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/engagement/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/agentics/`, lastModified, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/systems/`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/articles/`, lastModified, changeFrequency: "monthly", priority: 0.85 },
    { url: `${base}/contact/`, lastModified, changeFrequency: "yearly", priority: 0.8 },
    { url: `${base}/faq/`, lastModified, changeFrequency: "monthly", priority: 0.6 },
  ];
}
