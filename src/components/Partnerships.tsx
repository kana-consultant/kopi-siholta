interface Partnership {
  icon: React.ReactNode;
  title: string;
  description: string;
  benefits: string[];
  ctaText: string;
  ctaLink: string;
}

const partnerships: Partnership[] = [
  {
    title: 'Program Kemitraan Franchise',
    description:
      'Buka kedai kopi dengan brand Kopi Siholta. Dapatkan panduan lengkap mulai dari desain interior, pelatihan barista, hingga sistem operasional.',
    benefits: ['Pelatihan dan sertifikasi barista', 'Supply chain terintegrasi', 'Marketing dan promotional support'],
    ctaText: 'Hubungi Kami',
    ctaLink: 'https://wa.me/6281322518527?text=Halo,%20saya%20tertarik%20dengan%20Program%20Kemitraan%20Franchise%20Kopi%20Siholta',
    icon: (
      <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-4 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Program Kerjasama Wholesale',
    description:
      'Supply kopi dalam jumlah besar untuk coffee shop, restoran, hotel, dan minimarket dengan harga khusus distributor.',
    benefits: ['Harga grosir kompetitif', 'Pengiriman reguler terjamin', 'Custom packaging tersedia'],
    ctaText: 'Hubungi Kami',
    ctaLink: 'https://wa.me/6281322518527?text=Halo,%20saya%20tertarik%20dengan%20Program%20Kerjasama%20Wholesale%20Kopi%20Siholta',
    icon: (
      <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Private Label',
    description:
      'Buat brand kopi Anda sendiri dengan kemasan custom. Cocok untuk souvenir perusahaan, merchandise, atau brand kopi baru.',
    benefits: ['Minimum 100 unit', 'Design packaging bantuan', 'Kualitas Export Standard'],
    ctaText: 'Hubungi Kami',
    ctaLink: 'https://wa.me/6281322518527?text=Halo,%20saya%20tertarik%20dengan%20Private%20Label%20Kopi%20Siholta',
    icon: (
      <svg className="w-8 h-8 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
];

export default function Partnerships() {
  return (
    <section id="mitra" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[var(--color-primary)] mb-4">
            Kemitraan
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-4">
            Jadilah Mitra Kami
          </h2>
          <p className="text-lg text-[var(--color-secondary)] max-w-2xl mx-auto">
            Bergabunglah dalam jaringan distribusi Kopi Siholta dan kembangkan bisnis kopi Anda dengan
            dukungan penuh dari tim kami.
          </p>
        </div>

        {/* Partnership Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnerships.map((partnership) => (
            <div
              key={partnership.title}
              className="group p-8 rounded-2xl border-2 border-[var(--color-border)] hover:border-[var(--color-primary)] transition-all duration-300 hover:shadow-xl"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-[var(--color-primary)]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {partnership.icon}
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold text-[var(--color-primary)] mb-3">
                {partnership.title}
              </h3>

              {/* Description */}
              <p className="text-[var(--color-secondary)] mb-6">{partnership.description}</p>

              {/* Benefits */}
              <ul className="space-y-2 text-sm text-[var(--color-secondary)] mb-6">
                {partnership.benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-[var(--color-primary)]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                    </svg>
                    {benefit}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={partnership.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center px-6 py-3 bg-[var(--color-primary)] text-white rounded-full font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                {partnership.ctaText}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
