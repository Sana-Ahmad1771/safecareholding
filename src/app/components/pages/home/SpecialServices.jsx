import React from "react";
import {
  FaHospital,
  FaClinicMedical,
  FaFileInvoiceDollar,
  FaPills,
  FaFileSignature,
  FaCogs,
} from "react-icons/fa";

const SpecialServices = () => {
  const servicesLeft = [
    {
      icon: <FaHospital />,
      title: "Surgical Kits / Pack",
      description:
        "Cortex Clinical Management System provides a user-friendly technique of EMR, Eclaim procedure, and other operations in Clinics & Medical Centers.",
    },
    {
      icon: <FaClinicMedical />,
      title: "Clinic Management System",
      description:
        "Cortex Clinical Management System provides a user-friendly technique of EMR, Eclaim procedure, and other operations in Clinics & Medical Centers.",
    },
    {
      icon: <FaFileInvoiceDollar />,
      title: "Eclaim Management System",
      description:
        "Hospitals can use our e-claim management system to prepare and submit their e-claims to the appropriate insurance carriers.",
    },
  ];

  const servicesRight = [
    {
      icon: <FaPills />,
      title: "Pharmacy Management System",
      description:
        "In today's pharmacy industry, you need software solutions that address all aspects of providing pharmacy products to patients.",
    },
    {
      icon: <FaFileSignature />,
      title: "Prior Authorization System",
      description:
        "The Cortex Prior Auth System provides a thorough process for the insurance department's requirement for prior authorization approval.",
    },
    {
      icon: <FaCogs />,
      title: "Integrated ERP Solutions",
      description:
        "Cortex Integrated ERP is a flexible solution that provides unmatched value and efficiency for your business operations.",
    },
  ];

  return (
    <section className="bg-body text-dark-2">
      <div className="flex flex-col lg:flex-row">
        {/* Left column inside container */}
        <div className="w-full lg:flex-1 py-12 lg:py-20 px-5 lg:px-20 min-h-[600px] lg:h-[820px] flex flex-col justify-center lg:items-end space-y-10">
          {/* Heading */}
          <div className="mb-8 lg:mb-12 w-full text-left max-w-2xl">
            <h2 className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[38px] xl:text-5xl">
              Special Services
            </h2>
            <div className="border border-primary bg-primary h-1 w-12 mt-3"></div>
          </div>

          {servicesLeft.map((service, index) => (
            <div
              key={index}
              className="flex gap-4 items-start max-w-2xl flex-col sm:flex-row"
            >
              {/* Icon Box */}
              <div className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-1/20 text-primary text-xl shrink-0">
                {service.icon}
              </div>
              {/* Text */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-1">
                  {service.title}
                </h3>
                <p className="text-dark-2/80 text-sm sm:text-base  leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Right column with full-width background */}
        <div
          className="w-full lg:flex-1 min-h-[600px] lg:h-[820px] bg-no-repeat bg-cover bg-center"
          style={{
            backgroundImage: "url('/services-right.png')",
          }}
        >
          {/* Inner content box, same padding as left */}
          <div className="w-full h-full flex flex-col justify-center py-12 lg:py-20 px-5 lg:px-20 space-y-10">
            {/* Transparent heading placeholder to align with left */}
            <div className="mb-8 lg:mb-12">
              <h2 className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[38px] xl:text-5xl text-transparent">
                Special Services
              </h2>
              <div className="border border-transparent bg-transparent h-1 w-12 mt-3"></div>
            </div>

            {servicesRight.map((service, index) => (
              <div
                key={index}
                className="flex gap-4 items-start text-dark-2 flex-col sm:flex-row max-w-[100%]"
              >
                {/* Icon Box */}
                <div className="w-10 h-10 flex items-center justify-center rounded-md bg-white/20 text-dark-2 text-xl shrink-0">
                  {service.icon}
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-base sm:text-lg font-semibold mb-1">
                    {service.title}
                  </h3>
                  <p className="text-dark-2 text-sm sm:text-base leading-relaxed">
                    {service.description}
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

export default SpecialServices;
