"use client";

import React from "react";
import { motion } from "framer-motion";

const ProductsServices = () => {
  const products = [
    {
      title: "Surgical Kits / Pack",
      description: "Complete surgical procedure kits for orthopedics, cardiovascular, and general surgery with full sterilization services.",
    },
    {
      title: "PPE Consumables",
      description: "High-quality personal protective equipment including surgical masks, gloves, and gowns to international standards.",
    },
    {
      title: "Nursing Consumables",
      description: "Comprehensive range of nursing supplies and medical disposables for daily healthcare operations.",
    },
    {
      title: "Respiratory Supplies",
      description: "Specialized respiratory care products designed for hospital wards and clinical practices.",
    },
    {
      title: "Medical Equipment",
      description: "Central sterile supplies including lighting, instruments, and diagnostic equipment.",
    },
    {
      title: "First Aid & Trauma",
      description: "Emergency care supplies and trauma bags for critical medical response situations.",
    },
  ];

  return (
    <section
      id="services"
      className="scroll-mt-30 bg-gray-7/20 text-dark-2 py-12 lg:py-20 px-5 lg:px-20 overflow-hidden"
    >
      <div className="container mx-auto space-y-12">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-[38px] xl:text-5xl leading-snug">
            Our Medical Products
          </h2>
          <div className="flex justify-center">
            <motion.div
              className="mx-auto lg:mx-0 w-20 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-0.5 bg-gray-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>
          <p className="text-lg sm:text-base md:text-lg lg:text-[22px] leading-relaxed">
            Essential medical supplies and consumables manufactured for healthcare facilities across the region.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center xl:max-w-4/5 mx-auto">
          {products.map((item, index) => {
            const isSurgicalKits = item.title === "Surgical Kits / Pack";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.2 }}
                className={`rounded-xl border max-h-[227px] max-w-[407px] border-gray-5 shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col ${
                  isSurgicalKits ? "bg-primary text-white" : "bg-white"
                }`}
              >
                {/* Title + Divider */}
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <div
                    className={`w-16 sm:w-28 md:w-40 lg:w-[269px] h-0.5 ${
                      isSurgicalKits ? "bg-white/50" : "bg-gray-4 opacity-30"
                    }`}
                  ></div>
                </div>

                {/* Description */}
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isSurgicalKits ? "text-white/90" : "text-dark-2/80"
                  }`}
                >
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductsServices;