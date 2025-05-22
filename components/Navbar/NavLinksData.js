// Expandir con submenús después para el dropdown de productos
const navLinks = [
  { label: "Inicio", href: "/" },
  { label: "Productos", href: "#",
    dropdown: [
      { label: "Mates", href: "/productos/mates" },
      { label: "Bombillas", href: "/productos/bombillas" },
      { label: "Yerberas", href: "/productos/yerberas" },
      { label: "Materas", href: "/productos/materas" },
    ]
  },
  { label: "Contacto", href: "/contacto" },
  { label: "Sobre Nosotros", href: "/sobre-nosotros" },
  { label: "Iniciar sesión", href: "/login" },
];

export default navLinks;
