import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Compta Soft",
  description:
    "Contactez CasaSoft pour une démo Compta Soft. Logiciel de comptabilité CGNC pour PME et cabinets au Maroc.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
