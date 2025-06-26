// components/Navbar/Navbar.jsx
'use client';

import { useState, useContext, useRef, useEffect } from "react";
import DesktopBar from "./Desktop/DesktopBar";
import MobileBar from "./Mobile/MobileBar";
import MobileMenu from "./Mobile/MobileMenu";
import navLinks from "./NavLinksData";
import useScroll from "@/hooks/useScroll";
import { CartContext } from "../../context/CartContext";

export default function Navbar() {

  // 1. Saber si la página está scrolleada para estilos
  const scrolled = useScroll(40);

  // 2. Estados de menú y carrito
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  // 3. Obtener el carrito del contexto
  const { cart } = useContext(CartContext);

  // 4. Ref para comparar la longitud previa del carrito
  const prevLength = useRef(cart.length);

  // 5. Efecto: si aumenta la cantidad, abrir carrito
  useEffect(() => {
    if (cart.length > prevLength.current) {
      setCartOpen(true);
    }
    prevLength.current = cart.length;
  }, [cart]);

  return (
    <>
      <div className="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <DesktopBar
          scrolled={scrolled}
          navLinks={navLinks}
          cartOpen={cartOpen}
          setCartOpen={setCartOpen}
          cartItems={cart}
        />
      </div>

      <MobileBar
        setMenuOpen={setMenuOpen}
        cartOpen={cartOpen}
        setCartOpen={setCartOpen}
        cartItems={cart}
      />

      <MobileMenu
        open={menuOpen}
        setOpen={setMenuOpen}
        navLinks={navLinks}
      />
    </>
  );
}
