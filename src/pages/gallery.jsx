import React, { useState } from "react";

// Updated gallery data with correct image paths
const galleryData = [
  { id: 1, title: "Manicure Station", description: "Elegant manicure setup with vibrant colors.", src: "/src/assets/ims/gallery/saloon1.avif" },
  { id: 2, title: "Pedicure Area", description: "Relaxing pedicure chairs with spa ambiance.", src: "/src/assets/ims/gallery/saloon2.avif" },
  { id: 3, title: "Nail Art Corner", description: "Creative nail art designs and tools.", src: "/src/assets/ims/gallery/saloon3.avif" },
  { id: 4, title: "Modern Interior", description: "Stylish and contemporary salon interior.", src: "/src/assets/ims/gallery/saloon4.webp" },
  { id: 5, title: "Luxury Manicure Stations", description: "High-end manicure setup for premium services.", src: "/src/assets/ims/gallery/saloon5.avif" },
  { id: 6, title: "Premium Salon Setup", description: "Fully equipped salon for professional services.", src: "/src/assets/ims/gallery/saloon6.jpg" },
  { id: 7, title: "Spa & Relaxation", description: "Cozy spa area for ultimate relaxation.", src: "/src/assets/ims/gallery/saloon7.jpg" },
  { id: 8, title: "Kids Nail Area", description: "Fun and safe nail corner for children.", src: "/src/assets/ims/gallery/saloon8.avif" },
  { id: 9, title: "Gift Corner", description: "Curated gift sets and beauty accessories.", src: "/src/assets/ims/gallery/saloon9.jpg" },
];


export default function Gallery() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
          Our Gallery
        </h1>
        <p className="text-lg md:text-2xl">
          Explore our nail art, services, and salon inspirations.
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
