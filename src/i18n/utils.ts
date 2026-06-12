export type Lang = 'id' | 'en' | 'fr';

export type Translations = typeof import('./en.json');

// Mendaftarkan loader dinamis untuk masing-masing bahasa
const loaders: Record<Lang, () => Promise<{ default: Translations }>> = {
  en: () => import('./en.json'),
  id: () => import('./id.json'),
  fr: () => import('./fr.json'),
};

export async function getTranslations(lang: string): Promise<Translations> {
  const targetLang = (lang in loaders ? lang : 'en') as Lang;
  const module = await loaders[targetLang]();
  return module.default; 
}