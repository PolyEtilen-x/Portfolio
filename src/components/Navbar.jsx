import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <nav className="w-full px-6 py-4 bg-white text-black flex justify-between items-center shadow-md fixed top-0 z-50">
      <h1 className="text-xl font-bold tracking-widest">Poly Etilen</h1>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-6 text-sm">
        <li><a href="#home" className="hover:text-gray-400">Home</a></li>
        <li><a href="#about" className="hover:text-gray-400">About</a></li>
        <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button onClick={toggleMenu} className="text-white text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-black text-white flex flex-col items-center space-y-4 py-6 shadow-md md:hidden">
          <a href="#home" onClick={closeMenu} className="hover:text-gray-400">Home</a>
          <a href="#about" onClick={closeMenu} className="hover:text-gray-400">About</a>
          <a href="#contact" onClick={closeMenu} className="hover:text-gray-400">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
