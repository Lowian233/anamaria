'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FaStar, FaMedal, FaBook, FaGraduationCap, FaTrophy } from 'react-icons/fa';

const niveles = ['A1', 'A2', 'B1', 'B2', 'C1'];
const icons = [FaBook, FaStar, FaMedal, FaGraduationCap, FaTrophy];

export default function ProgresionMCER() {
  const t = useTranslations('mcer');

  return (
    <section className="bg-[#140d2c] py-20 px-4 text-white" id="progresion">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12" style={{ color: '#FFD700' }}>
          {t('title')}
        </h2>

        <div className="border-l border-[#FFD700] pl-6 space-y-12">
          {niveles.map((nivel, index) => {
            const Icon = icons[index];
            return (
              <motion.div
                key={nivel}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -left-[33px] top-1 w-6 h-6 bg-[#FFD700] rounded-full border-2 border-white flex items-center justify-center">
                  <Icon className="text-[#140d2c] text-lg" />
                </div>
                <h3 className="text-xl font-bold mb-1 flex items-center gap-2" style={{ color: '#FFD700' }}>
                  {nivel} – {t(`${nivel}.name`)}
                </h3>
                <p className="text-[#FFD700] text-sm mb-2 font-semibold">
                  {t(`${nivel}.description`)}
                </p>
                <button
                  className="mt-2 px-4 py-2 bg-[#FFD700] text-[#140d2c] rounded font-bold shadow transition-all duration-200
                    hover:bg-white hover:text-[#FFD700] hover:shadow-[0_0_16px_#FFD700]"
                >
                  {t('seeCourses', { defaultValue: 'Ver cursos' })}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
