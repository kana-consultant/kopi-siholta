export const pageTranslations = {
  title: 'Page Not Found',
  code: '404',
  headline: 'Lost in the highlands?',
  message: 'The page you\'re looking for may have moved, been renamed, or no longer exists.',
  suggestion: 'Try heading back to the homepage or explore our specialty coffee collection.',
  ctaHome: 'Back to Homepage',
  ctaExplore: 'Explore Products',
} as const;

export type PageTranslationsType = Record<keyof typeof pageTranslations, string>;