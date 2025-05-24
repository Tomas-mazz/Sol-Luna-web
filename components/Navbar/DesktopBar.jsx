import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import DesktopNavLinks from "./DesktopNavLinks";
import CartDropdown from "./CartDropdown";

export default function DesktopBar({ scrolled, navLinks, cartOpen, setCartOpen }) {
  const logoSize = scrolled ? 50 : 60;
  const cartButtonRef = useRef();

  return (
    <nav className={`
      hidden md:flex
      fixed z-50 top-0 left-1/2 -translate-x-1/2 justify-center w-screen transition-all duration-300
      ${scrolled ? "pt-6" : ""}
    `}>
      <div className={`
        flex items-center justify-between pointer-events-auto transition-all duration-300
        rounded-full
        ${scrolled 
          ? "max-w-4xl w-full px-8 py-2 shadow-xl border border-gray-200 bg-black"
          : "max-w-7xl w-full px-12 py-2 text-xl border border-transparent bg-black"
        } 
      `}>
        {/* Logo */}
        <Link href="/" className="transition-all duration-300">
          <Image src="/logos/logo.png" alt="Logo" width={logoSize} height={logoSize} />
        </Link>

        {/* Links centro */}
        <DesktopNavLinks navLinks={navLinks} />
        
        {/* Login y carrito */}
        <div className="flex items-center gap-8">
          <Link href="/login" className="text-gray-300 hover:text-white">Iniciar Sesión</Link>
          {/* Carrito */}
          <div className="relative">
            <button
              ref={cartButtonRef}
              className="text-2xl"
              onClick={() => setCartOpen(open => !open)}
              aria-label="Ver carrito"
            >
              🛒
            </button>
            <CartDropdown
              open={cartOpen}
              setOpen={setCartOpen}
              cartButtonRef={cartButtonRef}
              cartItems={[]}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
