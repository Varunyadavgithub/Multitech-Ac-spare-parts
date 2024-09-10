import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-2xl font-bold">
          <Link to="/">MultiTech AC Spare Parts</Link>
        </div>

      
        <div className="md:hidden">
          <button
            onClick={toggleNavbar}
            type="button"
            className="text-white focus:outline-none"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />} {/* Toggle between icons */}
          </button>
        </div>
      </div>

      <div className={`mt-2 ${isOpen ? 'block' : 'hidden'} md:block`}>
        <ul className="flex flex-col md:flex-row md:space-x-6">
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
