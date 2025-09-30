"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const HeroSection = () => {
  return (
    <section
      className="relative w-full overflow-hidden flex items-center justify-center bg-gradient-to-br from-gray-9 to-gray-7"
      aria-label="Hero Section"
      style={{
        minHeight: "calc(100vh - 80px)",
        height: "calc(100vh - 80px)",
      }}
    >
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div 
          className="absolute -top-16 -right-16 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-primary/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
        <motion.div 
          className="absolute -bottom-16 -left-16 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-accent/20 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        ></motion.div>
        <motion.div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gray-8 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 1, ease: "easeOut" }}
        ></motion.div>
      </div>

      {/* Grid pattern overlay */}
      <motion.div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.7)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.7)_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:56px_56px] lg:bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_50%,black,transparent)]"
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      ></motion.div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-4 sm:py-8 w-full max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="text-center lg:text-left max-w-2xl lg:max-w-none lg:w-1/2 flex flex-col justify-center h-full space-y-4 sm:space-y-6 lg:space-y-8 py-4 lg:py-8">
          {/* Badge */}
          <motion.div 
            className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 rounded-full bg-primary-20 border border-primary mb-2 sm:mb-4 mx-auto lg:mx-0 w-fit"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="font-medium text-primary text-xs sm:text-sm tracking-wide">
              TRUSTED HEALTHCARE SOLUTIONS
            </span>
          </motion.div>

          {/* Headings */}
          <div className="space-y-2 sm:space-y-4">
            <motion.h1
              className="font-bold text-dark-2 leading-tight tracking-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
            >
              <span className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
                Safecare
              </span>
              <motion.span 
                className="block text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-1 sm:mt-2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Holding Company
              </motion.span>
            </motion.h1>
          </div>

          {/* Divider */}
          <motion.div 
            className="w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto lg:mx-0 shadow-lg"
            initial={{ width: 0 }}
            animate={{ width: "4rem" }}
            transition={{ duration: 0.8, delay: 0.8 }}
          ></motion.div>

          {/* Description */}
          <motion.p 
            className="max-w-xl mx-auto lg:mx-0 font-light text-dark-5 leading-relaxed text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            Qualified Staff With Expertise in Services We Offer for more
            Reasonable cost with love. Just explore about More!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-2 sm:pt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <motion.a
              href="#services"
              className="inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-20 text-sm sm:text-base md:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Explore Services
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-white text-primary font-semibold rounded-xl border-2 border-gray-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-gray-2-20 text-sm sm:text-base md:text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Contact Us
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                />
              </svg>
            </motion.a>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="relative w-full lg:w-1/2 h-[200px] xs:h-[240px] sm:h-[320px] md:h-[380px] lg:h-[480px] xl:h-[560px] 2xl:h-[640px] flex items-end justify-center mt-4 sm:mt-6 lg:mt-0 lg:pl-8 xl:pl-12">
          <motion.div 
            className="relative w-full max-w-xs xs:max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl h-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            {/* Background cards */}
            <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-7 rounded-2xl shadow-2xl rotate-1 scale-95"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl shadow-xl"></div>

            {/* Main Image */}
            <motion.div 
              className="relative h-full flex items-end justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Image
                src="/hero-men.png"
                alt="Professional healthcare expert from Safecare Holding Company"
                width={500}
                height={600}
                className="object-contain object-bottom w-auto h-full max-h-[180px] xs:max-h-[220px] sm:max-h-[280px] md:max-h-[340px] lg:max-h-[400px] xl:max-h-[480px] 2xl:max-h-[540px] drop-shadow-2xl"
                priority
              />
            </motion.div>

            {/* Floating card bottom-left */}
            <motion.div 
              className="absolute -bottom-2 -left-2 xs:-bottom-3 xs:-left-3 sm:-bottom-4 sm:-left-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 shadow-xl border border-gray-3"
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-dark-2 text-xs sm:text-sm md:text-base">
                    24/7 Care
                  </div>
                  <div className="text-xs text-dark-6">Always Available</div>
                </div>
              </div>
            </motion.div>

            {/* Floating card top-right */}
            <motion.div 
              className="absolute -top-2 -right-2 xs:-top-3 xs:-right-3 sm:-top-4 sm:-right-4 bg-white rounded-xl sm:rounded-2xl p-2 sm:p-3 md:p-4 shadow-xl border border-gray-3"
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              whileHover={{ scale: 1.05, y: 5 }}
            >
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-primary-20 rounded-full flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                    />
                  </svg>
                </div>
                <div>
                  <div className="font-semibold text-dark-2 text-xs sm:text-sm md:text-base">
                    Modern
                  </div>
                  <div className="text-xs text-dark-6">Facilities</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};