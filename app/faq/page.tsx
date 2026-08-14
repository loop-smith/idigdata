import type { Metadata } from "next";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Fit, non-fit, what you hire, and what the company keeps - Robert Paddock / idigdata.",
  alternates: { canonical: "/faq/" },
  openGraph: {
    type: "website",
    url: "/faq/",
    title: "FAQ | idigdata",
    description:
      "Fit, non-fit, what you hire, and what the company keeps - Robert Paddock / idigdata.",
  },
};

type QA = { q: string; a: string; aHtml?: React.ReactNode };

const FAQ: QA[] = [
  {
    q: "Who is the fit?",
    a: "$100M-$1B operators. CPG and AEC first, plus manufacturing, distribution, logistics, construction, and other operations-heavy work where people, data, systems, and workflows have to move as one. I embed on the customer side and own the path above the vendors.",
  },
  {
    q: "What is a non-fit?",
    a: "Hospitals, urgent care, and medical clinics. If the operating problem is not a real transformation the company will own, I will say so.",
  },
  {
    q: "What do you hire?",
    a: "Transformations, Agentics, or both. Transformations is the estate, the walk, and the receipts. Agentics can be hired on an existing owned transformation path or together with the transformation. It is not a pilot beside a broken estate.",
  },
  {
    q: "What does the company keep?",
    a: "Mapped workflows, governed data, visible delivery state, and people who can run the next cycle. On Agentics: agents under boundaries with named owners. The production path stays. That is the public frame - not an exit pitch.",
  },
  {
    q: "Are BOSS, The Rig, and FlowCraft for sale?",
    a: "No. They are how I do the work - not software for sale. The paid work is the engagement, the transfer, and the path the business can keep running.",
  },
  {
    q: "How do I start?",
    a: "Write robert@idigdata.com or use the general contact form. There is no interest dropdown. Come with the real operating problem - shape, stakes, constraints.",
    aHtml: (
      <>
        Write{" "}
        <a
          href="mailto:robert@idigdata.com"
          className="font-semibold text-navy border-b border-navy/40 hover:border-navy"
        >
          robert@idigdata.com
        </a>{" "}
        or use the general{" "}
        <a
          href="/contact/"
          className="font-semibold text-navy border-b border-navy/40 hover:border-navy"
        >
          contact form
        </a>
        . There is no interest dropdown. Come with the real operating problem -
        shape, stakes, constraints.
      </>
    ),
  },
];

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

export default function FaqPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      <JsonLdScript data={faqPageJsonLd} />

      <section className="pt-20 pb-8 md:pt-24 md:pb-10">
        <SectionKicker className="mb-5">FAQ</SectionKicker>
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
          FAQ - idigdata.
        </h1>
        <p className="mt-5 max-w-[760px] font-display italic text-stone text-[18px] leading-snug">
          Fit, non-fit, what you hire, and what the company keeps.
        </p>
      </section>

      <section className="pt-2 pb-20">
        <dl className="max-w-[820px] space-y-12">
          {FAQ.map(({ q, a, aHtml }, i) => (
            <div key={i} className="border-t border-navy/15 pt-8">
              <dt className="font-display text-navy text-[22px] md:text-[26px] leading-[1.2] tracking-tight">
                {q}
              </dt>
              <dd className="mt-4 font-body text-ink text-[16px] leading-relaxed">
                {aHtml ?? a}
              </dd>
            </div>
          ))}
        </dl>
      </section>
    </div>
  );
}
