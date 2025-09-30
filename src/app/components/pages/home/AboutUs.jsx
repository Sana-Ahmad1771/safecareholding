"use client";
import React, { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const AboutUs = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "-100px" });

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative scroll-mt-50 px-4 sm:px-8 lg:px-20 py-8 lg:pb-16 lg:pt-32 bg-body text-dark-2"
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center items-center relative z-40"
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
          transition={{ duration: 0.7 }}
        >
          <Image
            src="/about-us.png"
            alt="About Us"
            width={600}
            height={400}
            className="xl:absolute lg:z-40 w-full max-w-[clamp(320px,40vw,600px)] h-auto max-h-[clamp(280px,100vh,500px)] lg:max-h-[clamp(300px,100vh,650px)] xl:max-h-[clamp(600px,100vh,750px)] object-contain"
            priority
          />
        </motion.div>

        {/* Text Section */}
        <motion.div
          className="flex-1 space-y-6 overflow-hidden"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7 }}
        >
          <motion.h2
            className="font-semibold mb-4 text-dark-2"
            style={{ fontSize: "clamp(1.25rem,3vw,2.5rem)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Us
          </motion.h2>

          <motion.p
            className="leading-relaxed text-lg sm:text-base md:text-lg lg:text-[22px]"
            style={{ fontSize: "clamp(1rem,2vw,1.25rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Welcome to{" "}
            <span className="font-semibold">Safecare Holding Company</span>, a
            dynamic group of companies operating in various sectors of the
            healthcare industry. With a strong focus on delivering high-quality
            products and services, Safecare Holding Company has established
            itself as a trusted and reliable partner in the market.
          </motion.p>

          <motion.p
            className="leading-relaxed"
            style={{ fontSize: "clamp(1rem,2vw,1.25rem)" }}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            At Safecare Holding Company, we are committed to transforming the
            healthcare landscape by providing innovative solutions and
            exceptional customer experiences. With a diverse portfolio of
            subsidiaries, we cover a wide range of healthcare needs, ensuring
            that individuals and organizations have access to the best products
            and services available.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;


