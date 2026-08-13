import type { Metadata } from "next";
import Link from "next/link";
import HomeDataGlobe from "@/components/home/HomeDataGlobe";
import Reveal from "@/components/home/Reveal";

export const metadata: Metadata = {
  title: {
    absolute: "Robert Paddock · Transformational CIO/CTO | idigdata",
  },
  description:
    "Digital transformation fails when nobody owns the whole. Protect Operating Income (OI) while the business runs - customer-side transformation for $100M-$1B operators.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "Robert Paddock · Transformational CIO/CTO | idigdata",
    description:
      "Digital transformation fails when nobody owns the whole. Protect Operating Income (OI) while the business runs - customer-side transformation for $100M-$1B operators.",
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
  "50+ implementations",
  "15 enterprise transformations at scale",
  "Agentics in production",
] as const;

/** Home = double hook. Capo LOCK 2026-08-11 — LI About lockstep (pressure + OI + who). */
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
            <p className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 font-brand text-[11.5px] font-semibold uppercase tracking-[0.24em] text-gold">
              {(
                [
                  { label: "Robert Paddock", mobile: true },
                  { label: "Transformational CIO/CTO", mobile: true },
                  { label: "Customer-side operator", mobile: false },
                ] as const
              ).map((part) => (
                <span
                  key={part.label}
                  className={
                    part.mobile
                      ? "inline-flex items-center gap-2 whitespace-nowrap"
                      : "hidden items-center gap-2 whitespace-nowrap md:inline-flex"
                  }
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-[7px] w-[7px] shrink-0 rotate-45 bg-gold shadow-[0_0_14px_rgba(250,204,21,0.75)]"
                  />
                  <span>{part.label}</span>
                </span>
              ))}
            </p>
            <h1 className="mt-6 max-w-[16ch] font-brand text-[clamp(34px,5.2vw,56px)] font-extrabold leading-[1.02] tracking-[-0.02em] text-porcelain">
              Digital transformation fails when nobody owns the whole.
            </h1>
            <p className="mt-6 max-w-[52ch] text-[17.5px] leading-[1.65] text-porcelain/85 md:text-[18px]">
              A company can get the system it asked for and still miss the
              business result. Software can go live while costs, risk,
              workarounds, and dependency move the wrong way. The system is a
              deliverable. The outcome is how the business runs.
            </p>
            <p className="mt-4 max-w-[52ch] text-[15.5px] leading-[1.6] text-porcelain/70">
              I take Operating Income (OI) seriously. Technology should protect
              and enable OI while the business keeps running. People, workflows,
              data, integrations, vendors, decisions, and adoption have to work
              as one operating whole.
            </p>
            <p className="mt-4 max-w-[52ch] text-[15.5px] leading-[1.6] text-porcelain/65">
              I lead customer-side ERP, business systems, and Applied Agentics
              transformations for $100M-$1B operators. I work from inside the
              company, alongside the people who run it, because transformation
              must be built with the business - not done to it.
            </p>
            <ul className="mt-8 flex flex-col items-center gap-y-2.5">
              {proof.map((chip) => (
                <li
                  key={chip}
                  className="inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <span
                    aria-hidden="true"
                    className="inline-block h-[6px] w-[6px] shrink-0 rotate-45 bg-porcelain/55"
                  />
                  <span className="font-brand text-[11.5px] font-bold uppercase tracking-[0.12em] text-gold">
                    {chip}
                  </span>
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
                href="/transformations/"
                className="font-brand text-[12.5px] font-bold uppercase tracking-[0.14em] text-porcelain/80 transition-colors hover:text-porcelain"
              >
                See transformations →
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
              href="/transformations/"
              className="font-brand text-[12px] font-bold uppercase tracking-[0.14em] text-navy hover:text-navy/70"
            >
              See transformations →
            </Link>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
