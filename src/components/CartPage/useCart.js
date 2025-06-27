import { useState, useEffect } from 'react';

export const useCart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: 'Sample Book 1',
      price: 29.99,
      quantity: 1
    },
    {
      id: 2,
      title: 'Sample Book 2',
      price: 19.99,
      quantity: 2
    }
  ]);

  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const newTotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    setTotalAmount(newTotal);
  }, [cartItems]);

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(itemId);
      return;
    }

    setCartItems(prevItems =>
      prevItems.map(item =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (itemId) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== itemId));
  };

  return {
    cartItems,
    totalAmount,
    updateQuantity,
    removeItem
  };
};
