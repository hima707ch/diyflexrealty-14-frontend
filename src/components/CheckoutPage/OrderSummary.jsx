import React from 'react';
import images from '../assets/images';

const OrderSummary = ({ orderDetails }) => {
  return (
    <div id="OrderSummary_1" className="bg-white p-6 rounded-lg shadow-lg">
      <h2 id="OrderSummary_2" className="text-2xl font-semibold mb-6">Order Summary</h2>
      <div id="OrderSummary_3" className="space-y-4">
        {orderDetails?.items?.map((item, index) => (
          <div key={index} id={`OrderSummary_4_${index}`} className="flex justify-between items-center border-b pb-4">
            <div className="flex items-center space-x-4">
              <img src={item.image || images[0]} alt={item.title} className="w-16 h-20 object-cover rounded" />
              <div>
                <h3 className="font-medium">{item.title}</h3>
                <p className="text-gray-500">Quantity: {item.quantity}</p>
              </div>
            </div>
            <p className="font-semibold">${item.price}</p>
          </div>
        ))}
        <div id="OrderSummary_5" className="pt-4">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${orderDetails?.subtotal || '0.00'}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tax</span>
            <span>${orderDetails?.tax || '0.00'}</span>
          </div>
          <div className="flex justify-between font-bold text-lg border-t pt-4">
            <span>Total</span>
            <span>${orderDetails?.total || '0.00'}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;