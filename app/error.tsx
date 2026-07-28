"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("app error boundary:", error.digest ?? error.message);
  }, [error]);

  return (
    <div className="mx-auto max-w-content px-6 py-24">
      <p className="font-brand text-[11px] font-semibold uppercase tracking-[0.24em] text-stone">
        Error
      </p>
      <h1 className="mt-3 font-display text-[36px] font-medium leading-tight text-navy md:text-[44px]">
        Something failed on this page.
      </h1>
      <p className="mt-4 max-w-xl font-body text-[17px] leading-relaxed text-warm-gray">
        The failure is on our side, not yours. Try again, or use a known route.
      </p>
      {error.digest ? (
        <p className="mt-3 font-mono text-[12px] text-stone">Ref {error.digest}</p>
      ) : null}
      <div className="mt-8 flex flex-wrap gap-3">
        <button
          type="button"
          onClick={reset}
          className="inline-flex h-11 items-center bg-navy px-5 font-body text-[15px] font-semibold text-porcelain hover:bg-navy-deep"
        >
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex h-11 items-center border border-stone/50 px-5 font-body text-[15px] font-semibold text-ink hover:border-navy"
        >
          Home
        </Link>
      </div>
    </div>
  );
}
