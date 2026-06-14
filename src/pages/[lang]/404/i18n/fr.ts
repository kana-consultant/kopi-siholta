import type { pageTranslations } from './en';

export const pageTranslations = {
  title: 'Page Introuvable',
  code: '404',
  headline: 'Perdu dans les hauts plateaux ?',
  message: 'Il semble que la page que vous recherchez ait été déplacée, renommée ou n\'existe plus.',
  suggestion: 'Retournez à la page d\'accueil ou découvrez notre collection de cafés de spécialité.',
  ctaHome: 'Retour à l\'accueil',
  ctaExplore: 'Explorer les produits',
} as const satisfies typeof pageTranslations;
