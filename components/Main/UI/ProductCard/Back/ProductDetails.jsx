import React from 'react';

export default function ProductDetails({ id }) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex space-x-4">
        <label className="inline-flex items-center space-x-1">
          <input
            type="radio"
            name={`shipping-${id}`}
            value="with"
          />
          <span>Con envío</span>
        </label>
        <label className="inline-flex items-center space-x-1">
          <input
            type="radio"
            name={`shipping-${id}`}
            value="without"
            defaultChecked
          />
          <span>Sin envío</span>
        </label>
      </div> 
      <button className="text-white border rounded-2xl p-2 bg-blue-600 hover:bg-blue-500">Más detalles</button>
    </div>
  );
}