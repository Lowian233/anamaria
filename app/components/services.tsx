'use client';

import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';
import { FaChalkboardTeacher, FaHeadphones, FaCertificate } from 'react-icons/fa';
import Link from 'next/link';

export default function Services() {
  const t = useTranslations('services');
  // Array de iconos para cada servicio
  const icons = [FaChalkboardTeacher, FaHeadphones, FaCertificate];

  return (
    <section className="bg-morado-oscuro text-white py-20 px-4" id="servicios">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-plata-claro">
          {t('title')}
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => {
            const Icon = icons[i - 1];
            return (
              <Link
                key={i}
                href={`/servicios/${i}`}
                className="block"
              >
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-morado-oscuro border border-plata-claro rounded-xl p-6 shadow-lg hover:scale-[1.02] transition-transform hover:bg-morado-claro cursor-pointer group"
                >
                  <Icon className="text-4xl text-blue-400 mb-4 mx-auto group-hover:text-blue-600 transition-colors" />
                  <h3 className="text-xl font-bold text-plata-claro mb-4">
                    {t(`service${i}.title`)}
                  </h3>
                  <p className="text-plata-claro text-sm leading-relaxed">
                    {t(`service${i}.description`)}
                  </p>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
