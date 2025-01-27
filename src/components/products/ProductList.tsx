import { ProductType } from '@/types/CoffeType';
import React from 'react';
import ProductCard from './ProductCard';

interface ProductListProps {
  products: ProductType[];
}

const ProductList: React.FC<ProductListProps> = async ({ products }) => {
  return (
    <div className="flex flex-wrap gap-10 justify-center">
      {products.map(product => (
        <div key={product.id} className="flex gap-6 w-full "> 
          <ProductCard product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;