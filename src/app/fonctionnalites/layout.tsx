import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fonctionnalités — Compta Soft",
  description:
    "Découvrez toutes les fonctionnalités Compta Soft v1.0.0 : saisie CGNC, états de synthèse (Bilan, CPC, ESG), fiscalité IS, trésorerie IA, analytique et immobilisations. Conforme Plan Comptable Marocain.",
  keywords: ["CGNC", "PCM", "comptabilité maroc", "Bilan CPC ESG", "Simpl-IS", "saisie comptable"],
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
