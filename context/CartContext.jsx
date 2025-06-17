'use client';

import { createContext, useState, useEffect } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //  Al montar, leo de localStorage
  useEffect(() => {
    const stored = localStorage.getItem('solLunaCart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  //  Cada vez que cambia `cart`, lo guardo
  useEffect(() => {
    localStorage.setItem('solLunaCart', JSON.stringify(cart));
  }, [cart]);

  //  Funciones del contexto
  const addToCart = item => {
    setCart(prev => [...prev, item]);
  };
  const removeFromCart = id => {
    setCart(prev => prev.filter(i => i.id !== id));
  };
  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}
