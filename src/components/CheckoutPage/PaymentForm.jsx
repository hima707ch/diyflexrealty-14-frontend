import React from 'react';
import images from '../assets/images';

const PaymentForm = ({ onSubmit }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    onSubmit(data);
  };

  return (
    <div id="PaymentForm_1" className="bg-white p-6 rounded-lg shadow-lg">
      <h2 id="PaymentForm_2" className="text-2xl font-semibold mb-6">Payment Information</h2>
      <form id="PaymentForm_3" onSubmit={handleSubmit} className="space-y-4">
        <div id="PaymentForm_4">
          <label className="block text-gray-700 mb-2">Card Number</label>
          <input
            type="text"
            name="cardNumber"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="**** **** **** ****"
          />
        </div>
        <div id="PaymentForm_5" className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 mb-2">Expiry Date</label>
            <input
              type="text"
              name="expiryDate"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM/YY"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">CVV</label>
            <input
              type="text"
              name="cvv"
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="***"
            />
          </div>
        </div>
        <div id="PaymentForm_6">
          <label className="block text-gray-700 mb-2">Name on Card</label>
          <input
            type="text"
            name="cardName"
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="John Doe"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700 transition duration-200"
        >
          Pay Now
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;