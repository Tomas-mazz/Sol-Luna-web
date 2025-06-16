'use client';
import React from 'react';
import ProductCard from '../UI/ProductCard';

export default function ProductSection({ title, children }) {
  // Genera un id para enlaces de ancla
  const sectionId = title.toLowerCase();

  return (
    <section
      id={sectionId}
      className="mx-auto w-4/5 py-16"
    >
      {/* Título de la sección */}
      <h2 className="text-3xl font-bold mb-8 text-center text-black">
        {title}
      </h2>

      {/* Grid de productos: 2 columnas en móvil, 3 en desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {/* Aquí se insertarán ProductCard u otros elementos hijos */}
        {children}
      </div>
    </section>
  );
}
