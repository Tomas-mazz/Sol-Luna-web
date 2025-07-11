import { useLayoutEffect } from 'react';

/**
 * Hook que bloquea el scroll del <body> mientras `locked` es true.
 * param {boolean} locked — si true, deshabilita scroll; si false, lo restablece.
 */
export default function useLockBodyScroll(locked) {
  useLayoutEffect(() => {
    const original = window.getComputedStyle(document.body).overflow;
    if (locked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = original;
    }
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}
