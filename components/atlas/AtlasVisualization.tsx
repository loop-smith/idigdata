"use client";

import { useState } from "react";
import Link from "next/link";
import { renderInline } from "@/lib/articleRender";
import {
  PHASES,
  PLUGIN_ENTRY_POINTS,
  type PhaseEntry,
  type PluginShape,
} from "@/lib/atlas";

type Props = { defaultExpanded?: string };

const TOTAL_MONTHS = PHASES.reduce((sum, p) => sum + p.durationMonths, 0);

const PHASE_FILL: Record<PhaseEntry["type"], { bg: string; text: string }> = {
  pre: { bg: "bg-stone/70", text: "text-cream" },
  normal: { bg: "bg-navy", text: "text-cream" },
  "go-live": { bg: "bg-gold", text: "text-navy" },
  stable: { bg: "bg-gold/70", text: "text-navy" },
  post: { bg: "bg-stone/40", text: "text-navy" },
};

const SHAPE_COLOR: Record<PluginShape, string> = {
  Embedded: "bg-aubergine",
  Fractional: "bg-gold",
  Agentics: "bg-navy",
  "Diagnostic-only": "bg-stone",
};

function shapeLabel(shape: PluginShape) {
  if (shape === "Diagnostic-only") return "Diagnostic-only";
  return shape;
}

export default function AtlasVisualization({ defaultExpanded }: Props) {
  const [expanded, setExpanded] = useState<string | null>(
    defaultExpanded ?? null,
  );

  const expandedPhase = expanded
    ? PHASES.find((p) => p.code === expanded) ?? null
    : null;

  return (
    <div>
      {/* Phase bar visualization */}
      <div className="mt-2">
        <p className="font-body uppercase tracking-section text-[11px] text-stone mb-3">
          Engagement arc — phase bars sized by duration
        </p>
        {/* Mobile: vertical stack */}
        <div
          className="md:hidden flex flex-col gap-1"
          role="tablist"
          aria-label="Engagement phases"
        >
          {PHASES.map((phase) => {
            const fill = PHASE_FILL[phase.type];
            const isExpanded = expanded === phase.code;
            const markersHere = PLUGIN_ENTRY_POINTS.filter((m) =>
              m.phaseCodes.includes(phase.code),
            );
            return (
              <button
                key={phase.code}
                type="button"
                role="tab"
                aria-selected={isExpanded}
                aria-controls="atlas-phase-detail"
                onClick={() => setExpanded(isExpanded ? null : phase.code)}
                className={`relative ${fill.bg} ${fill.text} w-full px-4 py-3 flex items-center justify-between gap-3 transition-all duration-150 hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${
                  isExpanded ? "ring-2 ring-gold ring-offset-2 brightness-110" : ""
                }`}
              >
                <span className="flex items-center gap-3 min-w-0">
                  <span className="font-vollkorn font-bold text-[16px] leading-none flex-shrink-0">
                    {phase.code}
                  </span>
                  <span className="font-body text-[13px] truncate">
                    {phase.name}
                  </span>
                </span>
                <span className="flex items-center gap-2 flex-shrink-0">
                  {markersHere.map((m, i) => (
                    <span
                      key={`${m.shape}-${i}`}
                      className={`${SHAPE_COLOR[m.shape]} h-1.5 w-1.5 rounded-full`}
                      aria-label={`${shapeLabel(m.shape)} entry-point`}
                    />
                  ))}
                  <span className="font-body text-[10.5px] opacity-80 uppercase tracking-wider">
                    {phase.durationMonths}mo
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Desktop: horizontal phase bars */}
        <div className="hidden md:block">
          <div className="flex w-full gap-px" role="tablist" aria-label="Engagement phases">
            {PHASES.map((phase) => {
              const widthPct = (phase.durationMonths / TOTAL_MONTHS) * 100;
              const fill = PHASE_FILL[phase.type];
              const isExpanded = expanded === phase.code;
              return (
                <button
                  key={phase.code}
                  type="button"
                  role="tab"
                  aria-selected={isExpanded}
                  aria-controls="atlas-phase-detail"
                  onClick={() =>
                    setExpanded(isExpanded ? null : phase.code)
                  }
                  className={`relative ${fill.bg} ${fill.text} h-16 flex flex-col items-center justify-center transition-all duration-200 ease-out hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2 ${
                    isExpanded ? "ring-2 ring-gold ring-offset-2 brightness-110" : ""
                  }`}
                  style={{ flexBasis: `${widthPct}%`, minWidth: 0 }}
                  title={`${phase.code} — ${phase.name}`}
                >
                  <span className="font-vollkorn font-bold text-[15px] leading-none">
                    {phase.code}
                  </span>
                  <span className="font-body text-[10px] mt-1 opacity-90 px-1 truncate w-full text-center">
                    {phase.name}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Plug-in entry-point markers (desktop only) */}
          <div className="mt-3 relative h-7">
            <p className="absolute left-0 top-0 font-body uppercase tracking-section text-[10px] text-stone">
              Plug-in entry points
            </p>
            <div className="flex w-full gap-px mt-4">
              {PHASES.map((phase) => {
                const widthPct = (phase.durationMonths / TOTAL_MONTHS) * 100;
                const markersHere = PLUGIN_ENTRY_POINTS.filter((m) =>
                  m.phaseCodes.includes(phase.code),
                );
                return (
                  <div
                    key={`marker-${phase.code}`}
                    className="flex items-center justify-center gap-1 py-0.5"
                    style={{ flexBasis: `${widthPct}%`, minWidth: 0 }}
                  >
                    {markersHere.map((m, i) => (
                      <span
                        key={`${m.shape}-${i}`}
                        className={`${SHAPE_COLOR[m.shape]} h-2 w-2 rounded-full`}
                        title={`${shapeLabel(m.shape)} — ${m.caption}`}
                        aria-label={`${shapeLabel(m.shape)} entry-point at ${phase.code}`}
                      />
                    ))}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Plug-in legend */}
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] font-body text-warm-gray">
          {(["Embedded", "Fractional", "Agentics", "Diagnostic-only"] as PluginShape[]).map(
            (shape) => (
              <span key={shape} className="inline-flex items-center gap-2">
                <span
                  className={`${SHAPE_COLOR[shape]} h-2 w-2 rounded-full`}
                  aria-hidden="true"
                />
                <span>{shapeLabel(shape)}</span>
              </span>
            ),
          )}
        </div>
      </div>

      {/* Expanded detail panel */}
      <div
        id="atlas-phase-detail"
        role="tabpanel"
        className="mt-10 min-h-[260px]"
      >
        {expandedPhase ? (
          <PhaseDetail phase={expandedPhase} onClose={() => setExpanded(null)} />
        ) : (
          <div className="border border-stone/40 bg-cream p-6 md:p-8 text-center">
            <p className="font-display italic text-stone text-[16px] leading-snug">
              Click a phase bar to expand.
            </p>
            <p className="mt-2 font-body text-warm-gray text-[14px]">
              Each phase carries its own engagement-shape entry point and the
              triggers a reader recognizes from their own organization.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function PhaseDetail({
  phase,
  onClose,
}: {
  phase: PhaseEntry;
  onClose: () => void;
}) {
  const fill = PHASE_FILL[phase.type];
  return (
    <article className="border border-stone/40 bg-cream p-6 md:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-body uppercase tracking-section text-[11px] text-stone">
            {phase.sprints} · {phase.durationMonths} month{phase.durationMonths === 1 ? "" : "s"}
          </p>
          <h2 className="mt-1 font-vollkorn font-bold text-navy text-[26px] md:text-[32px] leading-tight tracking-tight">
            <span
              className={`inline-block ${fill.bg} ${fill.text} px-2 py-0.5 mr-2 align-middle text-[18px] font-bold`}
            >
              {phase.code}
            </span>
            {phase.name}
          </h2>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="font-body text-stone text-[13px] hover:text-navy"
          aria-label="Close phase detail"
        >
          Close ×
        </button>
      </div>

      <div className="mt-5">
        <p className="font-body uppercase tracking-section text-[11px] text-stone mb-2">
          What happens here
        </p>
        <p className="text-[16px] text-ink leading-relaxed">
          {renderInline(phase.whatHappens)}
        </p>
      </div>

      {phase.callout ? (
        <div className="mt-6 border-l-4 border-gold pl-4 py-1">
          <p className="font-display italic text-navy text-[15.5px] leading-snug">
            {renderInline(phase.callout)}
          </p>
        </div>
      ) : null}

      {phase.pluginShapes.length > 0 ? (
        <div className="mt-6">
          <p className="font-body uppercase tracking-section text-[11px] text-stone mb-2">
            Plug-in shape{phase.pluginShapes.length === 1 ? "" : "s"}
          </p>
          <div className="flex flex-wrap gap-2">
            {phase.pluginShapes.map((shape) => (
              <span
                key={shape}
                className="inline-flex items-center gap-2 border border-stone/50 px-3 py-1 text-[13px] font-body text-navy"
              >
                <span
                  className={`${SHAPE_COLOR[shape]} h-2 w-2 rounded-full`}
                  aria-hidden="true"
                />
                {shapeLabel(shape)}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {phase.trigger ? (
        <div className="mt-6">
          <p className="font-body uppercase tracking-section text-[11px] text-stone mb-2">
            Trigger conditions
          </p>
          <p className="text-[15px] text-ink leading-relaxed">
            {renderInline(phase.trigger)}
          </p>
        </div>
      ) : null}

      {phase.relatedStubs.length > 0 ? (
        <div className="mt-6">
          <p className="font-body uppercase tracking-section text-[11px] text-stone mb-2">
            Substance stubs (atlas entries)
          </p>
          <ul className="space-y-1">
            {phase.relatedStubs.map((s) => (
              <li
                key={s.code}
                className="font-body text-[14px] text-ink"
              >
                <span className="font-mono text-stone text-[12px] mr-2">
                  {s.code}
                </span>
                {s.title}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {phase.feedsArticle ? (
        <div className="mt-7 pt-5 border-t border-stone/30">
          <p className="font-body uppercase tracking-section text-[11px] text-stone mb-2">
            Read more
          </p>
          <Link
            href={`/articles/${phase.feedsArticle.slug}/`}
            className="font-body text-navy text-[15px] border-b border-navy/40 hover:border-navy"
          >
            {phase.feedsArticle.title} →
          </Link>
        </div>
      ) : null}
    </article>
  );
}
