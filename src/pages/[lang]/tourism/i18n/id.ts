import type { PageTranslationsType } from "./en";

export const pageTranslations = {
  meta: {
    title: 'Wisata Kopi Kopi Siholta',
    description: 'Rasakan pengalaman wisata kopi autentik dari perkebunan hingga cangkir di Kopi Siholta, Humbang Hasundutan, Sumatera Utara.',
  },
  breadcrumb: {
    home: 'Beranda',
    tourism: 'Wisata Kopi',
    prev: 'Tentang Kami',
  },
  hero: {
    alt: 'Pengunjung menelusuri perkebunan kopi di Lintong Nihuta',
    titleLine1: 'Sentuh Kopi.',
    titleLine2: 'Rasakan Humbang.',
    subtitle: 'Dari lereng Sumatera Utara, kami mengundang Anda merasakan perjalanan kopi dari pohon hingga cangkir sebuah pengalaman yang mengubah cara Anda memandang setiap teguk.',
    pageLabel: 'Wisata Kopi',
  },
  stats: [
    { value: '1.200 mdpl', label: 'Ketinggian Perkebunan' },
    { value: '200+', label: 'Keluarga Petani' },
    { value: '6+', label: 'Negara Tujuan Ekspor' },
    { value: '2021', label: 'Tahun Berdiri' },
  ],
  experiences: {
    tag: 'Pengalaman Kami',
    title: 'Tiga Cara Menikmati Kopi Siholta',
    subtitle: 'Setiap pengalaman dirancang untuk membawa Anda lebih dekat dengan cerita di balik setiap cangkir.',
    bookNow: 'Pesan Sekarang',
    list: [
      {
        num: '01',
        title: 'Farm Tour',
        subtitle: 'Dari Pohon ke Cangkir',
        desc: 'Telusuri perkebunan kopi kami yang membentang di lereng Sumatera Utara. Ikuti tangan kami saat memetik buah merah yang matang sempurna, dan saksikan bagaimana alam bekerja sama dengan tradisi untuk menghasilkan kopi specialty.',
        alt: 'Pengunjung menelusuri perkebunan kopi di Lintong Nihuta',
        details: [
          'Durasi: 2–3 jam',
          'Maksimal 15 tamu per sesi',
          'Termasuk simulasi panen',
          'Guide bersertifikat lokal',
        ],
      },
      {
        num: '02',
        title: 'Factory Tour',
        subtitle: 'Giling Basah & Penjemuran',
        desc: 'Perhatikan bagaimana biji kopi diproses menggunakan metode Giling Basah teknik tradisional yang telah dipertahankan selama puluhan tahun dan menjadi ciri autentik Kopi Lintong.',
        alt: 'Proses pengolahan kopi Giling Basah di fasilitas PT Siholta',
        details: [
          'Durasi: 1.5–2 jam',
          'Demonstrasi Pengolahan',
          'Waktu terbaik: pagi–siang',
        ],
      },
      {
        num: '03',
        title: 'Cupping & Tasting',
        subtitle: 'Rasakan Profil Rasa',
        desc: 'Ruang tasting kami dirancang untuk mengajak Anda menyelami kompleksitas rasa kopi specialty dari catatan rempah hingga fruity, floral, hingga cokelat dalam satu tegukan.',
        alt: 'Tamu melakukan cupping dan tasting kopi specialty di ruang Kopi Siholta',
        details: [
          'Durasi: 1–1.5 jam',
          'Sesi kelompok maks 8 orang',
          '3 varian kopi berbeda',
          'Sertifikat hadiah pengalaman',
        ],
      },
    ],
  },
  cta: {
    title: 'Siap Menikmati Perjalanan Kopi?',
    subtitle: 'Hubungi tim kami untuk menjadwalkan kunjungan farm tour, factory tour, atau sesi cupping di lokasi kami.',
    ctaText: 'Hubungi Kami',
  },
} satisfies PageTranslationsType;
