const stages = [
  {
    n: "01",
    title: "Chaos in",
    body: "Systems, spreadsheets, exceptions, and tribal process truth.",
  },
  {
    n: "02",
    title: "Agentic ETL",
    body: "A governed pipe pulls operating reality into view.",
  },
  {
    n: "03",
    title: "Common Data Model",
    body: "The business gets one language for the work.",
  },
  {
    n: "04",
    title: "Operating map",
    body: "Six process constellations show where the work actually moves.",
  },
  {
    n: "05",
    title: "PM Suite",
    body: "Delivery runs through one cadence, one owner, one map.",
  },
  {
    n: "06",
    title: "3-cycle SOP",
    body: "E2E, UAT, and go-live validation write the living procedure.",
  },
  {
    n: "07",
    title: "Living asset",
    body: "The company owns the operating system at handoff.",
  },
];

export default function BossJourneyFigure() {
  return (
    <figure
      className="mx-auto mt-7 w-full max-w-3xl border border-navy/15 bg-cream px-4 py-5 md:px-6 md:py-6"
      aria-labelledby="boss-journey-title"
    >
      <div className="mb-5 flex flex-col gap-3 border-b border-navy/15 pb-4 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-body text-[10px] font-semibold uppercase tracking-[0.22em] text-warm-gray">
            BOSS journey
          </p>
          <h3
            id="boss-journey-title"
            className="mt-1 font-vollkorn text-[23px] font-bold leading-tight text-navy md:text-[27px]"
          >
            From scattered work to a living asset.
          </h3>
        </div>
        <p className="font-body text-[11px] font-semibold uppercase tracking-[0.2em] text-[#2F7D4F]">
          green/green = done/done
        </p>
      </div>

      <ol className="grid grid-cols-1 gap-3 md:grid-cols-7 md:gap-2">
        {stages.map((stage, index) => {
          const isFinal = index === stages.length - 1;
          return (
            <li key={stage.n} className="relative">
              <div
                className={`h-full min-h-[128px] border px-3 py-3 ${
                  isFinal
                    ? "border-[#2F7D4F] bg-[#EEF8F1]"
                    : "border-navy/15 bg-white"
                }`}
              >
                <div className="mb-3 flex items-center justify-between gap-2">
                  <span
                    className={`font-body text-[10px] font-semibold tracking-[0.18em] ${
                      isFinal ? "text-[#2F7D4F]" : "text-warm-gray"
                    }`}
                  >
                    {stage.n}
                  </span>
                  {isFinal ? (
                    <span
                      aria-hidden="true"
                      className="h-2.5 w-2.5 rounded-full bg-[#2F7D4F]"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="h-2 w-2 border border-gold bg-gold/35"
                    />
                  )}
                </div>
                <p className="font-vollkorn text-[15px] font-bold leading-tight text-navy">
                  {stage.title}
                </p>
                <p className="mt-2 font-body text-[12.5px] leading-[1.35] text-navy/75">
                  {stage.body}
                </p>
              </div>
              {index < stages.length - 1 ? (
                <div
                  aria-hidden="true"
                  className="hidden md:block absolute left-[calc(100%-2px)] top-1/2 z-10 h-px w-[calc(100%/7+8px)] bg-navy/25"
                />
              ) : null}
            </li>
          );
        })}
      </ol>

      <div className="mt-5 grid grid-cols-1 gap-3 border-t border-navy/15 pt-4 md:grid-cols-2">
        <p className="font-vollkorn text-[15px] italic leading-snug text-navy">
          Rent the pipe. Own the synthesis.
        </p>
        <p className="font-vollkorn text-[15px] italic leading-snug text-navy md:text-right">
          No documentation drift, ever.
        </p>
      </div>
    </figure>
  );
}
