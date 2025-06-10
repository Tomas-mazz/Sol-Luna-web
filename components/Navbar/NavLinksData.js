// Expandir con submenús después para el dropdown de productos
const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "#",
    dropdown: [
      { label: "Mates", href: "#mates" },
      { label: "Bombillas", href: "#bombillas" },
      { label: "Yerberas", href: "#yerberas" },
      { label: "Materas", href: "#materas" },
    ]
  },
  { label: "Contacto", href: "/contacto" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
];

export default navLinks;
