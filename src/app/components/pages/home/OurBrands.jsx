"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { GoArrowRight, GoArrowLeft } from "react-icons/go";

const OurBrands = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const cards = [
    {
      id: 1,
      title: "Safecare Holding\nCompany",
      hoverTitle: "Safecare Holding Company",
      description:
        "Safecare Holding company is your premier destination for healthcare products and medical supplies. We offer a wide range of high-quality products with convenient online shopping and fast delivery to meet all your healthcare needs.",
      image: "/card-1.png",
    },
    {
      id: 2,
      title: "Jurhy Online\nStore",
      hoverTitle: "Jurhy Online Store",
      description:
        "Jurhy Online Store is your premier destination for healthcare products and medical supplies. We offer a wide range of high-quality products with convenient online shopping and fast delivery to meet all your healthcare needs.",
      image: "/card-2.png",
    },
    {
      id: 3,
      title: "Care Medical\nSolutions",
      hoverTitle: "Care Medical Solutions",
      description:
        "Care Medical Solutions provides cutting-edge medical equipment and innovative healthcare technology. We partner with hospitals and clinics to deliver reliable medical devices that improve patient outcomes.",
      image: "/product-1.png",
    },
    {
      id: 4,
      title: "Binali\nPharmaceuticals",
      hoverTitle: "Binali Pharmaceuticals",
      description:
        "Binali Pharmaceuticals specializes in developing and manufacturing high-quality generic and specialty medications. Our commitment to research and development ensures access to affordable, effective treatments.",
      image: "/product-2.png",
    },
    {
      id: 5,
      title: "Binali\nPharmaceuticals",
      hoverTitle: "Binali Pharmaceuticals",
      description:
        "Binali Pharmaceuticals specializes in developing and manufacturing high-quality generic and specialty medications. Our commitment to research and development ensures access to affordable, effective treatments.",
      image: "/card-2.png",
    },
  ];

  return (
    <section
      className="relative lg:py-20 py-12 px-5 lg:px-10 xl:px-20 flex items-end justify-center text-dark-2 bg-no-repeat bg-cover bg-center lg:h-[765px]"
      style={{
        backgroundImage: "url('/ourbrands-bg.png')",
      }}
    >
      <div className="w-full h-auto flex lg:flex-col flex-col-reverse">
        {/* Navigation Buttons */}
        <div className="container mx-auto flex lg:justify-end justify-center gap-4">
          <button
            onClick={() => swiperInstance?.slidePrev()}
            disabled={isBeginning}
            className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center text-white transition-all ${
              isBeginning ? "opacity-40 cursor-not-allowed" : "hover:scale-110"
            }`}
            aria-label="Previous brands"
          >
            <GoArrowLeft size={30} />
          </button>
          <button
            onClick={() => swiperInstance?.slideNext()}
            disabled={isEnd}
            className={`w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center text-white transition-all ${
              isEnd ? "opacity-40 cursor-not-allowed" : "hover:scale-110"
            }`}
            aria-label="Next brands"
          >
            <GoArrowRight size={30} />
          </button>
        </div>

        {/* content + cards */}
        <div className="container mx-auto h-full flex flex-col lg:flex-row items-end justify-between gap-10 lg:gap-16">
          {/* Text Section */}
          <div className="lg:w-3/5 w-full space-y-6 text-white text-center lg:text-left">
            <h2 className="font-semibold text-lg sm:text-2xl md:text-3xl lg:text-[38px] xl:text-5xl">
              Our Brands
            </h2>
            <div className="border bg-white border-white w-12 h-1 mx-auto lg:mx-0 mb-4"></div>
            <p className="text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              At Safecare Holding Company, we are committed to transforming the
              healthcare landscape by providing innovative solutions and
              exceptional customer experiences. With a diverse portfolio of
              subsidiaries, we cover a wide range of healthcare needs, ensuring
              that individuals and organizations have access to the best
              products and services available.
            </p>
          </div>

          {/* Swiper Section */}
          <div className="lg:w-1/2 w-full relative">
            <Swiper
              modules={[Navigation]}
              onSwiper={(swiper) => {
                setSwiperInstance(swiper);
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setIsBeginning(swiper.isBeginning);
                setIsEnd(swiper.isEnd);
              }}
              spaceBetween={10}
              slidesPerView={1}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 10 },
                768: { slidesPerView: 2, spaceBetween: 10 },
                1024: { slidesPerView: 2, spaceBetween: 10 },
                1280: { slidesPerView: 2, spaceBetween: 10 },
              }}
              className="our-brands-swiper"
            >
              {cards.map((card) => (
                <SwiperSlide key={card.id}>
                  <motion.div
                    className="relative w-full h-[404px] rounded-2xl overflow-hidden cursor-pointer"
                    whileHover="hover"
                    initial="rest"
                    animate="rest"
                  >
                    {/* Background Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url('${card.image}')` }}
                    />

                    {/* Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-white"
                      variants={{ rest: { opacity: 0 }, hover: { opacity: 1 } }}
                      transition={{ duration: 0.3 }}
                    />

                    {/* Hover Content */}
                    <motion.div
                      className="absolute inset-0 p-6 text-dark-2 flex flex-col justify-start"
                      variants={{
                        rest: { opacity: 0, y: -20 },
                        hover: { opacity: 1, y: 0 },
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <div>
                        <h3 className="text-xl font-bold mb-4">
                          {card.hoverTitle}
                        </h3>
                        <p className="text-sm leading-relaxed mb-6">
                          {card.description}
                        </p>
                      </div>
                      <button className="self-start bg-primary text-dark-2 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors">
                        Read more
                      </button>
                    </motion.div>

                    {/* Default Content */}
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 pl-4 text-lg sm:text-xl font-semibold text-dark-2 bg-white py-2"
                      variants={{
                        rest: { opacity: 1, y: 0 },
                        hover: { opacity: 0, y: 20 },
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      {card.title.split("\n").map((line, index) => (
                        <span key={index}>
                          {line}
                          {index < card.title.split("\n").length - 1 && <br />}
                        </span>
                      ))}
                    </motion.div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurBrands;
