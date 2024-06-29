import React from 'react';
import logo from '../assets/Images/logo.png'
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#F5FCFF] py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="flex items-center space-x-4">
        <div className="background-image-container"></div>
          <span className="text-xl font-semibold">JohnDev,</span>
        </div>
        <nav className="mt-4 md:mt-0 flex flex-wrap justify-center space-x-4">
          <a href="#home" className="text-gray-800 hover:text-gray-600">Home</a>
          <a href="#portfolio" className="text-gray-800 hover:text-gray-600">Portfolio</a>
          <a href="#about" className="text-gray-800 hover:text-gray-600">About me</a>
          <a href="#contact" className="text-gray-800 hover:text-gray-600">Contact</a>
          <a href="#testimonials" className="text-gray-800 hover:text-gray-600">Testimonials</a>
        </nav>
        <div className="mt-4 md:mt-0 flex space-x-4">
          <a href="https://facebook.com/hardemola.horlaitan" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
            <FaFacebookF />
          </a>
          <a href="https://instagram.com/bigpicturematic" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
            <FaInstagram />
          </a>
          <a href="https://twitter.com/bigpicturematic" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
            <FaTwitter />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-gray-600">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8 border-t border-gray-200 pt-4 flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm">
        <p className="flex items-center">
          Code with <span className="text-red-500 mx-1">❤</span> by Matic
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:underline">Privacy Policy</a>
          <a href="#" className="hover:underline">Terms of Service</a>
          <a href="#" className="hover:underline">Cookies Settings</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
