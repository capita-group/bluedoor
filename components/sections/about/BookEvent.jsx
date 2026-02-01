// components/BookEvent.jsx
"use client";

import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

// ✅ import image from /public
import corporate from "@/public/img/corporate.jpg";
import celebration from "@/public/img/celebration.jpg";
import wedding from "@/public/img/wedding.jpg";

const events = [
  {
    image: celebration,
    title: "Celebrations",
    date: "Friday, 21 Nov",
    time: "Reservations 12pm To 1.30pm",
    variant: "rect",
    aos: "fade-right",
  },
  {
    image: wedding,
    title: "Weddings",
    date: "Monday, 17 Nov",
    time: "Reservations 1pm To 3.30pm",
    variant: "arch",
    aos: "zoom-in",
  },
  {
    image: corporate,
    title: "Corporate",
    date: "Wednesday, 26 Nov",
    time: "Reservations 3pm To 5.30pm",
    variant: "rect",
    aos: "fade-left",
  },
];

export default function BookEvent() {
  useEffect(() => {
    AOS.init({
      duration: 900,
      once: true,
      easing: "ease-out-cubic",
      offset: 80,
    });
  }, []);

  return (
    <section className="relative w-full py-14 sm:py-18 lg:py-28 mt-28 sm:mt-32 lg:mt-40 overflow-hidden">
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-10">
        {/* HEADER */}
        <div
          className="mx-auto mb-10 sm:mb-14 lg:mb-16 max-w-2xl text-center"
          data-aos="fade-up"
        >
          <h2 className="text-[18px] sm:text-[26px] lg:text-[38px] font-semibold tracking-[0.28em] sm:tracking-[0.32em] text-[#2677a7] uppercase">
            Book Your Event
          </h2>

          <p className="mt-4 text-sm sm:text-[15px] leading-6 text-[#2677a7]/80">
            At{" "}
            <span className="font-medium text-[#2677a7]">
              Bluedoor Café &amp; Bistro
            </span>
            , we create unforgettable moments with refined dining, handcrafted
            cocktails, and a warm, elegant atmosphere—perfect for celebrations,
            weddings, and corporate gatherings.
          </p>
        </div>

        {/* CONTENT */}
        <div className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-3 lg:gap-16 items-start">
          {events.map((e) => (
            <EventCard key={e.title} {...e} />
          ))}
        </div>
      </div>
    </section>
  );
}

function EventCard({ image, title, date, time, variant, aos }) {
  const isArch = variant === "arch";

  return (
    <article className="group text-center" data-aos={aos}>
      {/* IMAGE */}
      <div className="mx-auto w-full">
        <div
          className={[
            "relative overflow-hidden bg-black/10",
            "transition-transform duration-500 group-hover:scale-[1.02]",
            // ✅ responsive heights (mobile -> 2xl)
            isArch
              ? "mx-auto w-full max-w-[420px] h-[280px] xs:h-[320px] sm:h-[380px] md:h-[420px] lg:h-[520px] rounded-t-[420px] rounded-b-none"
              : "mx-auto w-full max-w-[420px] h-[300px] xs:h-[340px] sm:h-[420px] md:h-[460px] lg:h-[600px] rounded-md",
          ].join(" ")}
          style={
            isArch
              ? {
                  clipPath:
                    "polygon(0% 26%, 6% 14%, 14% 6%, 25% 0%, 50% 0%, 75% 0%, 86% 6%, 94% 14%, 100% 26%, 100% 100%, 0% 100%)",
                }
              : undefined
          }
        >
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 60vw, 33vw"
            priority={isArch}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 opacity-70" />
        </div>
      </div>

      {/* TEXT */}
      <h3 className="mt-7 sm:mt-8 text-[14px] sm:text-[17px] lg:text-[18px] tracking-[0.28em] sm:tracking-[0.35em] uppercase text-[#2677a7]">
        {title}
      </h3>

      <p className="mt-3 text-xs sm:text-[13px] text-[#2677a7]/80">{date}</p>
      <p className="mt-1 text-xs sm:text-[13px] text-[#2677a7]/70">{time}</p>
    </article>
  );
}