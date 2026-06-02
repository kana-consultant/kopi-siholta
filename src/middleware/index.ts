import { defineMiddleware } from 'astro:middleware';

const LANG_MAP: Record<string, string> = {
  ID: 'id',
  SG: 'en', MY: 'en', AU: 'en', US: 'en', GB: 'en',
  FR: 'fr', BE: 'fr', CH: 'fr', CA: 'fr',
};
const DEFAULT_LANG = 'en';
const SUPPORTED_LANGS = ['id', 'en', 'fr'];

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  // Abaikan middleware untuk aset statis dan API
  if (url.pathname.startsWith('/_astro') || url.pathname.match(/\.(png|jpg|jpeg|gif|webp|svg|ico)$/)) {
    return next();
  }

  let preferredLang = context.cookies.get('preferred_lang')?.value;

  if (!preferredLang) {
    const country =
      context.request.headers.get('CF-IPCountry') ??
      context.request.headers.get('X-Vercel-IP-Country') ??
      'ID';

    preferredLang = LANG_MAP[country.toUpperCase()] ?? DEFAULT_LANG;

    context.cookies.set('preferred_lang', preferredLang, {
      maxAge: 60 * 60 * 24 * 365, // 1 tahun
      path: '/',
      sameSite: 'lax',
    });
  }

(context.locals as any).lang = preferredLang;

  // 2. JIKA USER MENGAKSES ROOT '/' -> LANGSUNG REDIRECT DI SERVER SIDE
  if (url.pathname === '/') {
    return context.redirect(`/${preferredLang}`, 302);
  }

  return next();
});