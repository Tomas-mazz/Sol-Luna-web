import React from 'react';

export default function ProductInfo({ name, description }) {
  return (
    <div className="text-center space-y-6">
      <h2 className="text-xl text-black font-semibold">{name}</h2>
      <p className="text-sm text-black">{description}</p>
    </div>
  );
}