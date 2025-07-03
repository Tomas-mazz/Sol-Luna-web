'use client';
export default function QuantityControls({ quantity, increase, decrease }) {
  return (
    <div className="flex items-center justify-start mb-4 space-x-4">
      <button
        onClick={e => { e.stopPropagation(); decrease(); }}
        className="px-2 py-1 bg-gray-500 text-white rounded cursor-pointer"
      >
        –
      </button>
      <span className="text-black font-medium">{quantity}</span>
      <button
        onClick={e => { e.stopPropagation(); increase(); }}
        className="px-2 py-1 bg-gray-500 text-white rounded cursor-pointer"
      >
        +
      </button>
    </div>
  );
}
