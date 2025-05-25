import Link from "next/link";
import DesktopDropdownMenu from "./DesktopDropdownMenu";
import styles from '../../../styles/Navbar.module.css';
import { ChevronDown } from "lucide-react";

export default function DesktopNavLinks({ navLinks }) {
    
    const centerLinks = navLinks.filter(link => 
    ["Productos", "Contacto", "Sobre Nosotros"].includes(link.label)
    );

  return (
    <div className="flex-1 flex justify-center items-center gap-8">

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
    </div>
  );
}
