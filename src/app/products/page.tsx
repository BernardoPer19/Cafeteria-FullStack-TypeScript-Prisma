import fetchCoffes from "@/utils/FetchCoffes";
import { Coffee } from "@/types/CoffeType";
import ProductListPage from "@/components/productsPage/server/ProductListPage";

const ProductPage = async () => {
  const products: Coffee[] = await fetchCoffes();

  return (
    <main className="  bg-[#bd9f80]">
     <div className="max-w-[1280px] m-auto mt-24 ">
     <div className="p-6 bg-beige-100 min-h-screen">
        <h1 className="text-4xl font-bold mb-8 text-center text-brown-800">
          Bienvenido a Nuestra Tienda de Café
        </h1>
       <ProductListPage/>
      </div>
     </div>
    </main>
  );
};

export default ProductPage;
