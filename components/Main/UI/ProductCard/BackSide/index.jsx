'use client';
import BackImage from './BackImage';
import BackPrice from './BackPrice';
import QuantityControls from './QuantityControls';

export default function BackSide({
  product,
  quantity,
  increase,
  decrease,
  onAddToCart,
  onClose
}) {
  return (
    <div className="absolute inset-0 transform rotate-y-180 backface-hidden flex flex-col justify-between p-4">

      {/* Imagen o placeholder */}
      <BackImage images={product.images} name={product.name} />

      {/* Descripción */}
      <p className="text-sm text-gray-700 mb-2 line-clamp-3">
        {product.description || 'Descripción aún no disponible.'}
      </p>

      {/* Precio con posible descuento */}
      <BackPrice price={product.price} quantity={quantity} />

      {/* Controles de cantidad y añadir */}
      <QuantityControls
        quantity={quantity}
        increase={increase}
        decrease={decrease}
        onAdd={() => onAddToCart({ ...product, quantity })}
      />
    </div>
  );
}
