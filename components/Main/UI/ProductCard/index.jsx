'use client';
import React, { useState } from 'react';
import FrontSide from './FrontSide';
import BackSide  from './BackSide';

/**
 * ProductCard wrapper: handles flip state, perspective, and hover effects.
 */
export default function ProductCard({ product, onAddToCart }) {
  const [flipped, setFlipped]     = useState(false);
  const [quantity, setQuantity]   = useState(1);

  const handleFlip = () => setFlipped(prev => !prev);
  const increase   = () => setQuantity(q => q + 1);
  const decrease   = () => setQuantity(q => Math.max(1, q - 1));

  return (
    // Outer wrapper provides perspective
    <div className="relative w-full max-w-xs mx-auto aspect-[3/4] perspective">
      {/*
        Inner container with background, border-radius, shadow, and flip transform.
        Hover grows and raises shadow on the whole card.
      */}
      <div
        className={`
          relative w-full h-full
          bg-white rounded-2xl shadow-lg
          transform-style-3d duration-500 transition-transform
          hover:scale-105 hover:shadow-2xl
          ${flipped ? 'rotate-y-180' : ''}
        `}
        style={{ transformStyle: 'preserve-3d' }}
        onClick={handleFlip}
      >
        <FrontSide
          name={product.name}
          imageSrc={product.imageSrc}
          price={product.price}
        />
        <BackSide
          product={product}
          quantity={quantity}
          increase={increase}
          decrease={decrease}
          onAddToCart={onAddToCart}
        />
      </div>
    </div>
  );
}