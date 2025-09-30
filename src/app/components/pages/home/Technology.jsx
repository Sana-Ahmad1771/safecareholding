"use client";

import { useState } from "react";
import { motion } from "framer-motion";

const TechnologyGrid = () => {
  const [activeItem, setActiveItem] = useState(null);

  const technologyItems = [
    {
      id: 1,
      title: "Digital Marketing",
      description:
        "Boosting your brand visibility with SEO, SEM, and content strategies that drive results.",
    },
    {
      id: 2,
      title: "Social Media Management",
      description:
        "Managing and growing your social presence through engaging posts, campaigns, and analytics.",
    },
    {
      id: 3,
      title: "Website Development",
      description:
        "Building fast, secure, and responsive websites tailored to your business goals.",
    },
    {
      id: 4,
      title: "Graphic Designing",
      description:
        "Creating impactful visuals, logos, and branding assets that tell your story.",
    },
    {
      id: 5,
      title: "Mobile App Development",
      description:
        "Designing and developing user-friendly mobile apps for iOS and Android platforms.",
    },
    {
      id: 6,
      title: "Networking & Hosting",
      description:
        "Providing reliable hosting solutions and secure networking infrastructure for businesses.",
    },
  ];

  return (
    <section className="relative min-h-screen bg-gray-8 py-16 px-6 lg:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto pt-20">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r text-dark-2 bg-clip-text mb-6">
            We Are Also in the Technology
          </h2>
          <p className="text-gray-500 text-lg sm:text-base md:text-lg lg:text-[22px] max-w-4xl mx-auto">
            From digital marketing to networking and hosting, we provide
            end-to-end technology solutions that help businesses grow, connect,
            and thrive in the digital era.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologyItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative group cursor-pointer transition-all duration-300 transform ${
                activeItem === item.id ? "scale-[1.03]" : "hover:scale-105"
              }`}
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Card */}
              <div className="bg-white backdrop-blur-xl rounded-2xl p-8 border border-gray-200 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl h-full">
                {/* Icon Placeholder */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-primary-20 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold text-xl">
                    {item.title.charAt(0)}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-dark-2 mb-3 transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>

                {/* Hover overlay */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/20 to-primary-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-20 to-primary blur-2xl opacity-0 group-hover:opacity-30 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Floating Background Blobs */}
      <motion.div
        className="absolute top-1/12 -left-10 w-60 h-60 bg-primary/60 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        animate={{ y: [0, -20, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/12 -right-10 w-72 h-72 bg-primary/60 rounded-full blur-3xl"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false }}
        animate={{ y: [0, 20, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </section>
  );
};

export default TechnologyGrid;
