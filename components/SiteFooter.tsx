import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="mt-24">
      <div className="mx-auto max-w-content px-6">
        <hr className="border-0 border-t border-d2-forest" />
        <div className="py-10 text-center space-y-4">
          <p className="font-display font-medium text-d2-forest text-[20px]">
            Two ways to reach me.
          </p>
          <p className="text-[15px] text-d2-ink">
            <a
              href="mailto:robert@idigdata.com"
              className="font-body font-semibold text-d2-forest border-b border-d2-forest/60 hover:border-d2-forest pb-0.5"
            >
              robert@idigdata.com
            </a>
            <span aria-hidden className="text-d2-stone px-3">
              ‖
            </span>
            <Link
              href="/contact"
              className="font-body font-semibold text-d2-forest border-b border-d2-forest/60 hover:border-d2-forest pb-0.5"
            >
              Start a conversation
            </Link>
          </p>
          <p className="text-d2-stone text-[13px] leading-relaxed">
            idigdata, LLC
            <span className="px-2">·</span>
            est. 2016
            <span className="px-2">·</span>
            Reno, NV
            <span className="px-2">·</span>
            STUDIES: University of Nevada, Reno
            <span className="px-2">·</span>
            Computer Science, Finance minor
            <span className="px-2">·</span>
            jetski world slalom champion
          </p>
          {/* LinkedIn slot — empty until 2026-05-04 reactivation */}
          {/* BOSS repo slot — empty until external rename lands */}
        </div>
      </div>
    </footer>
  );
}
