# Skills CSS/Layout pour Claude Code

## Règles absolues pour ce projet

### Hero layout
- Le hero utilise TOUJOURS `display:grid; grid-template-columns: 1fr 1fr`
- La colonne texte : `min-width:0; overflow:hidden`
- La colonne image : `min-width:0; overflow:hidden`
- Le hero container : `overflow:hidden; max-width:100vw`
- JAMAIS de width fixe en px sur les colonnes

### Logo nav
- TOUJOURS en SVG inline dans le JSX, jamais de <img src=...>
- Logo = badge carré vert #0E7A73 avec "CS" blanc + texte "Compta" #061B3A + "Soft" #0E7A73
- height fixe : 36px, width:auto

### Images
- Toujours `object-fit:cover; width:100%; height:100%`
- Container : `position:relative; overflow:hidden`
- Images absolues : `position:absolute; inset:0`

### Slideshow
- Container : `position:relative; overflow:hidden; border-radius:20px`
- Chaque slide : `position:absolute; inset:0; opacity:0; transition:opacity 1s ease`
- Slide active : `opacity:1`@AGENTS.md
