'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Briefcase, Rocket, Code2, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { career } from '@/data';
import type { CareerItem } from '@/data';
import { staggerContainer, fadeInLeft, viewportConfig } from '@/lib/animations';

const TYPE_CONFIG: Record<
  CareerItem['type'],
  { icon: typeof GraduationCap; color: string; bg: string }
> = {
  education: {
    icon: GraduationCap,
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-100 dark:bg-blue-900/30',
  },
  work: {
    icon: Briefcase,
    color: 'text-green-600 dark:text-green-400',
    bg: 'bg-green-100 dark:bg-green-900/30',
  },
  startup: {
    icon: Rocket,
    color: 'text-orange-600 dark:text-orange-400',
    bg: 'bg-orange-100 dark:bg-orange-900/30',
  },
  program: {
    icon: Code2,
    color: 'text-purple-600 dark:text-purple-400',
    bg: 'bg-purple-100 dark:bg-purple-900/30',
  },
};

export default function CareerSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="career" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container-max section-padding">
        {/* Header */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mb-16"
        >
          <p className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3">
            {lang === 'ko' ? '경력' : 'Career'}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
            {lang === 'ko' ? '여정' : 'My Journey'}
          </h2>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="relative"
        >
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-brand-400 via-brand-300 to-transparent hidden sm:block" />

          <div className="space-y-6">
            {career.map((item, index) => {
              const { icon: Icon, color, bg } = TYPE_CONFIG[item.type];
              const isLast = index === career.length - 1;
              return (
                <motion.div
                  key={item.id}
                  variants={fadeInLeft}
                  className="flex gap-4 sm:gap-6"
                >
                  {/* Icon */}
                  <div className="flex-shrink-0 relative">
                    <div
                      className={`w-12 h-12 rounded-2xl ${bg} flex items-center justify-center z-10 relative`}
                    >
                      <Icon size={20} className={color} />
                    </div>
                    {!isLast && (
                      <div className="absolute left-1/2 top-12 w-px h-6 bg-gray-200 dark:bg-gray-700 sm:hidden" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-2 pt-1">
                    <div className="flex items-start justify-between gap-2 flex-wrap">
                      <div>
                        <h3 className="font-bold text-gray-900 dark:text-white leading-snug">
                          {t(item.title)}
                        </h3>
                        <p className={`text-sm font-medium ${color}`}>{t(item.organization)}</p>
                      </div>
                      <span className="text-xs text-gray-400 dark:text-gray-500 font-medium bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-full flex-shrink-0">
                        {t(item.period)}
                      </span>
                    </div>
                    {item.description && (
                      <p className="mt-1.5 text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                        {t(item.description)}
                      </p>
                    )}
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-2 inline-flex items-center gap-1 text-xs text-brand-500 hover:text-brand-600 font-medium transition-colors"
                      >
                        {lang === 'ko' ? '증명서 보기' : 'View Certificate'}
                        <ExternalLink size={11} />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Others */}
        <motion.div
          variants={fadeInLeft}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-12 p-6 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
        >
          <h3 className="font-bold text-gray-900 dark:text-white mb-4 text-sm uppercase tracking-wide">
            {lang === 'ko' ? '기타 활동' : 'Other Highlights'}
          </h3>
          <ul className="space-y-2">
            {[
              {
                ko: '📍 NUS(싱가포르국립대)에서 "AI Personal Training service Home PT" 발표',
                en: '📍 Presented "AI Personal Training service Home PT" at NUS, Singapore',
                url: 'https://events.comp.nus.edu.sg/view/17028',
              },
              {
                ko: '📝 특허: 운동 자세 평가 장치 및 그 동작 방법',
                en: '📝 Patent: Exercise Posture Evaluation Device and Operating Method Thereof',
                url: 'https://drive.google.com/file/d/11Ij4bjhBtrfCMGSIZgM48SysQLjJ-Ygv/view?usp=sharing',
              },
              {
                ko: '🎓 NVIDIA DLI 2020 수료',
                en: '🎓 NVIDIA DLI 2020 Certification',
                url: 'https://github.com/comojin1994/comojin1994/blob/master/docs/NVIDIA%20DLI%20Certification.pdf',
              },
            ].map((item) => (
              <li key={item.ko} className="flex items-start gap-2">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-brand-500 dark:hover:text-brand-400 transition-colors leading-relaxed"
                >
                  {lang === 'ko' ? item.ko : item.en}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
