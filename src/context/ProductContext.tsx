"use client";
import { useCart } from "@/hooks/useCart";
import { CartType } from "@/types/CoffeType";
import React, { createContext, useContext, useState, ReactNode } from "react";

interface ContextTypes {
  cartVisible: boolean;
  setCartVisible: React.Dispatch<React.SetStateAction<boolean>>;
  toggleCart: () => void;
  deleteToCart: (id: number) => void;
  addToCart: (product: CartType) => void;
  cart: CartType[];
  totalItems: number;
}

interface ChildrenContext {
  children: ReactNode;
}

// Crear el contexto con el tipo adecuado
const ProductContext = createContext<ContextTypes | undefined>(undefined);

export const ProductContextProvider = ({ children }: ChildrenContext) => {
  const [cartVisible, setCartVisible] = useState<boolean>(false);
  const { cart, addToCart, deleteToCart } = useCart();

  const toggleCart = () => {
    setCartVisible(!cartVisible);
  };

  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <ProductContext.Provider
      value={{
        cartVisible,
        setCartVisible,
        toggleCart,
        deleteToCart,
        addToCart,
        cart,
        totalItems,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);

  if (context === undefined) {
    throw new Error(
      "useProductContext debe usarse dentro de un ProductContextProvider"
    );
  }

  return context;
};
