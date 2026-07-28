"use client";

import { useId, useState } from "react";
import {
  INTEREST_OPTIONS,
  type InterestType,
} from "@/lib/contact/schema";
import { getAnonSessionId, trackWebsiteEvent } from "@/components/analytics/websiteEvents";

type Status = "idle" | "submitting" | "success" | "error";

export type { InterestType };

type Props = {
  showInterestSelect?: boolean;
};

export default function ContactForm({ showInterestSelect = false }: Props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [interest, setInterest] = useState<InterestType>("general");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [leadId, setLeadId] = useState<string | null>(null);

  const idBase = useId();
  const nameId = `${idBase}-name`;
  const emailId = `${idBase}-email`;
  const companyId = `${idBase}-company`;
  const roleId = `${idBase}-role`;
  const interestId = `${idBase}-interest`;
  const messageId = `${idBase}-message`;
  const messageHelpId = `${idBase}-message-help`;
  const hpId = `${idBase}-hp`;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      const payload = {
        name,
        email,
        company,
        role,
        message,
        interestType: interest,
        anon_session_id: getAnonSessionId(),
        _hp: hp,
      };
      const res = await fetch("/api/contact/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (res.ok && data.ok) {
        setLeadId(data.lead_id ?? null);
        trackWebsiteEvent({
          event_type: "contact_submit",
          payload: {
            interest_type: interest,
            lead_id: data.lead_id ?? null,
            company_present: Boolean(company.trim()),
          },
        });
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

  if (status === "success") {
    return (
      <div className="space-y-3">
        <p className="font-display text-navy text-[22px] leading-snug">
          Got it. This lands straight in my inbox &mdash; no bot, no queue. I
          read every one.
        </p>
        {leadId && leadId !== "silenced" ? (
          <p className="font-body text-[13px] text-warm-gray">
            Reference: <span className="font-mono">{leadId}</span>
          </p>
        ) : null}
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
      {status === "error" ? (
        <div
          role="alert"
          className="border-l-2 border-aubergine bg-aubergine/5 px-4 py-3 font-body text-[14px] text-ink"
        >
          Something went wrong. Try the direct email above, or try again.
        </div>
      ) : null}

      {/* Honeypot — visually hidden, off-tabflow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          padding: 0,
          margin: "-1px",
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          border: 0,
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
          Company <span className="text-warm-gray text-[13px]">(optional)</span>
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

      {showInterestSelect ? (
        <div>
          <label htmlFor={interestId} className={labelClasses}>
            Interest
          </label>
          <select
            id={interestId}
            name="interest"
            value={interest}
            onChange={(e) => setInterest(e.target.value as InterestType)}
            className={inputClasses}
            disabled={status === "submitting"}
          >
            {INTEREST_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      ) : null}

      <div>
        <label htmlFor={messageId} className={labelClasses}>
          What brings you?{" "}
          <span className="text-warm-gray text-[13px]">(optional)</span>
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-describedby={messageHelpId}
          className={`${inputClasses} resize-y`}
          disabled={status === "submitting"}
        />
        <p
          id={messageHelpId}
          className="mt-1.5 font-body text-[13px] text-warm-gray"
        >
          A sentence about the situation. The systems knot, the transformation
          mandate, the agentic question &mdash; whatever&rsquo;s true.
        </p>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center gap-2 rounded-[3px] bg-navy px-8 py-3.5 font-body text-[13px] font-semibold uppercase tracking-[0.18em] text-cream transition-colors hover:bg-aubergine focus:outline-2 focus:outline-offset-2 focus:outline-stone disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending…" : "Send"}
        </button>
      </div>
    </form>
  );
}
