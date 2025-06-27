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

      {/* Vista móvil: grid de una columna */}
      <div className="grid grid-cols-1 gap-6 sm:hidden px-4">
        {React.Children.map(children, (child, idx) => (
          <div
            key={idx}
            className="cursor-pointer"
            onClick={() => setSelectedChild(child)}
          >
            {child}
          </div>
        ))}
      </div>

      {/* Vista desktop/tablet: grid de 2-3 columnas */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 gap-6 px-4">
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

