export type Language = 'fr' | 'en';

const STORAGE_KEY = 'portfolio-language';

export function getLanguage(): Language {
  if (typeof window === 'undefined') return 'fr';
  
  const stored = localStorage.getItem(STORAGE_KEY) as Language | null;
  if (stored === 'fr' || stored === 'en') {
    return stored;
  }
  
  // Try to detect from browser
  const browserLang = navigator.language.split('-')[0];
  return browserLang === 'fr' ? 'fr' : 'en';
}

export function setLanguage(lang: Language): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;
  // Trigger custom event for components to react
  window.dispatchEvent(new CustomEvent('languagechange', { detail: { lang } }));
}

export function initLanguage(): void {
  if (typeof window === 'undefined') return;
  const lang = getLanguage();
  document.documentElement.lang = lang;
}

