import en from './en.json';
import id from './id.json';
import fr from './fr.json';

export type Lang = 'id' | 'en' | 'fr';
export type Translations = typeof en;

const translations: Record<Lang, Translations> = { id, en, fr };

/**
 * Returns the full translation object for the given lang code.
 * Falls back to Indonesian if the lang is unknown.
 */
export function t(lang: string): Translations {
  return translations[lang as Lang] ?? translations['id'];
}

/**
 * Shortcut for deeply nested keys, e.g. t(lang).hero.titleLine1
 */
export function useTranslations(lang: string) {
  return t(lang);
}
