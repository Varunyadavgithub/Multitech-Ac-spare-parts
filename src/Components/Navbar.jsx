import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../assets/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/">
            <img 
              src={logo}
              alt="MultiTech AC Spare Parts" 
              className="h-20 w-auto mr-4" 
            />
          </Link>
        </div>

        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-white hover:text-yellow-400">Home</Link>
          <Link to="/products" className="text-white hover:text-yellow-400">Products</Link>
          <Link to="/about" className="text-white hover:text-yellow-400">About Us</Link>
          <Link to="/contact" className="text-white hover:text-yellow-400">Contact</Link>
        </div>

        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            type="button"
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <div className={`md:hidden mt-2 ${isOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col space-y-2">
          <li>
            <Link to="/" className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md">Home</Link>
          </li>
          <li>
            <Link to="/products" className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md">Products</Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md">About Us</Link>
          </li>
          <li>
            <Link to="/contact" className="text-white hover:text-yellow-400 block px-3 py-2 rounded-md">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
