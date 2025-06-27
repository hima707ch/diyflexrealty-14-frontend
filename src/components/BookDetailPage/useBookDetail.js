import { useState, useEffect } from 'react';

const useBookDetail = () => {
  const [book, setBook] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const bookId = window.location.pathname.split('/').pop();
        const response = await fetch(`/api/properties/${bookId}`);
        if (!response.ok) throw new Error('Failed to fetch book details');
        const data = await response.json();
        setBook(data);
        
        // Mocked reviews data since there's no specific API endpoint for reviews
        setReviews([
          {
            userName: 'John Doe',
            rating: 5,
            comment: 'Excellent book! Couldn\'t put it down.'
          },
          {
            userName: 'Jane Smith',
            rating: 4,
            comment: 'Very informative and well-written.'
          },
          {
            userName: 'Mike Johnson',
            rating: 5,
            comment: 'One of the best books I\'ve read this year.'
          }
        ]);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchBookDetails();
  }, []);

  return { book, reviews, isLoading, error };
};

export default useBookDetail;