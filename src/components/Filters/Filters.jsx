import PropTypes from 'prop-types';
import { useState } from 'react';

export default function Filters({ onFilterChange }) {
  const [filters, setFilters] = useState({
    category: [],
    color: [],
  });
  console.log("Filters",filters);

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
    <div className="bg-gray-100 p-4 rounded-lg">
      <h2 className="text-lg font-semibold mb-4">Filters</h2>
      <div className="space-y-4">

     
        <div>
          <h3 className="font-medium mb-2 cursor-pointer" onClick={() => toggleSection('category')}>
            {openSections.category ? '▼' : '►'} Category
          </h3>
          {openSections.category && (
            <div className="space-y-2">
              {['Design', 'Business', 'Marketing', 'Content', 'Development', 'Data'].map((category) => (
                <label key={category} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.category.includes(category)}
                    onChange={() => handleFilterChange('category', category)}
                  />
                  {category}
                </label>
              ))}
            </div>
          )}
        </div>

        <div>
          <h3 className="font-medium mb-2 cursor-pointer" onClick={() => toggleSection('color')}>
            {openSections.color ? '▼' : '►'} Color
          </h3>
          {openSections.color && (
            <div className="space-y-2">
              {['Black', 'Gray', 'Green', 'Orange', 'Purple', 'Brown', 'Blue', 'Tan', 'Red', 'Yellow', 'Pink', 'Teal'].map((color) => (
                <label key={color} className="flex items-center">
                  <input
                    type="checkbox"
                    className="mr-2"
                    checked={filters.color.includes(color)}
                    onChange={() => handleFilterChange('color', color)}
                  />
                  {color}
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
