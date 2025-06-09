import '../styles/globals.css';
import Providers from '../components/Providers';
import Navbar    from '../components/Navbar/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <Providers>
          {/* Barra de navegación en todas las páginas */}
          <Navbar />

          {/* Contenedor principal con fondo y altura mínima */}
          <main className="min-h-screen bg-gray-200">
            {children}
          </main>
        </Providers>

        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        {/* Si en el futuro agregas un Footer global, lo puedes descomentar aquí */}
        {/* <Footer /> */}
      </body>
    </html>
  );
}

 