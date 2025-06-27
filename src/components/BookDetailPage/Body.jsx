import React from 'react';
import BookDetails from './BookDetails';
import Reviews from './Reviews';
import useBookDetail from './useBookDetail';
import images from '../assets/images';

const Body = () => {
  const { book, reviews, isLoading, error } = useBookDetail();

  if (isLoading) return <div id="Body_1" className="flex justify-center items-center h-screen">Loading...</div>;
  if (error) return <div id="Body_2" className="text-red-500 text-center p-4">{error}</div>;

  return (
    <div id="Body_3" className="container mx-auto px-4 py-8">
      <BookDetails book={book} />
      <Reviews reviews={reviews} />
    </div>
  );
};

export default Body;