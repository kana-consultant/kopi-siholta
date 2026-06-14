export const pageTranslations = {
  meta: {
    title: "Kopi Siholta | Indonesia's Specialty Coffee Pioneer",
    description: "PT Siholta Toba Indonesia is Indonesia's first specialty coffee producer and exporter from Sumatera Lintong, Humbang Hasundutan, North Sumatra.",
  },
  hero: {
    title: 'Taste the Beauty of <em>Lake Toba</em>',
    subtitle: 'From the highlands of Sumatera Lintong to tables around the world Kopi Siholta brings the authentic flavor of Humbang Hasundutan, North Sumatra, to your cup.',
    ctaPrimary: 'Explore Products',
    ctaSecondary: 'Our Story',
    slideLabel: 'Slide',
    stats: [
      { value: '6+', label: 'Countries' },
      { value: '100', label: 'Tons / Year' },
      { value: '#1', label: 'Specialty Pioneer' },
      { value: '2035', label: 'Vision' },
      { value: '3', label: 'Business Sectors' },
    ],
    slideAlts: [
      'Barista crafting espresso with precision',
      'A creamy cup of Kopi Susu Humbang',
      'Kopi Siholta cafe atmosphere',
      'Coffee-making process at the Kopi Siholta cafe',
    ],
  },
  companyBanner: {
    name: 'PT Siholta Toba Indonesia',
    tagline: 'Born in Humbang Hasundutan, <em>built for the world</em> a fully integrated specialty coffee company from farm to cup.',
    sectorsLabel: '3 Business Sectors:',
    cta: 'Explore Our Company Profile',
    ctaAria: 'Learn more about PT Siholta Toba Indonesia',
    sectorFarming: 'Coffee Farming',
    sectorFnB: 'F&B',
    sectorIndustry: 'Industry & Tourism',
  },
  heritage: {
    title: 'Passed Down Through Generations',
    subtitle: 'PT Siholta Toba Indonesia was born in Humbang Hasundutan, North Sumatra, from a lineage of coffee farmers dedicated to preserving the authentic flavors of Sumatran coffee.',
    cards: [
      { title: 'Heritage from\nSumatra Slopes', desc: 'Over 20 partner farmer families grow specialty coffee at 1,200–1,500 meters above sea level, leaning on centuries-old traditions.', stat: 'Partner Farmer Families' },
      { title: 'From Farm\nto Cup', desc: 'Washing, honey, and natural process methods are applied at our facility, ensuring each bean retains its original character.', stat: 'Processing Methods' },
      { title: 'World Standards,\nLocal Roots', desc: 'International verification bodies ensure quality and safety standards are maintained across our processing facilities.', stat: '' },
      { title: 'Deeply Rooted\nin Batak Spirit', desc: 'Batak Toba cultural heritage lives in our work ethics strong community, respect for tradition, and passion for progress.', stat: '' },
      { title: 'Moments from\nHumbang Hasundutan', desc: 'Natural beauty and coffee-farming traditions blend into a story worth sharing.', stat: '' },
    ],
    alts: {
      card1: 'Farmers picking perfectly ripe red coffee cherries',
      card2: 'Traditional coffee fermentation in wooden barrels',
      card3: 'Coffee bean sorting and grading process',
      card4: 'Kopi Siholta farm in Lintong Nihuta, Humbang Hasundutan',
      card5: 'Light-medium roasting process for Kopi Siholta',
    },
  },
  products: {
    title: 'Taste Authentic Kopi Siholta',
    subtitle: 'Every variant is processed from meticulously selected Arabica and Robusta coffee beans grown on the volcanic slopes of Humbang Hasundutan.',
    items: [
      { name: 'Kopi Siholta Arabica Ground 250 g', desc: 'Lintong Arabica in a family-size pack. Balanced medium-roast with distinct chocolate and spice notes, ideal for everyday black coffee or milk blends.', tag: 'Best Seller', tagVariant: 'bestSeller' as const },
      { name: 'Kopi Siholta Arabica Ground 70 g', desc: 'A compact single-origin Arabica with bright acidity and sweet caramel finish. Perfect for pour-over, French press, or as a thoughtful gift.', tag: 'Value Pack', tagVariant: 'valuePack' as const },
      { name: 'Kopi Siholta Arabica Roasted Bean 70 g', desc: 'Whole-bean Arabica roasted to highlight the unique characteristics of the Humbang highlands. Grind fresh for the most aromatic cup.', tag: 'Signature', tagVariant: 'signature' as const },
      { name: 'Kopi Siholta Arabica Capsule 10x7 g', desc: '80% recycled aluminum capsules filled with finely ground Lintong Arabica. Consistent espresso with a smooth crema every time.', tag: 'Barista Choice', tagVariant: 'baristaChoice' as const },
      { name: 'Kopi Siholta Robusta Ground 250 g', desc: 'Full-bodied Robusta for those who crave intensity. Deep earthy tones with a thick crema make this a go-to for strong morning coffee.', tag: 'Popular', tagVariant: 'popular' as const },
      { name: 'Kopi Siholta Robusta Ground 70 g', desc: 'A bold single-serve Robusta option with smoky, nutty layers. Great for an afternoon espresso or Vietnamese-style iced coffee.', tag: 'Value Pack', tagVariant: 'valuePack' as const },
      { name: 'Kopi Siholta Robusta Roasted Bean 70 g', desc: 'Freshly roasted Robusta whole beans for home grinders. Packs a powerful aroma and a long, satisfying finish.', tag: 'Signature', tagVariant: 'signature' as const },
      { name: 'Kopi Siholta Robusta Capsule 10x7 g', desc: 'Pre-portioned Robusta capsules for quick brewing. Delivers a rich, intense shot with notes of dark cocoa and toasted nuts.', tag: 'Popular', tagVariant: 'popular' as const },
    ],
    labels: {
      productDetails: 'Product Details',
      tersediaDi: 'Available on:',
      viewCompany: 'View All Products',
    },
    certs: [
      { name: 'BPOM Certified', desc: 'POM SI 221347191301' },
      { name: 'Halal Certified', desc: 'Islamic Indonesia Board' },
    ],
  },
  export: {
    title: 'From the Volcanic Soil of Toba to the World',
    subtitle: 'Every bean tells a story of heritage and quality, shipped from Humbang Hasundutan to international markets.',
    routesLabel: 'Active Export Routes:',
    kpis: [
      { value: '100 T', label: 'Export Volume / Year' },
      { value: '6+', label: 'Export Destinations' },
      { value: '15+', label: 'Years of Experience' },
      { value: '12+', label: 'International Partners' },
    ],
    sections: {
      activeMarkets: 'Active Markets',
      expansionPlan: 'Expansion Roadmap',
    },
    statusActive: 'Active export',
    statusSoon: 'Coming soon',
    countries: [
      { code: 'US', flag: '🇺🇸', name: 'United States', active: true },
      { code: 'JP', flag: '🇯🇵', name: 'Japan', active: true },
      { code: 'KR', flag: '🇰🇷', name: 'South Korea', active: true },
      { code: 'AE', flag: '🇦🇪', name: 'Middle East', active: false },
      { code: 'HK', flag: '🇭🇰', name: 'Hong Kong', active: false },
      { code: 'NL', flag: '🇳🇱', name: 'Netherlands', active: false },
      { code: 'ZA', flag: '🇿🇦', name: 'South Africa', active: false },
    ],
  },
  b2b: {
    titleLine1: 'Premium Specialty Coffee from Farm to Roastery',
    subtitle: 'Elevate your coffee offerings with authentic Indonesian specialty beans delivered directly from source to roastery.',
    socialProof: 'Trusted by modern retailers, specialty roasters, and coffee shop chains across the archipelago.',
    trustStats: [
      { value: '+80%', label: 'Growth' },
      { value: '100+ Tons', label: 'Authentic Indonesian Coffee Distributed' },
      { value: '20+', label: 'Farming Families Growing Together' },
    ],
    cards: [
      {
        alt: 'PT Siholta modern retail coffee on supermarket shelves',
        title: 'Modern Retail Partnership',
        tagline: "On the shelves of Indonesia's top stores.",
        body: 'We supply Lintong specialty coffee to hypermarkets and supermarket chains across Jabodetabek and beyond with reliable restock cycles and promotional support.',
        chips: ['Modern Retail Ready', 'Distribusi Nasional'],
      },
      {
        alt: 'Export-ready green bean selection for international roasters',
        title: 'Green Bean Supply Partnership',
        tagline: 'From our farm to your roastery.',
        body: 'Access Grade A green beans straight from Humbang Hasundutan. Ideal for specialty roasters, exporters, and private-label buyers looking for authentic Sumatran origin.',
        chips: ['Dokumen Lengkap', 'Lintong Origin', 'Robusta & Arabica', 'Export Ready'],
      },
      {
        alt: 'Kopi Siholta franchise outlet concept in a modern coffee shop',
        title: 'Franchise Outlet',
        tagline: 'Open a Kopi Siholta outlet in your city.',
        body: 'Join our growing franchise network. We provide full operational support from barista training to branding and supply chain.',
        chips: ['Franchise Support', 'Barista Training', 'Branding Kit'],
      },
    ],
    benefits: {
      headline: 'Why partner with us?',
      sub: 'We are not just a supplier — we are your coffee growth partner.',
      items: [
        { title: 'Direct Farm Access', body: 'Eliminate intermediary costs by sourcing directly from our plantations in Lintong Nihuta, Humbang Hasundutan.' },
        { title: 'Certified Quality', body: 'BPOM and Halal certified products with internationally recognized SCA standards.' },
        { title: 'Flexible Volume', body: 'Whether you need a single pallet or a full container load, our logistics adapt to your scale.' },
        { title: 'Year-Round Supply', body: 'Consistent green bean availability with strict post-harvest handling and professional warehousing.' },
      ],
    },
    cta: {
      title: 'Ready to partner with Kopi Siholta?',
      subtitle: 'Let\'s discuss how our specialty coffee can elevate your business.',
      primary: 'Contact Us',
    },
  },
  omni: {
    title: 'Connect with Kopi Siholta',
    subtitle: 'From your morning cup to your daily feed — experience Siholta wherever you are.',
    tokopedia: { headline: 'Shop on Tokopedia', sub: 'Enjoy free shipping, flash deals, and easy checkout on our official Tokopedia store.', cta: 'Open Shop' },
    shopee: { headline: 'Shop on Shopee', sub: 'Find exclusive bundles, voucher deals, and fast delivery on Shopee.', cta: 'Open Shop' },
    whatsapp: { headline: 'Order via WhatsApp', sub: 'Chat directly with our team for custom orders, bulk purchases, or café supply inquiries.', cta: 'Chat Now' },
    instagram: {
      line: 'OUR STORY IN FRAMES',
      headline: 'Follow Our Journey',
      body: 'Behind-the-scenes from plantation to your cup. Authentic moments, coffee art, and community stories.',
      handle: '@kopisiholta',
      followCta: 'Follow on Instagram',
      openContent: 'Open Content',
      photos: [
        { src: '/images/homepage/ig-1.jpg', alt: 'Kopi Siholta on Instagram photo 1' },
        { src: '/images/homepage/ig-2.jpg', alt: 'Kopi Siholta on Instagram photo 2' },
        { src: '/images/homepage/ig-3.jpg', alt: 'Kopi Siholta on Instagram photo 3' },
        { src: '/images/homepage/ig-4.jpg', alt: 'Kopi Siholta on Instagram photo 4' },
      ],
    },
    tiktok: {
      headline: 'Kopi Siholta on TikTok',
      body: 'Short videos, coffee tips, and daily brewing inspiration. Follow us for exclusive content and product drops.',
      cta: 'Watch Now',
    },
  },
  contact: {
    title: "Let's Connect",
    subtitle: 'Have questions about our products, partnership opportunities, or just want to say hello? Reach out and our team will get back to you.',
    followInstagram: 'Follow Kopi Siholta on Instagram',
    followTiktok: 'Follow Kopi Siholta on TikTok',
    address: 'Jl. Lubang Buaya Raya No.50, Lubang Buaya, Cipayung, East Jakarta City, Jakarta 13810',
    mapsLabel: 'Office Kopi Siholta',
    formTitle: 'Inquiry & Partnership Form',
    form: {
      fullName: 'Full Name',
      fullNamePlaceholder: 'e.g. John Doe',
      email: 'Email Address',
      emailPlaceholder: 'e.g. john@company.com',
      phone: 'Phone / WhatsApp Number',
      phonePlaceholder: 'e.g. +62 812 3456 7890',
      company: 'Company / Institution',
      companyPlaceholder: 'e.g. PT Kopi Nusantara',
      inquiryType: 'Inquiry Type',
      inquiryTypePlaceholder: 'Select your inquiry type',
      inquiryOpt1: 'Product & Pricing Inquiry',
      inquiryOpt2: 'Partnership & B2B',
      inquiryOpt3: 'Franchise & Outlet',
      inquiryOpt4: 'Media & Collaboration',
      message: 'Your Message',
      messagePlaceholder: 'Tell us more about your needs...',
      optional: 'Optional',
      sendWa: 'Send via WhatsApp',
      sendWaAria: 'Send inquiry via WhatsApp',
      sendEmail: 'Send via Email',
      sendEmailAria: 'Send inquiry via Email',
    },
  },
} as const;

type DeepString<T> = {
  readonly [K in keyof T]: T[K] extends object
    ? T[K] extends Array<any>
      ? DeepString<T[K][number]>[] 
      : DeepString<T[K]> 
    : T[K] extends string
      ? string 
      : T[K];
};

export type PageTranslationsType = DeepString<typeof pageTranslations>;