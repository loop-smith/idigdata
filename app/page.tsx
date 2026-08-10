import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/home/Reveal";
import SpineFilm from "@/components/home/SpineFilm";

export const metadata: Metadata = {
  title: {
    absolute: "Robert Paddock · Transformational CIO/CTO | idigdata",
  },
  description:
    "Digital change fails when nobody owns the whole. Customer-side transformation for $100M-$1B operators - 30 years, 50+ implementations, agents in production.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "Robert Paddock · Transformational CIO/CTO | idigdata",
    description:
      "Digital change fails when nobody owns the whole. Customer-side transformation for $100M-$1B operators - 30 years, 50+ implementations, agents in production.",
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

function GoldSquare({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-block bg-gold align-baseline ${className}`}
    />
  );
}

const digReceipts = [
  "$350M post-M&A estate in 11 months - close 18→4 days · 30K+ SKUs",
  "Stalled $8M ERP recovered - client-owned API bridge registered as IP",
  "$8M-$10M vendor ask delivered for under $2M - company ownership preserved",
] as const;

export default function HomePage() {
  return (
    <div className="font-body text-ink">
      <SpineFilm />

      <section className="border-t border-navy/10 bg-cream">
        <Reveal className="mx-auto max-w-content px-6 py-14 md:grid md:grid-cols-[230px_1fr] md:gap-12 md:py-20">
          <p className="mb-5 font-brand text-[11.5px] font-semibold uppercase tracking-[0.24em] text-warm-gray md:mb-0 md:pt-3">
            <GoldSquare className="mr-3 h-[9px] w-[9px]" />
            The ownership gap
          </p>
          <div>
            <h2 className="max-w-[18ch] font-brand text-[clamp(30px,4.2vw,46px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-navy">
              Same problem. Faster consequences.
            </h2>
            <p className="mt-6 max-w-[62ch] text-[17.5px] leading-[1.7] text-[#3C4453]">
              Vendors sell their slice. Platforms provide tools. The business
              still needs one customer-side owner across people, data, systems,
              delivery, and adoption through cutover.{" "}
              <span className="font-semibold text-navy">
                Agentic AI amplifies the gap - it does not invent a second
                product.
              </span>
            </p>
            <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.65] text-[#3C4453]">
              I fit the foundation to proven standard and protect what makes the
              company unique.
            </p>
            <Link
              href="/method/"
              className="group mt-6 inline-flex items-center gap-2 font-brand text-[12.5px] font-bold uppercase tracking-[0.15em] text-navy transition-colors hover:text-navy/70"
            >
              How I work
              <span
                aria-hidden="true"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                →
              </span>
            </Link>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-navy/10 bg-tint">
        <Reveal className="mx-auto max-w-content px-6 py-14 md:grid md:grid-cols-[230px_1fr] md:gap-12 md:py-20">
          <p className="mb-5 font-brand text-[11.5px] font-semibold uppercase tracking-[0.24em] text-warm-gray md:mb-0 md:pt-3">
            <GoldSquare className="mr-3 h-[9px] w-[9px]" />
            Field validation
          </p>
          <div>
            <h2 className="max-w-[20ch] font-brand text-[clamp(30px,4.2vw,46px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-navy">
              Proven inside the operating company.
            </h2>
            <p className="mt-6 max-w-[62ch] text-[17.5px] leading-[1.7] text-[#3C4453]">
              As CIO at Sierra Nevada Brewing (~$420M), I led a $15M
              transformation portfolio - consolidated siloed technology into a
              business-owned function, established company-owned data across 50+
              systems, put enterprise agentic systems into production, and
              transferred the capability to internal teams.
            </p>
            <ul className="mt-8 space-y-3">
              {digReceipts.map((line) => (
                <li
                  key={line}
                  className="max-w-[62ch] border-l-[3px] border-gold pl-4 text-[16px] leading-[1.55] text-[#3C4453]"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </section>

      <section className="border-t border-navy/10 bg-cream">
        <Reveal className="mx-auto max-w-content px-6 py-14 md:grid md:grid-cols-[230px_1fr] md:gap-12 md:py-16">
          <p className="mb-5 font-brand text-[11.5px] font-semibold uppercase tracking-[0.24em] text-warm-gray md:mb-0 md:pt-3">
            <GoldSquare className="mr-3 h-[9px] w-[9px]" />
            The work I want
          </p>
          <div>
            <h2 className="max-w-[22ch] font-brand text-[clamp(30px,4.2vw,46px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-navy">
              That is the work I want next.
            </h2>
            <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.65] text-[#3C4453]">
              Owning a real transformation from inside the company, with the
              people who do the work - landing Applied Agentics where it earns,
              transferring the capability, and leaving you running what we
              build.
            </p>
            <p className="mt-4 max-w-[62ch] text-[16px] leading-[1.65] text-[#3C4453]">
              Core transformation · Transformation recovery · Applied Agentics
              nested on the same seat
            </p>
          </div>
        </Reveal>
      </section>

      <section
        id="contact"
        className="grain relative isolate overflow-hidden bg-[linear-gradient(180deg,#142840_0%,#0E2138_100%)] text-porcelain"
      >
        <Reveal className="mx-auto max-w-content px-6 py-20 text-center md:py-24">
          <div aria-hidden="true" className="mx-auto mb-8 h-[3px] w-16 bg-gold" />
          <h2 className="mx-auto max-w-[18ch] font-brand text-[clamp(32px,4.8vw,56px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-porcelain">
            Bring the real operating problem.
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-[17px] leading-[1.65] text-porcelain/75 md:text-[18px]">
            If your company needs someone to own a real transformation from the
            inside, let&apos;s talk.
          </p>
          <Link
            href="/contact/"
            className="group mt-10 inline-flex items-center justify-center gap-2 rounded-[3px] bg-gold px-8 py-4 font-brand text-[12.5px] font-bold uppercase tracking-[0.15em] text-navy transition-colors hover:bg-[#FFD84D]"
          >
            Start a conversation
            <span
              aria-hidden="true"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              →
            </span>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
