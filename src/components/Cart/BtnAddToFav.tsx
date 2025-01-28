"use client";
import useFavorites from "@/hooks/useFavorites";
import { Coffee } from "@/types/CoffeType";
import { FaHeart } from "react-icons/fa";

interface BtnAddToFavProps {
  product: Coffee;
}

function BtnAddToFav({ product }: BtnAddToFavProps) {
  const { isFavorite, toggleFavorite } = useFavorites(product);

  return (
    <button
      onClick={toggleFavorite}
      className={`text-2xl transition-all ${
        isFavorite ? "text-red-500" : "text-gray-400"
      }`}
      aria-label="Añadir a favoritos"
    >
      <FaHeart />
    </button>
  );
}

export default BtnAddToFav;
