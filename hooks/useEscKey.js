import { useEffect } from 'react';

/**
 * Hook que llama a `onEscape` cuando se pulsa la tecla Escape.
 * param {() => void} onEscape — función a invocar al pulsar Escape
 */
export default function useEscapeKey(onEscape) {
  useEffect(() => {
    if (typeof onEscape !== 'function') return;
    const handler = (e) => {
      if (e.key === 'Escape') {
        onEscape();
      }
    };
    window.addEventListener('keydown', handler);
    return () => {
      window.removeEventListener('keydown', handler);
    };
  }, [onEscape]);
}
