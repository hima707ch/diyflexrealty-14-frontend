import React from 'react';
import SearchBar from './SearchBar';
import FilterOptions from './FilterOptions';
import BookList from './BookList';
import useBookList from './useBookList';
import images from '../assets/images';

const Body = () => {
  const { books, searchTerm, filters, handleSearch, handleFilter } = useBookList();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <div id="Body_2" className="flex flex-col gap-8">
        <h1 id="Body_3" className="text-4xl font-bold text-gray-800">Book Collection</h1>
        <div id="Body_4" className="flex flex-col md:flex-row gap-4">
          <div id="Body_5" className="w-full md:w-1/4">
            <SearchBar onSearch={handleSearch} />
            <FilterOptions onFilter={handleFilter} />
          </div>
          <div id="Body_6" className="w-full md:w-3/4">
            <BookList books={books} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;