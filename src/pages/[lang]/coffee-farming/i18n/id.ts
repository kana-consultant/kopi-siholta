import type { PageTranslationsType } from "./en";

export const pageTranslations = {
  meta: {
    title: 'Budidaya Kopi Kopi Siholta',
    description: 'Pelajari proses budidaya kopi specialty PT Siholta dari panen cherry di dataran tinggi Humbang Hasundutan hingga penyangraian.',
  },
  breadcrumb: {
    home: 'Beranda',
    coffeeFarming: 'Budidaya Kopi',
    prev: 'Tentang Kami',
  },
  hero: {
    alt: 'Perkebunan kopi di Lintong Nihuta Humbang Hasundutan',
    titleLine1: 'Dari Perkebunan Terbaik,',
    titleLine2: 'Hingga ke Cangkir Anda.',
    subtitle: 'Setiap biji diproses dan disangrai dengan presisi untuk menjaga aroma serta karakter alaminya. Bagi kami, kopi bukan sekadar komoditas, melainkan karya yang menghubungkan alam, proses yang jujur, dan kenikmatan dalam setiap tegukan.',
    pageLabel: 'Budidaya Kopi',
    ctaText: 'Lihat Proses',
  },
  stats: [
    { value: '20+', label: 'Keluarga Petani' },
    { value: '1.500 mdpl', label: 'Ketinggian Maksimum' },
    { value: 'Giling Basah', label: 'Metode Utama' },
    { value: '100 ton', label: 'Kapasitas / Tahun' },
  ],
  harvestProcedure: {
    tag: 'Prosedur Panen',
    title: 'Prosedur Pemanenan Kopi',
    subtitle: 'Prosedur pemanenan kopi adalah proses memetik buah kopi yang sudah matang dari pohon kopi. Pada saat buah kopi mencapai kematangan optimal, biasanya memiliki warna merah atau merah kecokelatan.',
    steps: [
      { num: '01', title: 'Pemilihan Waktu Pemanenan', desc: 'Petani kopi akan memilih waktu yang tepat untuk pemanenan. Ini dapat berbeda tergantung pada varietas kopi, iklim, dan praktik lokal. Pemanenan biasanya dilakukan ketika buah kopi telah mencapai tingkat kematangan yang diinginkan.' },
      { num: '02', title: 'Pemetikan Secara Manual', desc: 'Pemanenan kopi dilakukan dengan tangan atau menggunakan alat seperti pemungut buah kopi. Petani mengambil buah kopi yang matang dengan hati-hati tanpa merusak pohon atau biji kopi yang belum matang.' },
      { num: '03', title: 'Penyortiran Buah Kopi', desc: 'Setelah dipetik, buah kopi disortir untuk memisahkan buah yang matang dengan yang belum matang atau rusak. Hal ini penting untuk memastikan hanya buah kopi yang matang dan berkualitas yang akan diolah lebih lanjut.' },
      { num: '04', title: 'Pengumpulan Buah Kopi', desc: 'Buah kopi yang telah disortir kemudian dikumpulkan dalam wadah atau keranjang khusus. Buah kopi yang dikumpulkan kemudian akan dibawa ke tempat pengolahan lebih lanjut.' },
    ],
    outro: 'Pemanenan kopi membutuhkan ketelitian dan keahlian untuk memilih waktu yang tepat dan memetik buah kopi dengan baik. Tujuannya adalah untuk memastikan bahwa hanya buah kopi yang matang yang diambil, sehingga menghasilkan biji kopi yang berkualitas tinggi.',
  },
  process: {
    tag: 'Pengolahan Kopi',
    title: 'Metode Pengolahan Kopi',
    subtitle: 'Proses pengolahan kopi di Humbang Hasundutan menggunakan tiga metode utama Giling Basah, Semi Basah, dan Kering. Masing-masing menghasilkan karakter rasa yang berbeda.',
    tabs: [
      { num: '01', label: 'Pengolahan Kopi Basah', labelShort: 'Basah', tabId: 'wet', panelId: 'panel-wet' },
      { num: '02', label: 'Pengolahan Kopi Semi Basah', labelShort: 'Semi', tabId: 'semi', panelId: 'panel-semi' },
      { num: '03', label: 'Pengolahan Kopi Kering', labelShort: 'Kering', tabId: 'dry', panelId: 'panel-dry' },
    ],
    panels: [
      {
        id: 'panel-wet', tabId: 'tab-wet', active: true,
        title: 'Pengolahan Kopi Basah',
        desc: 'Metode basah (fermentasi) menghasilkan kopi dengan rasa cerah, asam tinggi, dan kejernihan menonjol.',
        steps: [
          { title: 'Pemilihan Biji', desc: 'Memilih biji kopi matang dan membuang yang rusak.' },
          { title: 'Pemecahan Kulit Buah', desc: 'Kulit luar dilepas menggunakan mesin, menyisakan biji dengan lapisan lendir.' },
          { title: 'Fermentasi', desc: 'Biji direndam untuk menghilangkan lendir dan membentuk profil rasa.' },
          { title: 'Pembersihan', desc: 'Biji dicuci bersih dengan air untuk menghilangkan sisa lendir.' },
          { title: 'Pengeringan', desc: 'Biji dikeringkan (matahari/mesin) sambil diaduk hingga kadar air ideal.' },
          { title: 'Pembersihan Lanjutan', desc: 'Lapisan pergament dilepas agar biji siap disangrai.' },
        ],
        outro: 'Metode ini menjaga kualitas biji dengan karakter rasa yang cerah dan asam menonjol.',
      },
      {
        id: 'panel-semi', tabId: 'tab-semi', active: false,
        title: 'Pengolahan Kopi Semi Basah',
        desc: 'Kombinasi metode basah dan kering, menghasilkan kopi berkarakter unik dengan keseimbangan asam, kekayaan, dan kelembutan.',
        steps: [
          { title: 'Pemilihan Biji', desc: 'Seleksi biji kopi matang.' },
          { title: 'Pemecahan Kulit Buah', desc: 'Kulit luar dilepas, menyisakan lapisan lendir.' },
          { title: 'Fermentasi Singkat', desc: 'Fermentasi singkat untuk menghilangkan lendir dan membangun rasa.' },
          { title: 'Pembersihan', desc: 'Pencucian intensif untuk menghilangkan sisa pulp.' },
          { title: 'Pengeringan', desc: 'Pengeringan matahari atau mekanis hingga merata.' },
          { title: 'Pembersihan Akhir', desc: 'Pemisahan lapisan pergament hingga menjadi biji hijau siap sangrai.' },
        ],
        outro: 'Metode semi basah menawarkan profil rasa unik dengan perpaduan asam, kekayaan, dan kelembutan.',
      },
      {
        id: 'panel-dry', tabId: 'tab-dry', active: false,
        title: 'Pengolahan Kopi Kering',
        desc: 'Metode alami tanpa fermentasi, menghasilkan kopi dengan tekstur penuh, berat, dan berdaging.',
        steps: [
          { title: 'Pemanenan', desc: 'Pemetikan selektif biji kopi yang matang.' },
          { title: 'Pembersihan Awal', desc: 'Pembersihan manual/mekanis dari kotoran.' },
          {
            title: 'Pengeringan', _split: true,
            splitA: { title: 'Pengeringan Alami', desc: 'Dijemur dan diaduk berkala selama 1–3 minggu hingga kering merata.' },
            splitB: { title: 'Pengeringan Mekanis', desc: 'Pengeringan cepat dengan mesin pengatur suhu dan sirkulasi udara panas.' },
          },
          { title: 'Pembersihan Akhir', desc: 'Pemisahan kulit/pergament untuk mendapatkan biji hijau siap sangrai.' },
        ],
        outro: 'Metode kering memberikan rasa khas dengan kemanisan alami dan keasaman rendah.',
      },
    ],
  },
  roasting: {
    tag: 'Proses Penyangraian',
    title: 'Presisi Penyangraian untuk Rasa Autentik',
    subtitle: 'Setiap biji kopi disangrai dengan kontrol suhu dan waktu yang presisi untuk menghasilkan karakter rasa, aroma, dan body terbaik di setiap profil roasting.',
    levelsTitle: 'Tingkat Penyangraian',
    levels: [
      { name: 'Light Roast', temp: '196–205°C · 3–5 Menit', desc: 'Karakter ringan dengan acidity cerah, aroma floral, dan sentuhan fruity yang lebih menonjol.', variant: 'light' as const, featured: false },
      { name: 'Medium Roast', temp: '210–219°C · 6–8 Menit', desc: 'Rasa paling seimbang dengan body smooth, sweetness hangat, dan aroma yang kaya.', variant: 'medium' as const, featured: true },
      { name: 'Dark Roast', temp: '225–230°C · 9–11 Menit', desc: 'Body tebal dengan karakter bold, smoky, dark chocolate, dan aftertaste yang lebih intens.', variant: 'dark' as const, featured: false },
    ],
    standards: [
      { icon: 'mdi:thermometer', title: 'Kontrol Suhu Terkontrol', desc: 'Proses roasting dilakukan menggunakan metode High Temperature Short Time untuk menjaga konsistensi kualitas dan cita rasa kopi.' },
      { icon: 'mdi:palette', title: 'Presisi Warna & Aroma', desc: 'Perubahan warna biji kopi menjadi indikator utama tingkat kematangan roasting demi menghasilkan profil rasa yang optimal.' },
      { icon: 'mdi:coffee', title: 'Diciptakan untuk Setiap Cangkir', desc: 'Setiap profil roasting dirancang untuk menghadirkan pengalaman menikmati kopi yang berbeda sesuai preferensi penikmat kopi modern.' },
    ],
    profileLabel: 'Koleksi Profil Roasting',
  },
  regions: {
    title: 'Kawasan Perkebunan',
    subtitle: 'Berada di Lintong Nihuta, Humbang Hasundutan, kawasan dataran tinggi Sumatera Utara yang dikenal sebagai bagian dari Destinasi Prioritas Danau Toba dan penghasil kopi berkualitas khas Nusantara.',
    list: [
      { name: '6 Hektar Area Kebun', desc: 'Perkebunan Kopi Siholta membentang seluas 6 hektar dengan kondisi tanah dan iklim ideal untuk menghasilkan karakter kopi yang kaya, kompleks, dan autentik.' },
      { name: 'Tumbuh Bersama Petani Lokal', desc: 'Bermitra dengan 28 keluarga petani pemasok lokal serta membina 62 KK petani kopi di kawasan sekitar untuk menjaga kualitas panen sekaligus mendukung kesejahteraan komunitas kopi Lintong Nihuta.' },
      { name: 'Fasilitas Pengolahan Kopi', desc: 'Didukung fasilitas pengolahan seluas 400 m² untuk memastikan setiap proses produksi berjalan dengan standar kualitas yang konsisten dan terpercaya.' },
    ],
  },
  quality: {
    tag: 'Mutu & Standar',
    title: 'Kualitas yang Diwujudkan',
    subtitle: 'Standar internasional yang diterapkan pada setiap tahap proses.',
    panelTitle: 'Setiap Batch Dievaluasi Secara Profesional',
    panelText: 'Proses uji cicip (cupping) dilakukan pada setiap batch untuk memastikan konsistensi rasa, aroma, dan kualitas sebelum biji kopi siap dipasarkan. Standar internasional SNI dan specialty coffee grade menjadi patokan utama kami.',
    stats: [
      { value: '83+', label: 'SCA Cupping Score' },
      { value: '100%', label: 'Arabika Specialty' },
      { value: 'Giling Basah', label: 'Metode Unik' },
      { value: 'Export', label: 'Grade Internasional' },
    ],
    gallery: [
      { label: 'Cupping & Grading', alt: 'Cupping session uji aroma dan rasa' },
      { label: 'Green Bean Gr. A', alt: 'Green bean grade A siap ekspor' },
      { label: 'Roast Profile', alt: 'Profil sangrai sedang' },
    ],
  },
  farmers: {
    title: 'Tangan di Balik Setiap Cangkir',
    subtitle: '20+ keluarga petani partner di Humbang Hasundutan mereka adalah fondasi nyata dari setiap produk Kopi Siholta.',
    role: 'Petani Partner Kopi Siholta',
    list: [
      {
        name: 'Bapak Maruhum Sihombing',
        village: 'Desa Sitiotio, Lintongnihuta',
        since: 'Petani sejak 1965',
        quote: 'Kopi sudah menjadi darah dalam tubuh keluarga kami selama tiga generasi.',
      },
      {
        name: 'Ibu Sinta Siregar',
        village: 'Desa Sitapean, Lintongnihuta',
        since: 'Petani sejak 1970',
        quote: 'Setelah bermitra dengan Siholta, penghasilan kami meningkat 40% dan kami belajar standar internasional.',
      },
    ],
  },
  location: {
    title: 'Tempat Setiap Biji Kopi Bermula',
    address: 'Dusun IV, Desa/Kelurahan Sitolu Bahal, Kec. Lintong Nihuta, Kab. Humbang Hasundutan, Provinsi Sumatera Utara, Kode Pos 22475',
    mapLabel: 'Lokasi Perkebunan Kopi Siholta',
  },
  cta: {
    title: 'Mitra Petani dan Eksportir',
    subtitle: 'PT Siholta Toba Indonesia terbuka untuk kemitraan dengan petani kopi dan buyer internasional. Hubungi kami untuk diskusi lebih lanjut.',
    ctaText: 'Hubungi Kami',
  },
} satisfies PageTranslationsType;
