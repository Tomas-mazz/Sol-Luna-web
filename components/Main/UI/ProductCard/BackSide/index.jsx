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
        onAdd={() => {
          // Calculamos precio bruto
          const bruto = product.price * quantity;
          // aplicamos el 10% OFF si son 5 o mas
          const finalPrice = quantity >= 5 ? Number(bruto * 0.9) : bruto;

          // enviamos al carrito el objeto completo con quantity y price ya totalizado
          onAddToCart({
            ...product,
            quantity,
            price: finalPrice
          })
        }}
      />
    </div>
  );
}
