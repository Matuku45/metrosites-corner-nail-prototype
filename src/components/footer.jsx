// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pink-500 text-white mt-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* About Us */}
        <div>
          <h3 className="text-lg font-bold mb-3">ABOUT US</h3>
          <p className="text-sm">
            La Sorellas Hair & Nail Studio was founded to provide elegant and
            professional beauty services. Our mission is to help clients look
            and feel their best while growing your business!
          </p>
        </div>

        {/* Our Mission */}
        <div>
          <h3 className="text-lg font-bold mb-3">OUR MISSION</h3>
          <p className="text-sm">
            To provide high-quality hair, nail, and beauty services using the
            latest technology and professional expertise. Building trust and
            lasting relationships with our clients is our priority.
          </p>
        </div>

        {/* Latest News */}
        <div>
          <h3 className="text-lg font-bold mb-3">LATEST NEWS</h3>
          <ul className="text-sm space-y-1">
            <li>
              <a href="#" className="hover:underline">
                Unlock New Services & Offers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Holiday Booking Tips
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                How to Market Your Studio
              </a>
            </li>
          </ul>
        </div>

        {/* Get In Touch */}
        <div>
          <h3 className="text-lg font-bold mb-3">GET IN TOUCH</h3>
          <p className="text-sm">
            La Sorellas Studio <br />
            123 Beauty Street, Suite 101 <br />
            YourCity, YourCountry <br />
            +27 123 456 789 <br />
            info@lasorellasstudio.com
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-pink-400 mx-6 lg:mx-8"></div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
          {[
            "Home",
            "Services",
            "Gallery",
            "Booking",
            "About",
            "Privacy Policy",
            "Terms of Use",
            "Contact",
          ].map((link) => (
            <a
              key={link}
              href="#"
              className="hover:underline"
            >
              {link}
            </a>
          ))}
        </div>

        {/* App Store Buttons */}
        <div className="flex gap-3">
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/67/App_Store_%28iOS%29.svg"
              alt="App Store"
              className="h-10"
            />
          </a>
          <a href="#">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
              alt="Google Play"
              className="h-10"
            />
          </a>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm py-4 text-white/80">
        © {new Date().getFullYear()} La Sorellas Hair & Nail Studio. All
        Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
