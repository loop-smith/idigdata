import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PostHogProvider from "@/components/analytics/PostHogProvider";
import JsonLd from "@/components/analytics/JsonLd";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://idigdata.com"),
  title: {
    default: "idigdata — Transformative CIO + agentic adoption",
    template: "%s — idigdata",
  },
  description:
    "Battle-hardened transformative CIO. Thirty years moving mid-market businesses. Commonize the master data, own the core, apps and agents plug in.",
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
    title: "idigdata — Transformative CIO + agentic adoption",
    description:
      "Battle-hardened transformative CIO. Thirty years moving mid-market businesses. Commonize the master data, own the core, apps and agents plug in.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Commonize the master data. Own the core. Apps and agents plug in.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "idigdata — Transformative CIO + agentic adoption",
    description:
      "Battle-hardened transformative CIO. Thirty years moving mid-market businesses. Commonize the master data, own the core, apps and agents plug in.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="font-body text-d2-ink bg-white">
        <PostHogProvider>
          <JsonLd />
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}
