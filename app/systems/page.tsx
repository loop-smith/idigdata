import { permanentRedirect } from "next/navigation";

/** Retired URL - systems proof lives on The Work. */
export default function SystemsRedirectPage() {
  permanentRedirect("/work/");
}
