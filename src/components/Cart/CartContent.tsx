"use client";

import React from "react";
import { useProductContext } from "@/context/ProductContext";
import { FaTrashAlt } from "react-icons/fa";

function CartContent() {
  const { cart, deleteToCart, totalItems } = useProductContext();

  if (cart.length === 0) {
    return (
      <div className="p-6 text-center text-white">
        <h2 className="text-xl font-semibold">Tu carrito está vacío</h2>
        <p className="text-sm">¡Agrega productos para comenzar a comprar!</p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-white shadow-lg rounded-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Tu Carrito ({totalItems} {totalItems === 1 ? "artículo" : "artículos"})
      </h2>
      <ul className="space-y-4">
        {cart.map((item) => (
          <li
            key={item.id}
            className="flex items-center justify-between border-b pb-4 last:border-none"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.img} 
                alt={item.name}
                className="w-16 h-16 object-cover rounded-md border"
              />
              <div>
                <h3 className="text-lg font-medium text-gray-700">
                  {item.name}
                </h3>
                <p className="text-sm text-gray-500">
                  Cantidad: {item.quantity}
                </p>
                <p className="text-sm font-bold text-gray-800">
                  ${item.price}
                </p>
              </div>
            </div>
            <button
              onClick={() => deleteToCart(item.id)}
              className="text-red-600 hover:text-red-800 transition-colors"
              aria-label={`Eliminar ${item.name}`}
            >
              <FaTrashAlt size={20} />
            </button>
          </li>
        ))}
      </ul>
      <div className="mt-6 text-right">
        <p className="text-lg font-semibold text-gray-700">
          Total: $
          {cart
            .reduce((total, item) => total + item.price * item.quantity, 0)
            .toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default CartContent;
