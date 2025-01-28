import React from "react";
import Image from "next/image";
import { ProductType } from "@/types/CoffeType";

interface ProductProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  return (
    <div className="w-80 bg-white rounded-xl shadow-xl p-6 transition-transform transform hover:scale-105 hover:shadow-2xl">
      <div className="relative w-full h-48 mb-4">
        <img
          src={product.img}
          alt={product.name}
          className="rounded-lg"
        />
      </div>
      <h2 className="text-2xl font-semibold text-coffee-dark mb-2">{product.name}</h2>
      <p className="text-sm text-coffee-text mb-4">{product.description}</p>
      <div className="flex items-center mb-4">
        <div className="text-yellow-500 text-sm mr-2">
          {"★".repeat(Math.round(product.rating))}{" "}
          {"☆".repeat(5 - Math.round(product.rating))}
        </div>
        <span className="text-gray-500 text-xs">({product.rating})</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <a
          className="bg-[#5a432a] text-white py-2 px-4 rounded-lg hover:bg-[#947048] transition-colors duration-300"
        >
          Comprar
        </a>
        <a
          className="bg-[#947048] text-white py-2 px-4 rounded-lg hover:bg-[#947048] transition-colors duration-300"
        >
          Ver Info
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
