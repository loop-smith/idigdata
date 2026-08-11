import type { Metadata } from "next";
import Link from "next/link";
import HomeDataGlobe from "@/components/home/HomeDataGlobe";
import Reveal from "@/components/home/Reveal";

export const metadata: Metadata = {
  title: {
    absolute: "Robert Paddock · Transformational CIO/CTO | idigdata",
  },
  description:
    "Digital transformation fails when nobody owns the whole. Customer-side transformation for $100M-$1B operators - 30 years, 50+ implementations, agents in production.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "Robert Paddock · Transformational CIO/CTO | idigdata",
    description:
      "Digital transformation fails when nobody owns the whole. Customer-side transformation for $100M-$1B operators - 30 years, 50+ implementations, agents in production.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata - Transformational CIO/CTO",
      },
    ],
  },
};

const proof = [
  "30 years",
  "50+ implementations",
  "15 enterprise transformations",
  "Agents in production",
] as const;

/** Home = double hook. Motion: data-core globe. Film retired. CX nits 2026-08-10. */
export default function HomePage() {
  return (
    <div className="font-body text-ink">
      <section className="relative isolate overflow-hidden border-b border-navy/10 bg-[linear-gradient(165deg,#0E2138_0%,#142840_42%,#1A334F_100%)] text-porcelain">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 70% 40%, #D4A017 0%, transparent 55%), radial-gradient(circle at 20% 80%, #2A4A6A 0%, transparent 40%)",
          }}
        />
        <div className="relative mx-auto grid max-w-content gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:items-center md:gap-16 md:py-24 lg:py-28">
          <div>
            <p className="font-brand text-[11.5px] font-semibold uppercase tracking-[0.24em] text-gold/90">
              <span className="mr-3 inline-block h-[9px] w-[9px] bg-gold align-baseline" />
              <span className="md:hidden">
                Robert Paddock · Transformational CIO/CTO
              </span>
              <span className="hidden md:inline">
                Robert Paddock · Transformational CIO/CTO · Customer-side
                operator
              </span>
            </p>
            <h1 className="mt-6 max-w-[16ch] font-brand text-[clamp(34px,5.2vw,56px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-porcelain">
              Digital transformation fails when nobody owns the whole.
            </h1>
            <p className="mt-6 max-w-[52ch] text-[17.5px] leading-[1.65] text-porcelain/85 md:text-[18px]">
              I lead customer-side ERP, business systems, and Applied Agentics
              transformations for $100M-$1B operators. From inside the company,
              with the people who run it - built with the business, not done to
              it.
            </p>
            <p className="mt-4 max-w-[52ch] text-[15.5px] leading-[1.6] text-porcelain/65">
              The job is bigger than software: people, workflows, data,
              integrations, vendors, decisions, and adoption as one operating
              whole - warehouse floor to executive suite.
            </p>
            <ul className="mt-8 flex flex-wrap gap-x-5 gap-y-2">
              {proof.map((chip) => (
                <li
                  key={chip}
                  className="font-brand text-[11.5px] font-bold uppercase tracking-[0.12em] text-gold"
                >
                  {chip}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-5">
              <Link
                href="/contact/"
                className="group inline-flex items-center justify-center gap-2 rounded-[3px] bg-gold px-8 py-4 font-brand text-[12.5px] font-bold uppercase tracking-[0.15em] text-navy transition-colors hover:bg-[#FFD84D]"
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
                className="font-brand text-[12.5px] font-bold uppercase tracking-[0.14em] text-porcelain/80 transition-colors hover:text-porcelain"
              >
                See the work →
              </Link>
            </div>
          </div>

          <HomeDataGlobe />
          <script src="/js/home-data-globe.js" defer />
        </div>
      </section>

      <section className="border-t border-navy/10 bg-cream">
        <Reveal className="mx-auto max-w-content px-6 py-14 md:py-16">
          <p className="max-w-[54ch] text-[17.5px] leading-[1.7] text-[#3C4453] md:text-[18px]">
            If your company needs a real transformation owned from inside the
            business, let&apos;s talk.
          </p>
          <p className="mt-5 max-w-[54ch] text-[15.5px] leading-[1.65] text-warm-gray">
            See the field receipts, the operating architecture, and how I run
            the change.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
            <Link
              href="/contact/"
              className="group inline-flex items-center justify-center gap-2 rounded-[3px] bg-gold px-7 py-3.5 font-brand text-[12px] font-bold uppercase tracking-[0.15em] text-navy transition-colors hover:bg-[#FFD84D]"
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
              className="font-brand text-[12px] font-bold uppercase tracking-[0.14em] text-navy hover:text-navy/70"
            >
              See the work →
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
