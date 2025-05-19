'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

export default function AgendamientoCTA() {
  const t = useTranslations('cta');

  return (
    <section className="bg-gradient-to-r from-[#2e003e] to-[#1f103f] py-20 px-4 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <motion.div
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.1, 1] }}
          transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', delay: 0.5 }}
          className="flex justify-center mb-4"
        >
          <FaCalendarAlt className="text-5xl text-[#FFD700]" />
        </motion.div>

        <h2 className="text-3xl md:text-4xl font-bold mb-2 text-[#FFD700]">
          {t('title')}
        </h2>
        <p className="text-lg text-plata-claro mb-4 italic">
          {t('subtitle', { defaultValue: '¡Reserva tu primera sesión en minutos!' })}
        </p>
        <p className="text-lg text-plata-claro mb-8">
          {t('description')}
        </p>
        <ul className="text-plata-claro mb-8 text-base text-left max-w-md mx-auto">
          {t.raw('bullets').map((item: string, idx: number) => (
            <li key={idx}>• {item}</li>
          ))}
        </ul>
        <motion.a
          href="https://calendly.com/topscore-spanish/15min"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.07, boxShadow: '0 0 16px #FFD700' }}
          className="inline-flex items-center gap-3 px-6 py-3 bg-[#FFD700] text-[#1f103f] font-semibold rounded-lg transition"
        >
          <FaCalendarAlt />
          {t('button')}
        </motion.a>
      </motion.div>
    </section>
  );
}
