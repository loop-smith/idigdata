import { permanentRedirect } from "next/navigation";

/** Alias → Transformations. */
export default function SystemsRedirectPage() {
  permanentRedirect("/transformations/");
}
