import { permanentRedirect } from "next/navigation";

/** Legacy route — permanent home is /agentics/. */
export default function MethodRedirectPage() {
  permanentRedirect("/agentics/");
}
