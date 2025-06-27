import React from 'react';
import images from '../assets/images';

const FilterOptions = ({ onFilter }) => {
  const genres = ['All', 'Fiction', 'Non-Fiction', 'Science', 'History', 'Biography'];
  const prices = ['All', 'Under $10', '$10-$20', '$20-$30', 'Over $30'];

  return (
    <div id="FilterOptions_1" className="bg-white p-4 rounded-lg shadow-sm border border-gray-200">
      <h2 id="FilterOptions_2" className="text-lg font-semibold mb-4">Filters</h2>
      
      <div id="FilterOptions_3" className="mb-4">
        <h3 id="FilterOptions_4" className="font-medium mb-2">Genre</h3>
        <div id="FilterOptions_5" className="space-y-2">
          {genres.map((genre, index) => (
            <label key={genre} id={`FilterOptions_6_${index}`} className="flex items-center">
              <input
                type="radio"
                name="genre"
                value={genre}
                onChange={(e) => onFilter('genre', e.target.value)}
                className="mr-2"
              />
              {genre}
            </label>
          ))}
        </div>
      </div>

      <div id="FilterOptions_7" className="mb-4">
        <h3 id="FilterOptions_8" className="font-medium mb-2">Price Range</h3>
        <div id="FilterOptions_9" className="space-y-2">
          {prices.map((price, index) => (
            <label key={price} id={`FilterOptions_10_${index}`} className="flex items-center">
              <input
                type="radio"
                name="price"
                value={price}
                onChange={(e) => onFilter('price', e.target.value)}
                className="mr-2"
              />
              {price}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilterOptions;