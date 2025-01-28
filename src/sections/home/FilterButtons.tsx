// sections/home/FilterButtons.tsx

import React from "react";

interface FilterButtonsProps {
  activeButton: string | null;
  onButtonClick: (category: string) => void;
}

const FilterButtons: React.FC<FilterButtonsProps> = ({ activeButton, onButtonClick }) => {
  return (
    <div className="w-full flex justify-center gap-6 mb-6">
      <button
        onClick={() => onButtonClick("cafes")}
        className={`${
          activeButton === "cafes"
            ? "bg-coffee-dark text-coffee-light"
            : "bg-coffee-light text-coffee-dark"
        } py-2 px-4 rounded-lg transition-colors hover:bg-coffee-light hover:text-coffee-dark`}
      >
        Cafés más pedidos
      </button>
      <button
        onClick={() => onButtonClick("tortas")}
        className={`${
          activeButton === "tortas"
            ? "bg-coffee-dark text-coffee-light"
            : "bg-coffee-light text-coffee-dark"
        } py-2 px-4 rounded-lg transition-colors hover:bg-coffee-dark hover:text-white`}
      >
        Tortas y Postres
      </button>
    </div>
  );
};

export default FilterButtons;
