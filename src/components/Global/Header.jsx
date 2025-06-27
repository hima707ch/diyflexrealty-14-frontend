import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import images from '../assets/images';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Searching for:', searchQuery);
  };

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0" id="Header_1">
            <Link to="/">
              <img
                className="h-12 w-auto"
                src={images[0]}
                alt="BookStore Logo"
              />
            </Link>
          </div>

          <div className="hidden md:block" id="Header_2">
            <div className="ml-10 flex items-center space-x-4">
              <Link
                to="/"
                className={`${location.pathname === '/' ? 'bg-blue-700' : 'hover:bg-blue-700'} text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Home
              </Link>
              <Link
                to="/booklistpage"
                className={`${location.pathname === '/booklistpage' ? 'bg-blue-700' : 'hover:bg-blue-700'} text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Books
              </Link>
              <Link
                to="/cartpage"
                className={`${location.pathname === '/cartpage' ? 'bg-blue-700' : 'hover:bg-blue-700'} text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Cart
              </Link>
              <Link
                to="/loginpage"
                className={`${location.pathname === '/loginpage' ? 'bg-blue-700' : 'hover:bg-blue-700'} text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Login
              </Link>
              <Link
                to="/registerpage"
                className={`${location.pathname === '/registerpage' ? 'bg-blue-700' : 'hover:bg-blue-700'} text-white px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200`}
              >
                Register
              </Link>
            </div>
          </div>

          <div className="hidden md:block" id="Header_3">
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                placeholder="Search books..."
                className="rounded-l-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="bg-blue-700 text-white px-4 py-2 rounded-r-md hover:bg-blue-800 transition-colors duration-200"
              >
                Search
              </button>
            </form>
          </div>

          <div className="-mr-2 flex md:hidden" id="Header_4">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-700 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden" id="Header_5">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/"
              className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Home
            </Link>
            <Link
              to="/booklistpage"
              className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Books
            </Link>
            <Link
              to="/cartpage"
              className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Cart
            </Link>
            <Link
              to="/loginpage"
              className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Login
            </Link>
            <Link
              to="/registerpage"
              className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
              onClick={toggleMenu}
            >
              Register
            </Link>
            <form onSubmit={handleSearch} className="mt-4">
              <input
                type="text"
                placeholder="Search books..."
                className="w-full rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="submit"
                className="w-full mt-2 bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors duration-200"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;