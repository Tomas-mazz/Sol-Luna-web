import React from 'react';

export default function ProductInfo({ name, description }) {
  return (
    <div className="text-center space-y-6 text-black">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-sm">{description}</p>
    </div>
  );
}