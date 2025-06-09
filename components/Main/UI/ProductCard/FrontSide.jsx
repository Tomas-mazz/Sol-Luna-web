'use client';
import React from 'react';

/**
 * Front side of ProductCard: shows image, name and price with a vertical-friendly aspect ratio.
 */
export default function FrontSide({ name, imageSrc, price, onFlip }) {
  return (
    <div
      className="absolute inset-0 cursor-pointer backface-hidden flex flex-col"  
      onClick={onFlip}
    >
      {/* Imagen principal: aspecto vertical 3:4 para fotos sacadas con celular */}
      <div className="w-full aspect-[3/4] mb-4 overflow-hidden rounded-t-2xl">
        <img src={imageSrc} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Nombre y precio */}
      <div className="px-4 pb-4">
        <h3 className="text-lg text-black font-mono mb-2 uppercase truncate">{name}</h3>
        <hr className='text-black'/>
        <p className="text-black my-2 font-bold">${price.toFixed(2)}</p>
      </div>
    </div>
  );
}