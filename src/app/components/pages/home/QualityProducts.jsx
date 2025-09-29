import React from "react";
import Image from "next/image";

const QualityProducts = () => {
  return (
    <section className="bg-body text-dark-2 py-12 sm:py-16 md:py-20 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 2xl:px-40">
      <div className="container mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-10 lg:gap-16 xl:gap-20">
        {/* Images Section */}
        <div className="flex flex-col sm:flex-row gap-6 flex-1 justify-center items-center w-full">
          <Image
            src="/product-1.png"
            alt="Quality Product 1"
            width={600}
            height={400}
            className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px] xl:max-w-[360px] h-auto object-contain rounded-lg shadow-md"
          />
          <Image
            src="/product-2.png"
            alt="Quality Product 2"
            width={600}
            height={400}
            className="w-full max-w-[280px] sm:max-w-[300px] md:max-w-[320px] lg:max-w-[340px] xl:max-w-[360px] h-auto object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-6 text-center lg:text-left max-w-2xl lg:max-w-none">
          <h2 className="font-semibold text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-5xl leading-snug">
            Committed To Deliver <br className="hidden sm:block" /> Quality Products
          </h2>

          {/* Divider */}
          <div className="mx-auto lg:mx-0 w-20 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-0.5 bg-gray-4"></div>

          <p className="text-lg sm:text-base md:text-lg lg:text-[22px] leading-relaxed mx-auto lg:mx-0">
            Your trusted partner for all medical product needs. We are the
            leading supplier of high-quality medical products, catering to
            hospitals, clinics, healthcare professionals, and individuals.
            <br />
            <br />
            With our vast range of products, competitive prices, and exceptional
            customer service, we aim to be your one-stop destination for all
            your medical supply requirements.
          </p>
        </div>
      </div>

       {/* Stats Section - Optional */}
      <div className="container mx-auto mt-12 sm:mt-16 lg:mt-20 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 text-center">
        <div className="bg-gradient-to-br from-white to-primary-20 p-4 sm:p-6 rounded-lg shadow-md">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">500+</div>
          <div className="text-sm sm:text-base text-gray-600 mt-2">Products</div>
        </div>
        <div className="bg-gradient-to-br from-white to-primary-20 p-4 sm:p-6 rounded-lg shadow-md">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">50+</div>
          <div className="text-sm sm:text-base  text-gray-600 mt-2">Partners</div>
        </div>
        <div className="bg-gradient-to-br from-white to-primary-20 p-4 sm:p-6 rounded-lg shadow-md">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">10K+</div>
          <div className="text-sm sm:text-base text-gray-600 mt-2">Customers</div>
        </div>
        <div className="bg-gradient-to-br from-white to-primary-20 p-4 sm:p-6 rounded-lg shadow-md">
          <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary">15+</div>
          <div className="text-sm sm:text-base text-gray-600 mt-2">Years Experience</div>
        </div>
      </div>
    </section>
  );
};

export default QualityProducts;