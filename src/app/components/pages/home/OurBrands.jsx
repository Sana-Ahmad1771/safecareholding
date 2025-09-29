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
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        {/* Text Section */}
        <div className="lg:w-3/5 w-full space-y-6 text-white text-center lg:text-left">
          <h2 className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[38px] xl:text-5xl">
            Our Brands
          </h2>
          <div className="border bg-white border-white w-12 h-1 mx-auto lg:mx-0 mb-4"></div>
          <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
            At Safecare Holding Company, we are committed to transforming the
            healthcare landscape by providing innovative solutions and
            exceptional customer experiences. With a diverse portfolio of
            subsidiaries, we cover a wide range of healthcare needs, ensuring
            that individuals and organizations have access to the best products
            and services available.
          </p>
        </div>

        {/* Cards Section */}
        <div className="lg:w-1/2 w-full flex lg:flex-nowrap justify-center flex-wrap lg:gap-6 gap-2">
          {/* Card 1 */}
          <motion.div
            className="relative w-full sm:w-[260px] lg:w-[300px] h-[280px] sm:h-[320px] rounded-2xl overflow-hidden cursor-pointer"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/card-1.png')" }}
            />

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-white"
              variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
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
                <h3 className="text-xl font-bold mt-1">
                  Safecare Holding Company
                </h3>
                <p className="text-lg sm:text-base md:text-lg lg:text-[22px] leading-relaxed mt-4">
                  Safecare Holding company is your premier destination for
                  healthcare products and medical supplies. We offer a wide
                  range of high-quality products with convenient online shopping
                  and fast delivery to meet all your healthcare needs.
                </p>
              </div>

              <button className="self-start bg-primary text-dark-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                Read more
              </button>
            </motion.div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="relative w-full sm:w-[260px] lg:w-[300px] h-[280px] sm:h-[320px] rounded-2xl overflow-hidden cursor-pointer"
            whileHover="hover"
            initial="rest"
            animate="rest"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/card-2.png')" }}
            />

            {/* Overlay */}
            <motion.div
              className="absolute inset-0 bg-white"
              variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
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
