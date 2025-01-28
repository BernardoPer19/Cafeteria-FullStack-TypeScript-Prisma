import { Coffee } from "@/types/CoffeType";
import { useEffect, useState } from "react";

const useFavorites = (product: Coffee) => {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  // Manejo de favoritos en Local Storage
  useEffect(() => {
    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setIsFavorite(favorites.includes(product.id));
  }, [product.id]);

  const toggleFavorite = () => {
    const favorites: number[] = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    if (favorites.includes(product.id)) {
      const updatedFavorites = favorites.filter((id) => id !== product.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
      setIsFavorite(false);
    } else {
      favorites.push(product.id);
      localStorage.setItem("favorites", JSON.stringify(favorites));
      setIsFavorite(true);
    }
  };

  return { isFavorite, toggleFavorite };
};

export default useFavorites;
