# Skill : Frontend Design — Compta Soft Site Vitrine

## Règles absolues — ne jamais déroger

### 1. Hero layout
- TOUJOURS `display:grid; grid-template-columns: 55% 45%` avec `gap:32px`
- Colonne texte : `min-width:0; overflow:hidden`
- Colonne image : `min-width:0; overflow:hidden; position:relative`
- Hero container : `overflow:hidden; max-width:1200px; margin:0 auto`
- JAMAIS de `width` fixe en px sur les colonnes
- Titre h1 : MAXIMUM `clamp(28px,3vw,44px)` — jamais plus grand
- Titre h1 : TOUJOURS `lineHeight:1.1; letterSpacing:-1`

### 2. Logo nav
- TOUJOURS `<img src="/brand/compta-soft-nav.svg" style={{height:44,width:"auto"}} />`
- JAMAIS de SVG inline pour le logo
- JAMAIS de texte à la place du logo

### 3. Images et slideshow
- Container slideshow : `position:relative; overflow:hidden; borderRadius:20px; height:520px`
- Chaque slide : `position:absolute; inset:0; width:100%; height:100%; objectFit:cover`
- Transition : `opacity 1.2s ease` — opacity 1 si active, 0 sinon
- JAMAIS de `float` ou `flex` pour les slides

### 4. Encodage
- TOUJOURS UTF-8 — jamais de caractères corrompus (Ã©, Â·, etc.)
- Vérifier systématiquement : é è à ù ô î ê â û ç œ
- Les accents doivent être écrits directement, pas en entités HTML

### 5. Animations
- Scroll reveal : classe `.rev` + IntersectionObserver → ajoute `.vis`
- Compteurs : `data-count` attr + requestAnimationFrame
- Ticker : `animation:ticker 32s linear infinite` sur `.ticker`
- Float mockup : `animation:float 4s ease-in-out infinite` sur `.mfloat`
- Tabs : `.tab-panel` display:none → `.tab-panel.on` display:grid

### 6. Couleurs — ne jamais changer
```
--g  : #1D9E75  (vert principal)
--dk : #0A2A1E  (vert très foncé / dark)
--cr : #F7F4EF  (crème fond)
--lt : #E8F5EE  (vert clair)
```

### 7. Typographie
- Titres : `font-family:'Syne',sans-serif; font-weight:800`
- Corps : `font-family:'DM Sans',sans-serif`
- Import Google Fonts en début de `<style>`

### 8. Responsive — breakpoint 768px
```css
@media(max-width:768px){
  .hero-grid { grid-template-columns:1fr !important }
  .hero-right { height:280px !important }
  .tab-panel.on { grid-template-columns:1fr !important }
  .pricing-grid { grid-template-columns:1fr !important }
  .ft-grid { grid-template-columns:1fr !important }
  nav { padding:14px 20px }
  .nav-links { display:none }
  .hero { padding:48px 20px 40px !important }
}
```

### 9. Buttons — classes fixes
- `.btn-dk` : fond dark, hover vert
- `.btn-ol` : outline, hover vert
- `.btn-gn` : fond vert, hover foncé
- `.btn-wh` : fond blanc transparent (sur fond sombre)
- Border-radius TOUJOURS 100px (pill)

### 10. Sections — ordre et structure
1. `<nav>` sticky
2. `<section class="hero">` — fond var(--cr)
3. Ticker — fond var(--dk)
4. `<section id="features">` — fond #fff
5. `<section id="tarifs">` — fond var(--cr)
6. `<section id="contact">` CTA — fond var(--dk)
7. `<footer>` — fond #060F0A

## Ce que tu dois faire avant chaque modification

1. Lire ce fichier SKILL.md en entier
2. Identifier quelle règle s'applique
3. Ne modifier QUE ce qui est demandé
4. Vérifier l'encodage UTF-8 après modification
5. Tester mentalement le layout mobile

## Ce qui est interdit

- Changer les couleurs CSS variables
- Modifier la structure des sections sans demande explicite
- Utiliser des librairies externes (pas de Framer Motion, pas de GSAP)
- Ajouter des `width` fixes en px sur des colonnes de grid
- Remplacer le logo img par du texte ou SVG inline
- Dépasser fontSize 44px pour le titre hero
- Utiliser `position:relative` sur les slides du slideshow
