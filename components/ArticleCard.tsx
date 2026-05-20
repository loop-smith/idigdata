import ArticleMark from "@/components/ArticleMark";

type Props = {
  slug: string;
  pairBadge: string;
  title: string;
  hook: string;
  readingTimeMin: number;
  category: string;
  onClick: () => void;
};

export default function ArticleCard({
  slug,
  pairBadge,
  title,
  hook,
  readingTimeMin,
  category,
  onClick,
}: Props) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`Request access — ${title}`}
      className="group flex h-full min-h-[620px] w-full flex-col text-left border border-stone/50 p-6 bg-cream transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_4px_12px_rgba(20,40,64,0.08)] focus:outline-2 focus:outline-stone focus:outline-offset-2"
    >
      <div className="grid h-20 grid-cols-[minmax(0,1fr)_64px] items-start gap-3">
        <span className="inline-flex w-fit max-w-full items-center gap-1.5 whitespace-nowrap bg-navy text-cream px-2.5 py-1 font-body font-semibold text-[10px] uppercase tracking-[0.1em]">
          <span aria-hidden className="block w-2 h-2 bg-gold" />
          {pairBadge}
        </span>
        <span className="flex h-16 w-16 items-start justify-end">
          <ArticleMark slug={slug} size={64} className="h-16 w-16 object-contain" />
        </span>
      </div>

      <div className="min-h-[136px]">
        <h3 className="font-vollkorn font-semibold text-navy text-[20px] leading-tight tracking-tight">
          {title}
        </h3>
        <div className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 font-body text-[10.5px] font-semibold uppercase tracking-[0.18em] text-warm-gray">
          <span>{category}</span>
          <span aria-hidden className="text-stone">·</span>
          <span>{readingTimeMin} min read</span>
          <span aria-hidden className="text-stone">·</span>
          <span>By request</span>
        </div>
      </div>

      <p className="font-body text-ink text-[14px] leading-relaxed">
        {hook}
      </p>

      <p className="mt-auto pt-8 font-body font-semibold text-navy text-[13.5px]">
        Request access →
      </p>
    </button>
  );
}
