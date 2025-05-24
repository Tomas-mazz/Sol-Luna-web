# Sol & Luna — Tienda de Mates Online

Bienvenido/a al repositorio del proyecto **Sol & Luna**, una tienda online de productos de mate. Este proyecto fue desarrollado con **Next.js 15**, **React**, **TailwindCSS** y **CSS Modules**.

---

## 🚀 Tecnologías usadas

- [Next.js 15](https://nextjs.org/)
- [React](https://react.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [CSS Modules](https://nextjs.org/docs/pages/building-your-application/styling/css-modules)
- [Lucide React Icons](https://lucide.dev/)

---

## 📁 Estructura del proyecto

/components
/Navbar
DesktopBar.jsx
DesktopNavLinks.jsx
DesktopDropdownMenu.jsx
MobileMenu.jsx
MobileDropdownMenu.jsx
/...otros componentes

/styles
Navbar.module.css
...otros estilos

/app
layout.js
page.js
...otras páginas y rutas

/public
/logos
logo.png

---

## 🖥️ Características principales

- **Navbar completamente responsive:**  
  - Navbar superior en desktop/tablet con logo a la izquierda, links al centro y login/carrito a la derecha.
  - Efectos de hover animados en los links, con subrayado que aparece/desaparece con transición.
  - Dropdown animado en “Productos” mostrando subcategorías (Mates, Bombillas, Yerberas, Materas).

- **Menú mobile profesional:**  
  - Barra inferior fija con iconos (hamburguesa, logo, carrito).
  - Menú lateral animado (slide-in) que cubre la pantalla y muestra los links principales.
  - Submenú desplegable para “Productos” en mobile, con animación y Chevron que rota.

- **Animaciones y UX:**  
  - Transiciones suaves en todos los menús y dropdowns.
  - Cierre de menú lateral al hacer click fuera o navegar.
  - Accesibilidad: soporte para teclado y roles ARIA en botones.

---

## ⚡ Instalación y uso

1. **Cloná el repositorio:**
   ```bash
   git clone https://github.com/TU_USUARIO/Sol-Luna-web.git
   cd Sol-Luna-web