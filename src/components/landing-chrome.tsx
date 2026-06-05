"use client";

import Link from "next/link";
import { useEffect, type ReactNode } from "react";

export const LANDING_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
  *{box-sizing:border-box;margin:0;padding:0}
  :root{--g:#1D9E75;--dk:#0A2A1E;--cr:#F7F4EF;--lt:#E8F5EE}
  body{font-family:'DM Sans',sans-serif;background:var(--cr);color:var(--dk);overflow-x:hidden}
  a{text-decoration:none;color:inherit}
  .rev{opacity:0;transform:translateY(28px);transition:all .7s cubic-bezier(.16,1,.3,1)}
  .rev.vis{opacity:1;transform:none}
  @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
  @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
  .mfloat{animation:float 4s ease-in-out infinite}
  .nav{position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:14px 60px;background:rgba(247,244,239,.93);backdrop-filter:blur(12px);border-bottom:1px solid rgba(29,158,117,.1)}
  .nav-links{display:flex;gap:28px;font-size:14px;color:#555}
  .nav-links a:hover{color:var(--g)}
  .nav-cta{background:var(--dk);color:#fff;padding:10px 22px;border-radius:100px;font-size:13px;font-weight:500;border:none;cursor:pointer;transition:background .2s}
  .nav-cta:hover{background:var(--g)}
  .hero{min-height:auto;padding:56px 60px 48px;position:relative;overflow:hidden;max-width:100vw;background:var(--cr)}
  .hero-grid{display:grid;grid-template-columns:55% 45%;gap:32px;align-items:center;max-width:1200px;margin:0 auto;position:relative;z-index:1;overflow:hidden}
  .hero-left{min-width:0;overflow:hidden}
  .hero-right{min-width:0;overflow:hidden;position:relative}
  .btn-dk{background:var(--dk);color:#fff;padding:13px 26px;border-radius:100px;font-size:14px;font-weight:500;border:none;cursor:pointer;transition:all .2s}
  .btn-dk:hover{background:var(--g);transform:translateY(-2px)}
  .btn-ol{background:transparent;color:var(--dk);padding:13px 26px;border-radius:100px;font-size:14px;font-weight:500;border:1.5px solid rgba(10,42,30,.2);cursor:pointer;transition:all .2s}
  .btn-ol:hover{border-color:var(--g);color:var(--g)}
  .btn-gn{background:var(--g);color:#fff;padding:14px 32px;border-radius:100px;font-size:15px;font-weight:600;border:none;cursor:pointer;transition:all .2s}
  .btn-gn:hover{background:#16785A;transform:translateY(-2px)}
  .mkp{background:var(--dk);border-radius:14px;padding:18px;overflow:hidden}
  .mkp-bar{display:flex;gap:5px;margin-bottom:14px}
  .mkp-dot{width:9px;height:9px;border-radius:50%}
  .mkp-lbl{font-size:9px;color:rgba(255,255,255,.3);letter-spacing:1px;margin-bottom:10px}
  .mkp table{width:100%;border-collapse:collapse;font-size:10px}
  .mkp th{color:rgba(255,255,255,.35);font-weight:500;text-align:left;padding:5px 8px;border-bottom:1px solid rgba(255,255,255,.06);font-size:9px;letter-spacing:.5px}
  .mkp td{color:rgba(255,255,255,.8);padding:7px 8px;border-bottom:1px solid rgba(255,255,255,.04)}
  .bg{background:rgba(29,158,117,.2);color:#4ECFA0;padding:2px 7px;border-radius:3px;font-size:9px}
  .bo{background:rgba(255,160,50,.15);color:#FFA032;padding:2px 7px;border-radius:3px;font-size:9px}
  .feat-row{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center;padding:64px 0;border-bottom:1px solid rgba(10,42,30,.06)}
  .feat-row:last-child{border-bottom:none}
  .feat-row.flip > *:first-child{order:2}
  .feat-row.flip > *:last-child{order:1}
  .pc{background:#fff;border-radius:18px;padding:32px;border:1px solid rgba(10,42,30,.08);transition:all .3s}
  .pc:hover{transform:translateY(-5px);box-shadow:0 20px 40px rgba(10,42,30,.1)}
  .pc.feat{background:var(--dk);border:none;color:#fff}
  .ft-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;padding-bottom:48px;border-bottom:1px solid rgba(255,255,255,.06)}
  .form-inp{width:100%;padding:12px 16px;border-radius:10px;border:1px solid rgba(10,42,30,.12);font-size:14px;font-family:'DM Sans',sans-serif;background:#fff;color:var(--dk);outline:none;transition:border-color .2s}
  .form-inp:focus{border-color:var(--g)}
  .form-lbl{display:block;font-size:12px;font-weight:500;color:#666;margin-bottom:6px}
  @media(max-width:768px){
    .nav{padding:14px 20px}.nav-links{display:none}
    .hero{padding:48px 20px 40px}
    .hero-grid{grid-template-columns:1fr!important}
    .pricing-grid{grid-template-columns:1fr!important}
    .ft-grid{grid-template-columns:1fr!important}
    .feat-row,.feat-row.flip{grid-template-columns:1fr!important}
    .feat-row.flip > *{order:unset!important}
    .page-section,.contact-grid{padding-left:20px!important;padding-right:20px!important}
    .contact-grid{grid-template-columns:1fr!important}
    .contact-grid form > div[style*="grid"]{grid-template-columns:1fr!important}
    .admin-detail-grid{grid-template-columns:1fr!important}
  }
`;

export function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach((x) => x.isIntersecting && x.target.classList.add("vis")),
      { threshold: 0.15 }
    );
    document.querySelectorAll(".rev").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}

export function SiteNav() {
  return (
    <nav className="nav">
      <Link href="/">
        <img src="/brand/compta-soft-nav.svg" alt="Compta Soft" style={{ height: 44, width: "auto" }} />
      </Link>
      <div className="nav-links">
        <a href="/fonctionnalites">Fonctionnalités</a>
        <a href="/tarifs">Tarifs</a>
        <Link href="/support">Support</Link>
        <a href="/contact">Contact</a>
      </div>
      <a href="/contact" className="nav-cta" style={{ display: "inline-block" }}>
        Demander une démo
      </a>
    </nav>
  );
}

export function SiteFooter() {
  return (
    <footer style={{ background: "#060F0A", padding: "56px 60px 28px", color: "rgba(255,255,255,.5)" }}>
      <div className="ft-grid">
        <div>
          <svg width="140" height="32" viewBox="0 0 160 36" xmlns="http://www.w3.org/2000/svg">
            <rect x="0" y="2" width="32" height="32" rx="7" fill="#0E7A73" />
            <text x="16" y="23" fontFamily="system-ui,sans-serif" fontSize="15" fontWeight="900" fill="#fff" textAnchor="middle">
              CS
            </text>
            <text x="42" y="26" fontFamily="system-ui,sans-serif" fontSize="22" fontWeight="800" fill="#fff">
              Compta
            </text>
            <text x="113" y="26" fontFamily="system-ui,sans-serif" fontSize="22" fontWeight="800" fill="#1D9E75">
              Soft
            </text>
          </svg>
          <p style={{ fontSize: 13, lineHeight: 1.6, marginTop: 12, maxWidth: 260 }}>
            Logiciel de comptabilité conforme au Plan Comptable Marocain CGNC.
          </p>
          <p style={{ fontSize: 11, color: "rgba(255,255,255,.2)", marginTop: 20 }}>© 2026 CasaSoft · Tous droits réservés</p>
        </div>
        {[
          { t: "Produit", links: [["Fonctionnalités", "/fonctionnalites"], ["Tarifs", "/tarifs"], ["Changelog", "/changelog"]] },
          { t: "Ressources", links: [["Documentation", "/documentation"], ["Guide CGNC", "/guide-cgnc"], ["Blog", "/blog"]] },
          {
            t: "Support",
            links: [
              ["Tickets support", "/support"],
              ["Contact", "/contact"],
              ["Partenaires", "/partenaires"],
              ["Mentions légales", "/mentions-legales"],
            ],
          },
        ].map((col) => (
          <div key={col.t}>
            <h4
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "rgba(255,255,255,.3)",
                marginBottom: 14,
              }}
            >
              {col.t}
            </h4>
            {col.links.map(([l, href]) => (
              <a key={l} href={href} style={{ display: "block", fontSize: 13, color: "rgba(255,255,255,.5)", marginBottom: 9, transition: "color .2s" }}>
                {l}
              </a>
            ))}
          </div>
        ))}
      </div>
    </footer>
  );
}

export function LandingShell({ children }: { children: ReactNode }) {
  return (
    <>
      <style>{LANDING_STYLES}</style>
      <ScrollReveal />
      <SiteNav />
      {children}
      <SiteFooter />
    </>
  );
}

export function FeatureList({ items }: { items: string[] }) {
  return (
    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 10 }}>
      {items.map((f) => (
        <li key={f} style={{ display: "flex", gap: 10, fontSize: 14, color: "#444" }}>
          <span style={{ color: "var(--g)", fontWeight: 700, flexShrink: 0 }}>→</span>
          {f}
        </li>
      ))}
    </ul>
  );
}

export function MockupChrome({ label, children, float }: { label: string; children: ReactNode; float?: boolean }) {
  return (
    <div className={`mkp${float ? " mfloat" : ""}`}>
      <div className="mkp-bar">
        {["#FF5F57", "#FFBD2E", "#28C840"].map((c) => (
          <div key={c} className="mkp-dot" style={{ background: c }} />
        ))}
      </div>
      <div className="mkp-lbl">{label}</div>
      {children}
    </div>
  );
}
