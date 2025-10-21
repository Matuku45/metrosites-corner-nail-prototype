// src/pages/Specials.jsx
import React from "react";
import { motion } from "framer-motion";
import { Star, Gift, Sparkles, Heart } from "lucide-react";

export default function Specials() {
  const specialsData = [
    {
      id: 1,
      title: "Luxury Manicure",
      description: "Pamper your nails with our deluxe manicure treatment.",
      icon: Star,
      img: "/src/assets/specials/manicure1.avif",
    },
    {
      id: 2,
      title: "Relaxing Pedicure",
      description: "Enjoy a spa pedicure to refresh and rejuvenate your feet.",
      icon: Heart,
      img: "/src/assets/specials/pedicure1.avif",
    },
    {
      id: 3,
      title: "Nail Art Designs",
      description: "Custom nail art for every occasion and mood.",
      icon: Sparkles,
      img: "/src/assets/specials/nailart1.avif",
    },
    {
      id: 4,
      title: "Gift Packages",
      description: "Special gift sets for your loved ones or clients.",
      icon: Gift,
      img: "/src/assets/specials/gift1.avif",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-400 to-pink-500 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-4 animate-pulse"
        >
          Specials & Featured Services
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-lg md:text-2xl mb-6"
        >
          Discover our exclusive treatments and special offers designed to pamper you.
        </motion.p>
      </section>

      {/* Specials Grid */}
      <section className="py-16 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-12">This Week’s Specials</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialsData.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-xl shadow-lg overflow-hidden transition-transform duration-300 flex flex-col items-center text-center p-6"
            >
              <item.icon className="w-12 h-12 text-pink-500 mb-4 animate-bounce" />
              <img
                src={item.img}
                alt={item.title}
                className="rounded-lg mb-4 w-full h-48 object-cover shadow-inner"
              />
              <h3 className="font-bold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-700">{item.description}</p>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="btn btn-primary btn-sm mt-4"
              >
                Book Now
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-xl mx-6 md:mx-20 my-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4 flex justify-center items-center gap-2"
        >
          <Sparkles className="w-6 h-6 text-yellow-400" /> Don’t Miss Out
        </motion.h2>
        <p className="mb-6 text-lg">
          Grab these special services this week and give yourself the pampering you deserve!
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="btn btn-primary btn-lg animate-bounce"
        >
          See All Specials
        </motion.button>
      </section>
    </div>
  );
}
