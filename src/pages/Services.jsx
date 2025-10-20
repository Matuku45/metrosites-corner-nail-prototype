// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
          Nails & Gift Corner Software
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Complete suite of salon & gift shop management tools to grow your business.
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

      {/* Features Section with Gradient Cards */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "In-Salon Scheduling", desc: "Easily book appointments and manage staff." },
            { title: "Online Booking", desc: "Allow clients to book anytime, anywhere." },
            { title: "Automated Communications", desc: "Send confirmations and reminders automatically." },
            { title: "Inventory Management", desc: "Track and manage products efficiently." },
            { title: "Salon POS", desc: "Fast checkout and manage payments on any device." },
            { title: "Mobile Access", desc: "Manage your business from any device." },
          ].map((feature) => (
            <div
              key={feature.title}
              className="bg-gradient-to-tr from-pink-200 via-purple-200 to-pink-300 shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="font-bold text-xl mb-2">{feature.title}</h3>
              <p>{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12 px-6 md:px-20 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-xl mx-6 md:mx-20 my-12">
        <h2 className="text-3xl font-bold mb-4">
          Find Out If Nails & Gift Corner is Right for You
        </h2>
        <p className="mb-6">
          Answer a few quick questions to start your free trial or schedule a personalized demo.
        </p>
        <button className="btn btn-primary btn-lg animate-bounce">
          Start Now
        </button>
      </section>

      {/* About Section */}
      <section className="py-12 px-6 md:px-20 bg-gray-100 text-center rounded-xl mx-6 md:mx-20 mb-12 shadow-inner">
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
