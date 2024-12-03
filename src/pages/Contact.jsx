import React from 'react';
import { FaPhoneAlt, FaWhatsapp, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

import Footer from "../components/Footer";
const Contact = () => {
  return (
    <>
    <div className="bg-gray-50 py-16 px-4 mt-8 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center mb-12">
        <img src="conct.jpeg" alt="pic" class="w-full h-[300px]"/>
        <h2 className="text-3xl font-semibold text-gray-800 mb-2">Get in Touch with Us</h2>
        <p className="mb-8 text-center">
  We’d love to hear from you! Whether you have any questions, need assistance, or simply want to share your thoughts with us, we’re here to help. Just fill out the form below, and our team will get back to you as soon as possible. Your feedback matters!
</p>

      </div>

      {/* Contact Form Section */}
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg"  style={{
          backgroundImage: "url('form.png')",
          backgroundSize: "cover",
          backgroundPosition: "right bottom",
        }}>
        <form action="#" method="POST">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6 ">
            {/* Name Input */}
            <div className="flex flex-col">
              <label className="text-lg font-medium text-gray-700 mb-2" htmlFor="name">Full Name</label>
              <input 
                type="text" 
                id="name" 
                name="name" 
                required 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                placeholder="Enter your full name" 
              />
            </div>

            {/* Email Input */}
            <div className="flex flex-col">
              <label className="text-lg font-medium text-gray-700 mb-2" htmlFor="email">Email Address</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                required 
                className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400" 
                placeholder="Enter your email address" 
              />
            </div>
          </div>

          <div className="mb-6">
            {/* Message Textarea */}
            <label className="text-lg font-medium text-gray-700 mb-2" htmlFor="message">Your Message</label>
            <textarea 
              id="message" 
              name="message" 
              required 
              className="px-4 py-2 border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-yellow-400" 
              placeholder="Write your message here" 
              rows="6"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button 
              type="submit" 
              className="bg-yellow-400  text-white py-2 px-8 rounded-lg hover:bg-yellow-500  transition-all duration-300 shadow-md">
              Send Message
            </button>
          </div>
        </form>
      </div>

      {/* Contact Info Section */}
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
{/* Phone */}
<div className="transition-transform transform hover:scale-105 hover:shadow-lg p-4 rounded-lg bg-white">
  <a href="tel:+919440195389" className="block text-center">
    <FaPhoneAlt className="text-3xl text-blue-400 mx-auto mb-3 hover:text-blue-500 transition-colors" />
    <h3 className="text-lg font-semibold ">Phone</h3>
    <p className="text-blue-600">+91 9440195389</p>
  </a>
</div>


  {/* WhatsApp Contact */}
  <div className="transition-transform transform hover:scale-105 hover:shadow-lg p-4 rounded-lg bg-white">
    <a 
      href="https://wa.me/9440195389" 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex flex-col items-center"
    >
      <FaWhatsapp className="text-3xl text-green-500 mx-auto mb-3 hover:text-green-600 transition-colors" />
      <h3 className="text-lg font-semibold text-gray-700">WhatsApp</h3>
      <p className="text-gray-600">Chat with us on WhatsApp: 9440195389</p>
    </a>
  </div>

  {/* Social Media */}
  <div className="transition-transform transform hover:scale-105 hover:shadow-lg p-4 rounded-lg bg-white">
    <h3 className="text-lg font-semibold text-gray-700 mb-3">Follow Us</h3>
    <div className="flex justify-center space-x-6">
      <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
        <FaFacebook className="text-2xl text-yellow-300 hover:text-yellow-500 transition-colors" />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <FaTwitter className="text-2xl text-yellow-300 hover:text-yellow-500 transition-colors" />
      </a>
      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
        <FaInstagram className="text-2xl text-yellow-300 hover:text-yellow-500 transition-colors" />
      </a>
    </div>
  </div>
</div>

      {/* Google Map Section */}
      <div className="mt-16 lg:w-[80%] lg:pl-[20%] justify-center">
        <div className="h-[400px] rounded-lg overflow-hidden shadow-lg">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3806.219342061998!2d78.539031!3d17.323981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcba26e59b5a44b%3A0xf9ceea7ddab4a12c!2sTKR%20College%20of%20Engineering%20%26%20Technology!5e0!3m2!1sen!2sin!4v1690611765343!5m2!1sen!2sin"
            width="100%"
            height="100%"
            frameBorder="0"
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
            title="Map"
          ></iframe>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Contact;
