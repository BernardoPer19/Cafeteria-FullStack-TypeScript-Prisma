import Link from "next/link";
import React from "react";

async function NavBarInferior() {
  return (
    <>
      <div className="fixed top-14 left-0 right-0 bg-black/50 z-30">
        <div className="flex justify-center items-center py-3 px-6 backdrop-blur-md">
          <Link href="/" className="text-white font-bold mx-4">
            Inicio
          </Link>
          <Link href="/products" className="text-white font-bold mx-4">
            Productos
          </Link>
          <Link href="/reservations" className="text-white font-bold mx-4">
            Reservas
          </Link>
          <Link href="/contact" className="text-white font-bold mx-4">
            Contacto
          </Link>
          <Link href="/About us" className="text-white font-bold mx-4">
            Nosotros
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBarInferior;
