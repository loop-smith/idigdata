import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: "Reach out",
  description:
    "First conversation is operator-to-operator — no commitment, no proposal-deck. Just talking shape. For embedded residencies, fractional engagements, and agentic deployments.",
  alternates: { canonical: "/contact/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/contact/",
    title: "Reach out — idigdata",
    description:
      "First conversation is operator-to-operator. Just talking shape.",
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

      <section className="pt-20 pb-8 md:pt-24 md:pb-10">
        <p className="font-body text-[13px] font-semibold uppercase tracking-[0.22em] text-warm-gray mb-5">
          Reach out
        </p>
        <h1 className="font-vollkorn font-bold text-navy text-[40px] md:text-[52px] leading-[1.05] tracking-tight">
          Just talking shape.
        </h1>
        <p className="mt-5 max-w-[760px] font-display italic text-stone text-[18px] leading-snug">
          First conversation is operator-to-operator — no commitment, no
          proposal-deck. There&rsquo;s no charge for the first conversation;
          it&rsquo;s how we both qualify whether the work is a fit.
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
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
