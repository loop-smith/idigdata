import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: "Reach out — idigdata",
  description:
    "A short operator-to-operator conversation about the shape of the work: transformation, systems, data, people, and applied agentics.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/contact/",
    title: "Reach out — idigdata · Forward-Deployed Operator",
    description:
      "A short operator-to-operator conversation about the shape of the work.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Reach out",
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
          Let&rsquo;s talk shape.
        </h1>
        <p className="mt-5 max-w-[760px] font-display italic text-stone text-[18px] leading-snug">
          No deck. No proposal. Just a short operator-to-operator conversation
          about the business, the systems, the data, the people, and whether
          the work has a real shape.
        </p>
        <p className="mt-4 max-w-[760px] font-body text-stone text-[14.5px] leading-relaxed">
          If the problem on your desk is a stalled transformation, systems that
          do not agree, data nobody quite trusts, or agentics that needs to
          become real operating leverage, send a note. I read these myself.
        </p>
      </section>

      <section className="pt-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {/* Form column (2/3) */}
          <div className="md:col-span-2">
            <ContactForm interestType="general" showInterestSelect />
          </div>

          {/* Side block (1/3) */}
          <aside className="md:col-span-1">
            <div className="border-t border-navy pt-6 space-y-3">
              <p className="font-body uppercase tracking-section text-[12px] text-stone">
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
              <p className="font-body text-[14px] text-stone leading-relaxed">
                A sentence or two is enough. If it is not the right fit, I will
                say that cleanly.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
