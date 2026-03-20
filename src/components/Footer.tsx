'use client';

import { useLanguage } from '@/context/LanguageProvider';

export default function Footer() {
  const { lang } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="container-max section-padding flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-gray-400 dark:text-gray-600">
        <p>
          © {year} Sung-Jin Kim.{' '}
          {lang === 'ko' ? '모든 권리 보유.' : 'All rights reserved.'}
        </p>
        <p>
          {lang === 'ko'
            ? 'Next.js · Tailwind CSS · Framer Motion으로 제작'
            : 'Built with Next.js · Tailwind CSS · Framer Motion'}
        </p>
      </div>
    </footer>
  );
}
