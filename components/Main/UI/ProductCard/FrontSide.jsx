'use client';
import React from 'react';

/**
 * Front side of ProductCard: shows image, name and price.
 */

export default function FrontSide({ name, imageSrc, price, onFlip }) {
  return (
    <div
      className="absolute inset-0 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition transform cursor-pointer backface-hidden"
      onClick={onFlip}
    >

      {/* Imagen principal */}
      <div className="w-full h-48 mb-4 overflow-hidden rounded-t-2xl">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>
      
      {/* Nombre y precio */}
      <div className="px-4 pb-4">
        <h3 className="text-lg font-semibold mb-2 uppercase">{name}</h3>
        <p className="text-gray-600 mb-4 font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}