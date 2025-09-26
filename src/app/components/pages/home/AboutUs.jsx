import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative lg:py-20 py-12 px-5 lg:px-20 bg-body text-dark-2">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        {/* Image Section */}
        <div className=" flex-1 flex justify-center">
          <Image
            src="/about-us.png"
            alt="About Us"
            width={600}
            height={400}
            className="w-full max-w-[500px] h-auto max-h-[691px] object-contain z-40 absolute bottom-0 top-2"
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h2 className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[38px] xl:text-5xl mb-4 text-dark-2">
            About Us
          </h2>
          <p className="text-base sm:text-lg leading-relaxed">
            Welcome to <span className="font-semibold">Safecare Holding Company</span>, 
            a dynamic group of companies operating in various sectors of the 
            healthcare industry. With a strong focus on delivering high-quality 
            products and services, Safecare Holding Company has established itself 
            as a trusted and reliable partner in the market.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            At Safecare Holding Company, we are committed to transforming the 
            healthcare landscape by providing innovative solutions and 
            exceptional customer experiences. With a diverse portfolio of 
            subsidiaries, we cover a wide range of healthcare needs, ensuring 
            that individuals and organizations have access to the best products 
            and services available.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
