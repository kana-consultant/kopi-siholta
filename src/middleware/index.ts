import { defineMiddleware } from 'astro:middleware';

const LANG_MAP: Record<string, string> = {
  FR: 'fr', BE: 'fr', CH: 'fr', 
};
const DEFAULT_LANG = 'en';
const SUPPORTED_LANGS = ['id', 'en', 'fr'];

export const onRequest = defineMiddleware(async (context, next) => {
  const url = new URL(context.request.url);

  if (url.pathname.startsWith('/_astro') || url.pathname.match(/\.(png|jpg|jpeg|gif|webp|svg|ico)$/)) {
    return next();
  }

  const pathSegments = url.pathname.split('/').filter(Boolean);
  const urlLang = pathSegments[0];

  if (SUPPORTED_LANGS.includes(urlLang)) {
    (context.locals as any).lang = urlLang;
    
    context.cookies.set('preferred_lang', urlLang, {
      maxAge: 60 * 60 * 24 * 7,
      path: '/',
      sameSite: 'lax',
    });
    
    return next();
  }

  let preferredLang = context.cookies.get('preferred_lang')?.value;

  if (!preferredLang) {
    const country =
      context.request.headers.get('CF-IPCountry') ??
      context.request.headers.get('X-Vercel-IP-Country') ??
      'US';

    preferredLang = LANG_MAP[country.toUpperCase()] ?? DEFAULT_LANG;

    context.cookies.set('preferred_lang', preferredLang, {
      maxAge: 60 * 60 * 24, 
      path: '/',
      sameSite: 'lax',
    });
  }

  (context.locals as any).lang = preferredLang;

  if (url.pathname === '/') {
    return context.redirect(`/${preferredLang}`, 302);
  }

  return next();
});