"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

const Gallery = () => {
  const images = [
    "/gallery-1.png",
    "/gallery-2.png",
    "/gallery-3.png",
    "/gallery-4.png",
    "/gallery-5.png",
    "/gallery-6.png",
    "/gallery-7.png",
    "/gallery-8.png",
  ];

  return (
    <section
    id="gallery"
    className="py-16 px-4 scroll-mt-30 overflow-hidden">
      {/* Section Title */}
      <div className="text-center flex flex-col items-center container mx-auto space-y-4 mb-10">
        <h2 className="font-semibold text-2xl md:text-3xl lg:text-[38px] xl:text-5xl leading-snug">
          Our Gallery
        </h2>
        <div className="flex justify-center">
          {/* Divider */}
          <motion.div
            className="mx-auto lg:mx-0 w-20 sm:w-32 md:w-40 lg:w-48 xl:w-56 h-1 bg-primary"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
        </div>

        <p className="max-w-4xl text-lg sm:text-base md:text-lg lg:text-[22px] leading-relaxed">
          Discover Safecare Holding's commitment to excellence through our
          projects, innovations, and dedicated team in action
        </p>
      </div>

      {/* Centered Border Frame */}
      <div className="relative flex flex-col items-center justify-center w-full mx-auto">
        <div className="flex items-center justify-center ">
          {/* Responsive Border Box */}
          <div className="absolute w-[180px] h-[200px] sm:w-[320px] sm:h-[230px] md:w-[310px] md:h-[260px] lg:w-[400px] lg:h-[280px] xl:w-[280px] xl:h-[305px] top-20 bottom-0 border-4 lg:border-6 border-primary rounded-md pointer-events-none z-20"></div>
        </div>
        {/* Swiper Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{
            clickable: true,
            el: ".swiper-pagination",
            bulletClass: "swiper-pagination-bullet",
            bulletActiveClass: "swiper-pagination-bullet-active-primary",
          }}
          className="w-full max-w-6xl"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            320: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
          }}
        >
          {images.map((src, idx) => (
            <SwiperSlide
              key={idx}
              className="flex py-20 justify-center items-center"
            >
              <div className="overflow-hidden rounded-md flex items-center justify-center">
                <Image
                  src={src}
                  alt={`Safecare Holding Gallery ${idx + 1}`}
                  width={300}
                  height={220}
                  className="object-cover w-[280px] h-[200px] sm:w-[320px] sm:h-[230px] md:w-[360px] md:h-[260px] lg:w-[400px] lg:h-[280px] xl:w-[440px] xl:h-[300px]"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Pagination Container */}
        <div className="swiper-pagination mt-8 !relative"></div>
      </div>

      <style jsx global>{`
        .swiper-pagination-bullet {
          background-color: #ccc;
          opacity: 0.7;
          width: 12px;
          height: 12px;
        }
        .swiper-pagination-bullet-active-primary {
          background-color: var(--primary-color, #1eb7b1) !important;
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default Gallery;
