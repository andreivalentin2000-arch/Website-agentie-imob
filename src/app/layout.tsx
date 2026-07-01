import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/lib/locale-context";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://www.romanianheritageestates.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Romanian Heritage Estates — Own Land. Live Well. Start in Romania.",
    template: "%s | Romanian Heritage Estates",
  },
  description:
    "A premium relocation and property concierge for international buyers seeking verified rural, mountain and heritage estates in Romania — fully guided from first call to notary and keys.",
  keywords: [
    "rural property Romania",
    "buy land in Romania",
    "Romania relocation",
    "Transylvania estate for sale",
    "international real estate Romania",
    "countryside property Romania",
  ],
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Romanian Heritage Estates",
    title: "Romanian Heritage Estates — Own Land. Live Well. Start in Romania.",
    description:
      "Verified rural, mountain and heritage estates in Romania for international buyers — fully guided, from first call to notary and keys.",
    images: [{ url: "/images/og-cover.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Romanian Heritage Estates",
    description: "Own land. Live well. Start in Romania.",
    images: ["/images/og-cover.jpg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${inter.variable}`}>
      <body>
        <LocaleProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </LocaleProvider>
      </body>
    </html>
  );
}
