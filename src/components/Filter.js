import React from "react";

const FilterButton = ({ category, selectedCategory, setSelectedCategory }) => {
  const handleClick = () => {
    setSelectedCategory(category === "All" ? null : category);
  };

  const isActive = selectedCategory === null || selectedCategory === category;

  return (
    <button
      className="font-bold text-xl text-gray-800  hover:bg-gray-800 border-2 border-solid border-gray-800 hover:text-white py-4 px-8 rounded-lg"
      onClick={handleClick}
    >
      {category}
    </button>
  );
};

export default FilterButton;
