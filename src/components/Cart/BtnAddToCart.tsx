"use client";
import { Coffee } from "@/types/CoffeType";
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";

interface BtnAddToCartProps {
  product: Coffee;
}

function BtnAddToCart({ product }: BtnAddToCartProps) {
  const [isInCart, setIsInCart] = useState(false);

  const addToCart = () => {
    setIsInCart(true);
    // Aquí puedes agregar lógica para añadir al carrito global
    setTimeout(() => setIsInCart(false), 2000); // Efecto temporal
  };

  return (
    <button
      onClick={addToCart}
      className="flex items-center justify-center bg-[#5a432a] text-white py-2 px-4 rounded-lg hover:bg-[#7c5b38] transition-all"
    >
      <div className="flex gap-3 items-center justify-center">
        {isInCart ? "Añadido!" : "Añadir al carrito"}
        <FaShoppingCart className="mr-2" />
      </div>
    </button>
  );
}

export default BtnAddToCart;
