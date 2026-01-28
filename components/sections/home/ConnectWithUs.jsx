// components/ConnectWithUs.jsx
"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const images = [
  { src: "/img/connect (1).jpg", aspect: "aspect-[4/3]" },
  { src: "/img/connect (2).jpg", aspect: "aspect-[3/4]" },
  { src: "/img/connect (3).jpg", aspect: "aspect-[1/1]" },
  { src: "/img/connect (4).jpg", aspect: "aspect-[16/9]" },
  { src: "/img/connect (5).jpg", aspect: "aspect-[4/3]" },
  { src: "/img/connect (6).jpg", aspect: "aspect-[3/4]" },
  { src: "/img/connect (7).jpg", aspect: "aspect-[1/1]" },

  // duplicate (seamless loop)
  { src: "/img/connect (1).jpg", aspect: "aspect-[4/3]" },
  { src: "/img/connect (2).jpg", aspect: "aspect-[3/4]" },
  { src: "/img/connect (3).jpg", aspect: "aspect-[1/1]" },
  { src: "/img/connect (4).jpg", aspect: "aspect-[16/9]" },
  { src: "/img/connect (5).jpg", aspect: "aspect-[4/3]" },
  { src: "/img/connect (6).jpg", aspect: "aspect-[3/4]" },
  { src: "/img/connect (7).jpg", aspect: "aspect-[1/1]" },
];

export default function ConnectWithUs() {
  return (
    <section className="w-full py-10 sm:py-12 md:py-14 overflow-hidden">
      <h3 className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl tracking-[0.25em] sm:tracking-[0.35em] text-[#2677a7] font-medium mb-10 sm:mb-14 md:mb-20 px-4">
        CONNECT WITH US
      </h3>

      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          loop
          loopAdditionalSlides={images.length}
          slidesPerView="auto"
          // ✅ responsive spacing
          spaceBetween={12}
          breakpoints={{
            480: { spaceBetween: 16 },
            640: { spaceBetween: 18 },
            768: { spaceBetween: 22 },
            1024: { spaceBetween: 28 },
            1280: { spaceBetween: 32 },
          }}
          speed={9000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            reverseDirection: true, // right -> left
          }}
          allowTouchMove={false}
          className="w-full marquee-swiper [&_.swiper-wrapper]:items-end px-3 sm:px-6 lg:px-10"
        >
          {images.map((item, i) => (
            <SwiperSlide key={i} className="!w-auto flex items-end">
              <div
                className="relative overflow-hidden rounded-lg sm:rounded-xl"
                // ✅ responsive slide width
                style={{ width: "clamp(120px, 22vw, 260px)" }}
              >
                <div className={`relative ${item.aspect}`}>
                  <Image
                    src={item.src}
                    alt={`connect-${i}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 480px) 120px, (max-width: 768px) 160px, (max-width: 1024px) 200px, 260px"
                    priority={i < 3}
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ✅ Force linear motion (NO easing pause) */}
      <style jsx global>{`
        .marquee-swiper .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>
    </section>
  );
}
