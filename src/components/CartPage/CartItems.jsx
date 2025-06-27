import React from 'react';
import images from '../assets/images';

const CartItems = ({ items, onUpdateQuantity, onRemoveItem }) => {
  return (
    <div id="CartItems_1" className="bg-white rounded-lg shadow-md p-6">
      {items.length === 0 ? (
        <p id="CartItems_2" className="text-gray-500 text-center">Your cart is empty</p>
      ) : (
        <ul id="CartItems_3" className="divide-y divide-gray-200">
          {items.map((item) => (
            <li key={item.id} id={`CartItems_4_${item.id}`} className="py-6 flex">
              <img src={images[0]} alt={item.title} className="h-24 w-24 object-cover rounded" />
              <div className="ml-4 flex-1">
                <div className="flex justify-between">
                  <h3 className="text-lg font-medium">{item.title}</h3>
                  <p className="text-gray-900">${item.price}</p>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center">
                    <button
                      onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                      className="text-gray-500 hover:text-gray-700 p-2"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="text-gray-500 hover:text-gray-700 p-2"
                    >
                      +
                    </button>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartItems;
