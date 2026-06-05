# Mémoire du projet — compta-soft-site

## Stack
- Next.js 16 + React 19 + TypeScript
- Tailwind CSS
- Vercel (déploiement)
- Domaine : comptasoftmaroc.com

## Pages existantes
- / — Page d'accueil (hero, ticker, tabs produit, tarifs, CTA, footer)
- /fonctionnalites — Détail fonctionnalités
- /tarifs — Tarifs et FAQ
- /contact — Formulaire de contact

## SEO
- Metadata complète (OG, Twitter, canonical, robots)
- sitemap.xml + robots.txt

## Module Support (implémenté)
### Workflow
- Client licencié soumet ticket sans compte (email + **code client obligatoire**)
- Le code client doit figurer dans `VALID_CLIENT_CODES` (ex. `HEBERSOFT,GBS`) — sinon refus 403
- Types : Bug logiciel / Question utilisation / Demande d'amélioration
- Client reçoit email avec numéro ticket + lien de suivi unique
- Client peut consulter et répondre via lien unique (token UUID)
- Admin voit tous les tickets, change statut, répond

### Statuts ticket
NOUVEAU → EN_COURS → RESOLU → FERME

### Stack support
- Base de données : Neon PostgreSQL (Vercel intégration)
- Emails : Resend (3000 emails/mois gratuit)
- Auth admin : NextAuth email/mot de passe
- ORM : Prisma

### Schema Prisma
Ticket : id, numero, email, codeClient, societe, type, sujet, description, statut, token (UUID unique pour lien suivi), createdAt, updatedAt
Message : id, ticketId, auteur (CLIENT/ADMIN), contenu, createdAt

### Pages
- /support — formulaire ouverture ticket
- /support/[token] — suivi ticket client (accès par token)
- /admin/login — connexion admin
- /admin/tickets — liste tickets (auth admin)
- /admin/tickets/[id] — détail + réponse admin

### Mise en service
1. Copier `.env.example` → `.env` et renseigner `DATABASE_URL`, `RESEND_API_KEY`, `ADMIN_SESSION_SECRET`, `VALID_CLIENT_CODES`
2. `npm run db:push` — créer les tables Neon
3. `npm run admin:create` — créer le compte admin (`ADMIN_EMAIL` / `ADMIN_PASSWORD`)
4. Déployer sur Vercel avec les mêmes variables d'environnement
