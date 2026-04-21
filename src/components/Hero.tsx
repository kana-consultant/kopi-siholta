export default function Hero() {
  const badges = [
    '100% Halal',
    'Export Quality',
    'Kemasan Premium',
    'Produsen Langsung',
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[var(--color-background)] via-white to-[var(--color-background-alt)]">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <pattern id="heroGrid" width="20" height="20" patternUnits="userSpaceOnUse">
            <circle cx="10" cy="10" r="1.5" fill="currentColor" />
          </pattern>
          <rect width="100" height="100" fill="url(#heroGrid)" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-[10%] w-20 h-20 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-10 animate-float" />
      <div className="absolute top-40 right-[15%] w-32 h-32 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-secondary)] opacity-5 animate-float stagger-2" />
      <div className="absolute bottom-32 left-[20%] w-16 h-16 rounded-full bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] opacity-10 animate-float stagger-3" />

      <div className="relative z-10 text-center px-6 pt-28 pb-16 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--color-primary)]/10 rounded-full mb-6 animate-fade-in-up">
          <span className="w-2 h-2 bg-[var(--color-primary)] rounded-full animate-pulse" />
          <span className="text-sm font-medium text-[var(--color-primary)]">
            PT. Siholta Toba Indonesia
          </span>
        </div>

        {/* Heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[var(--color-primary)] mb-6 leading-tight animate-fade-in-up stagger-1">
          Kopi
          <br />
          <span className="text-[var(--color-primary)]">Siholta</span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl lg:text-2xl text-[var(--color-secondary)] max-w-2xl mx-auto mb-8 leading-relaxed animate-fade-in-up stagger-2">
          Produsen <strong>Kopi Khas Danau Toba</strong> dari Lintong Nihuta, Humbang Hasundutan.
          Menyajikan cita rasa autentik yang telah dikenal hingga ke Jepang, Korea, dan Eropa.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up stagger-3">
          <a
            href="#produk"
            className="group px-8 py-4 bg-[var(--color-primary)] text-white rounded-full font-semibold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Lihat Produk</span>
            <svg
              className="w-5 h-5 group-hover:translate-y-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
          <a
            href="#mitra"
            className="px-8 py-4 bg-white border-2 border-[var(--color-border)] text-[var(--color-primary)] rounded-full font-semibold text-lg hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300"
          >
            Jadi Mitra
          </a>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-[var(--color-muted)] animate-fade-in-up stagger-4">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <svg className="w-5 h-5 text-[var(--color-primary)]" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
              </svg>
              <span>{badge}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[var(--color-primary)]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div> */}
    </section>
  );
}
