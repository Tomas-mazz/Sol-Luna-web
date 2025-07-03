'use client';
import React, { useState } from 'react';
import FlipCardMobile from '../UI/ProductCard/BackSide/FlipCardMobile';

export default function ProductSection({ title, children }) {
  // Genera un id para enlaces de ancla
  const sectionId = title.toLowerCase();
  const [selectedChild, setSelectedChild] = useState(null);

  return (
    <section
      id={sectionId}
      className="mx-auto w-full sm:w-4/5 pt-16 pb-0"
    >
      {/* Título de la sección */}
      <h2 className="text-3xl font-bold mb-8 text-center text-black">
        {title}
      </h2>

      {/* Vista desktop/tablet: grid de 2-3 columnas */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {children}
      </div>

      {/* Overlay fullscreen flip en móvil */}
      {selectedChild && (
        <FlipCardMobile
          front={selectedChild}
          onClose={() => setSelectedChild(null)}
        />
      )}
    </section>
  );
}

