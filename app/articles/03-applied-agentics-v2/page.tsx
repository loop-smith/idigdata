import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Applied Agentics — Article 03 v2 (in rework)",
  description:
    "Article 03 v2 in rework. The FDE-vs-FDO distinction; exit-by-design as the positioning lever. Substance lives on /agentics in the meantime.",
  alternates: { canonical: "/articles/03-applied-agentics-v2/" },
};

export default function Article3V2Page() {
  return (
    <div className="font-body bg-cream text-navy">
      <section className="mx-auto max-w-content px-6 pt-20 md:pt-24 pb-12">
        <p className="font-body text-[12px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-6">
          <Link href="/articles/" className="hover:text-navy">
            Articles
          </Link>
          <span aria-hidden className="px-2 text-stone">·</span>
          Article 03 · v2
        </p>
        <h1 className="font-vollkorn font-extrabold text-navy text-[44px] md:text-[64px] leading-[0.98] tracking-[-0.025em] text-balance mb-8 max-w-[900px]">
          Applied <em className="italic font-semibold">agentics.</em>
        </h1>
        <p className="font-vollkorn italic font-medium text-warm-gray text-[18px] md:text-[20px] leading-snug max-w-[720px] border-t border-navy/15 pt-5">
          The FDE-vs-FDO distinction. Why agentic deployments need the
          operator who reads the customer&rsquo;s reality, not just the
          engineer who can ship the code. Exit-by-design as the positioning
          lever.
        </p>
      </section>

      <section className="mx-auto max-w-content px-6 py-12 md:py-16">
        <div className="max-w-[760px] border border-navy/15 bg-paper p-8 md:p-10">
          <p className="font-body text-[11px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-4">
            Publishing soon
          </p>
          <p className="font-vollkorn italic font-semibold text-navy text-[22px] md:text-[24px] leading-snug mb-6">
            Article 03 v2 is in rework. Substance lives on{" "}
            <Link
              href="/agentics/"
              className="border-b border-navy/40 hover:border-navy"
            >
              Applied Agentics
            </Link>{" "}
            in the meantime.
          </p>
          <p className="font-body text-navy text-[16px] leading-[1.65] mb-8">
            Until then: the FDE-vs-FDO distinction, the BOSS platform, and
            the personal substrate the work runs on are all on the Applied
            Agentics page.
          </p>
          <p className="font-body text-[15px]">
            <Link
              href="/agentics/"
              className="font-semibold text-navy border-b border-gold hover:border-navy"
            >
              Applied Agentics →
            </Link>
            <span aria-hidden className="text-stone px-3">·</span>
            <Link
              href="/contact/"
              className="font-semibold text-navy border-b border-gold hover:border-navy"
            >
              Reach out →
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
