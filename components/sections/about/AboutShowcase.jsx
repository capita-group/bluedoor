// components/AboutShowcase.jsx
"use client";

import Image from "next/image";

export default function AboutShowcase() {
  return (
    <section className="relative w-full py-10 sm:py-16 md:py-20 lg:py-32 mb-20">
      <div className="relative mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        {/* keep large layout exactly: lg:grid-cols-12 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-8 lg:gap-0">
          
          {/* VIDEO - top on mobile, left on lg */}
          <div className="relative lg:col-span-4 z-30 order-1 lg:order-1">
            <div className="relative h-[220px] sm:h-[300px] md:h-[380px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px] w-full overflow-hidden rounded-lg lg:rounded-none">
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

          {/* CONTENT - middle & centered on mobile, original overlap on lg */}
          <div className="relative lg:col-span-4 z-10 order-2 lg:order-2 flex justify-center lg:block lg:-mx-10 xl:-mx-14 2xl:-mx-16">
            <div className="w-full max-w-[560px] lg:max-w-none">
              <div className="bg-[#2677a7] text-center px-4 sm:px-6 md:px-7 lg:px-10 xl:px-16 2xl:px-22 py-7 sm:py-8 md:py-10 lg:py-16 xl:py-24 2xl:py-52 shadow-xl rounded-lg lg:rounded-none">
                
                <h2 className="mt-4 sm:mt-5 lg:mt-5 xl:mt-6 2xl:mt-8 text-base sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl 2xl:text-[38px] leading-tight tracking-[0.15em] sm:tracking-[0.18em] md:tracking-[0.2em] lg:tracking-[0.2em] xl:tracking-[0.22em] 2xl:tracking-[0.25em] text-white uppercase">
                  THE HOME OF FINE DINING,
                  <br />
                  COFFEE &amp; GOOD VIBES
                </h2>

                {/* Ornament */}
                <div className="mt-4 sm:mt-6 flex justify-center">
                  <div className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-white/40 grid place-items-center">
                    <div className="h-3 w-3 rotate-45 border border-white/60" />
                  </div>
                </div>

                <p className="mx-auto mt-5 sm:mt-6 max-w-md text-[14px] leading-6 sm:leading-7 text-white/80">
                  At Blue Door Cafe & Bistro, we blend artisanal coffee culture with exquisite 
                  bistro dining. Our passion for quality ingredients, warm hospitality, and 
                  cozy ambiance creates the perfect setting for breakfast meetings, 
                  leisurely lunches, and intimate dinners. Every cup, every plate tells 
                  a story of craftsmanship and care.
                </p>

                <a
                  href="/book"
                  className="mt-7 sm:mt-8 inline-flex items-center justify-center border border-white bg-transparent px-7 sm:px-9 py-2.5 sm:py-3 text-[11px] sm:text-xs tracking-[0.2em] text-white uppercase hover:bg-white hover:text-[#1a365d] transition duration-300 font-medium"
                >
                  RESERVE A TABLE
                </a>
              </div>
            </div>
          </div>

          {/* IMAGE - bottom on mobile, right on lg */}
          <div className="relative lg:col-span-4 z-30 order-3 lg:order-3">
            <div className="relative h-[220px] sm:h-[300px] md:h-[380px] lg:h-[450px] xl:h-[550px] 2xl:h-[650px] w-full overflow-hidden rounded-lg lg:rounded-none">
              <Image
                src="/img/connect (4).jpg"
                alt="Blue Door Cafe & Bistro interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 33vw"
                priority
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}