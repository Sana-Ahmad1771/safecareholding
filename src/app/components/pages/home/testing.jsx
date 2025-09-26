"use client";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const servicesLeft = [
  {
    title: "Surgical kits/Pack",
    desc: "Cortex Clinical Management System provides a user-friendly technique of EMR, Eclaim procedure, and other operations in Clinics & Medical Centers",
  },
  {
    title: "Clinic Management System",
    desc: "Cortex Clinical Management System provides a user-friendly technique of EMR, Eclaim procedure, and other operations in Clinics & Medical Centers",
  },
  {
    title: "Eclaim Management System",
    desc: "In order to prepare and submit their e-claims to the appropriate insurance carriers, hospitals can use our e-claim management system",
  },
];

const servicesRight = [
  {
    title: "Pharmacy Management System",
    desc: "In today's Pharmacy industry, you need software solutions that address all aspects of providing pharmacy products to patients",
  },
  {
    title: "Prior Authorization System",
    desc: "The Cortex Prior Auth System provides a thorough process for the insurance department's requirement for prior authorization approval.",
  },
  {
    title: "Integrated ERP Solutions",
    desc: "Cortex Integrated Enterprise Resource Planning is one such flexible ERP solution that endows matchless value for your business",
  },
];

const Testing = () => {
  return (
    <section className="relative w-full max-w-[1440px] h-[804px] mx-auto flex">
      {/* Left background overlay */}
      <div className="absolute left-0 top-0 w-1/2 h-full bg-white opacity-10" />

      {/* Right background overlay */}
      <div className="absolute right-0 top-0 w-1/2 h-full bg-[#3AC0BC] opacity-90" />

      {/* Right column image */}
      <img
        src="/services-right.png"
        alt="Special Services"
        className="absolute right-0 top-0 w-1/2 h-full object-cover"
      />

      {/* Content */}
      <div className="relative z-10 w-full flex flex-col gap-10 px-[151px] py-[116px]">
        {/* Heading */}
        <div>
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-[38px] xl:text-5xl font-semibold leading-[42px] text-[#333]">
            Special Services
          </h2>
          <div className="w-10 h-[3px] bg-[#1EB7B1] mt-4" />
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-32 gap-y-12 mt-8">
          {/* Left column */}
          <div className="flex flex-col gap-10">
            {servicesLeft.map((service, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-[43px] h-[43px] bg-[#F7F7F7] rounded-lg flex items-center justify-center shrink-0">
                  <FaCheckCircle className="text-[#1EB7B1] text-[20px]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#333]">
                    {service.title}
                  </h3>
                  <p className="w-[371px] text-[13px] leading-[18.2px] text-[#262626] mt-2">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right column */}
          <div className="flex flex-col gap-10">
            {servicesRight.map((service, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="w-[43px] h-[43px] bg-white rounded-lg flex items-center justify-center shrink-0">
                  <FaCheckCircle className="text-[#1EB7B1] text-[20px]" />
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#333]">
                    {service.title}
                  </h3>
                  <p className="w-[371px] text-[13px] leading-[18.2px] text-[#262626] mt-2">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testing;
