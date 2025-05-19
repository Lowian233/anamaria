'use client';
import { useTranslations } from 'next-intl';
import Hero from '../components/hero';
import About from '../components/about';
import TestimonialSlider from '../components/TestimonialSlider';
import Services from '../components/services';
import ProgresionMCER from '../components/ProgresionMCER';
import PruebaNivel from '../components/PruebaNivel';
import AgendamientoCTA from '../components/AgendamientoCTA';
interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

export default function HomePage() {
  const t = useTranslations('homepage');
  const testimonials = t.raw('testimonials') as Testimonial[];

  return (
    <div>
      <Hero />
      <About />
      <TestimonialSlider testimonials={testimonials} variant="video" />
      <TestimonialSlider testimonials={testimonials} variant="logo" />
      <TestimonialSlider testimonials={testimonials} variant="rating" />
      <Services />
      <ProgresionMCER />
      <PruebaNivel />
      <AgendamientoCTA />
    </div>
  );
} 

