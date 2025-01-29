"use client"
import { useProductContext } from "@/context/ProductContext";
import React from "react";

function BtnToggle() {
  const { cartVisible, setCartVisible } = useProductContext();

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };
  return (
    <div>
      <button onClick={toggleCart} className="text-red-500 text-2xl">
        x
      </button>
    </div>
  );
}

export default BtnToggle;
