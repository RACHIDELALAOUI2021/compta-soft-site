"use client";
import { useEffect, useRef, useState } from "react";

const HERO_SLIDES = [
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
];

export default function Home() {
  const countersStarted = useRef(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    // Scroll reveal
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

    // Counter animation
    function animateCounter(el: Element) {
      const target = parseInt((el as HTMLElement).dataset.count || "0");
      const duration = 1800;
      const start = performance.now();
      function update(now: number) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.round(ease * target).toLocaleString("fr-FR");
        if (progress < 1) requestAnimationFrame(update);
      }
      requestAnimationFrame(update);
    }

    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !countersStarted.current) {
            countersStarted.current = true;
            document.querySelectorAll("[data-count]").forEach((el) => animateCounter(el));
          }
        });
      },
      { threshold: 0.5 }
    );
    const statsSection = document.getElementById("stats-section");
    if (statsSection) counterObserver.observe(statsSection);

    return () => {
      observer.disconnect();
      counterObserver.disconnect();
    };
  }, []);

  function showTab(id: string, btn: HTMLButtonElement) {
    document.querySelectorAll(".tab-content").forEach((t) => t.classList.remove("active"));
    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    const tab = document.getElementById("tab-" + id);
    if (tab) tab.classList.add("active");
    btn.classList.add("active");
  }

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=DM+Sans:wght@300;400;500&display=swap');
        :root { --green:#1D9E75; --dark:#0A2A1E; --cream:#F7F4EF; --light:#E8F5EE; }
        body { font-family:'DM Sans',sans-serif; background:var(--cream); color:var(--dark); overflow-x:hidden; }
        .reveal { opacity:0; transform:translateY(32px); transition:all 0.7s cubic-bezier(0.16,1,0.3,1); }
        .reveal.visible { opacity:1; transform:translateY(0); }
        .tab-content { display:none; animation:fadeIn 0.3s ease; }
        .tab-content.active { display:grid; grid-template-columns:1fr 1fr; gap:64px; align-items:center; }
        .tab-btn { padding:10px 24px; border-radius:100px; font-size:14px; font-weight:500; border:none; background:transparent; color:#666; cursor:pointer; transition:all 0.2s; }
        .tab-btn.active { background:var(--dark); color:#fff; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes fadeIn { from{opacity:0} to{opacity:1} }
        @keyframes ticker { from{transform:translateX(0)} to{transform:translateX(-50%)} }
        @keyframes pulse { 0%,100%{opacity:1;transform:scale(1)} 50%{opacity:0.5;transform:scale(0.8)} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
        .hero-badge { animation:fadeUp 0.6s ease both; }
        .hero-title { animation:fadeUp 0.7s 0.1s ease both; }
        .hero-sub { animation:fadeUp 0.7s 0.2s ease both; }
        .hero-btns { animation:fadeUp 0.7s 0.3s ease both; }
        .hero-stats { animation:fadeUp 0.7s 0.4s ease both; }
        .ticker-track { display:inline-flex; animation:ticker 30s linear infinite; }
        .mockup-float { animation:float 4s ease-in-out infinite; }
        .price-card { transition:all 0.3s; }
        .price-card:hover { transform:translateY(-6px); box-shadow:0 24px 48px rgba(10,42,30,0.1); }
        .btn-dark:hover { background:var(--green) !important; transform:translateY(-2px); }
        .btn-outline:hover { border-color:var(--green) !important; color:var(--green) !important; }
        .btn-green:hover { background:#16785A !important; transform:translateY(-2px); }
        .nav-cta:hover { background:var(--green) !important; }
        @media (max-width:768px) {
          .tab-content.active { grid-template-columns:1fr; }
          .pricing-grid { grid-template-columns:1fr !important; }
          .footer-top { grid-template-columns:1fr !important; }
          .hero-stats { flex-wrap:wrap; gap:24px; }
          .hero { padding:60px 24px 40px; }
          .hero-grid { grid-template-columns:1fr !important; }
          .hero-slideshow { height:320px !important; }
          .tabs-section, .pricing, .cta, footer { padding-left:24px; padding-right:24px; }
          nav { padding:16px 24px; }
          .nav-links { display:none; }
        }
      `}</style>

      {/* NAV */}
      <nav style={{position:"sticky",top:0,zIndex:100,padding:"16px 48px",display:"flex",alignItems:"center",justifyContent:"space-between",background:"rgba(247,244,239,0.92)",backdropFilter:"blur(12px)",borderBottom:"1px solid rgba(29,158,117,0.1)"}}>
        <img src="/brand/compta-soft-full.svg" alt="Compta Soft" style={{height:36}} />
        <div className="nav-links" style={{display:"flex",gap:32,fontSize:14}}>
          <a href="#features" style={{color:"#555",textDecoration:"none"}}>Fonctionnalités</a>
          <a href="#tarifs" style={{color:"#555",textDecoration:"none"}}>Tarifs</a>
          <a href="#contact" style={{color:"#555",textDecoration:"none"}}>Contact</a>
        </div>
        <button className="nav-cta" style={{background:"var(--dark)",color:"#fff",padding:"10px 24px",borderRadius:100,fontSize:13,fontWeight:500,border:"none",cursor:"pointer",transition:"all 0.2s"}}>
          Demander une démo
        </button>
      </nav>

      {/* HERO */}
      <section className="hero" style={{minHeight:"92vh",display:"flex",flexDirection:"column",justifyContent:"center",padding:"80px 48px 60px",position:"relative",overflow:"hidden",background:"var(--cream)"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 80% 60% at 70% 50%, rgba(29,158,117,0.12) 0%, transparent 70%)",pointerEvents:"none"}}/>
        <div className="hero-grid" style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:48,alignItems:"center",width:"100%",maxWidth:1200,margin:"0 auto",position:"relative",zIndex:1}}>
          <div>
            <div className="hero-badge" style={{display:"inline-flex",alignItems:"center",gap:8,background:"#fff",border:"1px solid rgba(29,158,117,0.3)",borderRadius:100,padding:"6px 16px",fontSize:12,color:"var(--green)",fontWeight:500,marginBottom:32,width:"fit-content"}}>
              <span style={{width:6,height:6,background:"var(--green)",borderRadius:"50%",animation:"pulse 2s infinite",display:"inline-block"}}/>
              Conforme CGNC · PCM 720 comptes · v1.0.0
            </div>
            <h1 className="hero-title" style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(40px,5vw,72px)",fontWeight:800,lineHeight:1.05,letterSpacing:-2,maxWidth:560,color:"var(--dark)",margin:0}}>
              La comptabilité<br/>marocaine,<br/><em style={{fontStyle:"normal",color:"var(--green)"}}>enfin simple.</em>
            </h1>
            <p className="hero-sub" style={{fontSize:18,color:"#555",maxWidth:480,lineHeight:1.7,marginTop:24}}>
              De la saisie à la liasse Simpl-IS, Compta Soft réunit tout ce dont les PME et cabinets marocains ont besoin — sans compromis réglementaire.
            </p>
            <div className="hero-btns" style={{display:"flex",flexWrap:"wrap",gap:12,marginTop:36}}>
              <button className="btn-dark" style={{background:"var(--dark)",color:"#fff",padding:"14px 28px",borderRadius:100,fontSize:15,fontWeight:500,border:"none",cursor:"pointer",transition:"all 0.25s"}}>Demander une démo →</button>
              <button className="btn-outline" style={{background:"transparent",color:"var(--dark)",padding:"14px 28px",borderRadius:100,fontSize:15,fontWeight:500,border:"1.5px solid rgba(10,42,30,0.2)",cursor:"pointer",transition:"all 0.25s"}}>Voir les fonctionnalités</button>
            </div>
            <div id="stats-section" className="hero-stats" style={{display:"flex",flexWrap:"wrap",gap:32,marginTop:48,paddingTop:32,borderTop:"1px solid rgba(10,42,30,0.08)"}}>
              {[{count:"720",label:"Comptes PCM CGNC"},{count:"5",label:"Journaux standards"},{count:"8",label:"États de synthèse"},{count:"236",label:"Tests unitaires"}].map((s,i)=>(
                <div key={i}>
                  <div data-count={s.count} style={{fontFamily:"'Syne',sans-serif",fontSize:32,fontWeight:800,color:"var(--dark)"}}>0</div>
                  <div style={{fontSize:13,color:"#888",marginTop:2}}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div
            className="hero-slideshow"
            style={{borderRadius:20,overflow:"hidden",height:520,position:"relative",boxShadow:"0 24px 48px rgba(10,42,30,0.12)"}}
          >
            {HERO_SLIDES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt=""
                style={{
                  position:"absolute",
                  inset:0,
                  width:"100%",
                  height:"100%",
                  objectFit:"cover",
                  opacity:activeSlide === i ? 1 : 0,
                  transition:"opacity 1s ease",
                }}
              />
            ))}
            <div
              style={{
                position:"absolute",
                bottom:20,
                left:"50%",
                transform:"translateX(-50%)",
                display:"flex",
                gap:8,
                zIndex:2,
              }}
            >
              {HERO_SLIDES.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Photo ${i + 1}`}
                  onClick={() => setActiveSlide(i)}
                  style={{
                    width:10,
                    height:10,
                    borderRadius:"50%",
                    border:"none",
                    padding:0,
                    cursor:"pointer",
                    background:activeSlide === i ? "var(--green)" : "rgba(255,255,255,0.5)",
                    transition:"background 0.3s ease",
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{background:"var(--dark)",padding:"16px 0",overflow:"hidden",whiteSpace:"nowrap",borderTop:"1px solid rgba(255,255,255,0.05)"}}>
        <div className="ticker-track">
          {[1,2].map(k=>(
            <span key={k} style={{display:"inline-flex",alignItems:"center",gap:24,padding:"0 32px",fontSize:13,color:"rgba(255,255,255,0.7)",letterSpacing:"0.5px"}}>
              <span style={{color:"var(--green)"}}>·</span> Bilan CGNC <span style={{color:"var(--green)"}}>·</span> CPC <span style={{color:"var(--green)"}}>·</span> ESG <span style={{color:"var(--green)"}}>·</span> Tableau de financement <span style={{color:"var(--green)"}}>·</span> Notes ETIC <span style={{color:"var(--green)"}}>·</span> Balance 9 colonnes <span style={{color:"var(--green)"}}>·</span> Grand livre tiers <span style={{color:"var(--green)"}}>·</span> Liasse EDI Simpl-IS <span style={{color:"var(--green)"}}>·</span> IS/CM/CSS <span style={{color:"var(--green)"}}>·</span> Rapprochement IA <span style={{color:"var(--green)"}}>·</span> Multi-dossiers <span style={{color:"var(--green)"}}>·</span> 720 comptes PCM <span style={{color:"var(--green)"}}>·</span>
            </span>
          ))}
        </div>
      </div>

      {/* TABS PRODUIT */}
      <section id="features" className="tabs-section" style={{background:"#fff",padding:"100px 48px"}}>
        <div style={{fontSize:11,fontWeight:600,letterSpacing:2,textTransform:"uppercase",color:"var(--green)",marginBottom:16}}>Le logiciel</div>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(36px,4vw,52px)",fontWeight:800,letterSpacing:-1.5,lineHeight:1.1,color:"var(--dark)",marginBottom:48}}>
          Tout ce dont vous avez<br/>besoin, <em style={{fontStyle:"normal",color:"var(--green)"}}>au même endroit.</em>
        </h2>
        <div style={{display:"flex",gap:4,background:"var(--cream)",padding:4,borderRadius:100,width:"fit-content",marginBottom:56}}>
          {[["saisie","Saisie"],["etats","États"],["fiscal","Fiscalité"],["tresorerie","Trésorerie"]].map(([id,label],i)=>(
            <button key={id} className={`tab-btn${i===0?" active":""}`} onClick={e=>showTab(id,e.currentTarget)}>{label}</button>
          ))}
        </div>

        {/* Tab Saisie */}
        <div id="tab-saisie" className="tab-content active">
          <div>
            <h3 style={{fontFamily:"'Syne',sans-serif",fontSize:32,fontWeight:800,letterSpacing:-1,marginBottom:16,color:"var(--dark)"}}>Saisie & validation comptable</h3>
            <p style={{fontSize:16,color:"#555",lineHeight:1.7,marginBottom:24}}>Du brouillon à la validation, chaque pièce suit un workflow rigoureux conforme aux normes CGNC.</p>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {["Pièces BROUILLON → VALIDE → CONTRE_PASSE","Saisie unitaire et par lot (CSV/Excel)","Validation en masse par l'administrateur","Journaux ACH, VTE, BNQ, CAI, OD","PCM complet — 720 comptes classes 1 à 8","Contrepartie automatique banque/caisse"].map(f=>(
                <li key={f} style={{display:"flex",alignItems:"flex-start",gap:10,fontSize:14,color:"#444"}}>
                  <span style={{color:"var(--green)",fontWeight:700,flexShrink:0}}>→</span>{f}
                </li>
              ))}
            </ul>
          </div>
          <div className="mockup-float" style={{background:"var(--dark)",borderRadius:16,padding:20,overflow:"hidden"}}>
            <div style={{display:"flex",gap:6,marginBottom:16}}>
              {["#FF5F57","#FFBD2E","#28C840"].map(c=><div key={c} style={{width:10,height:10,borderRadius:"50%",background:c}}/>)}
            </div>
            <div style={{fontSize:10,color:"rgba(255,255,255,0.3)",marginBottom:12,letterSpacing:1}}>JOURNAL BNQ — HEBERSOFT 2026</div>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
              <thead><tr>{["N° PIÈCE","COMPTE","LIBELLÉ","DÉBIT","STATUT"].map(h=><th key={h} style={{color:"rgba(255,255,255,0.4)",fontWeight:500,textAlign:"left",padding:"6px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)",fontSize:10,letterSpacing:"0.5px"}}>{h}</th>)}</tr></thead>
              <tbody>
                {[["BNQ-001","5141","Virement client","45 200,00","#4ECFA0","VALIDE","green"],["BNQ-002","4411","Fournisseur Maroc","12 800,00","#ff8a8a","VALIDE","green"],["BNQ-003","6111","Achats marchandises","8 500,00","#ff8a8a","BROUILLON","orange"],["BNQ-004","3421","Client HEBERSOFT","28 000,00","#4ECFA0","VALIDE","green"]].map(([n,c,l,m,mc,s,sc])=>(
                  <tr key={n}>
                    <td style={{color:"rgba(255,255,255,0.8)",padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)",fontSize:11}}>{n}</td>
                    <td style={{color:"rgba(255,255,255,0.8)",padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)",fontSize:11}}>{c}</td>
                    <td style={{color:"rgba(255,255,255,0.8)",padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)",fontSize:11}}>{l}</td>
                    <td style={{color:mc as string,padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)",fontSize:11}}>{m}</td>
                    <td style={{padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)"}}><span style={{background:sc==="green"?"rgba(29,158,117,0.2)":"rgba(255,160,50,0.15)",color:sc==="green"?"#4ECFA0":"#FFA032",padding:"2px 8px",borderRadius:4,fontSize:10}}>{s}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tab États */}
        <div id="tab-etats" className="tab-content">
          <div>
            <h3 style={{fontFamily:"'Syne',sans-serif",fontSize:32,fontWeight:800,letterSpacing:-1,marginBottom:16,color:"var(--dark)"}}>États de synthèse CGNC</h3>
            <p style={{fontSize:16,color:"#555",lineHeight:1.7,marginBottom:24}}>Tous les états réglementaires générés automatiquement depuis vos écritures validées.</p>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {["Bilan, CPC, ESG, Tableau de financement","Notes ETIC complètes","Balance 9 colonnes (générale, auxiliaires)","Grand livre et balance tiers","Balance âgée et lettrage","Export PDF / XLSX en un clic"].map(f=>(
                <li key={f} style={{display:"flex",alignItems:"flex-start",gap:10,fontSize:14,color:"#444"}}><span style={{color:"var(--green)",fontWeight:700,flexShrink:0}}>→</span>{f}</li>
              ))}
            </ul>
          </div>
          <div style={{background:"var(--dark)",borderRadius:16,padding:20,overflow:"hidden"}}>
            <div style={{display:"flex",gap:6,marginBottom:16}}>{["#FF5F57","#FFBD2E","#28C840"].map(c=><div key={c} style={{width:10,height:10,borderRadius:"50%",background:c}}/>)}</div>
            <div style={{fontSize:10,color:"rgba(255,255,255,0.3)",marginBottom:12,letterSpacing:1}}>BALANCE 9 COLONNES — HEBERSOFT 2026</div>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
              <thead><tr>{["COMPTE","INTITULÉ","DÉBIT N","CRÉDIT N","SOLDE"].map(h=><th key={h} style={{color:"rgba(255,255,255,0.4)",fontWeight:500,textAlign:"left",padding:"6px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)",fontSize:10}}>{h}</th>)}</tr></thead>
              <tbody>
                {[["3421","Clients","280 000","120 000","160 000","#4ECFA0"],["4411","Fournisseurs","45 000","195 000","150 000","#ff8a8a"],["5141","Banque","520 000","380 000","140 000","#4ECFA0"],["6111","Achats M/ses","95 000","0","95 000","#ff8a8a"]].map(([c,l,d,cr,s,sc])=>(
                  <tr key={c}>{[c,l,d,cr].map((v,i)=><td key={i} style={{color:"rgba(255,255,255,0.8)",padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)",fontSize:11}}>{v}</td>)}<td style={{color:sc as string,padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)",fontSize:11,fontWeight:600}}>{s}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tab Fiscal */}
        <div id="tab-fiscal" className="tab-content">
          <div>
            <h3 style={{fontFamily:"'Syne',sans-serif",fontSize:32,fontWeight:800,letterSpacing:-1,marginBottom:16,color:"var(--dark)"}}>Fiscalité IS & liasse Simpl-IS</h3>
            <p style={{fontSize:16,color:"#555",lineHeight:1.7,marginBottom:24}}>Pipeline fiscal complet conforme au CGI marocain — jusqu'à la génération XML pour la DGI.</p>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {["Résultat fiscal IS → CM → crédits CM → CSS","Loi de finances paramétrable (2026)","Réintégrations, déductions, déficits reportés","Liasse EDI XML Simpl-IS (CDC DGI 1.9.4)","Agenda fiscal et déclarations rectificatives","Gel à clôture — immutabilité garantie"].map(f=>(
                <li key={f} style={{display:"flex",alignItems:"flex-start",gap:10,fontSize:14,color:"#444"}}><span style={{color:"var(--green)",fontWeight:700,flexShrink:0}}>→</span>{f}</li>
              ))}
            </ul>
          </div>
          <div style={{background:"var(--dark)",borderRadius:16,padding:20,overflow:"hidden"}}>
            <div style={{display:"flex",gap:6,marginBottom:16}}>{["#FF5F57","#FFBD2E","#28C840"].map(c=><div key={c} style={{width:10,height:10,borderRadius:"50%",background:c}}/>)}</div>
            <div style={{fontSize:10,color:"rgba(255,255,255,0.3)",marginBottom:12,letterSpacing:1}}>RÉSULTAT FISCAL IS — 2026</div>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
              <thead><tr>{["LIGNE","LIBELLÉ","MONTANT MAD"].map(h=><th key={h} style={{color:"rgba(255,255,255,0.4)",fontWeight:500,textAlign:"left",padding:"6px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)",fontSize:10}}>{h}</th>)}</tr></thead>
              <tbody>
                {[["RF01","Résultat comptable","185 400,00","#4ECFA0"],["RF12","Réintégrations","+12 600,00","#ff8a8a"],["RF18","Déductions","-8 200,00","#4ECFA0"],["RF25","Résultat fiscal brut","189 800,00","#fff"],["IS","IS dû (taux 20%)","37 960,00","#FFA032"]].map(([l,n,m,c])=>(
                  <tr key={l}><td style={{color:"rgba(255,255,255,0.6)",padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)",fontSize:11}}>{l}</td><td style={{color:"rgba(255,255,255,0.8)",padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)",fontSize:11}}>{n}</td><td style={{color:c as string,padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)",fontSize:11,fontWeight:600}}>{m}</td></tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tab Trésorerie */}
        <div id="tab-tresorerie" className="tab-content">
          <div>
            <h3 style={{fontFamily:"'Syne',sans-serif",fontSize:32,fontWeight:800,letterSpacing:-1,marginBottom:16,color:"var(--dark)"}}>Trésorerie & rapprochement IA</h3>
            <p style={{fontSize:16,color:"#555",lineHeight:1.7,marginBottom:24}}>Importez vos relevés PDF — l'IA extrait les lignes et les rapproche automatiquement avec vos écritures.</p>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {["Import relevé bancaire PDF (extraction IA)","Rapprochement automatique ±0,01 MAD","Effets de commerce et omissions bancaires","Position trésorerie et prévisions","Exports rapprochement","Clé IA chiffrée — vos données restent chez vous"].map(f=>(
                <li key={f} style={{display:"flex",alignItems:"flex-start",gap:10,fontSize:14,color:"#444"}}><span style={{color:"var(--green)",fontWeight:700,flexShrink:0}}>→</span>{f}</li>
              ))}
            </ul>
          </div>
          <div style={{background:"var(--dark)",borderRadius:16,padding:20,overflow:"hidden"}}>
            <div style={{display:"flex",gap:6,marginBottom:16}}>{["#FF5F57","#FFBD2E","#28C840"].map(c=><div key={c} style={{width:10,height:10,borderRadius:"50%",background:c}}/>)}</div>
            <div style={{fontSize:10,color:"rgba(255,255,255,0.3)",marginBottom:12,letterSpacing:1}}>RAPPROCHEMENT BNQ — CIH BANK</div>
            <table style={{width:"100%",borderCollapse:"collapse",fontSize:11}}>
              <thead><tr>{["DATE","LIBELLÉ","MONTANT","STATUT"].map(h=><th key={h} style={{color:"rgba(255,255,255,0.4)",fontWeight:500,textAlign:"left",padding:"6px 10px",borderBottom:"1px solid rgba(255,255,255,0.06)",fontSize:10}}>{h}</th>)}</tr></thead>
              <tbody>
                {[["02/06","VIR HEBERSOFT CLIENT","28 000","RAPPROCHÉ","green"],["03/06","PRLV FOURNISSEUR","12 800","RAPPROCHÉ","green"],["04/06","COMMISSION BANQUE","450","EN ATTENTE","orange"]].map(([d,l,m,s,sc])=>(
                  <tr key={d}><td style={{color:"rgba(255,255,255,0.8)",padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)",fontSize:11}}>{d}</td><td style={{color:"rgba(255,255,255,0.8)",padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)",fontSize:11}}>{l}</td><td style={{color:sc==="green"?"#4ECFA0":"#ff8a8a",padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)",fontSize:11}}>{m}</td><td style={{padding:"8px 10px",borderBottom:"1px solid rgba(255,255,255,0.04)"}}><span style={{background:sc==="green"?"rgba(29,158,117,0.2)":"rgba(255,160,50,0.15)",color:sc==="green"?"#4ECFA0":"#FFA032",padding:"2px 8px",borderRadius:4,fontSize:10}}>{s}</span></td></tr>
                ))}
              </tbody>
            </table>
            <div style={{marginTop:12,padding:8,background:"rgba(29,158,117,0.1)",borderRadius:6,fontSize:10,color:"#4ECFA0"}}>✓ 2/3 lignes rapprochées automatiquement par IA</div>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="pricing reveal" style={{background:"var(--cream)",padding:"100px 48px"}}>
        <div style={{textAlign:"center",fontSize:11,fontWeight:600,letterSpacing:2,textTransform:"uppercase",color:"var(--green)",marginBottom:16}}>Tarifs</div>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(36px,4vw,52px)",fontWeight:800,letterSpacing:-1.5,textAlign:"center",color:"var(--dark)",margin:"0 auto 8px"}}>Simple et transparent</h2>
        <p style={{textAlign:"center",color:"#888",fontSize:16,marginBottom:0}}>Licence annuelle. Hébergé chez vous. Vos données restent les vôtres.</p>
        <div className="pricing-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20,maxWidth:960,margin:"48px auto 0"}}>
          {[
            {tag:"Starter",name:"TPE",price:"4 900",sub:"/an",desc:"Pour les indépendants et toutes petites entreprises",features:["1 dossier","2 utilisateurs","États de synthèse CGNC","Support email"],featured:false},
            {tag:"Le plus choisi",name:"PME",price:"9 900",sub:"/an",desc:"Pour les PME marocaines qui veulent tout",features:["3 dossiers","5 utilisateurs","Liasse Simpl-IS + fiscalité","Trésorerie IA","Support prioritaire"],featured:true},
            {tag:"Cabinet",name:"Multi-dossiers",price:"Sur devis",sub:"",desc:"Pour les cabinets comptables et fiduciaires",features:["Dossiers illimités","Utilisateurs illimités","Formation incluse","Accompagnement dédié"],featured:false},
          ].map((p)=>(
            <div key={p.name} className="price-card reveal" style={{background:p.featured?"var(--dark)":"#fff",borderRadius:20,padding:36,border:p.featured?"none":"1px solid rgba(10,42,30,0.08)"}}>
              <div style={{display:"inline-block",background:p.featured?"rgba(29,158,117,0.2)":"var(--light)",color:p.featured?"#4ECFA0":"var(--green)",fontSize:11,fontWeight:600,padding:"4px 12px",borderRadius:100,marginBottom:20}}>{p.tag}</div>
              <div style={{fontFamily:"'Syne',sans-serif",fontSize:20,fontWeight:800,color:p.featured?"#fff":"var(--dark)"}}>{p.name}</div>
              <div style={{fontFamily:"'Syne',sans-serif",fontSize:p.price==="Sur devis"?28:40,fontWeight:800,margin:"16px 0 4px",color:p.featured?"#fff":"var(--dark)"}}>
                {p.price!=="Sur devis"&&<sup style={{fontSize:18}}>MAD </sup>}{p.price}<span style={{fontSize:14,fontWeight:400,opacity:0.5}}>{p.sub}</span>
              </div>
              <div style={{fontSize:13,color:p.featured?"rgba(255,255,255,0.6)":"#888",marginBottom:24,paddingBottom:24,borderBottom:`1px solid ${p.featured?"rgba(255,255,255,0.1)":"rgba(10,42,30,0.08)"}`}}>{p.desc}</div>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
                {p.features.map(f=>(
                  <li key={f} style={{fontSize:13,color:p.featured?"rgba(255,255,255,0.7)":"#555",display:"flex",alignItems:"center",gap:8}}>
                    <span style={{color:"var(--green)",fontWeight:700}}>✓</span>{f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{background:"var(--dark)",padding:"100px 48px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 60% 80% at 50% 50%,rgba(29,158,117,0.15) 0%,transparent 70%)"}}/>
        <h2 className="reveal" style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(36px,5vw,64px)",fontWeight:800,color:"#fff",letterSpacing:-2,lineHeight:1.05,position:"relative",zIndex:1}}>
          Prêt à moderniser<br/>votre <em style={{fontStyle:"normal",color:"var(--green)"}}>comptabilité</em> ?
        </h2>
        <p className="reveal" style={{fontSize:17,color:"rgba(255,255,255,0.5)",marginTop:20,position:"relative",zIndex:1}}>
          Rejoignez les premières entreprises marocaines qui font confiance à Compta Soft.
        </p>
        <div className="reveal" style={{display:"flex",gap:12,justifyContent:"center",marginTop:40,position:"relative",zIndex:1}}>
          <button className="btn-green" style={{background:"var(--green)",color:"#fff",padding:"16px 36px",borderRadius:100,fontSize:15,fontWeight:600,border:"none",cursor:"pointer",transition:"all 0.25s"}}>Demander une démo →</button>
          <button className="btn-white" style={{background:"rgba(255,255,255,0.1)",color:"#fff",padding:"16px 36px",borderRadius:100,fontSize:15,fontWeight:500,border:"1px solid rgba(255,255,255,0.15)",cursor:"pointer",transition:"all 0.25s"}}>Voir les tarifs</button>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{background:"#060F0A",padding:"60px 48px 32px",color:"rgba(255,255,255,0.5)"}}>
        <div className="footer-top" style={{display:"grid",gridTemplateColumns:"2fr 1fr 1fr 1fr",gap:48,paddingBottom:48,borderBottom:"1px solid rgba(255,255,255,0.06)"}}>
          <div>
            <div style={{fontFamily:"'Syne',sans-serif",fontSize:22,fontWeight:800,color:"#fff",marginBottom:12}}>Compta<span style={{color:"var(--green)"}}>Soft</span></div>
            <div style={{fontSize:13,lineHeight:1.6}}>Logiciel de comptabilité conforme au Plan Comptable Marocain CGNC — conçu pour les PME et cabinets au Maroc.</div>
            <div style={{marginTop:20,fontSize:12,color:"rgba(255,255,255,0.2)"}}>© 2026 CasaSoft · Tous droits réservés</div>
          </div>
          {[{title:"Produit",links:["Fonctionnalités","Tarifs","Changelog"]},{title:"Ressources",links:["Documentation","Guide CGNC","Blog"]},{title:"Support",links:["Nous contacter","Partenaires","Mentions légales"]}].map(col=>(
            <div key={col.title}>
              <h4 style={{fontSize:12,fontWeight:600,letterSpacing:1,textTransform:"uppercase",color:"rgba(255,255,255,0.3)",marginBottom:16}}>{col.title}</h4>
              {col.links.map(l=><a key={l} href="#" style={{display:"block",fontSize:13,color:"rgba(255,255,255,0.5)",textDecoration:"none",marginBottom:10}}>{l}</a>)}
            </div>
          ))}
        </div>
      </footer>
    </>
  );
}
