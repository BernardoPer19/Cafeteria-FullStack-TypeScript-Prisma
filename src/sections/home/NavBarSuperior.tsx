import ShowCart from "@/components/Cart/ShowCart";
import React from "react";
import { FaCoffee, FaHeadset } from "react-icons/fa"; // Iconos

function NavBarSuperior() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-20 shadow-md py-2">
      <div className="flex justify-between items-center px-6">
        <div className="flex items-center space-x-4">
          <FaHeadset className="text-gray-700 text-2xl" />
          <span className="font-semibold text-brown-800">Servicios al Cliente</span>
        </div>

        <div className="text-center flex-1 flex items-center justify-center">
          <FaCoffee className="text-brown-800 text-2xl mr-2" />
          <h1 className="text-2xl font-bold text-brown-800">Toc Toc Café Gourmet</h1>
        </div>

        <div className="flex items-center space-x-4">
          <ShowCart />
        </div>
      </div>
    </div>
  );
}

export default NavBarSuperior;
