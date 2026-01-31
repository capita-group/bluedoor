// components/ChefsSection.jsx
"use client";

import Image from "next/image";

export default function ChefsSection() {
  return (
    <section className="relative w-full overflow-hidden py-12 sm:py-16 lg:py-24">
      {/* vertical glow line 1 */}
      <div className="pointer-events-none absolute inset-y-0 left-[40%] hidden w-px lg:block">
        <span className="absolute inset-0 bg-[#2677a7]/20" />
        <span className="absolute left-1/2 top-0 h-28 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#2677a7] to-transparent animate-glow-travel" />
      </div>

      {/* vertical glow line 2 */}
      <div className="pointer-events-none absolute inset-y-0 left-[60%] hidden w-px lg:block">
        <span className="absolute inset-0 bg-[#2677a7]/20" />
        <span className="absolute left-1/2 top-0 h-28 w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#2677a7] to-transparent animate-glow-travel delay-2000" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-12">
          {/* LEFT */}
          <div className="relative">
            <div className="relative mx-auto w-full max-w-[420px] sm:max-w-[520px] lg:max-w-[560px] overflow-hidden bg-black/5 shadow-[0_30px_60px_rgba(0,0,0,0.25)]">
              <div className="relative aspect-[4/5] w-full">
                <Image
                  src="/img/chef.jpeg"
                  alt="Chef"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            {/* faint background word */}
            <div className="pointer-events-none absolute -top-10 sm:-top-16 lg:-top-24 left-0 right-0 hidden select-none lg:block">
              <p className="text-center font-serif text-[52px] xl:text-[94px] tracking-[0.22em] text-[#2677a7]/15">
                CHEF&apos;S
              </p>
            </div>

            {/* content */}
            <div className="relative mx-auto max-w-xl lg:mx-0 lg:pl-14 xl:pl-20 pt-2 sm:pt-4 lg:pt-10 text-center lg:text-left">
              <h2 className="text-[20px] sm:text-3xl lg:text-4xl font-light uppercase leading-snug tracking-[0.14em] sm:tracking-[0.18em] text-[#2677a7]">
                Only the Finest Food{" "}
                <span className="text-[#2677a7]/90">&amp; Great Service</span>
              </h2>

              <p className="mt-4 sm:mt-6 mx-auto lg:mx-0 max-w-md text-[13px] sm:text-[15px] leading-7 text-[#2677a7]/75">
                With a passion for excellence and an eye for detail, Chef
                Hossain creates dishes that celebrate quality, balance, and
                authenticity. His dedication to fresh ingredients and thoughtful
                presentation ensures every plate tells a story of taste, care,
                and craftsmanship.
              </p>

              {/* signature */}
              <div className="mt-10 sm:mt-12">
                <div className="flex flex-col items-center lg:items-start">
                  <span
                    className="text-[36px] sm:text-[42px] leading-none text-[#2677a7] opacity-90 -rotate-12"
                    style={{ fontFamily: "var(--font-mrs-saint)" }}
                  >
                    Hossain
                  </span>

                  <p className="mt-2 text-[10px] sm:text-[11px] tracking-[0.35em] text-[#2677a7]/80">
                    EXECUTIVE CHEF
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 sm:h-24 bg-gradient-to-t from-[#2677a7]/10 to-transparent" />
    </section>
  );
}