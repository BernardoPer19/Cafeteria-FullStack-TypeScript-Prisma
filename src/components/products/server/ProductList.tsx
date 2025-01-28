"use client";
import { ProductType } from "@/types/CoffeType";
import React, { useState } from "react";
import ProductCard from "../server/ProductCard";

interface ProductListProps {
  products: ProductType[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  // Inicializamos el estado con 'cafes' como el botón activo por defecto
  const [activeButton, setActiveButton] = useState<string>("cafes");

  // Función para manejar el clic en los botones y cambiar el estado activo
  const handleButtonClick = (category: string) => {
    setActiveButton(category === activeButton ? null : category); // Si el botón ya está activo, lo desactiva
  };

  return (
    <div className="flex flex-col items-center">
      {/* Botones de filtrado */}
      <div className="w-full flex justify-center gap-6 mb-6">
        <button
          onClick={() => handleButtonClick("cafes")}
          className={`${
            activeButton === "cafes" 
              ? "bg-coffee-dark text-coffee-light" // Fondo oscuro para el botón activo
              : "bg-coffee-light text-coffee-dark" // Fondo claro para los demás botones
          } py-2 px-4 rounded-lg transition-colors hover:bg-coffee-light hover:text-coffee-dark`}
        >
          Cafés más pedidos
        </button>
        <button
          onClick={() => handleButtonClick("tortas")}
          className={`${
            activeButton === "tortas"
              ? "bg-coffee-dark text-coffee-light"
              : "bg-coffee-light text-coffee-dark"
          } py-2 px-4 rounded-lg transition-colors hover:bg-coffee-dark hover:text-white`}
        >
          Tortas y Postres
        </button>
        <button
          onClick={() => handleButtonClick("otros")}
          className={`${
            activeButton === "otros"
              ? "bg-coffee-dark text-coffee-light"
              : "bg-coffee-light text-coffee-dark"
          } py-2 px-4 rounded-lg transition-colors hover:bg-coffee-dark hover:text-white`}
        >
          Otros Productos
        </button>
      </div>

      {/* Mostrar los productos filtrados */}
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product) => (
          <div key={product.id} className="w-80">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <button className="bg-coffee-dark text-white px-6 py-4 mt-10 rounded-md" >Mira Nuestros Productos!</button>
    </div>
  );
};

export default ProductList;
