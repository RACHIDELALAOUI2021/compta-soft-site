# Compta Soft Site — instructions agents

## Projet

Landing marketing **Compta Soft** (comptabilité marocaine CGNC). Une page client : `src/app/page.tsx`. Langue : français.

Détails layout, logo, hero et slideshow : **`CLAUDE.md`** (source de vérité pour le CSS de la landing).

## Conventions obligatoires (`src/app/page.tsx`)

1. **Logo nav** — SVG inline uniquement (`#0E7A73` + CS blanc + Compta `#061B3A` + Soft `#0E7A73`), hauteur 36px.
2. **Hero** — `grid-template-columns: 1fr 1fr`, les deux colonnes avec `min-width: 0` et `overflow: hidden`, hero en `max-width: 100vw`.
3. **Slideshow** — conteneur `position: relative; overflow: hidden`, chaque image `position: absolute; inset: 0; object-fit: cover`.

Ne pas réintroduire `grid-template-columns: 55% 45%` ni `<img>` pour le logo de navigation.

## Fichiers clés

| Fichier | Rôle |
|---------|------|
| `src/app/page.tsx` | Landing complète (styles + JSX) |
| `src/app/layout.tsx` | Metadata, favicon, `lang="fr"` |
| `public/brand/*.svg` | Référence visuelle (pas pour `<img>` nav) |

## Scripts

`npm run dev` · `npm run build` · `npm run lint`

---

<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
