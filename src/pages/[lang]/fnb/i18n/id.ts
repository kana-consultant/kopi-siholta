import type { PageTranslationsType } from "./en";

export const pageTranslations = {
  meta: {
    title: 'F&B Kopi Siholta',
    description: 'Nikmati minuman dan makanan berbasis kopi specialty di outlet F&B Kopi Siholta. Dari espresso hingga kuliner kopi lokal Sumatera.',
  },
  breadcrumb: {
    home: 'Beranda',
    fnb: 'F&B',
    prev: 'Tentang Kami',
  },
  hero: {
    alt: 'Atmosfer kafe Kopi Siholta',
    titleLine1: 'Rasakan Sensasi Eksotis',
    titleLine2: 'Lereng Vulkanis Toba Lintong',
    subtitle: 'Manjakan lidah Anda dalam sebuah petualangan rasa ke penjuru nusantara. Kopi asli Siholta dari Lintong adalah mahakarya cita rasa, menghadirkan karakteristik rasa yang kuat, tekstur kental seperti sirup, dengan sentuhan dark chocolate, rempah-rempah hangat, serta aroma kacang. Dibudidayakan secara berkelanjutan oleh para petani kopi kami, setiap sesapan menjadi bentuk penghormatan terhadap tradisi berabad-abad. Seduh sebagai espresso yang kaya rasa, dan rasakan keajaiban pulau yang sesungguhnya di dalam cangkir Anda.',
    pageLabel: 'F&B',
  },
  stats: [
    { value: '8+', label: 'Item Menu' },
    { value: '4', label: 'Minuman Best Seller' },
    { value: '200+', label: 'Cangkir per Hari' },
    { value: '5+', label: 'Tahun Pengalaman' },
  ],
  retail: {
    title: 'Retail Coffee Collection',
    subtitle: 'Diproses dari biji kopi pilihan dataran tinggi Sumatera untuk kebutuhan retail, horeca, dan specialty coffee market.',
    ctaText: 'Lihat Produk',
    main: {
      name: 'Coffee Beans',
      tag: 'ARABIKA \u2022 ROBUSTA \u2022 SPECIALTY GRADE',
      desc: 'Biji kopi pilihan dengan karakter khas Sumatera Utara, tersedia dalam berbagai profil roasting.',
      alt: 'Biji kopi specialty pilihan dari Sumatera Utara',
    },
    items: [
      { name: 'Kopi Bubuk', desc: 'Praktis untuk kebutuhan harian dengan aroma dan karakter kopi yang tetap terjaga.', alt: 'Kopi bubuk siap seduh dari Kopi Siholta' },
      { name: 'Green Beans', desc: 'Biji kopi hijau pilihan untuk roaster, distributor, dan kebutuhan ekspor.', alt: 'Biji kopi hijau untuk roaster dan distributor' },
      { name: 'Coffee Capsule', desc: 'Kapsul aluminium daur ulang 80% dengan profil rasa modern dan konsisten.', alt: 'Kapsul kopi aluminium daur ulang' },
    ],
  },
  cafe: {
    title: 'Cafe Favorites',
    subtitle: 'Minuman favorit pelanggan kami yang dibuat dari biji kopi specialty pilihan.',
    drinks: [
      { name: 'Kopi Gula Aren', tag: 'SWEET \u2022 CREAMY \u2022 LOCAL FAVORITE', desc: 'Espresso dengan gula aren asli dan susu segar creamy.', alt: 'Secangkir kopi susu Humbang yang creamy' },
      { name: 'Americano', tag: 'BOLD \u2022 CLEAN \u2022 CLASSIC', desc: 'Double espresso dengan air panas, bold dan clean.', alt: 'Atmosfer kafe Kopi Siholta' },
      { name: 'Es Kopi Caramel', tag: 'SMOOTH \u2022 CARAMEL \u2022 MODERN', desc: 'Espresso dengan sirup karamel, susu segar, dan foam.', alt: 'Varian menu kopi di outlet Kopi Siholta' },
      { name: 'Es Kopi Susu', tag: 'MILKY \u2022 BALANCED \u2022 SIGNATURE', desc: 'Kopi susu signature dengan gula aren khas Siholta.', alt: 'Barista menyeduh kopi espresso dengan sempurna' },
    ],
  },
  distribution: {
    title: 'Distribusi & Lokasi Gerai',
    retailNetworkHeading: 'Tersedia di Jaringan Retail Modern',
    retailNetworkDesc: 'Produk Kopi Siholta telah hadir di berbagai retail modern dan swalayan regional di Indonesia.',
    cafeLocationsHeading: 'Kunjungi Gerai Kami',
    locations: [
      { city: 'Palangka Raya', address: 'Terminal Keberangkatan Bandara Tjilik Riwut' },
      { city: 'Jakarta', address: 'Jl. Monumen Pancasila No. 50, Lubang Buaya, Jakarta Timur' },
    ],
    mapPreviewLabel: '2 Lokasi Tersedia',
    regionChips: ['Jabodetabek', 'Palangka Raya', 'Bali'],
  },
  sustainability: {
    title: 'Komitmen Keberlanjutan',
    subtitle: 'Kopi Siholta berkomitmen pada keberlanjutan lingkungan melalui penggunaan kapsul aluminium daur ulang 80% dan dukungan untuk petani kopi lokal Sumatera.',
  },
  cta: {
    title: 'Bawa Pulang Cita Rasa Lintong',
    subtitle: 'Beli Sekarang dan bawa petualangan kopi terbaik ke dapur Anda hari ini.',
    ctaText: 'Hubungi Kami',
  },
} satisfies PageTranslationsType;
