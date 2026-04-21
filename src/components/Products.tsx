interface Product {
  id: number;
  name: string;
  description: string;
  size: string;
  badge?: string;
  badgeType?: 'default' | 'bulk' | 'custom';
}

const products: Product[] = [
  {
    id: 1,
    name: 'Kopi Arabika Lintong',
    description:
      'Biji kopi Arabika pilihan dari ketinggian 1.200-1.500 mdpl. Rasa pedas, herba, rempah.',
    size: '250g - 500g',
    badge: 'Best Seller',
    badgeType: 'default',
  },
  {
    id: 2,
    name: 'Kopi Robusta Lintong',
    description: 'Robusta berkualitas dengan body kuat dan aroma kacang/coklat yang khas.',
    size: '250g - 500g',
  },
  {
    id: 3,
    name: 'Kopi Biji Sangrai',
    description: 'Biji kopi sangrai whole bean, siap digiling atau diseduh dengan metode favorit.',
    size: '5 kg (Min.)',
    badge: 'Bulk',
    badgeType: 'bulk',
  },
  {
    id: 4,
    name: 'Private Label',
    description: 'Kopi dengan kemasan brand Anda sendiri. Minimum pemesanan 100 unit.',
    size: '100 unit (Min.)',
    badge: 'Custom',
    badgeType: 'custom',
  },
];

export default function Products() {
  return (
    <section id="produk" className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-sm font-semibold tracking-wider uppercase text-[var(--color-primary)] mb-4">
            Produk Kami
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-primary)] mb-4">
            Kopi Kemasan Premium
          </h2>
          <p className="text-lg text-[var(--color-secondary)] max-w-2xl mx-auto">
            Biji kopi pilihan dari Lintong Nihuta, dikemas dengan standar premium untuk menjaga
            kesegaran dan cita rasa autentik.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <article
              key={product.id}
              className="group bg-[var(--color-background)] rounded-2xl overflow-hidden border border-[var(--color-border)] hover:border-[var(--color-primary)] hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative h-48 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-primary-dark)] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-28 bg-[var(--color-accent)] rounded-full rotate-[-15deg] shadow-2xl group-hover:rotate-[15deg] transition-transform duration-500" />
                </div>
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 px-3 py-1 text-xs font-bold rounded-full ${product.badgeType === 'bulk'
                        ? 'bg-white text-[var(--color-primary)]'
                        : product.badgeType === 'custom'
                          ? 'bg-[var(--color-accent)] text-[var(--color-primary)]'
                          : 'bg-[var(--color-primary)] text-white'
                      }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Product Info */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold text-[var(--color-primary)] mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-[var(--color-secondary)] mb-4">{product.description}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-[var(--color-muted)]">Ukuran</span>
                    <p className="font-semibold text-[var(--color-primary)]">{product.size}</p>
                  </div>
                  <a
                    href={`https://wa.me/6281322518527?text=Halo,%20saya%20tertarik%20dengan%20${encodeURIComponent(product.name)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-[var(--color-primary)] text-white text-sm font-medium rounded-lg hover:bg-[var(--color-primary-dark)] transition-colors"
                  >
                    {product.badgeType === 'bulk' || product.badgeType === 'custom'
                      ? 'Hubungi'
                      : 'Pesan'}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Marketplace Link */}
        <div className="mt-12 text-center">
          <p className="text-sm text-[var(--color-muted)] mb-4">
            atau beli melalui marketplace resmi kami
          </p>
          <a
            href="https://tokopedia.com/kopisiholta"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--color-primary)] text-white rounded-full font-medium hover:bg-[var(--color-primary-dark)] transition-colors"
          >
            {/* Logo Tokopedia Asli (Monochrome) */}
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M18.356 7.556H16.41V6.286c0-2.37-1.92-4.286-4.28-4.286-2.36 0-4.28 1.916-4.28 4.286v1.27H5.644C4.184 7.556 3 8.74 3 10.201v8.155C3 19.816 4.184 21 5.644 21h12.712C19.816 21 21 19.816 21 18.356v-8.155c0-1.46-1.184-2.645-2.644-2.645zm-8.426-1.27c0-1.37.1.114-1.114-1.114.114 1.114 0 1.37.1v1.27h2.228V6.286zm7.252 6.57c0 .19-.15.34-.34.34-.19 0-.34-.15-.34-.34s.15-.34.34-.34c.19 0 .34.15.34.34zm-3.805 3.323c-1.393 0-2.522-.765-2.522-1.708 0-.1.08-.182.18-.182.1 0 .18.082.18.182 0 .74 1.015 1.344 2.162 1.344 1.147 0 2.162-.604 2.162-1.344 0-.1.08-.182.18-.182.1 0 .18.082.18.182 0 .943-1.13 1.708-2.522 1.708zm-2.483-3.323c0 .19-.15.34-.34.34-.19 0-.34-.15-.34-.34s.15-.34.34-.34c.19 0 .34.15.34.34z" />
            </svg>
            Tokopedia
          </a>
        </div>
      </div>
    </section>
  );
}
