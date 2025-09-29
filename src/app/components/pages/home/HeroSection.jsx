"use client";
import React from "react";
import Image from "next/image";

export const HeroSection = () => {
  return (
    <section
      className="relative w-full bg-white overflow-hidden bg-cover bg-center bg-no-repeat flex items-center justify-center"
      aria-label="Hero Section"
      style={{
        backgroundImage: "url('/Herosection-bg.png')",
        minHeight: "calc(100vh - 80px)",
        height: "calc(100vh - 80px)",
      }}
    >
      {/* Overlay for better text contrast */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/60 to-transparent pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-center h-full px-4 sm:px-8 lg:px-20 py-4 gap-6 w-full max-w-7xl mx-auto">
        {/* Text Section */}
        <div className="text-center lg:text-left max-w-xl animate-fadeIn flex flex-col justify-center h-full">
          <p
            className="font-semibold text-[#1eb7b1] tracking-wide mb-2"
            style={{ fontSize: "clamp(1rem, 2vw, 1.75rem)" }}
          >
            Welcome to
          </p>
          <h1
            className="font-extrabold text-[#222] leading-tight drop-shadow-lg mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
          >
            Safecare Holding
            <br />
            Company
          </h1>
          <div className="mt-2 mb-6 mx-auto lg:mx-0 w-24 sm:w-40 md:w-60 lg:w-[200px] h-[3px] bg-[#1eb7b1] rounded-full shadow" />
          <p
            className="max-w-[600px] mx-auto lg:mx-0 font-normal text-[#333] leading-relaxed mb-6"
            style={{ fontSize: "clamp(0.9rem, 2vw, 1.25rem)" }}
          >
            Qualified staff with expertise in services we offer for more
            <br className="hidden sm:block" />
            reasonable cost with love. Just explore more!
          </p>
          {/* CTA Button */}
          <a
            href="#about"
            className="inline-block xl:w-fit px-6 py-2 bg-[#1eb7b1] text-white font-semibold rounded-full shadow-lg hover:bg-[#159a95] transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#1eb7b1] focus:ring-offset-2 text-base"
            aria-label="Learn more about Safecare Holding"
            style={{ fontSize: "clamp(1rem, 2vw, 1.15rem)" }}
          >
            Learn More
          </a>
        </div>

        {/* Banner main image */}
        <div className="relative w-full lg:w-auto flex-1 h-full flex items-end justify-center">
          <div className="relative w-full max-w-[220px] sm:max-w-[320px] md:max-w-[420px] lg:max-w-[539px] h-full max-h-[calc(100vh-80px)]">
            <Image
              src="/hero-men.png"
              alt="Smiling healthcare professional representing Safecare Holding"
              fill
              priority
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
