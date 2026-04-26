"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import IntakeForm from "./IntakeForm";
import { track } from "@/lib/track";

type IntakeLaunchButtonProps = {
  label?: string;
  variant?: "primary" | "onForest";
  location: string;
};

export default function IntakeLaunchButton({
  label = "Start a conversation →",
  variant = "primary",
  location,
}: IntakeLaunchButtonProps) {
  const [open, setOpen] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [formKey, setFormKey] = useState(0);
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    // Reset after close so the next open is a clean form.
    setSucceeded(false);
    setFormKey((k) => k + 1);
    // Return focus to the trigger.
    requestAnimationFrame(() => triggerRef.current?.focus());
  }, []);

  // ESC + body scroll lock
  useEffect(() => {
    if (!open) return;

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.stopPropagation();
        close();
      }
    }
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, close]);

  const baseBtn =
    "inline-block font-body font-semibold text-[16px] px-7 py-3.5 transition-colors focus:outline-2 focus:outline-offset-2";
  const primary =
    "bg-d2-forest text-white hover:bg-d2-forest/90 focus:outline-d2-stone";
  const onForest =
    "bg-white text-d2-forest hover:bg-white/90 focus:outline-white";

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => {
          track("intake_cta_clicked", { variant, location });
          setOpen(true);
          track("intake_modal_opened", { variant, location });
        }}
        className={`${baseBtn} ${variant === "onForest" ? onForest : primary}`}
      >
        {label}
      </button>

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="intake-modal-title"
          className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 md:p-8"
        >
          {/* Backdrop */}
          <button
            type="button"
            aria-label="Close"
            tabIndex={-1}
            onClick={close}
            className="fixed inset-0 bg-d2-forest/50 cursor-default"
          />

          {/* Panel */}
          <div className="relative w-full max-w-[540px] bg-white shadow-xl my-auto">
            <div className="flex items-start justify-between gap-4 px-6 md:px-8 pt-6 md:pt-7 pb-3">
              <div className={succeeded ? "opacity-0 pointer-events-none" : ""}>
                <h2
                  id="intake-modal-title"
                  className="font-display font-bold text-d2-forest text-[24px] md:text-[28px] leading-tight"
                >
                  Start a conversation.
                </h2>
                <p className="mt-2 font-body text-[15px] text-d2-ink leading-snug">
                  Short form — about a minute. An acknowledgment email
                  confirms receipt; Robert responds within one business day.
                </p>
              </div>
              <button
                ref={closeBtnRef}
                type="button"
                aria-label="Close"
                onClick={close}
                className="shrink-0 -mr-2 -mt-1 w-9 h-9 flex items-center justify-center text-d2-warmgray hover:text-d2-ink focus:outline-2 focus:outline-d2-stone focus:outline-offset-2"
              >
                <span aria-hidden className="text-[22px] leading-none">×</span>
              </button>
            </div>

            <div className={`px-6 md:px-8 pb-6 md:pb-7 ${succeeded ? "-mt-4" : ""}`}>
              <IntakeForm
                key={formKey}
                surface="modal"
                autoFocusFirst
                onSuccess={() => setSucceeded(true)}
              />

              {succeeded && (
                <div className="mt-6 text-right">
                  <button
                    type="button"
                    onClick={close}
                    className="font-body text-[15px] text-d2-forest hover:underline focus:outline-2 focus:outline-d2-stone focus:outline-offset-2"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
