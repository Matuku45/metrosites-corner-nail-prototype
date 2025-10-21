// src/components/Header.jsx
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderForApp = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation(); // For active link styling

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Gallery", path: "/gallery" },
    { name: "Booking", path: "/booking" },
    { name: "About", path: "/about" },
    { name: "Special", path: "/specials" },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="w-full bg-gray-100 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-pink-500">💅</span>
          <span className="text-xl font-semibold text-gray-800">
            Nails & Gift Corner
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`font-medium transition-colors ${
                location.pathname === item.path
                  ? "text-pink-500 underline underline-offset-4"
                  : "text-gray-700 hover:text-pink-500"
              }`}
            >
              {item.name}
            </Link>
          ))}
          <Link
            to="/booking"
            className="ml-4 px-4 py-2 bg-pink-500 text-white rounded-md shadow hover:bg-pink-600 transition-all font-medium"
          >
            Book Now
          </Link>
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
        <nav className="md:hidden bg-gray-100 shadow-md">
          <ul className="flex flex-col space-y-4 px-6 py-4">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block font-medium ${
                    location.pathname === item.path
                      ? "text-pink-500 underline underline-offset-4"
                      : "text-gray-700 hover:text-pink-500"
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/booking"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center px-4 py-2 bg-pink-500 text-white rounded-md shadow hover:bg-pink-600 font-medium"
              >
                Book Now
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default HeaderForApp;
