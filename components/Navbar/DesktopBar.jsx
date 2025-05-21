import Link from "next/link";
import Image from "next/image";

export default function DesktopBar({ scrolled, navLinks }) {
  const logoSize = scrolled ? 50 : 60;

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
        <Link href="/" className="flex items-center transition-all duration-300">
          <Image src="/logos/logo.png" alt="Logo" width={logoSize} height={logoSize} />
        </Link>
        {/* Links centro */}
        <div className="flex-1 flex justify-center items-center gap-8">
          {navLinks.slice(1, 4).map(link => (
            <Link
              key={link.label}
              href={link.href}
              className="text-white hover:text-gray-300 font-medium transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Login y carrito */}
        <div className="flex items-center gap-8">
          <Link href="/login" className="text-white hover:text-gray-300">Iniciar Sesión</Link>
          <Link href="/checkout" className="text-2xl">🛒</Link>
        </div>
      </div>
    </nav>
  );
}