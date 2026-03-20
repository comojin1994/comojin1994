'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageProvider';
import { skills } from '@/data';
import { staggerContainer, fadeInUp, viewportConfig } from '@/lib/animations';

const CATEGORY_LABELS = {
  ai: { ko: 'AI / ML', en: 'AI / ML' },
  lang: { ko: '언어', en: 'Languages' },
  cloud: { ko: '인프라', en: 'Infrastructure' },
  mobile: { ko: '모바일', en: 'Mobile' },
};

const CATEGORY_COLORS = {
  ai: 'from-brand-500 to-brand-600',
  lang: 'from-cyan-500 to-blue-500',
  cloud: 'from-orange-400 to-orange-500',
  mobile: 'from-pink-500 to-purple-500',
};

export default function SkillsSection() {
  const { lang, t } = useLanguage();
  const categories = ['ai', 'lang', 'cloud', 'mobile'] as const;

  return (
    <section className="py-24 bg-white dark:bg-gray-950">
      <div className="container-max section-padding">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <p className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3">
            {lang === 'ko' ? '기술 스택' : 'Skills'}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
            {lang === 'ko' ? '기술 역량' : 'Tech Stack'}
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 gap-8"
        >
          {categories.map((cat) => {
            const catSkills = skills.filter((s) => s.category === cat);
            return (
              <motion.div key={cat} variants={fadeInUp} className="space-y-4">
                <h3 className="font-bold text-gray-900 dark:text-white text-sm uppercase tracking-wide">
                  {t(CATEGORY_LABELS[cat])}
                </h3>
                <div className="space-y-3">
                  {catSkills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-1.5">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-2 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1], delay: 0.1 }}
                          className={`h-full rounded-full bg-gradient-to-r ${CATEGORY_COLORS[cat]}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* GitHub Stats */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 text-center"
        >
          <p className="text-gray-500 dark:text-gray-400 text-sm mb-6">
            {lang === 'ko' ? 'GitHub 활동' : 'GitHub Activity'}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <img
              src="https://github-readme-stats.vercel.app/api?username=comojin1994&theme=dark&show_icons=true&count_private=true&hide_border=true&bg_color=0d1117"
              alt="GitHub Stats"
              className="rounded-xl"
              loading="lazy"
            />
            <img
              src="https://github-readme-stats.vercel.app/api/top-langs/?username=comojin1994&layout=compact&hide_progress=true&theme=dark&hide_border=true&bg_color=0d1117"
              alt="Top Languages"
              className="rounded-xl"
              loading="lazy"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
