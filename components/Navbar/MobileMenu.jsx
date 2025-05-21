import Link from "next/link";
import { X } from "lucide-react"; // O tu propio SVG

export default function MobileMenu({ menuOpen, setMenuOpen, navLinks }) {
  return (
    <div
      className={`
        fixed top-3/6 left-0 w-3xl border rounded-4xl max-w-xs h-full bg-white text-black z-50 p-6 flex flex-col gap-6
        transform transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}
        md:hidden
      `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="self-end mb-8"
        aria-label="Cerrar menú"
      >
        <X className="w-8 h-8" />
      </button>
      {navLinks.map(link => (
        <Link
          key={link.label}
          href={link.href}
          className="text-lg font-semibold"
          onClick={() => setMenuOpen(false)}
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}
