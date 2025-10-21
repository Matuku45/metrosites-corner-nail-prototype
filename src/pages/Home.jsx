// src/pages/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, CreditCard, Smartphone, MessageSquare, Gift, Globe } from "lucide-react";

export default function Home() {
  const features = [
    {
      icon: CalendarDays,
      title: "Smooth Calendar Management",
      description: "Drag and drop appointments, color-code bookings, assign techs, and automate confirmations.",
    },
    {
      icon: CreditCard,
      title: "Online Booking & Payments",
      description: "Clients can book online anytime. Accept payments via card, Apple Pay, Google Pay, or Cash App.",
    },
    {
      icon: Smartphone,
      title: "Mobile Access",
      description: "Access salon data, manage staff schedules, and check payments from anywhere on any device.",
    },
  ];

  const clientFeatures = [
    {
      icon: MessageSquare,
      title: "Automated Messaging",
      description: "Spend less time managing bookings. Automated confirmations and rescheduling handled by AI-powered messaging.",
    },
    {
      icon: Gift,
      title: "Client Loyalty & Campaigns",
      description: "Send email/text campaigns, gift cards, and loyalty rewards to boost repeat business.",
    },
    {
      icon: Globe,
      title: "Discoverability & Online Presence",
      description: "Add Book Now buttons to Instagram/Facebook and let clients book anytime, anywhere.",
    },
  ];

  const testimonials = [
    {
      name: "Sarah Stephenson",
      role: "Salon Owner",
      text: "Nails & Gift Corner simplified my salon management. Scheduling, payments, and marketing all in one platform.",
    },
    {
      name: "Mouna Sapper",
      role: "Salon Manager",
      text: "The mobile access and automated reminders save me hours every week. Highly recommended!",
    },
    {
      name: "Laura Boton",
      role: "Salon Owner",
      text: "Integrated online booking and client communication keeps my salon running smoothly.",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-600 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 animate-pulse"
        >
          Nails & Gift Corner
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl mb-6"
        >
          Manage your salon, bookings, payments, and retail sales all in one place.
        </motion.p>
        <div className="flex justify-center gap-4 flex-wrap">
          <motion.button whileHover={{ scale: 1.1 }} className="btn btn-primary btn-lg animate-bounce">
            Get Started
          </motion.button>
          <motion.a whileHover={{ scale: 1.05 }}
            href="#contact"
            className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-pink-500 transition-colors"
          >
            Contact Sales
          </motion.a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Maximize Your Salon Hours</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="card bg-white shadow-lg p-6 flex flex-col items-center text-center gap-4"
            >
              <item.icon className="w-12 h-12 text-pink-500" />
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Client Management Section */}
      <section className="py-12 px-6 md:px-20 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-10">Keep Every Booth Busy</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {clientFeatures.map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="card bg-white shadow-lg p-6 flex flex-col items-center text-center gap-4"
            >
              <item.icon className="w-12 h-12 text-purple-500" />
              <h3 className="font-bold text-xl">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">What Our Customers Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((c, idx) => (
            <motion.div key={idx} whileHover={{ scale: 1.03 }} className="card bg-white shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
              <p className="mb-4">“{c.text}”</p>
              <h4 className="font-bold">{c.name}</h4>
              <span>{c.role}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 md:px-20 bg-gradient-to-r from-pink-400 to-purple-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">One Plan to Run Your Entire Salon</h2>
        <p className="mb-8">
          Manage bookings, payments, retail sales, and staff with a single easy-to-use platform.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <motion.button whileHover={{ scale: 1.1 }} className="btn btn-primary btn-lg">
            Start Free Trial
          </motion.button>
          <motion.a whileHover={{ scale: 1.05 }} href="#contact" className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-pink-500 transition-colors">
            Contact Sales
          </motion.a>
        </div>
      </section>

    </div>
  );
}
