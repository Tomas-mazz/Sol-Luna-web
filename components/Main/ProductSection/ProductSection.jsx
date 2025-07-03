'use client';
import React, { useState, useEffect } from 'react';
import { LayoutGroup, AnimatePresence, motion } from 'framer-motion';
import ProductCard from '../UI/ProductCard';
import BackSide from '../UI/ProductCard/Back/BackSide';

export default function ProductSection({
  title,                   // <-- nuevo
  products = [],           // <-- default a array vacío
  onAddToCart
}) {

  const [selectedId, setSelectedId] = useState(null);
  const [quantity, setQuantity] = useState(1);

  // Controles de cantidad
  const increase = () => setQuantity((q) => q + 1);
  const decrease = () => setQuantity((q) => Math.max(1, q - 1));

  // Cerrar con tecla Esc
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'Escape') setSelectedId(null);
    };
    if (selectedId !== null) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [selectedId]);

  return (
<LayoutGroup>
      {/* Título de sección */}
      {title && (
        <h2 className="text-4xl text-black font-bold my-20 text-center">
          {title}
        </h2>
      )}

      {/* Grid de cards */}
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onClick={(id) => {
              setSelectedId(id);
              setQuantity(1);
            }}
          />
        ))}
      </div>

      {/* Modal animado */}
      <AnimatePresence>
        {selectedId && (() => {
          const product = products.find((p) => p.id === selectedId);
          return (
            <React.Fragment key="modal">
              {/* Fondo semi-transparente */}
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={() => setSelectedId(null)}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />

              {/* Contenedor animado compartido */}
              <motion.div
                layoutId={`card-container-${selectedId}`}
                className={`
                  fixed z-50 bg-white overflow-hidden
                  inset-0 rounded-none
                  md:inset-auto md:top-1/2 md:left-1/2
                  md:w-1/2 md:h-4/5 md:-translate-x-1/2 md:-translate-y-1/2
                `}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              >
                <BackSide
                  product={product}
                  quantity={quantity}
                  increase={increase}
                  decrease={decrease}
                  onAddToCart={(item) => {
                    onAddToCart(item);
                    setSelectedId(null);
                  }}
                />
              </motion.div>
            </React.Fragment>
          );
        })()}
      </AnimatePresence>
    </LayoutGroup>
  );
}


