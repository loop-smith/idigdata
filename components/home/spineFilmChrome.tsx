"use client";

import Link from "next/link";
import type { CSSProperties } from "react";
import { BEATS } from "./spineFilmBeats";

export function BeatPanel({ beat }: { beat: number }) {
  const b = BEATS[Math.max(0, Math.min(BEATS.length, beat) - 1)] ?? BEATS[0];
  return (
    <div
      className="beat-panel mt-7 border-t border-porcelain/20 pt-5"
      aria-live="polite"
    >
      <p className="font-brand text-[11px] font-bold uppercase tracking-[0.22em] text-gold">
        {b.n} / 06 · {b.chip}
      </p>
      <h2 className="mt-2 font-brand text-[clamp(22px,2.2vw,28px)] font-extrabold leading-[1.1] tracking-[-0.02em] text-porcelain">
        {b.label}
      </h2>
      <p className="mt-2.5 max-w-[42ch] text-[15px] leading-[1.5] text-porcelain/80 md:text-[15.5px] md:leading-[1.55]">
        {b.line}
      </p>
    </div>
  );
}

function GoldSquare({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-gold align-baseline ${className}`}
    />
  );
}

export function HeroCopy({ withRise = true }: { withRise?: boolean }) {
  const rise = (n: number) =>
    withRise
      ? {
          className: "hero-rise ",
          style: { "--rise": n } as CSSProperties,
        }
      : { className: "", style: undefined };

  const r0 = rise(0);
  const r1 = rise(1);
  const r2 = rise(2);
  const r3 = rise(3);
  const r4 = rise(4);

  return (
    <>
      <p
        className={`${r0.className}font-brand text-[10.5px] font-semibold uppercase tracking-[0.22em] text-gold md:text-[11px] md:tracking-[0.24em]`}
        style={r0.style}
      >
        <span className="md:hidden">
          Robert Paddock · Transformational CIO/CTO
        </span>
        <span className="hidden md:inline">
          Robert Paddock · Transformational CIO/CTO · Customer-side operator
        </span>
      </p>
      <h1
        className={`${r1.className}mt-3 max-w-[22ch] font-brand text-[clamp(30px,3.4vw,48px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-porcelain`}
        style={r1.style}
      >
        Modernize the core. Put agents into production. Keep the business in
        control.
      </h1>
      <p
        className={`${r2.className}hero-dek mt-3 max-w-[48ch] text-[15px] leading-[1.5] text-porcelain/80 md:mt-3.5 md:text-[15.5px] md:leading-[1.55]`}
        style={r2.style}
      >
        Enterprise systems fail when no one owns the whole business system above
        the vendors. I embed with $100M-$1B operators as that customer-side
        owner - backed by 30 years, 50+ implementations, 15 transformations at
        scale, and enterprise agents in production.
      </p>
      <p
        className={`${r3.className}mt-3.5 flex flex-wrap items-baseline gap-x-3 gap-y-1.5 font-brand text-[11px] font-semibold uppercase tracking-[0.14em] text-porcelain/70 md:text-[11.5px]`}
        style={r3.style}
      >
        {(
          [
            "30 years",
            "50+ implementations",
            "15 enterprise transformations",
            "Agentic AI in production",
          ] as const
        ).map((item, i) => (
          <span key={item} className="flex items-baseline gap-x-3 whitespace-nowrap">
            {i > 0 && <GoldSquare className="h-[5px] w-[5px] self-center" />}
            <span>{item}</span>
          </span>
        ))}
      </p>
      <div
        className={`${r4.className}mt-4 flex flex-col gap-2.5 sm:flex-row sm:flex-wrap md:mt-5`}
        style={r4.style}
      >
        <Link
          href="/contact/"
          className="group inline-flex items-center justify-center gap-2 rounded-[3px] bg-gold px-6 py-3.5 font-brand text-[12px] font-bold uppercase tracking-[0.15em] text-navy transition-colors hover:bg-[#FFD84D]"
        >
          Start a conversation
          <span
            aria-hidden="true"
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            →
          </span>
        </Link>
        <Link
          href="/work/"
          className="inline-flex items-center justify-center rounded-[3px] border border-porcelain/30 px-6 py-3.5 font-brand text-[12px] font-bold uppercase tracking-[0.15em] text-porcelain transition-colors hover:border-gold hover:text-gold"
        >
          See the work
        </Link>
      </div>
    </>
  );
}
