import React from "react";
import Image from "next/image";
import { ProductType } from "@/types/CoffeType";

interface ProductProps {
  product: ProductType;
}

const ProductCard: React.FC<ProductProps> = async ({ product }) => {
  return (
    <div className=" bg-slate-950 w-80 border rounded-lg shadow-lg p-6  transition-transform transform hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        width={300}
        height={200}
        className="rounded-t-lg object-cover"
      />
      <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
      <p className="text-gray-600 mt-1">{product.description}</p>
      <div className="text-yellow-500 mt-2">
        {"★".repeat(Math.round(product.rating))}{" "}
        {"☆".repeat(5 - Math.round(product.rating))}
      </div>
      <a
        href={product.link}
        className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
      >
        Comprar
      </a>
    </div>
  );
};

export default ProductCard;
