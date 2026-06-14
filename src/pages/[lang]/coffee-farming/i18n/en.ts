export const pageTranslations = {
  meta: {
    title: 'Coffee Farming Kopi Siholta',
    description: 'Learn the specialty coffee cultivation process at PT Siholta from cherry harvest in Humbang Hasundutan to roasting.',
  },
  breadcrumb: {
    home: 'Home',
    coffeeFarming: 'Coffee Farming',
    prev: 'About Us',
  },
  hero: {
    alt: 'Kopi Siholta farm in Lintong Nihuta, Humbang Hasundutan',
    titleLine1: 'From Plantations,',
    titleLine2: 'to Your Everyday Cup.',
    subtitle: 'Each bean is processed and roasted with precision to preserve its aroma and natural character. For us, coffee is not just a commodity, but a craft that connects nature, honest processes, and enjoyment in every sip.',
    pageLabel: 'Coffee Farming',
    ctaText: 'See the Process',
  },
  stats: [
    { value: '20+', label: 'Partner Families' },
    { value: '1.500 mdpl', label: 'Maximum Altitude' },
    { value: 'Giling Basah', label: 'Main Method' },
    { value: '100 ton', label: 'Capacity / Year' },
  ],
  harvestProcedure: {
    tag: 'Harvest Procedure',
    title: 'Coffee Harvesting Procedure',
    subtitle: 'The coffee harvesting procedure is the process of picking ripe coffee cherries from the coffee tree. When coffee cherries reach optimal maturity, they typically display a red or reddish-brown color.',
    steps: [
      {
        num: '01',
        title: 'Choosing the Harvest Time',
        desc: 'Coffee farmers will select the right time for harvesting. This may vary depending on the coffee variety, climate, and local practices. Harvesting is typically done when the coffee cherries have reached the desired level of ripeness.',
      },
      {
        num: '02',
        title: 'Manual Picking',
        desc: 'Coffee harvesting is carried out by hand or using tools such as coffee pickers. Farmers carefully pick the ripe coffee cherries without damaging the tree or the unripe coffee beans.',
      },
      {
        num: '03',
        title: 'Sorting Coffee Cherries',
        desc: 'After picking, the coffee cherries are sorted to separate the ripe ones from those that are unripe or damaged. This is important to ensure that only ripe, high-quality coffee cherries are processed further.',
      },
      {
        num: '04',
        title: 'Collecting Coffee Cherries',
        desc: 'The sorted coffee cherries are then collected in special containers or baskets. The collected cherries are subsequently taken to the processing facility for further processing.',
      },
    ],
    outro: 'Coffee harvesting requires precision and skill to choose the right timing and pick the cherries properly. The goal is to ensure that only ripe coffee cherries are harvested, producing high-quality coffee beans.',
  },
  process: {
    tag: 'Processing',
    title: 'Coffee Processing Methods',
    subtitle: 'The coffee processing in Humbang Hasundutan uses three main methods Wet, Semi-Wet, and Dry. Each produces a distinct flavor profile.',
    tabs: [
      { num: '01', label: 'Wet Processing', labelShort: 'Wet', tabId: 'wet', panelId: 'panel-wet' },
      { num: '02', label: 'Semi-Wet Processing', labelShort: 'Semi', tabId: 'semi', panelId: 'panel-semi' },
      { num: '03', label: 'Dry Processing', labelShort: 'Dry', tabId: 'dry', panelId: 'panel-dry' },
    ],
    panels: [
      {
        id: 'panel-wet', tabId: 'tab-wet', active: true,
        title: 'Wet Processing',
        desc: 'The wet method (fermentation) produces coffee with bright flavors, high acidity, and distinct clarity.',
        steps: [
          { title: 'Bean Selection', desc: 'Selecting ripe beans and discarding damaged ones.' },
          { title: 'Depulping', desc: 'Outer skin is removed mechanically, leaving mucilage.' },
          { title: 'Fermentation', desc: 'Beans are soaked to remove mucilage and develop flavor profiles.' },
          { title: 'Washing', desc: 'Intensive washing with water to remove remaining residue.' },
          { title: 'Drying', desc: 'Beans are dried (sun/machine) and stirred until the target moisture is reached.' },
          { title: 'Final Cleaning', desc: 'Parchment layer is removed to prepare beans for roasting.' },
        ],
        outro: 'This method preserves quality with bright, acidic, and clear taste profiles.',
      },
      {
        id: 'panel-semi', tabId: 'tab-semi', active: false,
        title: 'Semi-Wet Processing',
        desc: 'A blend of wet and dry methods, creating unique flavors balancing acidity, richness, and smoothness.',
        steps: [
          { title: 'Bean Selection', desc: 'Selection of ripe coffee beans.' },
          { title: 'Depulping', desc: 'Outer skin removed, leaving mucilage layer.' },
          { title: 'Short Fermentation', desc: 'Short fermentation to remove mucilage and develop character.' },
          { title: 'Washing', desc: 'Deep cleaning to remove residual pulp.' },
          { title: 'Drying', desc: 'Sun or mechanical drying to ensure even results.' },
          { title: 'Final Cleaning', desc: 'Parchment separation to obtain green beans ready for roasting.' },
        ],
        outro: 'Semi-wet processing offers a unique profile combining acidity, richness, and smoothness.',
      },
      {
        id: 'panel-dry', tabId: 'tab-dry', active: false,
        title: 'Dry Processing',
        desc: 'An all-natural method without fermentation, producing full-bodied, heavy, and meaty coffee.',
        steps: [
          { title: 'Harvesting', desc: 'Selective harvesting of ripe cherries.' },
          { title: 'Initial Cleaning', desc: 'Manual or mechanical removal of debris.' },
          {
            title: 'Drying', _split: true,
            splitA: { title: 'Natural Drying', desc: 'Sun-dried and stirred regularly for 1–3 weeks for even drying.' },
            splitB: { title: 'Mechanical Drying', desc: 'Accelerated drying using temperature-controlled machines and hot air.' },
          },
          { title: 'Final Cleaning', desc: 'Removing the husk/parchment to reveal green beans.' },
        ],
        outro: 'Dry processing results in distinct, naturally sweet coffee with lower acidity.',
      },
    ],
  },
  roasting: {
    tag: 'Roasting Process',
    title: 'Precision Roasting for Authentic Flavor',
    subtitle: 'Each coffee bean is roasted with precise temperature and time control to produce the best flavor character, aroma, and body in every roasting profile.',
    levelsTitle: 'Roasting Levels',
    levels: [
      { name: 'Light Roast', temp: '196–205°C · 3–5 Minutes', desc: 'Light character with bright acidity, floral aroma, and more pronounced fruity notes.', variant: 'light' as const, featured: false },
      { name: 'Medium Roast', temp: '210–219°C · 6–8 Minutes', desc: 'The most balanced flavor with smooth body, warm sweetness, and rich aroma.', variant: 'medium' as const, featured: true },
      { name: 'Dark Roast', temp: '225–230°C · 9–11 Minutes', desc: 'Thick body with bold, smoky, dark chocolate character and more intense aftertaste.', variant: 'dark' as const, featured: false },
    ],
    standards: [
      { icon: 'mdi:thermometer', title: 'Controlled Temperature', desc: 'Roasting is performed using the High Temperature Short Time method to maintain consistent quality and coffee flavor.' },
      { icon: 'mdi:palette', title: 'Color & Aroma Precision', desc: 'The color change of coffee beans serves as the primary indicator of roasting maturity level to produce an optimal flavor profile.' },
      { icon: 'mdi:coffee', title: 'Crafted for Every Cup', desc: 'Each roasting profile is designed to deliver a different coffee experience suited to modern coffee lovers\' preferences.' },
    ],
    profileLabel: 'Roasting Profile Collection',
  },
  regions: {
    title: 'Plantation Area',
    subtitle: 'Located in Lintong Nihuta, Humbang Hasundutan, a highland region of North Sumatra known as part of the Lake Toba Priority Destination and a producer of quality coffee distinctive to the archipelago.',
    list: [
      { name: '6 Hectares Plantation Area', desc: 'Kopi Siholta plantation spans 6 hectares with ideal soil and climate conditions to produce coffee with rich, complex, and authentic character.' },
      { name: 'Growing with Local Farmers', desc: 'Partnering with 28 local supplier farmer families and supporting 62 coffee farmer households in the surrounding area to maintain harvest quality while supporting the welfare of the Lintong Nihuta coffee community.' },
      { name: 'Coffee Processing Facility', desc: 'Supported by a 400 m² processing facility to ensure every production process runs with consistent and reliable quality standards.' },
    ],
  },
  quality: {
    tag: 'Quality & Standards',
    title: 'Quality Delivered',
    subtitle: 'International standards applied at every stage of the process.',
    panelTitle: 'Every Batch Professionally Evaluated',
    panelText: 'Cupping is performed on every batch to ensure consistent flavor, aroma, and quality before the green beans are ready for market. International SNI standards and specialty coffee grade are our primary benchmarks.',
    stats: [
      { value: '83+', label: 'SCA Cupping Score' },
      { value: '100%', label: 'Arabica Specialty' },
      { value: 'Wet Hulled', label: 'Unique Method' },
      { value: 'Export', label: 'International Grade' },
    ],
    gallery: [
      { label: 'Cupping & Grading', alt: 'Cupping session aroma and flavor evaluation' },
      { label: 'Green Bean Gr. A', alt: 'Grade A green beans ready for export' },
      { label: 'Roast Profile', alt: 'Medium roast profile' },
    ],
  },
  farmers: {
    title: 'The Hands Behind Every Cup',
    subtitle: '20+ partner farming families in Humbang Hasundutan they are the real foundation of every Kopi Siholta product.',
    role: 'Kopi Siholta Partner Farmer',
    list: [
      {
        name: 'Mr. Maruhum Sihombing',
        village: 'Sitiotio Village, Lintongnihuta',
        since: 'Farmer since 1965',
        quote: 'Coffee has been running through our veins for three generations.',
      },
      {
        name: 'Mrs. Sinta Siregar',
        village: 'Sitapean Village, Lintongnihuta',
        since: 'Farmer since 1970',
        quote: 'Since partnering with Siholta, our income increased 40% and we learned international standards.',
      },
    ],
  },
  location: {
    title: 'Where Every Bean Begins',
    address: 'Dusun IV, Village/Kelurahan Sitolu Bahal, District Lintong Nihuta, Regency Humbang Hasundutan, Province North Sumatra, Postal Code 22475',
    mapLabel: 'Kopi Siholta Plantation Location',
  },
  cta: {
    title: 'Farmer & Exporter Partners',
    subtitle: 'PT Siholta Toba Indonesia is open to partnerships with coffee farmers and international buyers. Contact us to discuss further.',
    ctaText: 'Contact Us',
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