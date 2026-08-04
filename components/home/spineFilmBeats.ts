export type Beat = {
  n: string;
  chip: string;
  label: string;
  line: string;
};

export const BEATS: Beat[] = [
  {
    n: "01",
    chip: "Mess",
    label: "The mess",
    line: "Disparate systems, vendors that manage themselves, half-finished programs, and people as duct tape. No owned truth the business runs on.",
  },
  {
    n: "02",
    chip: "Data",
    label: "Data core",
    line: "One company-owned data and integration spine - every system writes to a truth the close and the audit can trust.",
  },
  {
    n: "03",
    chip: "People",
    label: "People who run it",
    line: "Workflows mapped to how work actually moves - warehouse floor to boardroom - not the vendor module chart.",
  },
  {
    n: "04",
    chip: "Control",
    label: "Control above vendors",
    line: "Program control the business owns - roadmap, delivery state, SI and vendor orchestration under one accountable rail.",
  },
  {
    n: "05",
    chip: "Adopt",
    label: "Keep running",
    line: "Transformation while the company still operates - adoption locks, training, continuous improvement - not go-live theater.",
  },
  {
    n: "06",
    chip: "Asset",
    label: "Owned production",
    line: "A living operating asset the business keeps - and agents that run under boundaries, human validation, and named owners.",
  },
];

export const MOBILE_BEATS: Array<{ beat: number; label: string; line: string }> = [
  {
    beat: 1,
    label: "The mess",
    line: "Disparate systems, vendors that manage themselves, half-finished programs, and people as duct tape. No owned truth the business runs on.",
  },
  {
    beat: 3,
    label: "Data core · People who run it",
    line: "Company-owned data spine the close and audit can trust. Workflows mapped to how work actually moves - floor to boardroom.",
  },
  {
    beat: 5,
    label: "Control above vendors · Keep running",
    line: "Business-owned program control - then keep the company running while transforming. Continuous improvement, not go-live theater.",
  },
  {
    beat: 6,
    label: "Owned production",
    line: "A living operating asset the business keeps - agents under boundaries, human validation, and named owners.",
  },
];

/** Even sixths - hard cuts, no muddy mid-fade zone. */
export function beatFor(p: number): number {
  if (p < 1 / 6) return 1;
  if (p < 2 / 6) return 2;
  if (p < 3 / 6) return 3;
  if (p < 4 / 6) return 4;
  if (p < 5 / 6) return 5;
  return 6;
}

/** Progress midpoint for a beat (1-6). */
export function progressForBeat(beat: number): number {
  return Math.min(0.99, (beat - 0.5) / 6);
}
