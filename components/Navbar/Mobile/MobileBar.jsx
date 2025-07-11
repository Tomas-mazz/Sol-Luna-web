import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import MobileCartDropdown from "./MobileCartDropdown";

export default function MobileBar({ setMenuOpen, cartOpen, setCartOpen, cartItems }) {
  return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-black/90 flex items-center justify-between px-6 md:hidden z-10">

      {/* Menú hamburguesa */}
      <button
        onClick={() => setMenuOpen(true)}
        aria-label="Abrir menú"
        className="text-white"
      >
        <Menu className="w-8 h-8" />
      </button>

      {/* Logo */}
      <Link href="/" className="flex items-center">
        <Image src="/logos/logo_symbol.png" alt="Logo" width={50} height={50} />
      </Link>

      {/* Carrito */}
      <div className="relative">
      <Link href="/checkout" className="text-2xl" onClick={() => setCartOpen(true)}>
        <FontAwesomeIcon icon={faShoppingCart} size="1x" color="white" />
      </Link>

       {cartItems.length > 0 && (
          <span
            className="
              absolute -bottom-2 -left-3
              bg-green-500 text-white text-xs 
              w-5 h-5 flex items-center justify-center 
              rounded-full
            "
          >
            {cartItems.length}
          </span>
       )}

      </div>



      <MobileCartDropdown open={cartOpen} setOpen={setCartOpen} cartItems={cartItems} />
    </div>
  );
}
