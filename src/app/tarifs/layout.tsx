import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tarifs — Compta Soft",
  description:
    "Tarifs Compta Soft : Starter 4 900 MAD/an, PME 9 900 MAD/an, Cabinet sur devis. Licence annuelle, hébergement local, conforme CGNC.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
