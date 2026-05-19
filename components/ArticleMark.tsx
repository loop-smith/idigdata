type Props = {
  slug: string;
  /** Display size in pixels (square). Default 64. */
  size?: number;
  /** Optional Tailwind className for the wrapping element. */
  className?: string;
};

const SLUG_TO_MARK: Record<string, string> = {
  "transformation-and-the-people-of-it": "/brand/articles/article-1-mark.svg",
  "the-mechanics": "/brand/articles/article-2-mark.svg",
  "applied-agentics": "/brand/articles/article-3-mark.svg",
};

export default function ArticleMark({ slug, size = 64, className }: Props) {
  const src = SLUG_TO_MARK[slug];
  if (!src) return null;
  return (
    <img
      src={src}
      alt=""
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    />
  );
}
