'use client';
import React, { useState } from 'react';
import { X } from 'lucide-react';
import styles from '../../../../../styles/FlipCardMobile.module.css'; // si lo estás usando

export default function FlipCardMobile({ front, onClose }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div className={styles.container} onClick={onClose}>
      <div
        className={`${styles.inner} ${flipped ? styles.flipped : ''}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* FRONT */}
        <div className={styles.side}>
          {front}
          <button
            onClick={() => setFlipped(true)}
            className="absolute bottom-4 right-4 bg-blue-600 text-white p-2 rounded-full"
          >
            Detalles →
          </button>
        </div>

        {/* BACK */}
        <div className={`${styles.side} ${styles.back}`}>
          <button
            onClick={() => setFlipped(false)}
            className="absolute top-4 right-4 p-2"
          >
            <X className="w-6 h-6" />
          </button>
          {/* Aquí pones el contenido “backside” a toda pantalla */}
          <div className="p-6">
            {/* …toda la info extendida… */}
          </div>
        </div>
      </div>
    </div>
  );
}

