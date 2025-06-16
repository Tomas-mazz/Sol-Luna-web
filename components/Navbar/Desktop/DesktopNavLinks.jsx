import Link from "next/link";
import DesktopDropdownMenu from "./DesktopDropdownMenu";
import styles from '../../../styles/Navbar.module.css';
import { ChevronDown } from "lucide-react";

export default function DesktopNavLinks({ scrolled, navLinks }) {
  const centerLinks = navLinks.filter(link =>
    ["Productos", "Contacto", "Sobre Nosotros"].includes(link.label)
  );

  return (
    <ul
      className={`
        flex gap-4 sm:gap-6 md:gap-8
        text-base sm:text-lg md:text-xl
        transition-all duration-300
        ${scrolled ? "text-base sm:text-lg" : "text-lg sm:text-xl"}
      `}
    >
      {centerLinks.map(link =>
        link.dropdown ? (
          <div className="relative group" key={link.label}>
            <span
              className={`
                font-medium cursor-pointer flex items-center gap-1
                ${styles.linkUnderline}
              `}
            >
              {link.label}
              <ChevronDown
                size={18}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </span>
            <DesktopDropdownMenu items={link.dropdown} />
          </div>
        ) : (
          <Link
            key={link.label}
            href={link.href}
            className={`${styles.linkUnderline} font-medium`}
          >
            {link.label}
          </Link>
        )
      )}
    </ul>
  );
}
