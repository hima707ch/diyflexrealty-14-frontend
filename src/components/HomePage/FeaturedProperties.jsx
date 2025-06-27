import React from 'react';
import images from '../assets/images';

const FeaturedProperties = ({ properties, loading }) => {
  if (loading) return <div>Loading...</div>;

  return (
    <section id="FeaturedProperties_1" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 id="FeaturedProperties_2" className="text-4xl font-bold text-center mb-12 text-gray-900">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105">
              <img src={images[item] || 'https://placeholder.com/400x300'} alt="Property" className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Luxury Villa</h3>
                <p className="text-gray-600 mb-4">Beautiful 4 bedroom villa with modern amenities</p>
                <div className="flex justify-between items-center">
                  <span className="text-blue-900 font-bold text-xl">$850,000</span>
                  <button className="bg-blue-900 text-white px-4 py-2 rounded-full hover:bg-blue-800">View Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties;