import React from "react";

const Category = () => {
  const categories = ["Nature", "Architecture", "Food"]; // Example categories

  return (
    <div>
      {/* Category content */}
      <ul className="flex justify-center space-x-4">
        {categories.map((category, index) => (
          <li
            key={index}
            className="text-xl font-medium text-gray-800 hover:text-blue-600 cursor-pointer"
          >
            {category}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
