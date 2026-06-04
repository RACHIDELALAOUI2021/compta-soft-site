# Compta Soft — mémoire projet

Site vitrine Next.js (landing une page) pour **Compta Soft**, logiciel de comptabilité conforme CGNC / PCM marocain.

## Stack

- Next.js 16 (`app/`), React 19, TypeScript
- Page principale : `src/app/page.tsx` (`"use client"`, styles dans un bloc `<style>` inline + classes CSS)
- Layout : `src/app/layout.tsx` (metadata, `lang="fr"`)
- Assets marque : `public/brand/` (référence design uniquement — **pas** pour le logo nav)

## Commandes

```bash
npm run dev    # http://localhost:3000
npm run build
npm run lint
```

## Règles absolues — CSS / layout

### Hero layout

- Grille hero : `display: grid; grid-template-columns: 1fr 1fr` (jamais de `%` ni de px sur les colonnes)
- Colonne texte (`.hero-left` ou équivalent) : `min-width: 0; overflow: hidden`
- Colonne image / slideshow (`.hero-right` ou équivalent) : `min-width: 0; overflow: hidden`
- Section `.hero` : `overflow: hidden; max-width: 100vw`

### Logo nav

- **Toujours** SVG inline dans le JSX — **jamais** `<img src="...">` pour le logo
- Badge carré `#0E7A73`, texte « CS » blanc
- Wordmark : « Compta » `#061B3A`, « Soft » `#0E7A73`
- Taille : `height: 36px`, `width: auto` (attributs SVG ou style équivalent)

### Images & slideshow

- Container slideshow : `position: relative; overflow: hidden; border-radius: 20px`
- Chaque slide (`img` ou fond) : `position: absolute; inset: 0; object-fit: cover; width: 100%; height: 100%`
- Transition : `opacity: 0` par défaut, `opacity: 1` sur la slide active, `transition: opacity 1s ease` (ou proche)
- Indicateurs / dots : `position: absolute` avec `z-index` au-dessus des slides

### Tokens couleur (page)

| Token | Usage |
|-------|--------|
| `#0E7A73` | Badge logo, accent « Soft » |
| `#061B3A` | Texte « Compta » |
| `--g` / `#1D9E75` | Accent UI (boutons, highlights) |
| `--dk` / `#0A2A1E` | Fond sombre, texte principal |
| `--cr` / `#F7F4EF` | Fond crème |

Polices landing : **Syne** (titres), **DM Sans** (corps) via Google Fonts dans `<style>`.

## Contenu & structure page

Sections typiques dans `page.tsx` : nav sticky, hero + stats animés, ticker CGNC, onglets produit (saisie / états / fiscal / trésorerie), tarifs, CTA, footer.

Interactions client : slideshow auto (~3,5 s), compteurs `[data-count]` au scroll, onglets via `showTab`, révélations `.rev` / `.vis`.

## À ne pas faire

- Logo nav en `<img src="/brand/...">`
- Colonnes hero en `55% 45%` ou largeurs fixes
- Slides en flux normal (sans `position: absolute; inset: 0`)
- Oublier `min-width: 0` sur les deux colonnes du hero (débordement horizontal)

## Next.js

Voir aussi `AGENTS.md` pour les règles spécifiques Next.js 16 (APIs, deprecations, docs dans `node_modules/next/dist/docs/`).
