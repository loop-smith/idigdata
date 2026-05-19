"use client";

import { useState } from "react";
import ArticleCard from "@/components/ArticleCard";
import AccentRule from "@/components/AccentRule";
import ArticlesRequestModal from "@/components/ArticlesRequestModal";
import type { Article } from "@/lib/articles";

type Props = {
  articles: Article[];
};

export default function ArticlesIndexInteractive({ articles }: Props) {
  const [open, setOpen] = useState(false);
  const [prefilledSlug, setPrefilledSlug] = useState<string | undefined>(
    undefined,
  );

  function openFromPrimaryCTA() {
    setPrefilledSlug(undefined);
    setOpen(true);
  }

  function openFromCard(slug: string) {
    setPrefilledSlug(slug);
    setOpen(true);
  }

  return (
    <>
      <div className="mt-8">
        <button
          type="button"
          onClick={openFromPrimaryCTA}
          className="inline-flex items-center gap-2 bg-navy text-cream px-8 py-3.5 rounded-full font-body text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-aubergine transition-colors focus:outline-2 focus:outline-stone focus:outline-offset-2"
        >
          Request access →
        </button>
      </div>

      <AccentRule className="mt-10" />

      <section className="pt-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <ArticleCard
              key={a.slug}
              slug={a.slug}
              pairBadge={a.pairBadge}
              title={a.title}
              hook={a.cardHook}
              readingTimeMin={a.readingTimeMin}
              category={a.category}
              onClick={() => openFromCard(a.slug)}
            />
          ))}
        </div>
      </section>

      <ArticlesRequestModal
        open={open}
        onClose={() => setOpen(false)}
        prefilledSlug={prefilledSlug}
      />
    </>
  );
}
