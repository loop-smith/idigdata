import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  thesis: string;
  readingMinutes?: number;
};

export default function ArticleCard({ slug, title, thesis, readingMinutes }: Props) {
  return (
    <Link
      href={`/articles/${slug}/`}
      className="group block border border-stone/50 p-6 bg-cream h-full transition-all duration-200 ease-out hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_4px_12px_rgba(20,40,64,0.08)]"
    >
      <h3 className="font-display font-bold text-navy text-[20px] leading-tight tracking-tight group-hover:text-navy">
        {title}
      </h3>
      <p className="mt-3 font-body text-ink text-[15px] leading-relaxed">
        {thesis}
      </p>
      <div className="mt-5 flex items-center justify-between">
        <p className="font-body font-semibold text-navy text-[14px]">
          Read article →
        </p>
        {readingMinutes ? (
          <p className="font-body italic text-stone text-[12px]">
            {readingMinutes} min read
          </p>
        ) : null}
      </div>
    </Link>
  );
}
