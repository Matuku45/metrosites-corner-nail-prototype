// src/pages/Gallery.jsx
import React, { useState } from "react";

const galleryData = [
  { id: 1, title: "Elegant Manicure", description: "Classic manicure with vibrant colors.", src: "/images/manicure1.jpg" },
  { id: 2, title: "Pedicure Perfection", description: "Relaxing pedicure with floral designs.", src: "/images/pedicure1.jpg" },
  { id: 3, title: "Creative Nail Art", description: "Unique nail art designs for any occasion.", src: "/images/nailart1.jpg" },
  { id: 4, title: "Gift Wrapping Ideas", description: "Beautifully wrapped gifts for clients.", src: "/images/gift1.jpg" },
  { id: 5, title: "Spa Experience", description: "Rejuvenating spa session for ultimate relaxation.", src: "/images/spa1.jpg" },
  { id: 6, title: "Luxury Salon Setup", description: "Modern salon interior for premium services.", src: "/images/salon1.jpg" },
  { id: 7, title: "Holiday Special Nails", description: "Festive nail designs to celebrate the season.", src: "/images/holiday1.jpg" },
  { id: 8, title: "Kids Nail Fun", description: "Safe and fun nail designs for children.", src: "/images/kids1.jpg" },
  { id: 9, title: "Premium Gift Sets", description: "Curated gift boxes for special occasions.", src: "/images/gift2.jpg" },
];

export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
          Our Gallery
        </h1>
        <p className="text-lg md:text-2xl">
          Explore our nail art, services, and gift shop inspirations.
        </p>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-6 md:px-20">
        <h2 className="text-3xl font-bold text-center mb-10">Featured Works</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {galleryData.map((item) => (
            <div
              key={item.id}
              className="card bg-white shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer"
              onClick={() => setSelected(item)}
            >
              <img src={item.src} alt={item.title} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h3 className="font-bold text-xl text-pink-500 mb-2">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-xl max-w-3xl w-full overflow-hidden animate-fadeIn">
            <img src={selected.src} alt={selected.title} className="w-full h-96 object-cover" />
            <div className="p-6 text-center">
              <h3 className="font-bold text-2xl mb-2 text-pink-500">{selected.title}</h3>
              <p className="mb-4 text-gray-700">{selected.description}</p>
              <button
                onClick={() => setSelected(null)}
                className="btn btn-primary hover:scale-105 transform transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-12 px-6 md:px-20 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-2xl mx-6 md:mx-20 my-12 shadow-lg">
        <h2 className="text-3xl font-bold mb-4">Love What You See?</h2>
        <p className="mb-6">
          Book your appointment now and experience our professional nail services.
        </p>
        <a
          href="/booking"
          className="btn btn-primary btn-lg hover:scale-105 transform transition duration-300"
        >
          Book Now
        </a>
      </section>
    </div>
  );
}
