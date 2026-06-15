export const pageTranslations = {
  meta: {
    title: 'Coffee Tourism Kopi Siholta',
    description: 'Experience authentic coffee tourism from farm to cup at Kopi Siholta, Humbang Hasundutan, North Sumatra.',
  },
  breadcrumb: {
    home: 'Home',
    tourism: 'Coffee Tourism',
    prev: 'About Us',
  },
  hero: {
    alt: 'Guests exploring the Kopi Siholta plantation in Lintong Nihuta',
    titleLine1: 'Touch Coffee.',
    titleLine2: 'Taste Humbang.',
    subtitle: 'From the North Sumatra highlands, we invite you to experience the journey of coffee from tree to cup an experience that transforms how you appreciate every sip.',
    pageLabel: 'Coffee Tourism',
  },
  stats: [
    { value: '1.200 mdpl', label: 'Farm Altitude' },
    { value: '200+', label: 'Partner Families' },
    { value: '6+', label: 'Export Countries' },
    { value: '2021', label: 'Year Founded' },
  ],
  experiences: {
    tag: 'Our Experiences',
    title: 'Three Ways to Enjoy Kopi Siholta',
    subtitle: 'Each experience is designed to bring you closer to the story behind every cup.',
    bookNow: 'Book Now',
    list: [
      {
        num: '01',
        title: 'Farm Tour',
        subtitle: 'From Tree to Cup',
        desc: 'Explore our coffee plantations stretching across the North Sumatra highlands. Walk the fields with our farmers, hand-pick perfectly ripe cherries, and witness how nature and tradition work together to produce specialty coffee.',
        alt: 'Guests exploring the Kopi Siholta plantation in Lintong Nihuta',
        details: [
          'Duration: 2–3 hours',
          'Max 15 guests per session',
          'Includes harvest simulation',
          'Certified local guide',
        ],
      },
      {
        num: '02',
        title: 'Factory Tour',
        subtitle: 'Wet Hulling & Drying',
        desc: 'Observe how our coffee is processed using the traditional Wet Hulling method a technique preserved for decades and the defining character of authentic Lintong coffee.',
        alt: 'Wet hulling process at PT Siholta facilities',
        details: [
          'Duration: 1.5–2 hours',
          'Processing demonstration',
          'Best time: morning to midday',
        ],
      },
      {
        num: '03',
        title: 'Cupping & Tasting',
        subtitle: 'Taste the Flavor Profiles',
        desc: 'Our tasting room is designed to guide you through the complexity of specialty coffee from spice to fruity, floral, to chocolate in a single sip.',
        alt: 'Guests cupping and tasting specialty coffee at Kopi Siholta',
        details: [
          'Duration: 1–1.5 hours',
          'Groups of max 8 persons',
          '3 different coffee variants',
          'Experience certificate included',
        ],
      },
    ],
  },
  cta: {
    title: 'Ready to Enjoy the Coffee Journey?',
    subtitle: 'Contact our team to schedule a farm tour, factory tour, or cupping session at our location.',
    ctaText: 'Contact Us',
  },
};

type DeepString<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? T[K] extends Array<any>
      ? T[K][number] extends object
        ? DeepString<T[K][number]>[] 
        : string[] 
      : DeepString<T[K]> 
    : string; 
};

export type PageTranslationsType = DeepString<typeof pageTranslations>;