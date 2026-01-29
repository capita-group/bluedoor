// components/GoalsHistoryUI.jsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import AnimatedButton from "@/components/ui/AnimatedButton";

export default function GoalsHistoryUI() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });
  }, []);

  return (
    <section className="relative w-full overflow-hidden py-16 lg:py-24 xl:py-28 2xl:py-32">
      {/* Decorative arc */}
      <div
        data-aos="zoom-out"
        className="pointer-events-none absolute -right-12 -top-12 sm:-right-20 sm:-top-20 lg:-right-24 lg:-top-24 h-40 w-40 sm:h-56 sm:w-56 lg:h-64 lg:w-64 rounded-full border-[10px] sm:border-[12px] lg:border-[14px] border-[#d9a36b]/70 bg-transparent opacity-60"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end gap-10 lg:gap-12 xl:gap-14">
          {/* LEFT BIG IMAGE */}
          <div
            data-aos="fade-right"
            className="flex justify-center lg:justify-start"
          >
            <div
              className="
                relative
                w-full
                max-w-[500px]
                sm:w-[300px]
                lg:w-[400px]
                xl:w-[500px]
                h-[320px]
                sm:h-[420px]
                md:h-[520px]
                lg:h-[72vh]
                xl:h-[80vh]
                2xl:h-[86vh]

                overflow-hidden

                rounded-tr-none rounded-br-none rounded-bl-none
                rounded-tl-[140px]
                sm:rounded-tl-[180px]
                md:rounded-tl-[220px]
                lg:rounded-tl-[260px]
                xl:rounded-tl-[280px]
              "
            >
              <video
                src="/video/goal.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </div>

          {/* RIGHT CONTENT SECTION */}
          <div
            className="
              relative
              w-full

              px-0
              lg:px-0

              /* ✅ responsive lift (safe across devices) */
              translate-y-0
              md:-translate-y-10
              lg:-translate-y-16
              xl:-translate-y-28
              2xl:-translate-y-32
            "
          >
            {/* TOP BLOCK */}
            <div
              data-aos="fade-left"
              className="
                max-w-xl
                mx-auto lg:mx-0

                /* ✅ responsive left offset without non-tailwind values */
                sm:mt-10
                lg:ml-10
                xl:ml-14
                2xl:ml-20

                text-center lg:text-left
              "
            >
              <p className="text-xl sm:text-2xl font-bold tracking-[0.22em] sm:tracking-[0.28em] lg:tracking-[0.35em] text-[#1473a5]/75">
                OUR GOALS &amp; HISTORY
              </p>

              <p className="mt-4 text-[14px] sm:text-[16px] leading-7 text-black/55">
                Bluedoor was founded with a simple philosophy — to create a
                warm, inviting space where thoughtful cuisine, handcrafted
                flavors, and genuine hospitality come together. What began as a
                passion for honest cooking has grown into a dining experience
                shaped by tradition, creativity, and care.
              </p>

              {/* If you want the second paragraph back, paste it here */}

              <div
                data-aos="fade-up"
                data-aos-delay="150"
                className="mt-6 flex justify-center lg:justify-start"
              >
                <Link href="/about">
                  <AnimatedButton
                    label="DISCOVER OUR STORY"
                    color="#0c71a1"
                    hoverColor="#d97706"
                  />
                </Link>
              </div>
            </div>

            {/* BOTTOM BLOCK: image + handwritten text */}
            <div className="mt-10 lg:mt-12 relative flex items-end justify-center lg:justify-start">
              <div
                data-aos="zoom-in"
                className="relative lg:translate-y-20 xl:translate-y-28 2xl:translate-y-32"
              >
                {/* IMAGE */}
                <div
                  className="
                    relative
                    z-10
                    h-[220px] w-[220px]
                    sm:h-[320px] sm:w-[320px]
                    lg:h-[360px] lg:w-[360px]
                    xl:h-[400px] xl:w-[400px]
                    overflow-hidden
                  "
                >
                  <Image
                    src="/img/our.jpg"
                    alt="Dish"
                    fill
                    className="object-cover"
                  />
                </div>

                {/* TEXT (✅ mobile below image, ✅ lg overlap right) */}
                <p
                  data-aos="fade-up"
                  data-aos-delay="250"
                  className="
                    pointer-events-none
                    absolute
                    z-30
                    rotate-[-18deg]
                    text-[#eb9539]
                    leading-[1.05]
                    whitespace-nowrap

                    /* mobile: below image */
                    left-[100%] -translate-x-1/2
                    top-full -mt-20
                    text-[20px]
                    sm:text-[34px]

                    /* lg+: overlap to right */
                    lg:top-auto lg:mt-0
                    lg:left-auto lg:translate-x-0
                    lg:bottom-8 lg:-right-25
                    xl:bottom-10 xl:-right-46
                    2xl:bottom-10 2xl:-right-60
                    lg:text-[50px]
                    xl:text-[64px]
                  "
                  style={{ fontFamily: "var(--font-mrs-saint)" }}
                >
                  Book private dining <br />
                  &amp; banquet rooms
                </p>
              </div>
            </div>

            {/* subtle right-side spacing like screenshot */}
            <div className="pointer-events-none absolute -right-10 top-0 hidden h-full w-10 lg:block" />
          </div>
        </div>
      </div>
    </section>
  );
}
