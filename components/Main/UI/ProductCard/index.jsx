'use client';
import React from 'react';
import { motion } from 'framer-motion';
import FrontSide from './Front/FrontSide';

export default function ProductCard({ product, onClick }) {
  return (
    <motion.div
      layoutId={`card-container-${product.id}`}
      onClick={() => onClick(product.id)}
      style={{ perspective: 1000 }}
      className="relative w-full max-w-xs mx-auto min-h-[300px] md:aspect-[3/4] cursor-pointer"
    >
      {/* Este div reproduce el blanco, redondeo y sombra original */}
      <div className="relative w-full h-full bg-white rounded-2xl shadow-lg overflow-hidden">
        <FrontSide
          name={product.name}
          imageFrontSide={product.imageFrontSide}       // Ojo: ahora sí usamos imageSrc
          price={product.price}
          onFlip={() => onClick(product.id)}
        />
      </div>
    </motion.div>
  );
}

