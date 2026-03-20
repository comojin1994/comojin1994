'use client';

import { motion } from 'framer-motion';
import { ArrowDown, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';

const ROLES = {
  ko: ['AI 연구자', '창업가', '수상 전문가', '고려대 박사과정'],
  en: ['AI Researcher', 'Entrepreneur', '18x Award Winner', 'Korea Univ. Ph.D.'],
};

export default function HeroSection() {
  const { lang } = useLanguage();
  const roles = ROLES[lang];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-brand-950 dark:from-gray-950 dark:via-gray-900 dark:to-brand-950">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'linear-gradient(rgba(90,103,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(90,103,255,0.15) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-accent-400/15 rounded-full blur-3xl" />

      <div className="relative z-10 container-max section-padding text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/30 text-brand-400 text-sm font-medium mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          {lang === 'ko' ? '고려대학교 AI 연구실' : 'Korea University AI Lab'}
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-6xl sm:text-7xl md:text-8xl font-black text-white mb-2 tracking-tight"
        >
          {lang === 'ko' ? '김성진' : 'Sung-Jin Kim'}
        </motion.h1>

        {/* Animated roles */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap justify-center gap-2 mb-8"
        >
          {roles.map((role, i) => (
            <motion.span
              key={role}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
              className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium"
            >
              {role}
            </motion.span>
          ))}
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
          className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {lang === 'ko'
            ? '수학적 기초 위에 AI를 쌓고, 수상 18회로 그 가능성을 증명했습니다. 고려대에서 AI의 미래를 연구합니다.'
            : 'Built AI on a foundation of mathematics. Proven across 18 awards. Researching the future of AI at Korea University.'}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <button
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3.5 rounded-full bg-brand-500 hover:bg-brand-600 text-white font-semibold transition-all duration-200 shadow-lg shadow-brand-500/25 hover:shadow-brand-500/40 hover:-translate-y-0.5"
          >
            {lang === 'ko' ? '프로젝트 보기' : 'View Projects'}
          </button>
          <a
            href="https://scholar.google.com/citations?hl=en&user=60YFOREAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 text-white font-semibold transition-all duration-200 hover:-translate-y-0.5"
          >
            Google Scholar
            <ExternalLink size={14} />
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
            className="text-gray-500"
          >
            <ArrowDown size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
