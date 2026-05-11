import "server-only";
import fs from "fs";
import path from "path";

// Default points at the in-repo content dir so production builds are
// self-contained. Override via env var for local dev against the k2s source.
const ARTICLE_BODY_PATH =
  process.env.IDIGDATA_ARTICLES_PATH ||
  path.join(process.cwd(), "content", "articles");

const SLUG_TO_FILE: Record<string, string> = {
  "transformation-and-the-people-of-it":
    "01-transformation-and-the-people-of-it.md",
  "the-mechanics": "02-the-mechanics.md",
  "applied-agentics": "03-applied-agentics.md",
};

export function getArticleBody(slug: string): string {
  const file = SLUG_TO_FILE[slug];
  if (!file) throw new Error(`Unknown article slug: ${slug}`);
  return fs.readFileSync(path.join(ARTICLE_BODY_PATH, file), "utf-8");
}
