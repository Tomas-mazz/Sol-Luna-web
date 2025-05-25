import Link from "next/link";

export default function DesktopDropdownMenu({ items }) {
  return (
    <div
      className="
        absolute left-1/2 top-full -translate-x-1/2 mt-2
        w-48 bg-white shadow-xl rounded-xl z-20
        opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto
        group-hover:translate-y-2
        transition-all duration-400
        translate-y-0
        before:content-[''] before:absolute before:-top-4 before:left-0 before:w-full before:h-4
      "
    >
      <ul className="py-2">
        {items.map((item) => (
          <li key={item.label}>
            <Link
              href={item.href}
              className="block px-5 py-2 text-black hover:bg-gray-200 hover:text-black hover:font-semibold transition rounded-md"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
