import { ProductType } from "@/types/CoffeType";
import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Link from "next/link";

interface ProductListProps {
  products: ProductType[];
}

const ProductList: React.FC<ProductListProps> = async ({ products }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-wrap gap-5 justify-center">
        {products.map((product) => (
          <div key={product.id} className="w-80">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <Link
      href={"/products"}
      >
        <button className="bg-coffee-dark text-white hover:bg-coffee-text transition-colors hover:scale-105 px-6 py-4 mt-10 rounded-md">
          Mira Nuestros Productos!
        </button>
      </Link>
    </div>
  );
};

export default ProductList;
