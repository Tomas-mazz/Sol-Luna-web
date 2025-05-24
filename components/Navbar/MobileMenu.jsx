import Link from "next/link";
import { X } from "lucide-react";
import MobileDropdownMenu from "./MobileDropdownMenu";
import styles from "../../styles/Navbar.module.css"

export default function MobileMenu({ menuOpen, setMenuOpen, navLinks }) {
  return (
    <div
      className={`
        ${styles.mobileMenu}
        ${menuOpen ? styles.mobileMenuOpen : ""}
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

      <ul className="flex flex-col gap-3">
        {navLinks.map(link =>
          link.dropdown ? (
            <MobileDropdownMenu
              key={link.label}
              label={link.label}
              items={link.dropdown}
              onNavigate={() => setMenuOpen(false)}
            />
          ) : (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-lg font-semibold block py-2"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
