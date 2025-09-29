import React from "react";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section className="relative px-4 sm:px-8 lg:px-20 py-8 lg:py-16 bg-body text-dark-2">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center">
          <Image
            src="/about-us.png"
            alt="About Us"
            width={600}
            height={400}
            className="xl:absolute lg:z-20 2xl:top-2 xl:top-10 top-1 w-full max-w-[clamp(220px,40vw,500px)] h-auto max-h-[clamp(180px,100vh,400px)] lg:max-h-[clamp(200px,100vh,550px)] xl:max-h-[clamp(500px,100vh,650px)] object-contain"
            priority
          />
        </div>

        {/* Text Section */}
        <div className="flex-1 space-y-6">
          <h2
            className="font-semibold mb-4 text-dark-2"
            style={{ fontSize: "clamp(1.25rem,3vw,2.5rem)" }}
          >
            About Us
          </h2>
          <p
            className="leading-relaxed text-lg sm:text-base md:text-lg lg:text-[22px]"
            style={{ fontSize: "clamp(1rem,2vw,1.25rem)" }}
          >
            Welcome to{" "}
            <span className="font-semibold">Safecare Holding Company</span>, a
            dynamic group of companies operating in various sectors of the
            healthcare industry. With a strong focus on delivering high-quality
            products and services, Safecare Holding Company has established
            itself as a trusted and reliable partner in the market.
          </p>
          <p
            className="leading-relaxed"
            style={{ fontSize: "clamp(1rem,2vw,1.25rem)" }}
          >
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
