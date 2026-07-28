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
    line: "Disparate systems, vendor gatekeepers, half-finished implementations, undocumented customizations, duct tape — and people doing heroic work to make it all hold. No owned common data model. That is the mess.",
  },
  {
    n: "02",
    chip: "Data",
    label: "Data core",
    line: "Noise comes down as the sovereign data core seats. One owned model every vendor writes to — and a control layer the close and the audit can trust.",
  },
  {
    n: "03",
    chip: "People",
    label: "People — functional groups",
    line: "Workflows are for the people who run them. Groups dock onto the spine by how work actually moves — not the org chart, not the vendor module. Happy systems, happy people.",
  },
  {
    n: "04",
    chip: "Control",
    label: "Project management — control center",
    line: "Most transformations rent project management from the partner. The business has to own it. Roadmap and timeline above; agile tasks and stories at the execution level — visibility for the people doing the work and the executives steering it. Stakeholders, milestones, deliverables — one control rail.",
  },
  {
    n: "05",
    chip: "Adopt",
    label: "Adoption locks",
    line: "Go-live is not adoption. The business owns an ordered path: order, test, train, SOP, UAT, go-live — then continuous improvement. Without those locks, the system is installed and people stay the duct tape.",
  },
  {
    n: "06",
    chip: "Asset",
    label: "Living asset",
    line: "A living asset is what the business keeps when the program ends — a sovereign data core with the six process constellations running around it. Owned, not rented: you can run it, extend it, and the CFO can defend it as capital — not another expense line.",
  },
];

export const MOBILE_BEATS: Array<{ beat: number; label: string; line: string }> = [
  {
    beat: 1,
    label: "The mess",
    line: "Disparate systems, vendor gatekeepers, half-finished implementations, undocumented customizations, duct tape — and people doing heroic work to make it all hold. No owned common data model. That is the mess.",
  },
  {
    beat: 3,
    label: "Data core · People — functional groups",
    line: "The sovereign data core seats — one owned model with a control layer the close and audit can trust. Workflows are for the people who run them. Happy systems, happy people.",
  },
  {
    beat: 5,
    label: "Control center · Adoption locks",
    line: "Business-owned project control — then adoption: order, test, train, SOP, UAT, go-live, continuous improvement. Go-live is not adoption.",
  },
  {
    beat: 6,
    label: "Living asset",
    line: "What the business keeps when the program ends — sovereign data core, six constellations, owned not rented. Runnable, extendable, CFO-defensible as capital.",
  },
];

/** Even sixths — hard cuts, no muddy mid-fade zone. */
export function beatFor(p: number): number {
  if (p < 1 / 6) return 1;
  if (p < 2 / 6) return 2;
  if (p < 3 / 6) return 3;
  if (p < 4 / 6) return 4;
  if (p < 5 / 6) return 5;
  return 6;
}

/** Progress midpoint for a beat (1–6). */
export function progressForBeat(beat: number): number {
  return Math.min(0.99, (beat - 0.5) / 6);
}
