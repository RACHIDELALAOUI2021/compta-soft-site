"use client";

import { FeatureList, LandingShell } from "@/components/landing-chrome";

const SECTIONS = [
  {
    title: "Prérequis",
    items: [
      "Windows 10 ou 11 (64 bits) — poste de travail ou serveur local",
      "4 Go de RAM minimum (8 Go recommandé pour multi-dossiers)",
      "Connexion Internet pour les mises à jour et l'activation de licence",
      "Droits administrateur pour l'installation initiale",
      "Navigateur moderne (Chrome, Edge, Firefox) pour le portail web complémentaire",
    ],
  },
  {
    title: "Installation",
    items: [
      "Téléchargez le package d'installation depuis votre espace client HEBERSOFT",
      "Lancez l'installateur et suivez l'assistant (dossier d'installation, raccourci bureau)",
      "Au premier lancement, saisissez la clé de licence reçue par email",
      "Configurez votre premier dossier comptable (raison sociale, ICE, exercice fiscal)",
      "Importez le plan comptable PCM par défaut ou votre plan personnalisé",
      "Créez les utilisateurs et attribuez les rôles (saisie, validation, admin)",
    ],
  },
  {
    title: "Activation de licence",
    items: [
      "Chaque licence est liée à une clé unique envoyée après achat ou essai",
      "Saisissez la clé dans Paramètres → Licence lors du premier démarrage",
      "La validation se fait en ligne (connexion requise une seule fois)",
      "En cas de changement de poste, contactez support@comptasoft.ma pour une réactivation",
      "Les renouvellements annuels prolongent automatiquement la licence active",
    ],
  },
];

export default function DocumentationPage() {
  return (
    <LandingShell>
      <section className="hero">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 60% at 65% 50%,rgba(29,158,117,.1) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="hero-grid">
          <div className="hero-left rev" style={{ gridColumn: "1 / -1" }}>
            <div
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 2,
                textTransform: "uppercase",
                color: "var(--g)",
                marginBottom: 14,
              }}
            >
              Ressources
            </div>
            <h1
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(28px,3vw,44px)",
                fontWeight: 800,
                lineHeight: 1.1,
                letterSpacing: -1,
                color: "var(--dk)",
              }}
            >
              Documentation
            </h1>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, marginTop: 16, maxWidth: 560 }}>
              Guide de démarrage rapide pour installer Compta Soft et activer votre licence en quelques minutes.
            </p>
          </div>
        </div>
      </section>

      <section className="page-section rev" style={{ padding: "0 60px 90px", maxWidth: 760, margin: "0 auto" }}>
        {SECTIONS.map((section) => (
          <div
            key={section.title}
            style={{
              background: "#fff",
              borderRadius: 18,
              padding: 36,
              border: "1px solid rgba(10,42,30,.08)",
              marginBottom: 24,
            }}
          >
            <h2
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: 20,
                fontWeight: 800,
                color: "var(--dk)",
                marginBottom: 20,
              }}
            >
              {section.title}
            </h2>
            <FeatureList items={section.items} />
          </div>
        ))}
      </section>
    </LandingShell>
  );
}
