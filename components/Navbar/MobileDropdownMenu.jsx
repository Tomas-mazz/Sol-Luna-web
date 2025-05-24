import { useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function MobileDropdownMenu({ label, items, onNavigate }) {
    const [open, setOpen] = useState(false);

    return (
        <li>
      <button
        className="flex items-center w-full justify-between py-2 text-lg font-semibold "
        onClick={() => setOpen((v) => !v)}
      >
        <span className="flex items-center gap-2">
          {label}
          <ChevronDown
            size={18}
            className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          />
        </span>
      </button>
      <ul
        className={`
          flex flex-col gap-1 pl-6 mt-1 overflow-hidden transition-all duration-300
          ${open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
        `}
        style={{ transitionProperty: "max-height, opacity" }}
      >
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="block py-2 transition"
              onClick={onNavigate}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </li>
    )
}