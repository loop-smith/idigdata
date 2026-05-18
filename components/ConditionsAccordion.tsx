"use client";

import { useState } from "react";

type Condition = {
  n: string;
  h: string;
  body: string;
};

export default function ConditionsAccordion({ conditions }: { conditions: Condition[] }) {
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const toggle = (n: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(n)) next.delete(n);
      else next.add(n);
      return next;
    });
  };

  return (
    <div className="border-t border-navy/15 max-w-[860px]">
      {conditions.map((c) => {
        const isOpen = expanded.has(c.n);
        return (
          <div key={c.n} className="border-b border-navy/15">
            <button
              type="button"
              onClick={() => toggle(c.n)}
              aria-expanded={isOpen}
              aria-controls={`condition-body-${c.n}`}
              className="w-full grid grid-cols-[56px_1fr_36px] md:grid-cols-[72px_1fr_44px] gap-4 md:gap-6 py-5 md:py-6 text-left items-start hover:bg-navy/[0.02] transition-colors"
            >
              <span className="font-vollkorn font-bold text-gold text-[26px] md:text-[30px] leading-none pt-1">
                {c.n}
              </span>
              <span className="self-center">
                <h3 className="font-vollkorn font-bold text-navy text-[18px] md:text-[20px] leading-[1.3]">
                  {c.h}
                </h3>
              </span>
              <span
                className={`text-warm-gray text-[24px] md:text-[28px] leading-none pt-1 transition-transform duration-200 ${
                  isOpen ? "rotate-45" : ""
                }`}
                aria-hidden="true"
              >
                +
              </span>
            </button>
            <div
              id={`condition-body-${c.n}`}
              className={`grid overflow-hidden transition-[grid-template-rows] duration-300 ease-in-out ${
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="grid grid-cols-[56px_1fr_36px] md:grid-cols-[72px_1fr_44px] gap-4 md:gap-6 pb-5 md:pb-6">
                  <span></span>
                  <p className="font-body text-navy text-[14.5px] md:text-[15.5px] leading-[1.6]">
                    {c.body}
                  </p>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
