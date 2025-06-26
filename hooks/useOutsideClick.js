'use client'; 

import { useEffect } from 'react';

export default function useOutsideClick(ref, onOutsideClick, enabled = true, opts = {}) {
  const { onlyDesktop = false } = opts;

  useEffect(() => {
    if (!enabled) return;

    function handler(e) {
      if (onlyDesktop && window.innerWidth < 768) return;
      if (ref.current && !ref.current.contains(e.target)) {
        onOutsideClick();
      }
    }

    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [ref, onOutsideClick, enabled, onlyDesktop]);
}