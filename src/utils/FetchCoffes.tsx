import { Coffee } from "@/types/CoffeType";

const fetchCoffes = async (): Promise<Coffee[]> => {
    const res = await fetch("http://localhost:3000/api/products", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("Error al obtener los datos");
    }
    return await res.json();
  };
  
  export default fetchCoffes;