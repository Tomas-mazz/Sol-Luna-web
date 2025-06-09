'use client';
import { createContext, useState, useEffect } from 'react';

// 1. Crea el contexto que compartirás
export const CartContext = createContext();

// 2. Define el Provider que envolverá tu app
export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Al montar el componente, carga del localStorage
  useEffect(() => {
    const stored = localStorage.getItem('solLunaCart');
    if (stored) setCart(JSON.parse(stored));
  }, []);

  // Cada vez que cambie el carrito, lo guardo de nuevo
  useEffect(() => {
    localStorage.setItem('solLunaCart', JSON.stringify(cart));
  }, [cart]);

  // Funciones que exponen la API de tu carrito
  const addToCart    = item => setCart(prev => [...prev, item]);
  const removeFromCart = id => setCart(prev => prev.filter(i => i.id !== id));
  const clearCart    = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}