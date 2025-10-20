// src/pages/Home.jsx
import React from "react";

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
          Welcome to Nails & Gift Corner
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          The ultimate salon & gift shop management system.
        </p>
        <button className="btn btn-primary btn-lg animate-bounce">
          Start Now
        </button>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature Card */}
          <div className="card bg-white shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <img
              src="/src/assets/salon1.png"
              alt="Scheduling"
              className="rounded-lg mb-4"
            />
            <h3 className="font-bold text-xl mb-2">In-Salon Scheduling</h3>
            <p>Manage client appointments effortlessly with automated reminders.</p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <img
              src="/src/assets/online_booking.png"
              alt="Online Booking"
              className="rounded-lg mb-4"
            />
            <h3 className="font-bold text-xl mb-2">Online Booking</h3>
            <p>Let clients book themselves online, boosting productivity and efficiency.</p>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:scale-105 transition-transform duration-300">
            <img
              src="/src/assets/mobile_access.png"
              alt="Mobile Access"
              className="rounded-lg mb-4"
            />
            <h3 className="font-bold text-xl mb-2">Mobile Access</h3>
            <p>Access your salon & gift data anytime, anywhere from any device.</p>
          </div>
        </div>
      </section>

      {/* Quick Access / News Section */}
      <section className="py-12 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Quick Access</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/mnt/data/db3c4453-3e3c-4bd8-926a-721ceb802f13.png"
              alt="Product Roadmap"
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">
              Product Roadmap
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/src/assets/news_events.png"
              alt="News & Events"
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">
              News & Events
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg shadow-lg">
            <img
              src="/src/assets/employee_directory.png"
              alt="Employee Directory"
              className="w-full h-60 object-cover"
            />
            <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 w-full">
              Employee Directory
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <p className="mb-4">
              “This system made my salon management so easy! Scheduling, inventory, and online booking all in one place.”
            </p>
            <h4 className="font-bold">Sarah Stephenson</h4>
            <span>Salon Owner</span>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <p className="mb-4">
              “Nails & Gift Corner really helps me stay organized and efficient. I love the mobile access feature!”
            </p>
            <h4 className="font-bold">Mouna Sapper</h4>
            <span>Salon Manager</span>
          </div>

          <div className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
            <p className="mb-4">
              “Integrated payment processing and client reminders are a game-changer for my salon business.”
            </p>
            <h4 className="font-bold">Laura Boton</h4>
            <span>Salon Owner</span>
          </div>
        </div>
      </section>
    </div>
  );
}
