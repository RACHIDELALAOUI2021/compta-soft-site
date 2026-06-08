"use client";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SiteFooter } from "@/components/landing-chrome";

const SLIDES = [
  "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=900&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=900&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
];

export default function Home() {
  const countersStarted = useRef(false);
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % SLIDES.length), 3500);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(e => e.forEach(x => x.isIntersecting && x.target.classList.add("vis")), { threshold: 0.15 });
    document.querySelectorAll(".rev").forEach(el => obs.observe(el));
    const cobs = new IntersectionObserver(e => {
      e.forEach(x => {
        if (x.isIntersecting && !countersStarted.current) {
          countersStarted.current = true;
          document.querySelectorAll("[data-count]").forEach(el => {
            const target = parseInt((el as HTMLElement).dataset.count || "0");
            const start = performance.now();
            const run = (now: number) => {
              const p = Math.min((now - start) / 1800, 1);
              el.textContent = Math.round((1 - Math.pow(1 - p, 3)) * target).toLocaleString("fr-FR");
              if (p < 1) requestAnimationFrame(run);
            };
            requestAnimationFrame(run);
          });
        }
      });
    }, { threshold: 0.5 });
    const s = document.getElementById("stats");
    if (s) cobs.observe(s);
    return () => { obs.disconnect(); cobs.disconnect(); };
  }, []);

  const showTab = (id: string, btn: HTMLButtonElement) => {
    document.querySelectorAll(".tab-panel").forEach(t => t.classList.remove("on"));
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("on"));
    document.getElementById("t-" + id)?.classList.add("on");
    btn.classList.add("on");
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=DM+Sans:wght@400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        :root{--g:#1D9E75;--dk:#0A2A1E;--cr:#F7F4EF;--lt:#E8F5EE}
        body{font-family:'DM Sans',sans-serif;background:var(--cr);color:var(--dk);overflow-x:hidden}
        a{text-decoration:none;color:inherit}
        /* reveal */
        .rev{opacity:0;transform:translateY(28px);transition:all .7s cubic-bezier(.16,1,.3,1)}
        .rev.vis{opacity:1;transform:none}
        /* tabs */
        .tab-panel{display:none}
        .tab-panel.on{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
        .tab-btn{padding:9px 22px;border-radius:100px;font-size:13px;font-weight:500;border:none;background:transparent;color:#666;cursor:pointer;transition:all .2s}
        .tab-btn.on{background:var(--dk);color:#fff}
        /* animations */
        @keyframes fadeUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:none}}
        @keyframes ticker{from{transform:translateX(0)}to{transform:translateX(-50%)}}
        @keyframes pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.5;transform:scale(.8)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}
        .a1{animation:fadeUp .6s .0s both}
        .a2{animation:fadeUp .6s .1s both}
        .a3{animation:fadeUp .6s .2s both}
        .a4{animation:fadeUp .6s .3s both}
        .a5{animation:fadeUp .6s .4s both}
        .ticker{display:inline-flex;animation:ticker 32s linear infinite;white-space:nowrap}
        .mfloat{animation:float 4s ease-in-out infinite}
        /* nav */
        .nav{position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:14px 60px;background:rgba(247,244,239,.93);backdrop-filter:blur(12px);border-bottom:1px solid rgba(29,158,117,.1)}
        .nav-links{display:flex;gap:28px;font-size:14px;color:#555}
        .nav-links a:hover{color:var(--g)}
        .nav-cta{background:var(--dk);color:#fff;padding:10px 22px;border-radius:100px;font-size:13px;font-weight:500;border:none;cursor:pointer;transition:background .2s}
        .nav-cta:hover{background:var(--g)}
        /* hero */
        .hero{min-height:91vh;padding:56px 60px 48px;position:relative;overflow:hidden;max-width:100vw;background:var(--cr)}
        .hero-grid{display:grid;grid-template-columns:55% 45%;gap:32px;align-items:center;max-width:1200px;margin:0 auto;position:relative;z-index:1;overflow:hidden}
        .hero-left{min-width:0;overflow:hidden}
        .hero-right{min-width:0;overflow:hidden;position:relative;height:520px;border-radius:20px}
        .slide{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:opacity 1.2s ease}
        /* buttons */
        .btn-dk{background:var(--dk);color:#fff;padding:13px 26px;border-radius:100px;font-size:14px;font-weight:500;border:none;cursor:pointer;transition:all .2s}
        .btn-dk:hover{background:var(--g);transform:translateY(-2px)}
        .btn-ol{background:transparent;color:var(--dk);padding:13px 26px;border-radius:100px;font-size:14px;font-weight:500;border:1.5px solid rgba(10,42,30,.2);cursor:pointer;transition:all .2s}
        .btn-ol:hover{border-color:var(--g);color:var(--g)}
        .btn-ol-gn{background:transparent;color:var(--g);padding:13px 26px;border-radius:100px;font-size:14px;font-weight:500;border:1.5px solid #1D9E75;cursor:pointer;transition:all .2s;display:inline-block}
        .btn-ol-gn:hover{background:rgba(29,158,117,.08);transform:translateY(-2px)}
        .btn-gn{background:var(--g);color:#fff;padding:14px 32px;border-radius:100px;font-size:15px;font-weight:600;border:none;cursor:pointer;transition:all .2s}
        .btn-gn:hover{background:#16785A;transform:translateY(-2px)}
        .btn-wh{background:rgba(255,255,255,.1);color:#fff;padding:14px 32px;border-radius:100px;font-size:15px;font-weight:500;border:1px solid rgba(255,255,255,.2);cursor:pointer;transition:all .2s}
        .btn-wh:hover{background:rgba(255,255,255,.18)}
        /* mockup */
        .mkp{background:var(--dk);border-radius:14px;padding:18px;overflow:hidden}
        .mkp-bar{display:flex;gap:5px;margin-bottom:14px}
        .mkp-dot{width:9px;height:9px;border-radius:50%}
        .mkp-lbl{font-size:9px;color:rgba(255,255,255,.3);letter-spacing:1px;margin-bottom:10px}
        .mkp table{width:100%;border-collapse:collapse;font-size:10px}
        .mkp th{color:rgba(255,255,255,.35);font-weight:500;text-align:left;padding:5px 8px;border-bottom:1px solid rgba(255,255,255,.06);font-size:9px;letter-spacing:.5px}
        .mkp td{color:rgba(255,255,255,.8);padding:7px 8px;border-bottom:1px solid rgba(255,255,255,.04)}
        .bg{background:rgba(29,158,117,.2);color:#4ECFA0;padding:2px 7px;border-radius:3px;font-size:9px}
        .bo{background:rgba(255,160,50,.15);color:#FFA032;padding:2px 7px;border-radius:3px;font-size:9px}
        /* pricing */
        .pc{background:#fff;border-radius:18px;padding:32px;border:1px solid rgba(10,42,30,.08);transition:all .3s}
        .pc:hover{transform:translateY(-5px);box-shadow:0 20px 40px rgba(10,42,30,.1)}
        .pc.feat{background:var(--dk);border:none;color:#fff}
        /* footer */
        .ft-grid{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:48px;padding-bottom:48px;border-bottom:1px solid rgba(255,255,255,.06)}
        /* responsive */
        @media(max-width:768px){
          .nav{padding:14px 20px}.nav-links{display:none}
          .hero{padding:48px 20px 40px}
          .hero-grid{grid-template-columns:1fr;gap:32px}
          .hero-right{height:280px}
          .tab-panel.on{grid-template-columns:1fr}
          .pricing-grid{grid-template-columns:1fr!important}
          .ft-grid{grid-template-columns:1fr!important}
          .tabs-section,.pricing,.cta,footer{padding-left:20px!important;padding-right:20px!important}
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <img src="/brand/compta-soft-nav.svg" alt="Compta Soft" style={{height:44,width:"auto"}} />
        <div className="nav-links">
          <a href="#features">Fonctionnalités</a>
          <a href="#tarifs">Tarifs</a>
          <a href="#contact">Contact</a>
        </div>
        <button className="nav-cta">Demander une démo</button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 70% 60% at 65% 50%,rgba(29,158,117,.1) 0%,transparent 70%)",pointerEvents:"none"}}/>
        <div className="hero-grid">
          <div className="hero-left">
            <div className="a1" style={{display:"inline-flex",alignItems:"center",gap:8,background:"#fff",border:"1px solid rgba(29,158,117,.3)",borderRadius:100,padding:"5px 14px",fontSize:11,color:"var(--g)",fontWeight:500,marginBottom:28}}>
              <span style={{width:6,height:6,background:"var(--g)",borderRadius:"50%",animation:"pulse 2s infinite",display:"inline-block"}}/>
              Conforme CGI 2026 · PCM 720 comptes · v1.2.0
            </div>
            <h1 className="a2" style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(28px,3vw,44px)",fontWeight:800,lineHeight:1.1,letterSpacing:-1,color:"var(--dk)"}}>
              La comptabilité<br/>marocaine,<br/><em style={{fontStyle:"normal",color:"var(--g)"}}>enfin simple.</em>
            </h1>
            <p className="a3" style={{fontSize:16,color:"#555",lineHeight:1.7,marginTop:20,maxWidth:420}}>
              De la saisie à la liasse Simpl-IS, Compta Soft réunit tout ce dont les PME et cabinets marocains ont besoin.
            </p>
            <div className="a4" style={{display:"flex",gap:12,marginTop:28,flexWrap:"wrap"}}>
              <button className="btn-dk">Demander une démo →</button>
              <Link href="/support" className="btn-ol-gn">Ouvrir un ticket support</Link>
            </div>
            <div id="stats" className="a5" style={{display:"flex",gap:40,marginTop:44,paddingTop:36,borderTop:"1px solid rgba(10,42,30,.08)"}}>
              {[["720","Comptes PCM CGNC"],["8","Déclarations DGI"],["8","États de synthèse"],["236","Tests unitaires"]].map(([n,l])=>(
                <div key={l}>
                  <div data-count={n} style={{fontFamily:"'Syne',sans-serif",fontSize:32,fontWeight:800,color:"var(--dk)"}}>0</div>
                  <div style={{fontSize:12,color:"#888",marginTop:2}}>{l}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-right">
            {SLIDES.map((src,i)=>(
              <img key={i} src={src} className="slide" alt="" style={{opacity:slide===i?1:0}} loading={i===0?"eager":"lazy"}/>
            ))}
            <div style={{position:"absolute",bottom:16,left:"50%",transform:"translateX(-50%)",display:"flex",gap:8,zIndex:2}}>
              {SLIDES.map((_,i)=>(
                <button key={i} onClick={()=>setSlide(i)} style={{width:i===slide?24:8,height:8,borderRadius:4,background:i===slide?"#fff":"rgba(255,255,255,.5)",border:"none",cursor:"pointer",transition:"all .3s",padding:0}}/>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div style={{background:"var(--dk)",padding:"14px 0",overflow:"hidden",whiteSpace:"nowrap"}}>
        <div className="ticker">
          {[0,1].map(k=>(
            <span key={k} style={{display:"inline-flex",alignItems:"center",gap:20,padding:"0 28px",fontSize:12,color:"rgba(255,255,255,.65)",letterSpacing:".5px"}}>
              {["Bilan CGNC","CPC","ESG","Tableau de financement","Notes ETIC","Balance 9 colonnes","Liasse EDI Simpl-IS","SIMPL-TVA v2","RAS TVA Art.117","RAS IS dividendes","Délais paiement Loi 69-21","FEC CNC N°24","IS/CM/CSS","Rapprochement IA","Multi-dossiers","720 comptes PCM"].map(item=>(
                <span key={item}><span style={{color:"var(--g)",marginRight:20}}>·</span>{item}</span>
              ))}
            </span>
          ))}
        </div>
      </div>

      {/* TABS PRODUIT */}
      <section id="features" className="tabs-section" style={{background:"#fff",padding:"90px 60px"}}>
        <div style={{fontSize:11,fontWeight:600,letterSpacing:2,textTransform:"uppercase",color:"var(--g)",marginBottom:14}}>Le logiciel</div>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(32px,3.5vw,48px)",fontWeight:800,letterSpacing:-1.5,lineHeight:1.1,color:"var(--dk)",marginBottom:44}}>
          Tout ce dont vous avez besoin,<br/><em style={{fontStyle:"normal",color:"var(--g)"}}>au même endroit.</em>
        </h2>
        <div style={{display:"flex",gap:4,background:"var(--cr)",padding:4,borderRadius:100,width:"fit-content",marginBottom:48}}>
          {[["saisie","Saisie"],["etats","États"],["fiscal","Fiscalité"],["declarations","Déclarations DGI"],["tresorerie","Trésorerie"]].map(([id,label],i)=>(
            <button key={id} className={`tab-btn${i===0?" on":""}`} onClick={e=>showTab(id,e.currentTarget)}>{label}</button>
          ))}
        </div>

        {/* Saisie */}
        <div id="t-saisie" className="tab-panel on">
          <div>
            <h3 style={{fontFamily:"'Syne',sans-serif",fontSize:28,fontWeight:800,letterSpacing:-1,marginBottom:14,color:"var(--dk)"}}>Saisie & validation comptable</h3>
            <p style={{fontSize:15,color:"#555",lineHeight:1.7,marginBottom:22}}>Du brouillon à la validation, chaque pièce suit un workflow rigoureux conforme aux normes CGNC.</p>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {["Pièces BROUILLON → VALIDE → CONTRE_PASSE","Saisie unitaire et par lot (CSV/Excel)","Validation en masse par l'administrateur","Journaux ACH, VTE, BNQ, CAI, OD","PCM complet — 720 comptes classes 1 à 8","Contrepartie automatique banque/caisse"].map(f=>(
                <li key={f} style={{display:"flex",gap:10,fontSize:14,color:"#444"}}>
                  <span style={{color:"var(--g)",fontWeight:700,flexShrink:0}}>→</span>{f}
                </li>
              ))}
            </ul>
          </div>
          <div className="mkp mfloat">
            <div className="mkp-bar">{["#FF5F57","#FFBD2E","#28C840"].map(c=><div key={c} className="mkp-dot" style={{background:c}}/>)}</div>
            <div className="mkp-lbl">JOURNAL BNQ — HEBERSOFT 2026</div>
            <table><thead><tr>{["N° PIÈCE","COMPTE","LIBELLÉ","DÉBIT","STATUT"].map(h=><th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {[["BNQ-001","5141","Virement client","45 200,00","#4ECFA0","VALIDE","bg"],["BNQ-002","4411","Fournisseur Maroc","12 800,00","#ff8a8a","VALIDE","bg"],["BNQ-003","6111","Achats marchandises","8 500,00","#ff8a8a","BROUILLON","bo"],["BNQ-004","3421","Client HEBERSOFT","28 000,00","#4ECFA0","VALIDE","bg"]].map(([n,c,l,m,mc,s,sc])=>(
                <tr key={n}><td>{n}</td><td>{c}</td><td>{l}</td><td style={{color:mc as string}}>{m}</td><td><span className={sc as string}>{s}</span></td></tr>
              ))}
            </tbody></table>
          </div>
        </div>

        {/* Etats */}
        <div id="t-etats" className="tab-panel">
          <div>
            <h3 style={{fontFamily:"'Syne',sans-serif",fontSize:28,fontWeight:800,letterSpacing:-1,marginBottom:14,color:"var(--dk)"}}>États de synthèse CGNC</h3>
            <p style={{fontSize:15,color:"#555",lineHeight:1.7,marginBottom:22}}>Tous les états réglementaires générés automatiquement, avec export PDF et XLSX.</p>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {["Bilan, CPC, ESG, Tableau de financement","Notes ETIC complètes","Balance 9 colonnes (générale, auxiliaires)","Grand livre et balance tiers","Balance âgée et lettrage","Export PDF / XLSX en un clic"].map(f=>(
                <li key={f} style={{display:"flex",gap:10,fontSize:14,color:"#444"}}><span style={{color:"var(--g)",fontWeight:700,flexShrink:0}}>→</span>{f}</li>
              ))}
            </ul>
          </div>
          <div className="mkp">
            <div className="mkp-bar">{["#FF5F57","#FFBD2E","#28C840"].map(c=><div key={c} className="mkp-dot" style={{background:c}}/>)}</div>
            <div className="mkp-lbl">BALANCE 9 COLONNES — HEBERSOFT 2026</div>
            <table><thead><tr>{["COMPTE","INTITULÉ","DÉBIT N","CRÉDIT N","SOLDE"].map(h=><th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {[["3421","Clients","280 000","120 000","160 000","#4ECFA0"],["4411","Fournisseurs","45 000","195 000","150 000","#ff8a8a"],["5141","Banque","520 000","380 000","140 000","#4ECFA0"],["6111","Achats M/ses","95 000","0","95 000","#ff8a8a"]].map(([c,l,d,cr,s,sc])=>(
                <tr key={c}><td>{c}</td><td>{l}</td><td>{d}</td><td>{cr}</td><td style={{color:sc as string,fontWeight:600}}>{s}</td></tr>
              ))}
            </tbody></table>
          </div>
        </div>

        {/* Fiscal */}
        <div id="t-fiscal" className="tab-panel">
          <div>
            <h3 style={{fontFamily:"'Syne',sans-serif",fontSize:28,fontWeight:800,letterSpacing:-1,marginBottom:14,color:"var(--dk)"}}>Fiscalité IS & liasse Simpl-IS</h3>
            <p style={{fontSize:15,color:"#555",lineHeight:1.7,marginBottom:22}}>Pipeline fiscal complet conforme au CGI marocain jusqu'à la génération XML pour la DGI.</p>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {["Résultat fiscal IS → CM → crédits CM → CSS","Loi de finances paramétrable (2026)","Réintégrations, déductions, déficits reportés","Liasse EDI XML Simpl-IS (CDC DGI 1.9.4)","Agenda fiscal et déclarations rectificatives","Gel à clôture — immutabilité garantie"].map(f=>(
                <li key={f} style={{display:"flex",gap:10,fontSize:14,color:"#444"}}><span style={{color:"var(--g)",fontWeight:700,flexShrink:0}}>→</span>{f}</li>
              ))}
            </ul>
          </div>
          <div className="mkp">
            <div className="mkp-bar">{["#FF5F57","#FFBD2E","#28C840"].map(c=><div key={c} className="mkp-dot" style={{background:c}}/>)}</div>
            <div className="mkp-lbl">RÉSULTAT FISCAL IS — 2026</div>
            <table><thead><tr>{["LIGNE","LIBELLÉ","MONTANT MAD"].map(h=><th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {[["RF01","Résultat comptable","185 400,00","#4ECFA0"],["RF12","Réintégrations","+12 600,00","#ff8a8a"],["RF18","Déductions","-8 200,00","#4ECFA0"],["RF25","Résultat fiscal brut","189 800,00","#fff"],["IS","IS dû (taux 20%)","37 960,00","#FFA032"]].map(([l,n,m,c])=>(
                <tr key={l}><td style={{color:"rgba(255,255,255,.6)"}}>{l}</td><td>{n}</td><td style={{color:c as string,fontWeight:600}}>{m}</td></tr>
              ))}
            </tbody></table>
          </div>
        </div>

        {/* Declarations DGI */}
        <div id="t-declarations" className="tab-panel">
          <div>
            <h3 style={{fontFamily:"'Syne',sans-serif",fontSize:28,fontWeight:800,letterSpacing:-1,marginBottom:14,color:"var(--dk)"}}>Déclarations fiscales DGI</h3>
            <p style={{fontSize:15,color:"#555",lineHeight:1.7,marginBottom:22}}>Tous les états annexes réglementaires — génération PDF et export XML en un clic, conformes CGI 2026.</p>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {["TVA SIMPL-TVA v2 — 4 taux, export XML DGI (Art. 95-117 CGI)","RAS TVA — ADC086B-26I, attestation régularité fiscale (Art. 117 IV-V)","RAS IS dividendes — taux 11,25% en 2026 (Art. 158 + Art. 247-XXXVII-C)","État gasoil carburant — ADC083B-20I (Art. 106 I-4° CGI)","Délais de paiement — ADC500B-23I, amendes BAM (Loi 69-21)","Ventes par client ADC020B-21I · Rémunérations tiers ADC030B-26I"].map(f=>(
                <li key={f} style={{display:"flex",gap:10,fontSize:14,color:"#444"}}><span style={{color:"var(--g)",fontWeight:700,flexShrink:0}}>→</span>{f}</li>
              ))}
            </ul>
          </div>
          <div className="mkp">
            <div className="mkp-bar">{["#FF5F57","#FFBD2E","#28C840"].map(c=><div key={c} className="mkp-dot" style={{background:c}}/>)}</div>
            <div className="mkp-lbl">DÉCLARATIONS DGI — 2026</div>
            <table><thead><tr>{["MODÈLE","DÉCLARATION","STATUT"].map(h=><th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {[["SIMPL-TVA","TVA 4 taux — XML DGI","bg"],["ADC086B-26I","RAS TVA attestation","bg"],["ADC083B-20I","État gasoil","bg"],["ADC500B-23I","Délais paiement BAM","bg"],["ADC020B-21I","Ventes par client","bg"],["ADC030B-26I","Rémunérations tiers","bg"]].map(([m,l,sc])=>(
                <tr key={m}><td style={{color:"#4ECFA0",fontFamily:"monospace",fontSize:9}}>{m}</td><td>{l}</td><td><span className={sc as string}>Actif</span></td></tr>
              ))}
            </tbody></table>
          </div>
        </div>

        {/* Tresorerie */}
        <div id="t-tresorerie" className="tab-panel">
          <div>
            <h3 style={{fontFamily:"'Syne',sans-serif",fontSize:28,fontWeight:800,letterSpacing:-1,marginBottom:14,color:"var(--dk)"}}>Trésorerie & rapprochement IA</h3>
            <p style={{fontSize:15,color:"#555",lineHeight:1.7,marginBottom:22}}>Importez vos relevés PDF — l'IA extrait les lignes et les rapproche automatiquement.</p>
            <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:10}}>
              {["Import relevé bancaire PDF (extraction IA)","Rapprochement automatique ±0,01 MAD","Effets de commerce et omissions bancaires","Position trésorerie et prévisions","Exports rapprochement","Clé IA chiffrée — vos données restent chez vous"].map(f=>(
                <li key={f} style={{display:"flex",gap:10,fontSize:14,color:"#444"}}><span style={{color:"var(--g)",fontWeight:700,flexShrink:0}}>→</span>{f}</li>
              ))}
            </ul>
          </div>
          <div className="mkp">
            <div className="mkp-bar">{["#FF5F57","#FFBD2E","#28C840"].map(c=><div key={c} className="mkp-dot" style={{background:c}}/>)}</div>
            <div className="mkp-lbl">RAPPROCHEMENT BNQ — CIH BANK</div>
            <table><thead><tr>{["DATE","LIBELLÉ","MONTANT","STATUT"].map(h=><th key={h}>{h}</th>)}</tr></thead>
            <tbody>
              {[["02/06","VIR HEBERSOFT CLIENT","28 000","RAPPROCHÉ","bg"],["03/06","PRLV FOURNISSEUR","12 800","RAPPROCHÉ","bg"],["04/06","COMMISSION BANQUE","450","EN ATTENTE","bo"]].map(([d,l,m,s,sc])=>(
                <tr key={d}><td>{d}</td><td>{l}</td><td>{m}</td><td><span className={sc as string}>{s}</span></td></tr>
              ))}
            </tbody></table>
            <div style={{marginTop:10,padding:"7px 10px",background:"rgba(29,158,117,.1)",borderRadius:6,fontSize:9,color:"#4ECFA0"}}>✓ 2/3 lignes rapprochées automatiquement par IA</div>
          </div>
        </div>
      </section>

      {/* TARIFS */}
      <section id="tarifs" className="pricing rev" style={{background:"var(--cr)",padding:"90px 60px"}}>
        <div style={{textAlign:"center",fontSize:11,fontWeight:600,letterSpacing:2,textTransform:"uppercase",color:"var(--g)",marginBottom:14}}>Tarifs</div>
        <h2 style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(32px,3.5vw,48px)",fontWeight:800,letterSpacing:-1.5,textAlign:"center",color:"var(--dk)",marginBottom:8}}>Simple et transparent</h2>
        <p style={{textAlign:"center",color:"#888",fontSize:15,marginBottom:48}}>Licence annuelle · Hébergé chez vous · Vos données restent les vôtres</p>
        <div className="pricing-grid" style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:20,maxWidth:900,margin:"0 auto"}}>
          {[
            {tag:"Starter",name:"TPE",price:"4 900",sub:"/an",desc:"Pour les indépendants et TPE",feat:["1 dossier","2 utilisateurs","États de synthèse CGNC","Support email"],feat2:false},
            {tag:"Le plus choisi",name:"PME",price:"9 900",sub:"/an",desc:"Pour les PME marocaines",feat:["3 dossiers","5 utilisateurs","Liasse Simpl-IS + fiscalité","Trésorerie IA","Support prioritaire"],feat2:true},
            {tag:"Cabinet",name:"Multi-dossiers",price:"Sur devis",sub:"",desc:"Pour les cabinets comptables",feat:["Dossiers illimités","Utilisateurs illimités","Formation incluse","Accompagnement dédié"],feat2:false},
          ].map(p=>(
            <div key={p.name} className={`pc rev${p.feat2?" feat":""}`}>
              <div style={{display:"inline-block",background:p.feat2?"rgba(29,158,117,.2)":"var(--lt)",color:p.feat2?"#4ECFA0":"var(--g)",fontSize:11,fontWeight:600,padding:"3px 11px",borderRadius:100,marginBottom:18}}>{p.tag}</div>
              <div style={{fontFamily:"'Syne',sans-serif",fontSize:18,fontWeight:800,color:p.feat2?"#fff":"var(--dk)"}}>{p.name}</div>
              <div style={{fontFamily:"'Syne',sans-serif",margin:"14px 0 4px",color:p.feat2?"#fff":"var(--dk)"}}>
                {p.price==="Sur devis" ? (
                  <span style={{fontSize:24,fontWeight:800}}>{p.price}</span>
                ) : (
                  <div style={{display:"flex",alignItems:"baseline",gap:4,whiteSpace:"nowrap",fontWeight:800}}>
                    <span style={{fontSize:14}}>MAD</span>
                    <span style={{fontSize:28}}>{p.price}</span>
                    <span style={{fontSize:13,fontWeight:400,opacity:.5}}>{p.sub}</span>
                  </div>
                )}
              </div>
              <div style={{fontSize:12,color:p.feat2?"rgba(255,255,255,.6)":"#888",marginBottom:20,paddingBottom:20,borderBottom:`1px solid ${p.feat2?"rgba(255,255,255,.1)":"rgba(10,42,30,.08)"}`}}>{p.desc}</div>
              <ul style={{listStyle:"none",display:"flex",flexDirection:"column",gap:9}}>
                {p.feat.map(f=><li key={f} style={{fontSize:13,color:p.feat2?"rgba(255,255,255,.7)":"#555",display:"flex",alignItems:"center",gap:7}}><span style={{color:"var(--g)",fontWeight:700}}>✓</span>{f}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section id="contact" style={{background:"var(--dk)",padding:"90px 60px",textAlign:"center",position:"relative",overflow:"hidden"}}>
        <div style={{position:"absolute",inset:0,background:"radial-gradient(ellipse 60% 80% at 50% 50%,rgba(29,158,117,.15) 0%,transparent 70%)"}}/>
        <h2 className="rev" style={{fontFamily:"'Syne',sans-serif",fontSize:"clamp(32px,4.5vw,58px)",fontWeight:800,color:"#fff",letterSpacing:-2,lineHeight:1.08,position:"relative",zIndex:1}}>
          Prêt à moderniser<br/>votre <em style={{fontStyle:"normal",color:"var(--g)"}}>comptabilité</em> ?
        </h2>
        <p className="rev" style={{fontSize:16,color:"rgba(255,255,255,.5)",marginTop:18,position:"relative",zIndex:1}}>Rejoignez les premières entreprises marocaines qui font confiance à Compta Soft.</p>
        <div className="rev" style={{display:"flex",gap:12,justifyContent:"center",marginTop:36,position:"relative",zIndex:1}}>
          <button className="btn-gn">Demander une démo →</button>
          <button className="btn-wh">Voir les tarifs</button>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
