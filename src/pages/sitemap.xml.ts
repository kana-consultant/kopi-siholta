import type { APIRoute } from 'astro';

const SITE_ORIGIN = 'https://www.kopisiholta.com';

const LOCALES = ['id', 'en', 'fr'] as const;

const PAGES: { slug: string; lastmod: string; changefreq: string; priority: string }[] = [
  { slug: 'homepage',    lastmod: '2026-06-12', changefreq: 'monthly', priority: '1.0' },
  { slug: 'company',     lastmod: '2026-06-12', changefreq: 'monthly', priority: '0.8' },
  { slug: 'coffee-farming', lastmod: '2026-06-12', changefreq: 'monthly', priority: '0.8' },
  { slug: 'fnb',         lastmod: '2026-06-12', changefreq: 'monthly', priority: '0.7' },
  { slug: 'tourism',     lastmod: '2026-06-12', changefreq: 'monthly', priority: '0.7' },
];

const escapeXml = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;').replace(/'/g, '&apos;');

const localizedPath = (lang: string, slug: string) => `/${lang}/${slug}`;

export const GET: APIRoute = async () => {
  const urls = PAGES.flatMap((page) =>
    LOCALES.map((lang) => {
      const loc = `${SITE_ORIGIN}${localizedPath(lang, page.slug)}`;
      const alternates = LOCALES.map((l) => {
        const href = `${SITE_ORIGIN}${localizedPath(l, page.slug)}`;
        return `    <xhtml:link rel="alternate" hreflang="${l}" href="${href}" />`;
      }).join('\n');
      const xDefault = `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_ORIGIN}${localizedPath('en', page.slug)}" />`;
      return `  <url>
    <loc>${escapeXml(loc)}</loc>
    <lastmod>${page.lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
${alternates}
${xDefault}
  </url>`;
    })
  ).join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urls}
</urlset>
`;

  return new Response(xml, {
    status: 200,
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
