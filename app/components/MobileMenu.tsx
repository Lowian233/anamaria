"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MobileMenuProps {
  links: {
    href: string;
    label: string;
  }[];
}

export default function MobileMenu({ links }: MobileMenuProps) {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Bloquear el scroll cuando el menú está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <div className="lg:hidden">
      {/* Botón del menú */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 p-2 text-plateado hover:text-plateado-claro"
        aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
      >
        <div className="relative h-6 w-6">
          <span
            className={`absolute left-0 h-0.5 w-6 transform bg-current transition-all duration-300 ${
              isOpen ? 'top-3 rotate-45' : 'top-2'
            }`}
          />
          <span
            className={`absolute left-0 h-0.5 w-6 transform bg-current transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'top-3'
            }`}
          />
          <span
            className={`absolute left-0 h-0.5 w-6 transform bg-current transition-all duration-300 ${
              isOpen ? 'top-3 -rotate-45' : 'top-4'
            }`}
          />
        </div>
      </button>

      {/* Overlay del menú */}
      <div
        className={`fixed inset-0 z-40 bg-fondo-oscuro/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Menú */}
      <div
        className={`fixed right-0 top-0 z-40 h-full w-64 transform bg-fondo p-6 shadow-lg transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <nav className="mt-16 space-y-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 text-lg transition-colors ${
                pathname === link.href
                  ? 'text-plateado-claro'
                  : 'text-plateado hover:text-plateado-claro'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botón de contacto */}
        <div className="absolute bottom-6 left-6 right-6">
          <Link
            href="/contacto"
            className="block w-full rounded-lg bg-plateado px-4 py-3 text-center text-fondo transition-colors hover:bg-plateado-claro"
            onClick={() => setIsOpen(false)}
          >
            Contactar
          </Link>
        </div>
      </div>
    </div>
  );
} 