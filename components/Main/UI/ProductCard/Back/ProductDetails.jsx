'use client';
import React, { useState } from 'react';
import HoverDropdown from './HoverDropdown';

export default function ProductDetails() {
  const [shipping, setShipping] = useState(null);
  const [custom, setCustom] = useState(null);
  const options = [{ value: 'si', label: 'Sí' }];

  const chips = [
    shipping && { key: 'shipping', label: shipping === 'si' ? 'Con envío' : 'Sin envío', clear: () => setShipping(null) },
    custom &&   { key: 'custom',   label: 'Personalizado',           clear: () => setCustom(null) }
  ].filter(Boolean);

  return (
    <>
      <div className="flex space-x-4 text-black">
        <HoverDropdown label="Envío"        options={options} onSelect={setShipping} />
        <HoverDropdown label="Personalizado" options={options} onSelect={setCustom}   />
      </div>

      {chips.length > 0 && (
        <div className="flex items-center space-x-2 mt-2 text-black">
          {chips.map(c => (
            <span key={c.key} className="flex items-center bg-black text-white px-3 py-1 rounded text-sm">
              {c.label}
              <button className="ml-2 font-bold" onClick={c.clear}>×</button>
            </span>
          ))}
          <button
            className="ml-4 border px-3 py-1 text-sm uppercase"
            onClick={() => { setShipping(null); setCustom(null); }}
          >
            Clear All
          </button>
        </div>
      )}
    </>
  );
}
