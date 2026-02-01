// components/EventHero.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

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
    <div className="w-full overflow-hidden">
      {/* ✅ MOBILE IMAGE */}
      <div
        className="relative block h-[260px] w-full overflow-hidden lg:hidden"
        data-aos="zoom-in"
      >
        <Image
          src={plateImg}
          alt="Event"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      {/* ✅ SECTION */}
      <section className="relative w-full overflow-hidden bg-[#2677a7] py-16 sm:py-20">
        <div className="mx-auto max-w-[1600px] px-6 sm:px-10 lg:px-16">
          <div className="relative grid grid-cols-1 lg:grid-cols-2 overflow-hidden">
            
            {/* LEFT PANEL */}
            <div
              className="relative z-10 flex items-center"
              data-aos="fade-right"
            >
              <div className="max-w-[720px]">
                <h2
                  className="
                    font-sans font-light tracking-[0.14em] text-white
                    text-[22px] sm:text-[32px] lg:text-[44px]
                    leading-snug
                  "
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  BLUEDOOR CAFÉ & BISTRO
                </h2>

                <p
                  className="
                    mt-6 text-white/95
                    text-[13px] sm:text-[14px] lg:text-[15px]
                    leading-[1.9]
                  "
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
              className="
                relative hidden lg:block
                h-[520px] xl:h-[640px]
                overflow-hidden
              "
              data-aos="fade-left"
            >
              <Image
                src={plateImg}
                alt="Event"
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
