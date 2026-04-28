"use client";

import { useId, useState } from "react";

type Status = "idle" | "submitting" | "success" | "error";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");
  const [hp, setHp] = useState("");

  const [status, setStatus] = useState<Status>("idle");
  const [leadId, setLeadId] = useState<string | null>(null);

  const idBase = useId();
  const nameId = `${idBase}-name`;
  const emailId = `${idBase}-email`;
  const companyId = `${idBase}-company`;
  const roleId = `${idBase}-role`;
  const messageId = `${idBase}-message`;
  const messageHelpId = `${idBase}-message-help`;
  const hpId = `${idBase}-hp`;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (status === "submitting") return;
    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, company, role, message, _hp: hp }),
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
    "w-full bg-white text-d2-ink font-body text-[16px] px-3 py-3 border border-d2-stone/60 focus:outline-none focus:border-d2-forest focus:border-2 focus:px-[11px] focus:py-[11px] transition-colors";
  const labelClasses = "block font-body text-[14px] text-d2-ink mb-1.5";

  if (status === "success") {
    return (
      <div className="space-y-3">
        <p className="font-display text-d2-forest text-[22px] leading-snug">
          Thanks. I&rsquo;ll respond from{" "}
          <a
            href="mailto:robert@idigdata.com"
            className="border-b border-d2-forest/40 hover:border-d2-forest"
          >
            robert@idigdata.com
          </a>{" "}
          within 48 hours.
        </p>
        {leadId && leadId !== "silenced" ? (
          <p className="font-body text-[13px] text-d2-stone">
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
          className="border-l-2 border-d2-copper bg-d2-copper/5 px-4 py-3 font-body text-[14px] text-d2-ink"
        >
          Something went wrong. Try the direct email above, or try again.
        </div>
      ) : null}

      {/* Honeypot — visually hidden, off-tabflow, hidden from AT */}
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
        <label htmlFor={companyId} className={labelClasses}>
          Company
        </label>
        <input
          id={companyId}
          name="company"
          type="text"
          required
          autoComplete="organization"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
          className={inputClasses}
          disabled={status === "submitting"}
        />
      </div>

      <div>
        <label htmlFor={roleId} className={labelClasses}>
          Role
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
        <label htmlFor={messageId} className={labelClasses}>
          What brings you?
        </label>
        <textarea
          id={messageId}
          name="message"
          rows={5}
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-describedby={messageHelpId}
          className={`${inputClasses} resize-y`}
          disabled={status === "submitting"}
        />
        <p id={messageHelpId} className="mt-1.5 font-body text-[13px] text-d2-warmgray">
          A sentence about the situation. The data core, the transformation
          question, the agentic readiness gap &mdash; whatever&rsquo;s true.
        </p>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-block font-body font-semibold text-[16px] px-7 py-3.5 bg-d2-forest text-white hover:bg-d2-forest/90 transition-colors focus:outline-2 focus:outline-d2-stone focus:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? "Sending…" : "Send"}
        </button>
      </div>
    </form>
  );
}
