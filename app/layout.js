import '../styles/globals.css'
import Providers from '../components/Providers';
import Navbar    from '../components/Navbar/Navbar';

export default function RootLayout({ children }) {
  return (
    <html lang="es" className='scroll-smooth'>
      <body>
        <Providers>
          {/* Barra de navegación en todas las páginas */}
          <Navbar />

          {/* Contenedor principal con fondo y altura mínima */}
          <main className="min-h-screen bg-gray-200 pt-16 pb-16 px-2 sm:px-0">
            {children}
          </main>
        </Providers>

        {/* <Footer /> */}
      </body>
    </html>
  );
}

 