// components/InstagramStrip.jsx
"use client";

import Image from "next/image";

const photos = [
  { src: "/img/drink1.jpg", alt: "Instagram 1", rotate: -6, y: 10 },
  { src: "/img/drink2.jpg", alt: "Instagram 2", rotate: -2, y: 0 },
  { src: "/img/drink3.jpg", alt: "Instagram 3", rotate: 3, y: 18 },
  { src: "/img/drink4.jpg", alt: "Instagram 4", rotate: 1, y: 2 },
  { src: "/img/drink5.jpg", alt: "Instagram 5", rotate: 6, y: 12 },
];

export default function InstagramStrip() {
  return (
    <section className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        {/* TITLE */}
        <div className="text-center">
          <h2 className="text-[20px] sm:text-[26px] lg:text-[34px] tracking-[0.45em] uppercase text-[#2677a7]">
            Instagram
          </h2>
        </div>

        {/* IMAGES */}
        <div className="mt-10 sm:mt-12 lg:mt-14">
          <div className="relative mx-auto flex w-full max-w-6xl items-center justify-center gap-6 sm:gap-8 lg:gap-10">
            {photos.map((p, i) => (
              <figure
                key={i}
                className={[
                  "relative shrink-0 overflow-hidden bg-white",
                  "shadow-[0_30px_70px_-40px_rgba(0,0,0,0.6)]",
                  "transition-transform duration-500 hover:scale-[1.03] hover:-translate-y-1",
                  "h-[170px] w-[210px] sm:h-[220px] sm:w-[280px] lg:h-[270px] lg:w-[330px]",
                  i === 0 ? "hidden sm:block" : "",
                  i === 4 ? "hidden md:block" : "",
                ].join(" ")}
                style={{
                  transform: `rotate(${p.rotate}deg) translateY(${p.y}px)`,
                }}
              >
                <Image
                  src={p.src}
                  alt={p.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 70vw, 330px"
                />
              </figure>
            ))}
          </div>
        </div>

        {/* FOOTER TEXT */}
        <p className="mt-16 text-center text-[10px] sm:text-[16px] tracking-[0.35em] uppercase text-[#2677a7]/80">
          Inspired by you, always — #restaurant
        </p>
      </div>
    </section>
  );
}
