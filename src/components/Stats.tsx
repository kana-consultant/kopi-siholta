const stats = [
  { value: '6+', label: 'Negara Ekspor' },
  { value: '500g', label: 'Ukuran Kemasan' },
  { value: '100%', label: 'Halal Certified' },
  { value: '24/7', label: 'Dukungan Mitra' },
];

export default function Stats() {
  return (
    <section className="py-16 md:py-24 bg-[var(--color-primary)]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat, index) => (
            <div key={stat.label} className={`animate-fade-in-up stagger-${index + 1}`}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-[var(--color-muted)]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
