import React from 'react';
import images from '../assets/images';

const Hero = () => {
  return (
    <div id="Hero_1" className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 py-20">
      <div className="absolute inset-0">
        <svg className="absolute left-0 top-0 opacity-20" viewBox="0 0 200 200">
          <path fill="#FFFFFF" d="M40,-60C53.8,-50.9,68.5,-42.2,75.1,-29.2C81.7,-16.2,80.2,1.2,75.2,17.1C70.2,33,61.7,47.4,48.9,56.9C36.1,66.4,18.1,71,-0.7,72C-19.5,73,-39,70.4,-54.4,60.8C-69.8,51.2,-81.1,34.7,-85.3,16.2C-89.5,-2.3,-86.7,-22.8,-76.8,-38.3C-66.9,-53.8,-50,-64.3,-34.4,-72.5C-18.8,-80.7,-4.7,-86.6,7.8,-97.8C20.3,-109,40.5,-125.4,49.3,-119.4C58.1,-113.3,55.5,-84.8,40,-60Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h1 id="Hero_2" className="text-4xl md:text-6xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Find Your Dream
                <span className="animate-bounce inline-block ml-2">Home</span>
              </span>
            </h1>
            <p id="Hero_3" className="text-blue-100 text-xl mb-8">Discover the perfect property that matches your lifestyle and dreams.</p>
            <button id="Hero_4" className="bg-white text-blue-900 px-8 py-3 rounded-full font-bold hover:bg-blue-100 transition duration-300">Get Started</button>
          </div>
          <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
            <img src={images[0] || 'https://placeholder.com/800x600'} alt="Modern home" className="rounded-lg shadow-2xl animate-float" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;