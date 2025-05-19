'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  const t = useTranslations('about');

  return (
    <section className="bg-morado-oscuro py-20 px-4" id="about">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Imagen de Ana */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative w-full h-96 md:h-[500px]"
        >
          <Image
            src="/images/landing2.jpeg"
            alt="Ana Jaramillo"
            fill
            className="object-cover rounded-xl shadow-xl"
          />
        </motion.div>

        {/* Texto */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-plata-oscuro mb-6">
            {t('title')}
          </h2>
          <p className="text-plata-oscuro text-lg leading-relaxed mb-4">
            {t('paragraph1')}
          </p>
          <p className="text-plata-oscuro text-lg leading-relaxed mb-4">
            {t('paragraph2')}
          </p>
          <ul className="mt-4 space-y-2 list-disc list-inside text-plata-oscuro">
            <li>{t('certifications.celta')}</li>
            <li>{t('certifications.ihcolt')}</li>
            <li>{t('certifications.neuro')}</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
