'use client';
import React from 'react';

export default function HeroVideo() {
  return (
    <section className="w-full h-[80vh] md:h-[calc(100vh-4rem)] pt-0 md:pt-45 relative overflow-hidden">
      
      {/* Placeholder para el video */}
      <div className="w-full h-full border-4 border-dashed border-gray-300 flex items-center justify-center">
        <span className="text-gray-500 italic">Video Placeholder</span>
      </div>

      {/* Ejemplo de texto sobre el video */}
      <h1 className="absolute inset-0 flex items-center justify-center text-4xl font-bold text-white pointer-events-none">
        Tu Frase Aquí
      </h1>
    </section>
  );
}