'use client';

import { FaClipboardCheck } from 'react-icons/fa';
import { useTranslations } from 'next-intl';
import { motion, useInView } from 'framer-motion';
import Link from 'next/link';
import { useRef, useState, useEffect } from 'react';

export default function PruebaNivel() {
  const t = useTranslations('prueba');
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 0.5 }); // amount: 0.5 = 50% visible
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (isInView) {
      let current = 0;
      interval = setInterval(() => {
        current += 2;
        setProgress(current);
        if (current >= 100 && interval) clearInterval(interval);
      }, 15);
    } else {
      setProgress(0); // Reinicia si el usuario sale de la sección
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isInView]);

  return (
    <section className="bg-morado-oscuro text-plata-claro py-20 px-4" id="test-nivel">
      <div className="max-w-4xl mx-auto text-center" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          {/* Icono motivador */}
          <FaClipboardCheck className="mx-auto text-5xl text-[#FFD700] mb-4" />

          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-[#E5E4E2] mb-6">
            {t('title')}
          </h2>

          {/* Descripción */}
          <p className="text-gray-300 mb-8 text-lg">
            {t('description')}
          </p>

          {/* Barra de progreso animada con porcentaje */}
          <div className="w-full bg-gray-700 rounded-full h-3 mb-6 max-w-md mx-auto relative">
            <div
              className="bg-[#FFD700] h-3 rounded-full transition-all duration-700"
              style={{ width: `${progress}%` }}
            />
            <span
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-xs font-bold text-[#1f103f] bg-[#FFD700] px-2 py-0.5 rounded shadow"
              style={{ minWidth: 40 }}
            >
              {progress}%
            </span>
          </div>

          {/* Lista de beneficios */}
          <ul className="text-gray-300 mb-8 text-base text-left max-w-md mx-auto">
            {t.raw('bullets').map((item: string, idx: number) => (
              <li key={idx}>• {item}</li>
            ))}
          </ul>

          {/* Botón animado */}
          <Link
            href="/level-test"
            className="inline-block bg-[#FFD700] text-[#1f103f] px-8 py-3 font-semibold rounded-lg hover:scale-105 hover:shadow-lg transition-transform duration-200"
          >
            {t('button')}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
