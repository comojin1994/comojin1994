'use client';

import { createContext, useContext, useEffect, useState } from 'react';

type Lang = 'ko' | 'en';

export interface Bilingual<T = string> {
  ko: T;
  en: T;
}

interface LanguageContextType {
  lang: Lang;
  toggleLanguage: () => void;
  t: <T>(bilingual: Bilingual<T>) => T;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>('ko');

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored) {
      setLang(stored);
    } else {
      const browserLang = navigator.language.toLowerCase();
      setLang(browserLang.startsWith('ko') ? 'ko' : 'en');
    }
  }, []);

  const toggleLanguage = () => {
    setLang((prev) => {
      const next = prev === 'ko' ? 'en' : 'ko';
      localStorage.setItem('lang', next);
      return next;
    });
  };

  const t = <T,>(bilingual: Bilingual<T>): T => bilingual[lang];

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
