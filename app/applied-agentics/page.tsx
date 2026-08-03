import type { Metadata } from "next";
import Link from "next/link";
import M4Watermark from "@/components/M4Watermark";
import SectionKicker from "@/components/SectionKicker";

export const metadata: Metadata = {
  title: {
    absolute: "Applied Agentics | idigdata",
  },
  description:
    "An industry-leading approach to delivering enterprise transformation - people, data, systems, and agentic AI under one ownership layer. Owned capability, not another overlay.",
  alternates: { canonical: "/applied-agentics/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/applied-agentics/",
    title: "Applied Agentics | idigdata",
    description:
      "Not seats. Not another SI billing path. Owned truth the business runs on - green/green delivery, living SOPs, agentic AI as instrument.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata - Applied Agentics",
      },
    ],
  },
};

const holdAbsorb = [
  {
    label: "Hold",
    ask: "Can the business safely hold them?",
    body: "Governed data, a shared version of reality, clear ownership of what an agent is allowed to touch. Most AI readiness fails here, quietly, long before the model does.",
  },
  {
    label: "Absorb",
    ask: "Can the business actually absorb them?",
    body: "People who know how to delegate, verify, and own the output. Workflows redesigned around the work. A human on every consequential call. Capability the organization can't validate will not survive contact with the work.",
  },
];

export default function AppliedAgenticsPage() {
  return (
    <div className="mx-auto max-w-content bg-cream px-6 font-body text-navy">
      <section className="relative pt-10 pb-16 md:pt-16 md:pb-20">
        <M4Watermark position="top-right" />
        <SectionKicker className="mb-7">Applied Agentics</SectionKicker>
        <div className="max-w-[880px]">
          <h1 className="max-w-full text-wrap break-words font-vollkorn text-[42px] font-bold leading-[1.08] text-navy sm:text-[54px] md:text-[70px]">
            An industry-leading approach to delivering transformation.
          </h1>
          <p className="mt-7 max-w-[760px] text-wrap break-words font-vollkorn text-[20px] italic leading-[1.42] text-warm-gray md:text-[26px]">
            Ownership of the work across people, data, systems, and the vendors
            that often end up managing themselves - with agentic AI landed on
            that same layer.
          </p>
          <p className="mt-5 max-w-[760px] text-[16px] leading-[1.65] text-navy">
            The paid work is the engagement - design, build, training, and
            transfer. What stays is owned capability. Software is the instrument
            of that engagement when it earns its place. That has been my
            approach with or without agentics.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">What done means</SectionKicker>
        <div className="max-w-[840px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            Green / green - one shared visual goal.
          </h2>
          <p className="mt-5 max-w-[62ch] text-[16px] leading-[1.65] text-navy">
            Stakeholders, key users, and executives see the same picture of
            where implementation and deployment actually stand - not three
            reconciled status reports.
          </p>
          <ul className="mt-8 space-y-4 text-[16px] leading-[1.65] text-navy">
            <li className="border-l-[3px] border-gold pl-4">
              <span className="font-semibold">Green</span> - systems and
              integrations online to production.
            </li>
            <li className="border-l-[3px] border-gold pl-4">
              <span className="font-semibold">Green</span> - go-live acceptance.
            </li>
          </ul>
          <p className="mt-6 max-w-[62ch] text-[16px] leading-[1.65] text-navy">
            Done means both. Vendor sign-off alone is not done. That is where
            executive ownership, stakeholder alignment, change, and program
            control bind into one board the business can steer from.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Depth</SectionKicker>
        <div className="max-w-[840px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            Six process constellations - then workflows underneath.
          </h2>
          <p className="mt-5 max-w-[62ch] text-[16px] leading-[1.65] text-navy">
            The public spine is the six process constellations: how work moves
            across the company. Under each cluster hang the real workflows and
            workflow blocks. A constellation only lights when those are green on
            both axes - happy systems, happy people - in one visual. DigOps runs
            this on its own first constellation today as practice proof.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">What the business keeps</SectionKicker>
        <div className="max-w-[840px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            Living SOPs - why green stays green.
          </h2>
          <p className="mt-5 max-w-[62ch] text-[16px] leading-[1.65] text-navy">
            Most programs leave a binder that dies after go-live. This approach
            leaves operating memory that stays alive: SOPs created, generated,
            and updated with the work - tied to how the business actually runs.
            Proven inside Sierra Nevada Brewing and across embedded
            implementations: the leave-behind that makes adoption real after I
            leave.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Why agentics now</SectionKicker>
        <div className="max-w-[840px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            The era of agentic AI amplifies the ownership gap.
          </h2>
          <p className="mt-5 max-w-[62ch] text-[16px] leading-[1.65] text-navy">
            The newest fix only looks new: forward-deployed engineers from
            frontier-model and platform companies - same motion as System
            Integrators (SI). They bill on top while the duct tape stays. You
            cannot automate dysfunction, and you cannot overlay your way past
            ungoverned data. That is why the ownership layer is the prerequisite,
            not the upsell.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Two questions</SectionKicker>
        <div className="max-w-[840px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            Before agentic AI lands, two questions decide everything.
          </h2>
          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {holdAbsorb.map((q) => (
              <article
                key={q.label}
                className="border border-navy/15 border-l-[4px] border-l-gold bg-white p-6"
              >
                <p className="font-body text-[10.5px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
                  {q.label}
                </p>
                <h3 className="mt-3 font-vollkorn text-[25px] font-bold leading-[1.2] text-navy">
                  {q.ask}
                </h3>
                <p className="mt-4 font-body text-[15px] leading-[1.62] text-navy/80">
                  {q.body}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-7 max-w-[760px] font-vollkorn text-[20px] italic leading-[1.45] text-navy">
            Answer both and agentic capability becomes{" "}
            <span className="bg-gold/80 px-1 font-bold not-italic">
              decision integrity
            </span>
            . Skip them and you have automated the disagreement at scale.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">Proof</SectionKicker>
        <div className="max-w-[840px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            Production receipt. Instrument craft.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.65] text-navy">
            <span className="font-semibold">Sierra Nevada Brewing - </span>
            as CIO (~$420M), put what the market now calls agentic AI into
            production with governance, training, and business ownership -
            before the term was common. Integration-at-scale under
            business-owned control.
          </p>
          <p className="mt-5 text-[16px] leading-[1.65] text-navy">
            <span className="font-semibold">idigdata - </span>
            token and model optimization, discovery loops, human-validated
            production paths - so agentics lands as owned capability, not a
            billed overlay.
          </p>
          <p className="mt-8 max-w-[62ch] font-vollkorn text-[22px] italic leading-[1.4] text-navy">
            Diagnosers explain. Overlay teams bill. Operators finish.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The shop · Map · Run</SectionKicker>
        <div className="max-w-[840px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[46px]">
            I bring a builder shop. You keep the assets.
          </h2>
          <p className="mt-5 max-w-[62ch] text-[16px] leading-[1.65] text-navy">
            Under the engagement I bring a pro agentic studio that plans, builds,
            ships, observes, runs token economics, and governs the work - the
            collective stays with the shop; you hire the engagement it makes
            possible.
          </p>
          <p className="mt-5 max-w-[62ch] text-[16px] leading-[1.65] text-navy">
            What you keep is the operating approach made durable: the control
            center for integration and change, agile tied to roadmap, green /
            green visibility, living SOPs, and the map of constellations down to
            workflows. When the business is ready, that map becomes the ground
            for agentic workflow applications - humans and agents working in
            synthesis on firm-specific workflow IP - with DigOps as practice
            proof of the direction, not a seat you rent.
          </p>
          <p className="mt-5 max-w-[62ch] text-[15px] leading-[1.6] text-navy/70">
            Names, if useful later: the Rig is the studio; the approach asset is
            the twin and control frame you keep; FlowCraft is the agentic
            workflow runtime on that map.
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 bg-cream py-14 md:py-20">
        <SectionKicker className="mb-5">Instrument depth</SectionKicker>
        <h2 className="max-w-[20ch] font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[42px]">
          Systems that hold state.
        </h2>
        <p className="mt-4 max-w-[52ch] font-vollkorn text-[18px] italic leading-[1.45] text-warm-gray md:text-[20px]">
          That flex with the signal instead of firing once and forgetting.
        </p>
        <figure className="mx-auto mt-10 w-full max-w-[780px]">
          <div className="overflow-hidden rounded-[3px] border border-navy/15 bg-navy shadow-[0_2px_16px_rgba(20,40,64,0.08)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/brand/applied-agentics/liquid-neuron-chalkboard.svg"
              alt="Chalkboard: a neuron and the same neuron in math - liquid time-constant dynamics after Hasani, Lechner, Amini, Rus, Grosu"
              width={780}
              height={590}
              className="block h-auto w-full"
            />
          </div>
          <figcaption className="mx-auto mt-3 max-w-[48ch] text-center font-vollkorn text-[12.5px] italic leading-[1.45] text-warm-gray">
            After Hasani · Lechner · Amini · Rus · Grosu - liquid time-constant
            networks.
          </figcaption>
        </figure>
      </section>

      <section className="border-t border-navy/15 py-14 md:py-20">
        <SectionKicker className="mb-5">The estate</SectionKicker>
        <div className="max-w-[760px]">
          <h2 className="font-vollkorn text-[33px] font-bold leading-[1.12] text-navy md:text-[42px]">
            The systems the approach runs across.
          </h2>
          <p className="mt-5 text-[16px] leading-[1.65] text-navy">
            ERP, WMS, MES, CRM/CPQ, MDM, HRIS, analytics, cybersecurity, and the
            integration fabric that ties them - including multi-entity,
            keep-running modernization. Platforms matter; they cannot own the
            transformation. Depth of the capability map lives on{" "}
            <Link
              href="/approach/"
              className="font-semibold underline decoration-gold/60 underline-offset-4 hover:decoration-gold"
            >
              Approach
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-t border-navy/15 py-16 md:py-24">
        <div className="mx-auto max-w-[700px] border-l-[4px] border-l-gold bg-navy px-8 py-10 text-cream md:px-10 md:py-12">
          <p className="font-body text-[10.5px] font-semibold uppercase tracking-[0.24em] text-gold">
            If the mandate is real
          </p>
          <h2 className="mt-5 font-vollkorn text-[31px] font-bold leading-[1.18] text-cream md:text-[42px]">
            If the work needs an owner, start there.
          </h2>
          <p className="mt-5 font-vollkorn text-[17px] italic leading-[1.55] text-[#DCD9CC]">
            Facing pressure to transform and put agentic AI into production
            without losing control? Bring the real situation. Practical path,
            owned landing.
          </p>
          <Link
            href="/contact/"
            className="mt-8 inline-flex items-center gap-2 rounded-[3px] bg-gold px-8 py-4 font-body text-[13px] font-semibold uppercase tracking-[0.18em] text-navy transition hover:bg-[#FFD740]"
          >
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
