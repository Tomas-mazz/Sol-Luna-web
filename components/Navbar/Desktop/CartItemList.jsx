import { useContext } from "react";
import { CartContext } from '../../../context/CartContext'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash }         from '@fortawesome/free-solid-svg-icons';


export default function CartItemList({ items }) {
  const { removeFromCart } = useContext(CartContext);

  if (items.length === 0) {
    return (
      <div className="py-6 text-gray-500 text-center">
        El carrito está vacío.
      </div>
    );
  }

  return (
    <ul className="flex flex-col gap-4">
      {items.map((item, i) => (
        <li key={i}>
          <div className="p-4 flex items-center justify-between border-0 border-b border-b-black">

            {/* Imagen a la izquierda */}
            <img
              src={item.imageSrc}
              alt={item.name}
              className="w-16 h-16 object-cover rounded"
            />

            {/* Título + “Envío no incluido” en el centro */}
            <div className="flex-1 mx-4 text-black">
              <div className="font-semibold text-sm">
                {item.name}
                {item.quantity > 1 && (
                  <span className="text-xs border rounded-2xl px-2 ml-2">
                    {item.quantity}u
                  </span>
                )}
              </div>
              <div className="text-xs mt-1 mr-1 inline-block px-1 bg-gray-300 border rounded-sm">
                Envío no incluido
              </div>
            </div>

            {/* Precio a la derecha */}
            <div className="flex flex-col font-semibold text-black text-base ">
              ${item.price}
              <button
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Eliminar artículo del carrito"
                  className="mt-2">
                <FontAwesomeIcon 
                    icon={faTrash} 
                    className="text-black mt-2 cursor-pointer" 
                    size="lg" 
                    aria-hidden="true" 
                />
              </button>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}