"use client";
import { useEffect, useState } from "react";
import DesktopBar from "./Desktop/DesktopBar";
import MobileBar from "./Mobile/MobileBar";
import MobileMenu from "./Mobile/MobileMenu";
import navLinks from "./NavLinksData";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Barra desktop/tablet */}
      <DesktopBar scrolled={scrolled} navLinks={navLinks} cartOpen={cartOpen} setCartOpen={setCartOpen}/>

      {/* Barra inferior mobile */}
      <MobileBar setMenuOpen={setMenuOpen} />

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