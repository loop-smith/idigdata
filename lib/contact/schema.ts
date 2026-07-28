import { z } from "zod";

/** Shared contact contract — client and /api/contact must stay aligned. */
export const InterestTypeSchema = z.enum([
  "general",
  "cio_search",
  "embedded",
  "fractional",
  "agentics",
  "speaking",
]);

export const ContactSchema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email().max(200),
  role: z.string().max(120).optional().default(""),
  company: z.string().max(200).optional().default(""),
  message: z.string().max(4000).optional().default(""),
  interestType: InterestTypeSchema.optional().default("general"),
  anon_session_id: z.string().max(128).optional().nullable(),
  _hp: z.string().max(0).optional(),
});

export type ContactPayload = z.infer<typeof ContactSchema>;
export type InterestType = z.infer<typeof InterestTypeSchema>;

export const INTEREST_OPTIONS: { value: InterestType; label: string }[] = [
  { value: "general", label: "General" },
  { value: "cio_search", label: "CIO / executive search" },
  { value: "embedded", label: "Embedded engagement" },
  { value: "fractional", label: "Fractional engagement" },
  { value: "agentics", label: "Agentic AI engagement" },
  { value: "speaking", label: "Speaking / advisory" },
];

/** Strip CR/LF before using values in email headers. */
export function sanitizeHeaderField(value: string): string {
  return value.replace(/[\r\n]+/g, " ").trim();
}
