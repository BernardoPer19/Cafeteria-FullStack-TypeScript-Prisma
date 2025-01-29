import { CartType } from "@/types/CoffeType";
import { useEffect, useState } from "react";

export const useCart = () => {
  const [cart, setCart] = useState<CartType[]>([]);

  // Cargar el carrito del localStorage al cargar la página
  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  // Guardar el carrito en el localStorage cada vez que cambie
  useEffect(() => {
    if (cart.length > 0) {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

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
