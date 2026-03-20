'use client';

import { motion } from 'framer-motion';
import { Linkedin, Mail, Github, Instagram, BookOpen, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { socialLinks } from '@/data';
import { staggerContainer, fadeInUp, scaleIn, viewportConfig } from '@/lib/animations';

const PLATFORM_ICONS: Record<string, typeof Mail> = {
  LinkedIn: Linkedin,
  'Google Scholar': BookOpen,
  GitHub: Github,
  Instagram: Instagram,
  Email: Mail,
};

const PLATFORM_COLORS: Record<string, string> = {
  LinkedIn: 'hover:bg-blue-600 hover:border-blue-600',
  'Google Scholar': 'hover:bg-brand-500 hover:border-brand-500',
  GitHub: 'hover:bg-gray-700 hover:border-gray-700',
  Instagram: 'hover:bg-pink-500 hover:border-pink-500',
  Email: 'hover:bg-red-500 hover:border-red-500',
};

export default function ContactSection() {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container-max section-padding">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="text-center mb-16"
        >
          <p className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3">
            {lang === 'ko' ? '연락처' : 'Contact'}
          </p>
          <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-4">
            {lang === 'ko' ? '함께 일해요' : "Let's Connect"}
          </h2>
          <p className="text-gray-500 dark:text-gray-400 max-w-lg mx-auto">
            {lang === 'ko'
              ? '연구 협업, 프로젝트 제안, 또는 단순한 인사도 환영합니다.'
              : 'Research collaborations, project proposals, or just saying hi — all welcome.'}
          </p>
        </motion.div>

        {/* Location */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex justify-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 text-sm">
            <MapPin size={14} className="text-brand-500" />
            {lang === 'ko' ? '서울특별시, 대한민국 🇰🇷' : 'Seoul, South Korea 🇰🇷'}
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="flex flex-wrap justify-center gap-4"
        >
          {socialLinks.map((link) => {
            const Icon = PLATFORM_ICONS[link.platform] ?? Mail;
            const colorClass = PLATFORM_COLORS[link.platform] ?? 'hover:bg-brand-500 hover:border-brand-500';
            return (
              <motion.a
                key={link.platform}
                variants={scaleIn}
                href={link.url}
                target={link.platform !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium transition-all duration-200 hover:text-white hover:-translate-y-0.5 hover:shadow-lg ${colorClass}`}
              >
                <Icon size={18} />
                <div>
                  <div className="text-sm font-semibold">{link.platform}</div>
                  <div className="text-xs text-gray-400 dark:text-gray-500 group-hover:text-white/70 transition-colors">
                    {link.label}
                  </div>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="mt-16 text-center"
        >
          <div className="inline-block p-8 rounded-3xl bg-gradient-to-br from-brand-500 to-accent-500 text-white">
            <h3 className="text-2xl font-black mb-2">
              {lang === 'ko' ? '이메일로 연락하기' : 'Reach out via email'}
            </h3>
            <p className="text-white/80 mb-5 text-sm">s_j_kim@korea.ac.kr</p>
            <a
              href="mailto:s_j_kim@korea.ac.kr"
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white text-brand-600 font-bold text-sm hover:bg-white/90 transition-colors"
            >
              <Mail size={14} />
              {lang === 'ko' ? '이메일 보내기' : 'Send Email'}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
