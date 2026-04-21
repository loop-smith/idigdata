import SectionHeader from "@/components/SectionHeader";

export const metadata = {
  title: "Contact",
  description:
    "One email reaches Robert directly. No form, no chatbot, no routing. robert@idigdata.com.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-content px-6">
      {/* Hero */}
      <section className="pt-20 pb-10 md:pt-24 md:pb-12 text-center">
        <h1 className="font-display font-bold text-d2-forest text-[36px] md:text-[48px] leading-[1.05] tracking-tight">
          Contact
        </h1>
        <p className="mt-6 text-[18px] text-d2-ink max-w-[680px] mx-auto">
          The most direct path. Most conversations start with a short email.
        </p>
      </section>

      {/* Email-as-button */}
      <section className="mt-4">
        <div className="bg-d2-forest text-white py-20 md:py-24 px-6 text-center">
          <p className="font-display text-[20px] md:text-[22px] text-white/80">
            One email. No form.
          </p>
          <a
            href="mailto:robert@idigdata.com?subject=idigdata%20inquiry"
            className="mt-8 inline-block font-body font-bold text-[22px] md:text-[28px] tracking-wide border-b-2 border-white/60 hover:border-white pb-1 focus:outline-2 focus:outline-white focus:outline-offset-4"
          >
            robert@idigdata.com
          </a>
        </div>
      </section>

      {/* Response note */}
      <section className="pt-10 md:pt-12">
        <p className="max-w-[680px] mx-auto text-center text-[15px] text-d2-ink">
          Response within one business day during active pipeline periods.
          Include sector and engagement shape in the subject line if you
          already know them — speeds the first reply.
        </p>
      </section>

      {/* What usually starts here */}
      <section className="pt-16 md:pt-20">
        <SectionHeader>What usually starts here</SectionHeader>
        <ul className="max-w-[820px] space-y-5 text-[17px] text-d2-ink">
          <li className="pl-5 relative">
            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-d2-forest rounded-full" />
            <span className="font-body font-semibold text-d2-forest">
              Transformation scoping
            </span>{" "}
            — operating-model change, six to twelve months typical, fractional
            or full-time exclusive.
          </li>
          <li className="pl-5 relative">
            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-d2-forest rounded-full" />
            <span className="font-body font-semibold text-d2-forest">
              Systems engagement inquiry
            </span>{" "}
            — Microsoft Dynamics D365 ERP, systems-landscape assessment, two to
            three concurrent engagements.
          </li>
          <li className="pl-5 relative">
            <span className="absolute left-0 top-2 w-1.5 h-1.5 bg-d2-forest rounded-full" />
            <span className="font-body font-semibold text-d2-forest">
              Agentic adoption conversation
            </span>{" "}
            — strategy, platform selection, or deployment planning. For
            operators past the pilot stage.
          </li>
        </ul>
      </section>

      {/* Closing */}
      <section className="mt-16 md:mt-20 mb-8">
        <p className="max-w-[680px] mx-auto text-center text-[14px] text-d2-ink italic">
          No form. No chatbot. No routing. One email — robert@idigdata.com —
          reaches Robert directly.
        </p>
      </section>
    </div>
  );
}
