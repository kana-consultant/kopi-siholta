import type { pageTranslations } from './en';

export const pageTranslations = {
  meta: {
    title: 'Caféiculture Kopi Siholta',
    description: "Découvrez le processus de culture du café specialty chez Kopi Siholta de la récolte des cerises à Humbang Hasundutan à la torréfaction.",
  },
  breadcrumb: {
    home: 'Accueil',
    coffeeFarming: 'Caféiculture',
    prev: 'À Propos',
  },
  hero: {
    alt: 'Plantation Kopi Siholta à Lintong Nihuta, Humbang Hasundutan',
    titleLine1: 'À Partir du Sol,',
    titleLine2: 'Naît la Saveur.',
    subtitle: "Chaque grain est transformé et torréfié avec précision pour préserver son arôme et son caractère naturel. Pour nous, le café n'est pas une simple marchandise, mais un artisanat qui relie la nature, des processus honnêtes et le plaisir dans chaque gorgée.",
    pageLabel: 'Caféiculture',
    ctaText: 'Voir le Processus',
  },
  stats: [
    { value: '20+', label: 'Familles Agricoles' },
    { value: '1.500 mdpl', label: 'Altitude Maximum' },
    { value: 'Giling Basah', label: 'Méthode Principale' },
    { value: '100 ton', label: 'Capacité / An' },
  ],
  harvestProcedure: {
    tag: 'Procédure de Récolte',
    title: 'Procédure de Récolte du Café',
    subtitle: "La procédure de récolte du café est le processus de cueillette des cerises mûres sur le caféier. Lorsque les cerises atteignent leur maturité optimale, elles affichent généralement une couleur rouge ou rouge-brunâtre.",
    steps: [
      { num: '01', title: 'Choix du Moment de Récolte', desc: 'Les producteurs de café choisissent le moment opportun pour la récolte. Celui-ci peut varier selon le cépage, le climat et les pratiques locales. La récolte est généralement effectuée lorsque les cerises ont atteint le niveau de maturité souhaité.' },
      { num: '02', title: 'Cueillette Manuelle', desc: "La récolte du café se fait à la main ou à l'aide d'outils tels que des cueilleurs. Les producteurs cueillent soigneusement les cerises mûres sans endommager l'arbre ni les grains non mûrs." },
      { num: '03', title: 'Trie des Cerises', desc: "Après la cueillette, les cerises sont triées pour séparer les mûres de celles qui ne sont pas encore mûres ou endommagées. Il est essentiel de garantir que seules les cerises mûres et de qualité seront transformées." },
      { num: '04', title: 'Collecte des Cerises', desc: "Les cerises triées sont ensuite recueillies dans des contenants ou paniers spéciaux. Les cerises collectées sont ensuite transportées vers l'installation de transformation." },
    ],
    outro: "La récolte du café exige précision et savoir-faire pour choisir le bon moment et cueillir les cerises correctement. L'objectif est de garantir que seules les cerises mûres sont récoltées, produisant ainsi des grains de café de haute qualité.",
  },
  process: {
    tag: 'Transformation',
    title: 'Méthodes de Transformation du Café',
    subtitle: 'La transformation du café à Humbang Hasundutan utilise trois méthodes principales Humide, Semi-Humide et Sèche. Chacune produit un profil aromatique distinct.',
    tabs: [
      { num: '01', label: 'Transformation Humide', labelShort: 'Humide', tabId: 'wet', panelId: 'panel-wet' },
      { num: '02', label: 'Traitement par Voie Semi-Humide', labelShort: 'Semi', tabId: 'semi', panelId: 'panel-semi' },
      { num: '03', label: 'Traitement par Voie Sèche', labelShort: 'Sec', tabId: 'dry', panelId: 'panel-dry' },
    ],
    panels: [
      {
        id: 'panel-wet', tabId: 'tab-wet', active: true,
        title: 'Traitement par Voie Humide',
        desc: 'La méthode humide (fermentation) produit un café aux saveurs vives, une acidité élevée et une grande clarté.',
        steps: [
          { title: 'Sélection des Grains', desc: 'Sélection des grains mûrs et élimination des grains endommagés.' },
          { title: 'Dépulpage', desc: 'La peau est retirée mécaniquement, laissant le mucilage.' },
          { title: 'Fermentation', desc: 'Les grains sont trempés pour éliminer le mucilage et développer les arômes.' },
          { title: 'Lavage', desc: "Lavage intensif à l'eau pour enlever les résidus." },
          { title: 'Séchage', desc: "Les grains sont séchés (soleil/machine) et remués jusqu'à l'humidité cible." },
          { title: 'Nettoyage Final', desc: 'La couche de parche est retirée pour préparer la torréfaction.' },
        ],
        outro: 'Cette méthode préserve la qualité avec des profils de goût lumineux et acidulés.',
      },
      {
        id: 'panel-semi', tabId: 'tab-semi', active: false,
        title: 'Traitement par Voie Semi-Humide',
        desc: 'Un mélange des méthodes humide et sèche, créant des saveurs uniques alliant acidité, richesse et douceur.',
        steps: [
          { title: 'Sélection des Grains', desc: 'Sélection des grains de café mûrs.' },
          { title: 'Dépulpage', desc: 'La peau est retirée, laissant une couche de mucilage.' },
          { title: 'Fermentation Courte', desc: 'Fermentation courte pour éliminer le mucilage et façonner le caractère.' },
          { title: 'Lavage', desc: 'Nettoyage approfondi pour enlever la pulpe résiduelle.' },
          { title: 'Séchage', desc: 'Séchage au soleil ou mécanique pour des résultats uniformes.' },
          { title: 'Nettoyage Final', desc: 'Séparation de la parche pour obtenir des grains verts prêts à torréfier.' },
        ],
        outro: 'Le traitement semi-humide offre un profil unique alliant acidité, richesse et douceur.',
      },
      {
        id: 'panel-dry', tabId: 'tab-dry', active: false,
        title: 'Traitement par Voie Sèche',
        desc: 'Méthode entièrement naturelle sans fermentation, produisant un café corsé, lourd et charnu.',
        steps: [
          { title: 'Récolte', desc: 'Récolte sélective des cerises mûres.' },
          { title: 'Nettoyage Initial', desc: 'Élimination manuelle ou mécanique des débris.' },
          {
            title: 'Séchage', _split: true,
            splitA: { title: 'Séchage Naturel', desc: 'Séché au soleil et remué régulièrement pendant 1 à 3 semaines.' },
            splitB: { title: 'Séchage Mécanique', desc: "Séchage accéléré via des machines à air chaud contrôlé." },
          },
          { title: 'Nettoyage Final', desc: 'Retrait de la cosse/parche pour révéler les grains verts.' },
        ],
        outro: 'Le traitement sec donne un café distinct, naturellement sucré et moins acide.',
      },
    ],
  },
  roasting: {
    tag: 'Processus de Torréfaction',
    title: 'Torréfaction de Précision pour un Goût Authentique',
    subtitle: 'Chaque grain de café est torréfié avec un contrôle précis de la température et du temps pour produire le meilleur caractère de saveur, arôme et corps dans chaque profil de torréfaction.',
    levelsTitle: 'Niveaux de Torréfaction',
    levels: [
      { name: 'Torréfaction Légère', temp: '196–205°C · 3–5 Minutes', desc: 'Caractère léger avec acidité vive, arôme floral et notes fruitées plus prononcées.', variant: 'light' as const, featured: false },
      { name: 'Torréfaction Moyenne', temp: '210–219°C · 6–8 Minutes', desc: 'Saveur la plus équilibrée avec corps lisse, douceur chaleureuse et arôme riche.', variant: 'medium' as const, featured: true },
      { name: 'Torréfaction Foncée', temp: '225–230°C · 9–11 Minutes', desc: 'Corps épais au caractère bold, fumé, chocolat noir et arrière-goût plus intense.', variant: 'dark' as const, featured: false },
    ],
    standards: [
      { icon: 'mdi:thermometer', title: 'Température Contrôlée', desc: 'La torréfaction est réalisée selon la méthode Haute Température Court Temps pour maintenir une qualité constante et un goût de café optimal.' },
      { icon: 'mdi:palette', title: 'Précision Couleur & Arôme', desc: 'Le changement de couleur des grains de café sert d\'indicateur principal du niveau de maturité de torréfaction pour produire un profil aromatique optimal.' },
      { icon: 'mdi:coffee', title: 'Conçu pour Chaque Tasse', desc: 'Chaque profil de torréfaction est conçu pour offrir une expérience café différente selon les préférences des amateurs de café modernes.' },
    ],
    profileLabel: 'Collection de Profils de Torréfaction',
  },
  regions: {
    title: 'Zone de Plantation',
    subtitle: 'Située à Lintong Nihuta, Humbang Hasundutan, une région de hauts plateaux de Sumatra Nord connue comme faisant partie de la Destination Prioritaire du Lac Toba et productrice de café de qualité caractéristique de l\'archipel.',
    list: [
      { name: '6 Hectares de Plantation', desc: 'La plantation Kopi Siholta s\'étend sur 6 hectares avec des conditions de sol et de climat idéales pour produire un café au caractère riche, complexe et authentique.' },
      { name: 'Grandir avec les Agriculteurs Locaux', desc: 'Partenariat avec 28 familles d\'agriculteurs fournisseurs locaux et accompagnement de 62 ménages agricoles de café dans la région environnante pour maintenir la qualité de la récolte tout en soutenant le bien-être de la communauté café de Lintong Nihuta.' },
      { name: 'Installation de Transformation du Café', desc: 'Soutenue par une installation de transformation de 400 m² pour garantir que chaque processus de production respecte des normes de qualité cohérentes et fiables.' },
    ],
  },
  quality: {
    tag: 'Qualité & Normes',
    title: 'Une Qualité Concrétisée',
    subtitle: 'Normes internationales appliquées à chaque étape du processus.',
    panelTitle: 'Chaque Lot Évalué Professionnellement',
    panelText: "Le cupping est réalisé sur chaque lot pour garantir une saveur, un arôme et une qualité constants avant que les grains verts ne soient prêts pour le marché. Les normes SNI internationales et le grade café spécialité sont nos références principales.",
    stats: [
      { value: '83+', label: 'Score Cupping SCA' },
      { value: '100%', label: 'Arabica Spécialité' },
      { value: 'Wet Hulling', label: 'Méthode Unique' },
      { value: 'Export', label: 'Grade International' },
    ],
    gallery: [
      { label: 'Cupping & Classification', alt: 'Session de cupping évaluation arôme et saveur' },
      { label: 'Green Bean Gr. A', alt: "Grains verts grade A prêts pour l'export" },
      { label: 'Profil de Torréfaction', alt: 'Profil de torréfaction moyen' },
    ],
  },
  farmers: {
    title: 'Les Mains derrière Chaque Tasse',
    subtitle: '20+ familles agricoles partenaires à Humbang Hasundutan elles sont la vraie fondation de chaque produit Kopi Siholta.',
    role: 'Agriculteur Partenaire Kopi Siholta',
    list: [
      {
        name: 'M. Maruhum Sihombing',
        village: 'Village de Sitiotio, Lintongnihuta',
        since: 'Agriculteur depuis 1965',
        quote: 'Le café coule dans nos veines depuis trois générations.',
      },
      {
        name: 'Mme Sinta Siregar',
        village: 'Village de Sitapean, Lintongnihuta',
        since: 'Agricultrice depuis 1970',
        quote: 'Depuis notre partenariat avec Siholta, nos revenus ont augmenté de 40 % et nous avons appris les normes internationales.',
      },
    ],
  },
  location: {
    title: "L'origine de chaque grain",
    address: 'Dusun IV, Village/Kelurahan Sitolu Bahal, Kec. Lintong Nihuta, Kab. Humbang Hasundutan, Province Sumatra Nord, Code Postal 22475',
    mapLabel: 'Emplacement de la Plantation Kopi Siholta',
  },
  cta: {
    title: 'Partenaires Agricoles & Export',
    subtitle: 'PT Siholta Toba Indonesia est ouverte aux partenariats avec des agriculteurs et acheteurs internationaux. Contactez-nous pour en discuter.',
    ctaText: 'Nous Contacter',
  },
} as const satisfies typeof pageTranslations;
