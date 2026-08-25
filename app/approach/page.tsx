import { permanentRedirect } from "next/navigation";

/** Alias → Application layer. */
export default function ApproachRedirectPage() {
  permanentRedirect("/application-layer/");
}
