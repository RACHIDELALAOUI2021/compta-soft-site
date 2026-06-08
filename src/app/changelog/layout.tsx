import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Changelog — Compta Soft v1.2.0",
  description: "Historique des versions de Compta Soft — v1.2.0 déclarations DGI, v1.1.0 fiscalité IS/TVA, v1.0.0 socle CGNC.",
  openGraph: {
    title: "Changelog Compta Soft — Versions et nouveautés",
    description: "Suivez l'évolution de Compta Soft : nouvelles fonctionnalités, corrections et mises à jour CGI 2026.",
    url: "https://comptasoftmaroc.com/changelog",
    siteName: "Compta Soft",
    locale: "fr_MA",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
