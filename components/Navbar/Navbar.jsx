"use client";
import { useState } from "react";
import DesktopBar from "./Desktop/DesktopBar";
import MobileBar from "./Mobile/MobileBar";
import MobileMenu from "./Mobile/MobileMenu";
import navLinks from "./NavLinksData";
import useScroll from "@/hooks/useScroll";

export default function Navbar() {
  const scrolled = useScroll(40); // Threshold de 40px
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const cartItems = []; //temporal para que no de error

  return (
    <>
      {/* Barra desktop/tablet */}
      <DesktopBar scrolled={scrolled} navLinks={navLinks} cartOpen={cartOpen} setCartOpen={setCartOpen}/>

      {/* Barra inferior mobile */}
      <MobileBar setMenuOpen={setMenuOpen} cartOpen={cartOpen} setCartOpen={setCartOpen} cartItems={cartItems} />

      {/* Menú lateral mobile */}
      <MobileMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        navLinks={navLinks}
      />
      
      {/* Fondo oscuro para menú mobile */}
      {menuOpen && (  
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}