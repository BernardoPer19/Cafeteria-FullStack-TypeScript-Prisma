"use client"
import { useProductContext } from "@/context/ProductContext";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

function ShowCart() {
    const { toggleCart } = useProductContext();

  return (
    <div>
      <button
        className="text-white bg-brown-800 px-4 py-2 rounded-lg flex items-center"
        onClick={toggleCart}
      >
        <FaShoppingCart className="mr-2 text-black size-6" />
      </button>
    </div>
  );
}

export default ShowCart;
