import React from 'react';
import images from '../assets/images';

const AboutUs = () => {
  return (
    <section id="AboutUs_1" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="w-full lg:w-1/2">
            <img src={images[1] || 'https://placeholder.com/600x400'} alt="About Us" className="rounded-xl shadow-xl" />
          </div>
          <div className="w-full lg:w-1/2">
            <h2 id="AboutUs_2" className="text-4xl font-bold mb-6 text-gray-900">Who We Are</h2>
            <p id="AboutUs_3" className="text-gray-600 text-lg mb-6">With over 15 years of experience in real estate, we've helped thousands of people find their perfect home. Our commitment to excellence and customer satisfaction sets us apart.</p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <h3 id="AboutUs_4" className="text-3xl font-bold text-blue-900">2000+</h3>
                <p className="text-gray-600">Happy Clients</p>
              </div>
              <div className="text-center">
                <h3 id="AboutUs_5" className="text-3xl font-bold text-blue-900">500+</h3>
                <p className="text-gray-600">Properties Sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;