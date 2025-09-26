"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

// ================= Horizontal Slider =================
function HorizontalSlider({ brands, direction = "left", speed = 30 }) {
  const containerRef = useRef(null);
  const [distance, setDistance] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      const containerWidth = containerRef.current.scrollWidth;
      setDistance(containerWidth / 2); 
    }
  }, [brands]);

  const brandList = [...brands, ...brands]; // duplicate for seamless loop

  return (
    <div className="relative overflow-hidden w-full py-3 sm:py-4 md:py-5">
      {/* Gradient Overlays - Responsive widths */}
      <div className="pointer-events-none absolute top-0 left-0 h-full w-8 sm:w-12 md:w-16 lg:w-20 z-20 bg-gradient-to-r from-body to-transparent" />
      <div className="pointer-events-none absolute top-0 right-0 h-full w-8 sm:w-12 md:w-16 lg:w-20 z-20 bg-gradient-to-l from-body to-transparent" />

      <motion.div
        ref={containerRef}
        className="flex items-center gap-6 sm:gap-10 md:gap-12 lg:gap-16"
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
            className="flex-shrink-0 h-8 sm:h-10 md:h-12 w-20 sm:w-28 md:w-32 flex items-center justify-center"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={128}
              height={48}
              className="h-full w-full max-w-full object-contain  transition duration-300 "
              sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 128px"
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
    { name: "Binali", logo: "/binali.png" },
    { name: "Care Medical", logo: "/caremedical.png" },
    { name: "Jurhy", logo: "/jurhy.png" },
    { name: "Safefast", logo: "/safefast.png" },
    { name: "Safecare Technology", logo: "/safecaretechnology.png" },
    { name: "Safecare Medical Industries", logo: "/safecaremedicalindustries.png" },
  ];

  return (
    <section className="pt-10 pb-20 bg-body overflow-hidden">
      <div className="container mx-auto sm:px-6 max-w-[1460px] lg:py-20 py-12 px-5 lg:px-20">
        <div className="mb-8 sm:mb-10 md:mb-12 text-center">
          <h2 className="text-dark-2 tracking-wide uppercase font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[38px] xl:text-5xl">
            Our Brands
          </h2>
        </div>

        {/* First Row: Right to Left */}
        <HorizontalSlider brands={brands} direction="left" speed={25} />
      </div>
    </section>
  );
};

export default TrustedBrands;