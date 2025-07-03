'use client';
import React from 'react';

export default function FrontSide({ name, imageSrc, price, onFlip }) {
  return (
    <div
      className="absolute inset-0 cursor-pointer backface-hidden flex flex-col"
      onClick={onFlip}
    >
      {/* Imagen 3:4 con borde redondeado arriba */}
      <div className="w-full aspect-[3/4] mb-4 overflow-hidden rounded-t-2xl">
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Nombre, línea y precio */}
      <div className="px-4 pb-4">
        <h3 className="text-base md:text-xl text-black font-mono mb-2 truncate">
          {name}
        </h3>
        <hr className="text-black mb-2" />
        <p className="text-black my-2 font-bold">${price}</p>
      </div>
    </div>
  );
}

