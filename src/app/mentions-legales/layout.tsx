import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mentions légales — Compta Soft",
  description: "Mentions légales du site Compta Soft — éditeur HEBERSOFT, hébergeur Vercel, données personnelles.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
