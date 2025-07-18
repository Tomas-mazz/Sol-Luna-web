import React from 'react';

export default function ProductInfo({ name, description }) {
  return (
    <div className="text-center">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
}