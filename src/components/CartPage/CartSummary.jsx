import React from 'react';
import images from '../assets/images';

const CartSummary = ({ items, total }) => {
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div id="CartSummary_1" className="bg-white rounded-lg shadow-md p-6">
      <h2 id="CartSummary_2" className="text-xl font-semibold mb-4">Order Summary</h2>
      <div id="CartSummary_3" className="space-y-4">
        <div className="flex justify-between">
          <span>Items ({itemCount})</span>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="border-t pt-4">
          <div className="flex justify-between font-semibold">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>
        <button
          id="CartSummary_4"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition-colors"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
