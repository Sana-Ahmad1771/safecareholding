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
    { name: "Binali", logo: "/binali.png", description: "Healthcare solutions" },
    { name: "Care Medical", logo: "/caremedical.png", description: "Medical equipment" },
    { name: "Jurhy", logo: "/jurhy.png", description: "Pharmaceuticals" },
    { name: "Safefast", logo: "/safefast.png", description: "Rapid diagnostics" },
    { name: "Safecare Technology", logo: "/safecaretechnology.png", description: "Health tech innovation" },
    { name: "Safecare Medical Industries", logo: "/safecaremedicalindustries.png", description: "Medical manufacturing" },
  ];

  return (
    <section className="pt-10 pb-20 bg-body overflow-hidden">
      <div className="container mx-auto sm:px-6 max-w-[1460px] lg:py-20 py-12 px-5 lg:px-20">
        {/* Enhanced Header Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 text-center">
          <motion.h2 
            className="text-dark-2 tracking-wide uppercase font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[38px] xl:text-5xl mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Trusted Brands
          </motion.h2>
          <motion.p 
            className="text-gray-600 max-w-2xl mx-auto text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover our diverse portfolio of healthcare brands, each dedicated to excellence 
            and innovation in medical care and technology.
          </motion.p>
        </div>

        {/* First Row: Right to Left */}
        <HorizontalSlider brands={brands} direction="left" speed={25} />

        {/* Brand Highlights Section */}
        <motion.div 
          className="mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold text-center text-gray-800 mb-8 sm:mb-12">
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
                  <h4 className="font-semibold text-gray-800 text-lg">{brand.name}</h4>
                </div>
                <p className="text-gray-600 text-sm sm:text-base">
                  {brand.description} - Providing innovative solutions for modern healthcare challenges.
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="text-center mt-16 sm:mt-20 bg-gradient-to-r from-[#1eb7b1] to-[#159a95] rounded-2xl p-8 sm:p-12 text-white"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4">
            Ready to Partner With Us?
          </h3>
          <p className="max-w-xl mx-auto mb-6 text-sm sm:text-base opacity-90">
            Join thousands of healthcare providers who trust our brands for quality, reliability, and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 sm:px-8 py-3 bg-white text-[#1eb7b1] font-semibold rounded-full hover:bg-gray-100 transition-colors duration-200 shadow-lg">
              Become a Partner
            </button>
            <button className="px-6 sm:px-8 py-3 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-[#1eb7b1] transition-all duration-200">
              View All Products
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustedBrands;