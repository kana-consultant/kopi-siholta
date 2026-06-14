# ☕ Kopi Siholta

> Website company profile & katalog untuk **PT. Siholta Toba Indonesia** — produsen dan eksportir kopi spesialti pertama dari Sumatera Lintong, Humbang Hasundutan, Sumatera Utara.

![Astro](https://img.shields.io/badge/Astro-6.x-violet?style=for-the-badge&logo=astro)
![Vercel](https://img.shields.io/badge/Vercel-SSR-black?style=for-the-badge&logo=vercel)
![Node](https://img.shields.io/badge/Node.js-22-green?style=for-the-badge&logo=nodedotjs)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=for-the-badge&logo=typescript)

---

## 🌐 Halaman

Website multi-halaman dengan 5 halaman utama dan dukungan 3 bahasa (🇮🇩 Indonesia, 🇬🇧 English, 🇫🇷 Français):

| Halaman | Rute | Deskripsi |
|---------|------|-----------|
| **Homepage** | `/[lang]/homepage` | Landing page utama — hero carousel, produk, ekspor, kemitraan B2B, kontak |
| **Company** | `/[lang]/company` | Profil perusahaan — cerita, visi-misi, timeline, sertifikasi, sektor operasi |
| **Coffee Farming** | `/[lang]/coffee-farming` | Pertanian kopi — daerah, petani, proses panen, roasting, quality control |
| **F&B** | `/[lang]/fnb` | Food & Beverage — produk retail, distribusi, cafe favorites, sustainability |
| **Tourism** | `/[lang]/tourism` | Wisata kopi — farm experience, coffee workshop, tourism packages |

### Fitur Utama

- 🌍 **i18n Multi-bahasa** — Indonesia, English, Prancis dengan deteksi bahasa otomatis via geolokasi (CF-IPCountry / Vercel IP)
- 🎠 **Hero Carousel** — Slideshow latar belakang dengan indikator navigasi
- 📦 **Katalog Produk** — Arabika & Robusta dengan detail origin dan profil rasa
- 🗺️ **Pasar Ekspor** — Peta jangkauan ekspor global (aktif & rencana ekspansi)
- 🤝 **B2B Partnership** — Program kemitraan franchise, white label, dan private label
- 📬 **Contact Form** — Form kontak dengan integrasi WhatsApp & email
- 🛒 **Omnichannel** — Link ke Tokopedia, Shopee, WhatsApp, Instagram, TikTok
- 📈 **Statistik** — Stat band di setiap halaman dengan animasi scroll-reveal
- 📍 **Google Maps Embed** — Peta interaktif di halaman company & coffee-farming
- 🏷️ **Sertifikasi** — Modal sertifikat (Halal, Organik, dll)
- 🔍 **SEO** — Open Graph, Twitter Cards, hreflang, breadcrumb structured data, sitemap.xml
- 📊 **Google Analytics** — GA4 hanya di production
- ⚡ **Skeleton Loader** — Placeholder shimmer saat navigasi antar halaman
- 🎨 **Scroll Reveal** — Animasi fade-in-up berbasis Intersection Observer
- 📱 **Responsive** — Mobile-first dengan hamburger menu, FAB WhatsApp

---

## 🚀 Cara Menjalankan

### Prerequisites

- Node.js >= 22.12.0
- npm

### Development

```bash
git clone https://github.com/your-repo/kopi-siholta.git
cd kopi-siholta

npm install
npm run dev
# Buka http://localhost:4321
```

### Production Build

```bash
npm run build
npm run preview
```

---

## 💻 Tech Stack

| Teknologi | Kegunaan |
|-----------|----------|
| **Astro 6** | Framework SSR — output server mode via Vercel adapter |
| **CSS 4** | Utility-first styling  |
| **TypeScript** | Type safety — strict mode |
| **Astro Icon** | Icon library (Lucide & Material Design Icons via Iconify) |
| **Playwright** | End-to-end testing |
| **Terser** | JavaScript minification |
| **Vite Compression** | Brotli + Gzip kompresi aset |
| **Lightning CSS** | CSS minification |
| **Sharp** | Image optimization (Astro `astro:assets`) |
| **Vercel** | Hosting SSR (server-side rendering) |

---

## 🎨 Design System

### Color Palette

| Token | Hex | Kegunaan |
|-------|-----|----------|
| Brand Red | `#CD1222` | Primary CTA, footer, aksen |
| Brand Cream | `#F9F6F0` | Background section terang |
| Brand Earth | `#5C3D1E` | Teks heading, earthy tone |
| Brand Gold | `#D4A046` | Aksen premium, badge |
| Brand Dark | `#F5F2EC` | Background section alternatif |
| Neutral 100 | `#F5F2EC` | Body background |
| WA Green | `#04a33f` | WhatsApp FAB |
| Tokopedia | `#42AA52` | E-commerce badge |
| Shopee | `#EE4D2D` | E-commerce badge |

### Typography

| Font | Role |
|------|------|
| **Cormorant Garamond** | Display / heading |
| **Plus Jakarta Sans** | Body / paragraph |
| **DM Mono** | Label / badge / uppercase kecil |

---

## 📁 Struktur Direktori

```
kopi-siholta/
├── public/                     # Static assets (docs, favicons, robots.txt)
├── src/
│   ├── assets/                 # Vector graphics & SVGs
│   ├── components/             # Reusable Astro components (Global & Layouts)
│   │   ├── layout/             # Sticky Navbar, Footer, Language Switcher, etc.
│   │   └── shared/             # Reusable UI sections (Map, CTA, Hero)
│   ├── constants/              # Centralized site configurations & links
│   ├── i18n/                   # Global localization dictionaries (EN, ID, FR)
│   ├── images/                 # Image assets optimized by Astro (by category)
│   ├── layouts/                # Base HTML & SEO meta wrappers
│   ├── middleware/             # Auto-language detection & cookie management
│   ├── pages/                  # Routing system
│   │   ├── index.astro         # Root redirect to /[lang]/
│   │   └── [lang]/             # Internationalized localized routes
│   │       ├── homepage/       # Landing page sections & local translations
│   │       ├── company/        # About Us page, timeline, & certifications
│   │       ├── coffee-farming/ # Sourcing, processes, & roasting data
│   │       ├── fnb/            # Retail & distribution details
│   │       └── tourism/        # Agri-tourism experiences
│   └── styles/                 # Global design tokens, animations, & utilities
├── astro.config.mjs            # Astro configuration (SSR, adapters, compression)
├── tailwind.config.mjs         # Tailwind theme & design tokens
└── tsconfig.json               # TypeScript path aliases & strict rules
```

---

## 🚢 Deployment

Deploy ke **Vercel** dengan SSR mode:

```bash
vercel --prod
```

Atau hubungkan repository GitHub untuk auto-deploy setiap push. Konfigurasi `vercel.json` sudah termasuk:
- Redirect `kopisiholta.com` → `www.kopisiholta.com`
- Cache headers untuk aset statis, font, dan gambar
- Brotli + Gzip kompresi

---

## 🧪 Testing

```bash
npx playwright test
```


