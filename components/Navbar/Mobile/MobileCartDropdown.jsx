import { X } from "lucide-react";
import CartItemList from "../Desktop/CartItemList";

export default function MobileCartDropdown({ open, setOpen, cartItems = [] }) {
  // Calcula el total
  const total = cartItems.reduce((acc, prod) => acc + prod.price * prod.quantity, 0);


  return (
    <div className={`fixed inset-0 z-[100] bg-white flex flex-col md:hidden transition-all duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}>

      {/* Botón cerrar */}
      <button
        onClick={() => setOpen(false)}
        className="absolute top-4 right-4 text-3xl text-black"
        aria-label="Cerrar carrito"
      >
        <X size={32} />
      </button>


      {/* Contenido */}
      <div className="flex-1 overflow-y-auto p-6 pt-16">
        <h3 className="flex justify-center font-bold text-4xl mb-4 pt-6 text-black">Carrito</h3>
        <CartItemList items={cartItems} />
      </div>


      {/* Total y pagar */}
      <div className="border-t border-gray-200 p-6">
        <div className="flex justify-between items-center text-black mb-4">
          <span className="font-semibold text-lg">Total:</span>
          <span className="text-xl font-bold">${total}</span>
        </div>
        <button
          className="w-full bg-green-600 text-white rounded-xl py-3 font-semibold hover:bg-green-700 transition disabled:bg-gray-300"
          disabled={cartItems.length === 0}
        >
          Pagar
        </button>
      </div>
    </div>
  );
}
