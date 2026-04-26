"use client";

import { useId, useRef, useState, useEffect } from "react";
import { track } from "@/lib/track";

type IntakeFormProps = {
  surface: "modal" | "page";
  onSuccess?: () => void;
  autoFocusFirst?: boolean;
};

const ENGAGEMENT_OPTIONS: { value: string; label: string }[] = [
  { value: "transformation", label: "A transformation I'm sizing up" },
  { value: "systems", label: "A systems landscape that's in the way" },
  { value: "agentics", label: "An agentics conversation past the pilot stage" },
  { value: "other", label: "Something else / not sure yet" },
];

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function IntakeForm({
  surface,
  onSuccess,
  autoFocusFirst = false,
}: IntakeFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [engagementShape, setEngagementShape] = useState<string>("");
  const [context, setContext] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nameRef = useRef<HTMLInputElement>(null);
  const idBase = useId();
  const nameId = `${idBase}-name`;
  const emailId = `${idBase}-email`;
  const companyId = `${idBase}-company`;
  const companyHelpId = `${idBase}-company-help`;
  const engagementLegendId = `${idBase}-engagement-legend`;
  const contextId = `${idBase}-context`;
  const contextHelpId = `${idBase}-context-help`;
  const contextCounterId = `${idBase}-context-counter`;

  useEffect(() => {
    if (autoFocusFirst) nameRef.current?.focus();
  }, [autoFocusFirst]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    if (
      !name.trim() ||
      !EMAIL_RE.test(email) ||
      !engagementShape
    ) {
      setError("Please complete the required fields.");
      return;
    }

    track("intake_form_submitted", {
      engagement_shape: engagementShape,
      surface,
      has_company: Boolean(company.trim()),
      has_context: Boolean(context.trim()),
    });

    setSubmitting(true);

    // TODO(dispatch-007): POST to /api/intake — write to Supabase, fire ack + notification emails.
    await new Promise((r) => setTimeout(r, 600));
    // eslint-disable-next-line no-console
    console.log("[IntakeForm stub] Submitted:", {
      name,
      email,
      company,
      engagementShape,
      context,
    });

    setSubmitting(false);
    setSubmitted(true);

    track("intake_form_succeeded", {
      engagement_shape: engagementShape,
      surface,
    });

    onSuccess?.();
  }

  const isPage = surface === "page";
  const fieldGap = isPage ? "space-y-7" : "space-y-5";
  const inputClasses =
    "w-full bg-white text-d2-ink font-body text-[16px] px-3 py-3 border border-d2-stone/60 focus:outline-none focus:border-d2-forest focus:border-2 focus:px-[11px] focus:py-[11px] transition-colors";
  const labelClasses = "block font-body text-[14px] text-d2-ink mb-1.5";
  const helperClasses = "mt-1.5 font-body text-[13px] text-d2-warmgray";

  if (submitted) {
    return (
      <div
        role="status"
        aria-live="polite"
        className={isPage ? "py-4" : "py-2"}
      >
        <h3 className="font-display font-bold text-d2-forest text-[24px] md:text-[28px]">
          Thanks — got it.
        </h3>
        <p className="mt-4 font-body text-[16px] text-d2-ink leading-relaxed">
          A short acknowledgment email just landed in your inbox. Robert will be
          in touch within one business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className={isPage ? "space-y-0" : "space-y-0"}
    >
      {error && (
        <div
          role="alert"
          aria-live="polite"
          className="mb-5 font-body text-[15px] text-d2-aubergine"
        >
          {error}
        </div>
      )}

      <div className={fieldGap}>
        {/* Name */}
        <div>
          <label htmlFor={nameId} className={labelClasses}>
            Your name
          </label>
          <input
            ref={nameRef}
            id={nameId}
            name="name"
            type="text"
            required
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={inputClasses}
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor={emailId} className={labelClasses}>
            Email
          </label>
          <input
            id={emailId}
            name="email"
            type="email"
            required
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={inputClasses}
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor={companyId} className={labelClasses}>
            Company
          </label>
          <input
            id={companyId}
            name="company"
            type="text"
            autoComplete="organization"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            aria-describedby={companyHelpId}
            className={inputClasses}
          />
          <p id={companyHelpId} className={helperClasses}>
            Or the engagement context, if you're not speaking for a company.
          </p>
        </div>

        {/* Engagement shape */}
        <fieldset
          aria-labelledby={engagementLegendId}
          aria-required="true"
        >
          <legend
            id={engagementLegendId}
            className="font-body text-[14px] text-d2-ink mb-2.5"
          >
            What brings you here?
          </legend>
          <div className="space-y-2">
            {ENGAGEMENT_OPTIONS.map((opt) => {
              const optId = `${idBase}-engagement-${opt.value}`;
              const checked = engagementShape === opt.value;
              return (
                <label
                  key={opt.value}
                  htmlFor={optId}
                  className="flex items-start gap-3 cursor-pointer group py-1"
                >
                  <input
                    id={optId}
                    type="radio"
                    name={`${idBase}-engagement`}
                    value={opt.value}
                    required
                    checked={checked}
                    onChange={() => setEngagementShape(opt.value)}
                    className="sr-only peer"
                  />
                  <span
                    aria-hidden
                    className={`mt-1 inline-flex items-center justify-center shrink-0 w-4 h-4 rounded-full border ${
                      checked
                        ? "border-d2-forest"
                        : "border-d2-stone group-hover:border-d2-forest"
                    } peer-focus-visible:ring-2 peer-focus-visible:ring-d2-forest peer-focus-visible:ring-offset-1`}
                  >
                    {checked && (
                      <span className="w-2 h-2 rounded-full bg-d2-forest" />
                    )}
                  </span>
                  <span
                    className={`font-body text-[15px] ${
                      checked
                        ? "text-d2-ink"
                        : "text-d2-warmgray group-hover:text-d2-ink"
                    }`}
                  >
                    {opt.label}
                  </span>
                </label>
              );
            })}
          </div>
        </fieldset>

        {/* Context */}
        <div>
          <label htmlFor={contextId} className={labelClasses}>
            A little context
          </label>
          <textarea
            id={contextId}
            name="context"
            rows={4}
            value={context}
            onChange={(e) => setContext(e.target.value)}
            aria-describedby={`${contextHelpId} ${contextCounterId}`}
            className={`${inputClasses} resize-y`}
          />
          <div className="mt-1.5 flex items-start justify-between gap-4">
            <p id={contextHelpId} className="font-body text-[13px] text-d2-warmgray">
              Sector, revenue ballpark, timing, whatever frames it. Skip if you'd
              rather talk live.
            </p>
            <p
              id={contextCounterId}
              aria-live="off"
              className={`font-body text-[12px] shrink-0 ${
                context.length > 500 ? "text-d2-aubergine" : "text-d2-stone"
              }`}
            >
              {context.length} / 500
            </p>
          </div>
        </div>

        {/* Submit */}
        <div className={isPage ? "pt-2" : "pt-1"}>
          <button
            type="submit"
            disabled={submitting}
            className={`${
              isPage
                ? "w-full md:w-auto md:min-w-[280px] px-8 py-4 text-[17px]"
                : "w-full px-6 py-3.5 text-[16px]"
            } inline-block bg-d2-forest text-white font-body font-semibold transition-opacity hover:bg-d2-forest/95 disabled:opacity-70 disabled:cursor-not-allowed focus:outline-2 focus:outline-d2-stone focus:outline-offset-2`}
          >
            {submitting ? "Sending…" : "Start the conversation →"}
          </button>
        </div>
      </div>
    </form>
  );
}
