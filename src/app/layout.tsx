import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const siteUrl = "https://compta-soft-site.vercel.app";

const title = "Compta Soft — Logiciel de comptabilité CGNC Maroc";
const description =
  "Logiciel de comptabilité conforme au Plan Comptable Marocain CGNC. Bilan, CPC, ESG, liasse Simpl-IS, multi-dossiers. Pour PME et cabinets au Maroc.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "logiciel comptabilité maroc",
    "CGNC",
    "PCM",
    "liasse fiscale",
    "Simpl-IS",
    "bilan CPC ESG",
    "comptabilité PME maroc",
  ],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title,
    description,
    url: siteUrl,
    type: "website",
    locale: "fr_FR",
    siteName: "Compta Soft",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/compta-soft-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
