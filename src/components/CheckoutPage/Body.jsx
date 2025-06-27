import React from 'react';
import PaymentForm from './PaymentForm';
import OrderSummary from './OrderSummary';
import images from '../assets/images';
import { useCheckout } from './useCheckout';

const Body = () => {
  const { handlePayment, orderDetails } = useCheckout();

  return (
    <div id="Body_1" className="container mx-auto px-4 py-8">
      <h1 id="Body_2" className="text-3xl font-bold text-gray-800 mb-8">Checkout</h1>
      <div id="Body_3" className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div id="Body_4" className="order-2 lg:order-1">
          <PaymentForm onSubmit={handlePayment} />
        </div>
        <div id="Body_5" className="order-1 lg:order-2">
          <OrderSummary orderDetails={orderDetails} />
        </div>
      </div>
    </div>
  );
};

export default Body;