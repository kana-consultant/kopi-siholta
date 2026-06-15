import type { PageTranslationsType } from './en';


export const pageTranslations = {
  title: 'Halaman Tidak Ditemukan',
  code: '404',
  headline: 'Tersesat di dataran tinggi?',
  message: 'Halaman yang Anda cari mungkin telah dipindahkan, diganti nama, atau tidak lagi tersedia.',
  suggestion: 'Coba kembali ke halaman utama atau jelajahi koleksi kopi spesialti kami.',
  ctaHome: 'Kembali ke Beranda',
  ctaExplore: 'Jelajahi Produk',
} as const satisfies PageTranslationsType;
