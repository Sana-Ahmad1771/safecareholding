import React from "react";
import Image from "next/image";

const QualityProducts = () => {
  return (
    <section className="bg-body text-dark-2 lg:py-20 py-12 px-5 lg:px-20">
      <div className="container mx-auto px-5 lg:px-20 py-12 lg:py-20 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        {/* Images Section */}
        <div className="flex flex-col sm:flex-row gap-6 flex-1 justify-center">
          <Image
            src="/product-1.png"
            alt="Quality Product 1"
            width={600}
            height={400}
            className="w-full max-w-[300px] sm:max-w-[250px] lg:max-w-[280px] h-auto object-contain rounded-lg shadow-md"
          />
          <Image
            src="/product-2.png"
            alt="Quality Product 2"
            width={600}
            height={400}
            className="w-full max-w-[300px] sm:max-w-[250px] lg:max-w-[280px] h-auto object-contain rounded-lg shadow-md"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h2 className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[38px] xl:text-5xl text-dark-2">
            Committed To Deliver <br /> Quality Products
          </h2>
          <div className="w-[389px] h-0.5 bg-gray-4 "></div>
          <p className="text-base sm:text-lg leading-relaxed">
            Your trusted partner for all medical product needs. We are the
            leading supplier of high-quality medical products, catering to
            hospitals, clinics, healthcare professionals, and individuals.
            <br /> <br />
            With our vast range of products, competitive prices, and exceptional
            customer service, we aim to be your one-stop destination for all
            your medical supply requirements.
          </p>
        </div>
      </div>
    </section>
  );
};

export default QualityProducts;
