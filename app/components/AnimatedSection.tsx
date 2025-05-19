"use client";

import { useEffect, useRef, useState } from 'react';

interface AnimatedSectionProps {
  children: React.ReactNode;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale';
  delay?: number;
  className?: string;
}

export default function AnimatedSection({
  children,
  animation = 'fade-up',
  delay = 0,
  className = '',
}: AnimatedSectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      {
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700';
    const animationClasses = {
      'fade-up': 'translate-y-10 opacity-0',
      'fade-down': '-translate-y-10 opacity-0',
      'fade-left': 'translate-x-10 opacity-0',
      'fade-right': '-translate-x-10 opacity-0',
      'scale': 'scale-95 opacity-0',
    };

    return `${baseClasses} ${isVisible ? 'translate-y-0 translate-x-0 scale-100 opacity-100' : animationClasses[animation]}`;
  };

  return (
    <div ref={ref} className={`${getAnimationClasses()} ${className}`}>
      {children}
    </div>
  );
} 