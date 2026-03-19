import { useEffect, useRef } from 'react';
import '../styles/CursorGotaPintura.css';

/**
 * Componente CursorGotaPintura
 * Crea un efecto visual de gotas de pintura cayendo detrás del puntero del mouse.
 * 
 * Características:
 * - Rastreo de movimiento del mouse
 * - Animación de caída con gravedad
 * - Desvanecimiento progresivo
 * - Auto-limpieza del DOM
 * - Desactivado en dispositivos móviles
 */
export default function CursorGotaPintura() {
  const containerRef = useRef(null);
  const lastTimeRef = useRef(0);
  const isEnabledRef = useRef(true);

  useEffect(() => {
    // Detectar si es dispositivo móvil usando matchMedia
    const mediaQuery = window.matchMedia('(hover: none) and (pointer: coarse)');
    
    const handleMediaChange = (e) => {
      isEnabledRef.current = !e.matches; // Desabilitar si es touch
    };

    // Verificar estado inicial
    isEnabledRef.current = !mediaQuery.matches;

    // Escuchar cambios (ej: conectar/desconectar dispositivo)
    mediaQuery.addEventListener('change', handleMediaChange);

    // Crear contenedor para las gotas
    if (!containerRef.current) {
      const container = document.createElement('div');
      container.className = 'cursor-gota-container';
      document.body.appendChild(container);
      containerRef.current = container;
    }

    /**
     * Genera una gota de pintura en las coordenadas especificadas
     */
    const crearGota = (x, y) => {
      if (!isEnabledRef.current) return;

      const gota = document.createElement('div');
      gota.className = 'gota-pintura';
      
      // Tamaño aleatorio entre 4px y 12px para más naturalidad
      const tamaño = Math.random() * 8 + 4;
      gota.style.width = tamaño + 'px';
      gota.style.height = tamaño + 'px';
      gota.style.left = x + 'px';
      gota.style.top = y + 'px';

      containerRef.current.appendChild(gota);

      // Calcular duración de la animación (1s a 1.5s)
      const duracion = Math.random() * 0.5 + 1;

      // Auto-eliminar después de que termine la animación
      const timeoutId = setTimeout(() => {
        gota.remove();
      }, duracion * 1000);

      // Evitar memory leaks si el componente se desmonta antes
      return () => clearTimeout(timeoutId);
    };

    /**
     * Manejador de movimiento del mouse con throttling para rendimiento
     */
    const handleMouseMove = (e) => {
      const now = Date.now();
      
      // Throttling: generar gotas cada 15ms máximo (⚡ rendimiento)
      if (now - lastTimeRef.current < 15) {
        return;
      }

      lastTimeRef.current = now;
      crearGota(e.clientX, e.clientY);
    };

    // Agregar event listener
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      mediaQuery.removeEventListener('change', handleMediaChange);
      
      // Limpiar contenedor si existe
      if (containerRef.current && containerRef.current.parentNode) {
        containerRef.current.remove();
        containerRef.current = null;
      }
    };
  }, []);

  // El componente no renderiza nada en React (todo es DOM nativo)
  return null;
}
