"use client";

import { useState, useEffect } from 'react';

interface AnimatedTextProps {
  text: string;
  type?: 'typing' | 'reveal';
  speed?: number;
  className?: string;
}

export default function AnimatedText({
  text,
  type = 'reveal',
  speed = 50,
  className = '',
}: AnimatedTextProps) {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (type === 'typing') {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, speed);

      return () => clearInterval(interval);
    } else {
      // Efecto de revelación
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        },
        {
          threshold: 0.1,
        }
      );

      const element = document.getElementById('animated-text');
      if (element) {
        observer.observe(element);
      }

      return () => {
        if (element) {
          observer.unobserve(element);
        }
      };
    }
  }, [text, type, speed]);

  if (type === 'typing') {
    return (
      <span className={`inline-block ${className}`}>
        {displayText}
        <span className="animate-blink">|</span>
      </span>
    );
  }

  return (
    <span
      id="animated-text"
      className={`inline-block overflow-hidden ${className}`}
    >
      <span
        className={`block transform transition-all duration-1000 ${
          isVisible
            ? 'translate-y-0 opacity-100'
            : 'translate-y-full opacity-0'
        }`}
      >
        {text}
      </span>
    </span>
  );
} 