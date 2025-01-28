"use client";

import { FaShoppingCart } from "react-icons/fa";
import { useProductContext } from "@/context/ProductContext";
import { Coffee } from "@/types/CoffeType";

interface BtnAddToCartProps {
  product: Coffee;
}

function BtnAddToCart({ product }: BtnAddToCartProps) {
  const { addToCart, cart } = useProductContext();  // Usamos el ProductContext en vez de un hook externo

  // Comprobamos si el producto ya está en el carrito
  const isInCart = cart.some((item) => item.id === product.id);

  return (
    <button
      onClick={() => addToCart({ ...product, quantity: 1 })}
      disabled={isInCart}  // Deshabilitamos el botón si el producto ya está en el carrito
      className={`flex items-center justify-center py-2 px-4 rounded-lg transition-all ${
        isInCart
          ? "bg-gray-400 text-gray-800 cursor-not-allowed"
          : "bg-[#5a432a] text-white hover:bg-[#7c5b38]"
      }`}
    >
      <div className="flex gap-3 items-center justify-center">
        {isInCart ? "Ya en el carrito" : "Añadir al carrito"}
        <FaShoppingCart />
      </div>
    </button>
  );
}

export default BtnAddToCart;
