// components/AwardsSection.jsx
"use client";

import Image from "next/image";

export default function AwardsSection() {
  return (
    <section className="relative w-full overflow-hidden py-14 sm:py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-14 items-center">

          {/* IMAGE — TOP ON MOBILE */}
          <div className="relative order-1 lg:order-2">
            <div className="relative h-[320px] sm:h-[420px] lg:h-[620px] w-full overflow-hidden rounded-[0_160px_0_0] sm:rounded-[0_220px_0_0] lg:rounded-[0_260px_0_0]">
              <Image
                src="/img/award.jpeg"
                alt="Award Dish"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-[#1473a5]/30" />
            </div>

            {/* handwritten text */}
            <div
              className="
                mt-6 text-center
                text-[34px] sm:text-[48px]
                leading-[0.95]
                text-[#eb9539] italic
                lg:absolute lg:bottom-6 lg:-left-10 lg:mt-0 lg:-rotate-12 lg:text-left lg:text-6xl
              "
              style={{ fontFamily: "var(--font-mrs-saint)" }}
            >
              Book private dining
              <br />
              &amp; banquet rooms
            </div>
          </div>

          {/* CONTENT — CENTERED ON MOBILE */}
          <div className="relative order-2 lg:order-1 flex justify-center lg:justify-start">
            <div className="relative z-10 max-w-xl text-center lg:text-left">

              {/* background heading (desktop only) */}
              <h2 className="pointer-events-none absolute -top-16 left-0 hidden select-none font-serif text-[80px] tracking-[0.35em] text-[#2677a7]/15 lg:block">
                AWARDS
              </h2>

              <div className="relative lg:mt-20">
                <h3 className="text-[22px] sm:text-3xl font-light uppercase tracking-[0.22em] sm:tracking-[0.35em] text-[#2677a7] leading-snug">
                  The Best
                  <br />
                  Restaurante
                </h3>

                <ul className="mt-6 sm:mt-8 space-y-4 sm:space-y-5 text-[13px] sm:text-[15px] leading-7 text-[#2677a7]/75">
                  <li>Le Chef 2021: 100 Chefs</li>
                  <li>
                    The Best Chef Awards:
                    <br />
                    <span className="opacity-90">#86, Ambassador 2020</span>
                  </li>
                  <li>
                    World Gourmet Series Awards of Excellence
                    <br />
                    <span className="opacity-90">2020: Chef of the Year</span>
                  </li>
                  <li>Le Chef 2019: 100 Chefs</li>
                  <li>European Young Chef Award 2023</li>
                  <li>National Chef of the Year</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-20 bg-gradient-to-t from-[#2677a7]/10 to-transparent" />
    </section>
  );
}