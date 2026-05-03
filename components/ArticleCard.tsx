import Link from "next/link";

type Props = {
  slug: string;
  title: string;
  thesis: string;
};

export default function ArticleCard({ slug, title, thesis }: Props) {
  return (
    <Link
      href={`/articles/${slug}/`}
      className="group block border border-stone/50 hover:border-gold p-6 transition-colors bg-white h-full"
    >
      <h3 className="font-display font-bold text-navy text-[20px] leading-tight tracking-tight group-hover:text-navy">
        {title}
      </h3>
      <p className="mt-3 font-body text-ink text-[15px] leading-relaxed">
        {thesis}
      </p>
      <p className="mt-5 font-body font-semibold text-navy text-[14px]">
        Read article →
      </p>
    </Link>
  );
}
