// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useEffect, useState } from "react";
// import styles from '../styles/Navbar.module.css'
// import { Menu, X} from 'lucide-react';

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     const onScroll = () => {
//       setScrolled(window.scrollY > 40);
//     };
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // Menu de links
//    const navLinks = [
//     { label: "Inicio", href: "/" },
//     { label: "Productos", href: "#productos" },
//     { label: "Contacto", href: "/contacto" },
//     { label: "Sobre Nosotros", href: "/sobre-nosotros" },
//     { label: "Iniciar sesión", href: "/login" },
//   ];

//   return (
//     <>
//       {/* --- NAVBAR DESKTOP/TABLET --- */}
//       <nav className={`
//         hidden md:flex
//         fixed z-50 top-0 left-1/2 -translate-x-1/2 justify-center w-screen transition-all duration-300
//         ${scrolled ? "pt-6" : ""}
//       `}>
//         <div className={`
//           flex items-center justify-between pointer-events-auto
//           max-w-5xl w-full rounded-full px-4 py-2 bg-black
//         `}>
//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <Image src="/logos/logo.png" alt="Logo" width={40} height={40} />
//           </Link>
//           {/* Links centro */}
//           <div className="flex-1 flex justify-center items-center gap-8">
//             {navLinks.slice(1, 4).map(link => (
//               <Link
//                 key={link.label}
//                 href={link.href}
//                 className="text-white hover:text-green-600 font-medium transition"
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//           {/* Login y carrito */}
//           <div className="flex items-center gap-6">
//             <Link href="/login" className="text-white hover:text-green-600">Iniciar Sesión</Link>
//             <Link href="/checkout" className="text-2xl text-white hover:text-green-600">🛒</Link>
//           </div>
//         </div>
//       </nav>

//       {/* --- BARRA INFERIOR MOBILE --- */}
//       <div className="fixed bottom-0 left-0 w-full h-16 bg-black flex items-center justify-between px-6 md:hidden z-50">
//         {/* Logo */}
//         <Link href="/" className="flex items-center">
//           <Image src="/logos/logo.png" alt="Logo" width={32} height={32} />
//         </Link>
//         {/* Carrito */}
//         <Link href="/checkout" className="text-2xl" >
//           🛒
//         </Link>
//         {/* Menú hamburguesa */}
//         <button
//           onClick={() => setMenuOpen(true)}
//           aria-label="Abrir menú"
//           className="text-white"
//         >
//           <Menu className="w-8 h-8" />
//         </button>
//       </div>

//       {/* --- MENÚ LATERAL MOBILE --- */}
//       <div
//         className={`
//           fixed top-100 border rounded-3xl left-0 w-2xl max-w-xs h-full bg-white text-black z-50 p-6 flex flex-col gap-6
//           transform transition-transform duration-300 ease-in-out
//           ${menuOpen ? "translate-x-0" : "-translate-x-full"}
//           md:hidden
//         `}
//       >
//         <button
//           onClick={() => setMenuOpen(false)}
//           className="self-end mb-8"
//           aria-label="Cerrar menú"
//         >
//           <X className="w-8 h-8" />
//         </button>
//         {navLinks.map(link => (
//           <Link
//             key={link.label}
//             href={link.href}
//             className="text-lg font-semibold"
//             onClick={() => setMenuOpen(false)}
//           >
//             {link.label}
//           </Link>
//         ))}
//       </div>
//       {/* Fondo oscuro cuando el menú está abierto */}
//       {menuOpen && (
//         <div
//           className="fixed inset-0 bg-black/30 z-40 md:hidden"
//           onClick={() => setMenuOpen(false)}
//         />
//       )}
//     </>
//   );
// }

