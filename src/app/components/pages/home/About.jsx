"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

const AboutUs = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const sectionRef = useRef(null);

  // ✅ Replay animations every time it's in view
  const isInView = useInView(sectionRef, { once: false, amount: 0.4 });

  const openVideo = () => {
    setShowVideo(true);
    setIsOpen(true);
    setTimeout(() => {
      if (videoRef.current) videoRef.current.play();
    }, 300);
  };

  const closeVideo = () => {
    setIsOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  // ✅ Variants with replay ability
  const containerVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  };

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden scroll-mt-50 px-4 sm:px-8 lg:px-20 lg:pb-[210px] lg:pt-30 bg-body text-dark-2"
    >
      <div className="container mx-auto flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16">
        {/* Left Text Content */}
        <motion.div
          className="flex-1 space-y-6 overflow-hidden"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"} // 👈 toggles on scroll
        >
          <motion.p
            variants={itemVariants}
            className="text-sm md:text-base uppercase tracking-widest text-primary border-b border-gray-500 pb-2 md:pb-3 w-fit"
          >
            Leading Healthcare Innovation
          </motion.p>

          <div className="flex flex-col gap-4 md:gap-6">
            <motion.h2
              variants={itemVariants}
              className="font-semibold mb-4 text-dark-2 text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-5xl leading-snug tracking-tight lg:leading-16 max-w-full"
            >
              The healthcare partner{" "}
              <span className="font-serif italic text-primary text-[34px] sm:text-[39px] md:text-[49px] lg:text-[59px] xl:text-[64px]">
                you can trust
              </span>
            </motion.h2>

            <motion.h5
              variants={itemVariants}
              className="max-w-full leading-relaxed md:leading-relaxed font-light text-dark-5"
              style={{ fontSize: "clamp(1rem,2vw,1.25rem)" }}
            >
              Welcome to{" "}
              <span className="font-semibold">Safecare Holding Company</span>, a
              dynamic group of companies operating in various sectors of the
              healthcare industry. With a strong focus on delivering
              high-quality products and services, Safecare Holding Company has
              established itself as a trusted and reliable partner in the
              market.
            </motion.h5>

            <motion.p
              variants={itemVariants}
              className="leading-relaxed text-dark-5"
              style={{ fontSize: "clamp(1rem,2vw,1.25rem)" }}
            >
              At Safecare Holding Company, we are committed to transforming the
              healthcare landscape by providing innovative solutions and
              exceptional customer experiences. With a diverse portfolio of
              subsidiaries, we cover a wide range of healthcare needs, ensuring
              that individuals and organizations have access to the best
              products and services available.
            </motion.p>
          </div>
        </motion.div>

        {/* Right Image/Video Content */}
        <motion.div
          className="flex-1 flex justify-center items-center relative z-40"
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <div className="relative w-full group">
            {/* Preview video */}
            <div className="relative w-full max-w-[clamp(520px,40vw,800px)] h-auto">
              <video
                src="/video.mp4"
                className="
                  w-[1200px] h-[600px] 
                  rounded-2xl 
                  shadow-lg 
                  object-cover 
                  max-h-[400px] 
                  sm:max-h-[450px] 
                  md:max-h-[500px] 
                  lg:max-h-[600px] 
                  xl:max-h-[700px]
                "
                muted
                loop
                autoPlay
                playsInline
              />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/20 rounded-2xl group-hover:bg-black/30 transition duration-300">
                <motion.button
                  onClick={openVideo}
                  className="w-16 h-14 md:w-20 md:h-16 lg:w-24 lg:h-18 flex items-center justify-center rounded-lg bg-primary text-white shadow-lg hover:bg-primary/90 transition duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg
                    className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Fullscreen Video Modal */}
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="relative w-[90%] max-w-4xl">
            {/* Close Button */}
            <motion.button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white text-3xl font-bold hover:text-gray-300 z-10 bg-black/50 rounded-full w-10 h-10 flex items-center justify-center"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              ✕
            </motion.button>

            {/* Video Player */}
            <motion.video
              ref={videoRef}
              src="/video.mp4"
              controls
              className="w-full h-auto rounded-lg shadow-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default AboutUs;
