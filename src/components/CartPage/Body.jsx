import React from 'react';
import CartItems from './CartItems';
import CartSummary from './CartSummary';
import { useCart } from './useCart';
import images from '../assets/images';

const Body = () => {
  const { cartItems, totalAmount, updateQuantity, removeItem } = useCart();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-3xl font-bold mb-8">Your Shopping Cart</h1>
      <div id="Body_3" className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div id="Body_4" className="lg:col-span-2">
          <CartItems items={cartItems} onUpdateQuantity={updateQuantity} onRemoveItem={removeItem} />
        </div>
        <div id="Body_5" className="lg:col-span-1">
          <CartSummary items={cartItems} total={totalAmount} />
        </div>
      </div>
    </div>
  );
};

export default Body;
