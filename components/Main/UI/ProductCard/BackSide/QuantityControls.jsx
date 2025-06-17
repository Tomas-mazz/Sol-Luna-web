'use client';
export default function QuantityControls({ quantity, increase, decrease, onAdd }) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <button
          onClick={e => { e.stopPropagation(); decrease(); }}
          className="px-2 py-1 bg-gray-500 text-white rounded cursor-pointer"
        >
          –
        </button>
        <span className="text-black">{quantity}</span>
        <button
          onClick={e => { e.stopPropagation(); increase(); }}
          className="px-2 py-1 bg-gray-500 text-white rounded cursor-pointer"
        >
          +
        </button>
      </div>
      <button
        onClick={e => { e.stopPropagation(); onAdd(); }}
        className="px-4 py-2 bg-green-500 text-white rounded-xl hover:bg-green-600 transition cursor-pointer"
      >
        Añadir al carrito
      </button>
    </div>
  );
}
