'use client';

import { useRef, useEffect, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CartItemList from "./CartItemList";
import styles from "../../../styles/Navbar.module.css";

export default function CartDropdown({ open, setOpen, cartButtonRef, scrolled }) {
  const { cart } = useContext(CartContext);
  const dropdownRef = useRef();

  // Cerrar al click fuera
  useEffect(() => {
  function handleClickOutside(event) {
    if (!open) return;

    // solo cerrar en desktop
    if (window.innerWidth < 768) return;

    // si clicas dentro del carrito o en el botón, no cierra
    if (
      dropdownRef.current?.contains(event.target) ||
      cartButtonRef?.current?.contains(event.target)
    ) {
      return;
    }

    setOpen(false);
  }

  document.addEventListener("mousedown", handleClickOutside);
  return () => document.removeEventListener("mousedown", handleClickOutside);
}, [open, setOpen, cartButtonRef]);

  const isEmpty = cart.length === 0;
  const total = cart.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);

  if (!open) return null;

  return (
    <div
      ref={dropdownRef}
      className={`${styles.cartDropdown} ${scrolled ? styles.scrolledCarrito : styles.topCarrito}`}
    >
      <div className="p-4">
        <h3 className="text-center font-semibold text-2xl text-black mb-2">Carrito</h3>
        <CartItemList items={cart} />
      </div>

      <div className="border-t border-gray-200 my-2" />

      <div className="p-4 flex justify-between items-center text-black">
        <span className="text-xl font-semibold">Total:</span>
        <span className="text-xl font-bold">${total}</span>
      </div>

      <div className="px-4 pb-4">
        <button
          className={`w-full rounded-xl py-3 font-semibold transition
            ${isEmpty
              ? "bg-gray-300 text-gray-400 cursor-not-allowed"
              : "bg-green-600 text-white hover:bg-green-700 cursor-pointer"
            }`}
          disabled={isEmpty}
        >
          Pagar
        </button>
      </div>
    </div>
  );
}
