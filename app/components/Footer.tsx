'use client';

import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="bg-[#140d2c] text-gray-300 py-10 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
        {/* Marca */}
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Top Score Spanish</h3>
          <p className="text-sm text-gray-400">
            {t('description')}
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">{t('nav')}</h4>
          <ul className="space-y-2 text-sm">
            <li><Link href={`/${locale}`}>{t('links.home')}</Link></li>
            <li><Link href={`/${locale}/sobre-ana`}>{t('links.about')}</Link></li>
            <li><Link href={`/${locale}/servicios`}>{t('links.services')}</Link></li>
            <li><Link href={`/${locale}/precios`}>{t('links.pricing')}</Link></li>
            <li><Link href={`/${locale}/contacto`}>{t('links.contact')}</Link></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">{t('connect')}</h4>
          <div className="flex space-x-4 text-xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            <a href="https://wa.me/573001112222" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
        © {new Date().getFullYear()} Top Score Spanish. {t('rights')}
      </div>
    </footer>
  );
}

