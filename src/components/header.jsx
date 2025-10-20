// src/components/Header.jsx
import React, { useState } from "react";

const HeaderForApp = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Booking", href: "#booking" },
    { name: "About", href: "#about" },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="w-full bg-base-100 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-pink-500"></span>
          <span className="text-xl font-semibold text-gray-800">
         
✨ Nails & Gift Corner ✨
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-700 hover:text-pink-500 font-medium transition-colors"
            >
              {item.name}
            </a>
          ))}
          <a
            href="#booking"
            className="ml-4 px-4 py-2 bg-pink-500 text-white rounded-md shadow hover:bg-pink-600 transition-colors font-medium"
          >
            Book Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden btn btn-ghost"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <nav className="md:hidden bg-base-100 shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-gray-700 hover:text-pink-500 font-medium"
                >
                  {item.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2 bg-pink-500 text-white rounded-md shadow hover:bg-pink-600 font-medium"
              >
                Book Now
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default HeaderForApp;
