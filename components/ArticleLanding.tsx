import Link from "next/link";
import type { Article } from "@/lib/articles";
import ArticleRequestForm from "./ArticleRequestForm";
import ArticleMark from "./ArticleMark";
import ArchitecturalForkHero from "./article-heroes/ArchitecturalForkHero";
import IntegratedDeliveryHero from "./article-heroes/IntegratedDeliveryHero";
import FrameworkFoundationHero from "./article-heroes/FrameworkFoundationHero";
import BeehiveDiagram from "./article-heroes/BeehiveDiagram";

function HeroByKey({ heroKey }: { heroKey: Article["heroKey"] }) {
  switch (heroKey) {
    case "architectural-fork":
      return <ArchitecturalForkHero />;
    case "integrated-delivery":
      return <IntegratedDeliveryHero />;
    case "framework-foundation":
      return <FrameworkFoundationHero />;
  }
}

type Props = {
  article: Article;
};

export default function ArticleLanding({ article }: Props) {
  const crossLinkCards = (() => {
    const cards: { key: string; href: string | null; badge: string; title: string; description: string }[] = [];

    if (article.crossLinks.substratePair) {
      const [first, second] = article.crossLinks.substratePair;
      cards.push({
        key: first.slug,
        href: `/articles/${first.slug}/`,
        badge: first.badge,
        title: first.title,
        description: first.description,
      });
      cards.push({
        key: second.slug,
        href: `/articles/${second.slug}/`,
        badge: second.badge,
        title: second.title,
        description: second.description,
      });
    } else {
      if (article.crossLinks.companion) {
        const c = article.crossLinks.companion;
        cards.push({
          key: c.slug,
          href: `/articles/${c.slug}/`,
          badge: c.badge,
          title: c.title,
          description: c.description,
        });
      }
      if (article.crossLinks.standalone) {
        const s = article.crossLinks.standalone;
        cards.push({
          key: s.slug,
          href: `/articles/${s.slug}/`,
          badge: s.badge,
          title: s.title,
          description: s.description,
        });
      }
    }

    return cards;
  })();

  return (
    <div className="bg-cream">
      <article className="mx-auto max-w-[760px] px-6 pt-16 md:pt-20 pb-24">
        {/* Article meta strip */}
        <div className="mb-7 flex flex-wrap items-center gap-x-5 gap-y-2 font-body text-[11.5px] uppercase tracking-section text-stone">
          <span className="inline-flex items-center gap-1.5 bg-navy text-cream px-2.5 py-1 font-semibold">
            <span aria-hidden className="block w-2 h-2 bg-gold" />
            {article.pairBadge}
          </span>
          <span>{article.readingTimeMin} min read</span>
          <span>{article.category}</span>
        </div>

        {/* H1 + subtitle + magazine metadata strip + stone rule */}
        <h1 className="font-vollkorn font-semibold text-navy text-[34px] md:text-[44px] leading-[1.13] tracking-[-0.012em]">
          {article.title}
        </h1>
        <p className="mt-3.5 font-display italic text-warm-gray text-[16px]">
          {article.subtitle}
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 font-body text-[10.5px] font-semibold uppercase tracking-[0.18em] text-warm-gray">
          <span>By Robert Paddock</span>
          <span aria-hidden className="text-stone">·</span>
          <span>{article.category}</span>
          <span aria-hidden className="text-stone">·</span>
          <span>{article.readingTimeMin} min read</span>
        </div>
        <hr className="mt-9 mb-11 border-0 border-t-[1.5px] border-stone w-16" />

        {/* Article mark — header band */}
        <div className="flex justify-center mb-11">
          <ArticleMark slug={article.slug} size={96} />
        </div>

        {/* Lede */}
        <p className="text-[18px] md:text-[19px] leading-[1.65] text-ink mb-8">
          {article.lede}
        </p>

        {/* Hero diagram — pannable on mobile, fits container on md+ */}
        <figure className="my-11 -mx-6 md:-mx-10 bg-[#F4F1E9] border-y border-[#D6D0C4] py-7 md:py-8">
          <div className="overflow-x-auto px-6 md:px-10 [-webkit-overflow-scrolling:touch]">
            <div className="min-w-[760px] md:min-w-0">
              <HeroByKey heroKey={article.heroKey} />
            </div>
          </div>
          <figcaption className="sr-only">
            Diagram for {article.title}. Scroll horizontally on smaller screens.
          </figcaption>
        </figure>

        {/* Inline beehive (Article 1 only) */}
        {article.hasInlineBeehive ? (
          <figure className="my-11 -mx-6 md:-mx-10 bg-[#F4F1E9] border-y border-[#D6D0C4] py-7 md:py-8">
            <div className="overflow-x-auto px-6 md:px-10 [-webkit-overflow-scrolling:touch]">
              <div className="min-w-[760px] md:min-w-0">
                <BeehiveDiagram />
              </div>
            </div>
            <p className="mt-5 px-6 md:px-10 text-center font-display italic text-warm-gray text-[13.5px]">
              The beehive — universal frame across mid-market. Population is unique to each engagement.
            </p>
          </figure>
        ) : null}

        {/* Key quote (pull-quote treatment) */}
        <blockquote className="my-9 max-w-[95%] border-l-[3px] border-gold pl-[22px] py-1 font-display italic text-navy text-[20px] md:text-[22px] leading-[1.45]">
          {article.keyQuote}
        </blockquote>

        {/* What you'll learn */}
        <section className="mt-12">
          <h2 className="font-vollkorn font-semibold text-navy text-[24px] md:text-[26px] tracking-tight">
            What you&rsquo;ll learn
          </h2>
          <ul className="mt-5 space-y-3 list-none pl-0">
            {article.whatYoullLearn.map((item, i) => (
              <li
                key={i}
                className="relative pl-6 text-[16.5px] text-ink leading-relaxed"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-[10px] w-2 h-2 bg-gold"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Who this is for */}
        <section className="mt-12">
          <h2 className="font-vollkorn font-semibold text-navy text-[24px] md:text-[26px] tracking-tight">
            Who this is for
          </h2>
          <ul className="mt-5 space-y-3 list-none pl-0">
            {article.whoItsFor.map((item, i) => (
              <li
                key={i}
                className="relative pl-6 text-[16.5px] text-ink leading-relaxed"
              >
                <span
                  aria-hidden
                  className="absolute left-0 top-[10px] w-2 h-2 bg-navy"
                />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Request access */}
        <section className="mt-14 border-t border-stone/40 pt-10">
          <h2 className="font-vollkorn font-semibold text-navy text-[24px] md:text-[26px] tracking-tight">
            Request the full article
          </h2>
          <p className="mt-4 text-[16px] text-ink leading-relaxed">
            The full article is sent to qualified requesters as a PDF. Tell us
            who you are and what brings you. Robert personally reviews each
            request and responds within two business days.
          </p>
          <div className="mt-7">
            <ArticleRequestForm articleSlug={article.slug} />
          </div>
        </section>

        {/* Cross-link footer */}
        <section className="mt-20 pt-9 border-t-[1.5px] border-stone">
          <p className="font-body uppercase tracking-section text-[11.5px] text-stone mb-6">
            {article.crossLinks.substratePair
              ? "The two-lens substrate"
              : "The companion lens · the standalone credential"}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {crossLinkCards.map((card) => (
              <Link
                key={card.key}
                href={card.href ?? "#"}
                className="block bg-[#F4F1E9] border border-[#D6D0C4] px-5 py-5 transition-[border-color,transform] duration-150 hover:border-navy hover:-translate-y-px"
              >
                <span
                  className="block font-body font-semibold text-[11px] uppercase tracking-[0.18em] mb-2 text-gold"
                >
                  {card.badge}
                </span>
                <h3 className="font-vollkorn font-semibold text-navy text-[17px] leading-[1.3] mb-2">
                  {card.title}
                </h3>
                <p className="font-body text-warm-gray text-[13.5px] leading-[1.5]">
                  {card.description}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-14 text-center">
          <Link
            href="/articles/"
            className="font-body text-stone text-[14px] hover:text-navy"
          >
            ← All articles
          </Link>
        </div>
      </article>
    </div>
  );
}
