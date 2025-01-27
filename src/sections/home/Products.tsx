import React from 'react';
import products from '@/data/OurProds';
import ProductList from '@/components/products/productList';
function Products() {
  return (
    <div className="container mx-auto p-5 ">
    <h1 className="text-3xl font-bold mb-6">Nuestros Productos</h1>
    <ProductList products={products} />
  </div>
  )
}

export default Products