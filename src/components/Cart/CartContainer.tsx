"use client"
import { useProductContext } from "@/context/ProductContext";
import React from "react";
import CartContent from "./CartContent";

function CartContainer() {
  const { cartVisible, toggleCart } = useProductContext();

  return (
    <div>
      {cartVisible && (
        <div className="fixed top-0 bg-brown-800 right-0 w-full sm:w-1/3 h-full bg-gradient-to-t from-brown-700 text-white z-50 transition-transform transform translate-x-0 animate-slideIn">
          <div className="p-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Tu Carrito</h3>
              <button onClick={toggleCart} className="text-red-500 text-2xl">
                x
              </button>
            </div>
            <CartContent />
          </div>
        </div>
      )}
    </div>
  );
}

export default CartContainer;
