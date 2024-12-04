import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-gray-300 pt-10 pb-6">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-10"
        
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fadeIn">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 hover:text-yellow-400 transition-colors">About Us</h3>
            <p className="text-gray-400">
              We are dedicated to providing reliable and safe transportation services for students. Our mission is to make school commuting simple and secure for all.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 hover:text-yellow-400 transition-colors ">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-yellow-400 transition-transform transform hover:scale-105">Home</a></li>
              <li><a href="/about" className="hover:text-yellow-400 transition-transform transform hover:scale-105">About Us</a></li>
              <li><a href="/contact" className="hover:text-yellow-400 transition-transform transform hover:scale-105">Contact Us</a></li>
              <li><a href="/apps" className="hover:text-yellow-400 transition-transform transform hover:scale-105">Our Services</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 hover:text-yellow-400 transition-colors">Contact Info</h3>
            <p className="text-gray-400">E-GO Bus Company</p>
            <p className="text-gray-400">TKR College,HYD</p>
            <p className="text-gray-400">Phone: +91 9440195389</p>
            <p className="text-gray-400">Email: egobusgsc@gmail.com</p>
          </div>

          {/* Newsletter Subscription */}
          
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-transform transform hover:scale-110">
              <FaFacebook size="20" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-transform transform hover:scale-110">
              <FaTwitter size="20" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-transform transform hover:scale-110">
              <FaInstagram size="20" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-transform transform hover:scale-110">
              <FaLinkedin size="20" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 transition-transform transform hover:scale-110">
              <FaYoutube size="20" />
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} E-GO Bus Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
