'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Cpu, Trophy, Rocket } from 'lucide-react';
import { useLanguage } from '@/context/LanguageProvider';
import { staggerContainer, fadeInLeft, fadeInRight, viewportConfig } from '@/lib/animations';

const HIGHLIGHTS = [
  {
    icon: GraduationCap,
    title: { ko: '수학·AI 기반', en: 'Math & AI Foundation' },
    desc: {
      ko: '수학·통계학 학사(동국대)에서 고려대 AI 박사과정까지. 탄탄한 수학적 기초 위의 AI.',
      en: 'From B.S. in Math & Statistics (Dongguk) to AI Ph.D. at Korea University.',
    },
  },
  {
    icon: Cpu,
    title: { ko: '컴퓨터 비전 전문가', en: 'Computer Vision Expert' },
    desc: {
      ko: 'Object Detection, Pose Estimation, BCI 기반 표적 인식까지 폭넓은 CV 연구 경험.',
      en: 'Object detection, pose estimation, and BCI-based target recognition research.',
    },
  },
  {
    icon: Trophy,
    title: { ko: '18회 수상', en: '18 Awards' },
    desc: {
      ko: '국내외 AI 경진대회에서 18회 수상. 방위사업청장상, NIPA, 과기부 등 권위 있는 수상.',
      en: '18 awards from national/international AI competitions including government-sponsored.',
    },
  },
  {
    icon: Rocket,
    title: { ko: '창업 & 실전 경험', en: 'Startup & Industry' },
    desc: {
      ko: 'SW 마에스트로 10기 선발, EverySports 창업. 학문을 넘어 제품으로 연결.',
      en: 'SW Maestro 10th cohort, founded EverySports. From research to real products.',
    },
  },
];

export default function AboutSection() {
  const { lang, t } = useLanguage();

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-950">
      <div className="container-max section-padding">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <motion.div
            variants={fadeInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
          >
            <p className="text-brand-500 font-semibold text-sm uppercase tracking-widest mb-3">
              {lang === 'ko' ? '소개' : 'About Me'}
            </p>
            <h2 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
              {lang === 'ko' ? (
                <>AI로 세상을<br />바꾸는 연구자</>
              ) : (
                <>Researcher<br />Changing the World<br />with AI</>
              )}
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-400 leading-relaxed">
              <p>
                {lang === 'ko'
                  ? '안녕하세요, 고려대학교 AI 연구실에서 통합 석·박사 과정을 밟고 있는 김성진입니다. 수학과 통계학의 탄탄한 기초 위에 컴퓨터 비전과 BCI(Brain-Computer Interface) 연구를 진행하고 있습니다.'
                  : "Hi, I'm Sung-Jin Kim — an integrated Master-Ph.D. student at Korea University's AI Lab. I build AI systems at the intersection of computer vision and brain-computer interfaces, grounded in a strong math and statistics background."}
              </p>
              <p>
                {lang === 'ko'
                  ? 'SW 마에스트로 10기, EverySports 창업, NUS(싱가포르국립대) 발표 등 학문과 실전을 넘나들며 AI의 가능성을 증명해왔습니다. 18회의 수상 이력이 그 여정을 말해줍니다.'
                  : 'As SW Maestro 10th cohort, founder of EverySports, and presenter at NUS, I bridge research and industry. 18 awards across my career reflect that commitment.'}
              </p>
            </div>

            {/* Links */}
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="https://www.linkedin.com/in/sungjin-kim-0718"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://scholar.google.com/citations?hl=en&user=60YFOREAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-brand-500 dark:hover:border-brand-500 text-gray-700 dark:text-gray-300 text-sm font-semibold transition-colors"
              >
                Google Scholar
              </a>
              <a
                href="https://github.com/comojin1994"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full border border-gray-300 dark:border-gray-700 hover:border-brand-500 dark:hover:border-brand-500 text-gray-700 dark:text-gray-300 text-sm font-semibold transition-colors"
              >
                GitHub
              </a>
            </div>
          </motion.div>

          {/* Right: Highlights grid */}
          <motion.div
            variants={staggerContainer(0.1, 0.2)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {HIGHLIGHTS.map(({ icon: Icon, title, desc }) => (
              <motion.div
                key={title.ko}
                variants={fadeInRight}
                className="p-5 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-brand-300 dark:hover:border-brand-700 transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center mb-3 group-hover:bg-brand-500 transition-colors">
                  <Icon
                    size={20}
                    className="text-brand-600 dark:text-brand-400 group-hover:text-white transition-colors"
                  />
                </div>
                <h3 className="font-bold text-gray-900 dark:text-white mb-1 text-sm">{t(title)}</h3>
                <p className="text-gray-500 dark:text-gray-400 text-xs leading-relaxed">{t(desc)}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
