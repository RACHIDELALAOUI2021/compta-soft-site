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

## Module Support (à développer)
### Workflow
- Client soumet ticket sans compte (juste email)
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

### Schema Prisma (à créer)
Ticket : id, numero, email, societe, type, sujet, description, statut, token (UUID unique pour lien suivi), createdAt, updatedAt
Message : id, ticketId, auteur (CLIENT/ADMIN), contenu, createdAt

### Pages à créer
- /support — formulaire ouverture ticket
- /support/[token] — suivi ticket client (accès par token)
- /admin/tickets — liste tickets (auth admin)
- /admin/tickets/[id] — détail + réponse admin
