export type Language = 'fr' | 'en';

export const translations = {
  fr: {
    nav: {
      about: 'À propos',
      projects: 'Projets',
      experience: 'Expérience',
      education: 'Education',
    },
    hero: {
      greeting: 'Salut! 👋',
      intro: 'Je suis',
    },
    sections: {
      about: 'À propos de moi',
      projects: 'Projets',
      experience: 'Expérience',
      education: 'Education',
    },
    footer: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
    },
  },
  en: {
    nav: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
    },
    hero: {
      greeting: 'Hi! 👋',
      intro: "I'm",
    },
    sections: {
      about: 'About Me',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
    },
    footer: {
      about: 'About',
      projects: 'Projects',
      experience: 'Experience',
      education: 'Education',
    },
  },
};

export function getTranslations(lang: Language) {
  return translations[lang];
}

