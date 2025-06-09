'use client';
import React from 'react';

/**
 * Back side of ProductCard: shows more images, description, price, and quantity controls.
 */
export default function BackSide({ product, quantity, increase, decrease, onAddToCart, onFlip }) {
  const { name, description, images = [], price } = product;

  // Calcular precio total y 10% de descuento a partir de 5 unidades
  const total = price * quantity;
  const hasDiscount = quantity >= 5;
  const discounted = hasDiscount ? total * 0.9 : total;

  return (
    <div
      className="absolute inset-0 transform rotate-y-180 backface-hidden flex flex-col justify-between p-4"
      onClick={onFlip}
    >
      {/* Imagen secundaria o placeholder con mismo aspecto 3:4 */}
      <div className="flex-1 mb-4 overflow-hidden rounded-lg">
        {images.length > 1 ? (
          <img
            src={images[1]}
            alt={`${name} - back`}
            className="w-full aspect-[3/4] object-cover rounded-lg"
          />
        ) : (
          <div className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center rounded-lg">
            <span className="text-gray-500">Más imágenes</span>
          </div>
        )}
      </div>

      {/* Descripción */}
      <p className="text-sm text-gray-700 mb-2 line-clamp-3">
        {description || 'Descripción aún no disponible.'}
      </p>

      {/* Precio */}
      <p className="text-lg text-black font-bold mb-4">
        {hasDiscount ? (
          <>
            <span className="line-through text-gray-500 mr-2">
              {'$' + total}
            </span>
            <span>{'$' + discounted}</span>
            {/* Badge de descuento */}
            <span className="ml-2 px-2 py-1 border border-gray-400 rounded text-xs font-semibold uppercase">
              10% OFF
            </span>
          </>
        ) : (
          <span>{'$' + total}</span>
  )}
      </p>

      {/* Controles de cantidad y botón */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <button
            onClick={e => { e.stopPropagation(); decrease(); }}
            className="px-2 py-1 bg-gray-500 text-white rounded cursor-pointer"
          >
            -
          </button>
          <span className='text-black'>{quantity}</span>
          <button
            onClick={e => { e.stopPropagation(); increase(); }}
            className="px-2 py-1 bg-gray-500 text-white rounded cursor-pointer"
          >
            +
          </button>
        </div>
        <button
          onClick={e => { e.stopPropagation(); onAddToCart({ ...product, quantity }); }}
          className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition cursor-pointer"
        >
          Añadir
        </button>
      </div>
    </div>
  );
}