'use client';
export default function BackPrice({ price, quantity }) {
  const total = price * quantity;
  const hasDiscount = quantity >= 5;
  const discounted = hasDiscount ? total * 0.9 : total;

  return (
    <p className="text-lg text-black font-bold mb-4">
      {hasDiscount ? (
        <>
          <span className="line-through text-gray-500 mr-2">${total}</span>
          <span>${discounted}</span>
          <span className="ml-2 px-2 py-1 border border-gray-400 rounded text-xs font-semibold uppercase">
            10% OFF
          </span>
        </>
      ) : (
        <span>${total}</span>
      )}
    </p>
  );
}
