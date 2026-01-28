"use client";

import Image from "next/image";
import Link from "next/link";

export default function EventHero() {
  return (
    <>
      {/* ✅ MOBILE IMAGE (OUTSIDE the section) */}
      <div className="relative block min-h-[260px] w-full overflow-hidden lg:hidden">
        <Image
          src="/img/plate.jpg"
          alt="Event"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_10%]"
        />
      </div>

      {/* ✅ SECTION (text only on mobile, text+image on desktop) */}
      <section className="w-full bg-[#2677a7] pb-20 mt-0 lg:mt-70">

        <div className="w-full">
          <div className="relative grid grid-cols-1 lg:grid-cols-[2fr_3fr]">

            {/* LEFT PANEL */}
            <div className="relative z-10 flex items-center px-6 py-6 sm:px-10 lg:px-44">
              <div className="absolute inset-0" />

              <div className="relative max-w-[460px]">
                <h2 className="font-sans text-[34px] font-light leading-[1.1] tracking-[0.14em] text-white sm:text-[44px] lg:text-[52px]">
                  FIDALGO PLAYS
                  <br />
                  HOST TO EVENTS
                </h2>

                <p className="mt-6 text-[14px] leading-[1.9] text-white/95">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>

                <Link
                  href="#"
                  className="mt-10 inline-flex h-12 items-center justify-center border border-[#d2e1f8] px-10 text-[11px] font-semibold tracking-[0.28em] text-white transition-all duration-300 hover:-translate-y-[1px] hover:border-[#caa36a]"
                >
                  READ MORE
                </Link>
              </div>
            </div>

            {/* ✅ DESKTOP IMAGE (hidden on mobile) */}
            <div className="relative hidden min-h-[320px] overflow-hidden lg:block lg:min-h-[720px] -mt-30">
              <div className="absolute inset-0">
                <Image
                  src="/img/plate.jpg"
                  alt="Event"
                  fill
                  priority
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover object-[center_10%]"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
