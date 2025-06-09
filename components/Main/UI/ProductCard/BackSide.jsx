'use client';
import React from 'react';

/**
 * Back side of ProductCard: shows more images, description, and quantity controls.
 */
export default function BackSide({ product, quantity, increase, decrease, onAddToCart, onFlip }) {
  const { name, description, images = [] } = product;

  return (
    <div
      className="absolute inset-0 bg-white rounded-2xl shadow-lg p-4 transform rotate-y-180 backface-hidden flex flex-col justify-between"
      onClick={onFlip}
    >

      {/* Imagen secundaria o placeholder */}
      <div className="flex-1 mb-4 overflow-hidden rounded-lg">
        {images.length > 1 ? (
          <img
            src={images[1]}
            alt={`${name} - back`}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gray-100 flex items-center justify-center rounded-lg">
            <span className="text-gray-500">Más imágenes</span>
          </div>
        )}
      </div>

      {/* Descripción */}
      <p className="text-sm text-gray-700 mb-4">
        {description || 'Descripción aún no disponible.'}
      </p>

      {/* Controles de cantidad y botón */}
      <div className="flex items-center justify-between">
        
        {/* Ajustar cantidad */}
        <div className="flex items-center space-x-2">
          <button
            onClick={e => { e.stopPropagation(); decrease(); }}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            -
          </button>
          <span>{quantity}</span>
          <button
            onClick={e => { e.stopPropagation(); increase(); }}
            className="px-2 py-1 bg-gray-200 rounded"
          >
            +
          </button>
        </div>
        {/* Botón Añadir */}
        <button
          onClick={e => { e.stopPropagation(); onAddToCart({ ...product, quantity }); }}
          className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition"
        >
          Añadir
        </button>
      </div>
    </div>
  );
}