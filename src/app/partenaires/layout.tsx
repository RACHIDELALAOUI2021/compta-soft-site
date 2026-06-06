import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Partenaires — Compta Soft",
  description:
    "Devenez partenaire HEBERSOFT — revendeurs, intégrateurs et cabinets comptables au Maroc.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
