import React from 'react';
import products from '@/data/OurProds';
import ProductList from '@/components/products/server/ProductList';

function Products() {
  return (
    <div className="mx-auto p-8 bg-gradient-to-b from-[#f1e0c6] to-[#f7e7c7] min-h-screen">
      <h1 className="text-4xl font-bold text-center text-coffee-dark mb-8">
        Nuestros Productos
      </h1>

      {/* Sección de productos */}
      <div className="w-full max-w-screen-xl mx-auto px-4 py-6 ">
        <ProductList products={products} />
      </div>
    </div>
  );
}

export default Products;
