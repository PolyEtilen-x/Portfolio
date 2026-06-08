import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`w-full px-6 md:px-16 py-4 flex justify-between items-center fixed top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-zinc-950/80 backdrop-blur-lg border-b border-zinc-900/80 py-3 shadow-[0_4px_30px_rgba(0,0,0,0.4)]'
          : 'bg-transparent border-b border-transparent'
      } text-zinc-100`}
    >
      <Link to="/" className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-sky-400 hover:from-cyan-300 hover:to-sky-300 transition duration-300">
        POLY ETILEN
      </Link>

      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
        <li>
          <Link
            to="/"
            className="text-zinc-400 hover:text-white transition duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-500 after:transition-all hover:after:w-full"
          >
            Home
          </Link>
        </li>
        <li>
          <a
            href="#about"
            className="text-zinc-400 hover:text-white transition duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-500 after:transition-all hover:after:w-full"
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            className="text-zinc-400 hover:text-white transition duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-500 after:transition-all hover:after:w-full"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            className="text-zinc-400 hover:text-white transition duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-cyan-500 after:transition-all hover:after:w-full"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Mobile Hamburger */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-zinc-200 hover:text-white text-2xl transition focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-zinc-950/95 backdrop-blur-xl border-b border-zinc-900 text-zinc-200 flex flex-col items-center space-y-5 py-8 shadow-2xl md:hidden transition-all duration-300 animate-in fade-in slide-in-from-top-5">
          <Link
            to="/"
            onClick={closeMenu}
            className="text-lg hover:text-cyan-400 transition"
          >
            Home
          </Link>
          <a
            href="#about"
            onClick={closeMenu}
            className="text-lg hover:text-cyan-400 transition"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="text-lg hover:text-cyan-400 transition"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="text-lg hover:text-cyan-400 transition"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
