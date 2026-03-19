import { useEffect, useState } from 'react';

/**
 * Hook personalizado para detectar cambios en el scroll
 * Útil para cambios dinámicos en navbar u otros elementos sticky
 */
export function useScrollDetection() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 25) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolled;
}

/**
 * Hook personalizado para detectar cuando un elemento entra en el viewport
 * Usa IntersectionObserver para eficiencia
 */
export function useIntersectionObserver(options = {}) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState(null);

  useEffect(() => {
    if (!ref) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        // Dejar de observar una vez que sea visible (opcional, para optimizar)
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      ...options
    });

    observer.observe(ref);

    return () => {
      observer.disconnect();
    };
  }, [ref, options]);

  return [setRef, isVisible];
}
