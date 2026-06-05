import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation — Compta Soft",
  description:
    "Guide de démarrage rapide Compta Soft — prérequis, installation et activation de licence pour PME marocaines.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
