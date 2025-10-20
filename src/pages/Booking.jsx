// src/pages/Booking.jsx
import React, { useState } from "react";

export default function Booking() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your appointment for ${formData.service} is booked.`);
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
    });
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
          Book Your Appointment
        </h1>
        <p className="text-lg md:text-2xl">
          Choose your favorite services and schedule your visit effortlessly.
        </p>
      </section>

      {/* Booking Form Section */}
      <section className="py-12 px-6 md:px-20 flex justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-lg rounded-xl p-8 md:w-1/2 space-y-6"
        >
          <h2 className="text-2xl font-bold text-center mb-6">
            Reserve Your Spot
          </h2>

          {/* Name */}
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Full Name"
            required
            className="input input-bordered w-full"
          />

          {/* Email */}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            required
            className="input input-bordered w-full"
          />

          {/* Phone */}
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            required
            className="input input-bordered w-full"
          />

          {/* Service */}
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="select select-bordered w-full"
          >
            <option value="">Select Service</option>
            <option value="Manicure">Manicure</option>
            <option value="Pedicure">Pedicure</option>
            <option value="Nail Art">Nail Art</option>
            <option value="Gift Consultation">Gift Consultation</option>
          </select>

          {/* Date & Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              required
              className="input input-bordered w-full"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn btn-primary w-full text-lg font-bold hover:scale-105 transform transition duration-300"
          >
            Book Now
          </button>
        </form>
      </section>

      {/* Info / CTA Section */}
      <section className="py-12 px-6 md:px-20 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-xl mx-6 md:mx-20 my-12 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">
          Need Assistance?
        </h2>
        <p className="mb-6">
          Contact us if you have any questions or special requests for your appointment.
        </p>
        <a
          href="mailto:info@nailsandgiftcorner.com"
          className="btn btn-outline btn-lg border-white text-white hover:bg-white hover:text-pink-500 transition-colors"
        >
          Contact Us
        </a>
      </section>
    </div>
  );
}
