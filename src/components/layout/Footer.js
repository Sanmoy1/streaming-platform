import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="glass-effect py-6 mt-auto">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link to="/" className="text-xl font-bold text-primary">
              MusicStream
            </Link>
            <p className="text-sm text-gray-400 mt-2">
              Your world of music and podcasts
            </p>
          </div>
          
          <div className="flex space-x-8">
            <Link to="/about" className="hover:text-primary transition-colors">
              About
            </Link>
            <Link to="/contact" className="hover:text-primary transition-colors">
              Contact
            </Link>
            <Link to="/privacy" className="hover:text-primary transition-colors">
              Privacy
            </Link>
          </div>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-xl hover:text-primary transition-colors">
              <FaGithub />
            </a>
            <a href="#" className="text-xl hover:text-primary transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="text-xl hover:text-primary transition-colors">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
