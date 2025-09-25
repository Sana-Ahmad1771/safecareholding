"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section
      className="bg-cover bg-center flex justify-center items-center lg:justify-end lg:items-end overflow-hidden"
      style={{
        backgroundImage: "url('/Herosection-bg.png')",
        minHeight: "calc(100vh - 80px)",
      }}
    >
      {/* Container for centered content */}
      <div className="container text-dark-2 mx-auto h-full font-normal leading-normal flex justify-between items-center lg:px-[54px] px-4 w-full">
        {/* Content */}
        <div className="max-w-[588px] space-y-4">
          <p className="text-3xl">Welcome to </p>
          <div className="space-y-4">
            <motion.h1
              className="text-4xl lg:text-[48px] font-roboto leading-[42px]"
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 1, ease: "easeOut" }}
            >
              Safecare holding <br /> company
            </motion.h1>
            <div className="border bg-primary border-primary w-10 h-1"></div>
          </div>
          <motion.p
            className="text-lg lg:text-[23px] font-poppins"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Qualified Staff With Expertise in Services We Offer for more
            Resonable cost with love, Just explore about More!
          </motion.p>
        </div>

        {/* Hero Image */}
        <div className="hidden md:block">
          <Image
            src="/Hero-men.png"
            width={588}
            height={400}
            alt="Doctor illustration"
            priority
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
