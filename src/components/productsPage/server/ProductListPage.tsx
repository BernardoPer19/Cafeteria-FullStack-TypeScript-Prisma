import BtnAddToCart from "@/components/Cart/BtnAddToCart";
import BtnAddToFav from "@/components/Cart/BtnAddToFav";
import { Coffee } from "@/types/CoffeType";
import fetchCoffes from "@/utils/FetchCoffes";

const ProductListPage = async () => {
  const products: Coffee[] = await fetchCoffes();

  return (
    <main>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white shadow-xl rounded-lg overflow-hidden transform hover:scale-105 transition-all w-96 flex flex-col justify-center"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-2xl font-bold text-brown-900">
                    {product.name}
                  </h3>
                  <BtnAddToFav product={product} />
                </div>
                <p className="text-gray-700 text-sm mb-4">
                  {product.description}
                </p>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-lg font-bold text-brown-700">
                    ${product.price} USD
                  </span>
                  <span className="text-sm text-gray-500">
                    {product.country}
                  </span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3">
                  <BtnAddToCart product={product} />
                  <button className="flex items-center justify-center bg-[#927354] text-brown-800 py-2 px-4 rounded-lg hover:bg-[#b38d67] transition-all">
                    Ver Info
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            No hay productos disponibles por ahora
          </p>
        )}
      </div>
    </main>
  );
};

export default ProductListPage;
