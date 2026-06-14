import type { PageTranslationsType } from "./en";

export const pageTranslations = {
  meta: {
    title: 'Restauration Kopi Siholta',
    description: "Savourez boissons et gastronomie cafe specialite au point F&B Kopi Siholta. D'espresso a la gastronomie sumatrannaise.",
  },
  breadcrumb: {
    home: 'Accueil',
    fnb: 'Restauration',
    prev: 'À Propos',
  },
  hero: {
    alt: 'Ambiance du cafe Kopi Siholta',
    titleLine1: "Savourez l'Exotisme",
    titleLine2: 'des Flancs Volcaniques de Toba Lintong',
    subtitle: "Embarquez vos papilles pour un voyage sensoriel au coeur de l'archipel. Notre cafe Siholta, originaire de Lintong, est un chef-d'oeuvre de saveurs offrant un corps genereux et sirupeux, sublime par des notes de cacao noir, d'epices chaudes et de noisette. Cultive de maniere durable par nos producteurs, chaque gorgee rend hommage a une tradition seculaire. Preparez-le en espresso intense ou en pour-over delicat, et laissez la veritable magie de l'ile operer dans votre tasse.",
    pageLabel: 'Restauration',
  },
  stats: [
    { value: '8+', label: 'Articles du Menu' },
    { value: '4', label: 'Boissons Signature' },
    { value: '200+', label: 'Tasses / Jour' },
    { value: '5+', label: "Annees d'Experience" },
  ],
  retail: {
    title: 'Collection Cafe Detail',
    subtitle: 'Transforme a partir de grains de cafe selectionnes des hauts plateaux de Sumatra pour les besoins du retail, HORECA et du marche du cafe specialite.',
    ctaText: 'Voir les Produits',
    main: {
      name: 'Grains de Cafe',
      tag: 'ARABICA \u2022 ROBUSTA \u2022 SPECIALTY GRADE',
      desc: 'Grains de cafe selectionnes au caractere distinctif du Nord Sumatra, disponibles en divers profils de torrefaction.',
      alt: 'Grains de cafe specialite selectionnes du Nord Sumatra',
    },
    items: [
      { name: 'Cafe Moulu', desc: 'Pratique pour les besoins quotidiens avec un arome et un caractere de cafe preserves.', alt: 'Cafe moulu pret a infuser de Kopi Siholta' },
      { name: 'Grains Verts', desc: 'Grains de cafe vert selectionnes pour torrefacteurs, distributeurs et besoins d\'exportation.', alt: 'Grains de cafe vert pour torrefacteurs et distributeurs' },
      { name: 'Capsule de Cafe', desc: 'Capsules en aluminium recycle a 80% avec un profil aromatique moderne et coherent.', alt: 'Capsules de cafe en aluminium recycle a 80%' },
    ],
  },
  cafe: {
    title: 'Favoris du Cafe',
    subtitle: 'Les boissons preferees de nos clients, preparees a partir de grains de cafe specialite tries sur le volet.',
    drinks: [
      { name: 'Cafe au Sucre de Palme', tag: 'SWEET \u2022 CREAMY \u2022 LOCAL FAVORITE', desc: 'Espresso au sucre de palme authentique et lait frais cremeux.', alt: 'Un kopi susu Humbang onctueux' },
      { name: 'Americano', tag: 'BOLD \u2022 CLEAN \u2022 CLASSIC', desc: 'Double espresso a l\'eau chaude, corse et epure.', alt: 'Ambiance du cafe Kopi Siholta' },
      { name: 'Cafe Glace au Caramel', tag: 'SMOOTH \u2022 CARAMEL \u2022 MODERN', desc: 'Espresso au sirop de caramel, lait frais et mousse.', alt: 'Variantes du menu cafe au point de vente Kopi Siholta' },
      { name: 'Cafe au Lait Glace', tag: 'MILKY \u2022 BALANCED \u2022 SIGNATURE', desc: 'Cafe au lait signature au sucre de palme special de Siholta.', alt: 'Barista preparant un espresso avec precision' },
    ],
  },
  distribution: {
    title: 'Distribution et Emplacements',
    retailNetworkHeading: 'Disponible dans les Reseaux de Distribution Modernes',
    retailNetworkDesc: 'Les produits Kopi Siholta sont desormais disponibles dans diverses grandes surfaces et supermarches regionaux en Indonesie.',
    cafeLocationsHeading: 'Visitez Nos Points de Vente',
    locations: [
      { city: 'Palangka Raya', address: 'Terminal de Depart, Aeroport Tjilik Riwut' },
      { city: 'Jakarta', address: 'Jl. Monumen Pancasila No. 50, Lubang Buaya, Jakarta Timur' },
    ],
    mapPreviewLabel: '2 Emplacements Disponibles',
    regionChips: ['Jabodetabek', 'Palangka Raya', 'Bali'],
  },
  sustainability: {
    title: 'Engagement Durabilite',
    subtitle: "Kopi Siholta s'engage dans la durabilite environnementale grace a l'utilisation de capsules en aluminium recycle a 80% et au soutien des producteurs de cafe locaux de Sumatra.",
  },
  cta: {
    title: 'Ramenez les Saveurs de Lintong chez Vous',
    subtitle: "Commandez cette Origine et invitez des aujourd'hui l'aventure cafe ultime dans votre cuisine.",
    ctaText: 'Nous Contacter',
  },
} satisfies PageTranslationsType;
