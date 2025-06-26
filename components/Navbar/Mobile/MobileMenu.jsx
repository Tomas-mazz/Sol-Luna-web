import Link from "next/link";
import { X } from "lucide-react";
import MobileDropdownMenu from "./MobileDropdownMenu";
import styles from "../../../styles/Navbar.module.css"

export default function MobileMenu({ open, setOpen, navLinks }) {
  return (
    <div
      className={`
        ${styles.mobileMenu}
        ${open ? styles.mobileMenuOpen : ""}
        md:hidden
      `}
    >
      <button
        onClick={() => setOpen(false)}
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
              onNavigate={() => setOpen(false)}
            />
          ) : (
            <li key={link.label}>
              <Link
                href={link.href}
                className="text-lg font-semibold block py-2"
                onClick={() => setOpen(false)}
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
