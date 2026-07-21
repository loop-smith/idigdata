import type { Metadata, Viewport } from "next";
import { Lora, Source_Sans_3, Vollkorn } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/analytics/JsonLd";
import PageviewBeacon from "@/components/analytics/PageviewBeacon";

const display = Lora({
  subsets: ["latin"],
  variable: "--next-font-display",
  display: "swap",
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

const body = Source_Sans_3({
  subsets: ["latin"],
  variable: "--next-font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const vollkorn = Vollkorn({
  subsets: ["latin"],
  variable: "--next-font-vollkorn",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://idigdata.com"),
  title: {
    default:
      "idigdata - Transformational CIO. Enterprise transformation. Applied AI edge.",
    template: "%s - idigdata",
  },
  description:
    "Transformational CIO for $100M–$1B operating companies. Enterprise transformation, business systems, and applied AI in production — data-centric, vendor-agnostic, exit-by-design.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://idigdata.com",
    siteName: "idigdata",
    title:
      "idigdata - Transformational CIO. Enterprise transformation. Applied AI edge.",
    description:
      "Transformational CIO for $100M–$1B operating companies. Enterprise transformation, business systems, and applied AI in production — data-centric, vendor-agnostic, exit-by-design.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Transformational CIO",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "idigdata - Transformational CIO. Enterprise transformation. Applied AI edge.",
    description:
      "Transformational CIO for $100M–$1B operating companies. Enterprise transformation, business systems, and applied AI in production — data-centric, vendor-agnostic, exit-by-design.",
    images: [
      {
        url: "/og-image.png",
        alt: "idigdata",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: {
      "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#142840",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${vollkorn.variable}`}>
      <body className="font-body text-ink bg-cream">
        <JsonLd />
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <Analytics />
        <PageviewBeacon />
      </body>
    </html>
  );
}
