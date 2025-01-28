"use client";
import { ProductType } from "@/types/CoffeType";
import React, { useState } from "react";
import ProductCard from "../server/ProductCard";

interface ProductListProps {
  products: ProductType[];
}

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const [activeButton, setActiveButton] = useState<string>("cafes");

 
  const handleButtonClick = (category: string) => {
    setActiveButton(category === activeButton ? null : category); 
  };

  return (
    <div className="flex flex-col items-center">
      <div className="w-full flex justify-center gap-6 mb-6">
        <button
          onClick={() => handleButtonClick("cafes")}
          className={`${
            activeButton === "cafes" 
              ? "bg-coffee-dark text-coffee-light" 
              : "bg-coffee-light text-coffee-dark" 
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
