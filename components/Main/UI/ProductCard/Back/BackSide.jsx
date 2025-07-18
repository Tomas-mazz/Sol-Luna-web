'use client';
import React from 'react';
import styles from '../../../../../styles/ProductCard/Backside.module.css'
import BackPrice from './Backprince';
import QuantityControls from './QuantityControls';
import AddToCartButton from './AddToCardButton';
import ProductCarousel from './ProductCarousel';
import ProductDetails from './ProductDetails';
import ProductInfo from './ProductInfo';


export default function BackSide({
  product,
  quantity,
  increase,
  decrease,
  onAddToCart,
}) {
  return (
    <div className={styles.backSide}>
      <div className="flex flex-col h-full p-4">
        <div className="space-y-6">
        {/* Carrusel de imágenes del producto */}
        <ProductCarousel imagesBackSide={product.imagesBackSide} />

        {/* Info de producto */}
        <ProductInfo
          name={product.name}
          description={product.description}/>

        {/* Detalles del producto */}
        <ProductDetails id={product.id} />
        </div>

        <div className='flex-grow'/>

        <div className='flex flex-col w-full space-y-4'>
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
    </div>
  );
}
