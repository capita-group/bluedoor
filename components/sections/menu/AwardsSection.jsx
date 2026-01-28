// components/AwardsSection.jsx
"use client";

import Image from "next/image";

export default function AwardsSection() {
  return (
    <section className="relative w-full overflow-hidden py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2">

          {/* LEFT CONTENT */}
          <div className="relative z-10 max-w-xl">
            {/* Faded background heading */}
            <h2 className="pointer-events-none absolute -top-16 left-0 select-none font-serif text-[64px] sm:text-[80px] tracking-[0.35em] text-[#2677a7]/15">
              AWARDS
            </h2>

            <div className="relative mt-20">
              <h3 className="text-2xl sm:text-3xl font-light uppercase tracking-[0.35em] text-[#2677a7]">
                The Best
                <br />
                Restaurante
              </h3>

              <ul className="mt-8 space-y-5 text-sm sm:text-[15px] leading-7 text-[#2677a7]/75">
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

          {/* RIGHT IMAGE */}
          <div className="relative">
            {/* curved image mask */}
            <div className="relative h-[480px] sm:h-[520px] lg:h-[620px] w-full overflow-hidden rounded-[0_260px_0_0]">
              <Image
                src="/img/plate.jpg"
                alt="Award Dish"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* handwritten / callout text */}
            <div
              className="absolute bottom-6 -left-26 -rotate-12 max-w-xs text-5xl text-[#eb9539] italic"
              style={{ fontFamily: "var(--font-mrs-saint)" }}
            >
              Book private dining
              <br />
              &amp; banquet rooms
            </div>
          </div>

        </div>
      </div>

      {/* subtle bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#2677a7]/10 to-transparent" />
    </section>
  );
}
