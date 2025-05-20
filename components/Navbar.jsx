"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`
        fixed z-50 top-0 left-1/2 -translate-x-1/2 flex justify-center transition-all duration-300
        ${scrolled ? "pt-3" : ""}
        ${styles.navPointerWidth}
      `}
    >
      <div
        className={`
          flex items-center justify-between transition-all duration-300 pointer-events-auto
          ${scrolled
            ? "max-w-5xl w-full rounded-full px-7 py-2 shadow-xl border border-gray-200 bg-black"
            : "max-w-7xl w-full rounded-full px-12 py-3 bg-black"}
        `}
      >
        {/* Logo a la izquierda */}
        <div>
          <Link href="/">
            <Image
              src="/logos/logo.png"
              alt="Logo"
              width={44}
              height={44}
              priority
            />
          </Link>
        </div>
        {/* Links al centro */}
        <div className="flex gap-10">
          <Link href="#productos" className="hover:text-green-600 font-medium transition">
            Productos
          </Link>
          <Link href="/contacto" className="hover:text-green-600 font-medium transition">
            Contacto
          </Link>
          <Link href="/sobre-nosotros" className="hover:text-green-600 font-medium transition">
            Sobre Nosotros
          </Link>
        </div>
        {/* Login y Carrito a la derecha */}
        <div className="flex items-center gap-6">
          <Link href="/login" className="hover:text-green-600 font-medium transition">
            Iniciar Sesión
          </Link>
          <Link href="/checkout" className="hover:text-green-600 text-2xl transition">
            🛒
          </Link>
        </div>
      </div>
    </nav>
  );
}

