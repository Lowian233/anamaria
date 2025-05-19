"use client";

import { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import Image from 'next/image';


interface Testimonial {
  name: string;
  role: string;
  image: string;
  text: string;
}

interface TestimonialSliderProps {
  testimonials: Testimonial[];
  variant?: 'video' | 'logo' | 'rating';
}

export default function TestimonialSlider({ testimonials, variant }: TestimonialSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  let extraContent = null;

  if (variant === 'video') {
    extraContent = (
      <div className="flex justify-center">
        <video
          src="/videos/vistadron.mov"
          autoPlay
          muted
          loop
          className="rounded-lg shadow-lg w-full max-w-md"
        />
      </div>
    );
  } else if (variant === 'logo') {
    extraContent = (
      <div className="flex flex-col items-center">
        <img src="/images/landing5.jpeg" alt="Logo" className="w-40 mb-4" />
        <p className="text-center text-plata-claro">Más de 500 alumnos satisfechos</p>
      </div>
    );
  } else if (variant === 'rating') {
    extraContent = (
      <div className="flex flex-col items-center bg-white/10 rounded-lg p-8 shadow-lg">
        <div className="flex mb-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.388-2.46a1 1 0 00-1.176 0l-3.388 2.46c-.784.57-1.838-.196-1.539-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.045 9.394c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69l1.286-3.967z"/></svg>
          ))}
        </div>
        <p className="text-lg text-plata-claro font-semibold">4.9/5 en más de 200 reseñas</p>
        <p className="text-sm text-plata-claro/70 mt-2">Valoración media de nuestros estudiantes</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-16">
      {/* Columna 1: Slider */}
      <div>
        <div className="relative w-full max-w-4xl mx-auto">
          {/* Main Slider */}
          <div className="relative h-[400px] overflow-hidden rounded-lg">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={`absolute w-full h-full transition-all duration-500 ${
                  index === currentIndex
                    ? 'opacity-100 translate-x-0'
                    : index < currentIndex
                    ? 'opacity-0 -translate-x-full'
                    : 'opacity-0 translate-x-full'
                }`}
              >
                <div className="relative h-full bg-morado-oscuro/5 p-8 rounded-lg border border-gray-800">
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className="relative w-24 h-24 mb-6 rounded-full overflow-hidden">
                      <Image
                        src={testimonial.image || '/images/landing2.jpeg'}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <p className="text-plata-claro text-lg mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div>
                      <h3 className="text-xl font-bold text-plata-claro">
                        {testimonial.name}
                      </h3>
                      <p className="text-plata-claro/60">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-bg/80 rounded-full flex items-center justify-center text-white hover:text-primary-gold transition-colors"
            aria-label="Previous testimonial"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-dark-bg/80 rounded-full flex items-center justify-center text-white hover:text-primary-gold transition-colors"
            aria-label="Next testimonial"
          >
            <FaChevronRight />
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isAnimating) {
                    setIsAnimating(true);
                    setCurrentIndex(index);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-primary-gold w-6'
                    : 'bg-white/40 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
      {/* Columna 2: Extra content */}
      <div>
        {extraContent}
      </div>
    </div>
  );
} 