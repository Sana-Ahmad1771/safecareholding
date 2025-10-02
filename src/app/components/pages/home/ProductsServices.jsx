"use client";

import React from "react";
import { motion } from "framer-motion";

const ProductsServices = () => {
  const products = [
    {
      title: "Nursing Consumables",
      description:
        "Safecare Nursing Consumables are designed for the many needs of modern-day nursing. Our products are safe, effective, and economical to use.",
    },
    {
      title: "Respiratory Consumables",
      description:
        "Our Respiratory Consumables are produced to meet the specific needs of your respiratory care practice, such as hospital wards, long-term care facilities, and pharmacies.",
    },
    {
      title: "Emesis Supplies",
      description:
        "We offer a vast array of high-quality emergency care supplies and equipment including first aid kits, trauma bags, preventative medicine products, and more.",
    },
    {
      title: "Surgical Kits / Pack",
      description:
        "Safecare surgical kits are designed to safely store general surgical instruments and materials, as well as specialized instruments needed for major surgeries.",
    },
    {
      title: "CCSD",
      description:
        "We carry a full line of central sterile supplies, including lighting equipment, filters, scalpels, thermometers, suction equipment, and much more.",
    },
    {
      title: "PPE Consumables",
      description:
        "Safecare offers PPE consumables for demanding environments. Our disposable PPE products are designed to provide high-level protection against hazards.",
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
          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[38px] xl:text-5xl">
            Core Healthcare Products
          </h2>
          <div className="flex justify-center">
            {/* Divider */}
            <motion.div
              className="mx-auto lg:mx-0 w-20 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-0.5 bg-gray-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
          </div>
          <p className="text-lg sm:text-base md:text-lg lg:text-[22px] leading-relaxed">
            Essential medical supplies, consumables, and equipment that form the
            foundation of daily healthcare operations in hospitals, clinics, and
            care facilities worldwide.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center xl:max-w-4/5 mx-auto">
          {products.map((item, index) => {
            const isRespiratory = item.title === "Respiratory Consumables";
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: false, amount: 0.2 }}
                className={`rounded-xl border max-h-[227px] max-w-[407px] border-gray-5 shadow-md p-6 hover:shadow-lg transition duration-300 flex flex-col ${
                  isRespiratory ? "bg-primary text-white" : "bg-white"
                }`}
              >
                {/* Title + Divider */}
                <div className="mb-4">
                  <h3 className="text-lg sm:text-xl font-semibold mb-3">
                    {item.title}
                  </h3>
                  <div
                    className={`w-16 sm:w-28 md:w-40 lg:w-[269px] h-0.5 ${
                      isRespiratory ? "bg-white/50" : "bg-gray-4 opacity-30"
                    }`}
                  ></div>
                </div>

                {/* Description */}
                <p
                  className={`text-sm sm:text-base leading-relaxed ${
                    isRespiratory ? "text-white/90" : "text-dark-2/80"
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
