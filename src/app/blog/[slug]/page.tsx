"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { LandingShell } from "@/components/landing-chrome";

const ARTICLES: Record<string, {
  tag: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
  sections: { heading: string; body: string[] }[];
}> = {
  "simpl-tva-maroc-2026": {
    tag: "TVA",
    date: "8 juin 2026",
    readTime: "5 min",
    title: "SIMPL-TVA 2026 : guide complet pour les entreprises marocaines",
    description: "Comment déclarer la TVA au Maroc avec le portail SIMPL-TVA — taux applicables, fait générateur, sections A à F et export XML conforme DGI.",
    sections: [
      {
        heading: "Qu'est-ce que SIMPL-TVA ?",
        body: [
          "SIMPL-TVA est le portail en ligne de la Direction Générale des Impôts (DGI) marocaine permettant aux entreprises assujetties à la TVA de déposer leurs déclarations de manière dématérialisée.",
          "Depuis 2026, la déclaration TVA doit impérativement être effectuée via ce portail pour toutes les entreprises dont le chiffre d'affaires dépasse le seuil légal. Le format d'échange est un fichier XML structuré selon le cahier des charges DGI.",
        ],
      },
      {
        heading: "Les 4 taux de TVA applicables au Maroc (Art. 99 CGI 2026)",
        body: [
          "Le CGI 2026 définit quatre taux de TVA applicables selon la nature des opérations :",
          "→ 20% : taux normal applicable à toutes les opérations non expressément soumises à un taux réduit.",
          "→ 14% : applicable notamment aux transports, travaux immobiliers, énergie électrique.",
          "→ 10% : applicable aux opérations bancaires, hôtelières, restauration, certains produits alimentaires.",
          "→ 7% : applicable aux produits de grande consommation (eau, gaz, médicaments, huile alimentaire).",
          "La LF 2026 a modifié certaines exonérations (pâtes courtes, sang, engrais) — vérifiez la conformité de votre paramétrage avec l'Art. 91 CGI.",
        ],
      },
      {
        heading: "Fait générateur : débit ou encaissement ?",
        body: [
          "Le fait générateur de la TVA détermine le moment où la taxe devient exigible :",
          "→ Régime des débits (encaissements et facturation) : la TVA est exigible dès l'établissement de la facture, indépendamment du paiement.",
          "→ Régime des encaissements : la TVA n'est exigible que lors du paiement effectif. Ce régime est applicable sur option pour certaines catégories d'entreprises.",
          "Le choix du régime impacte directement les sections de la déclaration SIMPL-TVA et le calcul de la TVA nette due.",
        ],
      },
      {
        heading: "Structure de la déclaration SIMPL-TVA : sections A à F",
        body: [
          "La déclaration SIMPL-TVA est structurée en 6 sections :",
          "→ Section A : TVA facturée sur les ventes (chiffre d'affaires taxable par taux).",
          "→ Section B : TVA récupérable sur achats de biens et services.",
          "→ Section C : TVA récupérable sur immobilisations.",
          "→ Section D : Régularisations (prorata, reversements).",
          "→ Section E : Crédit de TVA reporté de la période précédente.",
          "→ Section F : TVA nette due ou crédit à reporter.",
        ],
      },
      {
        heading: "Export XML et dépôt sur le portail DGI",
        body: [
          "Compta Soft génère automatiquement le fichier XML SIMPL-TVA conforme au cahier des charges DGI, à partir des écritures comptables validées sur la période.",
          "Le fichier est téléchargeable depuis le module TVA et peut être déposé directement sur le portail tax.gov.ma. Aucune ressaisie manuelle n'est nécessaire.",
          "La périodicité de dépôt (mensuelle ou trimestrielle) est paramétrable selon le régime TVA de votre entreprise.",
        ],
      },
      {
        heading: "Compta Soft et SIMPL-TVA v2",
        body: [
          "Compta Soft intègre SIMPL-TVA v2 depuis la version 1.1.0 (juin 2026), avec prise en charge des 4 taux, des deux régimes de fait générateur et de l'export XML conforme.",
          "Pour toute question sur le paramétrage TVA de votre dossier, contactez notre équipe support via le portail HEBERSOFT.",
        ],
      },
    ],
  },

  "attestation-regularite-fiscale-art-117": {
    tag: "RAS TVA",
    date: "8 juin 2026",
    readTime: "4 min",
    title: "Attestation de régularité fiscale fournisseur : tout savoir (Art. 117 CGI)",
    description: "L'attestation de régularité fiscale (modèle AAC271B-24I) est obligatoire pour exonérer vos fournisseurs de la RAS TVA. Validité 6 mois, vérification sur tax.gov.ma.",
    sections: [
      {
        heading: "Qu'est-ce que l'attestation de régularité fiscale ?",
        body: [
          "L'attestation de régularité fiscale est un document délivré par la DGI certifiant qu'un fournisseur n'a pas de dette fiscale exigible et est en règle vis-à-vis de ses obligations de déclaration.",
          "Elle est obligatoire dans le cadre de l'application de la retenue à la source TVA prévue à l'article 117-IV et V du CGI. Son modèle officiel est l'AAC271B-24I.",
        ],
      },
      {
        heading: "Durée de validité : 6 mois (Art. 117-IV CGI)",
        body: [
          "Conformément à l'article 117-IV du CGI, l'attestation est valable pour une durée de 6 mois à compter de sa date d'édition par la DGI.",
          "Au-delà de cette période, le fournisseur doit obtenir une nouvelle attestation. En l'absence d'attestation valide au moment du paiement, la RAS TVA devient obligatoire.",
        ],
      },
      {
        heading: "Conséquences de l'absence ou de l'expiration (Art. 117-IV vs V)",
        body: [
          "→ Fournisseurs de biens d'équipement et travaux (Art. 117-IV) : si l'attestation est absente ou expirée, la RAS TVA est opérée à 100% du montant de la TVA due.",
          "→ Prestataires de services (Art. 117-V) : la RAS est de 75% si l'attestation est présentée, et de 100% en son absence.",
          "Le déclencheur légal est le moment du PAIEMENT, pas la date de facturation.",
        ],
      },
      {
        heading: "Vérification sur tax.gov.ma",
        body: [
          "Chaque attestation DGI comporte un code de vérification unique (ex : 1806ed51bc57ac22) permettant de confirmer son authenticité sur le portail www.tax.gov.ma.",
          "Compta Soft vous permet de saisir le numéro d'attestation et le code de vérification directement sur la fiche fournisseur, et affiche un badge de statut en temps réel (valide / expiration proche / expirée / absente).",
        ],
      },
      {
        heading: "Gestion automatisée dans Compta Soft",
        body: [
          "Depuis la version 1.2.0, Compta Soft calcule automatiquement la validité de l'attestation à chaque paiement fournisseur et déclenche la RAS TVA si nécessaire.",
          "Un badge coloré dans la liste fournisseurs vous permet d'identifier en un coup d'œil les attestations à renouveler avant expiration.",
        ],
      },
    ],
  },

  "ras-is-dividendes-maroc-2026": {
    tag: "IS",
    date: "8 juin 2026",
    readTime: "4 min",
    title: "RAS IS sur dividendes au Maroc : taux 2026 et obligations (Art. 158 CGI)",
    description: "La retenue à la source IS sur dividendes est opérée par la société distributrice. Taux transitoire 11,25% pour 2026 selon l'Art. 247-XXXVII-C CGI.",
    sections: [
      {
        heading: "Qui opère la RAS IS sur dividendes ?",
        body: [
          "Conformément à l'article 158 du CGI, la retenue à la source IS sur les dividendes est opérée par la société distributrice — c'est-à-dire la société qui verse les dividendes à ses associés.",
          "Elle s'applique aux produits des actions, parts sociales et revenus assimilés définis à l'article 13-I du CGI : dividendes, intérêts du capital, boni de liquidation, réserves mises en distribution.",
        ],
      },
      {
        heading: "Taux applicables en 2026 (Art. 247-XXXVII-C CGI)",
        body: [
          "Le taux de droit commun prévu à l'article 19-IV-B du CGI est de 10%. Cependant, l'article 247-XXXVII-C du CGI prévoit des taux transitoires :",
          "→ 12,50% pour les distributions à compter du 1er janvier 2025",
          "→ 11,25% pour les distributions à compter du 1er janvier 2026 ← APPLICABLE EN 2026",
          "→ 10,00% pour les distributions à compter du 1er janvier 2027 (droit commun)",
          "Attention : le taux transitoire 2026 de 11,25% prime sur le taux de droit commun de 10%.",
        ],
      },
      {
        heading: "Écritures comptables (PCM CGNC)",
        body: [
          "La distribution de dividendes génère les écritures suivantes :",
          "→ Débit 1161 (Dividendes à distribuer) : montant brut",
          "→ Crédit 44551 (État, retenues IS à reverser) : montant RAS IS",
          "→ Crédit 1162 (Dividendes nets à payer) : montant net",
          "Exemple pour 100 000 MAD distribués en 2026 : RAS IS = 11 250 MAD, net à payer = 88 750 MAD.",
        ],
      },
      {
        heading: "Délai de versement au Trésor",
        body: [
          "La RAS IS doit être versée au Trésor dans le mois suivant la mise à disposition ou l'inscription en compte des dividendes (Art. 158 CGI).",
          "Le reversement s'effectue via le formulaire prévu à cet effet auprès du receveur de l'administration fiscale dont dépend la société distributrice.",
        ],
      },
      {
        heading: "Compta Soft et RAS IS dividendes",
        body: [
          "Compta Soft v1.2.0 intègre le calcul automatique de la RAS IS dividendes avec application du taux transitoire 2026 (11,25%) et génération des écritures PCM.",
          "La page de déclaration RAS IS dividendes est accessible par dossier depuis le menu Déclarations fiscales.",
        ],
      },
    ],
  },

  "fec-maroc-obligations-export": {
    tag: "FEC",
    date: "7 juin 2026",
    readTime: "5 min",
    title: "FEC Maroc : obligations légales et export depuis votre logiciel comptable",
    description: "Le Fichier des Écritures Comptables (FEC) est exigible lors de tout contrôle fiscal au Maroc. 18 champs obligatoires définis par l'Avis CNC N°24.",
    sections: [
      {
        heading: "Qu'est-ce que le FEC au Maroc ?",
        body: [
          "Le Fichier des Écritures Comptables (FEC) est un fichier numérique normalisé contenant l'ensemble des écritures comptables d'un exercice. Il est exigible lors de tout contrôle fiscal mené par la Direction Générale des Impôts.",
          "Au Maroc, le FEC est encadré par l'Avis du Conseil National de la Comptabilité (CNC) N°24, qui définit les 18 champs obligatoires et le format du fichier.",
        ],
      },
      {
        heading: "Les 18 champs obligatoires (Avis CNC N°24)",
        body: [
          "Chaque ligne du FEC doit contenir les 18 champs suivants :",
          "JournalCode, JournalLib, EcritureNum, EcritureDate, CompteNum, CompteLib, CompAuxNum, CompAuxLib, PieceRef, PieceDate, EcritureLib, Debit, Credit, EcritureLet, DateLet, ValidDate, Montantdevise, Idevise.",
          "L'absence de l'un de ces champs ou une incohérence dans les données peut entraîner le rejet du fichier par l'administration fiscale.",
        ],
      },
      {
        heading: "Format et séparateur",
        body: [
          "Le FEC doit être un fichier texte (CSV ou TXT) avec les champs séparés par une tabulation ou un point-virgule selon les spécifications DGI.",
          "L'encodage doit être UTF-8 et les montants au format numérique sans séparateur de milliers, avec le point comme séparateur décimal.",
        ],
      },
      {
        heading: "Quand le FEC est-il exigible ?",
        body: [
          "Le FEC est exigible lors de tout contrôle fiscal : vérification de comptabilité, examen contradictoire de situation fiscale personnelle (ECSF), ou demande ponctuelle de l'administration.",
          "Il est recommandé de générer et vérifier le FEC à chaque clôture d'exercice, même en l'absence de contrôle, pour s'assurer de sa conformité.",
        ],
      },
      {
        heading: "Export FEC depuis Compta Soft",
        body: [
          "Compta Soft génère le FEC conforme à l'Avis CNC N°24 en un clic depuis le menu Export. Tous les 18 champs obligatoires sont présents et les écritures sont triées par journal et date.",
          "L'export est disponible pour tout exercice clôturé ou en cours, et peut être filtré par période.",
        ],
      },
    ],
  },

  "delais-paiement-loi-69-21": {
    tag: "Délais paiement",
    date: "7 juin 2026",
    readTime: "5 min",
    title: "Loi 69-21 sur les délais de paiement : ce que doit faire votre logiciel comptable",
    description: "La loi 69-21 impose aux entreprises marocaines de déclarer leurs délais de paiement à Bank Al-Maghrib. Amende = taux BAM + 0,85%/mois de retard.",
    sections: [
      {
        heading: "Contexte : pourquoi la loi 69-21 ?",
        body: [
          "La loi 69-21 a été promulguée pour lutter contre les retards de paiement entre entreprises au Maroc, un phénomène qui fragilise la trésorerie des PME et TPE.",
          "Elle impose des délais de paiement maximaux, une obligation de déclaration à Bank Al-Maghrib (BAM) et des pénalités automatiques en cas de retard.",
        ],
      },
      {
        heading: "Délais maximaux légaux",
        body: [
          "→ 60 jours à compter de la date d'émission de la facture (règle générale).",
          "→ 90 jours par accord contractuel entre les parties (maximum légal absolu).",
          "→ Certains secteurs peuvent bénéficier de délais spécifiques définis par voie réglementaire.",
          "Au-delà de ces délais, des pénalités sont automatiquement dues sans mise en demeure préalable.",
        ],
      },
      {
        heading: "Calcul des pénalités de retard",
        body: [
          "Les pénalités de retard sont calculées sur la base du taux directeur de Bank Al-Maghrib (BAM) majoré de 0,85% par mois de retard.",
          "Formule : Pénalité = Montant facture HT × (Taux BAM + 0,85%) × (Nombre de jours de retard / 365).",
          "Compta Soft intègre les taux BAM historiques (2020-2025) et calcule automatiquement les pénalités dues.",
        ],
      },
      {
        heading: "Obligation de déclaration à Bank Al-Maghrib",
        body: [
          "Les entreprises dont le chiffre d'affaires dépasse le seuil légal sont tenues de déclarer périodiquement leurs délais de paiement à Bank Al-Maghrib via le formulaire ADC500B-23I.",
          "Cette déclaration reprend l'ensemble des factures fournisseurs et clients en retard, avec le calcul des pénalités dues.",
        ],
      },
      {
        heading: "Gestion automatisée dans Compta Soft",
        body: [
          "Compta Soft suit automatiquement les délais de paiement à partir des écritures comptables validées sur les comptes 441x (fournisseurs) et 342x (clients).",
          "Le module génère la déclaration ADC500B-23I prête à déposer, avec calcul des pénalités selon les taux BAM officiels.",
        ],
      },
    ],
  },

  "liasse-fiscale-simpl-is-maroc": {
    tag: "Liasse IS",
    date: "6 juin 2026",
    readTime: "6 min",
    title: "Liasse fiscale IS au Maroc : générer le XML Simpl-IS pour la DGI",
    description: "La liasse fiscale IS doit être déposée en ligne sur le portail DGI via le format XML Simpl-IS. Voici les prérequis, les tableaux réglementaires et les erreurs courantes.",
    sections: [
      {
        heading: "Qu'est-ce que la liasse fiscale IS ?",
        body: [
          "La liasse fiscale IS est l'ensemble des tableaux réglementaires que toute société soumise à l'IS doit déposer annuellement auprès de la DGI dans les 3 mois suivant la clôture de l'exercice (Art. 20-I CGI).",
          "Elle comprend le bilan fiscal, le CPC fiscal, l'état des amortissements, l'état des provisions et le tableau de passage du résultat comptable au résultat fiscal.",
        ],
      },
      {
        heading: "Format Simpl-IS : le XML DGI",
        body: [
          "Depuis la dématérialisation obligatoire, la liasse fiscale IS doit être déposée au format XML selon le cahier des charges DGI (CDC Simpl-IS v1.9.4).",
          "Le fichier XML contient l'ensemble des cellules codifiées (codes EDI) correspondant aux cases des tableaux réglementaires. Chaque code EDI doit être renseigné avec la valeur correcte issue de la comptabilité.",
        ],
      },
      {
        heading: "Prérequis avant génération",
        body: [
          "→ L'exercice doit être clôturé (statut CLOTURE).",
          "→ Le résultat fiscal doit être calculé et gelé (clôture fiscale).",
          "→ Tous les amortissements de l'exercice doivent être comptabilisés.",
          "→ Les provisions doivent être justifiées et enregistrées.",
          "Sans ces prérequis, Compta Soft bloque la génération et affiche les raisons précises.",
        ],
      },
      {
        heading: "Tableaux réglementaires couverts",
        body: [
          "→ Bilan fiscal (actif et passif).",
          "→ Compte de produits et charges (CPC) fiscal.",
          "→ État des amortissements des immobilisations.",
          "→ État des provisions.",
          "→ Tableau de passage résultat comptable → résultat fiscal (réintégrations et déductions).",
          "→ Calcul IS, CM, CSS et acomptes provisionnels.",
        ],
      },
      {
        heading: "Erreurs courantes et comment les éviter",
        body: [
          "→ Codes EDI manquants : vérifiez que tous les comptes de votre PCM sont correctement mappés.",
          "→ Déséquilibre bilan : assurez-vous que total actif = total passif avant génération.",
          "→ Validation XSD échouée : Compta Soft valide automatiquement le XML contre le schéma XSD DGI avant téléchargement.",
          "→ Hash de fichier modifié : ne modifiez jamais le XML après génération — régénérez si nécessaire.",
        ],
      },
    ],
  },

  "cgnc-plan-comptable-maroc": {
    tag: "CGNC",
    date: "5 juin 2026",
    readTime: "7 min",
    title: "CGNC : comprendre le Plan Comptable Marocain et ses 720 comptes",
    description: "Le Code Général de la Normalisation Comptable (CGNC) structure la comptabilité marocaine en 8 classes. Tour d'horizon des comptes, journaux et états obligatoires.",
    sections: [
      {
        heading: "Qu'est-ce que le CGNC ?",
        body: [
          "Le Code Général de la Normalisation Comptable (CGNC) est le référentiel comptable marocain. Il définit le Plan Comptable Marocain (PCM), les règles d'enregistrement des opérations, les états de synthèse obligatoires et les principes comptables fondamentaux.",
          "Toute entreprise commerciale ou industrielle établie au Maroc est tenue de tenir sa comptabilité conformément au CGNC.",
        ],
      },
      {
        heading: "Les 8 classes du PCM",
        body: [
          "→ Classe 1 — Comptes de financement permanent (capitaux propres, dettes de financement).",
          "→ Classe 2 — Comptes d'actif immobilisé (immobilisations corporelles, incorporelles, financières).",
          "→ Classe 3 — Comptes d'actif circulant (stocks, créances).",
          "→ Classe 4 — Comptes de passif circulant (dettes fournisseurs, fiscales, sociales).",
          "→ Classe 5 — Comptes de trésorerie (banques, caisses, CCP).",
          "→ Classe 6 — Comptes de charges (achats, charges externes, dotations).",
          "→ Classe 7 — Comptes de produits (ventes, produits financiers, reprises).",
          "→ Classe 8 — Comptes de résultats (résultat net de l'exercice).",
        ],
      },
      {
        heading: "Les journaux comptables standard",
        body: [
          "Le CGNC ne définit pas les journaux mais la pratique marocaine standardise 5 journaux principaux :",
          "→ ACH — Journal des achats.",
          "→ VTE — Journal des ventes.",
          "→ BNQ — Journal de banque.",
          "→ CAI — Journal de caisse.",
          "→ OD — Journal des opérations diverses (régularisations, salaires, IS).",
        ],
      },
      {
        heading: "Les états de synthèse obligatoires",
        body: [
          "Le CGNC impose la production annuelle des états de synthèse suivants :",
          "→ Bilan (actif et passif).",
          "→ Compte de Produits et Charges (CPC).",
          "→ État des Soldes de Gestion (ESG) — capacité d'autofinancement.",
          "→ Tableau de Financement (TF) — flux de trésorerie.",
          "→ Notes de l'État des Informations Complémentaires (ETIC).",
        ],
      },
      {
        heading: "Compta Soft et le CGNC",
        body: [
          "Compta Soft intègre nativement le PCM complet avec 720 comptes organisés en 8 classes, les 5 journaux standard, et génère automatiquement les 5 états de synthèse obligatoires.",
          "Chaque écriture est contrôlée en temps réel (équilibre débit/crédit, cohérence exercice, comptes collectifs) pour garantir la conformité CGNC.",
        ],
      },
    ],
  },

  "cotisation-minimale-maroc-2026": {
    tag: "IS / CM",
    date: "5 juin 2026",
    readTime: "4 min",
    title: "Cotisation minimale au Maroc : calcul, taux et exonérations (Art. 144 CGI 2026)",
    description: "La cotisation minimale (CM) est due même en cas de déficit. Taux 0,25% sur les produits d'exploitation. Exonération les 36 premiers mois d'activité.",
    sections: [
      {
        heading: "Qu'est-ce que la cotisation minimale ?",
        body: [
          "La cotisation minimale (CM) est un impôt minimum dû par les sociétés soumises à l'IS, même en l'absence de bénéfice ou en cas de déficit.",
          "Elle est calculée sur la base des produits d'exploitation (chiffre d'affaires et autres produits de classe 7) et non sur le bénéfice net fiscal.",
        ],
      },
      {
        heading: "Taux et plancher (Art. 144-I-D CGI 2026)",
        body: [
          "→ Taux de droit commun : 0,25% sur les produits d'exploitation hors TVA.",
          "→ Taux réduit : 0,15% pour les ventes de produits de première nécessité (pétrole, gaz, beurre, huile, sucre, farine, eau, électricité, médicaments).",
          "→ Plancher : 3 000 MAD minimum pour les sociétés IS (1 500 MAD pour les IR professionnels).",
          "L'IS dû est le maximum entre l'IS théorique calculé sur le bénéfice et la cotisation minimale : IS dû = max(IS théorique, CM).",
        ],
      },
      {
        heading: "Exonération les 36 premiers mois (Art. 144-I-C CGI)",
        body: [
          "Les sociétés nouvellement créées bénéficient d'une exonération de la cotisation minimale pendant les 36 premiers mois suivant le début d'exploitation.",
          "Cette exonération est plafonnée à 60 mois après la date de constitution de la société — elle ne peut pas s'appliquer indéfiniment en cas de démarrage tardif de l'activité.",
          "Attention : les concessionnaires de service public ne bénéficient pas de cette exonération.",
        ],
      },
      {
        heading: "Assiette : quels produits inclure ?",
        body: [
          "L'assiette de la CM comprend les produits de la classe 7 suivants (Art. 144-I-B + Art. 9 CGI) :",
          "→ Chiffre d'affaires et autres produits d'exploitation (Art. 9-I-A-1° et 5°).",
          "→ Produits financiers (Art. 9-I-B-1°, 2° et 3°).",
          "→ Subventions et dons reçus (Art. 9-I-A-4° et I-C-2° et 4°).",
          "Les reprises sur provisions et autres produits non courants sont généralement exclus de l'assiette CM.",
        ],
      },
      {
        heading: "Compta Soft et la cotisation minimale",
        body: [
          "Compta Soft calcule automatiquement la cotisation minimale dans le pipeline fiscal IS, en appliquant le taux 0,25% sur les produits d'exploitation marqués inclusBaseCM.",
          "Le paramétrage des comptes inclus dans l'assiette CM est configurable par dossier pour s'adapter aux spécificités de chaque activité.",
        ],
      },
    ],
  },
};

const TAG_COLORS: Record<string, string> = {
  "TVA": "#1D9E75",
  "RAS TVA": "#0A2A1E",
  "IS": "#1D9E75",
  "FEC": "#0A2A1E",
  "Délais paiement": "#1D9E75",
  "Liasse IS": "#0A2A1E",
  "CGNC": "#1D9E75",
  "IS / CM": "#0A2A1E",
};

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const article = ARTICLES[params.slug];

  if (!article) {
    return (
      <LandingShell>
        <section className="hero">
          <div className="hero-grid">
            <div className="hero-left rev" style={{ gridColumn: "1 / -1" }}>
              <h1 style={{ fontFamily: "'Syne',sans-serif", fontSize: 36, fontWeight: 800, color: "var(--dk)" }}>
                Article introuvable
              </h1>
              <p style={{ marginTop: 16, color: "#666" }}>Cet article n&apos;existe pas ou a été déplacé.</p>
              <Link href="/blog" style={{ display: "inline-block", marginTop: 24, color: "var(--g)", fontWeight: 600 }}>
                ← Retour au blog
              </Link>
            </div>
          </div>
        </section>
      </LandingShell>
    );
  }

  return (
    <LandingShell>
      <section className="hero">
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "radial-gradient(ellipse 70% 60% at 65% 50%,rgba(29,158,117,.1) 0%,transparent 70%)",
            pointerEvents: "none",
          }}
        />
        <div className="hero-grid">
          <div className="hero-left rev" style={{ gridColumn: "1 / -1", maxWidth: 760 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
              <Link href="/blog" style={{ fontSize: 13, color: "var(--g)", fontWeight: 600 }}>
                ← Blog
              </Link>
              <span style={{ color: "#ccc" }}>·</span>
              <span
                style={{
                  fontSize: 11,
                  fontWeight: 600,
                  padding: "3px 10px",
                  borderRadius: 100,
                  background: "var(--lt)",
                  color: TAG_COLORS[article.tag] ?? "var(--g)",
                }}
              >
                {article.tag}
              </span>
              <span style={{ fontSize: 12, color: "#aaa" }}>{article.readTime} de lecture</span>
            </div>
            <h1
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: "clamp(24px,3vw,40px)",
                fontWeight: 800,
                lineHeight: 1.15,
                letterSpacing: -1,
                color: "var(--dk)",
              }}
            >
              {article.title}
            </h1>
            <p style={{ fontSize: 16, color: "#666", lineHeight: 1.7, marginTop: 16 }}>
              {article.description}
            </p>
            <p style={{ fontSize: 12, color: "#aaa", marginTop: 12 }}>{article.date}</p>
          </div>
        </div>
      </section>

      <section style={{ padding: "0 60px 90px", maxWidth: 800, margin: "0 auto" }}>
        {article.sections.map((section, i) => (
          <div
            key={i}
            className="rev"
            style={{
              background: "#fff",
              borderRadius: 16,
              padding: "32px 36px",
              marginBottom: 20,
              border: "1px solid rgba(10,42,30,.07)",
            }}
          >
            <h2
              style={{
                fontFamily: "'Syne',sans-serif",
                fontSize: 20,
                fontWeight: 800,
                color: "var(--dk)",
                letterSpacing: -0.5,
                marginBottom: 16,
              }}
            >
              {section.heading}
            </h2>
            {section.body.map((para, j) => (
              <p
                key={j}
                style={{
                  fontSize: 14,
                  color: para.startsWith("→") ? "#333" : "#555",
                  lineHeight: 1.8,
                  marginBottom: 10,
                  paddingLeft: para.startsWith("→") ? 12 : 0,
                  borderLeft: para.startsWith("→") ? "2px solid var(--lt)" : "none",
                }}
              >
                {para}
              </p>
            ))}
          </div>
        ))}

        <div
          className="rev"
          style={{
            background: "var(--dk)",
            borderRadius: 20,
            padding: "36px 40px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 24,
            flexWrap: "wrap",
            marginTop: 40,
          }}
        >
          <div>
            <p style={{ fontFamily: "'Syne',sans-serif", fontSize: 18, fontWeight: 800, color: "#fff", letterSpacing: -0.3 }}>
              Besoin d&apos;une démo de Compta Soft ?
            </p>
            <p style={{ fontSize: 13, color: "rgba(255,255,255,.5)", marginTop: 6 }}>
              Nos experts vous accompagnent sur votre dossier.
            </p>
          </div>
          <Link href="/contact" className="btn-gn" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
            Demander une démo →
          </Link>
        </div>

        <div style={{ marginTop: 32, textAlign: "center" }}>
          <Link href="/blog" style={{ fontSize: 14, color: "var(--g)", fontWeight: 600 }}>
            ← Retour au blog
          </Link>
        </div>
      </section>
    </LandingShell>
  );
}
