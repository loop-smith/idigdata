import { permanentRedirect } from "next/navigation";

/** Legacy route — permanent home is /transformations/. */
export default function WorkRedirectPage() {
  permanentRedirect("/transformations/");
}
