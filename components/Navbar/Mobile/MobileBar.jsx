import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import MobileCartDropdown from "./MobileCartDropdown";

export default function MobileBar({ setMenuOpen, cartOpen, setCartOpen, cartItems }) {
  return (
    <div className="fixed bottom-0 left-0 w-full h-16 bg-black flex items-center justify-between px-6 md:hidden z-50">

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
        <Image src="/logos/logo.png" alt="Logo" width={40} height={40} />
      </Link>

      {/* Carrito */}
      <Link href="/checkout" className="text-2xl" onClick={() => setCartOpen(true)}>
        <FontAwesomeIcon icon={faShoppingCart} size="1x" color="white" />
      </Link>

      <MobileCartDropdown open={cartOpen} setOpen={setCartOpen} cartItems={cartItems} />
    </div>
  );
}
