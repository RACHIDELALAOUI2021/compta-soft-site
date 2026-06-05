import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Compta Soft",
  description: "Actualités comptabilité, fiscalité marocaine et product updates Compta Soft — articles bientôt disponibles.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
