import logo from '../images/logo.jpg';

const navigationLinks = [
  { href: '#produk', label: 'Produk' },
  { href: '#tentang', label: 'Tentang' },
  { href: '#mitra', label: 'Kemitraan' },
  { href: '#kontak', label: 'Kontak' },
];

const socialLinks = [
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/kopi_siholta.id',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/kopisiholta',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
      </svg>
    ),
  },
  {
    name: 'Tokopedia',
    href: 'https://tokopedia.com/kopisiholta',
    icon: (
      <svg 
        className="w-5 h-5" 
        viewBox="0 0 32 32" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        <path 
          fillRule="evenodd" 
          clipRule="evenodd" 
          d="M23.5 10V8.25C23.5 4.245 20.255 1 16.25 1C12.245 1 9 4.245 9 8.25V10H4.5V26.5C4.5 29.537 6.963 32 10 32H22C25.037 32 27.5 29.537 27.5 26.5V10H23.5ZM11.5 8.25C11.5 5.626 13.626 3.5 16.25 3.5C18.874 3.5 21 5.626 21 8.25V10H11.5V8.25ZM20.45 19.575C20.45 21.356 18.57 22.8 16.25 22.8C13.93 22.8 12.05 21.356 12.05 19.575C12.05 17.794 13.93 16.35 16.25 16.35C18.57 16.35 20.45 17.794 20.45 19.575Z" 
          fill="currentColor" 
        />
      </svg>
    ),
  }
];

export default function Footer() {
  return (
    <footer className="py-12 bg-[var(--color-primary)] border-t border-[var(--color-primary-dark)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="/" className="flex items-center gap-3 mb-4">
              <img src={logo.src} alt="Kopi Siholta" className="w-10 h-10 rounded-xl object-cover" />
              <span className="font-display text-xl font-bold text-white">Kopi Siholta</span>
            </a>
            <p className="text-[var(--color-muted)] mb-4 max-w-sm">
              PT. Siholta Toba Indonesia - Produsen Kopi Khas Danau Toba dari Lintong Nihuta,
              Sumatera Utara.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-[var(--color-primary-dark)] flex items-center justify-center text-white hover:bg-[var(--color-accent)] transition-colors"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigasi</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[var(--color-muted)] hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4">Kontak</h4>
            <ul className="space-y-2 text-sm text-[var(--color-muted)]">
              <li>WhatsApp: +62 813-2251-8527</li>
              <li>Email: siholtatobaindonesia@gmail.com</li>
              <li>Instagram: @kopi_siholta.id</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[var(--color-primary-dark)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-muted)]">
            &copy; 2024 PT. Siholta Toba Indonesia. All rights reserved.
          </p>
          <p className="text-sm text-[var(--color-muted)]">
            Dibuat dengan cinta di Sumatera Utara
          </p>
        </div>
      </div>
    </footer>
  );
}
