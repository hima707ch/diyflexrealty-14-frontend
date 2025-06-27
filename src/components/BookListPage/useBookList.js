import { useState, useEffect } from 'react';

const useBookList = () => {
  const [books, setBooks] = useState([
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 12.99 },
    { id: 2, title: '1984', author: 'George Orwell', price: 14.99 },
    { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 11.99 },
    // Add more mock data as needed
  ]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    genre: 'All',
    price: 'All'
  });

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Implement search logic here
  };

  const handleFilter = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
    // Implement filter logic here
  };

  return {
    books,
    searchTerm,
    filters,
    handleSearch,
    handleFilter
  };
};

export default useBookList;