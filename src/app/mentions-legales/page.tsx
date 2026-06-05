"use client";

import Link from "next/link";
import { LandingShell } from "@/components/landing-chrome";

const SECTIONS = [
  {
    title: "Éditeur du site",
    content: (
      <>
        <p style={{ marginBottom: 12 }}>
          Le site <strong>comptasoftmaroc.com</strong> est édité par :
        </p>
        <p style={{ lineHeight: 1.8 }}>
          <strong>CasaSoft</strong>
          <br />
          Éditeur du logiciel Compta Soft
          <br />
          Maroc
          <br />
          Email :{" "}
          <a href="mailto:contact@comptasoft.ma" style={{ color: "var(--g)" }}>
            contact@comptasoft.ma
          </a>
        </p>
      </>
    ),
  },
  {
    title: "Hébergement",
    content: (
      <p style={{ lineHeight: 1.8 }}>
        Le site est hébergé par <strong>Vercel Inc.</strong>
        <br />
        440 N Barranca Ave #4133, Covina, CA 91723, États-Unis
        <br />
        Site web :{" "}
        <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" style={{ color: "var(--g)" }}>
          vercel.com
        </a>
      </p>
    ),
  },
  {
    title: "Propriété intellectuelle",
    content: (
      <p style={{ lineHeight: 1.8 }}>
        L&apos;ensemble du contenu de ce site (textes, graphismes, logo, structure) est la propriété exclusive de
        CasaSoft, sauf mention contraire. Toute reproduction, représentation ou diffusion, totale ou partielle, sans
        autorisation écrite préalable est interdite.
      </p>
    ),
  },
  {
    title: "Données personnelles",
    content: (
      <>
        <p style={{ lineHeight: 1.8, marginBottom: 12 }}>
          Les données collectées via les formulaires de contact, partenaires et support sont utilisées uniquement pour
          répondre à vos demandes et assurer le suivi commercial ou technique. Elles ne sont ni vendues ni cédées à des
          tiers.
        </p>
        <p style={{ lineHeight: 1.8, marginBottom: 12 }}>
          Conformément à la loi marocaine n° 09-08 relative à la protection des personnes physiques à l&apos;égard du
          traitement des données à caractère personnel, vous disposez d&apos;un droit d&apos;accès, de rectification et
          de suppression de vos données en contactant{" "}
          <a href="mailto:contact@comptasoft.ma" style={{ color: "var(--g)" }}>
            contact@comptasoft.ma
          </a>
          .
        </p>
        <p style={{ lineHeight: 1.8 }}>
          Les tickets de support sont conservés le temps nécessaire au traitement de votre demande. Pour ouvrir un
          ticket :{" "}
          <Link href="/support" style={{ color: "var(--g)", fontWeight: 600 }}>
            /support
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    title: "Cookies",
    content: (
      <p style={{ lineHeight: 1.8 }}>
        Ce site utilise des cookies strictement nécessaires au fonctionnement (session admin, préférences). Aucun cookie
        publicitaire n&apos;est déposé sans votre consentement.
      </p>
    ),
  },
  {
    title: "Limitation de responsabilité",
    content: (
      <p style={{ lineHeight: 1.8 }}>
        CasaSoft s&apos;efforce d&apos;assurer l&apos;exactitude des informations publiées sur ce site. Toutefois, elle
        ne saurait être tenue responsable des omissions, inexactitudes ou carences dans la mise à jour, ni des dommages
        résultant de l&apos;utilisation des informations diffusées.
      </p>
    ),
  },
];

export default function MentionsLegalesPage() {
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
              Mentions légales
            </h1>
            <p style={{ fontSize: 16, color: "#555", lineHeight: 1.7, marginTop: 16, maxWidth: 520 }}>
              Informations légales relatives au site Compta Soft et au traitement de vos données.
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
              padding: 32,
              border: "1px solid rgba(10,42,30,.08)",
              marginBottom: 20,
            }}
          >
            <h2
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: 18,
                fontWeight: 800,
                color: "var(--dk)",
                marginBottom: 16,
              }}
            >
              {section.title}
            </h2>
            <div style={{ fontSize: 14, color: "#555" }}>{section.content}</div>
          </div>
        ))}
        <p style={{ fontSize: 12, color: "#999", marginTop: 8 }}>Dernière mise à jour : juin 2026</p>
      </section>
    </LandingShell>
  );
}
