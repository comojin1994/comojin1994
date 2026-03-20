'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, ExternalLink, ChevronDown } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { awards } from '@/data';
import { staggerContainer, fadeInUp, viewportConfig } from '@/lib/animations';

const YEAR_COLORS: Record<number, string> = {
  2025: 'bg-purple-500',
  2024: 'bg-brand-500',
  2023: 'bg-cyan-500',
  2021: 'bg-green-500',
  2020: 'bg-orange-500',
  2019: 'bg-pink-500',
};

const TROPHY_COLORS: Record<string, string> = {
  '대상': 'text-yellow-500',
  'Grand Prize': 'text-yellow-500',
  '1st': 'text-yellow-500',
  '종합우승': 'text-yellow-400',
  '금상': 'text-yellow-500',
  'Gold': 'text-yellow-500',
  '최우수상': 'text-amber-500',
  '1위': 'text-yellow-400',
  'Overall': 'text-yellow-400',
};

function getTrophyColor(title: string): string {
  for (const [key, color] of Object.entries(TROPHY_COLORS)) {
    if (title.includes(key)) return color;
  }
  return 'text-brand-400';
}

export default function AwardsSection() {
  const { lang, t } = useLanguage();
  const [showAll, setShowAll] = useState(false);

  const highlighted = awards.filter((a) => a.highlight);
  const rest = awards.filter((a) => !a.highlight);
  const visibleRest = showAll ? rest : rest.slice(0, 6);

  return (
    <section id="awards" className="py-24 bg-white dark:bg-gray-950">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <p className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3">
            {lang === 'ko' ? '수상 이력' : 'Awards & Honors'}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            {lang === 'ko' ? '18회 수상의 발자취' : '18 Awards & Counting'}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto">
            {lang === 'ko'
              ? '2019년부터 2025년까지, 국내외 경진대회에서 증명한 기술력'
              : 'Proven excellence across national and international competitions from 2019 to 2025'}
          </p>
        </motion.div>

        {/* Highlighted Awards */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8"
        >
          {highlighted.map((award) => (
            <motion.div
              key={award.id}
              variants={fadeInUp}
              className="relative p-5 rounded-2xl bg-gradient-to-br from-brand-50 to-accent-50 dark:from-brand-950/30 dark:to-accent-950/20 border border-brand-200 dark:border-brand-800 hover:shadow-lg hover:shadow-brand-500/10 transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3">
                <Trophy
                  size={22}
                  className={`mt-0.5 flex-shrink-0 ${getTrophyColor(t(award.title))}`}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1 flex-wrap">
                    <span
                      className={`text-xs font-bold text-white px-2 py-0.5 rounded-full ${YEAR_COLORS[award.year] ?? 'bg-gray-500'}`}
                    >
                      {award.year}
                    </span>
                    <span className="text-sm font-bold text-gray-900 dark:text-white">
                      {t(award.title)}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 leading-snug">
                    {t(award.organization)}
                  </p>
                </div>
              </div>
              {award.url && (
                <a
                  href={award.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 text-gray-400 hover:text-brand-500 transition-colors"
                  aria-label="View certificate"
                >
                  <ExternalLink size={13} />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Rest of awards */}
        <AnimatePresence>
          <motion.div
            variants={staggerContainer(0.05)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="space-y-2"
          >
            {visibleRest.map((award) => (
              <motion.div
                key={award.id}
                variants={fadeInUp}
                className="flex items-center gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-brand-200 dark:hover:border-brand-800 transition-colors group"
              >
                <Trophy
                  size={16}
                  className={`flex-shrink-0 ${getTrophyColor(t(award.title))}`}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span
                      className={`text-xs font-bold text-white px-1.5 py-0.5 rounded ${YEAR_COLORS[award.year] ?? 'bg-gray-400'}`}
                    >
                      {award.year}
                    </span>
                    <span className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                      {t(award.title)}
                    </span>
                    <span className="text-xs text-gray-400 dark:text-gray-500 truncate">
                      — {t(award.organization)}
                    </span>
                  </div>
                </div>
                {award.url && (
                  <a
                    href={award.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-shrink-0 text-gray-300 dark:text-gray-600 hover:text-brand-500 transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="View certificate"
                  >
                    <ExternalLink size={13} />
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Show more */}
        {rest.length > 6 && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={viewportConfig}
            className="mt-6 text-center"
          >
            <button
              onClick={() => setShowAll((v) => !v)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-gray-300 dark:border-gray-700 hover:border-brand-400 dark:hover:border-brand-600 text-gray-600 dark:text-gray-300 text-sm font-medium transition-all duration-200"
            >
              {showAll
                ? lang === 'ko'
                  ? '접기'
                  : 'Show Less'
                : lang === 'ko'
                ? `${rest.length - 6}개 더 보기`
                : `Show ${rest.length - 6} More`}
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`}
              />
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
