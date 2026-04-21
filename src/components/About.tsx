import aboutImage from '../images/about.webp';

export default function About() {
  return (
    <section id="tentang" className="py-20 md:py-32 bg-[var(--color-background)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[var(--color-primary)] mb-4">
              Tentang Kami
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-6">
              Warisan Kopi
              <br />
              <span className="text-[var(--color-primary)]">Dari Danau Toba</span>
            </h2>

            <div className="space-y-4 text-[var(--color-secondary)] leading-relaxed">
              <p>
                <strong>PT. Siholta Toba Indonesia</strong> adalah produsen kopi yang berfokus pada
                produksi kopi berkualitas dari daerah <strong>Lintong Nihuta, Humbang Hasundutan, Sumatera Utara</strong> —
                daerah yang terkenal sebagai penghasil kopi premium di kawasan Danau Toba.
              </p>
              <p>
                Kopi kami ditanam di ketinggian 1.200-1.500 meter di atas permukaan laut, memberikan
                karakter rasa yang unik: pedas, herba, rempah-rempah, dengan aroma kacang dan coklat yang khas.
              </p>
              <p>
                Saat ini, produk Kopi Siholta tidak hanya melayani pasar lokal dan nasional, tetapi
                juga telah dipercaya oleh konsumen di <strong>Jepang, Korea, Belanda, Jerman, Rusia, dan Amerika</strong>.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#kontak"
                className="px-6 py-3 bg-[var(--color-primary)] text-white rounded-full font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
              >
                Hubungi Kami
              </a>
              <a
                href="https://wa.me/6281322518527"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 border-2 border-[var(--color-border)] text-[var(--color-primary)] rounded-full font-medium hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                Chat WhatsApp
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <img src={aboutImage.src} alt="Tentang Kopi Siholta" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[var(--color-accent)] opacity-20 -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 rounded-full bg-[var(--color-primary)] opacity-10 -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
