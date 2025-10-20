// src/pages/About.jsx
import React from "react";

export default function About() {
  return (
    <div className="bg-gray-50 min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-pink-400 to-purple-600 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-pulse">
          Nails & Gift Corner
        </h1>
        <p className="text-lg md:text-2xl mb-6">
          Built by salon owners for salon and gift shop owners. Manage your business with ease, style, and efficiency.
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

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-700">
          To provide intuitive, all-in-one salon and gift shop management software that helps businesses grow while building stronger client relationships.
        </p>

        <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          To be the go-to platform for beauty and gift shop businesses, delivering smart tools, automation, and insights that empower owners to succeed.
        </p>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-100 rounded-xl mx-6 md:mx-20 shadow-inner">
        <h2 className="text-3xl font-bold text-center mb-10">Meet the Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Thabiso Mapoulo", role: "Founder & CEO", img: "https://via.placeholder.com/150" },
            { name: "Sophie Pavitt", role: "CTO", img: "https://via.placeholder.com/150" },
            { name: "Nikki Ally Rae", role: "Head of Customer Success", img: "https://via.placeholder.com/150" },
          ].map((member) => (
            <div
              key={member.name}
              className="bg-white shadow-lg rounded-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-xl mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Story</h2>
        <p className="max-w-3xl mx-auto mb-4 text-lg text-gray-700">
          Nails & Gift Corner started from a simple idea: to make salon management easy, efficient, and enjoyable. As former salon owners ourselves, we know the challenges you face.
        </p>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Today, our software helps businesses save time, increase revenue, and delight clients with smart automation and powerful insights.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-xl mx-6 md:mx-20 my-12">
        <h2 className="text-3xl font-bold mb-4">Join Our Journey</h2>
        <p className="mb-6 text-lg">
          Start your free trial today and see how Nails & Gift Corner can transform your business.
        </p>
        <button className="btn btn-primary btn-lg animate-bounce">
          Start Free Trial
        </button>
      </section>
    </div>
  );
}
