import Link from "next/link";

type Props = {
  slug: string;
  pairBadge: string;
  title: string;
  hook: string;
  readingTimeMin: number;
  category: string;
};

export default function ArticleCard({
  slug,
  pairBadge,
  title,
  hook,
  readingTimeMin,
  category,
}: Props) {
  return (
    <Link
      href={`/articles/${slug}/`}
      className="group block border border-stone/50 p-6 bg-cream h-full transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_4px_12px_rgba(20,40,64,0.08)]"
    >
      <span className="inline-flex items-center gap-1.5 bg-navy text-cream px-2.5 py-1 font-body font-semibold text-[10.5px] uppercase tracking-section">
        <span aria-hidden className="block w-2 h-2 bg-gold" />
        {pairBadge}
      </span>
      <h3 className="mt-4 font-vollkorn font-semibold text-navy text-[20px] leading-tight tracking-tight">
        {title}
      </h3>
      <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-[10.5px] font-semibold uppercase tracking-[0.18em] text-warm-gray">
        <span>{category}</span>
        <span aria-hidden className="text-stone">·</span>
        <span>{readingTimeMin} min read</span>
        <span aria-hidden className="text-stone">·</span>
        <span>By request</span>
      </div>
      <p className="mt-3 font-body text-ink text-[14px] leading-relaxed">
        {hook}
      </p>
      <p className="mt-5 font-body font-semibold text-navy text-[13.5px]">
        Read summary + request access →
      </p>
    </Link>
  );
}
