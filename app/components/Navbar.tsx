'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslations, useLocale } from 'next-intl';
import MobileMenu from './MobileMenu';
import { useEffect, useState } from 'react';

const navigation = [
  { href: '/', label: 'home' },
  { href: '/sobre-ana', label: 'about' },
  { href: '/servicios', label: 'services' },
  { href: '/precios', label: 'pricing' },
  { href: '/blog', label: 'blog' },
  { href: '/contacto', label: 'contact', isPrimary: true }, // podemos usar isPrimary para el botón
];

export default function Navbar() {
  const pathname = usePathname();
  const t = useTranslations();
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full backdrop-blur-md shadow-sm transition-colors duration-300
      ${isScrolled ? 'bg-transparent' : 'bg-morado-claro'}
    `}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href={`/${locale}`} className="flex items-center space-x-2">
            <span className="text-xl font-bold text-blue-600">Ana María</span>
          </Link>
          {/* Menú móvil */}
          <div className="lg:hidden">
            <MobileMenu links={navigation.map((l) => ({ ...l, href: `/${locale}${l.href}` }))} />
          </div>

          {/* Navegación desktop */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {navigation.map((link) => {
              const fullPath = `/${locale}${link.href}`;
              const isActive =
                pathname === fullPath || pathname === `${fullPath}/`;

              return (
                <Link
                  key={link.href}
                  href={fullPath}
                  className={`text-sm font-medium transition-colors ${
                    isActive
                      ? 'text-plata-oscuro'
                      : 'text-plata-claro hover:text-blue-600'
                  }`}
                >
                  {t(`navigation.${link.label}`)}
                </Link>
              );
            })}
            {/* Selector de idioma */}
            <div className="ml-4 flex items-center space-x-2">
              <Link
                href={pathname.replace(/^\/(en|es)/, '/es')}
                locale="es"
                className={`px-2 py-1 rounded ${locale === 'es' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-blue-600 hover:text-white'}`}
              >
                Español
              </Link>
              <Link
                href={pathname.replace(/^\/(en|es)/, '/en')}
                locale="en"
                className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-blue-600 text-white' : 'text-gray-600 hover:bg-blue-600 hover:text-white'}`}
              >
                English
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

