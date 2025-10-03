"use client";
import React from "react";
import { motion, useInView } from "framer-motion";

const ReadyToPartner = () => {
  return (
    <section>
      {/* CTA Section */}
      <motion.div
        className="text-center overflow-hidden bg-gradient-to-r from-[#1eb7b1] to-[#159a95] rounded-2xl p-8 sm:p-12 text-white"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
          Ready to Partner With Our Manufacturing Network?
        </h3>
        <p className="max-w-xl mx-auto mb-6 text-sm sm:text-base opacity-90">
          Join healthcare providers across the Middle East who trust our
          manufacturing excellence for surgical kits, PPE, and medical
          consumables.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-6 sm:px-8 py-3 bg-white text-[#1eb7b1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg">
            Request Manufacturing Quote
          </button>
          <button className="px-6 sm:px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#1eb7b1] transition-all duration-200">
            Download Product Catalog
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default ReadyToPartner;
