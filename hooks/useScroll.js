'use client';
import { useState, useEffect } from 'react';

/**
 * useScroll
 * Devuelve true si el usuario ha scrolleado más allá de un umbral.
 * param {number} threshold - Valor en píxeles para activar el flag de scrolled.
 * returns {boolean} scrolled
 */
export default function useScroll(threshold = 0) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Handler para el evento scroll
    const handleScroll = () => {
      setScrolled(window.scrollY > threshold);
    };

    // Escucha el scroll de forma pasiva para mejor rendimiento
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Llamada inicial para setear el estado según posición actual
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold]);

  return scrolled;
}
