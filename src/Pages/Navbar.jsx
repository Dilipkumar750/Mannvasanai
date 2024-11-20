import React, { useState } from "react";
import logo from "../assets/brahmmis logo recreate.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="shadow sticky top-0 bg-gray-50 z-50 w-full">
      <div className="relative flex max-w-screen-xl flex-col overflow-hidden pt-2 md:mx-auto md:flex-row md:items-center">
        {/* Logo */}
        <a
          href="#"
          className="flex items-center whitespace-nowrap text-2xl font-black"
        >
          <img
            src={logo}
            alt="Brand Logo"
            className="max-w-24 h-24"
            data-aos="fade-in" data-aos-duration="3000"
            style={{ width: "120px" }}
          />
        </a>

        {/* Thirukural Text (Hidden on tablets and below) */}
        <div className="hidden lg:flex w-full flex-grow font-bold -translate-x-20 text-green-600 text-md justify-center items-center">
          <span>
            மருந்தென வேண்டாவாம் யாக்கைக்கு அருந்தியது
            <br />
            அற்றது போற்றி உணின்.
          </span>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          aria-label="Toggle Navigation"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Navigation Menu */}
        <nav
          aria-label="Header Navigation"
          className={`${
            isOpen ? "mt-1 max-h-56" : "max-h-0"
          } peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all  lg:-ml-28 md:max-h-full md:flex-row md:items-center md:justify-between`}
        >
          <ul className="flex flex-col items-center space-y-2 md:ml-auto md:flex-row md:space-y-0 md:space-x-6 w-full">
            <li className="text-gray-600 md:text-base hover:text-green-600 no-underline" data-aos="fade-down" data-aos-duration="400">
              <a
                href="#"
                className="no-underline text-gray-600 hover:text-green-600 transition-all duration-300"
              >
                Home
              </a>
            </li>
            <li className="text-gray-600 md:text-base hover:text-green-600" data-aos="fade-down" data-aos-duration="600">
              <a
                href="#about-us"
                className="no-underline text-gray-600 hover:text-green-600 transition-all duration-300"
              >
                About Us
              </a>
            </li>
            <li className="text-gray-600 md:text-base hover:text-green-600" data-aos="fade-down" data-aos-duration="800">
              <a
                href="#our-menu"
                className="no-underline text-gray-600 hover:text-green-600 transition-all duration-300"
              >
                Our Menu
              </a>
            </li>
            <li className="text-gray-600 md:text-base hover:text-green-600" data-aos="fade-down" data-aos-duration="1000">
              <a
                href="#specialty"
                className="no-underline text-gray-600 hover:text-green-600 transition-all duration-300"
              >
                Specialty
              </a>
            </li>
            <li className="text-gray-600 md:text-base hover:text-green-600" data-aos="fade-down" data-aos-duration="1200">
              <a
                href="#contact"
                className="no-underline text-gray-600 hover:text-green-600 transition-all duration-300"
              >
                Contact Us
              </a>
            </li>
            <li className="text-gray-600 md:text-base p-2 hover:text-green-600" data-aos="fade-down" data-aos-duration="1400">
              <a
                href="https://wa.me/+918870566255"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-600 text-white py-2 px-4 rounded-lg no-underline"
              >
                Booking Now
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
