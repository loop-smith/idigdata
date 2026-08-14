import type { ReactNode } from "react";

type ProofFigureProps = {
  src: string;
  alt: string;
  caption: string;
  /** Optional short label above the figure */
  kicker?: string;
  /** Key / legend listed before the image so the figure can be read. */
  legend?: ReactNode;
  /** pan = Field default (wide diagrams). contain = tall figures. measure = copy-column width. inset = slightly inside measure. */
  fit?: "pan" | "contain" | "measure" | "inset";
  /** Seat a dark raster in a navy well with a gold cap. Waves only. */
  plate?: boolean;
};

/**
 * Proof diagram: keeps a readable native width and pans on narrow
 * viewports instead of shrinking labels to fit. Tall figures use contain.
 * Measure fills the Field well (same box as the header).
 */
export default function ProofFigure({
  src,
  alt,
  caption,
  kicker,
  legend,
  fit = "pan",
  plate = false,
}: ProofFigureProps) {
  const pan = fit === "pan";
  const measure = fit === "measure" || fit === "inset";
  const inset = fit === "inset";
  const well = plate
    ? "border border-navy/25 border-t-[3px] border-t-gold bg-navy p-1.5 md:p-2"
    : undefined;

  return (
    <figure className="mt-8">
      {kicker ? (
        <p className="field-measure mb-2 font-brand text-[11.5px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
          {kicker}
        </p>
      ) : null}
      {legend ? <div className="mb-6">{legend}</div> : null}
      {pan ? (
        <div className="-mx-6 overflow-x-auto overscroll-x-contain px-6 md:mx-0 md:overflow-visible md:px-0">
          <div className="w-[720px] md:mx-auto md:w-full md:max-w-none">
            {/* eslint-disable-next-line @next/next/no-img-element -- static SVG proof assets */}
            <img
              src={src}
              alt={alt}
              className="mx-auto h-auto w-[720px] max-w-none select-none md:w-full md:max-w-full"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      ) : measure ? (
        <div className="field-measure">
          <div className={well}>
            {/* eslint-disable-next-line @next/next/no-img-element -- static SVG proof assets */}
            <img
              src={src}
              alt={alt}
              className={`mx-auto block h-auto select-none ${plate || !inset ? "w-full" : "w-[90%]"}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center">
          {/* eslint-disable-next-line @next/next/no-img-element -- static SVG proof assets */}
          <img
            src={src}
            alt={alt}
            className="h-auto max-h-[42rem] w-auto max-w-full select-none"
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
      <figcaption className="field-measure mt-3 font-display text-[15px] italic leading-snug text-warm-gray md:text-[16px]">
        {caption}
      </figcaption>
    </figure>
  );
}
