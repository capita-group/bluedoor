// components/AboutShowcase.jsx
"use client";

import Image from "next/image";

export default function AboutShowcase() {
  return (
    <section className="relative w-full py-10 sm:py-16 md:py-20 lg:py-32 mb-20">
      <div className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* Main Grid Container - Works for all screen sizes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          
          {/* LEFT VIDEO - Position changes based on screen */}
          <div className="relative lg:col-span-4 z-30 order-1 lg:order-1">
            <div className="relative h-[220px] xs:h-[240px] sm:h-[300px] md:h-[380px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px] w-full overflow-hidden rounded-lg lg:rounded-none">
              <video
                src="/video/about.mp4" 
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          {/* CENTER CONTENT - Always in middle */}
          <div className="relative lg:col-span-4 z-10 order-2 lg:order-2 lg:-mx-10 xl:-mx-14 2xl:-mx-16">
            <div className="bg-[#2677a7] text-center px-4 xs:px-5 sm:px-6 md:px-7 lg:px-10 xl:px-16 2xl:px-22 py-7 sm:py-8 md:py-10 lg:py-16 xl:py-24 2xl:py-52 shadow-xl rounded-lg lg:rounded-none">
              
              

              <h2 className="mt-2 xs:mt-3 sm:mt-4 md:mt-5 lg:mt-5 xl:mt-6 2xl:mt-8 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-[38px] leading-tight tracking-[0.13em] xs:tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] lg:tracking-[0.2em] xl:tracking-[0.22em] 2xl:tracking-[0.25em] text-white uppercase">
                THE HOME OF FINE DINING,
                <br className="hidden xs:block" />
                COFFEE &amp; GOOD VIBES
               
              </h2>

              {/* Ornament */}
              <div className="mt-3 xs:mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-8 2xl:mt-10 flex justify-center">
                <div className="h-5 w-5 xs:h-6 xs:w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 lg:h-8 lg:w-8 xl:h-9 xl:w-9 2xl:h-10 2xl:w-10 rounded-full border border-white/40 grid place-items-center">
                  <div className="h-1.5 w-1.5 xs:h-2 xs:w-2 sm:h-2.5 sm:w-2.5 md:h-3 md:w-3 lg:h-3 lg:w-3 xl:h-3.5 xl:w-3.5 2xl:h-4 2xl:w-4 rotate-45 border border-white/60" />
                </div>
              </div>

              <p className="mx-auto mt-3 xs:mt-4 sm:mt-5 md:mt-6 lg:mt-6 xl:mt-8 2xl:mt-10 max-w-xs xs:max-w-sm sm:max-w-md lg:max-w-sm xl:max-w-md text-[14px]  leading-4 xs:leading-5 sm:leading-6 md:leading-6 lg:leading-6 xl:leading-7 2xl:leading-8 text-white/80">
                At Blue Door Cafe & Bistro, we blend artisanal coffee culture with exquisite 
                bistro dining. Our passion for quality ingredients, warm hospitality, and 
                cozy ambiance creates the perfect setting for breakfast meetings, 
                leisurely lunches, and intimate dinners. Every cup, every plate tells 
                a story of craftsmanship and care.
              </p>

              <a
                href="/book"
                className="mt-5 xs:mt-6 sm:mt-7 md:mt-8 lg:mt-8 xl:mt-10 2xl:mt-12 inline-flex items-center justify-center border border-white bg-transparent px-5 xs:px-6 sm:px-7 md:px-8 lg:px-9 xl:px-10 2xl:px-12 py-1.5 xs:py-2 sm:py-2.5 md:py-3 lg:py-2.5 xl:py-3 2xl:py-3.5 text-[9px] xs:text-[10px] sm:text-[11px] md:text-xs lg:text-xs xl:text-sm 2xl:text-base tracking-[0.13em] xs:tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] lg:tracking-[0.2em] xl:tracking-[0.22em] text-white uppercase hover:bg-white hover:text-[#1a365d] transition duration-300 font-medium"
              >
                RESERVE A TABLE
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE - Position changes based on screen */}
          <div className="relative lg:col-span-4 z-30 order-3 lg:order-3">
            <div className="relative h-[220px] xs:h-[240px] sm:h-[300px] md:h-[380px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px] w-full overflow-hidden rounded-lg lg:rounded-none">
              <Image
                src="/img/connect (4).jpg"
                alt="Blue Door Cafe & Bistro interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, (min-width: 1024px) 33vw, (min-width: 1280px) 25vw, (min-width: 1536px) 20vw"
                priority
              />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}