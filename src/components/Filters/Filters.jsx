import PropTypes from "prop-types";
import { useState } from "react";
import { CategoryList, ColorList } from "../../data/Filterdata";

export default function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    category: [],
    color: [],
   
  });

  const [openSections, setOpenSections] = useState({
    category: true,
    color: true,
   
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

  const toggleSection = (section) => {
    setOpenSections((prevOpenSections) => ({
      ...prevOpenSections,
      [section]: !prevOpenSections[section],
    }));
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg max-w-sm mx-auto">
      <h2 className="text-lg font-semibold mb-4 text-center">Filters</h2>
      <div className="space-y-4">
        

        <div>
          <h3
            className="font-medium mb-2 cursor-pointer flex justify-between items-center"
            onClick={() => toggleSection("color")}
          >
            <span>{openSections.color ? "▼" : "►"} Color</span>
          </h3>
          {openSections.color && (
            <div className="space-y-2">
              {ColorList.map((color) => (
                <label key={color} className="flex items-center text-sm">
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
          )}
        </div>

        <div>
          <h3
            className="font-medium mb-2 cursor-pointer flex justify-between items-center"
            onClick={() => toggleSection("category")}
          >
            <span>{openSections.category ? "▼" : "►"} Website Type</span>
          </h3>
          {openSections.category && (
            <div className="space-y-2">
              {CategoryList.map((type) => (
                <label key={type} className="flex items-center text-sm">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.category.includes(type)}
                    onChange={() => handleFilterChange("category", type)}
                  />
                  {type}
                </label>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

Filters.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
};
