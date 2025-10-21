// src/pages/Services.jsx
import React from "react";
import { FaCut, FaGift, FaShoppingCart, FaClock, FaStar, FaLeaf } from "react-icons/fa";

export default function Services() {
  const services = [
    {
      icon: <FaCut className="text-pink-500 text-4xl mb-4 mx-auto" />,
      title: "Hair Styling & Cuts",
      desc: "Professional haircuts, styling, and coloring services to keep your clients looking their best.",
    },
    {
      icon: <FaLeaf className="text-green-500 text-4xl mb-4 mx-auto" />,
      title: "Spa & Beauty Treatments",
      desc: "ail treatments to pamper clients and enhance wellness.",
    },
    {
      icon: <FaGift className="text-yellow-500 text-4xl mb-4 mx-auto" />,
      title: "Gift Shop Management",
      desc: "Manage products, inventory, and sales seamlessly for your in-salon gift shop.",
    },
    {
      icon: <FaShoppingCart className="text-blue-500 text-4xl mb-4 mx-auto" />,
      title: "Online Store Services",
      desc: "Enable clients to purchase products online, with integrated inventory tracking and promotions.",
    },
    {
      icon: <FaClock className="text-purple-500 text-4xl mb-4 mx-auto" />,
      title: "Appointment Scheduling",
      desc: "Book appointments easily, send automated reminders, and keep your schedule organized.",
    },
    {
      icon: <FaStar className="text-pink-600 text-4xl mb-4 mx-auto" />,
      title: "Premium Loyalty Programs",
      desc: "Reward your regular clients, encourage referrals, and boost retention with custom programs.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-400 to-pink-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
          Our Services
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Explore the professional services we offer to make your salon & gift shop thrive.
        </p>
      </section>

      {/* Services Cards */}
      <section className="py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 transition-transform duration-300"
            >
              {service.icon}
              <h3 className="font-bold text-xl mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 text-center bg-gradient-to-r from-pink-400 to-purple-600 text-white rounded-xl mx-6 md:mx-20 my-12">
        <h2 className="text-3xl font-bold mb-4">Ready to Elevate Your Salon?</h2>
        <p className="mb-6 text-lg">
          Book a service or start your free trial today to see how Nails & Gift Corner can help your business shine.
        </p>
        <button className="btn btn-primary btn-lg animate-bounce">
          Book Now
        </button>
      </section>
    </div>
  );
}
