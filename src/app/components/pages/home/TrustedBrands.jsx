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
        className="flex items-center py-10 gap-6 sm:gap-10 md:gap-12 lg:gap-16"
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
            className="flex-shrink-0 h-8 sm:h-10 md:h-12 w-20 sm:w-28 md:w-32 flex items-center justify-center group relative"
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              width={128}
              height={48}
              className="h-full w-full max-w-full object-contain transition-all duration-300 group-hover:scale-110 group-hover:brightness-110"
              sizes="(max-width: 640px) 80px, (max-width: 768px) 112px, 128px"
            />
            {/* Tooltip on hover */}
            <div className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap pointer-events-none">
              {brand.name}
            </div>
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
      name: "Binali",
      logo: "/binali.png",
      description: "Healthcare solutions",
    },
    {
      name: "Care Medical",
      logo: "/caremedical.png",
      description: "Medical equipment",
    },
    { name: "Jurhy", logo: "/jurhy.png", description: "Pharmaceuticals" },
    {
      name: "Safefast",
      logo: "/safefast.png",
      description: "Rapid diagnostics",
    },
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

  return (
    <section className="pt-10 bg-body overflow-hidden">
      <div className="container mx-auto space-y-12 sm:px-6 max-w-[1460px] lg:py-20 py-12 px-5 lg:px-20">
        {/* Heading Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center max-w-2xl mx-auto space-y-4"
        >
          <h2 className="font-semibold text-xl sm:text-2xl md:text-3xl lg:text-[38px] xl:text-5xl">
            Our Trusted Brands
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
            Discover our diverse portfolio of healthcare brands, each dedicated
            to excellence and innovation in medical care and technology.
          </p>
        </motion.div>

        {/* First Row: Right to Left */}
        <HorizontalSlider brands={brands} direction="left" speed={25} />
      </div>
    </section>
  );
};

export default TrustedBrands;
