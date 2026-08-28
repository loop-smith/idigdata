import type { Metadata } from "next";
import Link from "next/link";
import PresenceShell from "@/components/presence/PresenceShell";
import HaloFilm from "@/components/presence/HaloFilm";

export const metadata: Metadata = {
  title: { absolute: "Agentic layer | idigdata" },
  description:
    "Your company's knowledge becomes an operating engine. Proprietary data, systems of record, and operational judgment as an asset you own and run.",
  alternates: { canonical: "/agentic-layer/" },
};

const issues = [
  ["01", "What's already running?", "Including the unofficial shadow AI and fragmented tools. If you cannot name it, you cannot govern it."],
  ["02", "What can it see and do?", "Not a policy PDF. What it can reach across ERP, WMS, and CRM, and what it cannot."],
  ["03", "Who keeps the last move?", "A named person is accountable when an agent acts, not when it drafts."],
  ["04", "Can you prove what happened?", "A record of what ran, what data was touched, and whether it finished."],
] as const;

const models = [
  ["openai.png", "OpenAI logo", "OpenAI"],
  ["anthropic.png", "Anthropic Claude logo", "Anthropic"],
  ["xai.png", "xAI Grok logo", "xAI"],
  ["gemini.png", "Google Gemini logo", "Google"],
  ["thinking-machines.png", "Thinking Machines logo", "Thinking Machines"],
] as const;

export default function AgenticLayerPage() {
  return (
    <PresenceShell>
      <section className="p-section">
        <div className="page-well">
          <div className="hero-split">
            <div>
              <p className="p-kicker">The Agentic Layer</p>
              <h1 className="p-h1" style={{ maxWidth: "16ch" }}>
                Your company&apos;s knowledge becomes an operating engine.
              </h1>
              <p className="p-dek">
                Public models make generic knowledge cheap. The advantage is
                turning your data, systems of record, and judgment into an
                asset the company owns and runs.
              </p>
            </div>
            <div className="mandate-card">
              <p className="font-vollkorn text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#B48A05]">
                In production
              </p>
              <p className="mt-2 text-[14.5px] leading-[1.5]">
                Sierra Nevada Brewing (~$420M). Named owner. Path the company
                kept. Not a chatbot beside the business.
              </p>
            </div>
          </div>

          <figure className="waves-doc">
            <p className="p-kicker">The waves</p>
            <h2 className="p-h2" style={{ maxWidth: "22ch" }}>
              Every ten-year wave was the same game. This one is not.
            </h2>
            <p className="p-prose">
              Mainframe. Client-server and ERP. Cloud and SaaS. A new
              platform, a long implementation, then keep-running. Fairly
              similar, every time.
            </p>
            <p className="p-prose">
              Agents do not wait for a decade. They land on the stack you
              already have. The game is forever changed.
            </p>
            <svg
              className="w-full"
              viewBox="0 0 900 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-label="Four waves of technology. The first three rhyme. Enterprise-Agentics does not."
            >
              <line x1="30" y1="240" x2="870" y2="240" stroke="#142840" strokeWidth="2" />
              <path d="M 50 240 Q 130 195, 210 240" stroke="rgba(20,40,64,0.30)" strokeWidth="2" />
              <circle cx="130" cy="217" r="4.5" fill="#142840" />
              <text x="130" y="265" fill="#142840" fontFamily="Vollkorn" fontSize="14" fontWeight="700" textAnchor="middle">1960s–70s</text>
              <text x="130" y="175" fill="#142840" fontFamily="Vollkorn" fontSize="16" fontWeight="800" textAnchor="middle">Mainframe</text>
              <text x="130" y="195" fill="#6B6860" fontFamily="Source Sans 3" fontSize="12" textAnchor="middle">Central Compute</text>
              <text x="130" y="290" fill="#7A756A" fontFamily="Source Sans 3" fontSize="11" fontStyle="italic" textAnchor="middle">Same game</text>
              <path d="M 230 240 Q 330 145, 430 240" stroke="rgba(20,40,64,0.45)" strokeWidth="2.2" />
              <circle cx="330" cy="170" r="4.5" fill="#142840" />
              <text x="330" y="265" fill="#142840" fontFamily="Vollkorn" fontSize="14" fontWeight="700" textAnchor="middle">1980s–90s</text>
              <text x="330" y="130" fill="#142840" fontFamily="Vollkorn" fontSize="16" fontWeight="800" textAnchor="middle">Client-Server & ERP</text>
              <text x="330" y="150" fill="#6B6860" fontFamily="Source Sans 3" fontSize="12" textAnchor="middle">Distributed Systems</text>
              <text x="330" y="290" fill="#7A756A" fontFamily="Source Sans 3" fontSize="11" fontStyle="italic" textAnchor="middle">Same game</text>
              <path d="M 450 240 Q 560 95, 670 240" stroke="rgba(20,40,64,0.65)" strokeWidth="2.4" />
              <circle cx="560" cy="130" r="4.5" fill="#142840" />
              <text x="560" y="265" fill="#142840" fontFamily="Vollkorn" fontSize="14" fontWeight="700" textAnchor="middle">2000s–10s</text>
              <text x="560" y="85" fill="#142840" fontFamily="Vollkorn" fontSize="16" fontWeight="800" textAnchor="middle">Cloud & SaaS</text>
              <text x="560" y="105" fill="#6B6860" fontFamily="Source Sans 3" fontSize="12" textAnchor="middle">Multi-Tenant Platforms</text>
              <text x="560" y="290" fill="#7A756A" fontFamily="Source Sans 3" fontSize="11" fontStyle="italic" textAnchor="middle">Same game</text>
              <path d="M 670 240 Q 770 20, 870 240" fill="rgba(250,204,21,0.14)" stroke="#142840" strokeWidth="3" />
              <line x1="770" y1="240" x2="770" y2="130" stroke="#FACC15" strokeWidth="2.5" strokeDasharray="3 3" />
              <circle cx="770" cy="130" r="7" fill="#FACC15" stroke="#142840" strokeWidth="2.5" />
              <text x="770" y="265" fill="#142840" fontFamily="Vollkorn" fontSize="15" fontWeight="800" textAnchor="middle">2020s+</text>
              <rect x="668" y="32" width="204" height="26" fill="#142840" rx="3" />
              <text x="770" y="50" fill="#FACC15" fontFamily="Vollkorn" fontSize="13" fontWeight="800" textAnchor="middle">THE BREAK</text>
              <text x="770" y="82" fill="#142840" fontFamily="Vollkorn" fontSize="14" fontWeight="700" textAnchor="middle">Enterprise-Agentics</text>
              <text x="770" y="100" fill="#6B6860" fontFamily="Source Sans 3" fontSize="12" textAnchor="middle">Not another decade</text>
              <text x="770" y="290" fill="#B48A05" fontFamily="Source Sans 3" fontSize="11.5" fontWeight="700" textAnchor="middle">The game changed</text>
            </svg>
            <figcaption className="waves-caption">
              The first three waves rhyme. The fourth does not.
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <h2 className="p-h2">These are what you have to be able to see.</h2>
          <p className="p-prose">
            You cannot put agents into the work until this is visible. I come
            inside and take that on, one consequential workflow at a time.
          </p>
          <div className="mt-8">
            {issues.map(([idx, name, job]) => (
              <div key={idx} className="issue-row">
                <span className="issue-idx">{idx}</span>
                <div>
                  <p className="font-vollkorn text-[18px] font-bold text-navy">
                    {name}
                  </p>
                  <p className="mt-1 text-[16px] leading-[1.65]">{job}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">The path</p>
          <h2 className="p-h2">
            I name what moves, what stays human, and what waits.
          </h2>
          <p className="p-prose">
            Start with one consequential workflow already carrying the company.
            Connect the systems you already own. Set the baseline. Automate
            where the evidence can hold it. A change does not go live until the
            work still holds. Keep a record of what ran, who owned it, and
            whether it finished.
          </p>
          <p className="p-prose">
            A person keeps the last move on anything that matters. People and
            agents in the same work — on the same six constellations, not in a
            seventh bucket. Then we reuse the pattern, or we stop. The people
            doing the work leave more able to run it.
          </p>

          <div className="lastmove-plate">
            <HaloFilm
              src="/media/lastmove-loop.mp4?c=3"
              poster="/media/lastmove-poster.png?c=3"
              label="Last-move authorization loop"
              size={240}
            />
            <div>
              <p className="font-vollkorn text-[13px] font-bold uppercase tracking-[0.16em] text-[#B48A05]">
                The last move stays human
              </p>
              <h3 className="console-title mt-1 font-vollkorn text-[clamp(24px,3vw,32px)] font-extrabold text-navy">
                Agents assemble. A named person authorizes.
              </h3>
              <p className="mt-3 text-[17px] leading-[1.65]">
                Agents gather across ERP, WMS, and MES, reconcile the gaps, and
                put a complete proposal in front of a person. No agent writes
                to the core systems in the dark. A named person inspects the
                receipts and authorizes the last move.
              </p>
              <div className="rail">
                <div className="rail-step">
                  <p className="font-extrabold">01 Read the estate</p>
                  <p className="text-[11px] text-[#5A6978]">
                    Live ERP, WMS, and plant signals
                  </p>
                </div>
                <div className="rail-step">
                  <p className="font-extrabold">02 Agent drafts</p>
                  <p className="text-[11px] text-[#5A6978]">
                    Reconciles the gaps and writes the brief
                  </p>
                </div>
                <div className="rail-step rail-step--active">
                  <p className="font-extrabold">03 Person authorizes</p>
                  <p className="text-[11px] text-[#5A6978]">
                    Inspects the receipts and keeps the last move
                  </p>
                </div>
                <div className="rail-step">
                  <p className="font-extrabold">04 The write lands</p>
                  <p className="text-[11px] text-[#5A6978]">
                    The change runs with a named owner
                  </p>
                </div>
              </div>
              <div className="guarantees">
                <p>
                  <strong className="font-vollkorn text-navy">
                    No write without a person
                  </strong>
                  <br />
                  Ledger balances, pricing, and production batches do not
                  change unless a named person signs.
                </p>
                <p>
                  <strong className="font-vollkorn text-navy">
                    Prove what happened
                  </strong>
                  <br />
                  A record of what ran, what was touched, who authorized it,
                  and whether it finished.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <div className="manifesto-plaque">
            <div className="plaque-header">
              <span className="plaque-tag">The knowledge the company keeps</span>
              <span className="plaque-cite">Owned, not rented</span>
            </div>
            <h3 className="plaque-h2">
              Agentics flattens commodity knowledge. The moat is what your
              company knows.
            </h3>
            <p className="plaque-dek">
              Public models rent you the same answers everyone else can buy.
              The work is capturing how this company actually runs, and keeping
              that as an asset you own.
            </p>
            <div className="pillar-grid">
              <article className="pillar">
                <p className="font-vollkorn text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#B48A05]">
                  01
                </p>
                <h4 className="mt-1 font-vollkorn text-[17px] font-bold text-navy">
                  How people decide
                </h4>
                <p className="mt-2 text-[14.5px] leading-[1.55]">
                  How your best people handle a variance, protect a margin, and
                  decide what ships. Written down so the company can run it.
                </p>
              </article>
              <article className="pillar">
                <p className="font-vollkorn text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#B48A05]">
                  02
                </p>
                <h4 className="mt-1 font-vollkorn text-[17px] font-bold text-navy">
                  The data the company owns
                </h4>
                <p className="mt-2 text-[14.5px] leading-[1.55]">
                  Agents work against live master data and transaction records
                  the company already owns. Not a rented pool beside the
                  estate.
                </p>
              </article>
              <article className="pillar">
                <p className="font-vollkorn text-[13px] font-extrabold uppercase tracking-[0.1em] text-[#B48A05]">
                  03
                </p>
                <h4 className="mt-1 font-vollkorn text-[17px] font-bold text-navy">
                  What you keep
                </h4>
                <p className="mt-2 text-[14.5px] leading-[1.55]">
                  Every finished workflow, exception, and human sign-off stays
                  with the business. You keep what we build when I leave.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="p-section" style={{ background: "#F3ECE0" }}>
        <div className="page-well">
          <p className="p-kicker">How I deliver</p>
          <h2 className="p-h2" style={{ maxWidth: "18ch" }}>
            This is the build. Not software for sale.
          </h2>
          <p className="p-prose">
            Receipts and templates from work already running. A company with a
            builder role that wants to start now does not wait for a lab. They
            start on The Rig. I walk in with this. The company keeps what we
            stand up.
          </p>
          <div className="build-stack">
            <article className="build-row">
              <div className="build-mark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/systems/rig-banner-logo.png"
                  alt="The Rig"
                />
              </div>
              <div className="build-copy">
                <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#B48A05]">
                  The builder suite
                </p>
                <h3 className="mt-1 font-vollkorn text-[28px] font-extrabold text-navy">
                  The Rig
                </h3>
                <p className="mt-3 text-[17px] leading-[1.65]">
                  This is what a builder role starts on when the company wants
                  to build now. Named work a person can stand behind.
                  Orchestrate, monitor, invent. Plans, gates, and a trail you
                  can inspect. I walk in with this. A change does not go live
                  until the work still holds.
                </p>
              </div>
            </article>
            <article className="build-row">
              <div className="build-mark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/systems/boss-banner-logo.png"
                  alt="The BOSS"
                />
              </div>
              <div className="build-copy">
                <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#B48A05]">
                  The digital twin
                </p>
                <h3 className="mt-1 font-vollkorn text-[28px] font-extrabold text-navy">
                  The BOSS
                </h3>
                <p className="mt-3 text-[17px] leading-[1.65]">
                  Command and control of how the company actually runs.
                  Systems, owners, workflows, and the path through the
                  transformation, above the vendors. Lessons from every
                  engagement, not a dashboard a partner rented you. Design
                  workshops to green on green. The company owns the twin.
                </p>
              </div>
            </article>
            <article className="build-row">
              <div className="build-mark">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/brand/systems/flowcraft-banner-logo.png"
                  alt="FlowCraft"
                />
              </div>
              <div className="build-copy">
                <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#B48A05]">
                  The workflow the company keeps
                </p>
                <h3 className="mt-1 font-vollkorn text-[28px] font-extrabold text-navy">
                  FlowCraft
                </h3>
                <p className="mt-3 text-[17px] leading-[1.65]">
                  Ready-made agentic workflow blocks, uniquely standard to
                  this company, through the master data. A real workflow the
                  team can see, run, and keep. Not a rented automation
                  overlay. When I leave, they still have the blocks.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="p-section">
        <div className="page-well">
          <p className="p-kicker">How the models sit</p>
          <h2 className="p-h2" style={{ maxWidth: "20ch" }}>
            The cloud rented the stack. Enterprise is bringing it home.
          </h2>
          <p className="p-prose">
            Data is coming back in-house. Rightly so. That now includes the
            model. Frontier labs stay useful for open-ended reasoning. The
            work this company already knows how to do should run on a model it
            owns, on its estate.
          </p>

          <div className="manifesto-plaque" style={{ marginTop: 32 }}>
            <div className="plaque-header">
              <span className="plaque-tag">The direction</span>
              <span className="plaque-cite">Thomson Reuters, 2026</span>
            </div>
            <h3 className="plaque-h2">
              They specialized an open-weight model into one they keep.
            </h3>
            <p className="plaque-dek">
              They still rent a frontier lab for open-ended work. Domain work
              runs on the model they own. That is where enterprise agentics is
              heading.
            </p>
          </div>

          <p className="portfolio-sub" style={{ marginTop: 36 }}>
            Three seats. They are tools. They are not the owner.
          </p>
          <div className="seat-grid">
            <article className="spec-card">
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#B48A05]">
                Closed
              </p>
              <h4 className="mt-1 font-vollkorn font-bold text-navy">
                You rent the model
              </h4>
              <p className="mt-2 text-[14.5px] leading-[1.55]">
                Fast to start. The lab owns the weights and the path. Useful
                for open-ended work. Not yours.
              </p>
            </article>
            <article className="spec-card">
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#B48A05]">
                Open weight
              </p>
              <h4 className="mt-1 font-vollkorn font-bold text-navy">
                You specialize the model
              </h4>
              <p className="mt-2 text-[14.5px] leading-[1.55]">
                Run the weights on your estate. Align them to your data. This
                is the move enterprise is making.
              </p>
            </article>
            <article className="spec-card">
              <p className="text-[12px] font-bold uppercase tracking-[0.1em] text-[#B48A05]">
                Open source
              </p>
              <h4 className="mt-1 font-vollkorn font-bold text-navy">
                You can keep the stack
              </h4>
              <p className="mt-2 text-[14.5px] leading-[1.55]">
                See it, run it, and own the path. Closest to a model the
                company actually keeps.
              </p>
            </article>
          </div>
          <div className="model-grid">
            {models.map(([file, alt, name]) => (
              <article key={file} className="model-card">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={`/media/models/${file}`} alt={alt} />
                <p className="font-vollkorn text-[13px] font-bold text-navy">
                  {name}
                </p>
              </article>
            ))}
          </div>
          <p className="waves-caption" style={{ marginTop: 12 }}>
            Frontier seats. Useful. Not the destination.
          </p>
        </div>
      </section>

      <section className="p-section p-section--close">
        <div className="page-well">
          <h2 className="p-h2">Bring one consequential workflow.</h2>
          <p className="mx-auto mt-4 max-w-[42ch] text-[18px] leading-[1.6]">
            I will tell you whether it should become agentic, what it can
            change, and what must stay under human command.
          </p>
          <div className="mt-8">
            <Link href="/contact/" className="p-btn">
              <span className="p-gold-sq" aria-hidden="true" />
              Bring one workflow
            </Link>
          </div>
        </div>
      </section>
    </PresenceShell>
  );
}
