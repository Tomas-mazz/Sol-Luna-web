// components/CartItemList.jsx
export default function CartItemList({ items }) {
  if (items.length === 0)
    return (
      <div className="py-6 text-gray-500 text-center">El carrito está vacío.</div>
    );

  return (
    <ul className="flex flex-col gap-4 text-black">
      {items.map((item, i) => (
        <li key={i} className="flex justify-between items-center text-sm">
          <span className="font-medium">
            {item.name}{" "}
            <span className="text-gray-500 text-sm">x{item.qty}</span>
          </span>
          <span>${item.price * item.qty}</span>
        </li>
      ))}
    </ul>
  );
}
