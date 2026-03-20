'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { projects } from '@/data';
import { staggerContainer, fadeInUp, viewportConfig } from '@/lib/animations';

export default function ProjectsSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-900">
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
            {lang === 'ko' ? '프로젝트' : 'Projects'}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white">
            {lang === 'ko' ? '주요 프로젝트' : 'Featured Work'}
          </h2>
        </motion.div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              className={`relative flex flex-col p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group ${
                project.highlight
                  ? 'bg-white dark:bg-gray-800 border-brand-200 dark:border-brand-800 hover:border-brand-400 dark:hover:border-brand-600 hover:shadow-brand-500/10'
                  : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
              }`}
            >
              {/* Highlight badge */}
              {project.highlight && (
                <div className="absolute -top-3 right-4">
                  <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded-full bg-brand-500 text-white text-xs font-bold shadow-lg">
                    <Star size={10} fill="white" />
                    {lang === 'ko' ? '주요' : 'Featured'}
                  </span>
                </div>
              )}

              <div className="flex-1">
                <div className="inline-flex items-center px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs font-medium mb-3">
                  {t(project.role)}
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                  {t(project.title)}
                </h3>
                <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                  {t(project.description)}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-0.5 rounded text-xs bg-brand-50 dark:bg-brand-950/30 text-brand-700 dark:text-brand-300 font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Link */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 text-brand-500 hover:text-brand-600 dark:hover:text-brand-400 text-sm font-medium transition-colors"
                >
                  {lang === 'ko' ? '자세히 보기' : 'View Project'}
                  <ExternalLink size={13} />
                </a>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
