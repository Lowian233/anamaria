'use client';
import React from "react";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations();

  return (
    <div className="relative h-screen w-full">
      <video src="/videos/vistadron.mov" autoPlay muted loop className="absolute inset-0 object-cover" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-white">{t('homepage.hero.title')}</h1>
        <p className="text-xl text-white mt-4">{t('homepage.hero.subtitle')}</p>
        <button className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg text-lg font-medium hover:bg-blue-700 transition-colors">
          {t('homepage.hero.cta')}
        </button>
      </div>
    </div>
  );
};
export default Hero;
