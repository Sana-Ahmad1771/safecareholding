"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="min-h-[calc(100vh-80px)] bg-cover bg-center flex items-end px-5 lg:px-20 overflow-hidden"
      style={{
        backgroundImage: "url('/Herosection-bg.png')",
        minHeight: "calc(90vh - 80px)",
      }}
    >
      {/* Container for centered content */}
      <div className="container text-dark-2 mx-auto flex flex-col lg:flex-row items-center justify-between w-full h-screen md:pt-10 py-20 lg:py-0">
        {/* Content */}
        <div className="xl:max-w-[590px] space-y-4 flex-1 flex flex-col justify-start h-[400px] mb-10 md:mb-0">
          <p className="text-2xl lg:text-3xl text-main uppercase tracking-wide mb-6 sm:text-base">Welcome to </p>
          <div className="space-y-4">
            <motion.h1
              className="text-4xl lg:text-[48px] xl:text-6xl leading-[42px] sm:text-4xl md:text-5xl lg:text-6xl font-medium mb-4"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
              Safecare holding <br /> company
            </motion.h1>
            <div className="border bg-primary border-primary w-10 h-1"></div>
          </div>
          <motion.p
            className="text-lg sm:text-base md:text-lg lg:text-[22px] mb-6 max-w-sm sm:max-w-md lg:max-w-[590px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Qualified Staff With Expertise in Services We Offer for more
            Resonable cost with love, Just explore about More!
          </motion.p>
        </div>

        {/* Doctor Image - Right Side */}
        <div className="flex-1 flex justify-center items-start h-screen">
          <Image
            src="/hero-men.png"
            alt="doctor"
            width={500}
            height={900}
            priority
            className="w-[250px] sm:w-[320px] md:w-[420px] lg:w-auto lg:h-screen object-fill"
          />
        </div>
      </div>
          {/* Scroll Indicator - Only on desktop */}
      <motion.div
        className="hidden lg:flex flex-col items-center absolute bottom-6 left-1/2 transform -translate-x-1/2 text-primary z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="text-sm mb-2">Scroll Down</span>
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;