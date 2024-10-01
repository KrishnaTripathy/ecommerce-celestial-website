import PropTypes from 'prop-types';
import { useState } from "react";

export default function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    category: [],
    size: [],
    color: [],
  });

  const handleFilterChange = (type, value) => {
    setFilters((prevFilters) => {
      const updatedFilters = { ...prevFilters };
      const typeArray = updatedFilters[type];

      if (typeArray.includes(value)) {
        updatedFilters[type] = typeArray.filter((item) => item !== value);
      } else {
        updatedFilters[type] = [...typeArray, value];
      }

      onFilterChange(updatedFilters);
      return updatedFilters;
    });
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">Category</h3>
          <div className="space-y-2">
            {["Design", "Business", "Marketing", "Content", "Development", "Data"].map((category) => (
              <label key={category} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={filters.category.includes(category)}
                  onChange={() => handleFilterChange("category", category)}
                />
                {category}
              </label>
            ))}
          </div>
        </div>
        {/* <div>
          <h3 className="font-medium mb-2">Size</h3>
          <div className="grid grid-cols-3 gap-2">
            {[6, 7, 8, 9, 10, 11, 12].map((size) => (
              <button
                key={size}
                className={`border rounded px-2 py-1 ${
                  filters.size.includes(size)
                    ? "bg-black text-white"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handleFilterChange("size", size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div> */}
        <div>
          <h3 className="font-medium mb-2">Color</h3>
          <div className="space-y-2">
            {["Black", "Gray", "Green", "Orange", "Purple", "Brown", "Blue", "Tan", "Red", "Yellow", "Pink", "Teal"
].map((color) => (
              <label key={color} className="flex items-center">
                <input
                  type="checkbox"
                  className="mr-2"
                  checked={filters.color.includes(color)}
                  onChange={() => handleFilterChange("color", color)}
                />
                {color}
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Add prop validation for onFilterChange
Filters.propTypes = {
  onFilterChange: PropTypes.func.isRequired, // onFilterChange is a required function prop
};
