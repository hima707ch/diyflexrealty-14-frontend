import React from 'react';
import images from '../assets/images';

const BookList = ({ books }) => {
  return (
    <div id="BookList_1" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {books.map((book, index) => (
        <div
          key={book.id}
          id={`BookList_2_${index}`}
          className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105"
        >
          <img
            id={`BookList_3_${index}`}
            src={images[index % images.length]}
            alt={book.title}
            className="w-full h-48 object-cover"
          />
          <div id={`BookList_4_${index}`} className="p-4">
            <h3 id={`BookList_5_${index}`} className="text-xl font-semibold mb-2">{book.title}</h3>
            <p id={`BookList_6_${index}`} className="text-gray-600 mb-2">{book.author}</p>
            <div id={`BookList_7_${index}`} className="flex justify-between items-center">
              <span id={`BookList_8_${index}`} className="text-blue-600 font-bold">${book.price}</span>
              <button
                id={`BookList_9_${index}`}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
              >
                View Details
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;