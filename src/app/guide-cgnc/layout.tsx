import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Guide CGNC — Compta Soft",
  description:
    "Conformité CGNC et CGI de Compta Soft — Plan Comptable Marocain, états réglementaires et fiscalité marocaine.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
