'use client';
import React from 'react';
import styles from '../../../../../styles/ProductCard/Backside.module.css';
import BackPrice from './Backprince';
import QuantityControls from './QuantityControls';
import AddToCartButton from './AddToCardButton';

export default function BackSide({
  product,
  quantity,
  increase,
  decrease,
  onAddToCart,
}) {
  return (
    <div className={styles.backSide}>
      <div className="flex flex-col justify-between h-full p-4">
        {/* Precio total y descuento */}
        <BackPrice price={product.price} quantity={quantity} />

        {/* Controles de cantidad */}
        <QuantityControls
          quantity={quantity}
          increase={increase}
          decrease={decrease}
        />

        {/* Botón “Añadir al carrito” */}
        <AddToCartButton
          product={product}
          quantity={quantity}
          onAddToCart={onAddToCart}
        />
      </div>
    </div>
  );
}
