"use client";

import Link from "next/link";
import { useEffect, type ReactNode } from "react";
import { LANDING_STYLES } from "./landing-chrome";

const ADMIN_EXTRA_STYLES = `
  .admin-nav{background:var(--dk);padding:14px 40px;display:flex;align-items:center;justify-content:space-between}
  .admin-nav a{color:rgba(255,255,255,.7);font-size:14px}
  .admin-nav a:hover{color:#fff}
  .admin-nav-brand{font-family:'Syne',sans-serif;font-weight:800;color:#fff;font-size:16px}
  .admin-nav-brand span{color:var(--g)}
  .admin-table{width:100%;border-collapse:collapse;font-size:14px}
  .admin-table th{text-align:left;padding:12px 16px;font-size:11px;font-weight:600;letter-spacing:1px;text-transform:uppercase;color:#888;border-bottom:1px solid rgba(10,42,30,.1)}
  .admin-table td{padding:14px 16px;border-bottom:1px solid rgba(10,42,30,.06);color:#444}
  .admin-table tr:hover td{background:rgba(29,158,117,.04)}
  .admin-table a.ticket-link{color:var(--dk);font-weight:600}
  .admin-table a.ticket-link:hover{color:var(--g)}
  .filter-bar{display:flex;flex-wrap:wrap;gap:12px;align-items:center;margin-bottom:24px}
  .filter-select{padding:8px 14px;border-radius:100px;border:1px solid rgba(10,42,30,.12);font-size:13px;background:#fff;font-family:'DM Sans',sans-serif}
  .badge-nouveau{background:#C0392B;color:#fff;font-size:11px;font-weight:700;padding:2px 8px;border-radius:100px;margin-left:8px}
  @media(max-width:768px){
    .admin-nav{padding:14px 20px}
    .admin-wrap{padding:24px 20px!important}
    .admin-table{font-size:12px}
    .admin-table th,.admin-table td{padding:10px 8px}
  }
`;

export function AdminShell({
  children,
  email,
  onLogout,
}: {
  children: ReactNode;
  email?: string;
  onLogout?: () => void;
}) {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (e) => e.forEach((x) => x.isIntersecting && x.target.classList.add("vis")),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".rev").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <>
      <style>{LANDING_STYLES + ADMIN_EXTRA_STYLES}</style>
      <nav className="admin-nav">
        <Link href="/admin/tickets" className="admin-nav-brand">
          Compta <span>Soft</span> Admin
        </Link>
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          {email && <span style={{ fontSize: 13, color: "rgba(255,255,255,.5)" }}>{email}</span>}
          {onLogout && (
            <button
              type="button"
              onClick={onLogout}
              style={{
                background: "rgba(255,255,255,.1)",
                border: "none",
                color: "#fff",
                padding: "8px 16px",
                borderRadius: 100,
                fontSize: 13,
                cursor: "pointer",
              }}
            >
              Déconnexion
            </button>
          )}
        </div>
      </nav>
      <main className="admin-wrap rev" style={{ padding: "40px 40px 60px", maxWidth: 1200, margin: "0 auto" }}>
        {children}
      </main>
    </>
  );
}
