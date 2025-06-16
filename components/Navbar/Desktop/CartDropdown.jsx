import { useRef, useEffect } from "react";
import CartItemList from "./CartItemList";
import styles from "../../../styles/Navbar.module.css"

export default function CartDropdown({ cartItems = [], open, setOpen, cartButtonRef, scrolled}) {
  const dropdownRef = useRef();
  const isEmpty = cartItems.length === 0;

  useEffect(() => {
    function handleClickOutside(event) {
      // Chequeo: si el menú está cerrado, no hago nada
      if (!open) return;
      // Si el click fue dentro del dropdown, no cierro
      if (dropdownRef.current && dropdownRef.current.contains(event.target)) return;
      // Si el click fue dentro del botón, no cierro
      if (cartButtonRef && cartButtonRef.current && cartButtonRef.current.contains(event.target)) return;
      // Si llegó acá: cerrar
      setOpen(false);
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open, setOpen, cartButtonRef]);

    // Usá cartItems directamente
  const total = cartItems.reduce((acc, prod) => acc + prod.price * prod.qty, 0);

  return open ? (
    <div
      ref={dropdownRef}
      className={`${styles.cartDropdown} ${scrolled ? styles.scrolledCarrito : styles.topCarrito}`}
    >
      <div className="p-4">
        <h3 className="text-center font-semibold text-2xl text-black mb-2">Carrito</h3>
        <CartItemList items={cartItems} />
      </div>
      <div className="border-t border-gray-200 my-2" />
      <div className="p-4 flex justify-between items-center text-black">
        <span className="font-semibold">Total:</span>
        <span className="text-xl font-bold">${total}</span>
      </div>
      <div className="px-4 pb-4">
        <button className={`w-full rounded-xl py-3 font-semibold transition
          ${isEmpty
            ? "bg-gray-300 text-gray-400 cursor-not-allowed"
            : "bg-green-600 text-white hover:bg-green-700 cursor-pointer"}
        `}
        disabled={isEmpty}>
          Pagar
        </button>
      </div>
    </div>
  ) : null;
}
