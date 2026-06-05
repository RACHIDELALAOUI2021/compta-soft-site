import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Support — Compta Soft",
  description:
    "Ouvrez un ticket de support Compta Soft. Signalement de bug, question d'utilisation ou demande d'amélioration.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
