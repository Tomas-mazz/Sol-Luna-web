'use client';

import { useRef, useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import CartItemList from "./CartItemList";
import styles from "../../../styles/Navbar.module.css";
import useOutsideClick from "../../../hooks/useOutsideClick";

export default function CartDropdown({ open, setOpen, cartButtonRef, scrolled }) {
  const { cart } = useContext(CartContext);
  const dropdownRef = useRef();

  // Usamos el hook para cerrar al hacer click fuera (solo en desktop)
  useOutsideClick(
    dropdownRef,
    () => setOpen(false),
    open,
    { onlyDesktop: true }
  );

  const isEmpty = cart.length === 0;
  const total   = cart.reduce((acc, prod) => acc + prod.price, 0);

  if (!open) return null;

  return (
    <div
      ref={dropdownRef}
      className={`${styles.cartDropdown} ${scrolled ? styles.scrolledCarrito : styles.topCarrito}`}
    >
      <div className="p-4">
        <h3 className="text-center font-semibold text-2xl text-black mb-2">
          Carrito
        </h3>
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
