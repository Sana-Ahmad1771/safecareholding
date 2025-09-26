"use client";
import React from "react";
import { motion } from "framer-motion";

const OurBrands = () => {
  return (
    <section
      className="relative lg:py-20 py-12 px-5 lg:px-20 bg-body flex items-end justify-center text-dark-2 bg-no-repeat bg-cover bg-center lg:h-[765px]"
      style={{
        backgroundImage: "url('/ourbrands-bg.png')",
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-end gap-10 lg:gap-20">
        {/* Text Section */}
        <div className="flex-1 space-y-6 text-white max-w-2xl">
          <h2 className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[38px] xl:text-5xl">
            Our Brands
          </h2>
          <div className="border bg-white border-white w-12 h-1 mb-4"></div>
          <p className="text-base sm:text-lg leading-relaxed">
            At Safecare Holding Company, we are committed to transforming the
            healthcare landscape by providing innovative solutions and
            exceptional customer experiences. With a diverse portfolio of
            subsidiaries, we cover a wide range of healthcare needs, ensuring
            that individuals and organizations have access to the best products
            and services available.
          </p>
        </div>

        {/* Cards Section */}
        <div className="flex-1 flex gap-4 max-w-2xl">
          {/* Card 1 - Safecare Holding Company */}
          <motion.div
            className="relative w-[220px] sm:w-[260px] lg:w-[300px] h-[280px] sm:h-[320px] rounded-2xl overflow-hidden cursor-pointer"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/card-1.png')",
              }}
            />

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-white"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Default Content */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 pl-4 text-lg sm:text-xl font-semibold text-dark-2 bg-white py-2"
              variants={{
                rest: { opacity: 1, y: 0 },
                hover: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.3 }}
            >
              Safecare Holding <br /> Company
            </motion.div>

            {/* Hover Content */}
           <motion.div
              className="absolute inset-0 p-6 text-dark-2 flex flex-col justify-between"
              variants={{
                rest: { opacity: 0, y: 20 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div>
                <h3 className="text-xl font-bold mt-1">Safecare Holding Company</h3>
                <p className="text-sm leading-relaxed mt-4">
                  Safecare Holding company is your premier destination for healthcare
                  products and medical supplies. We offer a wide range of
                  high-quality products with convenient online shopping and fast
                  delivery to meet all your healthcare needs.
                </p>
              </div>

              <button className="self-start bg-primary text-dark-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Read more
              </button>
            </motion.div>
          </motion.div>

          {/* Card 2 - Jurhy Online Store */}
          <motion.div
            className="relative w-[220px] sm:w-[260px] lg:w-[300px] h-[280px] sm:h-[320px] rounded-2xl overflow-hidden cursor-pointer"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/card-2.png')",
              }}
            />

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-white"
              variants={{
                rest: { opacity: 0 },
                hover: { opacity: 1 },
              }}
              transition={{ duration: 0.3 }}
            />

            {/* Default Content */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 pl-4 text-lg sm:text-xl font-semibold text-dark-2 bg-white/70 py-2"
              variants={{
                rest: { opacity: 1, y: 0 },
                hover: { opacity: 0, y: 20 },
              }}
              transition={{ duration: 0.3 }}
            >
              Jurhy Online <br /> Store
            </motion.div>

            {/* Hover Content */}
            <motion.div
              className="absolute inset-0 p-6 text-dark-2 flex flex-col justify-between"
              variants={{
                rest: { opacity: 0, y: 20 },
                hover: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div>
                <h3 className="text-xl font-bold mt-1">Jurhy Online Store</h3>
                <p className="text-sm leading-relaxed mt-4">
                  Jurhy Online Store is your premier destination for healthcare
                  products and medical supplies. We offer a wide range of
                  high-quality products with convenient online shopping and fast
                  delivery to meet all your healthcare needs.
                </p>
              </div>

              <button className="self-start bg-primary text-dark-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Read more
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OurBrands;
