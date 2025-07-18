'use client';
import React, { useState } from 'react';

export default function ProductDetails() {
  const [shipping, setShipping] = useState('no');
  const [custom, setCustom] = useState('no');

  return (
    <div className="grid grid-cols-2 gap-4 text-black">
      {/* Opción Envío */}
      <div className="flex flex-col">
        <label htmlFor="shipping-select" className="mb-1 font-medium">Envío</label>
        <select
          id="shipping-select"
          value={shipping}
          onChange={e => setShipping(e.target.value)}
          className="border rounded-2xl p-2"
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
      {/* Opción Personalizado */}
      <div className="flex flex-col">
        <label htmlFor="custom-select" className="mb-1 font-medium">Personalizado</label>
        <select
          id="custom-select"
          value={custom}
          onChange={e => setCustom(e.target.value)}
          className="border rounded-2xl p-2 "
        >
          <option value="no">No</option>
          <option value="si">Sí</option>
        </select>
      </div>
    </div>
)};