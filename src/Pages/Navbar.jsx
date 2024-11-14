import React, { useState } from 'react';
import logo from "../assets/brahmmis logo recreate.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-sm z-50 w-full top-0 md:sticky">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <a className="navbar-brand" href="#/">
          <img src={logo} alt="Brand Logo" style={{ width: '120px' }} />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#about-us">About Us</a>
          <a className="nav-link" href="#our-menu">Our Menu</a>
          <a className="nav-link" href="#specialty">Specialty</a>
          <a className="nav-link" href="#contact">Contact Us</a>
          <a
            href="https://wa.me/7010652833"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-black text-white py-2 px-4 rounded-lg"
          >
            Booking Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          {/* Icon for the menu button */}
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="flex flex-col items-center space-y-2 mt-4">
            <a className="nav-link" href="#">Home</a>
            <a className="nav-link" href="#about-us">About Us</a>
            <a className="nav-link" href="#our-menu">Our Menu</a>
            <a className="nav-link" href="#specialty">Specialty</a>
            <a className="nav-link" href="#contact">Contact Us</a>
            <a
              href="https://wa.me/7010652833"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-black text-white py-2 px-4 rounded-lg"
            >
              Booking Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
