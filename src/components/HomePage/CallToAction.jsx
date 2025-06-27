import React from 'react';
import images from '../assets/images';

const CallToAction = () => {
  return (
    <section id="CallToAction_1" className="py-20 bg-gradient-to-r from-blue-900 to-blue-800">
      <div className="container mx-auto px-6 text-center">
        <h2 id="CallToAction_2" className="text-4xl font-bold text-white mb-8">Ready to Find Your Dream Home?</h2>
        <p id="CallToAction_3" className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">Let us help you discover the perfect property that matches your lifestyle and dreams. Contact us today!</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button id="CallToAction_4" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300">Browse Properties</button>
          <button id="CallToAction_5" className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-900 transition duration-300">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;