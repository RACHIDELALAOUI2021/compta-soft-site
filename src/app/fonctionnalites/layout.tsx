import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Fonctionnalités — Compta Soft, logiciel comptable marocain",
  description: "Saisie CGNC, états de synthèse, fiscalité IS, TVA SIMPL-TVA, RAS TVA, FEC, trésorerie IA, analytique, immobilisations — 8 modules conformes CGI 2026.",
  keywords: "logiciel comptable maroc, CGNC, TVA maroc, IS maroc, FEC maroc, RAS TVA, liasse fiscale IS, comptabilité PME maroc",
  openGraph: {
    title: "Fonctionnalités Compta Soft — Logiciel comptable marocain CGI 2026",
    description: "8 modules comptables et fiscaux conformes CGI 2026 pour les PME et cabinets marocains.",
    url: "https://comptasoftmaroc.com/fonctionnalites",
    siteName: "Compta Soft",
    locale: "fr_MA",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
