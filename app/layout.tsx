import type { Metadata } from "next";
import { Lora, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

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
    default: "idigdata — Operating-model change that sticks",
    template: "%s · idigdata",
  },
  description:
    "Robert Paddock. Contract CIO, business transformation, agentic adoption. Thirty years across five industries. Mid-market operators.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://idigdata.com",
    siteName: "idigdata",
    title: "idigdata — Operating-model change that sticks",
    description:
      "Robert Paddock. Contract CIO, business transformation, agentic adoption.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "idigdata — Operating-model change that sticks",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "idigdata — Operating-model change that sticks",
    description:
      "Robert Paddock. Contract CIO, business transformation, agentic adoption.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
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
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
