import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import JsonLdScript from "@/components/analytics/JsonLdScript";

export const metadata: Metadata = {
  title: "Start a conversation",
  description:
    "Two ways to reach Robert: direct email at robert@idigdata.com or the form below. Both reach him directly.",
  alternates: {
    canonical: "/contact/",
  },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/contact/",
    title: "Contact — idigdata",
    description: "Two ways to reach Robert. Both reach him directly.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Commonize the master data. Own the core. Apps and agents plug in.",
      },
    ],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://idigdata.com/" },
    { "@type": "ListItem", position: 2, name: "Contact", item: "https://idigdata.com/contact/" },
  ],
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      <JsonLdScript data={breadcrumbJsonLd} />
      {/* Header */}
      <section className="pt-20 pb-10 md:pt-24 md:pb-12 text-center">
        <h1 className="font-display font-medium text-d2-forest text-[36px] md:text-[48px] leading-[1.05] tracking-tight">
          Start a conversation
        </h1>
        <p className="mt-4 font-display italic text-d2-stone text-[18px]">
          Two ways to reach me. Both reach me directly.
        </p>
      </section>

      {/* Email block */}
      <section className="pt-4 text-center">
        <p className="font-display text-d2-copper text-[28px] md:text-[32px]">
          <a
            href="mailto:robert@idigdata.com"
            className="hover:underline"
          >
            robert@idigdata.com
          </a>
        </p>
        <p className="mt-3 font-body text-d2-stone text-[14px] max-w-[520px] mx-auto">
          Direct line. No gatekeeper. Best for fast-moving conversations and
          warm intros.
        </p>
        <div className="mt-8">
          <a
            href="mailto:robert@idigdata.com"
            className="inline-block font-body font-semibold text-[16px] px-7 py-3.5 bg-d2-forest text-white hover:bg-d2-forest/90 transition-colors focus:outline-2 focus:outline-d2-stone focus:outline-offset-2"
          >
            Compose email
          </a>
        </div>
      </section>

      {/* OR divider */}
      <section className="pt-12 pb-12">
        <div
          aria-hidden
          className="mx-auto max-w-[420px] flex items-center gap-4"
        >
          <span className="flex-1 border-t border-d2-stone/40" />
          <span className="font-body text-[13px] text-d2-stone uppercase tracking-section">
            or
          </span>
          <span className="flex-1 border-t border-d2-stone/40" />
        </div>
      </section>

      {/* Form block */}
      <section className="pb-16 md:pb-24">
        <div className="mx-auto max-w-[560px]">
          <p className="font-body uppercase tracking-section text-[13px] text-d2-stone">
            Or use the form
          </p>
          <p className="mt-3 text-[15px] text-d2-ink">
            For more deliberate intros &mdash; give me your context and
            I&rsquo;ll respond from{" "}
            <a
              href="mailto:robert@idigdata.com"
              className="font-body font-semibold text-d2-forest border-b border-d2-forest/40 hover:border-d2-forest"
            >
              robert@idigdata.com
            </a>
            .
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
