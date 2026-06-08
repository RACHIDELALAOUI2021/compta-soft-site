import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Tarifs — Compta Soft, logiciel comptable marocain",
  description: "Licence annuelle en dirhams — Starter 4 900 MAD/an, PME 9 900 MAD/an, Cabinet sur devis. Hébergement chez vous, vos données restent les vôtres.",
  keywords: "tarif logiciel comptable maroc, prix comptabilité maroc, licence comptable MAD",
  openGraph: {
    title: "Tarifs Compta Soft — Licence annuelle en dirhams",
    description: "Starter 4 900 MAD/an · PME 9 900 MAD/an · Cabinet sur devis. Logiciel comptable marocain conforme CGNC.",
    url: "https://comptasoftmaroc.com/tarifs",
    siteName: "Compta Soft",
    locale: "fr_MA",
    type: "website",
  },
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
