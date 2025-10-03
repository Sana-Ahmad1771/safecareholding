"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaBullhorn, FaUsers, FaLaptopCode, FaPaintBrush, FaMobileAlt, FaNetworkWired } from "react-icons/fa";

const TechnologyGrid = () => {
  const [activeItem, setActiveItem] = useState(null);

  const technologyItems = [
    {
      id: 1,
      title: "Digital Marketing",
      description:
        "Boost your brand visibility with SEO, SEM, and performance-driven campaigns.",
      icon: <FaBullhorn size={22} className="text-primary" />,
    },
    {
      id: 2,
      title: "Social Media Management",
      description:
        "Grow your social presence with engaging posts, campaigns, and analytics.",
      icon: <FaUsers size={22} className="text-primary" />,
    },
    {
      id: 3,
      title: "Website Development",
      description:
        "Build fast, secure, and responsive websites tailored to your business goals.",
      icon: <FaLaptopCode size={22} className="text-primary" />,
    },
    {
      id: 4,
      title: "Graphic Designing",
      description:
        "Impactful visuals, logos, and branding assets that tell your story.",
      icon: <FaPaintBrush size={22} className="text-primary" />,
    },
    {
      id: 5,
      title: "Mobile App Development",
      description:
        "Design and develop user-friendly apps for iOS and Android platforms.",
      icon: <FaMobileAlt size={22} className="text-primary" />,
    },
    {
      id: 6,
      title: "Networking & Hosting",
      description:
        "Reliable hosting and secure networking infrastructure for modern businesses.",
      icon: <FaNetworkWired size={22} className="text-primary" />,
    },
  ];

  return (
    <section className="relative min-h-screen bg-gray-50 py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto pt-10">
        {/* Header */}
        <motion.div
          className="text-center space-y-5 mb-14"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-bold text-2xl md:text-3xl lg:text-[38px] text-dark-2">
            Digital Services
          </h2>
          <div className="flex justify-center">
            <motion.div
              className="w-24 h-1 bg-primary rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Comprehensive technology solutions that empower healthcare
            organizations through digital marketing, software development, and IT infrastructure.
          </p>
        </motion.div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologyItems.map((item, index) => (
            <motion.div
              key={item.id}
              className={`relative group cursor-pointer transition-all duration-300 ${
                activeItem === item.id ? "shadow-lg -translate-y-1" : "hover:shadow-lg hover:-translate-y-1"
              }`}
              onMouseEnter={() => setActiveItem(item.id)}
              onMouseLeave={() => setActiveItem(null)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              {/* Card */}
              <div className="bg-white rounded-xl p-8 border border-gray-200 h-full flex flex-col">
                {/* Icon */}
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-dark-2 mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyGrid;
