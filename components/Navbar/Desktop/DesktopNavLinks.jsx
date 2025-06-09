import Link from "next/link";
import DesktopDropdownMenu from "./DesktopDropdownMenu";
import styles from '../../../styles/Navbar.module.css';
import { ChevronDown } from "lucide-react";

export default function DesktopNavLinks({ scrolled, navLinks }) {
    
    const centerLinks = navLinks.filter(link => 
    ["Productos", "Contacto", "Sobre Nosotros"].includes(link.label)
    );

  return (
    <ul className={`
        flex space-x-6 transition-all duration-300
        ${scrolled ? 'text-xl' : 'text-2xl'}
      `}>

      {centerLinks.map(link =>
        link.dropdown 
        ? (

          <div className="relative group" key={link.label}>
            <span className={`font-medium cursor-pointer flex items-center gap-1 ${styles.linkUnderline}`}>
              {link.label}
              <ChevronDown 
                size={18}
                className="transition-transform duration-300 group-hover:rotate-180"
              />
            </span>

            {/* Dropdown visible SOLO en hover */}
            <DesktopDropdownMenu items={link.dropdown} />

          </div>

        ) : (

          <Link
            key={link.label}
            href={link.href}
            className={styles.linkUnderline}
          >
            {link.label}
          </Link>
        )
      )}
    </ul>
  );
}
