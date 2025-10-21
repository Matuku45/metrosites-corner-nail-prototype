import React from "react";
import { motion } from "framer-motion";
import { Users, Target, Lightbulb, Gift, User, UserCog, UserCheck } from "lucide-react";

export default function About() {
  const teamMembers = [
    { name: "Thabiso Mapoulo", role: "Founder & CEO", icon: User },
    { name: "Sophie Pavitt", role: "CTO", icon: UserCog },
    { name: "Nikki Ally Rae", role: "Head of Customer Success", icon: UserCheck },
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
          Built by salon owners for salon and gift shop owners. Manage your business with ease, style, and efficiency.
        </motion.p>
        <div className="flex justify-center gap-4 flex-wrap">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="btn btn-primary btn-lg animate-bounce"
          >
            Start Free Trial
          </motion.button>
          <motion.a
            whileHover={{ scale: 1.05 }}
            href="#contact"
            className="btn btn-outline btn-lg text-white border-white hover:bg-white hover:text-pink-500 transition-colors"
          >
            Request Demo
          </motion.a>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-6 flex justify-center items-center gap-2">
            <Target className="w-6 h-6 text-pink-500" /> Our Mission
          </h2>
          <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-700">
            To provide intuitive, all-in-one salon and gift shop management software that helps businesses grow while building stronger client relationships.
          </p>

          <h2 className="text-3xl font-bold mb-6 flex justify-center items-center gap-2">
            <Lightbulb className="w-6 h-6 text-yellow-400" /> Our Vision
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-gray-700">
            To be the go-to platform for beauty and gift shop businesses, delivering smart tools, automation, and insights that empower owners to succeed.
          </p>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 md:px-20 bg-gray-100 rounded-xl mx-6 md:mx-20 shadow-inner">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10 flex justify-center items-center gap-2"
        >
          <Users className="w-6 h-6 text-pink-500" /> Meet the Team
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              whileHover={{ scale: 1.05 }}
              className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition-transform duration-300"
            >
              <member.icon className="w-20 h-20 text-pink-500 mb-4" />
              <h3 className="font-bold text-xl mb-1 text-center">{member.name}</h3>
              <p className="text-gray-600 text-center">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 md:px-20 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 flex justify-center items-center gap-2"
        >
          <Gift className="w-6 h-6 text-purple-500" /> Our Story
        </motion.h2>
        <p className="max-w-3xl mx-auto mb-4 text-lg text-gray-700">
          Nails & Gift Corner started from a simple idea: to make salon management easy, efficient, and enjoyable. As former salon owners ourselves, we know the challenges you face.
        </p>
        <p className="max-w-3xl mx-auto text-lg text-gray-700">
          Today, our software helps businesses save time, increase revenue, and delight clients with smart automation and powerful insights.
        </p>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-20 text-center bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-xl mx-6 md:mx-20 my-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-4 flex justify-center items-center gap-2"
        >
          <Lightbulb className="w-6 h-6 text-yellow-400" /> Join Our Journey
        </motion.h2>
        <p className="mb-6 text-lg">
          Start your free trial today and see how Nails & Gift Corner can transform your business.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="btn btn-primary btn-lg animate-bounce"
        >
          Start Free Trial
        </motion.button>
      </section>
    </div>
  );
}
