import React from 'react';
import images from '../assets/images';

const BookDetails = ({ book }) => {
  return (
    <div id="BookDetails_1" className="bg-white rounded-lg shadow-lg p-6 mb-8">
      <div id="BookDetails_2" className="flex flex-col md:flex-row gap-8">
        <div id="BookDetails_3" className="w-full md:w-1/3">
          <img
            src={images[0] || 'https://via.placeholder.com/300x400'}
            alt={book?.title}
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
        <div id="BookDetails_4" className="w-full md:w-2/3">
          <h1 id="BookDetails_5" className="text-3xl font-bold mb-4">{book?.title}</h1>
          <p id="BookDetails_6" className="text-xl text-gray-600 mb-4">By {book?.author}</p>
          <div id="BookDetails_7" className="mb-4">
            <span className="font-semibold">ISBN:</span> {book?.isbn}
          </div>
          <div id="BookDetails_8" className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Description</h2>
            <p className="text-gray-700 leading-relaxed">{book?.description}</p>
          </div>
          <div id="BookDetails_9" className="flex gap-4">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Add to Cart
            </button>
            <button className="border border-blue-600 text-blue-600 px-6 py-2 rounded-lg hover:bg-blue-50 transition-colors">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;