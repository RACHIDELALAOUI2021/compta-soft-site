import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Changelog — Compta Soft",
  description: "Historique des versions de Compta Soft — nouveautés, corrections et améliorations.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
