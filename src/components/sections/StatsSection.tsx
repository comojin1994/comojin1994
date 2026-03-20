'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageProvider';
import { stats } from '@/data';
import { staggerContainer, fadeInUp, viewportConfig } from '@/lib/animations';

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();
          const animate = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-r from-brand-600 via-brand-500 to-accent-500">
      <div className="container-max section-padding">
        <motion.div
          variants={staggerContainer(0.15)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.value}
              variants={fadeInUp}
              className="text-center text-white"
            >
              <div className="text-5xl sm:text-6xl font-black mb-2">
                <Counter target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-white/80 font-medium text-sm sm:text-base">
                {t(stat.label)}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
