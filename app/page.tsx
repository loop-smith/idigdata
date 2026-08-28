import type { Metadata } from "next";
import FolioHome from "@/components/home/FolioHome";

export const metadata: Metadata = {
  title: {
    absolute: "Robert Paddock · Transformational CIO | idigdata",
  },
  description:
    "Your transformation gets an owner. The business keeps running.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "https://idigdata.com/",
    title: "Robert Paddock · Transformational CIO",
    description:
      "Your transformation gets an owner. The business keeps running.",
    images: [
      {
        url: "/og-image.png?v=20260828",
        width: 1200,
        height: 630,
        alt: "Your transformation gets an owner. The business keeps running.",
      },
    ],
  },
};

export default function HomePage() {
  return <FolioHome />;
}
