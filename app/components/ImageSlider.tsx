"use client";

import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';

interface ImageSliderProps {
  images: {
    src: string;
    alt: string;
    title?: string;
    description?: string;
  }[];
}

export default function ImageSlider({ images }: ImageSliderProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    const interval = setInterval(autoplay, 5000);
    return () => clearInterval(interval);
  }, [autoplay]);

  return (
    <div className="relative w-full overflow-hidden">
      <div className="embla" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((image, index) => (
            <div key={index} className="embla__slide flex-[0_0_100%] min-w-0 relative">
              <div className="relative h-[500px] w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-fondo-oscuro/70 to-transparent">
                  <div className="container h-full flex flex-col justify-center">
                    <h2 className="text-4xl font-bold text-plateado mb-4 animate-fade-in">
                      {image.title}
                    </h2>
                    <p className="text-xl text-plateado-claro max-w-xl animate-fade-in">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Indicadores */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className="w-3 h-3 rounded-full bg-plateado/50 hover:bg-plateado transition-colors"
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
} 