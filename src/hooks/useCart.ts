import { CartType } from "@/types/CoffeType";
import { useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState<CartType[]>([]);

  const addToCart = (product: CartType) => {
    setCart((prevItem) => {
      const existProd = prevItem.find((item) => item.id === product.id);
      if (existProd) {
        return prevItem.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + product.quantity }
            : item
        );
      } else {
        return [...prevItem, { ...product }];
      }
    });
  };

  const deleteToCart = (id: number) => {
    setCart((prevItem) => prevItem.filter((item) => item.id !== id));
  };

  return {
    cart,
    addToCart,
    deleteToCart,
  };
};
