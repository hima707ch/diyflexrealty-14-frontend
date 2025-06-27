import React from 'react';
import images from '../assets/images';

const Footer = () => {
  return (
    <footer id="Footer_1" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 id="Footer_2" className="text-xl font-bold mb-4">Real Estate Co.</h3>
            <p className="text-gray-400">Your trusted partner in finding the perfect home.</p>
          </div>
          <div>
            <h4 id="Footer_3" className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Properties</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 id="Footer_4" className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>123 Real Estate Ave</li>
              <li>New York, NY 10001</li>
              <li>+1 (555) 123-4567</li>
              <li>info@realestate.com</li>
            </ul>
          </div>
          <div>
            <h4 id="Footer_5" className="text-lg font-bold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-facebook"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-gray-400 hover:text-white"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>© 2024 Real Estate Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;