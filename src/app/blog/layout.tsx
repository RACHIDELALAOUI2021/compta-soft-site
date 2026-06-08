import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Blog fiscal & comptable — Compta Soft Maroc",
  description: "Guides pratiques CGI 2026, TVA SIMPL-TVA, RAS TVA, IS, FEC, délais de paiement — ressources pour comptables et dirigeants marocains.",
  keywords: "comptabilité maroc, CGI 2026, TVA maroc, SIMPL-TVA, RAS TVA, IS maroc, FEC maroc, logiciel comptable maroc",
  openGraph: {
    title: "Blog fiscal & comptable — Compta Soft Maroc",
    description: "Guides pratiques CGI 2026, TVA, IS, FEC et délais de paiement pour les entreprises marocaines.",
    url: "https://comptasoftmaroc.com/blog",
    siteName: "Compta Soft",
    locale: "fr_MA",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
