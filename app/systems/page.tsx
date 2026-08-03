import { permanentRedirect } from "next/navigation";

/** Retired URL - Applied Agentics is the flagship page. */
export default function SystemsRedirectPage() {
  permanentRedirect("/applied-agentics/");
}
