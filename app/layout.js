import '../styles/globals.css';
import Navbar from '@/components/Navbar/Navbar';
// import Foooter from '@/components/Footer';

// Layout general de la app: incluye Navbar y Footer en todas las páginas.
export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className='bg-gray-50 text-gray-900'>
        <Navbar />  
        <main className='min-h-screen bg-gray-50'>{children}</main>

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

        
        {/* <Footer /> */}
      </body>
    </html>
  );
}

 