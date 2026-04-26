import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  description:
    "Battle-hardened transformative CIO. Thirty years moving mid-market businesses. Commonize the master data, own the core, apps and agents plug in.",
  alternates: {
    canonical: "/",
  },
};

const CAPABILITIES = [
  {
    title: "Business transformation",
    claim:
      "Data-core first. The method that makes transformation institutionalize.",
  },
  {
    title: "Transformative CIO",
    claim:
      "Full CIO scope, embedded. Strategy, operations, vendor portfolio, risk, governance.",
  },
  {
    title: "Agentic adoption",
    claim:
      "Enterprise agentic framework. Five production systems shipped. Not chatbots. Not pilots.",
  },
];

export default function HomePage() {
  return (
    <div className="mx-auto max-w-content px-6">
      {/* Hero */}
      <section className="pt-20 pb-16 md:pt-28 md:pb-24 text-center">
        <h1 className="font-display font-medium text-d2-forest text-[36px] md:text-[56px] leading-[1.05] tracking-tight">
          Battle-hardened transformative CIO.
          <br />
          Thirty years moving mid-market businesses.
        </h1>

        <figure className="mt-12 mx-auto max-w-[820px]">
          <blockquote className="relative font-display italic text-d2-copper text-[22px] md:text-[26px] leading-snug px-10">
            <span
              aria-hidden
              className="font-display text-d2-stone text-[55px] md:text-[65px] leading-none align-top absolute -left-1 -top-3"
            >
              &ldquo;
            </span>
            Commonize the master data. Own the core. Apps and agents plug in.
            <span
              aria-hidden
              className="font-display text-d2-stone text-[55px] md:text-[65px] leading-none align-bottom absolute -right-1 -bottom-3"
            >
              &rdquo;
            </span>
          </blockquote>
        </figure>

        <p className="mt-10 font-body italic text-d2-warmgray text-[13px] max-w-[640px] mx-auto">
          Not a resume. What I can do for you today, grounded in 30 years of
          doing the work.
        </p>
      </section>

      {/* Metrics strip */}
      <section className="py-8 border-y border-d2-forest/20">
        <p className="text-center text-d2-stone text-[13px] uppercase tracking-section">
          &ldquo;All businesses are uniquely standard&rdquo;
          <span aria-hidden className="px-3">
            ·
          </span>
          50+ mid-market transformations
          <span aria-hidden className="px-3">
            ·
          </span>
          Agentic framework at brand scale
        </p>
      </section>

      {/* Capabilities preview */}
      <section className="pt-20 md:pt-24">
        <SectionHeader>Capabilities</SectionHeader>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {CAPABILITIES.map((cap) => (
            <div
              key={cap.title}
              className="flex flex-col border-t border-d2-forest pt-6"
            >
              <h3 className="font-display font-bold text-d2-forest text-[20px] leading-tight">
                {cap.title}
              </h3>
              <p className="mt-4 font-body text-d2-ink text-[16px] leading-snug">
                {cap.claim}
              </p>
              <p className="mt-6">
                <Link
                  href="/capabilities"
                  className="font-body font-semibold text-d2-forest text-[15px] hover:underline"
                >
                  Learn more →
                </Link>
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Dual CTA */}
      <section className="mt-24 mb-16 md:mb-24">
        <div className="text-center px-6 py-16 md:py-20">
          <h2 className="font-display font-medium text-d2-forest text-[28px] md:text-[36px] leading-tight">
            Two ways to reach me.
          </h2>
          <p className="mt-4 text-d2-ink text-[16px]">
            Both reach me directly.
          </p>
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-5">
            <a
              href="mailto:robert@idigdata.com"
              className="inline-block font-body font-semibold text-[16px] px-7 py-3.5 bg-d2-forest text-white hover:bg-d2-forest/90 transition-colors focus:outline-2 focus:outline-d2-stone focus:outline-offset-2"
            >
              Email Robert directly
            </a>
            <Link
              href="/contact"
              className="inline-block font-body font-semibold text-[16px] px-7 py-3.5 border border-d2-forest text-d2-forest hover:bg-d2-forest hover:text-white transition-colors focus:outline-2 focus:outline-d2-stone focus:outline-offset-2"
            >
              Or start a conversation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
