'use client';
export default function AddToCartButton({ product, quantity, onAddToCart }) {
  const handleClick = (e) => {
    e.stopPropagation();
    const bruto = product.price * quantity;
    const finalPrice = quantity >= 5 ? bruto * 0.9 : bruto;
    onAddToCart({
      ...product,
      quantity,
      price: finalPrice
    });
  };

  return (
    <button
      onClick={handleClick}
      className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition cursor-pointer"
    >
      Añadir al carrito
    </button>
  );
}
