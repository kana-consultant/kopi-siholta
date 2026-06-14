import type { pageTranslations } from './en';

export const pageTranslations = {
  meta: {
    title: 'Tourisme Café Kopi Siholta',
    description: "Vivez l'expérience authentique du tourisme café, de la plantation à la tasse, à Kopi Siholta, Humbang Hasundutan, Sumatra Nord.",
  },
  breadcrumb: {
    home: 'Accueil',
    tourism: 'Tourisme Café',
    prev: 'À Propos',
  },
  hero: {
    alt: 'Visiteurs parcourant la plantation Kopi Siholta à Lintong Nihuta',
    titleLine1: 'Touchez le Café.',
    titleLine2: 'Découvrez Humbang.',
    subtitle: "Depuis les hauts plateaux de Sumatra Nord, nous vous invitons à vivre le voyage du café, de l'arbre à la tasse une expérience qui transforme votre appréciation de chaque gorgée.",
    pageLabel: 'Tourisme Café',
  },
  stats: [
    { value: '1.200 mdpl', label: 'Altitude de la Plantation' },
    { value: '200+', label: 'Familles Agricoles' },
    { value: '6+', label: 'Pays de Destination' },
    { value: '2021', label: 'Année de Fondation' },
  ],
  experiences: {
    tag: 'Nos Expériences',
    title: 'Trois Façons de Découvrir Kopi Siholta',
    subtitle: "Chaque expérience est conçue pour vous rapprocher de l'histoire derrière chaque tasse.",
    bookNow: 'Réserver',
    list: [
      {
        num: '01',
        title: 'Visite de Plantation',
        subtitle: "De l'Arbre à la Tasse",
        desc: 'Parcourez nos plantations sur les hauts plateaux de Sumatra Nord. Marchez avec nos producteurs, cueillez des cerises mûres et observez comment nature et tradition créent ensemble le café spécialité.',
        alt: 'Visiteurs parcourant la plantation Kopi Siholta à Lintong Nihuta',
        details: [
          'Durée : 2–3 heures',
          'Max 15 visiteurs par session',
          'Incluant simulation de récolte',
          'Guide local certifié',
        ],
      },
      {
        num: '02',
        title: "Visite d'Usine",
        subtitle: 'Wet Hulling & Séchage',
        desc: 'Découvrez comment notre café est transformé selon la méthode Wet Hulling traditionnelle une technique préservée depuis des décennies et le caractère distinctif du Kopi Lintong.',
        alt: "Wet hulling à l'usine PT Siholta",
        details: [
          'Durée : 1,5–2 heures',
          'Démonstration de transformation',
          'Meilleur moment : matin-midi',
        ],
      },
      {
        num: '03',
        title: 'Cupping & Dégustation',
        subtitle: 'Découvrez les Profils Aromatiques',
        desc: 'Notre salle de dégustation est conçue pour vous guider à travers la complexité du café spécialité des notes épicées aux fruitées, florales, en passant par le chocolat, en une seule gorgée.',
        alt: 'Clients pratiquant cupping et dégustation de café spécialité',
        details: [
          'Durée : 1–1,5 heures',
          'Groupes de 8 personnes max',
          '3 variantes de café',
          "Certificat d'expérience inclus",
        ],
      },
    ],
  },
  cta: {
    title: 'Prêt pour le Voyage Café ?',
    subtitle: "Contactez notre équipe pour organiser une visite de plantation, une visite d'usine ou une session de cupping sur place.",
    ctaText: 'Nous Contacter',
  },
} as const satisfies typeof pageTranslations;
