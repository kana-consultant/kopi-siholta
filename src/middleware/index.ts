import { defineMiddleware } from 'astro:middleware';

const LANG_MAP: Record<string, string> = {
  ID: 'id',
  SG: 'en', MY: 'en', AU: 'en', US: 'en', GB: 'en',
  FR: 'fr', BE: 'fr', CH: 'fr', CA: 'fr',
};
const DEFAULT_LANG = 'id';

export const onRequest = defineMiddleware(async (context, next) => {
  const country =
    context.request.headers.get('CF-IPCountry') ??
    context.request.headers.get('X-Vercel-IP-Country') ??
    'ID';

  const detectedLang = LANG_MAP[country] ?? DEFAULT_LANG;
  const cookies = context.cookies;

  if (!cookies.has('preferred_lang')) {
    cookies.set('preferred_lang', detectedLang, {
      maxAge: 60 * 60 * 24 * 365,
      path: '/',
      sameSite: 'lax',
    });
    context.locals.lang = detectedLang;
  } else {
    context.locals.lang = cookies.get('preferred_lang')!.value;
  }

  return next();
});