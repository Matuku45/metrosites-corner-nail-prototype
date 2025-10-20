// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero / Intro Section */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
          Nails & Gift Corner Software
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          A complete suite of salon & gift shop management tools to grow your business.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="btn btn-primary btn-lg animate-bounce">
            Start Free Trial
          </button>
          <a
            href="#contact"
            className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-pink-500 transition-colors"
          >
            Request Demo
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Salon Software Features</h2>
        <p className="text-center mb-12">
          Discover the tools that make managing your salon & gift shop easy, efficient, and fun.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-white shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="font-bold text-xl mb-2">In-Salon Scheduling</h3>
            <p>
              Easily book appointments, manage client info, and schedule staff with drag-and-drop simplicity.
            </p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="font-bold text-xl mb-2">Online Booking</h3>
            <p>
              Allow clients to book online 24/7, increasing convenience and maximizing bookings.
            </p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="font-bold text-xl mb-2">Automated Communications</h3>
            <p>
              Send automatic confirmations, reminders, and follow-ups to reduce no-shows.
            </p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="font-bold text-xl mb-2">Inventory Management</h3>
            <p>
              Track retail and back-bar inventory, get low-stock alerts, and order seamlessly.
            </p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="font-bold text-xl mb-2">Salon POS</h3>
            <p>
              Quickly checkout clients, manage payments, and access sales info on any device.
            </p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <h3 className="font-bold text-xl mb-2">Mobile Access</h3>
            <p>
              Manage your business on the go, access data anywhere, anytime, from any device.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Features */}
      <section className="py-12 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Premium Options</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-xl mb-2">Automated Email Marketing</h3>
            <p>
              Send birthday greetings, thank-you emails, and reminders automatically to clients.
            </p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-xl mb-2">Text Message Marketing</h3>
            <p>
              Reach clients directly via SMS, send confirmations, promotions, and automated campaigns.
            </p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-xl mb-2">Client Management Tools</h3>
            <p>
              Store client photos, track preferences, and manage appointments with ease.
            </p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-xl mb-2">Curbside Check-In</h3>
            <p>
              Streamline check-ins via SMS and update appointment status automatically.
            </p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-xl mb-2">Reporting & Analytics</h3>
            <p>
              Over 100 reports to track revenue, staff performance, and business growth.
            </p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-xl mb-2">Online Store</h3>
            <p>
              Sell products online, extend your reach, and allow clients to shop from anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Find Out If Nails & Gift Corner is Right for You</h2>
        <p className="mb-8">
          Answer a few quick questions to start your free trial or schedule a personalized demo.
        </p>
        <button className="btn btn-primary btn-lg animate-bounce">Start Now</button>
      </section>

      {/* Footer / About Section */}
      <section className="py-12 px-6 md:px-20 bg-gray-200 text-center">
        <h2 className="text-3xl font-bold mb-4">About Us</h2>
        <p className="max-w-3xl mx-auto mb-4">
          Nails & Gift Corner was built by salon owners to provide intuitive, all-in-one management software for salons and gift shops. Our mission is to help businesses grow while building deeper relationships with clients.
        </p>
        <p className="max-w-3xl mx-auto">
          Manage bookings, payments, inventory, marketing, and reporting all in one place, while increasing revenue and efficiency.
        </p>
      </section>
    </div>
  );
}
