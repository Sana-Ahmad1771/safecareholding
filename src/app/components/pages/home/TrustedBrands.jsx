"use client";

import { motion } from "framer-motion";
import React, { useRef, useEffect, useState } from "react";

// ================= Slider Component =================
function LogoSlider({ brands, direction = "left", speed = 30 }) {
  const containerRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setDistance(containerRef.current.scrollWidth / 2); 
      // half of duplicated list
    }
  }, [brands]);

  const brandList = [...brands, ...brands]; // duplicate for seamless loop

  return (
    <div className="relative overflow-hidden w-full py-4">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-12 sm:w-16 z-10 bg-gradient-to-r from-body via-body/70 to-transparent" />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-12 sm:w-16 z-10 bg-gradient-to-l from-body via-body/70 to-transparent" />

      <motion.div
        ref={containerRef}
        className="flex items-center gap-10 sm:gap-16"
        style={{ willChange: "transform" }}
        animate={{ x: direction === "left" ? [0, -distance] : [-distance, 0] }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
      >
        {brandList.map((brand, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 h-10 sm:h-12 w-24 sm:w-32 flex items-center justify-center"
          >
            <img
              src={brand.logo}
              alt={brand.name}
              className="h-full max-w-full object-contain opacity-60 hover:opacity-100 transition duration-300 filter grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
}

// ================= Main Section =================
const TrustedBrands = () => {
  const brands = [
    {
      name: "Google",
      logo: "/binali.png",
    },
    {
      name: "Microsoft",
      logo: "/caremedical.png",
    },
    {
      name: "Apple",
      logo: "jurhy.png",
    },
    {
      name: "Amazon",
      logo: "safefast.png",
    },
    {
      name: "Meta",
      logo: "safecaretechnology.png",
    },
    {
      name: "Netflix",
      logo: "safecaremedicalindustries.png",
    },

  ];

  return (
    <section className="lg:pt-20 pt-18 bg-body overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h6 className="text-body-alt tracking-wide uppercase font-semibold ">
             Our brands
          </h6>
        </div>

        {/* First Row: Right to Left */}
        <LogoSlider brands={brands} direction="left" speed={30} />
      </div>
    </section>
  );
};

export default TrustedBrands;
