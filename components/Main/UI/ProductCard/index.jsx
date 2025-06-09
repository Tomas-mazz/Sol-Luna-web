'use client';
import React, { useState } from 'react';
import FrontSide from './FrontSide';
import BackSide from './BackSide';

/**
 * ProductCard wrapper: handles flip state and quantity.
 */

export default function ProductCard({ product, onAddToCart }) {
  const [flipped, setFlipped] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleFlip = () => setFlipped(prev => !prev);
  const increase = () => setQuantity(q => q + 1);
  const decrease = () => setQuantity(q => Math.max(1, q - 1));

  return (
    <div className="relative w-full h-80 perspective">
      <div
        className={`relative w-full h-full duration-500 transform-style-3d ${
          flipped ? 'rotate-y-180' : ''
        }`}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <FrontSide
          name={product.name}
          imageSrc={product.imageSrc}
          price={product.price}
          onFlip={handleFlip}
        />
        <BackSide
          product={product}
          quantity={quantity}
          increase={increase}
          decrease={decrease}
          onAddToCart={onAddToCart}
          onFlip={handleFlip}
        />
      </div>
    </div>
  );
}