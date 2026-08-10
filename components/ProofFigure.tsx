type ProofFigureProps = {
  src: string;
  alt: string;
  caption: string;
  /** Optional short label above the figure */
  kicker?: string;
};

/**
 * Full-bleed-within-content proof diagram: scrollable on narrow viewports,
 * no card chrome, figure caption under the asset.
 */
export default function ProofFigure({
  src,
  alt,
  caption,
  kicker,
}: ProofFigureProps) {
  return (
    <figure className="mt-12">
      {kicker ? (
        <p className="mb-4 font-brand text-[11.5px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
          {kicker}
        </p>
      ) : null}
      <div className="-mx-2 overflow-x-auto overscroll-x-contain px-2 sm:mx-0 sm:px-0">
        <div className="mx-auto min-w-[min(100%,520px)] max-w-[720px]">
          {/* eslint-disable-next-line @next/next/no-img-element -- static SVG proof assets */}
          <img
            src={src}
            alt={alt}
            className="h-auto w-full max-w-full select-none"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <figcaption className="mx-auto mt-5 max-w-[62ch] font-display text-[15px] italic leading-snug text-warm-gray md:text-[16px]">
        {caption}
      </figcaption>
    </figure>
  );
}
