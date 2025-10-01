"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";
import { ChevronLeft, ChevronRight, MessageCircle } from "lucide-react"; // ✅ Lucide Icons
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

export const HeroSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      title: "Safecare",
      subtitle: "Holding Company",
      description:
        "Leading healthcare innovation with trusted solutions and exceptional services across multiple brands.",
      image: "/hero-men.png",
      badge: "TRUSTED HEALTHCARE SOLUTIONS",
      background: "from-primary/20 to-accent/20",
      blob1: "bg-primary/20",
      blob2: "bg-accent/20",
      blob3: "bg-primary/15",
    },
    {
      id: 2,
      title: "Healthcare",
      subtitle: "Portfolio Excellence",
      description:
        "Diverse portfolio of healthcare brands delivering quality care and innovative medical solutions.",
      image: "/doctor-2.png",
      badge: "MULTIPLE HEALTHCARE BRANDS",
      background: "from-primary/15 to-accent/15",
      blob1: "bg-primary/15",
      blob2: "bg-accent/15",
      blob3: "bg-primary/10",
    },
    {
      id: 3,
      title: "Innovative",
      subtitle: "Medical Solutions",
      description:
        "Transforming healthcare through cutting-edge technology and compassionate patient care.",
      image: "/doctor-3.png",
      badge: "ADVANCED HEALTHCARE TECHNOLOGY",
      background: "from-primary/10 to-accent/10",
      blob1: "bg-primary/10",
      blob2: "bg-accent/10",
      blob3: "bg-primary/5",
    },
  ];

  const handleSlideChange = (swiper) => {
    setActiveSlide(swiper.realIndex);
  };

  const currentSlide = heroSlides[activeSlide];

  return (
    <section
      id="home"
      className="relative scroll-mt-50 w-full overflow-hidden flex items-center justify-center transition-all duration-1000 bg-gray-9"
      aria-label="Hero Section"
      style={{
        minHeight: "calc(100vh - 80px)",
        height: "calc(100vh - 80px)",
      }}
    >
      {/* Dynamic Background with gradient change */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${currentSlide.background} transition-all duration-1000`}
      ></div>

      {/* Geometric background elements with dynamic colors */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <motion.div
          className={`absolute -top-16 -right-16 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 ${currentSlide.blob1} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob transition-all duration-1000`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className={`absolute -bottom-16 -left-16 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 ${currentSlide.blob2} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 transition-all duration-1000`}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.5, delay: 0.5, ease: "easeOut" }}
        ></motion.div>
        <motion.div
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 ${currentSlide.blob3} rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 transition-all duration-1000`}
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

      {/* Swiper Slider */}
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          el: ".hero-pagination",
          bulletClass: "hero-bullet",
          bulletActiveClass: "hero-bullet-active",
        }}
        navigation={{
          nextEl: ".hero-next",
          prevEl: ".hero-prev",
        }}
        loop={true}
        className="w-full h-full"
        onSlideChange={handleSlideChange}
        onInit={handleSlideChange}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={slide.id}>
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
                    {slide.badge}
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
                      {slide.title}
                    </span>
                    <motion.span
                      className="block font-serif italic pb-2 text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-1 sm:mt-2"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                    >
                      {slide.subtitle}
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
                  {slide.description}
                </motion.p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 ">
                  <button className="px-6 sm:px-8 py-3 flex gap-3 justify-center items-center bg-primary text-white font-semibold rounded-full hover:bg-white hover:text-primary transition-colors duration-200 shadow-lg">
                    Explore Services  <ChevronRight size={20}/>
                  </button>
                  <button className="px-6 sm:px-8 flex gap-3 justify-center items-center py-3 border-2 border-white hover:border-primary text-primary font-semibold rounded-full hover:bg-primary hover:text-white transition-all duration-200">
                    Contact Us <MessageCircle size={20} />
                  </button>
                </div>
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
                      src={slide.image}
                      alt={`Professional healthcare expert - ${slide.title}`}
                      width={500}
                      height={600}
                      className="object-contain object-bottom w-auto h-full max-h-[180px] xs:max-h-[220px] sm:max-h-[280px] md:max-h-[340px] lg:max-h-[400px] xl:max-h-[480px] 2xl:max-h-[540px] drop-shadow-2xl"
                      priority
                    />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation - Positioned on sides like modern hero sections */}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {/* Left Navigation Button */}
        <button className="hero-prev cursor-pointer absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-dark-2 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-all pointer-events-auto">
          <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>

        {/* Right Navigation Button */}
        <button className="hero-next cursor-pointer absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-dark-4 backdrop-blur-sm flex items-center justify-center text-white hover:bg-primary transition-all pointer-events-auto">
          <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7" />
        </button>

        {/* Pagination - Positioned at bottom center */}
        <div className="hero-pagination absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20 pointer-events-auto"></div>
      </div>

      {/* Custom Pagination Styles */}
      <style jsx>{`
        .hero-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255, 255, 255, 0.5);
          border-radius: 50%;
          transition: all 0.3s ease;
          cursor: pointer;
        }
        .hero-bullet-active {
          width: 24px;
          background: var(--color-primary);
          border-radius: 8px;
        }
      `}</style>
    </section>
  );
};
