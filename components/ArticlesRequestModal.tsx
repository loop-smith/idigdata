"use client";

import { useEffect, useId, useRef, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

type Props = {
  open: boolean;
  onClose: () => void;
  /** If provided when the modal opens, this article's checkbox starts pre-checked. */
  prefilledSlug?: string;
};

type ArticleChoice = {
  slug: string;
  label: string;
};

const ARTICLE_CHOICES: ArticleChoice[] = [
  {
    slug: "transformation-and-the-people-of-it",
    label: "Article 1 — You Don't Buy a Transformation. You Build One.",
  },
  {
    slug: "the-mechanics",
    label: "Article 2 — The Mechanics of the Build",
  },
  {
    slug: "applied-agentics",
    label: "Article 3 — Applied Agentics — The Business Asset",
  },
];

export default function ArticlesRequestModal({ open, onClose, prefilledSlug }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [company, setCompany] = useState("");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");
  const [selectedSlugs, setSelectedSlugs] = useState<Set<string>>(new Set());
  const [status, setStatus] = useState<Status>("idle");
  const [leadId, setLeadId] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const dialogRef = useRef<HTMLDivElement>(null);
  const nameInputRef = useRef<HTMLInputElement>(null);

  const idBase = useId();
  const titleId = `${idBase}-title`;
  const nameId = `${idBase}-name`;
  const emailId = `${idBase}-email`;
  const roleId = `${idBase}-role`;
  const companyId = `${idBase}-company`;
  const messageId = `${idBase}-message`;
  const hpId = `${idBase}-hp`;
  const articlesLegendId = `${idBase}-articles-legend`;
  const articlesErrorId = `${idBase}-articles-error`;

  useEffect(() => {
    if (open && prefilledSlug) {
      setSelectedSlugs(new Set([prefilledSlug]));
      setValidationError(null);
    }
  }, [open, prefilledSlug]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
      }
      if (e.key === "Tab" && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input:not([disabled]):not([type="hidden"]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])',
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const focusTimer = window.setTimeout(() => {
      nameInputRef.current?.focus();
    }, 0);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      window.clearTimeout(focusTimer);
    };
  }, [open, onClose]);

  if (!open) return null;

  function toggleSlug(slug: string) {
    setSelectedSlugs((prev) => {
      const next = new Set(prev);
      if (next.has(slug)) {
        next.delete(slug);
      } else {
        next.add(slug);
      }
      return next;
    });
    if (validationError) setValidationError(null);
  }

  function selectAll() {
    setSelectedSlugs(new Set(ARTICLE_CHOICES.map((c) => c.slug)));
    if (validationError) setValidationError(null);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    if (selectedSlugs.size === 0) {
      setValidationError("Pick at least one article to request.");
      return;
    }
    setValidationError(null);
    setStatus("submitting");

    try {
      const payload = {
        name,
        email,
        role,
        company,
        message,
        interestType: "article_request" as const,
        articleSlugs: Array.from(selectedSlugs),
        _hp: hp,
      };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setLeadId(data.lead_id ?? null);
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClasses =
    "w-full bg-white text-ink font-body text-[16px] px-3 py-3 border border-stone/60 focus:outline-none focus:border-navy focus:border-2 focus:px-[11px] focus:py-[11px] transition-colors";
  const labelClasses = "block font-body text-[14px] text-ink mb-1.5";

  const selectionCount = selectedSlugs.size;
  const submitLabel =
    status === "submitting"
      ? "Sending…"
      : selectionCount === 1
        ? "Request the document"
        : "Request the documents";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
      role="presentation"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-navy/50"
        onClick={onClose}
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative w-full max-w-[540px] max-h-[90vh] overflow-y-auto bg-cream border border-stone/50 shadow-[0_10px_40px_rgba(20,40,64,0.25)]"
      >
        <div className="flex items-start justify-between px-6 pt-6 pb-2">
          <h2
            id={titleId}
            className="font-vollkorn font-semibold text-navy text-[24px] leading-tight"
          >
            Request access
          </h2>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="-mr-2 -mt-1 p-2 text-stone hover:text-navy transition-colors focus:outline-2 focus:outline-stone focus:outline-offset-2"
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
            >
              <path d="M3 3L15 15M15 3L3 15" />
            </svg>
          </button>
        </div>

        <div className="px-6 pb-6">
          {status === "success" ? (
            <div className="space-y-3 pt-4">
              <p className="font-display text-navy text-[20px] leading-snug">
                I&rsquo;ll send the requested {selectionCount === 1 ? "document" : "documents"} within 24 hours. Thanks for reading.
              </p>
              {leadId && leadId !== "silenced" ? (
                <p className="font-body text-[13px] text-stone">
                  Reference: <span className="font-mono">{leadId}</span>
                </p>
              ) : null}
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="font-body text-[14px] text-navy border-b border-navy/40 hover:border-navy"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5 pt-2">
              {status === "error" ? (
                <div
                  role="alert"
                  className="border-l-2 border-aubergine bg-aubergine/5 px-4 py-3 font-body text-[14px] text-ink"
                >
                  Something went wrong. Try again, or email{" "}
                  <a
                    href="mailto:robert@idigdata.com"
                    className="border-b border-navy/40 hover:border-navy"
                  >
                    robert@idigdata.com
                  </a>{" "}
                  directly.
                </div>
              ) : null}

              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                }}
              >
                <label htmlFor={hpId}>Leave this field empty</label>
                <input
                  id={hpId}
                  name="_hp"
                  type="text"
                  tabIndex={-1}
                  autoComplete="off"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                />
              </div>

              <div>
                <label htmlFor={nameId} className={labelClasses}>
                  Name
                </label>
                <input
                  ref={nameInputRef}
                  id={nameId}
                  name="name"
                  type="text"
                  required
                  autoComplete="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={inputClasses}
                  disabled={status === "submitting"}
                />
              </div>

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
                  disabled={status === "submitting"}
                />
              </div>

              <div>
                <label htmlFor={roleId} className={labelClasses}>
                  Role / title
                </label>
                <input
                  id={roleId}
                  name="role"
                  type="text"
                  required
                  autoComplete="organization-title"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={inputClasses}
                  disabled={status === "submitting"}
                />
              </div>

              <div>
                <label htmlFor={companyId} className={labelClasses}>
                  Company <span className="text-stone text-[13px]">(optional)</span>
                </label>
                <input
                  id={companyId}
                  name="company"
                  type="text"
                  autoComplete="organization"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className={inputClasses}
                  disabled={status === "submitting"}
                />
              </div>

              <fieldset
                aria-describedby={validationError ? articlesErrorId : undefined}
              >
                <legend id={articlesLegendId} className={labelClasses}>
                  Which articles?
                </legend>
                <div className="space-y-2">
                  {ARTICLE_CHOICES.map((c) => {
                    const checked = selectedSlugs.has(c.slug);
                    const cid = `${idBase}-art-${c.slug}`;
                    return (
                      <label
                        key={c.slug}
                        htmlFor={cid}
                        className="flex items-start gap-3 cursor-pointer p-2 -ml-2 hover:bg-cream-dark/40 transition-colors"
                      >
                        <input
                          id={cid}
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleSlug(c.slug)}
                          disabled={status === "submitting"}
                          className="mt-1 h-4 w-4 accent-navy"
                        />
                        <span className="font-body text-ink text-[14.5px] leading-snug">
                          {c.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
                <div className="mt-3">
                  <button
                    type="button"
                    onClick={selectAll}
                    disabled={status === "submitting" || selectionCount === ARTICLE_CHOICES.length}
                    className="font-body text-[13px] text-navy border-b border-navy/40 hover:border-navy disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Send all three
                  </button>
                </div>
                <div
                  id={articlesErrorId}
                  aria-live="polite"
                  className="mt-2 min-h-[1.25rem] font-body text-[13px] text-aubergine"
                >
                  {validationError ?? ""}
                </div>
              </fieldset>

              <div>
                <label htmlFor={messageId} className={labelClasses}>
                  Message{" "}
                  <span className="text-stone text-[13px]">(optional)</span>
                </label>
                <textarea
                  id={messageId}
                  name="message"
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`${inputClasses} resize-y`}
                  disabled={status === "submitting"}
                />
              </div>

              <div className="pt-2 flex items-center justify-between gap-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="font-body text-[14px] text-stone hover:text-navy transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex items-center gap-2 bg-navy text-cream px-7 py-3 rounded-full font-body text-[13px] font-semibold uppercase tracking-[0.18em] hover:bg-aubergine transition-colors focus:outline-2 focus:outline-stone focus:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitLabel}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
