import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: "Reach out",
  description:
    "Start a direct conversation with Robert Paddock about embedded transformation, stalled systems work, or agentic AI that needs an owner.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/contact/",
    title: "Reach out | idigdata",
    description:
      "A direct note about embedded transformation, stalled systems work, or agentic AI that needs an owner — permanent or fractional.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata - Reach out",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://idigdata.com/" },
    { "@type": "ListItem", position: 2, name: "Reach out", item: "https://idigdata.com/contact/" },
  ],
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      <JsonLdScript data={breadcrumbJsonLd} />

      <section className="relative pt-20 pb-8 md:pt-24 md:pb-10">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-5">
          Reach out
        </SectionKicker>
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
          Send the real shape.
        </h1>
        <p className="mt-5 max-w-[760px] font-display italic text-warm-gray text-[18px] leading-snug">
          A quick, direct read on whether this is a real fit — no deck, no
          proposal theater.
        </p>
        <p className="mt-4 max-w-[760px] font-body text-warm-gray text-[14.5px] leading-relaxed">
          If the work needs an owner above the vendors, send a note. The first
          conversation is not a deck ritual — it&apos;s a working call where I walk
          you through how I&apos;d actually own your situation: a quick read on
          mandate, systems, people, timing, and whether I can be useful.
        </p>
        <p className="mt-4 max-w-[760px] font-body text-warm-gray text-[14.5px] leading-relaxed">
          A sentence or two is enough: the stalled program, the board pressure,
          the agentic question, the CFO concern, or the operating knot that
          keeps resurfacing. Permanent seat or fractional embed — the ownership
          standard is the same. I read these myself.
        </p>
      </section>

      <section className="pt-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div className="md:col-span-2">
            <ContactForm showInterestSelect />
          </div>

          <aside className="md:col-span-1">
            <div className="border-t border-navy pt-6 space-y-3">
              <p className="font-body uppercase tracking-section text-[12px] text-warm-gray">
                Direct
              </p>
              <p className="font-body text-[16px] text-ink leading-relaxed">
                Pacific Time
                <br />
                <a
                  href="mailto:robert@idigdata.com"
                  className="font-semibold text-navy border-b border-navy/40 hover:border-navy"
                >
                  robert@idigdata.com
                </a>
              </p>
              <p className="font-body text-[14px] text-warm-gray leading-relaxed">
                If the fit is wrong, I will say so plainly. If the mandate is
                real, we will know the next useful step.
              </p>
              <p className="font-body text-[14px] text-warm-gray leading-relaxed pt-2">
                <a
                  href="https://www.linkedin.com/in/robertpaddock"
                  className="font-semibold text-navy border-b border-navy/40 hover:border-navy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
                {" · "}
                Robert Paddock
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
