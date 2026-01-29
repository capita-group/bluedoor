// components/EventHero.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ import image from /public/img
import plateImg from "@/public/img/eventHero.jpg";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function EventHero() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <>
      {/* ✅ MOBILE IMAGE */}
      <div
        className="relative block min-h-[260px] w-full overflow-hidden lg:hidden"
        data-aos="zoom-in"
      >
        <Image
          src={plateImg}
          alt="Event"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_10%]"
        />
      </div>

      {/* ✅ SECTION */}
      <section className="w-full bg-[#2677a7] pb-20 mt-0 lg:mt-70">
        <div className="w-full">
          <div className="relative grid grid-cols-1 lg:grid-cols-[2fr_3fr]">
            
            {/* LEFT PANEL */}
            <div
              className="relative z-10 flex items-center px-6 py-6 sm:px-10 lg:px-44"
              data-aos="fade-right"
            >
              <div className="relative max-w-[960px]">
                <h2
                  className="font-sans text-[26px] font-light leading-[1.4] tracking-[0.14em] text-white sm:text-[46px]"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  BLUEDOOR CAFÉ & BISTRO
                </h2>

                <p
                  className="mt-6 text-[14px] leading-[1.9] text-white/95"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Bluedoor Cafe and Bistro brings together thoughtfully crafted
                  dishes, artisanal coffee, and a relaxed yet refined atmosphere.
                  Whether you are stopping by for brunch, an intimate dinner, or
                  a special gathering, every plate is served with warmth and
                  attention to detail.
                </p>

                <div
                  className="mt-10"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <Link href="#">
                    <AnimatedButton
                      label="READ MORE"
                      color="#d2e1f8"
                      hoverColor="#caa36a"
                    />
                  </Link>
                </div>
              </div>
            </div>

            {/* DESKTOP IMAGE */}
            <div
              className="relative hidden min-h-[320px] overflow-hidden lg:block lg:min-h-[720px] -mt-30"
              data-aos="fade-left"
            >
              <Image
                src={plateImg}
                alt="Event"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-[center_10%]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
