import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import DesktopNavLinks from "./DesktopNavLinks";
import CartDropdown from "./CartDropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function DesktopBar({ scrolled, navLinks, cartOpen, setCartOpen }) {
  const logoSize = scrolled ? 50 : 60;
  const cartButtonRef = useRef();

  return (
    <nav className={`
        hidden md:flex
        fixed z-50 top-0 left-1/2 -translate-x-1/2 justify-center w-full
        transition-all duration-300
        ${scrolled ? "pt-6" : ""}
    `}>
      <div className={`
        flex items-center justify-between pointer-events-auto transition-all duration-300
        rounded-full
        ${scrolled 
          ? "w-full px-4 sm:px-6 md:px-8 py-2 max-w-[90%] md:max-w-3xl lg:max-w-5xl shadow-xl border border-gray-200 bg-black"
          : "w-full px-4 sm:px-6 md:px-8 py-2 max-w-[95%] md:max-w-4xl lg:max-w-6xl border border-transparent bg-black"
        } 
      `}>
        {/* Logo */}
        <Link href="#top" className="transition-all duration-300">
          <Image src="/logos/logo.png" alt="Logo" width={logoSize} height={logoSize} />
        </Link>

        {/* Links centro */}
        <DesktopNavLinks navLinks={navLinks} scrolled={scrolled} />

        {/* Carrito */}
        <div className="relative pointer-events-auto">
          <button
            ref={cartButtonRef}
            className="coursor-pointer transition-all duration-300"
             onClick={() => setCartOpen(open => !open)}
             aria-label="Ver carrito"
          >
            <FontAwesomeIcon icon={faShoppingCart} size="xl" color="white" />
          </button>
          <CartDropdown
            open={cartOpen}
            setOpen={setCartOpen}
            cartButtonRef={cartButtonRef}
            cartItems={[]}
            scrolled={scrolled}
           />
        </div>
      </div>
    </nav>
  );
}
