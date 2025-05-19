import '../styles/globals.css';

// Layout general de la app: incluye Navbar y Footer en todas las páginas.
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        {/* Acá irá el Navbar */}
        {children}
        {/* Acá irá el Footer */}
      </body>
    </html>
  );
}

