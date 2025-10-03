"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const GroupStrategy = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const fadeSlideLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeSlideRight = {
    hidden: { opacity: 0, x: 80 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const fadeUp = (delay = 0) => ({
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, delay, ease: "easeOut" },
    },
  });

  return (
    <section
      id="strategy"
      ref={sectionRef}
      className="relative overflow-hidden scroll-mt-50 px-4 sm:px-8 lg:px-20 py-12 lg:pb-16 lg:pt-40 bg-body text-dark-2"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center items-center relative z-40"
          variants={fadeSlideLeft}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Image
            src="/safecare.png"
            alt="Safecare Manufacturing Facility"
            width={600}
            height={400}
            className="xl:absolute rounded-2xl lg:z-40 w-full max-w-[clamp(320px,40vw,600px)] h-auto max-h-[clamp(280px,100vh,500px)] lg:max-h-[clamp(300px,100vh,650px)] xl:max-h-[clamp(600px,100vh,750px)]"
            priority
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 space-y-6 overflow-hidden"
          variants={fadeSlideRight}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <h2 className="font-semibold text-2xl md:text-3xl lg:text-[38px] xl:text-5xl">
            Our Manufacturing Strategy
          </h2>

          <motion.div
            className="mx-0 w-20 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-0.5 bg-gray-4"
            variants={{
              hidden: { scaleX: 0, opacity: 0 },
              visible: { scaleX: 1, opacity: 1, transition: { duration: 0.6, delay: 0.2 } },
            }}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />

          <motion.p
            className="leading-relaxed text-lg sm:text-base md:text-lg lg:text-[22px]"
            style={{ fontSize: "clamp(1rem,2vw,1.25rem)" }}
            variants={fadeUp(0.2)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <span className="font-semibold">Safecare Holding Company</span> operates 
            on an integrated manufacturing strategy that combines precision production 
            with efficient supply chain management.
          </motion.p>

          <motion.p
            className="leading-relaxed"
            style={{ fontSize: "clamp(1rem,2vw,1.25rem)" }}
            variants={fadeUp(0.4)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            Our vertical integration allows complete quality control from raw materials 
            to finished products, ensuring excellence across surgical kits, PPE, and 
            medical consumables.
          </motion.p>

          <motion.p
            className="leading-relaxed"
            style={{ fontSize: "clamp(1rem,2vw,1.25rem)" }}
            variants={fadeUp(0.6)}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            By leveraging shared manufacturing infrastructure and quality systems, 
            we drive operational efficiency and deliver greater value to healthcare 
            providers across the region.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default GroupStrategy;