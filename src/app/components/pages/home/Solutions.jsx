"use client";
import React from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
const brands = [
  { name: "Binali", logo: "/binali.png", description: "Healthcare solutions" },
  {
    name: "Care Medical",
    logo: "/caremedical.png",
    description: "Medical equipment",
  },
  { name: "Jurhy", logo: "/jurhy.png", description: "Pharmaceuticals" },
  { name: "Safefast", logo: "/safefast.png", description: "Rapid diagnostics" },
  {
    name: "Safecare Technology",
    logo: "/safecaretechnology.png",
    description: "Health tech innovation",
  },
  {
    name: "Safecare Medical Industries",
    logo: "/safecaremedicalindustries.png",
    description: "Medical manufacturing",
  },
];
const Solutions = () => {
  return (
    <section className="bg-gray-7/40">
      <div className="container mx-auto sm:px-6 max-w-[1460px] lg:pb-30 py-12 px-5 lg:px-20">
        {/* Brand Highlights Section */}
        <motion.div
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="font-semibold mb-10 text-center text-xl sm:text-2xl md:text-3xl lg:text-[38px] xl:text-5xl">
            Comprehensive Healthcare Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {brands.slice(0, 3).map((brand, index) => (
              <motion.div
                key={brand.name}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 relative mr-4">
                    <Image
                      src={brand.logo}
                      alt={brand.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h4 className="font-semibold text-gray-800 text-lg">
                    {brand.name}
                  </h4>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  {brand.description} - Providing innovative solutions for
                  modern healthcare challenges.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Solutions;
