# ☕ Kopi Siholta Landing Page

> Website katalog dan company profile untuk **PT. Siholta Toba Indonesia** - Produsen kopi premium khas Danau Toba.

![Astro](https://img.shields.io/badge/Astro-6.x-violet?style=for-the-badge&logo=astro)
![Tailwind](https://img.shields.io/badge/Tailwind-4.x-38b2ac?style=for-the-badge&logo=tailwindcss)
![Vercel](https://img.shields.io/badge/Vercel-Ready-black?style=for-the-badge&logo=vercel)
![Node](https://img.shields.io/badge/Node.js-22-green?style=for-the-badge&logo=nodedotjs)

---

## 🎯 Tentang Project

Website landing page yang menampilkan kopi Sumatera Utara yang otentik dengan desain visual yang kaya dan estetika yang menawan. Featuring:

- 🌿 **Hero Section** 
- 📦 **Katalog Produk** - Produk kopi Arabika & Robusta
- 🗺️ **Pasar Internasional** - Jangkauan ekspor global
- 🤝 **Partnership** - Kesempatan kemitraan franchise
- 📬 **Contact Form** - Integrasi WhatsApp & email

---

## 🚀 Cara Menjalankan

### Prerequisites
- Node.js v22.12.0 atau lebih tinggi
- npm atau yarn

### Langkah-langkah

```bash
# 1. Clone repository
git clone https://github.com/your-repo/kopi-siholta.git
cd kopi-siholta

# 2. Install dependencies
npm install

# 3. Jalankan development server
npm run dev

# 4. Buka di browser
# http://localhost:4321
```

### Build untuk Production

```bash
# Build static files
npm run build

# Preview hasil build
npm run preview
```

---

## 🧩 Komponen Modular

Website ini dibangun dengan arsitektur komponen yang modular:

| Komponen | Deskripsi |
|----------|------------|
| `Hero.astro` | Hero section dengan gradient animation |
| `Products.astro` | Katalog produk dengan image grid |
| `About.astro` | Cerita perusahaan dan fitur |
| `Export.astro` | Pasar internasional |
| `Partnership.astro` | Kemitraan franchise |
| `Contact.astro` | Form kontak & Google Maps |
| `Navigation.astro` | Navigasi sticky dengan mobile menu |
| `Footer.astro` | Footer dengan social links |

### Struktur Komponen

```

```

---

## 💻 Tech Stack

| Teknologi | Kegunaan |
|-----------|----------|
| **Astro** | Static Site Generator - performa tinggi |
| **Tailwind CSS** | Utility-first styling |
| **Lucide Icons** | Icon library yang ringan |
| **Vercel** | Deployment & edge hosting |


---

## 🎨 Design System

### Color Palette

```
Primary (Dark Brown)    : #1C0F07
Roasted Brown           : #4A2511
Gold Accent             : #F3B700
Red Accent              : #CD1222
Cream Text              : #F9F6F0
```

### Typography

- **Display Font** : Playfair Display (heading)
- **Body Font** : Plus Jakarta Sans (paragraph)

---

## 📁 Struktur File

```
kopi-siholta/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   ├── images/          # Source images
│   ├── layouts/
│   ├── pages/
│   └── styles/
│       └── global.css   # Tailwind + custom styles
├── astro.config.mjs
├── vercel.json
└── package.json
```

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy ke production
vercel --prod
```

Atau connect repo ke Vercel untuk auto-deploy setiap push.


