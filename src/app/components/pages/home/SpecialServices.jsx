"use client";
import React from "react";
import {
  FaHospital,
  FaClinicMedical,
  FaFileInvoiceDollar,
  FaPills,
  FaFileSignature,
  FaCogs,
} from "react-icons/fa";
import { motion } from "framer-motion";

const SpecialServices = () => {
  const servicesLeft = [
    {
      icon: <FaHospital size={25} />,
      title: "Surgical Kits / Pack",
      description:
        "Cortex Clinical Management System provides a user-friendly technique of EMR, Eclaim procedure, and other operations in Clinics & Medical Centers.",
    },
    {
      icon: <FaClinicMedical size={25} />,
      title: "Clinic Management System",
      description:
        "Cortex Clinical Management System provides a user-friendly technique of EMR, Eclaim procedure, and other operations in Clinics & Medical Centers.",
    },
    {
      icon: <FaFileInvoiceDollar size={25} />,
      title: "Eclaim Management System",
      description:
        "Hospitals can use our e-claim management system to prepare and submit their e-claims to the appropriate insurance carriers.",
    },
  ];

  const servicesRight = [
    {
      icon: <FaPills size={25} />,
      title: "Pharmacy Management System",
      description:
        "In today's pharmacy industry, you need software solutions that address all aspects of providing pharmacy products to patients.",
    },
    {
      icon: <FaFileSignature size={25} />,
      title: "Prior Authorization System",
      description:
        "The Cortex Prior Auth System provides a thorough process for the insurance department's requirement for prior authorization approval.",
    },
    {
      icon: <FaCogs size={25} />,
      title: "Integrated ERP Solutions",
      description:
        "Cortex Integrated ERP is a flexible solution that provides unmatched value and efficiency for your business operations.",
    },
  ];

  return (
    <section className="bg-body text-dark-2 overflow-hidden">
      <div className="flex flex-col lg:flex-row ">
        {/* Left column */}
        <div className="w-full lg:flex-1 py-20 px-5 lg:px-20 min-h-[700px] lg:max-h-[920px] flex flex-col justify-center lg:items-end space-y-10">
          {/* Heading */}
          <motion.div
            className="mb-8 lg:mb-12 w-full text-left max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <h2 className="font-semibold text-2xl md:text-3xl lg:text-[38px] xl:text-5xl leading-snug bg-gradient-to-r text-dark-2 bg-clip-text mb-6">
              Healthcare <br /> <span className=" text-primary">Management</span> Systems
            </h2>
            {/* divider */}
            <motion.div
              className="border bg-primary border-primary w-12 h-1 lg:mx-0 mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.p
              className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Specialized software solutions and management systems that
              streamline healthcare operations, improve patient care
              coordination, and enhance administrative efficiency.
            </motion.p>
          </motion.div>

          {servicesLeft.map((service, index) => (
            <motion.div
              key={index}
              className="flex gap-4 items-start max-w-2xl flex-col sm:flex-row border-primary-20 shadow-primary/30 shadow-md p-2"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-md bg-gray-9 text-primary text-xl shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1">
                  {service.title}
                </h3>
                <p className="text-dark-2/80 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right column */}
        <div className="relative w-full lg:flex-1 py-12 lg:py-20 px-5 lg:px-20 min-h-[600px] lg:max-h-[920px] flex flex-col justify-center lg:items-end space-y-10">
          {/* Background image */}
          <div
            className="absolute z-30 right-0 top-0 w-[100%] lg:flex-1 min-h-full lg:h-full bg-no-repeat bg-cover bg-center"
            style={{
              backgroundImage: "url('/services-right.png')",
            }}
          />

          {/* Transparent heading placeholder for spacing */}
          <motion.div
            className="hidden lg:block mb-8 lg:mb-12 w-full text-left max-w-2xl text-transparent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false, amount: 0.2 }}
          >
             <h2 className="text-3xl md:text-5xl  font-bold bg-transparent text-transparent bg-clip-text mb-6">
              Healthcare <br /> <span className="block text-transparent">Management</span> Systems
            </h2>
            {/* divider */}
            <motion.div
              className="border bg-transparent border-transparent w-12 h-1 lg:mx-0 mb-4"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: 0.3 }}
            />
            <motion.p
              className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              Specialized software solutions and management systems that
              streamline healthcare operations, improve patient care
              coordination, and enhance administrative efficiency.
            </motion.p>
          </motion.div>

          {servicesRight.map((service, index) => (
            <motion.div
              key={index}
              className="flex relative z-40 gap-4 items-start max-w-2xl flex-col sm:flex-row border-gray-5 shadow-dark-2/30 shadow-md p-2"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div className="w-11 h-11 flex items-center justify-center rounded-md bg-white text-primary text-xl shrink-0">
                {service.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1">
                  {service.title}
                </h3>
                <p className="text-dark-2/80 text-sm sm:text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialServices;
