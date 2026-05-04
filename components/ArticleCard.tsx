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
      <p className="mt-3 font-body text-ink text-[15px] leading-relaxed">
        {hook}
      </p>
      <div className="mt-5 flex items-center justify-between">
        <p className="font-body font-semibold text-navy text-[13.5px]">
          Read summary + request access →
        </p>
        <p className="font-body italic text-stone text-[12px]">
          {readingTimeMin} min · {category}
        </p>
      </div>
    </Link>
  );
}
