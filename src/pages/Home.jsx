// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
          Nails & Gift Corner
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Manage your salon, bookings, payments, and retail sales all in one place.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <button className="btn btn-primary btn-lg animate-bounce">
            Get Started
          </button>
          <a
            href="#contact"
            className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-pink-500 transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Maximize Your Salon Hours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-white shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <img
              src="/src/assets/salon1.png"
              alt="Smooth Calendar Management"
              className="rounded-lg mb-4"
            />
            <h3 className="font-bold text-xl mb-2">Smooth Calendar Management</h3>
            <p>
              Drag and drop appointments, color-code bookings, assign techs, and automate confirmations.
            </p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <img
              src="/src/assets/online_booking.png"
              alt="Online Booking"
              className="rounded-lg mb-4"
            />
            <h3 className="font-bold text-xl mb-2">Online Booking & Payments</h3>
            <p>
              Clients can book online anytime. Accept payments via card, Apple Pay, Google Pay, or Cash App.
            </p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <img
              src="/src/assets/mobile_access.png"
              alt="Mobile Access"
              className="rounded-lg mb-4"
            />
            <h3 className="font-bold text-xl mb-2">Mobile Access</h3>
            <p>
              Access salon data, manage staff schedules, and check payments from anywhere on any device.
            </p>
          </div>
        </div>
      </section>

      {/* Client Management Section */}
      <section className="py-12 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Keep Every Booth Busy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-xl mb-2">Automated Messaging</h3>
            <p>
              Spend less time managing bookings. Automated confirmations and rescheduling handled by AI-powered messaging.
            </p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-xl mb-2">Client Loyalty & Campaigns</h3>
            <p>
              Send email/text campaigns, gift cards, and loyalty rewards to boost repeat business.
            </p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <h3 className="font-bold text-xl mb-2">Discoverability & Online Presence</h3>
            <p>
              Add Book Now buttons to Instagram/Facebook and let clients book anytime, anywhere.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <p className="mb-4">
              “Nails & Gift Corner simplified my salon management. Scheduling, payments, and marketing all in one platform.”
            </p>
            <h4 className="font-bold">Sarah Stephenson</h4>
            <span>Salon Owner</span>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <p className="mb-4">
              “The mobile access and automated reminders save me hours every week. Highly recommended!”
            </p>
            <h4 className="font-bold">Mouna Sapper</h4>
            <span>Salon Manager</span>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <p className="mb-4">
              “Integrated online booking and client communication keeps my salon running smoothly.”
            </p>
            <h4 className="font-bold">Laura Boton</h4>
            <span>Salon Owner</span>
          </div>
        </div>
      </section>

      {/* CTA / Pricing Section */}
      <section className="py-12 px-6 md:px-20 bg-gradient-to-r from-pink-400 to-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">One Plan to Run Your Entire Salon</h2>
        <p className="mb-8">
          Manage bookings, payments, retail sales, and staff with a single easy-to-use platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button className="btn btn-primary btn-lg">Start Free Trial</button>
          <a
            href="#contact"
            className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-pink-500 transition-colors"
          >
            Contact Sales
          </a>
        </div>
      </section>
    </div>
  );
}
