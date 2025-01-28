'use client'

import React, { useState } from 'react';
import {  FaShoppingCart, FaCoffee, FaHeadset } from 'react-icons/fa'; // Iconos
import Link from 'next/link';

const Navbar = () => {
  const [cartVisible, setCartVisible] = useState(false);

  // Función para mostrar/ocultar el carrito
  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <>
      {/* Navbar superior */}
      <div className="fixed top-0 left-0 right-0 bg-white z-20 shadow-md py-2">
        <div className="flex justify-between items-center px-6">
          <div className="flex items-center space-x-4">
          <FaHeadset className="text-gray-700 text-2xl" />

            <span className="font-semibold text-brown-800">Servicios al Cliente</span>
          </div>
          <div className="text-center flex-1 flex items-center justify-center">
            {/* Ícono de café junto al nombre */}
            <FaCoffee className="text-brown-800 text-2xl mr-2" />
            <h1 className="text-2xl font-bold text-brown-800">Toc Toc Café Gourmet</h1>
          </div>
          <div className="flex items-center space-x-4">
            <button
              className="text-white bg-brown-800 px-4 py-2 rounded-lg flex items-center"
              onClick={toggleCart}
            >
              <FaShoppingCart className="mr-2 text-black size-6" />
            </button>
          </div>
        </div>
      </div>

   {/* Carrito con animación */}
{cartVisible && (
  <div className="fixed top-0 bg-[#5a432a] right-0 w-1/3 h-full bg-gradient-to-t from-brown-200 to-brown-400 text-white z-50 transition-transform transform translate-x-0 animate-slideIn">
    <div className="p-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold">Tu Carrito</h3>
        <button onClick={toggleCart} className="text-red-500 text-2xl">
          x
        </button>
      </div>
      <p>Aquí aparecerán los productos que agregues.</p>
    </div>
  </div>
)}


      {/* Navbar inferior */}
      <div className="fixed top-14 left-0 right-0 bg-black/50 z-30">
        <div className="flex justify-center items-center py-3 px-6 backdrop-blur-md">
          <Link href="/" className="text-white font-bold mx-4">Inicio</Link>
          <Link href="/products" className="text-white font-bold mx-4">Productos</Link>
          <Link href="/reservations" className="text-white font-bold mx-4">Reservas</Link>
          <Link href="/contact" className="text-white font-bold mx-4">Contacto</Link>
          <Link href="/About us" className="text-white font-bold mx-4">Nosotros</Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
