import type { Metadata } from "next";
import FolioHome from "@/components/home/FolioHome";

export const metadata: Metadata = {
  title: {
    absolute: "Robert Paddock · Transformational CIO | idigdata",
  },
  description:
    "Your transformation gets an owner. Both layers, application and agentic. You keep what we build. The operation stays up.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "Robert Paddock · Transformational CIO | idigdata",
    description:
      "Your transformation gets an owner. You keep what we build. The operation stays up.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata - Transformational CIO",
      },
    ],
  },
};

export default function HomePage() {
  return <FolioHome />;
}
