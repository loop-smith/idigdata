"use client";

import { useId, useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [message, setMessage] = useState("");

  const idBase = useId();
  const nameId = `${idBase}-name`;
  const emailId = `${idBase}-email`;
  const companyId = `${idBase}-company`;
  const roleId = `${idBase}-role`;
  const messageId = `${idBase}-message`;
  const messageHelpId = `${idBase}-message-help`;

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = `idigdata inquiry — ${name.trim() || "—"}${
      company.trim() ? `, ${company.trim()}` : ""
    }`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${company}`,
      `Role: ${role}`,
      "",
      message,
    ];
    const href = `mailto:robert@idigdata.com?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
    window.location.href = href;
  }

  const inputClasses =
    "w-full bg-white text-d2-ink font-body text-[16px] px-3 py-3 border border-d2-stone/60 focus:outline-none focus:border-d2-forest focus:border-2 focus:px-[11px] focus:py-[11px] transition-colors";
  const labelClasses = "block font-body text-[14px] text-d2-ink mb-1.5";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-6">
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
        />
        <p id={messageHelpId} className="mt-1.5 font-body text-[13px] text-d2-warmgray">
          A sentence about the situation. The data core, the transformation
          question, the agentic readiness gap &mdash; whatever&rsquo;s true.
        </p>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          className="inline-block font-body font-semibold text-[16px] px-7 py-3.5 bg-d2-forest text-white hover:bg-d2-forest/90 transition-colors focus:outline-2 focus:outline-d2-stone focus:outline-offset-2"
        >
          Send
        </button>
      </div>
    </form>
  );
}
