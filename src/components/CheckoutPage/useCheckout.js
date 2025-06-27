import { useState } from 'react';

export const useCheckout = () => {
  const [orderDetails] = useState({
    items: [
      {
        title: 'Sample Book 1',
        quantity: 1,
        price: '29.99',
        image: ''
      },
      {
        title: 'Sample Book 2',
        quantity: 2,
        price: '19.99',
        image: ''
      }
    ],
    subtotal: '69.97',
    tax: '7.00',
    total: '76.97'
  });

  const handlePayment = async (paymentData) => {
    try {
      // API integration would go here
      console.log('Processing payment:', paymentData);
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Payment processed successfully!');
    } catch (error) {
      console.error('Payment failed:', error);
      alert('Payment failed. Please try again.');
    }
  };

  return {
    orderDetails,
    handlePayment
  };
};