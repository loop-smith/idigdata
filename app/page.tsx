import type { Metadata } from "next";
import Link from "next/link";
import Reveal from "@/components/home/Reveal";
import SpineFilm from "@/components/home/SpineFilm";

export const metadata: Metadata = {
  title: {
    absolute: "Robert Paddock · Transformational CIO/CTO | idigdata",
  },
  description:
    "Modernize the core. Put agents into production. Keep the business in control - 30 years, 50+ implementations, a $15M CIO program, and governed agentic AI in production.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "Robert Paddock · Transformational CIO/CTO | idigdata",
    description:
      "Customer-side ownership across people, data, systems, and vendors - with Applied Agentics on the same layer.",
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

const systems = [
  {
    name: "BOSS",
    lead: "A client-owned transformation twin",
  },
  {
    name: "The Rig",
    lead: "A governed build and evidence environment",
  },
  {
    name: "FlowCraft",
    lead: "A human-and-agent workflow runtime",
  },
] as const;

const digReceipts = [
  "$350M post-M&A estate in 11 months - close 18 to 4 days · 30K+ SKUs",
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
              Vendors sell their slice. Platforms provide tools. Forward-deployed
              engineers often replay the SI motion - bill on top, duct tape
              underneath. Nobody owns people, data, systems, delivery, and
              adoption through cutover.{" "}
              <span className="font-semibold text-navy">
                Agentic AI amplifies the gap.
              </span>
            </p>

            <h3 className="mt-10 font-brand text-[13px] font-bold uppercase tracking-[0.18em] text-navy">
              The answer has been built
            </h3>
            <ul className="mt-5 space-y-3">
              {systems.map((s) => (
                <li
                  key={s.name}
                  className="max-w-[62ch] border-l-[3px] border-gold pl-4 text-[17px] leading-[1.55] text-[#3C4453]"
                >
                  <span className="font-semibold text-navy">{s.lead}</span>
                  {" - "}
                  {s.name}
                </li>
              ))}
            </ul>
            <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.65] text-[#3C4453]">
              Built to solve the ownership gap across enterprise transformation
              and production agentics - not three products looking for a problem.
            </p>
            <Link
              href="/work/"
              className="group mt-6 inline-flex items-center gap-2 font-brand text-[12.5px] font-bold uppercase tracking-[0.15em] text-navy transition-colors hover:text-gold"
            >
              See the work
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
              As CIO at Sierra Nevada Brewing (~$420M), led a $15M transformation
              portfolio - business-owned function, company-owned data across 50+
              systems, enterprise agentic systems in production, transferred to
              internal teams.
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
        <Reveal className="mx-auto max-w-content px-6 py-12 md:grid md:grid-cols-[230px_1fr] md:gap-12 md:py-14">
          <p className="mb-5 font-brand text-[11.5px] font-semibold uppercase tracking-[0.24em] text-warm-gray md:mb-0 md:pt-2">
            <GoldSquare className="mr-3 h-[9px] w-[9px]" />
            Provenance
          </p>
          <p className="max-w-[62ch] text-[17px] leading-[1.65] text-[#3C4453]">
            Field project delivery → founder/operator ($250K to $130M) → SI-side
            ERP architect → customer-side transformation → enterprise CIO →
            Applied Agentics builder. One doctrine: the owner holds the whole
            build.
          </p>
        </Reveal>
      </section>

      <section className="border-t border-navy/10 bg-tint">
        <Reveal className="mx-auto max-w-content px-6 py-14 md:grid md:grid-cols-[230px_1fr] md:gap-12 md:py-16">
          <p className="mb-5 font-brand text-[11.5px] font-semibold uppercase tracking-[0.24em] text-warm-gray md:mb-0 md:pt-3">
            <GoldSquare className="mr-3 h-[9px] w-[9px]" />
            How to engage
          </p>
          <div>
            <h2 className="max-w-[18ch] font-brand text-[clamp(30px,4.2vw,46px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-navy">
              Two mandates. One ownership model.
            </h2>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:gap-8">
              <Link
                href="/approach/"
                className="font-brand text-[13px] font-bold uppercase tracking-[0.14em] text-navy transition-colors hover:text-gold"
              >
                Enterprise transformation →
              </Link>
              <Link
                href="/applied-agentics/"
                className="font-brand text-[13px] font-bold uppercase tracking-[0.14em] text-navy transition-colors hover:text-gold"
              >
                Applied Agentics →
              </Link>
            </div>
            <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.65] text-[#3C4453]">
              Core transformation · Transformation recovery · Applied Agentics -
              same embed standard.{" "}
              <Link
                href="/engagement/"
                className="font-semibold text-navy underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
              >
                How I plug in
              </Link>
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
          <p className="font-brand text-[11.5px] font-semibold uppercase tracking-[0.26em] text-gold">
            Operator to operator
          </p>
          <h2 className="mx-auto mt-6 max-w-[18ch] font-brand text-[clamp(32px,4.8vw,56px)] font-extrabold leading-[1.04] tracking-[-0.02em] text-porcelain">
            Bring the real operating problem.
          </h2>
          <p className="mx-auto mt-6 max-w-[52ch] text-[17px] leading-[1.65] text-porcelain/75 md:text-[18px]">
            ERP mess, keep-running constraint, vendor sprawl, or pressure to put
            agents into production without losing control. Permanent or
            fractional - the ownership standard does not change.
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
